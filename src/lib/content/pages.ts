import type { Locale } from '../i18n/locales';

export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
}

export function getPageMeta(locale: Locale, toolId: string): PageMeta {
  const meta: Record<string, { en: PageMeta; zh: PageMeta }> = {
    home: {
      en: {
        title: 'Seller Margin & Seller Profit Calculator for Cross-Border Sellers',
        description:
          'Estimate true seller margins and seller profits across Amazon FBA, TikTok Shop, Shopify, Flipkart, and payment platforms with transparent formulas and adjustable fee rates.',
        keywords:
          'seller margin calculator, seller profit calculator, profit calculator, amazon fba calculator, tiktok shop calculator, shopify calculator, seller tools, ecommerce profit',
        canonicalPath: '/',
      },
      zh: {
        title: '卖家利润工具箱 - 面向跨境卖家的免费利润计算器',
        description:
          '帮助估算亚马逊 FBA、TikTok Shop、Shopify 等平台的真实利润，公式透明，费率可调。',
        keywords:
          '利润计算器, 亚马逊 fba 计算器, tiktok shop 计算器, shopify 计算器, 卖家工具, 跨境电商利润',
        canonicalPath: '/zh',
      },
    },
    amazonFba: {
      en: {
        title: 'Amazon FBA Seller Margin & Seller Profit Calculator',
        description:
          'Calculate Amazon FBA seller margin and seller profit after referral fees, fulfillment fees, storage costs, advertising, and all other expenses.',
        keywords:
          'seller margin calculator, seller profit calculator, amazon fba profit calculator, fba calculator, amazon seller profit, fba fees calculator, amazon fba margin',
        canonicalPath: '/amazon-fba-profit-calculator',
      },
      zh: {
        title: '亚马逊 FBA 利润计算器 - 估算产品真实利润',
        description:
          '计算亚马逊 FBA 产品在佣金、配送费、仓储费、广告和所有其他费用后的真实利润。免费易用。',
        keywords:
          '亚马逊 fba 利润计算器, fba 计算器, 亚马逊卖家利润, fba 费用计算器, 亚马逊 fba 利润率',
        canonicalPath: '/zh/amazon-fba-profit-calculator',
      },
    },
    tiktokShop: {
      en: {
        title: 'TikTok Shop Seller Margin & Seller Profit Calculator',
        description:
          'Calculate TikTok Shop seller margin and seller profit after platform fees, creator commissions, advertising, and all other costs.',
        keywords:
          'seller margin calculator, seller profit calculator, tiktok shop profit calculator, tiktok seller profit, tiktok shop fees, tiktok ecommerce calculator',
        canonicalPath: '/tiktok-shop-profit-calculator',
      },
      zh: {
        title: 'TikTok Shop 利润计算器 - 估算卖家真实利润',
        description:
          '计算 TikTok Shop 卖家在平台费、达人佣金、广告和所有其他成本后的真实利润。免费在线工具。',
        keywords:
          'tiktok shop 利润计算器, tiktok 卖家利润, tiktok shop 费用, tiktok 电商计算器',
        canonicalPath: '/zh/tiktok-shop-profit-calculator',
      },
    },
    shopify: {
      en: {
        title: 'Shopify Seller Margin & Seller Profit Calculator',
        description:
          'Calculate Shopify seller margin and seller profit after payment fees, app subscriptions, advertising, and all other expenses.',
        keywords:
          'seller margin calculator, seller profit calculator, shopify profit calculator, shopify seller profit, shopify fees calculator, shopify margin calculator',
        canonicalPath: '/shopify-profit-calculator',
      },
      zh: {
        title: 'Shopify 利润计算器 - 估算店铺利润率',
        description:
          '计算 Shopify 店铺在收款手续费、应用订阅、广告和所有其他费用后的真实利润。免费准确。',
        keywords:
          'shopify 利润计算器, shopify 卖家利润, shopify 费用计算器, shopify 利润率计算器',
        canonicalPath: '/zh/shopify-profit-calculator',
      },
    },
    paymentFees: {
      en: {
        title: 'Payment Fee Calculator - PayPal, Stripe, Wise Fee Calculator',
        description:
          'Calculate payment processing fees for PayPal, Stripe, Wise, and other providers. Supports gross-to-net and net-to-gross calculations.',
        keywords:
          'payment fee calculator, paypal fee calculator, stripe fee calculator, wise fee calculator, payment processing fees',
        canonicalPath: '/payment-fee-calculator',
      },
      zh: {
        title: '跨境收款手续费计算器 - PayPal、Stripe、Wise 费用计算',
        description:
          '计算 PayPal、Stripe、Wise 等收款平台的手续费。支持从总额算净额和从净额反算总额。',
        keywords:
          '收款手续费计算器, paypal 手续费计算器, stripe 手续费计算器, wise 手续费计算器, 跨境收款费用',
        canonicalPath: '/zh/payment-fee-calculator',
      },
    },
    targetPrice: {
      en: {
        title: 'Target Profit Price Calculator - Reverse Price Calculator',
        description:
          'Calculate the selling price you need to achieve your desired profit margin or net profit. Includes break-even analysis.',
        keywords:
          'target price calculator, profit margin calculator, pricing calculator, break even calculator, reverse price calculator',
        canonicalPath: '/target-profit-price-calculator',
      },
      zh: {
        title: '目标利润售价计算器 - 反算定价工具',
        description:
          '计算达到目标利润率或目标净利润所需的售价。包含盈亏平衡分析。',
        keywords:
          '目标售价计算器, 利润率计算器, 定价计算器, 盈亏平衡计算器, 反算定价工具',
        canonicalPath: '/zh/target-profit-price-calculator',
      },
    },
    flipkart: {
      en: {
        title: 'Flipkart Seller Margin & Seller Profit Calculator',
        description:
          'Calculate Flipkart seller margin and seller profit after commission fees, shipping, collection fees, GST on fees, and all other expenses.',
        keywords:
          'seller margin calculator, seller profit calculator, flipkart profit calculator, flipkart seller profit, flipkart fees calculator, flipkart commission calculator',
        canonicalPath: '/flipkart-profit-calculator',
      },
      zh: {
        title: 'Flipkart 卖家利润计算器 - 估算真实利润',
        description:
          '计算 Flipkart 卖家在佣金、物流、代收费用、费用上的 GST 和所有其他费用后的真实利润。免费在线工具。',
        keywords:
          'flipkart 利润计算器, flipkart 卖家利润, flipkart 费用计算器, flipkart 佣金计算器',
        canonicalPath: '/zh/flipkart-profit-calculator',
      },
    },
  };

  const entry = meta[toolId]?.[locale];
  if (!entry) {
    return meta.home[locale];
  }
  return entry;
}
