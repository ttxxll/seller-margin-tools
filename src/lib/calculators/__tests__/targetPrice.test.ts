import { describe, it, expect } from 'vitest';
import { calculateTargetPrice } from '../targetPrice';

describe('calculateTargetPrice', () => {
  it('calculates price for target net profit', () => {
    const result = calculateTargetPrice({
      productCost: 20,
      shippingCost: 5,
      platformFeeRate: 0.15,
      paymentFeeRate: 0.03,
      fixedPaymentFee: 0.5,
      adCost: 5,
      refundRate: 0.02,
      otherCost: 2,
      mode: 'targetProfit',
      targetNetProfit: 10,
    });

    expect(result.isValid).toBe(true);
    expect(result.suggestedPrice).toBeCloseTo(53.125);
    expect(result.netProfit).toBeCloseTo(10);
  });

  it('calculates price for target margin', () => {
    const result = calculateTargetPrice({
      productCost: 20,
      shippingCost: 5,
      platformFeeRate: 0.15,
      paymentFeeRate: 0.03,
      fixedPaymentFee: 0.5,
      adCost: 5,
      refundRate: 0.02,
      otherCost: 2,
      mode: 'targetMargin',
      targetProfitMargin: 0.2,
    });

    expect(result.isValid).toBe(true);
    expect(result.suggestedPrice).toBeGreaterThan(0);
    expect(result.profitMargin).toBeCloseTo(0.2, 1);
  });

  it('returns error when fee rates sum to 100%', () => {
    const result = calculateTargetPrice({
      productCost: 20,
      shippingCost: 5,
      platformFeeRate: 0.5,
      paymentFeeRate: 0.3,
      fixedPaymentFee: 0,
      adCost: 5,
      refundRate: 0.2,
      otherCost: 2,
      mode: 'targetProfit',
      targetNetProfit: 10,
    });

    expect(result.isValid).toBe(false);
    expect(result.errorMessage).toBeDefined();
  });

  it('calculates break-even price', () => {
    const result = calculateTargetPrice({
      productCost: 20,
      shippingCost: 5,
      platformFeeRate: 0.15,
      paymentFeeRate: 0.03,
      fixedPaymentFee: 0.5,
      adCost: 5,
      refundRate: 0.02,
      otherCost: 2,
      mode: 'targetProfit',
      targetNetProfit: 0,
    });

    expect(result.breakEvenPrice).toBeGreaterThan(0);
    expect(result.netProfit).toBeCloseTo(0, 0);
  });
});
