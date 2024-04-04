This is a website built on the [Astro](https://astro.build/) framework.

## Notes for Content Editors

Blog posts are located in `/src/components/blog`.

Each blog post is a Markdown file. It can be placed directly in the `blog` directory or contained within a subdirectory (this can be helpful if the blog post contains images).

The names of subdirectories are only used for organizational purposes. The name of the Markdown file is used to create the URL of the blog post.

Images should be placed in subdirectories with the Markdown files. This way, they are processed and optimized (automatically converted to WebP).

Posts are sorted by date, which can be specified in the `date` field in the Markdown file. You can set a future date to make the post a draft (it won’t be displayed on the blog).

## Local Development

To run the project locally:

1. Make sure you have [Node.js](https://nodejs.org) installed (version 18.14.1 or higher). Type `node -v` to check which version is installed.
2. Navigate to the project root in a terminal.
3. Install dependencies: `npm install` (this is a one-time step).
4. Start the local development server: `npm run dev`.
5. To view the site, go to `http://localhost:4321` in a web browser.
6. To stop the local development server, press `Ctrl+C`.

After the initial installation, repeat steps 4-6 as needed.
