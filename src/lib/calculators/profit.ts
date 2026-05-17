export interface ProfitInput {
  sellingPrice: number;
  productCost: number;
  shippingCost: number;
  platformFeeRate: number;
  paymentFeeRate: number;
  fixedPaymentFee: number;
  adCost: number;
  refundRate: number;
  otherCost: number;
  platformSpecificCosts?: number;
}

export interface ProfitResult {
  revenue: number;
  platformFee: number;
  paymentFee: number;
  refundLoss: number;
  totalCost: number;
  netProfit: number;
  profitMargin: number;
  roi: number;
  breakEvenPrice: number;
}

export function calculateProfit(input: ProfitInput): ProfitResult {
  const {
    sellingPrice,
    productCost,
    shippingCost,
    platformFeeRate,
    paymentFeeRate,
    fixedPaymentFee,
    adCost,
    refundRate,
    otherCost,
    platformSpecificCosts = 0,
  } = input;

  const platformFee = sellingPrice * platformFeeRate;
  const paymentFee = sellingPrice * paymentFeeRate + fixedPaymentFee;
  const refundLoss = sellingPrice * refundRate;

  const totalCost =
    productCost +
    shippingCost +
    platformFee +
    paymentFee +
    adCost +
    refundLoss +
    otherCost +
    platformSpecificCosts;

  const netProfit = sellingPrice - totalCost;
  const profitMargin = sellingPrice > 0 ? netProfit / sellingPrice : 0;

  const investmentBase =
    productCost + shippingCost + adCost + otherCost + platformSpecificCosts;
  const roi = investmentBase > 0 ? netProfit / investmentBase : 0;

  const denominator = 1 - platformFeeRate - paymentFeeRate - refundRate;
  const breakEvenPrice =
    denominator > 0
      ? (productCost +
          shippingCost +
          adCost +
          otherCost +
          platformSpecificCosts +
          fixedPaymentFee) /
        denominator
      : 0;

  return {
    revenue: sellingPrice,
    platformFee,
    paymentFee,
    refundLoss,
    totalCost,
    netProfit,
    profitMargin,
    roi,
    breakEvenPrice,
  };
}

export interface AmazonFbaInput {
  sellingPrice: number;
  productCost: number;
  shippingCost: number;
  referralFeeRate: number;
  fulfillmentFee: number;
  storageCost: number;
  paymentFeeRate: number;
  fixedPaymentFee: number;
  adCost: number;
  refundRate: number;
  otherCost: number;
}

export function calculateAmazonFbaProfit(input: AmazonFbaInput): ProfitResult {
  const platformSpecificCosts = input.fulfillmentFee + input.storageCost;
  return calculateProfit({
    sellingPrice: input.sellingPrice,
    productCost: input.productCost,
    shippingCost: input.shippingCost,
    platformFeeRate: input.referralFeeRate,
    paymentFeeRate: input.paymentFeeRate,
    fixedPaymentFee: input.fixedPaymentFee,
    adCost: input.adCost,
    refundRate: input.refundRate,
    otherCost: input.otherCost,
    platformSpecificCosts,
  });
}

export interface TikTokShopInput {
  sellingPrice: number;
  productCost: number;
  shippingCost: number;
  platformFeeRate: number;
  creatorCommissionRate: number;
  paymentFeeRate: number;
  fixedPaymentFee: number;
  adCost: number;
  refundRate: number;
  otherCost: number;
}

export function calculateTikTokShopProfit(input: TikTokShopInput): ProfitResult {
  const creatorCommission = input.sellingPrice * input.creatorCommissionRate;
  const platformSpecificCosts = creatorCommission;
  return calculateProfit({
    sellingPrice: input.sellingPrice,
    productCost: input.productCost,
    shippingCost: input.shippingCost,
    platformFeeRate: input.platformFeeRate,
    paymentFeeRate: input.paymentFeeRate,
    fixedPaymentFee: input.fixedPaymentFee,
    adCost: input.adCost,
    refundRate: input.refundRate,
    otherCost: input.otherCost,
    platformSpecificCosts,
  });
}

export interface ShopifyInput {
  sellingPrice: number;
  productCost: number;
  shippingCost: number;
  platformFeeRate: number;
  paymentFeeRate: number;
  fixedPaymentFee: number;
  appCost: number;
  adCost: number;
  refundRate: number;
  otherCost: number;
}

export function calculateShopifyProfit(input: ShopifyInput): ProfitResult {
  return calculateProfit({
    sellingPrice: input.sellingPrice,
    productCost: input.productCost,
    shippingCost: input.shippingCost,
    platformFeeRate: input.platformFeeRate,
    paymentFeeRate: input.paymentFeeRate,
    fixedPaymentFee: input.fixedPaymentFee,
    adCost: input.adCost,
    refundRate: input.refundRate,
    otherCost: input.otherCost + input.appCost,
  });
}

export interface FlipkartInput {
  sellingPrice: number;
  productCost: number;
  shippingCost: number;
  commissionRate: number;
  collectionFeeRate: number;
  gstOnFeesRate: number;
  fixedFee: number;
  adCost: number;
  refundRate: number;
  otherCost: number;
}

export function calculateFlipkartProfit(input: FlipkartInput): ProfitResult {
  const commission = input.sellingPrice * input.commissionRate;
  const collectionFee = input.sellingPrice * input.collectionFeeRate;
  const gstOnFees = (commission + input.shippingCost + collectionFee) * input.gstOnFeesRate;
  const platformSpecificCosts = collectionFee + gstOnFees;
  return calculateProfit({
    sellingPrice: input.sellingPrice,
    productCost: input.productCost,
    shippingCost: input.shippingCost,
    platformFeeRate: input.commissionRate,
    paymentFeeRate: 0,
    fixedPaymentFee: input.fixedFee,
    adCost: input.adCost,
    refundRate: input.refundRate,
    otherCost: input.otherCost,
    platformSpecificCosts,
  });
}
