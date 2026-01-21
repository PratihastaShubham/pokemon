import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all normal crawlers, block API routes
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },

      // Block AI training and large-scale data bots
      {
        userAgent: [
          "Amazonbot",
          "Applebot-Extended",
          "Bytespider",
          "CCBot",
          "ClaudeBot",
          "Google-Extended",
          "GPTBot",
          "meta-externalagent",
        ],
        disallow: "/",
      },
    ],
    sitemap: "https://pokemonreminiscencia.site/sitemap.xml",
    host: "pokemonreminiscencia.site",
  };
}
