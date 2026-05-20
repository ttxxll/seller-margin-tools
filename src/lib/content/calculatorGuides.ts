import type { CalculatorGuideSection } from '@/components/seo/CalculatorGuide';
import type { ToolId } from './tools';

interface CalculatorGuideContent {
  title: string;
  intro: string;
  sections: CalculatorGuideSection[];
}

type Locale = 'en' | 'zh';

export const calculatorGuides: Record<Locale, Record<ToolId, CalculatorGuideContent>> = {
  en: {
    amazonFba: {
      title: 'How to calculate Amazon FBA profit in 2026',
      intro:
        'An Amazon FBA calculator is only useful when every input reflects a real cost in the seller journey: sourcing the item, moving it into inventory, paying marketplace fees, paying fulfillment charges, acquiring the customer, and absorbing refunds. The goal is to estimate contribution profit per order before you scale a SKU, raise ad spend, or send inventory to a fulfillment center.',
      sections: [
        {
          heading: 'Key inputs: price, landed cost, referral fee, FBA fees, and storage',
          paragraphs: [
            'Selling price is the amount the customer pays for one unit before marketplace deductions. Product cost should include the supplier price, packaging, inspection, duties, inbound freight allocation, and any prep work required before the item can be sold. Shipping cost in this calculator is the seller-side logistics cost you want to allocate per unit, such as first-mile freight or inbound transport. Keeping these costs separate helps you see whether a margin issue comes from sourcing, logistics, or Amazon fees.',
            'Amazon referral fee is the marketplace commission charged as a percentage of the item price. In 2026, most sellers still model a category referral fee around 15% as a practical default, while some categories sit below or above that level. FBA fulfillment fee covers pick, pack, shipping, customer service, and returns processing support. It changes with product size tier, unit weight, dimensional weight, and peak-season rules, so the value should be taken from your latest Amazon fee preview or SKU economics report rather than guessed.',
            'Storage cost is the inventory holding cost allocated to one unit. A slow-moving product can look profitable at launch but lose margin through monthly storage, aged inventory surcharges, removals, and disposal fees. Ad cost is usually your expected advertising spend per order, not total campaign spend. Refund rate represents expected lost contribution from returns, refunds, damaged units, or resale markdowns. Other cost can include coupons, prep-center fees, labeling, photography allocation, software, or local taxes not captured elsewhere.',
          ],
        },
        {
          heading: 'Formula and worked logic',
          paragraphs: [
            'The calculator first converts percentage fees into dollar amounts: referral fee = selling price × referral fee rate, payment fee = selling price × payment fee rate + fixed payment fee, and refund loss = selling price × refund rate. Total cost then equals product cost + shipping cost + referral fee + fulfillment fee + storage cost + payment fee + ad cost + refund loss + other cost. Net profit is selling price minus total cost.',
            'Profit margin is net profit divided by selling price. ROI is net profit divided by the invested cost base, typically product cost plus shipping, ads, and platform-specific operating costs. Break-even price reverses the same equation by dividing fixed and per-unit costs by the remaining percentage after referral, payment, and refund rates. If that denominator becomes too small, the product is structurally fragile because percentage fees consume too much of the selling price.',
          ],
        },
        {
          heading: 'Healthy benchmarks for Amazon sellers',
          paragraphs: [
            'For cross-border Amazon FBA sellers, a healthy mature SKU often targets a net profit margin around 10%–20% after ad spend. Competitive or launch-stage items may temporarily run below that, but a product that cannot reach positive margin after reviews and conversion improve should be treated carefully. ROI targets vary by cash cycle; many sellers prefer at least 30%–60% ROI on landed inventory so the business can absorb delays, seasonal storage, and unexpected refunds.',
            'Use the calculator before ordering inventory, before joining a price war, and before increasing bids. If margin falls below 10%, look for the largest lever: renegotiate product cost, reduce packaging size to lower FBA fees, raise price, lower TACoS, or discontinue coupons. The strongest Amazon products usually have enough gross spread to survive fee updates, higher CPCs, and slower sell-through without turning negative.',
          ],
        },
      ],
    },
    tiktokShop: {
      title: 'How to calculate TikTok Shop seller profit in 2026',
      intro:
        'TikTok Shop profit depends on marketplace fees, payment processing, creator commissions, paid traffic, returns, and the cost of creating enough demand to keep videos converting. This page explains how each input affects seller margin so you can test whether a viral product is still profitable after affiliate and advertising costs.',
      sections: [
        {
          heading: 'Input definitions for TikTok Shop economics',
          paragraphs: [
            'Selling price is the customer-facing price after any discount strategy you expect to run. Product cost should include unit purchase price, packaging, quality checks, inbound freight, and any bundle inserts. Shipping cost is the seller-funded shipping or fulfillment allocation per order. If the platform, warehouse, or promotion subsidizes shipping, enter only the part your business actually pays.',
            'Platform fee rate is the percentage TikTok Shop charges on a transaction. A 6% default is a useful planning assumption for many categories, but sellers should update it with their actual market, category, and program terms for 2026. Creator commission rate is separate: it is paid to affiliates or creators who generate sales through short video, live shopping, or product cards. This number often ranges from 5% to 20%, and can be higher for aggressive launches.',
            'Payment fee rate and fixed payment fee capture card or wallet processing. Ad cost is the paid media cost per order, which may come from TikTok Shop Ads, Spark Ads, GMV Max, retargeting, or external traffic. Refund rate accounts for returns, failed delivery, buyer remorse, and partial refunds. Other cost can include samples, creator seeding allocation, warehouse pick-pack charges, coupons, or customer support credits.',
          ],
        },
        {
          heading: 'Formula and margin interpretation',
          paragraphs: [
            'TikTok Shop profit starts with percentage deductions: platform fee = selling price × platform fee rate, creator commission = selling price × creator commission rate, payment fee = selling price × payment fee rate + fixed payment fee, and refund loss = selling price × refund rate. Total cost equals product cost + shipping cost + platform fee + creator commission + payment fee + ad cost + refund loss + other cost. Net profit is selling price minus total cost.',
            'Profit margin shows how much of each sale remains after all costs. ROI compares the profit to the controllable investment base, which is useful when deciding how much inventory to buy for a trend. If creator commission and ad cost are both high, margin can disappear even when the gross product markup looks attractive. The calculator makes that tradeoff visible before you approve a commission plan.',
          ],
        },
        {
          heading: 'Benchmarks for creator-led commerce',
          paragraphs: [
            'A healthy TikTok Shop offer usually needs enough margin to pay both a creator and a traffic source. Many sellers aim for 15%–25% net margin once a product stabilizes, or they accept lower margin only when repeat purchases, bundles, or upsells recover profit later. For a cold-start product, test several commission levels and watch contribution profit, not just GMV.',
            'In 2026, the biggest risk is confusing revenue growth with profitable growth. A campaign that produces many orders at 10% creator commission and high ad spend may still lose money after refunds. Use this calculator when setting affiliate rates, evaluating free-sample campaigns, planning flash discounts, or deciding whether to move a winning video into paid amplification.',
          ],
        },
      ],
    },
    shopify: {
      title: 'How to calculate Shopify profit and true store margin',
      intro:
        'A Shopify store gives sellers more control than a marketplace, but that control comes with costs that are easy to miss: payment processing, apps, themes, fulfillment, advertising, returns, and subscriptions. This guide explains how to turn those costs into a per-order margin model so you can price products and campaigns with confidence.',
      sections: [
        {
          heading: 'What each Shopify input means',
          paragraphs: [
            'Selling price is the checkout price for one unit or average order item after discounts. Product cost should include the supplier cost, packaging, inspection, import duty, freight allocation, and any customization. Shipping cost is the portion of postage, warehouse handling, or third-party logistics cost paid by the seller. If customers pay shipping separately, include only the net subsidy or handling cost that remains with the business.',
            'Platform fee rate is often 0% when using Shopify Payments, but third-party gateways can add an extra Shopify transaction fee depending on the plan. Payment fee rate models card processing, commonly around 2.9% plus a fixed fee such as $0.30 for domestic online card payments, with different rates for international cards, currency conversion, PayPal, Shop Pay Installments, or alternative gateways. App cost should be converted from monthly subscriptions into a per-order allocation by dividing total monthly app spend by expected monthly orders.',
            'Ad cost is the customer acquisition cost per order from Meta, Google, TikTok, affiliates, influencers, or email list growth. Refund rate captures expected refunds, chargebacks, replacements, and return shipping support. Other cost can include discounts, loyalty points, email/SMS fees, fraud tools, theme amortization, product photography, and customer service tools.',
          ],
        },
        {
          heading: 'Formula and app-cost allocation',
          paragraphs: [
            'The basic formula is platform fee = selling price × platform fee rate, payment fee = selling price × payment fee rate + fixed payment fee, refund loss = selling price × refund rate, and total cost = product cost + shipping cost + platform fee + payment fee + app cost + ad cost + refund loss + other cost. Net profit equals selling price minus total cost, and profit margin equals net profit divided by selling price.',
            'Because many Shopify costs are monthly rather than per order, allocation matters. If review, upsell, subscription, and email apps cost $290 per month and the store gets 1,000 orders, the app allocation is $0.29 per order. If the same store only gets 100 orders, app cost becomes $2.90 per order. This is why early-stage stores can have weaker real margins than the product markup suggests.',
          ],
        },
        {
          heading: 'Healthy benchmarks for independent ecommerce stores',
          paragraphs: [
            'For a Shopify product business, a healthy contribution margin after product, fulfillment, payment, apps, ads, and refunds often lands around 15%–30%. Lower-margin stores can still work if repeat purchase rate, subscription retention, or high average order value offsets first-order acquisition cost. For one-time-purchase products, sellers generally need stronger first-order profit because there is less lifetime value to recover acquisition spend.',
            'Use this calculator before increasing ad budgets. If profit is negative at realistic CAC, the issue may be pricing, conversion rate, bundle size, or supplier cost rather than media buying. A good 2026 pricing review should test base price, discount depth, free-shipping threshold, app stack, and payment gateway fees together because small changes across several fields can move the store from loss to profit.',
          ],
        },
      ],
    },
    paymentFees: {
      title: 'How payment processing fees affect seller margin',
      intro:
        'Payment fees look small because they are expressed as percentages, but they directly reduce every order and become significant at scale. This calculator helps sellers understand gross-to-net payouts and net-to-gross pricing when using PayPal, Stripe, Wise, cards, or other cross-border payment providers.',
      sections: [
        {
          heading: 'Understanding amount, fee rate, fixed fee, and modes',
          paragraphs: [
            'Amount is the transaction value being processed. In gross-to-net mode, it represents what the customer or platform pays before the processor deducts fees. In net-to-gross mode, it represents the amount you want to receive after fees. Fee rate is the variable percentage charged on the transaction. Fixed fee is the flat amount charged per payment, such as $0.30 on many card transactions.',
            'In 2026, common planning assumptions still include about 2.9% + $0.30 for many domestic online card payments, higher rates for international cards, and additional currency conversion spreads for cross-border payouts. PayPal, Stripe, Wise, Payoneer, marketplace payouts, and local acquirers all calculate fees differently, so sellers should use the exact rate from their provider account when modeling profit.',
            'The fixed fee matters most on low-ticket products. A $0.30 fixed fee is only 0.3% of a $100 order, but it is 3% of a $10 order before the percentage fee is even added. That is why inexpensive accessories, samples, and trial offers can have a much higher effective payment rate than the headline percentage suggests.',
          ],
        },
        {
          heading: 'Gross-to-net and net-to-gross formulas',
          paragraphs: [
            'Gross-to-net is straightforward: fee = gross amount × fee rate + fixed fee, and net amount = gross amount − fee. Effective fee rate equals fee divided by gross amount. This view is useful when you already know the checkout price and want to estimate the payout that will arrive in your balance.',
            'Net-to-gross reverses the equation. If you need a specific net amount after processing, gross amount = (target net + fixed fee) ÷ (1 − fee rate). Fee then equals gross amount − target net. This is useful for invoices, wholesale payments, service retainers, or pricing calculators where the seller needs to pass payment fees into the quoted price without undercharging.',
          ],
        },
        {
          heading: 'Benchmarks and seller decisions',
          paragraphs: [
            'A 2%–4% effective payment fee is common for many domestic ecommerce card payments, while cross-border transactions can be meaningfully higher after international card fees, FX spread, payout fees, and intermediary charges. If your effective rate is above 5%, review payment mix, currency settlement, minimum order value, and whether fixed fees are too heavy for your price point.',
            'Payment fees should be included in every product margin calculator, not treated as accounting overhead. They affect break-even price, refund economics, and discount depth. Before launching a coupon or free-shipping offer, calculate the payment fee on the discounted price and confirm the net payout still covers product cost, fulfillment, platform fees, and acquisition spend.',
          ],
        },
      ],
    },
    targetPrice: {
      title: 'How to set a target selling price for profit',
      intro:
        'A target price calculator works backward from the profit you need. Instead of asking whether today’s price is profitable, it asks what price is required after product cost, shipping, platform fees, payment processing, advertising, refunds, and other costs are deducted.',
      sections: [
        {
          heading: 'Input definitions for pricing decisions',
          paragraphs: [
            'Product cost is the landed unit cost, including supplier price, packaging, freight, duty, quality inspection, and prep. Shipping cost is the per-order fulfillment or delivery cost paid by the seller. Platform fee rate covers marketplace commission or transaction fees, while payment fee rate and fixed payment fee cover card, PayPal, wallet, or payout charges. Ad cost is the expected acquisition cost per order, not the total campaign budget.',
            'Refund rate models expected value lost to returns, refunds, chargebacks, replacements, and resale markdowns. Other cost can include coupons, affiliate payouts, creator commissions, support credits, software allocation, or taxes that belong in contribution profit. Target net profit is a dollar amount you want to earn per order. Target profit margin is the percentage of selling price you want to keep as profit.',
            'The choice between target net profit and target margin changes the pricing behavior. A fixed target profit is useful when you need, for example, $10 per order to justify a SKU. A target margin is better when you want the business to maintain a consistent percentage return as prices and costs change.',
          ],
        },
        {
          heading: 'Formula and break-even logic',
          paragraphs: [
            'The calculator first adds fixed costs: base costs = product cost + shipping cost + ad cost + other cost. In target net profit mode, suggested price = (base costs + fixed payment fee + target net profit) ÷ (1 − platform fee rate − payment fee rate − refund rate). In target profit margin mode, suggested price = (base costs + fixed payment fee) ÷ (1 − platform fee rate − payment fee rate − refund rate − target margin).',
            'Break-even price uses the same structure without the target profit. It is the minimum price that covers costs and percentage deductions. If the denominator is low because platform fees, payment fees, refund rate, and target margin are too high, the required price will jump quickly. That signals the product may need lower costs, higher perceived value, or a different channel.',
          ],
        },
        {
          heading: 'Benchmarks for pricing and margin planning',
          paragraphs: [
            'Cross-border ecommerce sellers often treat 10% net margin as a minimum survival line, 15%–25% as a healthy operating range, and 30%+ as strong when volume is stable. ROI expectations depend on inventory turnover: a product with fast sell-through can tolerate lower ROI than a slow-moving SKU that ties up cash for months.',
            'Use target pricing before negotiating with suppliers, setting coupons, or entering a marketplace with high commission. If the suggested price is above what customers will pay, do not simply lower margin assumptions to make the model look acceptable. Instead, test bundles, reduce landed cost, change fulfillment method, improve conversion, or choose a product with more pricing power.',
          ],
        },
      ],
    },
    flipkart: {
      title: 'How to calculate Flipkart seller profit',
      intro:
        'Flipkart profitability depends on commission, collection fee, shipping, fixed fees, GST on platform fees, advertising, refunds, and the seller’s landed product cost. This guide explains each input and shows how to read the result before listing or discounting a product.',
      sections: [
        {
          heading: 'Flipkart input definitions',
          paragraphs: [
            'Selling price is the price paid by the buyer for one unit. Product cost should include purchase price, packaging, inward freight, import duty if applicable, labeling, and preparation. Shipping cost is the delivery or logistics charge allocated to the seller. Commission rate is the category-based percentage Flipkart charges for selling on the marketplace; many categories are commonly modeled in the 5%–25% range, but the exact rate should be checked against the 2026 category fee table for your listing.',
            'Collection fee rate is the payment collection or transaction charge, often modeled around 2% as a planning default. GST on fees rate represents tax applied to marketplace service fees, commonly 18% in India. Fixed fee is a per-order marketplace charge that can vary by order value, shipping zone, or seller program. Ad cost is the spend per order from Flipkart Ads or external traffic. Refund rate captures expected returns, cancellations, and loss from unsellable items.',
            'Other cost can include coupons, packaging upgrades, warehousing, listing services, reconciliation losses, or customer concessions. Keeping GST on fees separate from product tax is important because the calculator is estimating seller contribution profit, not filing tax returns. Use your accountant or marketplace tax report for statutory reporting.',
          ],
        },
        {
          heading: 'Formula and GST-on-fees treatment',
          paragraphs: [
            'The calculator uses commission = selling price × commission rate and collection fee = selling price × collection fee rate. GST on fees = (commission + shipping cost + collection fee) × GST on fees rate. Total cost then equals product cost + shipping cost + commission + collection fee + GST on fees + fixed fee + ad cost + refund loss + other cost. Net profit equals selling price minus total cost.',
            'Profit margin is net profit divided by selling price. ROI compares net profit with the invested cost base. A product can appear profitable before GST and fixed fees but become weak once those deductions are included. This is especially true for low-price items where the fixed fee takes a large share of the selling price.',
          ],
        },
        {
          heading: 'Seller benchmarks for Flipkart listings',
          paragraphs: [
            'A practical Flipkart target is often 10%–20% net margin after advertising and returns, with higher margin required for categories that have volatile returns or high discount pressure. For private-label or imported products, many sellers also watch ROI and cash conversion cycle because inventory, GST credits, and payout timing can affect working capital.',
            'Use this calculator before joining sale events, funding coupons, or increasing ad bids. If margin is thin, test whether price, product cost, shipping program, category fit, or ad efficiency is the real constraint. A sustainable listing should remain profitable after commission changes, returns, and promotional discounts rather than relying on a perfect order scenario.',
          ],
        },
      ],
    },
  },
  zh: {
    amazonFba: {
      title: '2026 年亚马逊 FBA 利润应该如何计算',
      intro:
        '亚马逊 FBA 利润不是简单的“售价减进货价”。一个真实可用的利润模型，需要把产品成本、头程或入仓物流、亚马逊佣金、FBA 配送费、仓储费、收款手续费、广告成本、退款损失和其他经营成本都放到同一张表里。这样卖家才能在备货、调价、投广告或参加促销前，看清每一单到底贡献多少利润。',
      sections: [
        {
          heading: '核心输入项：售价、产品成本、佣金、配送费与仓储费',
          paragraphs: [
            '售价是买家为单件商品支付的金额。产品成本不应只填工厂报价，还应包含包装、质检、贴标、关税、头程运费分摊、备货损耗等真实落地成本。物流成本可以理解为卖家希望分摊到每件商品上的运输或入仓费用。把这些项目拆开填写，可以判断利润问题到底来自供应链、物流，还是平台费用。',
            'Amazon Referral Fee 通常翻译为亚马逊佣金，是亚马逊按商品售价收取的销售服务费。2026 年做利润测算时，大多数品类仍可先用 15% 作为保守默认值，但不同类目可能低于或高于该水平，应以卖家后台的类目费率为准。FBA 配送费覆盖拣货、包装、配送、客服和退货处理等履约环节，取决于尺寸分段、重量、体积重和旺季政策。仓储费则是库存占用亚马逊仓库产生的月度成本，慢周转商品还可能带来长期仓储或移除费用。',
            '广告费建议填写单笔订单平均广告成本，而不是整个广告账户预算。退款率用于估算退货、退款、破损、二次销售折价带来的损失。其他成本可以放入优惠券、测评样品、拍摄费分摊、ERP 或选品软件、海外仓处理费等未被前面字段覆盖的项目。字段越接近真实现金流，计算结果越有决策价值。',
          ],
        },
        {
          heading: '计算公式与推导过程',
          paragraphs: [
            '计算器会先把百分比费用转成金额：佣金 = 售价 × 佣金费率；收款手续费 = 售价 × 收款费率 + 固定收款费；退款损失 = 售价 × 退款率。然后汇总总成本：产品成本 + 物流成本 + 佣金 + FBA 配送费 + 仓储费 + 收款手续费 + 广告费 + 退款损失 + 其他成本。净利润 = 售价 − 总成本。',
            '利润率 = 净利润 ÷ 售价，用来观察每 1 美元销售额最终留下多少利润。ROI = 净利润 ÷ 投入成本基数，通常用于判断库存资金的回报效率。盈亏平衡价则是把公式反推：把固定成本和单位成本除以扣除佣金、收款费率、退款率后的剩余比例。如果这个剩余比例过低，说明平台费用和损耗已经吃掉大部分售价，产品抗风险能力较弱。',
          ],
        },
        {
          heading: '健康利润率和 ROI 参考标准',
          paragraphs: [
            '对跨境电商 FBA 卖家来说，成熟稳定 SKU 在扣除广告后的净利润率通常希望达到 10%–20%。新品冷启动、清库存或抢排名阶段可以短期低于这个水平，但如果评论、转化率和广告效率改善后仍无法转正，就应谨慎补货。很多卖家还会要求库存 ROI 至少达到 30%–60%，以覆盖账期、库存周转、仓储波动和退货风险。',
            '使用这个计算器时，不要只看净利润是否为正，还要看哪一项成本最大。如果利润率低于 10%，优先检查采购价、包装尺寸、FBA 费、广告 ACOS、优惠券和售价空间。真正健康的亚马逊产品，应当在费率调整、CPC 上升、周转变慢时仍有缓冲，而不是依赖“每一项都刚好不出错”的理想场景。',
          ],
        },
      ],
    },
    tiktokShop: {
      title: '2026 年 TikTok Shop 利润计算方法',
      intro:
        'TikTok Shop 的利润模型和传统货架电商不同，因为平台费、达人佣金、广告成本、样品投放和退款都会同时影响每一单的贡献利润。一个商品即使 GMV 很高，如果达人佣金和投流成本过高，也可能实际亏损。下面用字段和公式解释如何判断 TikTok Shop 订单是否真正赚钱。',
      sections: [
        {
          heading: 'TikTok Shop 各输入指标是什么意思',
          paragraphs: [
            '售价是买家看到并支付的成交价格，应按实际折扣后的价格填写。产品成本包括采购价、包装、质检、入库、头程分摊和赠品或配件。物流成本是卖家承担的发货、仓配或尾程费用；如果平台补贴了部分运费，只需填写商家实际承担的部分。',
            '平台费率是 TikTok Shop 对交易收取的服务费。做 2026 年测算时，6% 可以作为不少类目的初始假设，但最终应按站点、类目和商家计划更新。达人佣金率是支付给短视频、直播或联盟达人的销售提成，常见区间可能在 5%–20%，新品冷启动或强激励计划可能更高。它与平台费是两笔不同成本，不能只算其中一项。',
            '收款费率和固定收款费覆盖支付处理成本。广告费建议填写每单平均获客成本，包括 TikTok Shop Ads、Spark Ads、GMV Max 或外部流量。退款率反映拒收、退货、退款和售后补偿。其他成本可填写样品寄送分摊、达人建联成本、优惠券、仓库操作费或客服补偿。',
          ],
        },
        {
          heading: '公式如何计算净利润',
          paragraphs: [
            '平台费 = 售价 × 平台费率；达人佣金 = 售价 × 达人佣金率；收款手续费 = 售价 × 收款费率 + 固定收款费；退款损失 = 售价 × 退款率。总成本 = 产品成本 + 物流成本 + 平台费 + 达人佣金 + 收款手续费 + 广告费 + 退款损失 + 其他成本。净利润 = 售价 − 总成本。',
            '利润率 = 净利润 ÷ 售价，用于判断订单质量。ROI 则关注这笔利润相对于产品、物流、广告等投入成本的回报。TikTok Shop 特别需要同时观察达人佣金和广告费，因为很多爆款在 GMV 上升时，利润反而被佣金、投流和退款吞噬。',
          ],
        },
        {
          heading: '内容电商的健康利润参考',
          paragraphs: [
            '稳定阶段的 TikTok Shop 商品，扣除达人和广告后如果能保持 15%–25% 净利润率，通常更有扩量空间。若一单利润很低，必须确认是否有复购、组合装、私域沉淀或后续加购来回收成本。对于一次性消费品，首单就长期亏损通常风险较高。',
            '在设置达人佣金、投放 GMV Max、参加闪促或给样品预算前，应先用计算器测试多个佣金和广告成本情景。如果只有在零退款、低广告、低佣金的情况下才盈利，说明产品没有足够安全边际。真正适合内容电商放量的商品，需要同时满足可展示、可转化和可盈利。',
          ],
        },
      ],
    },
    shopify: {
      title: 'Shopify 独立站利润和真实毛利如何计算',
      intro:
        'Shopify 独立站没有传统平台佣金的强约束，但并不意味着成本更低。支付手续费、应用订阅、广告获客、仓储履约、退款、邮件短信工具和客服成本都会进入每一单利润。这个计算器的目的，是把这些看似分散的费用折算成单笔订单模型，帮助卖家判断定价和投放是否可持续。',
      sections: [
        {
          heading: 'Shopify 利润计算中的关键输入',
          paragraphs: [
            '售价是顾客结账时的商品价格或单件平均价格，应考虑折扣后的实际成交价。产品成本包括供应商报价、包装、质检、关税、国际物流分摊、定制或赠品成本。物流成本是商家承担的邮费、仓库拣货、打包和第三方物流费用；若消费者单独支付运费，应只填商家补贴或实际承担的部分。',
            '平台费率在使用 Shopify Payments 时通常可填 0%，但如果使用第三方支付网关，Shopify 可能根据套餐收取额外交易费。收款费率用于模拟信用卡、PayPal、Shop Pay、国际卡或货币转换成本，常见线上卡支付可先按约 2.9% + $0.30 测算，再按实际账户费率修正。应用成本是独立站常被低估的部分，应把评论、邮件、加购、订阅、客服等月费除以预计月订单数，换算成每单成本。',
            '广告费是每单获客成本，可以来自 Meta、Google、TikTok、联盟、KOL 或邮件拉新。退款率包含退款、拒付、补发、退货运费和折价处理。其他成本可放入优惠券、积分、短信费、反欺诈工具、主题或拍摄费用分摊。',
          ],
        },
        {
          heading: '计算公式与月费分摊',
          paragraphs: [
            '平台费 = 售价 × 平台费率；收款手续费 = 售价 × 收款费率 + 固定收款费；退款损失 = 售价 × 退款率。总成本 = 产品成本 + 物流成本 + 平台费 + 收款手续费 + 应用成本 + 广告费 + 退款损失 + 其他成本。净利润 = 售价 − 总成本，利润率 = 净利润 ÷ 售价。',
            'Shopify 的难点在于很多费用是月费，不是单笔费用。假设评论、邮件、加购和客服应用每月合计 $290，如果月订单数为 1,000 单，每单应用成本是 $0.29；如果只有 100 单，每单就变成 $2.90。早期独立站常常因为订单量不足而被应用和工具成本拖低利润。',
          ],
        },
        {
          heading: '独立站健康利润率参考',
          paragraphs: [
            '对 Shopify 产品型独立站而言，扣除产品、履约、支付、应用、广告和退款后的贡献利润率，通常希望达到 15%–30%。如果复购率高、订阅留存好或客单价持续提升，首单可以承受较低利润；但一次性购买产品更需要首单就有较强利润，否则广告成本一上升就会亏损。',
            '在放大广告预算前，应同时测试售价、折扣、免邮门槛、应用费用、支付费率和退款率。若在真实 CAC 下利润为负，问题未必是广告投手，而可能是客单价太低、供应链成本太高、组合装不足或转化率不够。一个稳健的 2026 年独立站模型，应能承受支付费率变化和广告成本波动。',
          ],
        },
      ],
    },
    paymentFees: {
      title: '跨境收款手续费如何影响卖家利润',
      intro:
        '收款手续费看起来只是几个百分点，但它会直接减少每一笔订单到账金额。对于跨境电商卖家，PayPal、Stripe、Wise、Payoneer、信用卡通道、平台打款和货币转换都可能产生费用。这个计算器支持从总额算净额，也支持从目标净额反推需要收取的总额。',
      sections: [
        {
          heading: '金额、费率、固定费用和计算模式',
          paragraphs: [
            '金额在“从总额算净额”模式下，表示客户或平台支付的原始金额；在“从净额反算总额”模式下，表示卖家希望最终到账的目标净额。费率是支付机构按交易金额收取的百分比费用，固定费用是每笔交易额外收取的固定金额，例如很多线上卡交易会出现 $0.30 这类固定费用。',
            '2026 年做费用测算时，常见线上卡支付仍可先用约 2.9% + $0.30 作为基础假设，但国际卡、PayPal 跨境交易、货币转换、提现、平台结算和本地收单都会改变真实费率。Wise 等跨境收款工具的费率通常随币种组合变化，主要货币可能较低，小众币种或快速到账可能更贵。',
            '固定费用对低客单价影响特别明显。$0.30 对 $100 订单只相当于 0.3%，但对 $10 订单就是 3%，再叠加百分比费率后，实际费率会明显高于宣传费率。因此样品、小配件、低价试用装尤其需要关注有效手续费率。',
          ],
        },
        {
          heading: '从总额算净额与从净额反推总额',
          paragraphs: [
            '从总额算净额的公式是：手续费 = 总额 × 费率 + 固定费用；净额 = 总额 − 手续费；实际费率 = 手续费 ÷ 总额。这个模式适合已经知道售价或收款金额，只想估算最终到账的场景。',
            '从净额反推总额的公式是：总额 =（目标净额 + 固定费用）÷（1 − 费率）；手续费 = 总额 − 目标净额。这个模式适合开发票、报价、B2B 收款或希望把支付手续费计入售价的场景。如果不反推，卖家容易以为收到了目标金额，实际到账却少了一截。',
          ],
        },
        {
          heading: '手续费健康区间与经营决策',
          paragraphs: [
            '很多国内或本地线上卡支付的有效费率可能在 2%–4% 区间，跨境交易加上国际卡、换汇价差和提现费后可能明显更高。如果实际费率超过 5%，应检查支付方式组合、结算币种、最低订单金额、固定费用占比和是否存在重复收费。',
            '收款手续费应进入所有利润计算，而不是只在财务月底对账时处理。它会影响盈亏平衡价、退款损失和折扣空间。卖家在设置优惠券、免邮、联盟佣金或批发报价前，应先确认扣除手续费后的净额仍能覆盖产品、履约、平台费和广告成本。',
          ],
        },
      ],
    },
    targetPrice: {
      title: '如何倒推达到目标利润所需的售价',
      intro:
        '目标利润售价计算器不是问“现在这个价格赚不赚钱”，而是反过来问：在扣除产品成本、物流、平台费、收款手续费、广告、退款和其他成本后，必须卖到什么价格才能达到目标净利润或目标利润率。它适合选品、报价、调价和促销前测算。',
      sections: [
        {
          heading: '定价输入项的含义',
          paragraphs: [
            '产品成本是单件落地成本，包括采购价、包装、头程、关税、质检和备货处理。物流成本是每单履约或配送费用。平台费率对应亚马逊、TikTok Shop、Flipkart 等平台佣金或交易服务费。收款费率和固定收款费对应信用卡、PayPal、钱包或平台打款成本。广告费应填写预计每单获客成本，而不是广告账户总预算。',
            '退款率代表退货、退款、拒付、补发和折价处理的期望损失。其他成本可放入优惠券、达人佣金、联盟佣金、客服补偿、软件分摊、税费或其他贡献利润层面的费用。目标净利润是希望每单赚到的固定金额，目标利润率则是希望把售价中的一定比例留下来作为利润。',
            '两种目标适合不同场景。固定目标净利润适合明确要求每单至少赚 $10 或 $20 的产品。目标利润率适合规模化经营，因为售价和成本变化时，利润会按比例调整，更容易保持整体回报水平。',
          ],
        },
        {
          heading: '公式推导与盈亏平衡价',
          paragraphs: [
            '计算器先汇总基础成本：基础成本 = 产品成本 + 物流成本 + 广告费 + 其他成本。在目标净利润模式下，建议售价 =（基础成本 + 固定收款费 + 目标净利润）÷（1 − 平台费率 − 收款费率 − 退款率）。在目标利润率模式下，建议售价 =（基础成本 + 固定收款费）÷（1 − 平台费率 − 收款费率 − 退款率 − 目标利润率）。',
            '盈亏平衡价使用相同结构，但不加入目标利润。它表示刚好覆盖所有成本和百分比扣费的最低售价。如果平台费、收款费、退款率和目标利润率相加过高，分母会变小，建议售价会快速上升。这说明产品可能需要降本、提高感知价值、换渠道或改变履约方式。',
          ],
        },
        {
          heading: '跨境电商定价参考标准',
          paragraphs: [
            '很多跨境卖家会把 10% 净利润率视为安全线，把 15%–25% 视为比较健康的经营区间，30% 以上则通常代表较强的定价权或供应链优势。但 ROI 还要结合库存周转来看：快速周转产品可以接受较低单次 ROI，慢周转产品则需要更高回报来补偿资金占用。',
            '如果计算出的建议售价高于市场可接受价格，不建议简单降低目标利润让模型看起来合理。更好的做法是重新谈采购价、设计组合装、提高客单价、优化包装和物流、减少退款、提高转化率或更换产品。定价工具的价值在于提前暴露问题，而不是把亏损产品包装成可盈利。',
          ],
        },
      ],
    },
    flipkart: {
      title: 'Flipkart 卖家利润如何计算',
      intro:
        'Flipkart 利润需要同时考虑佣金、代收费、物流、固定费用、费用上的 GST、广告、退款和产品落地成本。很多商品在只看采购价和售价时似乎有利润，但加入平台费用和税费后，真实利润率会明显下降。下面解释每个输入项以及完整计算逻辑。',
      sections: [
        {
          heading: 'Flipkart 费用输入项解释',
          paragraphs: [
            '售价是买家为单件商品支付的价格。产品成本应包含采购、包装、入库、进口关税、贴标、质检和准备费用。物流成本是分摊到订单上的配送或平台物流费用。佣金费率是 Flipkart 按类目收取的平台销售佣金，很多类目可先按 5%–25% 范围测算，但 2026 年实际费率应以对应类目的官方费用表为准。',
            '代收费率是支付代收或交易处理费用，可用 2% 作为初步测算。费用 GST 税率通常按印度 18% 的商品及服务税思路建模，但这里计算的是平台服务费上的税费影响，不等同于完整税务申报。固定费是每单固定收取的费用，可能随订单金额、配送区域、卖家计划而变化。',
            '广告费是 Flipkart Ads 或外部引流分摊到每单的成本。退款率用于估算退货、取消、拒收和无法二次销售造成的损失。其他成本可放入优惠券、仓储、包装升级、对账差异、运营服务费或售后补偿。',
          ],
        },
        {
          heading: '佣金、代收费和 GST 的公式',
          paragraphs: [
            '佣金 = 售价 × 佣金费率；代收费 = 售价 × 代收费率；费用 GST =（佣金 + 物流 + 代收费）× GST 税率。总成本 = 产品成本 + 物流 + 佣金 + 代收费 + 费用 GST + 固定费 + 广告 + 退款损失 + 其他成本。净利润 = 售价 − 总成本。',
            '利润率 = 净利润 ÷ 售价，用来衡量订单质量。ROI 用于观察库存和运营投入的回报。低价商品要特别注意固定费和 GST，因为固定费用不随售价下降而等比例下降，折扣活动可能很快把利润吃掉。',
          ],
        },
        {
          heading: 'Flipkart 商品健康利润参考',
          paragraphs: [
            '扣除广告和退货后，Flipkart 商品通常希望仍能保持 10%–20% 的净利润率；退货波动大、促销压力强或物流成本高的类目，需要更高安全边际。对跨境或进口卖家来说，还要关注库存周转、回款周期和税费抵扣时间，因为这些会影响现金流。',
            '在参加大促、设置优惠券或提高广告出价前，应先用计算器模拟活动价。如果只有在零退货、低广告和低固定费的理想情况下才盈利，这个 listing 并不稳健。可持续的 Flipkart 商品，应在佣金变化、退货增加和促销折扣后仍保留一定利润空间。',
          ],
        },
      ],
    },
  },
};
