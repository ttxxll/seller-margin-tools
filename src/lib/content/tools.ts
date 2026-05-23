export type ToolId = 'amazonFba' | 'tiktokShop' | 'shopify' | 'paymentFees' | 'targetPrice' | 'flipkart' | 'profitDiagnosis';

export interface Tool {
  id: ToolId;
  slug: string;
  icon: string;
}

export const tools: Tool[] = [
  {
    id: 'amazonFba',
    slug: 'amazon-fba-profit-calculator',
    icon: '📦',
  },
  {
    id: 'tiktokShop',
    slug: 'tiktok-shop-profit-calculator',
    icon: '🎵',
  },
  {
    id: 'shopify',
    slug: 'shopify-profit-calculator',
    icon: '🛍️',
  },
  {
    id: 'paymentFees',
    slug: 'payment-fee-calculator',
    icon: '💳',
  },
  {
    id: 'targetPrice',
    slug: 'target-profit-price-calculator',
    icon: '🎯',
  },
  {
    id: 'flipkart',
    slug: 'flipkart-profit-calculator',
    icon: '🛒',
  },
  {
    id: 'profitDiagnosis',
    slug: 'profit-diagnosis-calculator',
    icon: '▦',
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getRelatedTools(currentSlug: string): Tool[] {
  return tools.filter((t) => t.slug !== currentSlug);
}
