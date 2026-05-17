'use client';

import { useState } from 'react';
import CalculatorField from './CalculatorField';
import ResultBreakdown from './ResultBreakdown';
import { calculateTargetPrice } from '@/lib/calculators/targetPrice';
import type { TargetPriceResult } from '@/lib/calculators/targetPrice';

interface TargetPriceCalculatorProps {
  dict: {
    productCost: string;
    shippingCost: string;
    platformFeeRate: string;
    paymentFeeRate: string;
    fixedPaymentFee: string;
    adCost: string;
    refundRate: string;
    otherCost: string;
    mode: string;
    targetNetProfit: string;
    targetProfitMargin: string;
    calculate: string;
    results: string;
    suggestedPrice: string;
    netProfit: string;
    profitMargin: string;
    breakEvenPrice: string;
    formula: string;
    example: string;
    disclaimer: string;
  };
  formulaContent: React.ReactNode;
  exampleContent: React.ReactNode;
}

export default function TargetPriceCalculator({
  dict,
  formulaContent,
  exampleContent,
}: TargetPriceCalculatorProps) {
  const [productCost, setProductCost] = useState(15);
  const [shippingCost, setShippingCost] = useState(5);
  const [platformFeeRate, setPlatformFeeRate] = useState(0.15);
  const [paymentFeeRate, setPaymentFeeRate] = useState(0.03);
  const [fixedPaymentFee, setFixedPaymentFee] = useState(0.30);
  const [adCost, setAdCost] = useState(5);
  const [refundRate, setRefundRate] = useState(0.02);
  const [otherCost, setOtherCost] = useState(0);
  const [mode, setMode] = useState<'targetProfit' | 'targetMargin'>('targetProfit');
  const [targetNetProfit, setTargetNetProfit] = useState(10);
  const [targetProfitMargin, setTargetProfitMargin] = useState(0.2);
  const [result, setResult] = useState<TargetPriceResult | null>(null);

  const handleCalculate = () => {
    const res = calculateTargetPrice({
      productCost,
      shippingCost,
      platformFeeRate,
      paymentFeeRate,
      fixedPaymentFee,
      adCost,
      refundRate,
      otherCost,
      mode,
      targetNetProfit: mode === 'targetProfit' ? targetNetProfit : undefined,
      targetProfitMargin: mode === 'targetMargin' ? targetProfitMargin : undefined,
    });
    setResult(res);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Calculator */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
            <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Input</h2>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {dict.mode}
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setMode('targetProfit')}
                    className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all ${
                      mode === 'targetProfit'
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {dict.targetNetProfit}
                  </button>
                  <button
                    onClick={() => setMode('targetMargin')}
                    className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all ${
                      mode === 'targetMargin'
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {dict.targetProfitMargin}
                  </button>
                </div>
              </div>

              <div className="space-y-3.5">
                <CalculatorField
                  label={dict.productCost}
                  value={productCost}
                  onChange={setProductCost}
                  suffix="$"
                />
                <CalculatorField
                  label={dict.shippingCost}
                  value={shippingCost}
                  onChange={setShippingCost}
                  suffix="$"
                />
                <CalculatorField
                  label={dict.platformFeeRate}
                  value={platformFeeRate}
                  onChange={setPlatformFeeRate}
                  type="percent"
                />
                <CalculatorField
                  label={dict.paymentFeeRate}
                  value={paymentFeeRate}
                  onChange={setPaymentFeeRate}
                  type="percent"
                />
                <CalculatorField
                  label={dict.fixedPaymentFee}
                  value={fixedPaymentFee}
                  onChange={setFixedPaymentFee}
                  suffix="$"
                />
                <CalculatorField
                  label={dict.adCost}
                  value={adCost}
                  onChange={setAdCost}
                  suffix="$"
                />
                <CalculatorField
                  label={dict.refundRate}
                  value={refundRate}
                  onChange={setRefundRate}
                  type="percent"
                />
                <CalculatorField
                  label={dict.otherCost}
                  value={otherCost}
                  onChange={setOtherCost}
                  suffix="$"
                />

                {mode === 'targetProfit' ? (
                  <CalculatorField
                    label={dict.targetNetProfit}
                    value={targetNetProfit}
                    onChange={setTargetNetProfit}
                    suffix="$"
                  />
                ) : (
                  <CalculatorField
                    label={dict.targetProfitMargin}
                    value={targetProfitMargin}
                    onChange={setTargetProfitMargin}
                    type="percent"
                  />
                )}
              </div>

              <button
                onClick={handleCalculate}
                className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all shadow-sm shadow-blue-600/20"
              >
                {dict.calculate}
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-7">
          {result && !result.isValid && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-4">
              <p className="text-red-700">{result.errorMessage}</p>
            </div>
          )}
          {result && result.isValid ? (
            <div className="space-y-5 animate-fade-in">
              {/* Primary Result */}
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-200 p-6 text-center">
                <p className="text-sm font-medium text-emerald-700 mb-1">{dict.suggestedPrice}</p>
                <p className="text-4xl font-bold text-emerald-700 tabular-nums">${result.suggestedPrice.toFixed(2)}</p>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 hover:shadow-md transition-shadow">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{dict.netProfit}</p>
                  <p className={`text-xl font-bold tabular-nums ${result.netProfit >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                    {result.netProfit >= 0 ? '+' : '-'}${Math.abs(result.netProfit).toFixed(2)}
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 hover:shadow-md transition-shadow">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{dict.breakEvenPrice}</p>
                  <p className="text-xl font-bold tabular-nums text-gray-900">
                    ${result.breakEvenPrice.toFixed(2)}
                  </p>
                </div>
              </div>

              <ResultBreakdown
                title={dict.results}
                rows={[
                  { label: dict.suggestedPrice, value: result.suggestedPrice, highlight: true },
                  { label: dict.netProfit, value: result.netProfit },
                  {
                    label: dict.profitMargin,
                    value: result.profitMargin,
                    isPercent: true,
                  },
                  { label: dict.breakEvenPrice, value: result.breakEvenPrice },
                ]}
              />
            </div>
          ) : !result ? (
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
          ) : null}
        </div>
      </div>

      {/* Formula & Example */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
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

      <div className="mt-6 bg-amber-50 border border-amber-200/80 rounded-2xl p-4">
        <p className="text-xs text-amber-800">{dict.disclaimer}</p>
      </div>
    </div>
  );
}
