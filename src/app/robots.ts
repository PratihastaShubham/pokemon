import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
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
      {
        userAgent: ["Googlebot", "Bingbot", "Yandex"],
        allow: "/",
      },
    ],
    sitemap: "https://pokemonreminiscencia.site/sitemap.xml",
    host: "pokemonreminiscencia.site",
  };
}
