import { calculateProfit, type ProfitInput, type ProfitResult } from './profit';

export type DiagnosisCode =
  | 'LOSS_MAKING'
  | 'LOW_MARGIN'
  | 'HIGH_AD_COST'
  | 'HIGH_REFUND_RATE'
  | 'HIGH_PRODUCT_COST_SHARE'
  | 'HIGH_SHIPPING_COST_SHARE'
  | 'HIGH_VARIABLE_FEE_RATE'
  | 'LOW_BREAK_EVEN_BUFFER'
  | 'HEALTHY_MARGIN';

export type DiagnosisSeverity = 'critical' | 'warning' | 'positive';

export interface DiagnosisItem {
  code: DiagnosisCode;
  severity: DiagnosisSeverity;
  value: number;
}

export type CostLeverCode =
  | 'PRODUCT_COST'
  | 'SHIPPING_COST'
  | 'PLATFORM_FEE'
  | 'PAYMENT_FEE'
  | 'AD_COST'
  | 'REFUND_LOSS'
  | 'OTHER_COST'
  | 'PLATFORM_SPECIFIC_COSTS';

export interface CostLever {
  code: CostLeverCode;
  amount: number;
  shareOfRevenue: number;
}

export interface ProfitScenarioInput extends ProfitInput {
  name: string;
}

export interface ProfitDiagnosisInput {
  baseline: ProfitScenarioInput;
  scenarios: ProfitScenarioInput[];
}

export interface ProfitScenarioDelta {
  netProfit: number;
  profitMargin: number;
  roi: number;
  breakEvenPrice: number;
  totalCost: number;
}

export interface ProfitScenarioResult {
  name: string;
  input: ProfitScenarioInput;
  result: ProfitResult;
  deltaFromBaseline: ProfitScenarioDelta;
  diagnosis: DiagnosisItem[];
  topLevers: CostLever[];
}

export interface ProfitDiagnosisResult {
  baseline: ProfitScenarioResult;
  scenarios: ProfitScenarioResult[];
  allScenarios: ProfitScenarioResult[];
  bestScenario: ProfitScenarioResult;
}

const leverOrder: CostLeverCode[] = [
  'PRODUCT_COST',
  'SHIPPING_COST',
  'PLATFORM_FEE',
  'PAYMENT_FEE',
  'AD_COST',
  'REFUND_LOSS',
  'OTHER_COST',
  'PLATFORM_SPECIFIC_COSTS',
];

export function calculateProfitDiagnosis(input: ProfitDiagnosisInput): ProfitDiagnosisResult {
  const baselineInput = sanitizeScenario(input.baseline);
  const baselineProfit = calculateProfit(baselineInput);
  const baselineDelta = createDelta(baselineProfit, baselineProfit);
  const baseline = createScenarioResult(baselineInput, baselineProfit, baselineDelta);

  const scenarios = input.scenarios.map((scenario) => {
    const scenarioInput = sanitizeScenario(scenario);
    const result = calculateProfit(scenarioInput);
    return createScenarioResult(scenarioInput, result, createDelta(result, baselineProfit));
  });

  const allScenarios = [baseline, ...scenarios];
  const bestScenario = [...allScenarios].sort(compareScenarios)[0];

  return {
    baseline,
    scenarios,
    allScenarios,
    bestScenario,
  };
}

function createScenarioResult(
  input: ProfitScenarioInput,
  result: ProfitResult,
  deltaFromBaseline: ProfitScenarioDelta
): ProfitScenarioResult {
  const topLevers = calculateCostLevers(input, result);

  return {
    name: input.name,
    input,
    result,
    deltaFromBaseline,
    diagnosis: diagnoseScenario(input, result),
    topLevers,
  };
}

function sanitizeScenario(input: ProfitScenarioInput): ProfitScenarioInput {
  return {
    name: input.name,
    sellingPrice: sanitizeAmount(input.sellingPrice),
    productCost: sanitizeAmount(input.productCost),
    shippingCost: sanitizeAmount(input.shippingCost),
    platformFeeRate: sanitizeRate(input.platformFeeRate),
    paymentFeeRate: sanitizeRate(input.paymentFeeRate),
    fixedPaymentFee: sanitizeAmount(input.fixedPaymentFee),
    adCost: sanitizeAmount(input.adCost),
    refundRate: sanitizeRate(input.refundRate),
    otherCost: sanitizeAmount(input.otherCost),
    platformSpecificCosts: sanitizeAmount(input.platformSpecificCosts ?? 0),
  };
}

function sanitizeAmount(value: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

function sanitizeRate(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(Math.max(value, 0), 0.99);
}

function createDelta(result: ProfitResult, baseline: ProfitResult): ProfitScenarioDelta {
  return {
    netProfit: result.netProfit - baseline.netProfit,
    profitMargin: result.profitMargin - baseline.profitMargin,
    roi: result.roi - baseline.roi,
    breakEvenPrice: result.breakEvenPrice - baseline.breakEvenPrice,
    totalCost: result.totalCost - baseline.totalCost,
  };
}

function compareScenarios(a: ProfitScenarioResult, b: ProfitScenarioResult): number {
  if (b.result.netProfit !== a.result.netProfit) {
    return b.result.netProfit - a.result.netProfit;
  }
  if (b.result.profitMargin !== a.result.profitMargin) {
    return b.result.profitMargin - a.result.profitMargin;
  }
  return b.result.roi - a.result.roi;
}

function calculateCostLevers(input: ProfitScenarioInput, result: ProfitResult): CostLever[] {
  const revenue = result.revenue;
  const levers: CostLever[] = [
    createLever('PRODUCT_COST', input.productCost, revenue),
    createLever('SHIPPING_COST', input.shippingCost, revenue),
    createLever('PLATFORM_FEE', result.platformFee, revenue),
    createLever('PAYMENT_FEE', result.paymentFee, revenue),
    createLever('AD_COST', input.adCost, revenue),
    createLever('REFUND_LOSS', result.refundLoss, revenue),
    createLever('OTHER_COST', input.otherCost, revenue),
    createLever('PLATFORM_SPECIFIC_COSTS', input.platformSpecificCosts ?? 0, revenue),
  ];

  return levers
    .filter((lever) => lever.amount > 0)
    .sort((a, b) => {
      if (b.amount !== a.amount) return b.amount - a.amount;
      return leverOrder.indexOf(a.code) - leverOrder.indexOf(b.code);
    });
}

function createLever(code: CostLeverCode, amount: number, revenue: number): CostLever {
  return {
    code,
    amount,
    shareOfRevenue: revenue > 0 ? amount / revenue : 0,
  };
}

function diagnoseScenario(input: ProfitScenarioInput, result: ProfitResult): DiagnosisItem[] {
  const revenue = result.revenue;
  const diagnoses: DiagnosisItem[] = [];
  const variableFeeRate = input.platformFeeRate + input.paymentFeeRate + input.refundRate;
  const breakEvenBuffer = revenue > 0 ? (revenue - result.breakEvenPrice) / revenue : 0;

  if (result.netProfit < 0) {
    diagnoses.push({ code: 'LOSS_MAKING', severity: 'critical', value: result.netProfit });
  }
  if (result.profitMargin > 0 && result.profitMargin < 0.1) {
    diagnoses.push({ code: 'LOW_MARGIN', severity: 'warning', value: result.profitMargin });
  }
  if (revenue > 0 && input.adCost / revenue >= 0.2) {
    diagnoses.push({ code: 'HIGH_AD_COST', severity: 'warning', value: input.adCost / revenue });
  }
  if (input.refundRate >= 0.08) {
    diagnoses.push({ code: 'HIGH_REFUND_RATE', severity: 'warning', value: input.refundRate });
  }
  if (revenue > 0 && input.productCost / revenue >= 0.45) {
    diagnoses.push({ code: 'HIGH_PRODUCT_COST_SHARE', severity: 'warning', value: input.productCost / revenue });
  }
  if (revenue > 0 && input.shippingCost / revenue >= 0.2) {
    diagnoses.push({ code: 'HIGH_SHIPPING_COST_SHARE', severity: 'warning', value: input.shippingCost / revenue });
  }
  if (variableFeeRate >= 0.35) {
    diagnoses.push({ code: 'HIGH_VARIABLE_FEE_RATE', severity: 'warning', value: variableFeeRate });
  }
  if (result.netProfit > 0 && revenue > 0 && result.breakEvenPrice > 0 && breakEvenBuffer < 0.1) {
    diagnoses.push({ code: 'LOW_BREAK_EVEN_BUFFER', severity: 'warning', value: breakEvenBuffer });
  }
  if (diagnoses.length === 0) {
    diagnoses.push({ code: 'HEALTHY_MARGIN', severity: 'positive', value: result.profitMargin });
  }

  return diagnoses;
}
