import React from "react";
import styles from "./Blogs.module.css";
const Blogs = ({ heading, paragraph }) => {
  return (
    <div className={styles.blogsContainer}>
      <div className={styles.blogText}>
        <b className={styles.blogHeading}>{heading}</b>
        <p className={styles.blogDetail}>{paragraph.slice(0, 90)} ...</p>
      </div>
    </div>
  );
};

export default Blogs;
