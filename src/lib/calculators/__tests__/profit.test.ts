import { describe, it, expect } from 'vitest';
import {
  calculateProfit,
  calculateAmazonFbaProfit,
  calculateTikTokShopProfit,
  calculateShopifyProfit,
} from '../profit';

describe('calculateProfit', () => {
  it('calculates basic profit correctly', () => {
    const result = calculateProfit({
      sellingPrice: 100,
      productCost: 30,
      shippingCost: 5,
      platformFeeRate: 0.15,
      paymentFeeRate: 0.03,
      fixedPaymentFee: 0.5,
      adCost: 10,
      refundRate: 0.02,
      otherCost: 2,
    });

    expect(result.platformFee).toBe(15);
    expect(result.paymentFee).toBe(3.5);
    expect(result.refundLoss).toBe(2);
    expect(result.totalCost).toBe(67.5);
    expect(result.netProfit).toBe(32.5);
    expect(result.profitMargin).toBeCloseTo(0.325);
  });

  it('handles zero selling price', () => {
    const result = calculateProfit({
      sellingPrice: 0,
      productCost: 30,
      shippingCost: 5,
      platformFeeRate: 0.15,
      paymentFeeRate: 0.03,
      fixedPaymentFee: 0.5,
      adCost: 10,
      refundRate: 0.02,
      otherCost: 2,
    });

    expect(result.netProfit).toBe(-47.5);
    expect(result.profitMargin).toBe(0);
  });

  it('includes platformSpecificCosts', () => {
    const result = calculateProfit({
      sellingPrice: 100,
      productCost: 30,
      shippingCost: 5,
      platformFeeRate: 0.15,
      paymentFeeRate: 0.03,
      fixedPaymentFee: 0.5,
      adCost: 10,
      refundRate: 0.02,
      otherCost: 2,
      platformSpecificCosts: 5,
    });

    expect(result.totalCost).toBe(72.5);
    expect(result.netProfit).toBe(27.5);
  });
});

describe('calculateAmazonFbaProfit', () => {
  it('includes fulfillment fee and storage cost', () => {
    const result = calculateAmazonFbaProfit({
      sellingPrice: 50,
      productCost: 15,
      shippingCost: 3,
      referralFeeRate: 0.15,
      fulfillmentFee: 5,
      storageCost: 1,
      paymentFeeRate: 0,
      fixedPaymentFee: 0,
      adCost: 5,
      refundRate: 0.02,
      otherCost: 0,
    });

    expect(result.platformFee).toBe(7.5);
    expect(result.totalCost).toBe(37.5);
    expect(result.netProfit).toBeCloseTo(12.5);
  });
});

describe('calculateTikTokShopProfit', () => {
  it('includes creator commission', () => {
    const result = calculateTikTokShopProfit({
      sellingPrice: 40,
      productCost: 12,
      shippingCost: 4,
      platformFeeRate: 0.06,
      creatorCommissionRate: 0.1,
      paymentFeeRate: 0.02,
      fixedPaymentFee: 0.3,
      adCost: 3,
      refundRate: 0.01,
      otherCost: 1,
    });

    expect(result.platformFee).toBe(2.4);
    expect(result.totalCost).toBeCloseTo(27.9);
    expect(result.netProfit).toBeCloseTo(12.1);
  });
});

describe('calculateShopifyProfit', () => {
  it('includes app cost in other costs', () => {
    const result = calculateShopifyProfit({
      sellingPrice: 60,
      productCost: 20,
      shippingCost: 5,
      platformFeeRate: 0,
      paymentFeeRate: 0.029,
      fixedPaymentFee: 0.3,
      appCost: 29,
      adCost: 8,
      refundRate: 0.02,
      otherCost: 0,
    });

    expect(result.platformFee).toBe(0);
    expect(result.paymentFee).toBeCloseTo(2.04);
    expect(result.totalCost).toBeCloseTo(65.24);
    expect(result.netProfit).toBeCloseTo(-5.24);
  });
});
