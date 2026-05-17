import type { Metadata } from 'next';
import ProfitCalculator from '@/components/calculators/ProfitCalculator';
import { getRelatedTools } from '@/lib/content/tools';
import RelatedTools from '@/components/seo/RelatedTools';
import FAQSection from '@/components/seo/FAQSection';
import zh from '@/lib/i18n/zh.json';

export const metadata: Metadata = {
  title: '跨境电商 TikTok Shop 利润计算器 - 卖家利润估算工具',
  description: '跨境电商卖家专用 TikTok Shop 利润计算器，计算平台费、达人佣金、广告和所有费用后的真实利润。免费在线工具。',
  keywords: '跨境电商, tiktok shop 利润计算器, tiktok 卖家利润, tiktok shop 费用, 跨境电商利润计算',
  alternates: {
    canonical: '/zh/tiktok-shop-profit-calculator',
    languages: { 'en': '/tiktok-shop-profit-calculator', 'zh-CN': '/zh/tiktok-shop-profit-calculator' },
  },
};

export default function ZhTikTokShopCalculatorPage() {
  const dict = zh.calculator;
  const toolDict = zh.tools.tiktokShop;
  const relatedTools = getRelatedTools('tiktok-shop-profit-calculator');

  const fields = [
    { key: 'sellingPrice', label: dict.sellingPrice, type: 'number' as const, suffix: '$', defaultValue: 24.99 },
    { key: 'productCost', label: dict.productCost, type: 'number' as const, suffix: '$', defaultValue: 6.00 },
    { key: 'shippingCost', label: dict.shippingCost, type: 'number' as const, suffix: '$', defaultValue: 4.00 },
    { key: 'platformFeeRate', label: dict.platformFeeRate, type: 'percent' as const, hint: 'TikTok Shop 平台费率', defaultValue: 0.06 },
    { key: 'creatorCommissionRate', label: dict.creatorCommissionRate, type: 'percent' as const, hint: '达人带货佣金', defaultValue: 0.10 },
    { key: 'paymentFeeRate', label: dict.paymentFeeRate, type: 'percent' as const, defaultValue: 0.02 },
    { key: 'fixedPaymentFee', label: dict.fixedPaymentFee, type: 'number' as const, suffix: '$', defaultValue: 0.30 },
    { key: 'adCost', label: dict.adCost, type: 'number' as const, suffix: '$', defaultValue: 1.50 },
    { key: 'refundRate', label: dict.refundRate, type: 'percent' as const, defaultValue: 0.03 },
    { key: 'otherCost', label: dict.otherCost, type: 'number' as const, suffix: '$', defaultValue: 0 },
  ];

  const faqItems = [
    {
      question: '什么是 TikTok Shop 平台费？',
      answer: 'TikTok Shop 对每笔销售收取平台费，大多数类别约为 6%。',
    },
    {
      question: '什么是达人带货佣金？',
      answer: '达人佣金是支付给通过内容推广和销售您产品的 TikTok 达人的百分比。',
    },
  ];

  return (
    <>
      <ProfitCalculator
        title={toolDict.name}
        description={toolDict.description}
        calculatorType="tiktokShop"
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
          paymentFee: dict.paymentFee,
          refundLoss: dict.refundLoss,
        }}
        formulaContent={
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs leading-relaxed">
              <p className="text-purple-700">平台费 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">*</span> <span className="text-green-700">平台费率</span></p>
              <p className="text-purple-700 mt-2">达人佣金 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">*</span> <span className="text-green-700">达人佣金率</span></p>
              <p className="text-purple-700 mt-2">收款手续费 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">*</span> <span className="text-green-700">收款费率</span> <span className="text-gray-400">+</span> <span className="text-green-700">固定收款费</span></p>
              <p className="text-purple-700 mt-2">退款损失 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">*</span> <span className="text-green-700">退款率</span></p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-blue-700">总成本 <span className="text-gray-400">=</span></p>
              <p className="text-gray-500 ml-4">产品成本 + 物流成本</p>
              <p className="text-gray-500 ml-4">+ 平台费 + 达人佣金</p>
              <p className="text-gray-500 ml-4">+ 收款手续费 + 广告费 + 退款损失</p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-yellow-700">净利润 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">-</span> <span className="text-blue-700">总成本</span></p>
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
                  <span className="font-medium">$24.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">产品成本</span>
                  <span className="font-medium">$6.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">物流</span>
                  <span className="font-medium">$4.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">平台费</span>
                  <span className="font-medium">6%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">达人佣金</span>
                  <span className="font-medium">10%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">广告费</span>
                  <span className="font-medium">$1.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">退款率</span>
                  <span className="font-medium">3%</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-green-700 mb-2">输出</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">平台费</span>
                  <span className="font-medium">$1.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">达人佣金</span>
                  <span className="font-medium">$2.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">总成本</span>
                  <span className="font-medium">$19.30</span>
                </div>
                <div className="border-t border-green-200 my-1"></div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">净利润</span>
                  <span className="font-bold text-green-600">$5.69</span>
                </div>
              </div>
            </div>
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
