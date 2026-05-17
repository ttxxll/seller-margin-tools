export interface PaymentFeeInput {
  amount: number;
  feeRate: number;
  fixedFee: number;
  mode: 'grossToNet' | 'netToGross';
}

export interface PaymentFeeResult {
  grossAmount: number;
  feeAmount: number;
  netAmount: number;
  effectiveFeeRate: number;
}

export function calculatePaymentFee(input: PaymentFeeInput): PaymentFeeResult {
  const { amount, feeRate, fixedFee, mode } = input;

  if (mode === 'grossToNet') {
    const fee = amount * feeRate + fixedFee;
    const netAmount = amount - fee;
    const effectiveFeeRate = amount > 0 ? fee / amount : 0;

    return {
      grossAmount: amount,
      feeAmount: fee,
      netAmount,
      effectiveFeeRate,
    };
  }

  // netToGross
  const denominator = 1 - feeRate;
  if (denominator <= 0) {
    return {
      grossAmount: 0,
      feeAmount: 0,
      netAmount: 0,
      effectiveFeeRate: 0,
    };
  }

  const grossAmount = (amount + fixedFee) / denominator;
  const fee = grossAmount - amount;
  const effectiveFeeRate = grossAmount > 0 ? fee / grossAmount : 0;

  return {
    grossAmount,
    feeAmount: fee,
    netAmount: amount,
    effectiveFeeRate,
  };
}
