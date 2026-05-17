export interface TargetPriceInput {
  productCost: number;
  shippingCost: number;
  platformFeeRate: number;
  paymentFeeRate: number;
  fixedPaymentFee: number;
  adCost: number;
  refundRate: number;
  otherCost: number;
  platformSpecificCosts?: number;
  mode: 'targetProfit' | 'targetMargin';
  targetNetProfit?: number;
  targetProfitMargin?: number;
}

export interface TargetPriceResult {
  suggestedPrice: number;
  platformFee: number;
  paymentFee: number;
  refundLoss: number;
  totalCost: number;
  netProfit: number;
  profitMargin: number;
  breakEvenPrice: number;
  isValid: boolean;
  errorMessage?: string;
}

export function calculateTargetPrice(input: TargetPriceInput): TargetPriceResult {
  const {
    productCost,
    shippingCost,
    platformFeeRate,
    paymentFeeRate,
    fixedPaymentFee,
    adCost,
    refundRate,
    otherCost,
    platformSpecificCosts = 0,
    mode,
    targetNetProfit = 0,
    targetProfitMargin = 0,
  } = input;

  const baseCosts =
    productCost + shippingCost + adCost + otherCost + platformSpecificCosts;

  const denominator = 1 - platformFeeRate - paymentFeeRate - refundRate;

  if (denominator <= 0) {
    return {
      suggestedPrice: 0,
      platformFee: 0,
      paymentFee: 0,
      refundLoss: 0,
      totalCost: 0,
      netProfit: 0,
      profitMargin: 0,
      breakEvenPrice: 0,
      isValid: false,
      errorMessage:
        'Cannot calculate: fee rates and refund rate sum to 100% or more, leaving no room for any price.',
    };
  }

  let suggestedPrice: number;

  if (mode === 'targetProfit') {
    suggestedPrice =
      (baseCosts + fixedPaymentFee + targetNetProfit) / denominator;
  } else {
    const marginDenominator = denominator - targetProfitMargin;
    if (marginDenominator <= 0) {
      return {
        suggestedPrice: 0,
        platformFee: 0,
        paymentFee: 0,
        refundLoss: 0,
        totalCost: 0,
        netProfit: 0,
        profitMargin: 0,
        breakEvenPrice: 0,
        isValid: false,
        errorMessage:
          'Cannot calculate: target margin plus fee rates sum to 100% or more.',
      };
    }
    suggestedPrice = (baseCosts + fixedPaymentFee) / marginDenominator;
  }

  if (suggestedPrice <= 0) {
    return {
      suggestedPrice: 0,
      platformFee: 0,
      paymentFee: 0,
      refundLoss: 0,
      totalCost: 0,
      netProfit: 0,
      profitMargin: 0,
      breakEvenPrice: 0,
      isValid: false,
      errorMessage: 'Cannot calculate: result is not a valid positive price.',
    };
  }

  const platformFee = suggestedPrice * platformFeeRate;
  const paymentFee = suggestedPrice * paymentFeeRate + fixedPaymentFee;
  const refundLoss = suggestedPrice * refundRate;

  const totalCost =
    baseCosts + platformFee + paymentFee + refundLoss;
  const netProfit = suggestedPrice - totalCost;
  const profitMargin =
    suggestedPrice > 0 ? netProfit / suggestedPrice : 0;

  const breakEvenPrice =
    (baseCosts + fixedPaymentFee) / denominator;

  return {
    suggestedPrice,
    platformFee,
    paymentFee,
    refundLoss,
    totalCost,
    netProfit,
    profitMargin,
    breakEvenPrice,
    isValid: true,
  };
}
