export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: [
                '/',
                '/projects',
            ],
            disallow: '/privacy',
        },
        sitemap: 'https://jqhxnn.me/sitemap.xml',
    }
}