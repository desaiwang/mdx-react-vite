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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link
              to={`/${post.slug}`}
              className="text-blue-500 hover:underline"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </Link>
            {post.image && (
              <img
                style={{ maxWidth: "300px", height: "auto" }}
                src={post.image}
                alt={post.title}
              />
            )}
            <p className="text-gray-600 text-sm">
              Published on {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="text-gray-800">{post.description}</p>
            {post.tags && (
              <div className="mt-2 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded"
                  >
                    #{tag}
                  </span>
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
