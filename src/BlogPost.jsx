// src/components/BlogPost.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

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
    <div className="flex justify-center">
      <div className="prose max-w-4xl p-6">
        {frontmatter && (
          <header>
            <h1>{frontmatter.title || "Untitled"}</h1>
            <p>{frontmatter.date}</p>
            {/* Add any additional frontmatter fields here, e.g., author, tags, etc. */}
          </header>
        )}
        {PostContent ? (
          <PostContent
            components={{
              pre({ children }) {
                const code = children.props.children.trim();
                const language =
                  children.props.className?.replace("language-", "") || "text";

                return (
                  <SyntaxHighlighter
                    // className="not-prose"
                    language={language}
                    style={dracula}
                  >
                    {code}
                  </SyntaxHighlighter>
                );
              },
              code: ({ children }) => {
                return (
                  <code className="not-prose bg-gray-200 rounded px-1 text-sm font-mono">
                    {children}
                  </code>
                );
              },
            }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
