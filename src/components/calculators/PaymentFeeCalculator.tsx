'use client';

import { useState } from 'react';
import CalculatorField from './CalculatorField';
import ResultBreakdown from './ResultBreakdown';
import { calculatePaymentFee } from '@/lib/calculators/paymentFees';
import type { PaymentFeeResult } from '@/lib/calculators/paymentFees';

interface PaymentFeeCalculatorProps {
  dict: {
    amount: string;
    feeRate: string;
    fixedFee: string;
    mode: string;
    grossToNet: string;
    netToGross: string;
    grossAmount: string;
    netAmount: string;
    feeAmount: string;
    effectiveFeeRate: string;
    calculate: string;
    results: string;
    formula: string;
    example: string;
    disclaimer: string;
  };
  formulaContent: React.ReactNode;
  exampleContent: React.ReactNode;
}

export default function PaymentFeeCalculator({
  dict,
  formulaContent,
  exampleContent,
}: PaymentFeeCalculatorProps) {
  const [amount, setAmount] = useState(100);
  const [feeRate, setFeeRate] = useState(0.03);
  const [fixedFee, setFixedFee] = useState(0.30);
  const [mode, setMode] = useState<'grossToNet' | 'netToGross'>('grossToNet');
  const [result, setResult] = useState<PaymentFeeResult | null>(null);

  const handleCalculate = () => {
    const res = calculatePaymentFee({ amount, feeRate, fixedFee, mode });
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
                    onClick={() => setMode('grossToNet')}
                    className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all ${
                      mode === 'grossToNet'
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {dict.grossToNet}
                  </button>
                  <button
                    onClick={() => setMode('netToGross')}
                    className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all ${
                      mode === 'netToGross'
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {dict.netToGross}
                  </button>
                </div>
              </div>

              <div className="space-y-3.5">
                <CalculatorField
                  label={dict.amount}
                  value={amount}
                  onChange={setAmount}
                  suffix="$"
                />
                <CalculatorField
                  label={dict.feeRate}
                  value={feeRate}
                  onChange={setFeeRate}
                  type="percent"
                />
                <CalculatorField
                  label={dict.fixedFee}
                  value={fixedFee}
                  onChange={setFixedFee}
                  suffix="$"
                />
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
          {result ? (
            <div className="space-y-5 animate-fade-in">
              {/* Primary Result */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-5">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                  {mode === 'grossToNet' ? dict.netAmount : dict.grossAmount}
                </p>
                <p className="text-3xl font-bold text-gray-900 tabular-nums">
                  ${mode === 'grossToNet' ? result.netAmount.toFixed(2) : result.grossAmount.toFixed(2)}
                </p>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 hover:shadow-md transition-shadow">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{dict.grossAmount}</p>
                  <p className="text-xl font-bold tabular-nums text-gray-900">${result.grossAmount.toFixed(2)}</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 hover:shadow-md transition-shadow">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{dict.feeAmount}</p>
                  <p className="text-xl font-bold tabular-nums text-red-500">-${result.feeAmount.toFixed(2)}</p>
                </div>
              </div>

              <ResultBreakdown
                title={dict.results}
                rows={[
                  { label: dict.grossAmount, value: result.grossAmount },
                  { label: dict.feeAmount, value: -result.feeAmount },
                  { label: dict.netAmount, value: result.netAmount, highlight: true },
                  {
                    label: dict.effectiveFeeRate,
                    value: result.effectiveFeeRate,
                    isPercent: true,
                  },
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
