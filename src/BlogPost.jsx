// src/components/BlogPost.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams(); // Extract slug from the URL
  const [PostContent, setPostContent] = useState(null);
  const [frontmatter, setFrontmatter] = useState(null);

  useEffect(() => {
    import(`./posts/${slug}.mdx`)
      .then((module) => {
        setPostContent(() => module.default); // Store the content of the MDX file
        setFrontmatter(() => module.frontmatter); // Frontmatter content
      })
      .catch(() => setPostContent(() => () => <p>Post not found!</p>));
  }, [slug]);

  return (
    <div className="prose max-w-4xl mx-auto p-6">
      {frontmatter && (
        <header>
          <h1>{frontmatter.title || "Untitled"}</h1>
          <p>{frontmatter.date}</p>
        </header>
      )}

      {PostContent ? <PostContent /> : <p>Loading...</p>}
    </div>
  );
};

export default BlogPost;
