import metaConfig from '@/utils/metaConfig';

const BASE_URL = 'https://roadsaudio.com';

function generateSiteMap() {
  // Get all routes from metaConfig, excluding 'default' and low-priority pages
  const routes = Object.keys(metaConfig).filter(
    (route) => route !== 'default' && route !== '/delete-account'
  );

  // Static pages (exclude /download as it's a redirect)
  const staticPages = ['/'];

  // Combine all pages
  const allPages = [...new Set([...staticPages, ...routes])];

  // Priority settings:
  // 1.0 = Homepage
  // 0.9 = Use case pages (/travel, /college) - landing pages for specific audiences
  // 0.8 = Blogs (SEO-focused content)
  // 0.7 = /blogs index page
  const getPriority = (route) => {
    if (route === '/') return '1.0';
    if (route === '/travel' || route === '/college') return '0.9';
    if (route.startsWith('/blogs/')) return '0.8';
    if (route === '/blogs') return '0.7';
    return '0.5';
  };

  // Change frequency - realistic estimates
  const getChangeFreq = (route) => {
    if (route === '/') return 'monthly'; // Homepage updated occasionally
    if (route.startsWith('/blogs/')) return 'yearly'; // Blog posts rarely change after publish
    if (route === '/blogs') return 'weekly'; // Index updates when new posts added
    return 'monthly';
  };

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${allPages
       .map((route) => {
         const isBlog = route.startsWith('/blogs/') && route !== '/blogs';
         const lastmod =
           isBlog && metaConfig[route]?.datePublished
             ? metaConfig[route].datePublished
             : new Date().toISOString().split('T')[0];

         return `
       <url>
           <loc>${BASE_URL}${route}</loc>
           <lastmod>${lastmod}</lastmod>
           <changefreq>${getChangeFreq(route)}</changefreq>
           <priority>${getPriority(route)}</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
