import React, { useContext, useEffect } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  post: {
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  author: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "5px",
  },
  tags: {
    marginTop: "10px",
  },
  tag: {
    marginRight: "5px",
    padding: "3px 8px",
    backgroundColor: "#eee",
    borderRadius: "3px",
    fontSize: "12px",
    color: "#555",
  },
};

function Blogs() {
  const { loading, posts, fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts(1);
  }, []);

  return (
    <div style={styles.container}>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {posts.length === 0 ? (
            <div>No posts found</div>
          ) : (
            posts.map((post) => (
              <div key={post.id} style={styles.post}>
                <p style={styles.title}>{post.title}</p>
                <p style={styles.author}>
                  by: <span>{post.author}</span>
                </p>
                <p>posted on: {post.createdAt}</p>
                <p>{post.content}</p>
                <div style={styles.tags}>
                  {post.tags.map((tag, index) => (
                    <span key={index} style={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Blogs;
