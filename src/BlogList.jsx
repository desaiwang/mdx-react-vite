import { Link } from "react-router-dom";

const posts = [
  { title: "My First Post", slug: "my-first-post" },
  { title: "Another Post", slug: "another-post" },
];

const BlogList = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/${post.slug}`}
              className="text-blue-500 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
