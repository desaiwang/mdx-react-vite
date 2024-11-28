// src/components/BlogPost.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams(); // Extract slug from the URL
  const [PostContent, setPostContent] = useState(null);

  useEffect(() => {
    console.log(`./posts/${slug}.mdx`);
    import(`./posts/${slug}.mdx`)
      .then((module) => setPostContent(() => module.default))
      .catch(() => setPostContent(() => () => <p>Post not found!</p>));
  }, [slug]);

  return <div>{PostContent ? <PostContent /> : <p>Loading...</p>}</div>;
};

export default BlogPost;
