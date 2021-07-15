import axios from "axios";
import React, { useState, useEffect } from "react";

function DataFectching() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}

export default DataFectching;
