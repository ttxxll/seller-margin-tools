import type { Metadata } from 'next';
import ProfitDiagnosisCalculator from '@/components/calculators/ProfitDiagnosisCalculator';
import { getRelatedTools } from '@/lib/content/tools';
import RelatedTools from '@/components/seo/RelatedTools';
import FAQSection from '@/components/seo/FAQSection';
import CalculatorGuide from '@/components/seo/CalculatorGuide';
import { calculatorGuides } from '@/lib/content/calculatorGuides';
import zh from '@/lib/i18n/zh.json';

export const metadata: Metadata = {
  title: '利润诊断与方案对比工具 - 跨境电商利润优化计算器',
  description: '对比不同定价、成本、广告和退款方案，诊断利润率问题，找出影响利润最大的优化杠杆。',
  keywords: '利润诊断, 方案对比, 跨境电商利润优化, 利润率诊断, 卖家利润分析, 定价方案对比',
  alternates: {
    canonical: '/zh/profit-diagnosis-calculator',
    languages: { 'en': '/profit-diagnosis-calculator', 'zh-CN': '/zh/profit-diagnosis-calculator' },
  },
};

export default function ZhProfitDiagnosisCalculatorPage() {
  const dict = zh.calculator;
  const toolDict = zh.tools.profitDiagnosis;
  const relatedTools = getRelatedTools('profit-diagnosis-calculator');
  const guide = calculatorGuides.zh.profitDiagnosis;

  const faqItems = [
    {
      question: '最佳方案是如何判断的？',
      answer: '系统会优先比较每单净利润，其次比较利润率，最后比较 ROI。这样推荐结果既关注实际赚多少钱，也兼顾资金效率。',
    },
    {
      question: '百分点变化是什么意思？',
      answer: '百分点变化会直接调整费率或退款率。例如退款率变化 -1，表示基准 3% 的退款率变成 2%。',
    },
    {
      question: '这个工具能替代平台专属计算器吗？',
      answer: '不建议替代。这个工具适合做方案对比和利润诊断；如果需要更细的平台费用，请继续使用亚马逊 FBA、TikTok Shop、Shopify 或 Flipkart 专属计算器。',
    },
  ];

  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{toolDict.name}</h1>
          <p className="text-sm text-gray-500">{toolDict.description}</p>
        </div>
      </div>
      <ProfitDiagnosisCalculator
        dict={{
          sellingPrice: dict.sellingPrice,
          productCost: dict.productCost,
          shippingCost: dict.shippingCost,
          platformFeeRate: dict.platformFeeRate,
          paymentFeeRate: dict.paymentFeeRate,
          fixedPaymentFee: dict.fixedPaymentFee,
          adCost: dict.adCost,
          refundRate: dict.refundRate,
          otherCost: dict.otherCost,
          totalCost: dict.totalCost,
          netProfit: dict.netProfit,
          profitMargin: dict.profitMargin,
          roi: dict.roi,
          breakEvenPrice: dict.breakEvenPrice,
          revenue: '售价',
          platformFee: dict.platformFee,
          paymentFee: dict.paymentFee,
          refundLoss: dict.refundLoss,
          results: dict.results,
          costBreakdown: dict.costBreakdown,
          disclaimer: dict.disclaimer,
          profitDiagnosis: dict.profitDiagnosis,
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <CalculatorGuide title={guide.title} intro={guide.intro} sections={guide.sections} />
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
