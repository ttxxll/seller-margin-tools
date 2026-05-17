import type { MetadataRoute } from 'next';

const baseUrl = 'https://sellermargintools.com';

const tools = [
  'amazon-fba-profit-calculator',
  'tiktok-shop-profit-calculator',
  'shopify-profit-calculator',
  'payment-fee-calculator',
  'target-profit-price-calculator',
  'flipkart-profit-calculator',
];

const staticPages = ['about', 'privacy', 'terms', 'contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const enPages = tools.map((tool) => ({
    url: `${baseUrl}/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const zhPages = tools.map((tool) => ({
    url: `${baseUrl}/zh/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const enStaticPages = staticPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const zhStaticPages = staticPages.map((page) => ({
    url: `${baseUrl}/zh/${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...enPages,
    ...zhPages,
    ...enStaticPages,
    ...zhStaticPages,
  ];
}
