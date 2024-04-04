import rss from "@astrojs/rss"

export function GET(context) {
  const postImportResult = import.meta.glob("@content/blog/**/*.md", {
    eager: true,
  })
  let posts = Object.values(postImportResult)
  posts = posts.filter((post) => {
    if (new Date() >= new Date(post.frontmatter.date)) {
      return post
    }
  })
  posts.sort(
    (a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date)
  )

  return rss({
    title: "Meadow",
    description:
      "Meadow is designed to enhance cognitive abilities by providing a robust system for organizing diverse information surrounding a particular topic.",
    site: context.site,
    items: posts.map((post) => {
      const slug = post.file.split("/").reverse()[0].replace(".md", "")
      const {
        frontmatter: { title, description, shortDescription, date, author },
      } = post
      return {
        title: title,
        pubDate: date,
        description: shortDescription || description,
        link: `/${slug}`,
      }
    }),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
    stylesheet: "/rss/styles.xsl",
  })
}
