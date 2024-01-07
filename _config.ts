import lume from "lume/mod.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import sitemap from "lume/plugins/sitemap.ts";
import feed from "lume/plugins/feed.ts";

const site = lume({
  location: new URL("https://deutscher-cevdet.pages.dev"),
});

site.use(minifyHTML());
site.use(sitemap());
site.use(feed({
  output: ["/lesen.rss", "/lesen.json"],
  query: "type=lesen",
  sort: "date=desc",
  info: {
    title: "Deutsch mit Cevdet",
    description: "Entdecken, lernen und üben Sie die deutsche Sprache und Kultur mit Cevdet und lesen Sie eine Reihe von Texten auf verschiedenen Niveaus.",
    lang: "de",
    generator: false,
  },
  items: {
    title: "=title",
    description: "=description",
    published: "=date",
    content: "$.flow",
    lang: "de",
  },
}));

site.copy("c.css");

export default site;
