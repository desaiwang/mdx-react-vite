import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [
        remarkFrontmatter, // Parse frontmatter from MDX
        remarkMdxFrontmatter, // Optional, for MDX-specific frontmatter
      ],
    }),
  ],
  base: "/mdx-react-vite/",
});
