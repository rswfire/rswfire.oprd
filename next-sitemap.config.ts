import type { IConfig } from 'next-sitemap'

const config: IConfig = {
    siteUrl: 'https://oprdvolunteerabuse.org',
    generateRobotsTxt: true,
    outDir: './out',
    changefreq: 'monthly',
    priority: 0.8,
    exclude: ['/server-sitemap.xml'],
}

export default config