import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [], errorMgs: "" };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMgs: "Error retreiving data" });
      });
  }

  render() {
    const { posts, errorMgs } = this.state;
    return (
      <div>
        List Of Post
        {posts.length
          ? posts.map((post) => (
              <div id={post.id} key={post.id}>
                {post.title}
              </div>
            ))
          : null}
        {errorMgs ? <div>{errorMgs}</div> : null}
      </div>
    );
  }
}

export default PostList;
