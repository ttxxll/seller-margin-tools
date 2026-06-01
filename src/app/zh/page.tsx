'use client';

import { useState } from 'react';
import Link from 'next/link';
import CalculatorField from '@/components/calculators/CalculatorField';
import ResultBreakdown from '@/components/calculators/ResultBreakdown';
import {
  calculateAmazonFbaProfit,
  calculateTikTokShopProfit,
  calculateShopifyProfit,
  calculateFlipkartProfit,
} from '@/lib/calculators/profit';
import { calculatePaymentFee } from '@/lib/calculators/paymentFees';
import { calculateTargetPrice } from '@/lib/calculators/targetPrice';
import type { ProfitResult } from '@/lib/calculators/profit';
import type { PaymentFeeResult } from '@/lib/calculators/paymentFees';
import type { TargetPriceResult } from '@/lib/calculators/targetPrice';
import zh from '@/lib/i18n/zh.json';
import FAQSection from '@/components/seo/FAQSection';

type Platform = 'amazon' | 'tiktok' | 'shopify' | 'payment' | 'target' | 'flipkart';

const platforms = [
  { id: 'amazon' as Platform, name: '亚马逊 FBA', icon: '📦' },
  { id: 'tiktok' as Platform, name: 'TikTok Shop', icon: '🎵' },
  { id: 'shopify' as Platform, name: 'Shopify', icon: '🛍️' },
  { id: 'payment' as Platform, name: '收款费用', icon: '💳' },
  { id: 'target' as Platform, name: '目标售价', icon: '🎯' },
  { id: 'flipkart' as Platform, name: 'Flipkart', icon: '🛒' },
];

export default function ZhHomePage() {
  const [activePlatform, setActivePlatform] = useState<Platform>('amazon');
  const dict = zh.calculator;

  const [amazonValues, setAmazonValues] = useState({
    sellingPrice: 29.99, productCost: 8, shippingCost: 3,
    referralFeeRate: 0.15, fulfillmentFee: 5, storageCost: 0.5,
    adCost: 2, refundRate: 0.02,
  });
  const [amazonResult, setAmazonResult] = useState<ProfitResult | null>(() => calculateAmazonFbaProfit({
    sellingPrice: 29.99,
    productCost: 8,
    shippingCost: 3,
    referralFeeRate: 0.15,
    fulfillmentFee: 5,
    storageCost: 0.5,
    adCost: 2,
    refundRate: 0.02,
    paymentFeeRate: 0,
    fixedPaymentFee: 0,
    otherCost: 0,
  }));

  const [tiktokValues, setTiktokValues] = useState({
    sellingPrice: 24.99, productCost: 6, shippingCost: 4,
    platformFeeRate: 0.06, creatorCommissionRate: 0.1,
    adCost: 1.5, refundRate: 0.03,
  });
  const [tiktokResult, setTiktokResult] = useState<ProfitResult | null>(null);

  const [shopifyValues, setShopifyValues] = useState({
    sellingPrice: 49.99, productCost: 15, shippingCost: 5,
    paymentFeeRate: 0.029, appCost: 29, adCost: 5, refundRate: 0.02,
  });
  const [shopifyResult, setShopifyResult] = useState<ProfitResult | null>(null);

  const [paymentValues, setPaymentValues] = useState({
    amount: 100, feeRate: 0.03, fixedFee: 0.3,
    mode: 'grossToNet' as 'grossToNet' | 'netToGross',
  });
  const [paymentResult, setPaymentResult] = useState<PaymentFeeResult | null>(null);

  const [targetValues, setTargetValues] = useState({
    productCost: 15, shippingCost: 5, platformFeeRate: 0.15,
    paymentFeeRate: 0.03, adCost: 5, refundRate: 0.02, targetProfit: 10,
  });
  const [targetResult, setTargetResult] = useState<TargetPriceResult | null>(null);

  const [flipkartValues, setFlipkartValues] = useState({
    sellingPrice: 499, productCost: 150, shippingCost: 50,
    commissionRate: 0.15, collectionFeeRate: 0.02, gstOnFeesRate: 0.18,
    fixedFee: 10, adCost: 30, refundRate: 0.03,
  });
  const [flipkartResult, setFlipkartResult] = useState<ProfitResult | null>(null);

  const handleAmazonCalculate = () => {
    setAmazonResult(calculateAmazonFbaProfit({
      ...amazonValues, paymentFeeRate: 0, fixedPaymentFee: 0, otherCost: 0,
    }));
  };
  const handleTiktokCalculate = () => {
    setTiktokResult(calculateTikTokShopProfit({
      ...tiktokValues, paymentFeeRate: 0.02, fixedPaymentFee: 0.3, otherCost: 0,
    }));
  };
  const handleShopifyCalculate = () => {
    setShopifyResult(calculateShopifyProfit({
      ...shopifyValues, platformFeeRate: 0, fixedPaymentFee: 0.3, otherCost: 0,
    }));
  };
  const handlePaymentCalculate = () => {
    setPaymentResult(calculatePaymentFee({
      amount: paymentValues.amount, feeRate: paymentValues.feeRate,
      fixedFee: paymentValues.fixedFee, mode: paymentValues.mode,
    }));
  };
  const handleTargetCalculate = () => {
    setTargetResult(calculateTargetPrice({
      ...targetValues, fixedPaymentFee: 0.3, otherCost: 0,
      mode: 'targetProfit', targetNetProfit: targetValues.targetProfit,
    }));
  };
  const handleFlipkartCalculate = () => {
    setFlipkartResult(calculateFlipkartProfit({
      ...flipkartValues, otherCost: 0,
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              跨境卖家免费工具
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              跨境电商<span className="text-blue-600">利润计算器</span>
            </h1>
            <p className="text-lg text-gray-500 mt-4 leading-relaxed max-w-xl">
              精准计算扣除平台佣金、物流、广告、退款后的真实利润率。支持亚马逊 FBA、TikTok Shop、Shopify、Flipkart 等平台。
            </p>
          </div>
        </div>
      </section>

      {/* Platform Tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-14 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setActivePlatform(platform.id)}
                className={`flex items-center gap-2 px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                  activePlatform === platform.id
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-200'
                }`}
              >
                <span>{platform.icon}</span>
                <span>{platform.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Calculator Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Input Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-gray-200/60 card-shadow overflow-hidden sticky top-28">
              <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">输入参数</h2>
              </div>
              <div className="p-5 space-y-3.5 max-h-[calc(100vh-200px)] overflow-y-auto">
                {activePlatform === 'amazon' && (
                  <>
                    <CalculatorField label={dict.sellingPrice} value={amazonValues.sellingPrice} onChange={(v) => setAmazonValues(p => ({...p, sellingPrice: v}))} suffix="$" />
                    <CalculatorField label={dict.productCost} value={amazonValues.productCost} onChange={(v) => setAmazonValues(p => ({...p, productCost: v}))} suffix="$" />
                    <CalculatorField label={dict.shippingCost} value={amazonValues.shippingCost} onChange={(v) => setAmazonValues(p => ({...p, shippingCost: v}))} suffix="$" />
                    <CalculatorField label="佣金费率" value={amazonValues.referralFeeRate} onChange={(v) => setAmazonValues(p => ({...p, referralFeeRate: v}))} type="percent" />
                    <CalculatorField label={dict.fulfillmentFee} value={amazonValues.fulfillmentFee} onChange={(v) => setAmazonValues(p => ({...p, fulfillmentFee: v}))} suffix="$" />
                    <CalculatorField label={dict.storageCost} value={amazonValues.storageCost} onChange={(v) => setAmazonValues(p => ({...p, storageCost: v}))} suffix="$" />
                    <CalculatorField label={dict.adCost} value={amazonValues.adCost} onChange={(v) => setAmazonValues(p => ({...p, adCost: v}))} suffix="$" />
                    <CalculatorField label={dict.refundRate} value={amazonValues.refundRate} onChange={(v) => setAmazonValues(p => ({...p, refundRate: v}))} type="percent" />
                    <button onClick={handleAmazonCalculate} className="w-full bg-blue-600 text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/25">
                      {dict.calculate}
                    </button>
                  </>
                )}
                {activePlatform === 'tiktok' && (
                  <>
                    <CalculatorField label={dict.sellingPrice} value={tiktokValues.sellingPrice} onChange={(v) => setTiktokValues(p => ({...p, sellingPrice: v}))} suffix="$" />
                    <CalculatorField label={dict.productCost} value={tiktokValues.productCost} onChange={(v) => setTiktokValues(p => ({...p, productCost: v}))} suffix="$" />
                    <CalculatorField label={dict.shippingCost} value={tiktokValues.shippingCost} onChange={(v) => setTiktokValues(p => ({...p, shippingCost: v}))} suffix="$" />
                    <CalculatorField label="平台费率" value={tiktokValues.platformFeeRate} onChange={(v) => setTiktokValues(p => ({...p, platformFeeRate: v}))} type="percent" />
                    <CalculatorField label="达人佣金率" value={tiktokValues.creatorCommissionRate} onChange={(v) => setTiktokValues(p => ({...p, creatorCommissionRate: v}))} type="percent" />
                    <CalculatorField label={dict.adCost} value={tiktokValues.adCost} onChange={(v) => setTiktokValues(p => ({...p, adCost: v}))} suffix="$" />
                    <CalculatorField label={dict.refundRate} value={tiktokValues.refundRate} onChange={(v) => setTiktokValues(p => ({...p, refundRate: v}))} type="percent" />
                    <button onClick={handleTiktokCalculate} className="w-full bg-blue-600 text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/25">
                      {dict.calculate}
                    </button>
                  </>
                )}
                {activePlatform === 'shopify' && (
                  <>
                    <CalculatorField label={dict.sellingPrice} value={shopifyValues.sellingPrice} onChange={(v) => setShopifyValues(p => ({...p, sellingPrice: v}))} suffix="$" />
                    <CalculatorField label={dict.productCost} value={shopifyValues.productCost} onChange={(v) => setShopifyValues(p => ({...p, productCost: v}))} suffix="$" />
                    <CalculatorField label={dict.shippingCost} value={shopifyValues.shippingCost} onChange={(v) => setShopifyValues(p => ({...p, shippingCost: v}))} suffix="$" />
                    <CalculatorField label="收款费率" value={shopifyValues.paymentFeeRate} onChange={(v) => setShopifyValues(p => ({...p, paymentFeeRate: v}))} type="percent" />
                    <CalculatorField label="应用成本" value={shopifyValues.appCost} onChange={(v) => setShopifyValues(p => ({...p, appCost: v}))} suffix="$/月" />
                    <CalculatorField label={dict.adCost} value={shopifyValues.adCost} onChange={(v) => setShopifyValues(p => ({...p, adCost: v}))} suffix="$" />
                    <CalculatorField label={dict.refundRate} value={shopifyValues.refundRate} onChange={(v) => setShopifyValues(p => ({...p, refundRate: v}))} type="percent" />
                    <button onClick={handleShopifyCalculate} className="w-full bg-blue-600 text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/25">
                      {dict.calculate}
                    </button>
                  </>
                )}
                {activePlatform === 'payment' && (
                  <>
                    <div className="flex gap-2">
                      <button onClick={() => setPaymentValues(p => ({...p, mode: 'grossToNet'}))}
                        className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all ${paymentValues.mode === 'grossToNet' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                        总额 → 净额
                      </button>
                      <button onClick={() => setPaymentValues(p => ({...p, mode: 'netToGross'}))}
                        className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all ${paymentValues.mode === 'netToGross' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                        净额 → 总额
                      </button>
                    </div>
                    <CalculatorField label={dict.amount} value={paymentValues.amount} onChange={(v) => setPaymentValues(p => ({...p, amount: v}))} suffix="$" />
                    <CalculatorField label={dict.feeRate} value={paymentValues.feeRate} onChange={(v) => setPaymentValues(p => ({...p, feeRate: v}))} type="percent" />
                    <CalculatorField label={dict.fixedFee} value={paymentValues.fixedFee} onChange={(v) => setPaymentValues(p => ({...p, fixedFee: v}))} suffix="$" />
                    <button onClick={handlePaymentCalculate} className="w-full bg-blue-600 text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/25">
                      {dict.calculate}
                    </button>
                  </>
                )}
                {activePlatform === 'target' && (
                  <>
                    <CalculatorField label={dict.productCost} value={targetValues.productCost} onChange={(v) => setTargetValues(p => ({...p, productCost: v}))} suffix="$" />
                    <CalculatorField label={dict.shippingCost} value={targetValues.shippingCost} onChange={(v) => setTargetValues(p => ({...p, shippingCost: v}))} suffix="$" />
                    <CalculatorField label="平台费率" value={targetValues.platformFeeRate} onChange={(v) => setTargetValues(p => ({...p, platformFeeRate: v}))} type="percent" />
                    <CalculatorField label="收款费率" value={targetValues.paymentFeeRate} onChange={(v) => setTargetValues(p => ({...p, paymentFeeRate: v}))} type="percent" />
                    <CalculatorField label={dict.adCost} value={targetValues.adCost} onChange={(v) => setTargetValues(p => ({...p, adCost: v}))} suffix="$" />
                    <CalculatorField label={dict.refundRate} value={targetValues.refundRate} onChange={(v) => setTargetValues(p => ({...p, refundRate: v}))} type="percent" />
                    <CalculatorField label={dict.targetNetProfit} value={targetValues.targetProfit} onChange={(v) => setTargetValues(p => ({...p, targetProfit: v}))} suffix="$" />
                    <button onClick={handleTargetCalculate} className="w-full bg-blue-600 text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/25">
                      {dict.calculate}
                    </button>
                  </>
                )}
                {activePlatform === 'flipkart' && (
                  <>
                    <CalculatorField label={dict.sellingPrice} value={flipkartValues.sellingPrice} onChange={(v) => setFlipkartValues(p => ({...p, sellingPrice: v}))} suffix="$" />
                    <CalculatorField label={dict.productCost} value={flipkartValues.productCost} onChange={(v) => setFlipkartValues(p => ({...p, productCost: v}))} suffix="$" />
                    <CalculatorField label={dict.shippingCost} value={flipkartValues.shippingCost} onChange={(v) => setFlipkartValues(p => ({...p, shippingCost: v}))} suffix="$" />
                    <CalculatorField label={dict.commissionRate} value={flipkartValues.commissionRate} onChange={(v) => setFlipkartValues(p => ({...p, commissionRate: v}))} type="percent" />
                    <CalculatorField label={dict.collectionFeeRate} value={flipkartValues.collectionFeeRate} onChange={(v) => setFlipkartValues(p => ({...p, collectionFeeRate: v}))} type="percent" />
                    <CalculatorField label={dict.gstOnFeesRate} value={flipkartValues.gstOnFeesRate} onChange={(v) => setFlipkartValues(p => ({...p, gstOnFeesRate: v}))} type="percent" />
                    <CalculatorField label={dict.fixedFeePerOrder} value={flipkartValues.fixedFee} onChange={(v) => setFlipkartValues(p => ({...p, fixedFee: v}))} suffix="$" />
                    <CalculatorField label={dict.adCost} value={flipkartValues.adCost} onChange={(v) => setFlipkartValues(p => ({...p, adCost: v}))} suffix="$" />
                    <CalculatorField label={dict.refundRate} value={flipkartValues.refundRate} onChange={(v) => setFlipkartValues(p => ({...p, refundRate: v}))} type="percent" />
                    <button onClick={handleFlipkartCalculate} className="w-full bg-blue-600 text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/25">
                      {dict.calculate}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-7 space-y-6">
            {activePlatform === 'amazon' && amazonResult && (
              <ResultShell>
                <MetricsGrid>
                  <BigMetric label={dict.netProfit} value={amazonResult.netProfit} isCurrency primary />
                  <BigMetric label={dict.profitMargin} value={amazonResult.profitMargin} isPercent primary />
                  <MetricCard label={dict.roi} value={amazonResult.roi} isPercent />
                  <MetricCard label={dict.breakEvenPrice} value={amazonResult.breakEvenPrice} isCurrency />
                </MetricsGrid>
                <ResultBreakdown title={dict.results} rows={[
                  { label: '售价', value: amazonResult.revenue },
                  { label: '佣金', value: -amazonResult.platformFee },
                  { label: '配送+仓储', value: -(amazonValues.fulfillmentFee + amazonValues.storageCost) },
                  { label: dict.adCost, value: -amazonValues.adCost },
                  { label: dict.refundLoss, value: -amazonResult.refundLoss },
                  { label: dict.totalCost, value: -amazonResult.totalCost },
                  { label: dict.netProfit, value: amazonResult.netProfit, highlight: true, negative: amazonResult.netProfit < 0 },
                ]} compact />
                <DiagnosisButton href="/zh/profit-diagnosis-calculator">{zh.calculator.profitDiagnosis.enterProfitDiagnosis}</DiagnosisButton>
                <DetailLink href="/zh/amazon-fba-profit-calculator">查看详细计算器</DetailLink>
              </ResultShell>
            )}

            {activePlatform === 'tiktok' && tiktokResult && (
              <ResultShell>
                <MetricsGrid>
                  <BigMetric label={dict.netProfit} value={tiktokResult.netProfit} isCurrency primary />
                  <BigMetric label={dict.profitMargin} value={tiktokResult.profitMargin} isPercent primary />
                  <MetricCard label={dict.roi} value={tiktokResult.roi} isPercent />
                  <MetricCard label={dict.breakEvenPrice} value={tiktokResult.breakEvenPrice} isCurrency />
                </MetricsGrid>
                <ResultBreakdown title={dict.results} rows={[
                  { label: '售价', value: tiktokResult.revenue },
                  { label: '平台费', value: -tiktokResult.platformFee },
                  { label: '达人佣金', value: -(tiktokValues.sellingPrice * tiktokValues.creatorCommissionRate) },
                  { label: dict.adCost, value: -tiktokValues.adCost },
                  { label: dict.refundLoss, value: -tiktokResult.refundLoss },
                  { label: dict.totalCost, value: -tiktokResult.totalCost },
                  { label: dict.netProfit, value: tiktokResult.netProfit, highlight: true, negative: tiktokResult.netProfit < 0 },
                ]} compact />
                <DiagnosisButton href="/zh/profit-diagnosis-calculator">{zh.calculator.profitDiagnosis.enterProfitDiagnosis}</DiagnosisButton>
                <DetailLink href="/zh/tiktok-shop-profit-calculator">查看详细计算器</DetailLink>
              </ResultShell>
            )}

            {activePlatform === 'shopify' && shopifyResult && (
              <ResultShell>
                <MetricsGrid>
                  <BigMetric label={dict.netProfit} value={shopifyResult.netProfit} isCurrency primary />
                  <BigMetric label={dict.profitMargin} value={shopifyResult.profitMargin} isPercent primary />
                  <MetricCard label={dict.roi} value={shopifyResult.roi} isPercent />
                  <MetricCard label={dict.breakEvenPrice} value={shopifyResult.breakEvenPrice} isCurrency />
                </MetricsGrid>
                <ResultBreakdown title={dict.results} rows={[
                  { label: '售价', value: shopifyResult.revenue },
                  { label: '收款手续费', value: -shopifyResult.paymentFee },
                  { label: '应用成本', value: -shopifyValues.appCost },
                  { label: dict.adCost, value: -shopifyValues.adCost },
                  { label: dict.refundLoss, value: -shopifyResult.refundLoss },
                  { label: dict.totalCost, value: -shopifyResult.totalCost },
                  { label: dict.netProfit, value: shopifyResult.netProfit, highlight: true, negative: shopifyResult.netProfit < 0 },
                ]} compact />
                <DiagnosisButton href="/zh/profit-diagnosis-calculator">{zh.calculator.profitDiagnosis.enterProfitDiagnosis}</DiagnosisButton>
                <DetailLink href="/zh/shopify-profit-calculator">查看详细计算器</DetailLink>
              </ResultShell>
            )}

            {activePlatform === 'payment' && paymentResult && (
              <ResultShell>
                <MetricsGrid>
                  <BigMetric label="净额" value={paymentResult.netAmount} isCurrency primary />
                  <MetricCard label={dict.feeAmount} value={paymentResult.feeAmount} isCurrency />
                  <MetricCard label="实际费率" value={paymentResult.effectiveFeeRate} isPercent />
                </MetricsGrid>
                <ResultBreakdown title={dict.results} rows={[
                  { label: dict.grossAmount, value: paymentResult.grossAmount },
                  { label: dict.feeAmount, value: -paymentResult.feeAmount },
                  { label: dict.netAmount, value: paymentResult.netAmount, highlight: true },
                  { label: dict.effectiveFeeRate, value: paymentResult.effectiveFeeRate, isPercent: true },
                ]} compact />
                <DiagnosisButton href="/zh/profit-diagnosis-calculator">{zh.calculator.profitDiagnosis.enterProfitDiagnosis}</DiagnosisButton>
                <DetailLink href="/zh/payment-fee-calculator">查看详细计算器</DetailLink>
              </ResultShell>
            )}

            {activePlatform === 'target' && targetResult && (
              <ResultShell>
                {targetResult.isValid ? (
                  <>
                    <MetricsGrid>
                      <BigMetric label="建议售价" value={targetResult.suggestedPrice} isCurrency primary />
                      <MetricCard label={dict.netProfit} value={targetResult.netProfit} isCurrency />
                      <MetricCard label={dict.breakEvenPrice} value={targetResult.breakEvenPrice} isCurrency />
                    </MetricsGrid>
                    <ResultBreakdown title={dict.results} rows={[
                      { label: dict.suggestedPrice, value: targetResult.suggestedPrice, highlight: true },
                      { label: dict.netProfit, value: targetResult.netProfit },
                      { label: dict.profitMargin, value: targetResult.profitMargin, isPercent: true },
                      { label: dict.breakEvenPrice, value: targetResult.breakEvenPrice },
                    ]} compact />
                  </>
                ) : (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                    <p className="text-red-700">{targetResult.errorMessage}</p>
                  </div>
                )}
                <DiagnosisButton href="/zh/profit-diagnosis-calculator">{zh.calculator.profitDiagnosis.enterProfitDiagnosis}</DiagnosisButton>
                <DetailLink href="/zh/target-profit-price-calculator">查看详细计算器</DetailLink>
              </ResultShell>
            )}

            {activePlatform === 'flipkart' && flipkartResult && (
              <ResultShell>
                <MetricsGrid>
                  <BigMetric label={dict.netProfit} value={flipkartResult.netProfit} isCurrency primary />
                  <BigMetric label={dict.profitMargin} value={flipkartResult.profitMargin} isPercent primary />
                  <MetricCard label={dict.roi} value={flipkartResult.roi} isPercent />
                  <MetricCard label={dict.breakEvenPrice} value={flipkartResult.breakEvenPrice} isCurrency />
                </MetricsGrid>
                <ResultBreakdown title={dict.results} rows={[
                  { label: '售价', value: flipkartResult.revenue },
                  { label: '佣金', value: -flipkartResult.platformFee },
                  { label: '代收费', value: -(flipkartValues.sellingPrice * flipkartValues.collectionFeeRate) },
                  { label: '费用GST', value: -((flipkartValues.sellingPrice * flipkartValues.commissionRate + flipkartValues.shippingCost + flipkartValues.sellingPrice * flipkartValues.collectionFeeRate) * flipkartValues.gstOnFeesRate) },
                  { label: dict.adCost, value: -flipkartValues.adCost },
                  { label: dict.refundLoss, value: -flipkartResult.refundLoss },
                  { label: dict.totalCost, value: -flipkartResult.totalCost },
                  { label: dict.netProfit, value: flipkartResult.netProfit, highlight: true, negative: flipkartResult.netProfit < 0 },
                ]} compact />
                <DiagnosisButton href="/zh/profit-diagnosis-calculator">{zh.calculator.profitDiagnosis.enterProfitDiagnosis}</DiagnosisButton>
                <DetailLink href="/zh/flipkart-profit-calculator">查看详细计算器</DetailLink>
              </ResultShell>
            )}

            {/* Empty State */}
            {!amazonResult && !tiktokResult && !shopifyResult && !paymentResult && !targetResult && !flipkartResult && (
              <div className="bg-white rounded-2xl border border-gray-200/60 card-shadow p-16 text-center">
                <div className="w-14 h-14 bg-gray-50 border border-gray-200/60 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm font-medium">输入参数并点击「计算」</p>
                <p className="text-gray-400 text-xs mt-1.5">结果将显示在这里</p>
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <p className="text-sm font-semibold text-gray-900">完全免费</p>
            <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">无需注册，无隐藏费用。立即开始计算。</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <p className="text-sm font-semibold text-gray-900">隐私优先</p>
            <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">所有计算在浏览器本地完成，零数据收集。</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-11 h-11 bg-violet-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <p className="text-sm font-semibold text-gray-900">双语支持</p>
            <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">支持中文和英文，服务全球卖家。</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">使用方法</h2>
            <p className="text-gray-500 mt-2.5">3 个简单步骤，获取真实利润</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">输入成本数据</h3>
              <p className="text-sm text-gray-500 leading-relaxed">产品成本、物流费用、广告支出和平台佣金。</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">点击计算</h3>
              <p className="text-sm text-gray-500 leading-relaxed">系统自动计算所有费用、扣减和利润率。</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">查看真实利润</h3>
              <p className="text-sm text-gray-500 leading-relaxed">一目了然地查看净利润、利润率、ROI 和保本价。</p>
            </div>
          </div>
        </div>

        {/* Seller Tips */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">利润优化技巧</h2>
            <p className="text-gray-500 mt-2.5">头部卖家提升利润率的实战策略</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-4.5 h-4.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">谈判供应商成本</h3>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">即使降低 $0.50 的产品成本，低价商品的利润率也能提升 2-3%。</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-4.5 h-4.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">优化广告支出</h3>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">密切关注 ACoS，亚马逊目标控制在 25% 以下，TikTok 每周测试新素材。</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-4.5 h-4.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">降低物流成本</h3>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">使用靠近需求的仓库，采用轻量化包装降低体积重量。</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-violet-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-4.5 h-4.5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">以利润率而非销量定价</h3>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">$30 的商品提价 $5，月销 500 单意味着每年多赚 $30,000 纯利润。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Is True Margin */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{zh.home.whatIsTrueMargin}</h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200/60 card-shadow p-8 lg:p-10">
            <p className="text-gray-600 leading-relaxed text-[15px]">{zh.home.trueMarginExplanation}</p>
          </div>
        </div>

        {/* Who Uses These Calculators */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{zh.home.sellerTypes}</h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200/60 card-shadow p-8 lg:p-10">
            <ul className="space-y-4">
              {zh.home.sellerTypesList.map((type, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-600 text-[15px] leading-relaxed">{type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tool Overview */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">我们的计算器</h2>
            <p className="text-gray-500 mt-2.5">针对各大电商平台的专业工具</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/zh/amazon-fba-profit-calculator" className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">📦</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{zh.tools.amazonFba.name}</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{zh.tools.amazonFba.shortDescription}</p>
            </Link>
            <Link href="/zh/tiktok-shop-profit-calculator" className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="w-11 h-11 bg-pink-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">🎵</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{zh.tools.tiktokShop.name}</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{zh.tools.tiktokShop.shortDescription}</p>
            </Link>
            <Link href="/zh/shopify-profit-calculator" className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">🛍️</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{zh.tools.shopify.name}</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{zh.tools.shopify.shortDescription}</p>
            </Link>
            <Link href="/zh/payment-fee-calculator" className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">💳</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{zh.tools.paymentFees.name}</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{zh.tools.paymentFees.shortDescription}</p>
            </Link>
            <Link href="/zh/target-profit-price-calculator" className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="w-11 h-11 bg-violet-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{zh.tools.targetPrice.name}</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{zh.tools.targetPrice.shortDescription}</p>
            </Link>
            <Link href="/zh/profit-diagnosis-calculator" className="bg-white rounded-2xl border border-blue-100 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-600">▦</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{zh.tools.profitDiagnosis.name}</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{zh.tools.profitDiagnosis.shortDescription}</p>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 mb-4">
          <FAQSection title="常见问题" items={zh.home.faq} />
        </div>
      </div>
    </div>
  );
}

function ResultShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-fade-in bg-white rounded-3xl border border-gray-200/70 card-shadow p-5 sm:p-6 space-y-5">
      {children}
    </div>
  );
}

function MetricsGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-x-6 gap-y-5">{children}</div>;
}

function BigMetric({ label, value, isPercent }: {
  label: string; value: number; isCurrency?: boolean; isPercent?: boolean; primary?: boolean;
}) {
  const formatted = isPercent
    ? `${(value * 100).toFixed(1)}%`
    : `${value >= 0 ? '+' : '-'}$${Math.abs(value).toFixed(2)}`;

  return (
    <div className="min-w-0">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">{label}</p>
      <p className={`text-3xl font-bold tabular-nums tracking-tight ${value >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
        {formatted}
      </p>
    </div>
  );
}

function MetricCard({ label, value, isPercent }: {
  label: string; value: number; isCurrency?: boolean; isPercent?: boolean; highlight?: boolean;
}) {
  const formatted = isPercent
    ? `${(value * 100).toFixed(1)}%`
    : `${value >= 0 ? '' : '-'}$${Math.abs(value).toFixed(2)}`;

  return (
    <div className="min-w-0 border-t border-gray-100 pt-4">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">{label}</p>
      <p className={`text-2xl font-bold tabular-nums tracking-tight ${value >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
        {formatted}
      </p>
    </div>
  );
}

function DiagnosisButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-colors"
    >
      {children}
    </Link>
  );
}

function DetailLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
      {children}
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
    </Link>
  );
}
