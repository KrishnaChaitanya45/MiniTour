import React, { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import styles from "./FirstSection.module.css";
import articles from "../../data/Points of Interest Articles.json";
import Link from "next/link";
const FirstSection = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(articles);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.firstHeading}>
        Living artifacts of the world around you
      </h1>
      <p className={styles.detailText}>
        Our goal is to go beyond reviews, stars, and hours of operation -
        providing only the most interesting fact or story about every
        restaurant, landmark, and fun activity San Francisco has to offer.
      </p>

      <p className={styles.detailText}>
        Have follow-ups? Interact with each article, asking the real
        hard-hitting questions!
      </p>
      <b className={styles.storiesBelow}>
        Check out some of our stories below!
      </b>
      <div className={styles.blogsContainer}>
        {data &&
          data.map((article, index) => (
            <div key={Math.random().toString()}>
              <Link href={`/${article.Question.replaceAll(" ", "_")}`}>
                <Blogs heading={article.Question} paragraph={article.Article} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirstSection;
