import { useEffect, useState } from "react";
import { client } from "./client";


export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const data = await client.fetch('*[_type == "post"]');
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
