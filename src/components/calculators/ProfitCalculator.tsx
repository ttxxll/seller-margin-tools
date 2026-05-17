'use client';

import { useState } from 'react';
import CalculatorField from './CalculatorField';
import ResultBreakdown from './ResultBreakdown';
import {
  calculateProfit,
  calculateAmazonFbaProfit,
  calculateTikTokShopProfit,
  calculateShopifyProfit,
  calculateFlipkartProfit,
} from '@/lib/calculators/profit';
import type { ProfitResult } from '@/lib/calculators/profit';

interface FieldConfig {
  key: string;
  label: string;
  type: 'number' | 'percent';
  suffix?: string;
  hint?: string;
  defaultValue: number;
}

interface ProfitCalculatorProps {
  title: string;
  description: string;
  calculatorType: 'amazonFba' | 'tiktokShop' | 'shopify' | 'flipkart' | 'generic';
  fields: FieldConfig[];
  dict: {
    calculate: string;
    results: string;
    formula: string;
    example: string;
    disclaimer: string;
    netProfit: string;
    profitMargin: string;
    roi: string;
    breakEvenPrice: string;
    totalCost: string;
    revenue: string;
    platformFee: string;
    paymentFee: string;
    refundLoss: string;
  };
  formulaContent: React.ReactNode;
  exampleContent: React.ReactNode;
}

export default function ProfitCalculator({
  title,
  description,
  calculatorType,
  fields,
  dict,
  formulaContent,
  exampleContent,
}: ProfitCalculatorProps) {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(fields.map((f) => [f.key, f.defaultValue]))
  );
  const [result, setResult] = useState<ProfitResult | null>(null);

  const handleCalculate = () => {
    let res: ProfitResult;

    switch (calculatorType) {
      case 'amazonFba':
        res = calculateAmazonFbaProfit({
          sellingPrice: values.sellingPrice,
          productCost: values.productCost,
          shippingCost: values.shippingCost,
          referralFeeRate: values.referralFeeRate,
          fulfillmentFee: values.fulfillmentFee,
          storageCost: values.storageCost,
          paymentFeeRate: values.paymentFeeRate,
          fixedPaymentFee: values.fixedPaymentFee,
          adCost: values.adCost,
          refundRate: values.refundRate,
          otherCost: values.otherCost,
        });
        break;
      case 'tiktokShop':
        res = calculateTikTokShopProfit({
          sellingPrice: values.sellingPrice,
          productCost: values.productCost,
          shippingCost: values.shippingCost,
          platformFeeRate: values.platformFeeRate,
          creatorCommissionRate: values.creatorCommissionRate,
          paymentFeeRate: values.paymentFeeRate,
          fixedPaymentFee: values.fixedPaymentFee,
          adCost: values.adCost,
          refundRate: values.refundRate,
          otherCost: values.otherCost,
        });
        break;
      case 'shopify':
        res = calculateShopifyProfit({
          sellingPrice: values.sellingPrice,
          productCost: values.productCost,
          shippingCost: values.shippingCost,
          platformFeeRate: values.platformFeeRate,
          paymentFeeRate: values.paymentFeeRate,
          fixedPaymentFee: values.fixedPaymentFee,
          appCost: values.appCost,
          adCost: values.adCost,
          refundRate: values.refundRate,
          otherCost: values.otherCost,
        });
        break;
      case 'flipkart':
        res = calculateFlipkartProfit({
          sellingPrice: values.sellingPrice,
          productCost: values.productCost,
          shippingCost: values.shippingCost,
          commissionRate: values.commissionRate,
          collectionFeeRate: values.collectionFeeRate,
          gstOnFeesRate: values.gstOnFeesRate,
          fixedFee: values.fixedFee,
          adCost: values.adCost,
          refundRate: values.refundRate,
          otherCost: values.otherCost,
        });
        break;
      default:
        res = calculateProfit({
          sellingPrice: values.sellingPrice,
          productCost: values.productCost,
          shippingCost: values.shippingCost,
          platformFeeRate: values.platformFeeRate,
          paymentFeeRate: values.paymentFeeRate,
          fixedPaymentFee: values.fixedPaymentFee,
          adCost: values.adCost,
          refundRate: values.refundRate,
          otherCost: values.otherCost,
        });
    }

    setResult(res);
  };

  const updateValue = (key: string, value: number) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">{title}</h1>
          <p className="text-base text-gray-500">{description}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Main Grid: Input | Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Input */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden sticky top-28">
            <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Input</h2>
            </div>
            <div className="p-5 space-y-3.5 max-h-[calc(100vh-200px)] overflow-y-auto">
              {fields.map((field) => (
                <CalculatorField
                  key={field.key}
                  label={field.label}
                  value={values[field.key]}
                  onChange={(v) => updateValue(field.key, v)}
                  type={field.type}
                  suffix={field.suffix}
                  hint={field.hint}
                />
              ))}
              <button
                onClick={handleCalculate}
                className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all shadow-sm shadow-blue-600/20"
              >
                {dict.calculate}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Results */}
        <div className="lg:col-span-7">
          {result ? (
            <div className="space-y-5 animate-fade-in">
              {/* Primary Metrics */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{dict.netProfit}</p>
                    <p className={`text-2xl font-bold tabular-nums ${result.netProfit >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                      {result.netProfit >= 0 ? '+' : '-'}${Math.abs(result.netProfit).toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{dict.profitMargin}</p>
                    <p className={`text-2xl font-bold tabular-nums ${result.profitMargin >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                      {(result.profitMargin * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 hover:shadow-md transition-shadow">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{dict.roi}</p>
                  <p className={`text-xl font-bold tabular-nums ${result.roi >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                    {(result.roi * 100).toFixed(1)}%
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 hover:shadow-md transition-shadow">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{dict.breakEvenPrice}</p>
                  <p className="text-xl font-bold tabular-nums text-gray-900">
                    ${result.breakEvenPrice.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Breakdown */}
              <ResultBreakdown
                title={dict.results}
                rows={[
                  { label: dict.revenue, value: result.revenue },
                  { label: dict.platformFee, value: -result.platformFee },
                  { label: dict.paymentFee, value: -result.paymentFee },
                  { label: dict.refundLoss, value: -result.refundLoss },
                  { label: dict.totalCost, value: -result.totalCost },
                  { label: dict.netProfit, value: result.netProfit, highlight: true, negative: result.netProfit < 0 },
                ]}
              />
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200/80 p-16 text-center h-full flex items-center justify-center">
              <div>
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm font-medium">Click Calculate to see results</p>
                <p className="text-gray-400 text-xs mt-1">Results will appear here</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Formula & Example — Full width below calculator */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
          <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{dict.formula}</h2>
          </div>
          <div className="p-5 text-xs">{formulaContent}</div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
          <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{dict.example}</h2>
          </div>
          <div className="p-5 text-xs">{exampleContent}</div>
        </div>
      </div>
      <div className="mt-4 bg-amber-50 border border-amber-200/80 rounded-2xl p-4">
        <p className="text-xs text-amber-800">{dict.disclaimer}</p>
      </div>
      </div>
    </div>
  );
}
