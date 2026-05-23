import { describe, it, expect } from 'vitest';
import { calculateProfit } from '../profit';
import { calculateProfitDiagnosis, type ProfitScenarioInput } from '../profitDiagnosis';

const baseline: ProfitScenarioInput = {
  name: 'Baseline',
  sellingPrice: 100,
  productCost: 35,
  shippingCost: 8,
  platformFeeRate: 0.15,
  paymentFeeRate: 0.03,
  fixedPaymentFee: 0.3,
  adCost: 12,
  refundRate: 0.03,
  otherCost: 2,
};

describe('calculateProfitDiagnosis', () => {
  it('calculates baseline and scenarios with the existing profit engine', () => {
    const scenario = { ...baseline, name: 'Higher price', sellingPrice: 110 };
    const result = calculateProfitDiagnosis({ baseline, scenarios: [scenario] });

    expect(result.baseline.result).toEqual(calculateProfit(baseline));
    expect(result.scenarios[0].result).toEqual(calculateProfit(scenario));
  });

  it('selects the best scenario by net profit first', () => {
    const result = calculateProfitDiagnosis({
      baseline,
      scenarios: [
        { ...baseline, name: 'Lower ads', adCost: 5 },
        { ...baseline, name: 'Raise price', sellingPrice: 120 },
      ],
    });

    expect(result.bestScenario.name).toBe('Raise price');
  });

  it('uses margin and ROI as tie-breakers', () => {
    const result = calculateProfitDiagnosis({
      baseline,
      scenarios: [
        {
          ...baseline,
          name: 'High revenue tie',
          sellingPrice: 120,
          productCost: 50,
          shippingCost: 10,
          platformFeeRate: 0,
          paymentFeeRate: 0,
          fixedPaymentFee: 0,
          adCost: 10,
          refundRate: 0,
          otherCost: 20,
        },
        {
          ...baseline,
          name: 'Low revenue tie',
          sellingPrice: 100,
          productCost: 35,
          shippingCost: 10,
          platformFeeRate: 0,
          paymentFeeRate: 0,
          fixedPaymentFee: 0,
          adCost: 10,
          refundRate: 0,
          otherCost: 15,
        },
      ],
    });

    expect(result.bestScenario.name).toBe('Low revenue tie');
    expect(result.bestScenario.result.netProfit).toBe(30);
  });

  it('calculates deltas from baseline', () => {
    const result = calculateProfitDiagnosis({
      baseline,
      scenarios: [{ ...baseline, name: 'Lower ads', adCost: 7 }],
    });

    const scenario = result.scenarios[0];
    expect(scenario.deltaFromBaseline.netProfit).toBeCloseTo(5);
    expect(scenario.deltaFromBaseline.totalCost).toBeCloseTo(-5);
    expect(scenario.deltaFromBaseline.profitMargin).toBeCloseTo(0.05);
  });

  it('emits diagnosis codes for common risks', () => {
    const result = calculateProfitDiagnosis({
      baseline: {
        ...baseline,
        sellingPrice: 50,
        productCost: 35,
        shippingCost: 12,
        platformFeeRate: 0.25,
        paymentFeeRate: 0.08,
        adCost: 12,
        refundRate: 0.1,
      },
      scenarios: [],
    });

    const codes = result.baseline.diagnosis.map((item) => item.code);
    expect(codes).toContain('LOSS_MAKING');
    expect(codes).toContain('HIGH_AD_COST');
    expect(codes).toContain('HIGH_REFUND_RATE');
    expect(codes).toContain('HIGH_VARIABLE_FEE_RATE');
    expect(codes).toContain('HIGH_PRODUCT_COST_SHARE');
    expect(codes).toContain('HIGH_SHIPPING_COST_SHARE');
  });

  it('marks healthy scenarios when no warning applies', () => {
    const result = calculateProfitDiagnosis({
      baseline: {
        ...baseline,
        sellingPrice: 100,
        productCost: 20,
        shippingCost: 5,
        platformFeeRate: 0.1,
        paymentFeeRate: 0.02,
        adCost: 5,
        refundRate: 0.01,
        otherCost: 1,
      },
      scenarios: [],
    });

    expect(result.baseline.diagnosis).toEqual([
      expect.objectContaining({ code: 'HEALTHY_MARGIN', severity: 'positive' }),
    ]);
  });

  it('sorts cost levers by amount with stable labels', () => {
    const result = calculateProfitDiagnosis({ baseline, scenarios: [] });
    const topCodes = result.baseline.topLevers.slice(0, 3).map((lever) => lever.code);

    expect(topCodes).toEqual(['PRODUCT_COST', 'PLATFORM_FEE', 'AD_COST']);
  });

  it('sanitizes invalid and negative values', () => {
    const result = calculateProfitDiagnosis({
      baseline: {
        name: 'Invalid',
        sellingPrice: Number.NaN,
        productCost: -10,
        shippingCost: -5,
        platformFeeRate: 1.5,
        paymentFeeRate: -0.2,
        fixedPaymentFee: -1,
        adCost: -4,
        refundRate: Number.POSITIVE_INFINITY,
        otherCost: -2,
      },
      scenarios: [{ ...baseline, name: 'Negative scenario', sellingPrice: -20 }],
    });

    expect(result.baseline.input.sellingPrice).toBe(0);
    expect(result.baseline.input.productCost).toBe(0);
    expect(result.baseline.input.platformFeeRate).toBe(0.99);
    expect(result.baseline.input.paymentFeeRate).toBe(0);
    expect(result.baseline.input.refundRate).toBe(0);
    expect(Number.isFinite(result.baseline.result.netProfit)).toBe(true);
    expect(result.scenarios[0].input.sellingPrice).toBe(0);
  });
});
