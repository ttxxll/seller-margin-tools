import { describe, it, expect } from 'vitest';
import { calculatePaymentFee } from '../paymentFees';

describe('calculatePaymentFee', () => {
  describe('gross-to-net', () => {
    it('calculates fee and net amount correctly', () => {
      const result = calculatePaymentFee({
        amount: 100,
        feeRate: 0.03,
        fixedFee: 0.5,
        mode: 'grossToNet',
      });

      expect(result.grossAmount).toBe(100);
      expect(result.feeAmount).toBe(3.5);
      expect(result.netAmount).toBe(96.5);
      expect(result.effectiveFeeRate).toBeCloseTo(0.035);
    });

    it('handles zero amount', () => {
      const result = calculatePaymentFee({
        amount: 0,
        feeRate: 0.03,
        fixedFee: 0.5,
        mode: 'grossToNet',
      });

      expect(result.feeAmount).toBe(0.5);
      expect(result.netAmount).toBe(-0.5);
      expect(result.effectiveFeeRate).toBe(0);
    });
  });

  describe('net-to-gross', () => {
    it('calculates gross amount needed to receive target net', () => {
      const result = calculatePaymentFee({
        amount: 100,
        feeRate: 0.03,
        fixedFee: 0.5,
        mode: 'netToGross',
      });

      expect(result.netAmount).toBe(100);
      expect(result.grossAmount).toBeCloseTo(103.6082474226804);
      expect(result.feeAmount).toBeCloseTo(3.6082474226804);
      expect(result.effectiveFeeRate).toBeCloseTo(0.03483);
    });

    it('returns zero when fee rate is 100%', () => {
      const result = calculatePaymentFee({
        amount: 100,
        feeRate: 1,
        fixedFee: 0,
        mode: 'netToGross',
      });

      expect(result.grossAmount).toBe(0);
      expect(result.feeAmount).toBe(0);
    });
  });
});
