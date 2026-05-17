import type { Metadata } from 'next';
import ProfitCalculator from '@/components/calculators/ProfitCalculator';
import { getRelatedTools } from '@/lib/content/tools';
import RelatedTools from '@/components/seo/RelatedTools';
import FAQSection from '@/components/seo/FAQSection';
import zh from '@/lib/i18n/zh.json';

export const metadata: Metadata = {
  title: '跨境电商亚马逊 FBA 利润计算器 - 卖家利润估算工具',
  description: '跨境电商卖家专用亚马逊 FBA 利润计算器，计算佣金、配送费、仓储费、广告和所有费用后的真实利润。免费在线工具。',
  keywords: '跨境电商, 亚马逊 fba 利润计算器, fba 计算器, 亚马逊卖家利润, fba 费用计算器, 跨境电商利润计算',
  alternates: {
    canonical: '/zh/amazon-fba-profit-calculator',
    languages: { 'en': '/amazon-fba-profit-calculator', 'zh-CN': '/zh/amazon-fba-profit-calculator' },
  },
};

export default function ZhAmazonFbaCalculatorPage() {
  const dict = zh.calculator;
  const toolDict = zh.tools.amazonFba;
  const relatedTools = getRelatedTools('amazon-fba-profit-calculator');

  const fields = [
    { key: 'sellingPrice', label: dict.sellingPrice, type: 'number' as const, suffix: '$', defaultValue: 29.99 },
    { key: 'productCost', label: dict.productCost, type: 'number' as const, suffix: '$', defaultValue: 8.00 },
    { key: 'shippingCost', label: dict.shippingCost, type: 'number' as const, suffix: '$', defaultValue: 3.00 },
    { key: 'referralFeeRate', label: '佣金费率', type: 'percent' as const, hint: '亚马逊佣金百分比', defaultValue: 0.15 },
    { key: 'fulfillmentFee', label: dict.fulfillmentFee, type: 'number' as const, suffix: '$', defaultValue: 5.00 },
    { key: 'storageCost', label: dict.storageCost, type: 'number' as const, suffix: '$', defaultValue: 0.50 },
    { key: 'paymentFeeRate', label: dict.paymentFeeRate, type: 'percent' as const, defaultValue: 0 },
    { key: 'fixedPaymentFee', label: dict.fixedPaymentFee, type: 'number' as const, suffix: '$', defaultValue: 0 },
    { key: 'adCost', label: dict.adCost, type: 'number' as const, suffix: '$', defaultValue: 2.00 },
    { key: 'refundRate', label: dict.refundRate, type: 'percent' as const, defaultValue: 0.02 },
    { key: 'otherCost', label: dict.otherCost, type: 'number' as const, suffix: '$', defaultValue: 0 },
  ];

  const faqItems = [
    {
      question: '什么是亚马逊佣金？',
      answer: '佣金是亚马逊对每笔销售收取的费用，大多数产品类别为 15%。不同类别费率不同。',
    },
    {
      question: '什么是 FBA 配送费？',
      answer: 'FBA 配送费涵盖拣货、包装、运输和客服。费用取决于产品尺寸和重量。',
    },
    {
      question: '仓储费如何计算？',
      answer: '亚马逊根据仓库中存储的库存体积收取月度仓储费。费率因季节而异。',
    },
  ];

  return (
    <>
      <ProfitCalculator
        title={toolDict.name}
        description={toolDict.description}
        calculatorType="amazonFba"
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
          platformFee: '佣金',
          paymentFee: dict.paymentFee,
          refundLoss: dict.refundLoss,
        }}
        formulaContent={
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs leading-relaxed">
              <p className="text-purple-700">佣金 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">*</span> <span className="text-green-700">佣金费率</span></p>
              <p className="text-purple-700 mt-2">收款手续费 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">*</span> <span className="text-green-700">收款费率</span> <span className="text-gray-400">+</span> <span className="text-green-700">固定收款费</span></p>
              <p className="text-purple-700 mt-2">退款损失 <span className="text-gray-400">=</span> <span className="text-green-700">售价</span> <span className="text-gray-400">*</span> <span className="text-green-700">退款率</span></p>
              <div className="border-t border-gray-200 my-3"></div>
              <p className="text-blue-700">总成本 <span className="text-gray-400">=</span></p>
              <p className="text-gray-500 ml-4">产品成本 + 物流成本 + 佣金</p>
              <p className="text-gray-500 ml-4">+ FBA配送费 + 仓储费</p>
              <p className="text-gray-500 ml-4">+ 收款手续费 + 广告费 + 退款损失</p>
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
                  <span className="font-medium">$29.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">产品成本</span>
                  <span className="font-medium">$8.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">物流</span>
                  <span className="font-medium">$3.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">佣金费率</span>
                  <span className="font-medium">15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">配送费</span>
                  <span className="font-medium">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">仓储费</span>
                  <span className="font-medium">$0.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">广告费</span>
                  <span className="font-medium">$2.00</span>
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
                  <span className="text-gray-600">佣金</span>
                  <span className="font-medium">$4.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">总成本</span>
                  <span className="font-medium">$25.00</span>
                </div>
                <div className="border-t border-green-200 my-1"></div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">净利润</span>
                  <span className="font-bold text-green-600">$4.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">利润率</span>
                  <span className="font-bold text-green-600">16.6%</span>
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
