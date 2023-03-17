import React, { useEffect } from "react";
import styles from "./ContentPage.module.css";
import articlesJSON from "../../data/Points of Interest Articles.json";
import { useRouter } from "next/router";
import Link from "next/link";
const ContentPage = () => {
  const [data, setData] = React.useState([]);
  let query = useRouter().asPath.split("/")[1].replaceAll("_", " ");
  function fetchArticles() {
    if (query == "[id]") {
      query = window.location.pathname.split("/")[1].replaceAll("_", " ") + "?";
      const filteredData = articlesJSON.filter(
        (article) => article.Question === query
      );
      if (filteredData.length == 0) {
        query = query.split("?")[0];
        console.log(query);
      }
      setData(filteredData);
    } else {
      const filteredData = articlesJSON.filter(
        (article) => article.Question === query
      );

      setData(filteredData);
    }
  }
  useEffect(() => {
    fetchArticles();
    window.onload = () => {
      fetchArticles();
    };
  }, []);
  let i = 0;
  let dividedData = [];

  return (
    <>
      {data &&
        data.map((article, index) => (
          <div className={styles.mainContainer} key={index}>
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
            {dividedData.map((data, index) => {
              return (
                <p className={styles.detailText} key={index}>
                  {data}
                </p>
              );
            })}
            <b className={styles.learnMore}>Want to learn more?</b>
            <input
              type="text"
              placeholder="Tell me the history of... What’s an interesting story about... Who designed the..."
              className={styles.inputBox}
            />
            <div className={styles.buttonContainer}>
              <a
                href="https://minitourguide.wordpress.com/59-2/"
                target="_blank"
              >
                <button>ASK MINITOUR</button>
              </a>
            </div>
          </div>
        ))}
    </>
  );
};

export default ContentPage;
