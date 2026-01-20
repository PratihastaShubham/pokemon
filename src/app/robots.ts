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
        userAgent: "Googlebot",
        allow: "/",
        disallow: [],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [],
      },
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://pokemonreminiscencia.site/sitemap.xml",
    host: "pokemonreminiscencia.site",
  };
}
