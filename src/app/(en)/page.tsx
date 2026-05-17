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
import en from '@/lib/i18n/en.json';
import FAQSection from '@/components/seo/FAQSection';

type Platform = 'amazon' | 'tiktok' | 'shopify' | 'payment' | 'target' | 'flipkart';

const platforms = [
  { id: 'amazon' as Platform, name: 'Amazon FBA', icon: '📦' },
  { id: 'tiktok' as Platform, name: 'TikTok Shop', icon: '🎵' },
  { id: 'shopify' as Platform, name: 'Shopify', icon: '🛍️' },
  { id: 'payment' as Platform, name: 'Payment Fees', icon: '💳' },
  { id: 'target' as Platform, name: 'Target Price', icon: '🎯' },
  { id: 'flipkart' as Platform, name: 'Flipkart', icon: '🛒' },
];

export default function HomePage() {
  const [activePlatform, setActivePlatform] = useState<Platform>('amazon');
  const dict = en.calculator;

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
              Seller margin & profit tool
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              Seller Margin & <span className="text-blue-600">Seller Profit Calculator</span>
            </h1>
            <p className="text-lg text-gray-500 mt-4 leading-relaxed max-w-xl">
              Calculate true seller margins and seller profits after platform fees, shipping, ads & refunds. Built for Amazon FBA, TikTok Shop, Shopify & Flipkart sellers.
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
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Input Parameters</h2>
              </div>
              <div className="p-5 space-y-3.5 max-h-[calc(100vh-200px)] overflow-y-auto">
                {activePlatform === 'amazon' && (
                  <>
                    <CalculatorField label={dict.sellingPrice} value={amazonValues.sellingPrice} onChange={(v) => setAmazonValues(p => ({...p, sellingPrice: v}))} suffix="$" />
                    <CalculatorField label={dict.productCost} value={amazonValues.productCost} onChange={(v) => setAmazonValues(p => ({...p, productCost: v}))} suffix="$" />
                    <CalculatorField label={dict.shippingCost} value={amazonValues.shippingCost} onChange={(v) => setAmazonValues(p => ({...p, shippingCost: v}))} suffix="$" />
                    <CalculatorField label="Referral Fee" value={amazonValues.referralFeeRate} onChange={(v) => setAmazonValues(p => ({...p, referralFeeRate: v}))} type="percent" />
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
                    <CalculatorField label="Platform Fee" value={tiktokValues.platformFeeRate} onChange={(v) => setTiktokValues(p => ({...p, platformFeeRate: v}))} type="percent" />
                    <CalculatorField label="Creator Commission" value={tiktokValues.creatorCommissionRate} onChange={(v) => setTiktokValues(p => ({...p, creatorCommissionRate: v}))} type="percent" />
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
                    <CalculatorField label="Payment Fee" value={shopifyValues.paymentFeeRate} onChange={(v) => setShopifyValues(p => ({...p, paymentFeeRate: v}))} type="percent" />
                    <CalculatorField label="App Cost" value={shopifyValues.appCost} onChange={(v) => setShopifyValues(p => ({...p, appCost: v}))} suffix="$/mo" />
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
                        Gross → Net
                      </button>
                      <button onClick={() => setPaymentValues(p => ({...p, mode: 'netToGross'}))}
                        className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all ${paymentValues.mode === 'netToGross' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                        Net → Gross
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
                    <CalculatorField label="Platform Fee" value={targetValues.platformFeeRate} onChange={(v) => setTargetValues(p => ({...p, platformFeeRate: v}))} type="percent" />
                    <CalculatorField label="Payment Fee" value={targetValues.paymentFeeRate} onChange={(v) => setTargetValues(p => ({...p, paymentFeeRate: v}))} type="percent" />
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
              <div className="space-y-5 animate-fade-in">
                <div className="bg-gradient-to-br from-blue-50/80 to-white rounded-2xl border border-blue-100/60 p-6 result-glow">
                  <div className="grid grid-cols-2 gap-4">
                    <BigMetric label={dict.netProfit} value={amazonResult.netProfit} isCurrency primary />
                    <BigMetric label={dict.profitMargin} value={amazonResult.profitMargin} isPercent primary />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <MetricCard label={dict.roi} value={amazonResult.roi} isPercent />
                  <MetricCard label={dict.breakEvenPrice} value={amazonResult.breakEvenPrice} isCurrency />
                </div>
                <ResultBreakdown title={dict.results} rows={[
                  { label: 'Revenue', value: amazonResult.revenue },
                  { label: 'Referral Fee', value: -amazonResult.platformFee },
                  { label: 'Fulfillment + Storage', value: -(amazonValues.fulfillmentFee + amazonValues.storageCost) },
                  { label: dict.adCost, value: -amazonValues.adCost },
                  { label: dict.refundLoss, value: -amazonResult.refundLoss },
                  { label: dict.totalCost, value: -amazonResult.totalCost },
                  { label: dict.netProfit, value: amazonResult.netProfit, highlight: true, negative: amazonResult.netProfit < 0 },
                ]} />
                <Link href="/amazon-fba-profit-calculator" className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  View detailed calculator
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            )}

            {activePlatform === 'tiktok' && tiktokResult && (
              <div className="space-y-5 animate-fade-in">
                <div className="bg-gradient-to-br from-blue-50/80 to-white rounded-2xl border border-blue-100/60 p-6 result-glow">
                  <div className="grid grid-cols-2 gap-4">
                    <BigMetric label={dict.netProfit} value={tiktokResult.netProfit} isCurrency primary />
                    <BigMetric label={dict.profitMargin} value={tiktokResult.profitMargin} isPercent primary />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <MetricCard label={dict.roi} value={tiktokResult.roi} isPercent />
                  <MetricCard label={dict.breakEvenPrice} value={tiktokResult.breakEvenPrice} isCurrency />
                </div>
                <ResultBreakdown title={dict.results} rows={[
                  { label: 'Revenue', value: tiktokResult.revenue },
                  { label: 'Platform Fee', value: -tiktokResult.platformFee },
                  { label: 'Creator Commission', value: -(tiktokValues.sellingPrice * tiktokValues.creatorCommissionRate) },
                  { label: dict.adCost, value: -tiktokValues.adCost },
                  { label: dict.refundLoss, value: -tiktokResult.refundLoss },
                  { label: dict.totalCost, value: -tiktokResult.totalCost },
                  { label: dict.netProfit, value: tiktokResult.netProfit, highlight: true, negative: tiktokResult.netProfit < 0 },
                ]} />
                <Link href="/tiktok-shop-profit-calculator" className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  View detailed calculator
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            )}

            {activePlatform === 'shopify' && shopifyResult && (
              <div className="space-y-5 animate-fade-in">
                <div className="bg-gradient-to-br from-blue-50/80 to-white rounded-2xl border border-blue-100/60 p-6 result-glow">
                  <div className="grid grid-cols-2 gap-4">
                    <BigMetric label={dict.netProfit} value={shopifyResult.netProfit} isCurrency primary />
                    <BigMetric label={dict.profitMargin} value={shopifyResult.profitMargin} isPercent primary />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <MetricCard label={dict.roi} value={shopifyResult.roi} isPercent />
                  <MetricCard label={dict.breakEvenPrice} value={shopifyResult.breakEvenPrice} isCurrency />
                </div>
                <ResultBreakdown title={dict.results} rows={[
                  { label: 'Revenue', value: shopifyResult.revenue },
                  { label: 'Payment Fee', value: -shopifyResult.paymentFee },
                  { label: 'App Cost', value: -shopifyValues.appCost },
                  { label: dict.adCost, value: -shopifyValues.adCost },
                  { label: dict.refundLoss, value: -shopifyResult.refundLoss },
                  { label: dict.totalCost, value: -shopifyResult.totalCost },
                  { label: dict.netProfit, value: shopifyResult.netProfit, highlight: true, negative: shopifyResult.netProfit < 0 },
                ]} />
                <Link href="/shopify-profit-calculator" className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  View detailed calculator
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            )}

            {activePlatform === 'payment' && paymentResult && (
              <div className="space-y-5 animate-fade-in">
                <div className="bg-gradient-to-br from-blue-50/80 to-white rounded-2xl border border-blue-100/60 p-6 result-glow">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">Net Amount</p>
                  <p className="text-3xl font-bold text-gray-900 tabular-nums tracking-tight">${paymentResult.netAmount.toFixed(2)}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <MetricCard label={dict.feeAmount} value={paymentResult.feeAmount} isCurrency />
                  <MetricCard label="Effective Rate" value={paymentResult.effectiveFeeRate} isPercent />
                </div>
                <Link href="/payment-fee-calculator" className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  View detailed calculator
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            )}

            {activePlatform === 'target' && targetResult && (
              <div className="space-y-5 animate-fade-in">
                {targetResult.isValid ? (
                  <>
                    <div className="bg-gradient-to-br from-emerald-50/80 to-white rounded-2xl border border-emerald-200/60 p-7 text-center result-glow-success">
                      <p className="text-sm font-medium text-emerald-600 mb-2">Suggested Selling Price</p>
                      <p className="text-4xl font-bold text-emerald-700 tabular-nums tracking-tight">${targetResult.suggestedPrice.toFixed(2)}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <MetricCard label={dict.netProfit} value={targetResult.netProfit} isCurrency />
                      <MetricCard label={dict.breakEvenPrice} value={targetResult.breakEvenPrice} isCurrency />
                    </div>
                  </>
                ) : (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                    <p className="text-red-700">{targetResult.errorMessage}</p>
                  </div>
                )}
                <Link href="/target-profit-price-calculator" className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  View detailed calculator
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            )}

            {activePlatform === 'flipkart' && flipkartResult && (
              <div className="space-y-5 animate-fade-in">
                <div className="bg-gradient-to-br from-blue-50/80 to-white rounded-2xl border border-blue-100/60 p-6 result-glow">
                  <div className="grid grid-cols-2 gap-4">
                    <BigMetric label={dict.netProfit} value={flipkartResult.netProfit} isCurrency primary />
                    <BigMetric label={dict.profitMargin} value={flipkartResult.profitMargin} isPercent primary />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <MetricCard label={dict.roi} value={flipkartResult.roi} isPercent />
                  <MetricCard label={dict.breakEvenPrice} value={flipkartResult.breakEvenPrice} isCurrency />
                </div>
                <ResultBreakdown title={dict.results} rows={[
                  { label: 'Revenue', value: flipkartResult.revenue },
                  { label: 'Commission', value: -flipkartResult.platformFee },
                  { label: 'Collection Fee', value: -(flipkartValues.sellingPrice * flipkartValues.collectionFeeRate) },
                  { label: 'GST on Fees', value: -((flipkartValues.sellingPrice * flipkartValues.commissionRate + flipkartValues.shippingCost + flipkartValues.sellingPrice * flipkartValues.collectionFeeRate) * flipkartValues.gstOnFeesRate) },
                  { label: dict.adCost, value: -flipkartValues.adCost },
                  { label: dict.refundLoss, value: -flipkartResult.refundLoss },
                  { label: dict.totalCost, value: -flipkartResult.totalCost },
                  { label: dict.netProfit, value: flipkartResult.netProfit, highlight: true, negative: flipkartResult.netProfit < 0 },
                ]} />
                <Link href="/flipkart-profit-calculator" className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  View detailed calculator
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            )}

            {/* Empty State */}
            {!amazonResult && !tiktokResult && !shopifyResult && !paymentResult && !targetResult && !flipkartResult && (
              <div className="bg-white rounded-2xl border border-gray-200/60 card-shadow p-16 text-center">
                <div className="w-14 h-14 bg-gray-50 border border-gray-200/60 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm font-medium">Enter values and click Calculate</p>
                <p className="text-gray-400 text-xs mt-1.5">Results will appear here</p>
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
            <p className="text-sm font-semibold text-gray-900">100% Free</p>
            <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">No registration, no hidden fees. Start calculating immediately.</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <p className="text-sm font-semibold text-gray-900">Privacy First</p>
            <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">All calculations run locally in your browser. Zero data collection.</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-11 h-11 bg-violet-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <p className="text-sm font-semibold text-gray-900">Bilingual</p>
            <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">Available in English and Chinese for global sellers.</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">How It Works</h2>
            <p className="text-gray-500 mt-2.5">Get your true profit in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">Enter Your Costs</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Product cost, shipping, ad spend, and platform-specific fees.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">Click Calculate</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Our engine computes all fees, deductions, and margins instantly.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">See Your True Profit</h3>
              <p className="text-sm text-gray-500 leading-relaxed">View net profit, margin, ROI, and break-even price at a glance.</p>
            </div>
          </div>
        </div>

        {/* Seller Tips */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Profit Optimization Tips</h2>
            <p className="text-gray-500 mt-2.5">Strategies used by top sellers to maximize margins</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-4.5 h-4.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Negotiate Supplier Costs</h3>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">Even a $0.50 reduction in product cost can increase margin by 2-3% on low-price items.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-4.5 h-4.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Optimize Ad Spend</h3>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">Track ACoS closely. Aim for under 25% on Amazon, and test TikTok creatives weekly.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-4.5 h-4.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Reduce Shipping Costs</h3>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">Use fulfillment centers closer to demand. Consider lightweight packaging to lower dimensional weight.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-violet-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-4.5 h-4.5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Price for Margin, Not Volume</h3>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">A $5 price increase on a $30 item with 500 monthly sales adds $30,000/year in pure profit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Is True Margin */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{en.home.whatIsTrueMargin}</h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200/60 card-shadow p-8 lg:p-10">
            <p className="text-gray-600 leading-relaxed text-[15px]">{en.home.trueMarginExplanation}</p>
          </div>
        </div>

        {/* Who Uses These Calculators */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{en.home.sellerTypes}</h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200/60 card-shadow p-8 lg:p-10">
            <ul className="space-y-4">
              {en.home.sellerTypesList.map((type, i) => (
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
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Our Calculators</h2>
            <p className="text-gray-500 mt-2.5">Specialized tools for every major e-commerce platform</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/amazon-fba-profit-calculator" className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">📦</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{en.tools.amazonFba.name}</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{en.tools.amazonFba.shortDescription}</p>
            </Link>
            <Link href="/tiktok-shop-profit-calculator" className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="w-11 h-11 bg-pink-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">🎵</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{en.tools.tiktokShop.name}</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{en.tools.tiktokShop.shortDescription}</p>
            </Link>
            <Link href="/shopify-profit-calculator" className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">🛍️</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{en.tools.shopify.name}</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{en.tools.shopify.shortDescription}</p>
            </Link>
            <Link href="/payment-fee-calculator" className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">💳</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{en.tools.paymentFees.name}</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{en.tools.paymentFees.shortDescription}</p>
            </Link>
            <Link href="/target-profit-price-calculator" className="bg-white rounded-2xl border border-gray-200/60 p-7 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="w-11 h-11 bg-violet-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{en.tools.targetPrice.name}</h3>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{en.tools.targetPrice.shortDescription}</p>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 mb-4">
          <FAQSection title="Frequently Asked Questions" items={en.home.faq} />
        </div>
      </div>
    </div>
  );
}

function BigMetric({ label, value, isPercent }: {
  label: string; value: number; isCurrency?: boolean; isPercent?: boolean; primary?: boolean;
}) {
  const formatted = isPercent
    ? `${(value * 100).toFixed(1)}%`
    : `${value >= 0 ? '+' : '-'}$${Math.abs(value).toFixed(2)}`;

  return (
    <div>
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">{label}</p>
      <p className={`text-3xl font-bold tabular-nums tracking-tight ${value >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
        {formatted}
      </p>
    </div>
  );
}

function MetricCard({ label, value, isPercent, highlight }: {
  label: string; value: number; isCurrency?: boolean; isPercent?: boolean; highlight?: boolean;
}) {
  const formatted = isPercent
    ? `${(value * 100).toFixed(1)}%`
    : `${value >= 0 ? '' : '-'}$${Math.abs(value).toFixed(2)}`;

  return (
    <div className={`rounded-2xl border p-5 hover:shadow-lg transition-all duration-200 ${highlight ? 'border-blue-200 bg-blue-50/50 result-glow' : 'bg-white border-gray-200/60 card-shadow hover:-translate-y-0.5'}`}>
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">{label}</p>
      <p className={`text-2xl font-bold tabular-nums tracking-tight ${value >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
        {formatted}
      </p>
    </div>
  );
}
