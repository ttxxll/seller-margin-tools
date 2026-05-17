import type { Metadata } from 'next';
import ProfitCalculator from '@/components/calculators/ProfitCalculator';
import { getRelatedTools } from '@/lib/content/tools';
import RelatedTools from '@/components/seo/RelatedTools';
import FAQSection from '@/components/seo/FAQSection';
import zh from '@/lib/i18n/zh.json';

export const metadata: Metadata = {
  title: '跨境电商 Shopify 利润计算器 - 卖家利润估算工具',
  description: '跨境电商卖家专用 Shopify 利润计算器，计算收款手续费、应用订阅、广告和所有费用后的真实利润。免费在线工具。',
  keywords: '跨境电商, shopify 利润计算器, shopify 卖家利润, shopify 费用计算器, 跨境电商利润计算',
  alternates: {
    canonical: '/zh/shopify-profit-calculator',
    languages: { 'en': '/shopify-profit-calculator', 'zh-CN': '/zh/shopify-profit-calculator' },
  },
};

export default function ZhShopifyCalculatorPage() {
  const dict = zh.calculator;
  const toolDict = zh.tools.shopify;
  const relatedTools = getRelatedTools('shopify-profit-calculator');

  const fields = [
    { key: 'sellingPrice', label: dict.sellingPrice, type: 'number' as const, suffix: '$', defaultValue: 49.99 },
    { key: 'productCost', label: dict.productCost, type: 'number' as const, suffix: '$', defaultValue: 15.00 },
    { key: 'shippingCost', label: dict.shippingCost, type: 'number' as const, suffix: '$', defaultValue: 5.00 },
    { key: 'platformFeeRate', label: dict.platformFeeRate, type: 'percent' as const, hint: 'Shopify 平台费（通常为 0%）', defaultValue: 0 },
    { key: 'paymentFeeRate', label: dict.paymentFeeRate, type: 'percent' as const, hint: '收款手续费', defaultValue: 0.029 },
    { key: 'fixedPaymentFee', label: dict.fixedPaymentFee, type: 'number' as const, suffix: '$', defaultValue: 0.30 },
    { key: 'appCost', label: dict.appCost, type: 'number' as const, suffix: '$/月', hint: '月度应用订阅费', defaultValue: 29.00 },
    { key: 'adCost', label: dict.adCost, type: 'number' as const, suffix: '$', defaultValue: 5.00 },
    { key: 'refundRate', label: dict.refundRate, type: 'percent' as const, defaultValue: 0.02 },
    { key: 'otherCost', label: dict.otherCost, type: 'number' as const, suffix: '$', defaultValue: 0 },
  ];

  const faqItems = [
    {
      question: 'Shopify 收取平台费吗？',
      answer: '通过 Shopify Payments 销售时，Shopify 不收取单独的平台费。如果使用第三方支付网关，Shopify 会收取额外费用（根据计划 0.5%-2%）。',
    },
    {
      question: 'Shopify 应用成本通常是多少？',
      answer: '应用成本差异很大。评论、邮件营销和追加销售的热门应用通常每月 $10-$50。',
    },
  ];

  return (
    <>
      <ProfitCalculator
        title={toolDict.name}
        description={toolDict.description}
        calculatorType="shopify"
        fields={fields}
        dict={{
          calculate: dict.calculate,
          results: dict.results,
          formula: dict.formula,
          example: dict.example,
          disclaimer: dict.disclaimer,
          netProfit: dict.netProfit,
          profitMargin: dict.profitMargin,
          roi: dict.roi,
          breakEvenPrice: dict.breakEvenPrice,
          totalCost: dict.totalCost,
          revenue: '售价',
          platformFee: '平台费',
          paymentFee: '收款手续费',
          refundLoss: dict.refundLoss,
        }}
        formulaContent={
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs leading-relaxed">
              <p className="text-purple-700">平台费 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">*</span> <span className="text-green-700">平台费率</span></p>
              <p className="text-purple-700 mt-2">收款手续费 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">*</span> <span className="text-green-700">收款费率</span> <span className="text-gray-400">+</span> <span className="text-green-700">固定收款费</span></p>
              <p className="text-purple-700 mt-2">退款损失 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">*</span> <span className="text-green-700">退款率</span></p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-blue-700">总成本 <span className="text-gray-400">=</span></p>
              <p className="text-gray-500 ml-4">产品成本 + 物流成本</p>
              <p className="text-gray-500 ml-4">+ 平台费 + 收款手续费</p>
              <p className="text-gray-500 ml-4">+ 应用成本 + 广告费 + 退款损失</p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-yellow-700">净利润 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">-</span> <span className="text-blue-700">总成本</span></p>
              <p className="text-yellow-700 mt-2">利润率 <span className="text-gray-400">=</span> <span className="text-yellow-700">净利润</span> <span className="text-gray-400">/</span> <span className="text-green-700">售价</span></p>
            </div>
          </div>
        }
        exampleContent={
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-700 mb-2">输入</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">售价</span>
                  <span className="font-medium">$49.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">产品成本</span>
                  <span className="font-medium">$15.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">物流</span>
                  <span className="font-medium">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">收款费</span>
                  <span className="font-medium">2.9% + $0.30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">应用成本</span>
                  <span className="font-medium">$29.00/月</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">广告费</span>
                  <span className="font-medium">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">退款率</span>
                  <span className="font-medium">2%</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-green-700 mb-2">输出</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">收款手续费</span>
                  <span className="font-medium">$1.75</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">总成本</span>
                  <span className="font-medium">$57.75</span>
                </div>
                <div className="border-t border-green-200 my-1"></div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">净利润</span>
                  <span className="font-bold text-red-600">-$7.76</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500">注意：应用成本是月费 - 除以月销量得到单位成本。</p>
          </div>
        }
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <FAQSection title="常见问题" items={faqItems} />
        <RelatedTools
          title={zh.relatedTools}
          tools={relatedTools}
          locale="zh"
          dict={zh.tools}
        />
      </div>
    </>
  );
}
