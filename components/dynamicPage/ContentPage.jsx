import React, { useEffect } from "react";
import styles from "./ContentPage.module.css";
import articlesJSON from "../../data/Points of Interest Articles.json";
import { useRouter } from "next/router";
import Link from "next/link";
const ContentPage = () => {
  const [data, setData] = React.useState([]);
  let query = useRouter().asPath.split("/")[1].replaceAll("_", " ");
  useEffect(() => {
    const filteredData = articlesJSON.filter(
      (article) => article.Question === query
    );
    setData(filteredData);
  }, []);
  let i = 0;
  let dividedData = [];

  return (
    <>
      {data &&
        data.map((article) => (
          <div className={styles.mainContainer}>
            <h1 className={styles.firstHeading}>{article.Question}</h1>
            {(function (article) {
              while (i < article.Article.split(".").length - 1) {
                let data =
                  article.Article.split(".")[i] +
                  ". " +
                  article.Article.split(".")[i + 1] +
                  ". ";
                if (data.length > 4 && data !== undefined) {
                  dividedData.push(data);
                }
                i = i + 2;
              }
            })(article)}
            {dividedData.map((data) => {
              return <p className={styles.detailText}>{data}</p>;
            })}
            <b className={styles.learnMore}>Want to learn more?</b>
            <input
              type="text"
              placeholder="Tell me the history of... What’s an interesting story about... Who designed the..."
              className={styles.inputBox}
            />
            <div className={styles.buttonContainer}>
              <Link href={`/waitlist`}>
                <button>ASK MINITOUR</button>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default ContentPage;
