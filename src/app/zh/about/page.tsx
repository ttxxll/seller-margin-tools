import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们',
  description: '了解卖家利润工具箱及我们帮助在线卖家计算真实利润的使命。',
};

export default function ZhAboutPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900">关于卖家利润工具箱</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">我们的使命</h2>
          <p>卖家利润工具箱是一个免费的双语计算器工具包，旨在帮助在线和跨境卖家了解其真实利润率。我们相信透明的财务计算对于建立可持续的电商业务至关重要。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">为什么创建这个工具</h2>
          <p>许多卖家只看收入减去产品成本，但真实情况包括平台费、收款手续费、广告成本、物流、退款和其他费用。如果没有准确的利润计算，卖家可能会在认为盈利的销售中实际亏损。</p>
          <p>我们创建了这些免费工具，帮助卖家做出明智的定价决策、找出亏损产品并优化业务运营。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">我们提供的服务</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>亚马逊 FBA 利润计算器：</strong>估算佣金、配送费、仓储费和所有费用后的真实利润。</li>
            <li><strong>TikTok Shop 利润计算器：</strong>计算平台费、达人佣金和广告成本后的利润。</li>
            <li><strong>Shopify 利润计算器：</strong>追踪收款手续费、应用订阅和其他成本后的利润。</li>
            <li><strong>收款手续费计算器：</strong>计算 PayPal、Stripe、Wise 等收款平台的手续费。</li>
            <li><strong>目标利润售价计算器：</strong>反算达到目标利润率所需的售价。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">我们的承诺</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>免费使用：</strong>所有计算器完全免费，无需登录。</li>
            <li><strong>公式透明：</strong>我们展示计算的具体过程。</li>
            <li><strong>双语支持：</strong>支持英文和中文。</li>
            <li><strong>注重隐私：</strong>无需注册，不存储数据。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">免责声明</h2>
          <p>我们的计算器根据您输入的费率提供估算。实际费用可能因产品类别、卖家状态和平台政策变化而有所不同。在做出商业决策前，请务必核实官方平台文档。</p>
        </section>
      </div>
      </div>
    </>
  );
}
