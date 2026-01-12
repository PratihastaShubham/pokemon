import { MetadataRoute } from 'next'

// This forces the file to be static for Cloudflare Pages
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/',
        },
        sitemap: 'https://pokemonreminiscencia.site/sitemap.xml',
    }
}
