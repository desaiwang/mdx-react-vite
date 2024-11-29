# MDX with React + Vite

MDX is an extension of Markdown that also works with React components. It is super powerful because you can write plain text for blog style content (no need to wrap everything in tags!) while also being able to define your own elements and even insert React code.

I wrote a [blog post](https://desaiwang.github.io/#/blog/mdx-react-vite) on how to set up MDX (including frontmatter parsing) with React and Vite using[@mdx-js/rollup](https://mdxjs.com/packages/rollup/) and remark. I also set up Tailwind CSS Typography for styling, and overwrite parts of it to provide custom syntax highlighting.

If you want to follow along with this tutorial, you need to install some dependencies after cloning this repo. Make sure you have a package manager like npm or yarn, and run `npm install`or `yarn install` to resolve all the packages.

You can find the example blog site created for this tutorial here: https://mdx-react-vite.vercel.app/

And if you're a visual learner, here is what the final results look like:

<div style="width: 80%;">

### Demo directory page:

  <img src="./public/BlogList.png" alt="Example Directory Page" style="width: 80%;" />

### Demo blog page:

<img src="./public/mdx-after-typography-syntaxhighlighting.png" alt="Example Blog Page" style="width: 80%;" />

</div>
