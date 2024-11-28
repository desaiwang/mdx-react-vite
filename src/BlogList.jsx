import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Dynamically import MDX files and their metadata
    const postModules = import.meta.glob("./posts/*.mdx", { eager: true });
    const postList = Object.entries(postModules).map(([path, module]) => {
      const slug = path.match(/([^/]+)\.mdx$/)[1]; // Extract the filename as slug
      return {
        slug,
        title: module.frontmatter.title,
        date: module.frontmatter.date,
        description: module.frontmatter.description,
        image: module.frontmatter.image,
        tags: module.frontmatter.tags,
      };
    });
    setPosts(postList);
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            {post.image && (
              <img
                style={{ maxWidth: "300px", height: "auto" }}
                src={post.image}
                alt={post.title}
              />
            )}
            <p>Published on {new Date(post.date).toLocaleDateString()}</p>
            <p>{post.description}</p>
            {post.tags && (
              <div>
                {post.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
