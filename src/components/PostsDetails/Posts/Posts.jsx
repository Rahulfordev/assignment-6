import { useEffect, useState } from "react";
import Post from "../Post/Post";
import './posts.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [setPosts]);
  return (
    <section>
      <h1 style={{ fontSize: "2rem" }}>Posts</h1>
      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
