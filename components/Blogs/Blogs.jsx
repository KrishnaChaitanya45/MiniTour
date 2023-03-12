import React from "react";
import styles from "./Blogs.module.css";
const Blogs = ({ image, heading, paragraph }) => {
  return (
    <div className={styles.blogsContainer}>
      <img
        src={
          image
            ? image
            : "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        }
        alt="Blogs"
      />
      <div className={styles.blogText}>
        <b className={styles.blogHeading}>{heading}</b>
        <p className={styles.blogDetail}>{paragraph.slice(0, 90)} ...</p>
      </div>
    </div>
  );
};

export default Blogs;
