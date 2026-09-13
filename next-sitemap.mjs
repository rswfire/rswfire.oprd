/** @type {import('next-sitemap').IConfig} */
export default {
    siteUrl: 'https://oprdvolunteerabuse.org',
    generateIndexSitemap: false,
    generateRobotsTxt: true,
    outDir: './out',
    changefreq: 'monthly',
    priority: 0.8,
    // The old /accountability addresses are kept alive as redirect stubs for
    // links already sent to the agencies; they carry noindex and must not be
    // offered to a crawler as pages. Same for the former /record page, now
    // /synthesis.
    exclude: ['/accountability', '/accountability/*', '/record'],
}
