import type { Metadata } from 'next';
import ProfitDiagnosisCalculator from '@/components/calculators/ProfitDiagnosisCalculator';
import { getRelatedTools } from '@/lib/content/tools';
import RelatedTools from '@/components/seo/RelatedTools';
import FAQSection from '@/components/seo/FAQSection';
import CalculatorGuide from '@/components/seo/CalculatorGuide';
import { calculatorGuides } from '@/lib/content/calculatorGuides';
import en from '@/lib/i18n/en.json';

export const metadata: Metadata = {
  title: 'Profit Diagnosis Calculator & Scenario Comparison Tool',
  description: 'Compare product profit scenarios, diagnose weak margins, and identify the biggest levers across fees, ads, shipping, refunds, and product cost.',
  keywords: 'profit diagnosis calculator, seller margin calculator, scenario comparison tool, ecommerce profit optimization, seller profit analysis, margin diagnosis',
  alternates: {
    canonical: '/profit-diagnosis-calculator',
    languages: { 'en': '/profit-diagnosis-calculator', 'zh-CN': '/zh/profit-diagnosis-calculator' },
  },
};

export default function ProfitDiagnosisCalculatorPage() {
  const dict = en.calculator;
  const toolDict = en.tools.profitDiagnosis;
  const relatedTools = getRelatedTools('profit-diagnosis-calculator');
  const guide = calculatorGuides.en.profitDiagnosis;

  const faqItems = [
    {
      question: 'How is the best plan selected?',
      answer: 'The comparison ranks plans by net profit first, then profit margin, then ROI. This keeps the recommendation focused on actual per-order profit while still considering efficiency.',
    },
    {
      question: 'What does a percentage-point change mean?',
      answer: 'A percentage-point change adjusts the fee or refund rate directly. For example, changing refund rate by -1 means a baseline 3% refund rate becomes 2%.',
    },
    {
      question: 'Should this replace platform-specific calculators?',
      answer: 'No. Use this as a decision layer to compare scenarios, then use the platform-specific calculators for detailed Amazon FBA, TikTok Shop, Shopify, or Flipkart fee modeling.',
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
          revenue: 'Revenue',
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
        <FAQSection title="FAQ" items={faqItems} />
        <RelatedTools
          title={en.relatedTools}
          tools={relatedTools}
          locale="en"
          dict={en.tools}
        />
      </div>
    </>
  );
}
