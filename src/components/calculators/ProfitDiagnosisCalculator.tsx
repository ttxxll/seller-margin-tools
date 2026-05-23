'use client';

import { useMemo, useState } from 'react';
import CalculatorField from './CalculatorField';
import ResultBreakdown from './ResultBreakdown';
import {
  calculateProfitDiagnosis,
  type CostLeverCode,
  type DiagnosisCode,
  type DiagnosisSeverity,
  type ProfitScenarioInput,
} from '@/lib/calculators/profitDiagnosis';
import type { ProfitResult } from '@/lib/calculators/profit';

interface ScenarioAdjustment {
  name: string;
  sellingPriceChange: number;
  productCostChange: number;
  shippingCostChange: number;
  platformFeeRateChange: number;
  paymentFeeRateChange: number;
  adCostChange: number;
  refundRateChange: number;
}

type BaselineNumberKey = Exclude<keyof ProfitScenarioInput, 'name'>;
type ScenarioAdjustmentNumberKey = Exclude<keyof ScenarioAdjustment, 'name'>;

interface ProfitDiagnosisCalculatorProps {
  dict: {
    sellingPrice: string;
    productCost: string;
    shippingCost: string;
    platformFeeRate: string;
    paymentFeeRate: string;
    fixedPaymentFee: string;
    adCost: string;
    refundRate: string;
    otherCost: string;
    totalCost: string;
    netProfit: string;
    profitMargin: string;
    roi: string;
    breakEvenPrice: string;
    revenue: string;
    platformFee: string;
    paymentFee: string;
    refundLoss: string;
    results: string;
    costBreakdown: string;
    disclaimer: string;
    profitDiagnosis: {
      title: string;
      description: string;
      baseline: string;
      scenarioAdjustments: string;
      scenarioA: string;
      scenarioB: string;
      scenarioC: string;
      bestScenario: string;
      comparison: string;
      diagnosis: string;
      topLevers: string;
      deltaVsBaseline: string;
      priceChange: string;
      productCostChange: string;
      shippingCostChange: string;
      platformFeeRateChange: string;
      paymentFeeRateChange: string;
      adCostChange: string;
      refundRateChange: string;
      percentagePointHint: string;
      baselineLabel: string;
      netProfitDelta: string;
      totalCostDelta: string;
      costShare: string;
      noWarnings: string;
      diagnosisLabels: Record<DiagnosisCode, string>;
      leverLabels: Record<CostLeverCode, string>;
    };
  };
}

const defaultBaseline: ProfitScenarioInput = {
  name: 'Baseline',
  sellingPrice: 39.99,
  productCost: 12,
  shippingCost: 4,
  platformFeeRate: 0.15,
  paymentFeeRate: 0.03,
  fixedPaymentFee: 0.3,
  adCost: 6,
  refundRate: 0.03,
  otherCost: 1,
};

const defaultAdjustments: ScenarioAdjustment[] = [
  {
    name: 'Plan A',
    sellingPriceChange: 3,
    productCostChange: 0,
    shippingCostChange: 0,
    platformFeeRateChange: 0,
    paymentFeeRateChange: 0,
    adCostChange: 0,
    refundRateChange: 0,
  },
  {
    name: 'Plan B',
    sellingPriceChange: 0,
    productCostChange: -2,
    shippingCostChange: -1,
    platformFeeRateChange: 0,
    paymentFeeRateChange: 0,
    adCostChange: 0,
    refundRateChange: 0,
  },
  {
    name: 'Plan C',
    sellingPriceChange: 0,
    productCostChange: 0,
    shippingCostChange: 0,
    platformFeeRateChange: 0,
    paymentFeeRateChange: 0,
    adCostChange: -2,
    refundRateChange: -1,
  },
];

export default function ProfitDiagnosisCalculator({ dict }: ProfitDiagnosisCalculatorProps) {
  const copy = dict.profitDiagnosis;
  const [baseline, setBaseline] = useState(defaultBaseline);
  const [adjustments, setAdjustments] = useState(defaultAdjustments);

  const scenarios = useMemo(
    () => adjustments.map((adjustment, index) => buildScenario(baseline, adjustment, getScenarioName(copy, index))),
    [adjustments, baseline, copy]
  );

  const diagnosis = useMemo(
    () => calculateProfitDiagnosis({
      baseline: { ...baseline, name: copy.baselineLabel },
      scenarios,
    }),
    [baseline, copy.baselineLabel, scenarios]
  );

  const best = diagnosis.bestScenario;
  const bestLevers = best.topLevers.slice(0, 5);
  const visibleDiagnoses = best.diagnosis.slice(0, 4);

  const updateBaseline = (key: BaselineNumberKey, value: number) => {
    setBaseline((prev) => ({ ...prev, [key]: value }));
  };

  const updateAdjustment = (index: number, key: ScenarioAdjustmentNumberKey, value: number) => {
    setAdjustments((prev) => prev.map((item, itemIndex) => (
      itemIndex === index ? { ...item, [key]: value } : item
    )));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden sticky top-28">
            <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{copy.baseline}</h2>
            </div>
            <div className="p-5 space-y-3.5 max-h-[calc(100vh-200px)] overflow-y-auto">
              <CalculatorField label={dict.sellingPrice} value={baseline.sellingPrice} onChange={(value) => updateBaseline('sellingPrice', value)} suffix="$" />
              <CalculatorField label={dict.productCost} value={baseline.productCost} onChange={(value) => updateBaseline('productCost', value)} suffix="$" />
              <CalculatorField label={dict.shippingCost} value={baseline.shippingCost} onChange={(value) => updateBaseline('shippingCost', value)} suffix="$" />
              <CalculatorField label={dict.platformFeeRate} value={baseline.platformFeeRate} onChange={(value) => updateBaseline('platformFeeRate', value)} type="percent" max={0.99} />
              <CalculatorField label={dict.paymentFeeRate} value={baseline.paymentFeeRate} onChange={(value) => updateBaseline('paymentFeeRate', value)} type="percent" max={0.99} />
              <CalculatorField label={dict.fixedPaymentFee} value={baseline.fixedPaymentFee} onChange={(value) => updateBaseline('fixedPaymentFee', value)} suffix="$" />
              <CalculatorField label={dict.adCost} value={baseline.adCost} onChange={(value) => updateBaseline('adCost', value)} suffix="$" />
              <CalculatorField label={dict.refundRate} value={baseline.refundRate} onChange={(value) => updateBaseline('refundRate', value)} type="percent" max={0.99} />
              <CalculatorField label={dict.otherCost} value={baseline.otherCost} onChange={(value) => updateBaseline('otherCost', value)} suffix="$" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="bg-gradient-to-br from-blue-50/80 to-white rounded-2xl border border-blue-100/70 p-6 result-glow">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">{copy.bestScenario}</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{best.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{copy.deltaVsBaseline}: {formatCurrency(best.deltaFromBaseline.netProfit)}</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-right">
                <Metric label={dict.netProfit} value={formatCurrency(best.result.netProfit, true)} positive={best.result.netProfit >= 0} />
                <Metric label={dict.profitMargin} value={formatPercent(best.result.profitMargin)} positive={best.result.profitMargin >= 0.1} />
                <Metric label={dict.roi} value={formatPercent(best.result.roi)} positive={best.result.roi >= 0} />
              </div>
            </div>
          </div>

          <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
            <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{copy.scenarioAdjustments}</h2>
              <p className="text-xs text-gray-400 mt-1">{copy.percentagePointHint}</p>
            </div>
            <div className="divide-y divide-gray-100">
              {adjustments.map((adjustment, index) => (
                <div key={adjustment.name} className="p-5">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">{getScenarioName(copy, index)}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <CalculatorField label={copy.priceChange} value={adjustment.sellingPriceChange} onChange={(value) => updateAdjustment(index, 'sellingPriceChange', value)} suffix="$" min={-baseline.sellingPrice} />
                    <CalculatorField label={copy.productCostChange} value={adjustment.productCostChange} onChange={(value) => updateAdjustment(index, 'productCostChange', value)} suffix="$" min={-baseline.productCost} />
                    <CalculatorField label={copy.shippingCostChange} value={adjustment.shippingCostChange} onChange={(value) => updateAdjustment(index, 'shippingCostChange', value)} suffix="$" min={-baseline.shippingCost} />
                    <CalculatorField label={copy.adCostChange} value={adjustment.adCostChange} onChange={(value) => updateAdjustment(index, 'adCostChange', value)} suffix="$" min={-baseline.adCost} />
                    <CalculatorField label={`${copy.platformFeeRateChange} (pp)`} value={adjustment.platformFeeRateChange} onChange={(value) => updateAdjustment(index, 'platformFeeRateChange', value)} min={-baseline.platformFeeRate * 100} max={(0.99 - baseline.platformFeeRate) * 100} />
                    <CalculatorField label={`${copy.paymentFeeRateChange} (pp)`} value={adjustment.paymentFeeRateChange} onChange={(value) => updateAdjustment(index, 'paymentFeeRateChange', value)} min={-baseline.paymentFeeRate * 100} max={(0.99 - baseline.paymentFeeRate) * 100} />
                    <CalculatorField label={`${copy.refundRateChange} (pp)`} value={adjustment.refundRateChange} onChange={(value) => updateAdjustment(index, 'refundRateChange', value)} min={-baseline.refundRate * 100} max={(0.99 - baseline.refundRate) * 100} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        <section className="lg:col-span-8 bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
          <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{copy.comparison}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="text-xs uppercase tracking-wide text-gray-400 bg-gray-50/50">
                <tr>
                  <th className="text-left font-semibold px-5 py-3">{copy.baseline}</th>
                  <th className="text-right font-semibold px-5 py-3">{dict.netProfit}</th>
                  <th className="text-right font-semibold px-5 py-3">{dict.profitMargin}</th>
                  <th className="text-right font-semibold px-5 py-3">{dict.roi}</th>
                  <th className="text-right font-semibold px-5 py-3">{dict.breakEvenPrice}</th>
                  <th className="text-right font-semibold px-5 py-3">{copy.netProfitDelta}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {diagnosis.allScenarios.map((scenario) => (
                  <tr key={scenario.name} className={scenario.name === best.name ? 'bg-blue-50/40' : undefined}>
                    <td className="px-5 py-3 font-medium text-gray-900">{scenario.name}</td>
                    <td className={`px-5 py-3 text-right tabular-nums font-semibold ${scenario.result.netProfit >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>{formatCurrency(scenario.result.netProfit, true)}</td>
                    <td className="px-5 py-3 text-right tabular-nums text-gray-700">{formatPercent(scenario.result.profitMargin)}</td>
                    <td className="px-5 py-3 text-right tabular-nums text-gray-700">{formatPercent(scenario.result.roi)}</td>
                    <td className="px-5 py-3 text-right tabular-nums text-gray-700">{formatCurrency(scenario.result.breakEvenPrice)}</td>
                    <td className={`px-5 py-3 text-right tabular-nums font-medium ${scenario.deltaFromBaseline.netProfit >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>{formatCurrency(scenario.deltaFromBaseline.netProfit, true)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="lg:col-span-4 bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
          <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{copy.diagnosis}</h2>
          </div>
          <div className="p-5 space-y-3">
            {visibleDiagnoses.map((item) => (
              <div key={item.code} className={`rounded-xl border p-3 ${severityClassName(item.severity)}`}>
                <p className="text-sm font-semibold">{copy.diagnosisLabels[item.code]}</p>
                <p className="text-xs opacity-75 mt-1">{formatDiagnosisValue(item.code, item.value)}</p>
              </div>
            ))}
            {visibleDiagnoses.length === 0 && <p className="text-sm text-gray-500">{copy.noWarnings}</p>}
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
          <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{copy.topLevers}</h2>
          </div>
          <div className="p-5 space-y-4">
            {bestLevers.map((lever) => (
              <div key={lever.code}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-gray-700">{copy.leverLabels[lever.code]}</span>
                  <span className="tabular-nums text-gray-500">{formatCurrency(lever.amount)} · {copy.costShare} {formatPercent(lever.shareOfRevenue)}</span>
                </div>
                <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: `${Math.min(lever.shareOfRevenue * 100, 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <ResultBreakdown
          title={`${best.name} ${dict.costBreakdown}`}
          rows={createBreakdownRows(best.result, dict)}
        />
      </div>

      <div className="mt-6 bg-amber-50 border border-amber-200/80 rounded-2xl p-4">
        <p className="text-xs text-amber-800">{dict.disclaimer}</p>
      </div>
    </div>
  );
}

function buildScenario(
  baseline: ProfitScenarioInput,
  adjustment: ScenarioAdjustment,
  name: string
): ProfitScenarioInput {
  return {
    ...baseline,
    name,
    sellingPrice: baseline.sellingPrice + adjustment.sellingPriceChange,
    productCost: baseline.productCost + adjustment.productCostChange,
    shippingCost: baseline.shippingCost + adjustment.shippingCostChange,
    platformFeeRate: baseline.platformFeeRate + adjustment.platformFeeRateChange / 100,
    paymentFeeRate: baseline.paymentFeeRate + adjustment.paymentFeeRateChange / 100,
    adCost: baseline.adCost + adjustment.adCostChange,
    refundRate: baseline.refundRate + adjustment.refundRateChange / 100,
  };
}

function getScenarioName(copy: ProfitDiagnosisCalculatorProps['dict']['profitDiagnosis'], index: number) {
  return [copy.scenarioA, copy.scenarioB, copy.scenarioC][index] ?? `Plan ${index + 1}`;
}

function createBreakdownRows(result: ProfitResult, dict: ProfitDiagnosisCalculatorProps['dict']) {
  return [
    { label: dict.revenue, value: result.revenue },
    { label: dict.platformFee, value: -result.platformFee },
    { label: dict.paymentFee, value: -result.paymentFee },
    { label: dict.refundLoss, value: -result.refundLoss },
    { label: dict.totalCost, value: -result.totalCost },
    { label: dict.netProfit, value: result.netProfit, highlight: true, negative: result.netProfit < 0 },
  ];
}

function Metric({ label, value, positive }: { label: string; value: string; positive: boolean }) {
  return (
    <div>
      <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-lg font-bold tabular-nums ${positive ? 'text-emerald-600' : 'text-red-500'}`}>{value}</p>
    </div>
  );
}

function severityClassName(severity: DiagnosisSeverity) {
  if (severity === 'critical') return 'bg-red-50 border-red-200 text-red-700';
  if (severity === 'warning') return 'bg-amber-50 border-amber-200 text-amber-800';
  return 'bg-emerald-50 border-emerald-200 text-emerald-700';
}

function formatCurrency(value: number, withSign = false) {
  const sign = withSign && value > 0 ? '+' : value < 0 ? '-' : '';
  return `${sign}$${Math.abs(value).toFixed(2)}`;
}

function formatPercent(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}

function formatDiagnosisValue(code: DiagnosisCode, value: number) {
  if (code === 'LOSS_MAKING') return formatCurrency(value, true);
  return formatPercent(value);
}
