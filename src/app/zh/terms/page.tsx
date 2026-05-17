import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '服务条款',
  description: '卖家利润工具箱服务条款 — 使用我们免费利润计算器的规则和指南。',
};

export default function ZhTermsOfService() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900">服务条款</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-gray max-w-none space-y-6">
        <p><strong>最后更新：</strong>{new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 接受条款</h2>
          <p>访问和使用卖家利润工具箱（以下简称&quot;本网站&quot;），即表示您同意受本服务条款的约束。如果您不同意本条款的任何部分，请勿使用本网站。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 服务说明</h2>
          <p>卖家利润工具箱提供免费在线计算器，旨在帮助电商卖家估算利润率、收款费用和目标定价。工具覆盖的平台包括亚马逊 FBA、TikTok Shop、Shopify 以及各类收款服务商。</p>
          <p>所有计算均在您的浏览器本地完成。我们不会存储、传输或访问您在计算器中输入的任何数据。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 准确性声明</h2>
          <p>本网站的计算器根据您输入的费率和参数提供估算结果。这些结果仅供参考，不应被视为财务建议。</p>
          <p>实际费用可能因以下因素而有所不同：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>产品类别和卖家等级</li>
            <li>平台政策变更和费率调整</li>
            <li>不同地区的费率结构差异</li>
            <li>促销费率或阶梯折扣</li>
          </ul>
          <p>在做出商业决策之前，请务必对照官方平台文档验证计算结果。对于因依赖我们的估算而造成的任何财务损失，我们不承担责任。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 知识产权</h2>
          <p>本网站上的所有内容，包括但不限于文字、图形、标识、计算器公式和软件，均为卖家利润工具箱的财产，受适用的知识产权法律保护。</p>
          <p>未经我们事先书面同意，您不得复制、分释、修改或基于本网站上的任何内容创作衍生作品。您可以将计算器用于个人或商业评估目的。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 合理使用</h2>
          <p>您同意仅将本网站用于合法目的。您不得：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>试图干扰本网站的运营或安全</li>
            <li>使用自动化工具抓取或提取本网站的数据</li>
            <li>引入恶意代码或试图利用漏洞</li>
            <li>以可能损害、禁用或影响服务的方式使用本网站</li>
            <li>歪曲工具生成计算结果的来源或准确性</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 第三方链接和服务</h2>
          <p>本网站可能包含指向第三方网站或服务的链接，包括平台文档和合作伙伴资源。这些链接仅为方便起见而提供。</p>
          <p>我们不认可也不对任何第三方网站的内容、隐私政策或做法承担责任。您与第三方服务的互动受其各自的条款和政策约束。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 广告</h2>
          <p>本网站可能展示第三方广告，包括通过 Google AdSense 投放的广告。广告商可能会使用 Cookie 和网络信标，根据您对本网站或其他网站的先前访问来投放广告。</p>
          <p>您可以通过 Google 广告设置管理广告偏好，或通过<a href="https://www.aboutads.info/choices/" className="text-blue-600 hover:underline">数字广告联盟</a>选择退出个性化广告。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 责任限制</h2>
          <p>在适用法律允许的最大范围内，卖家利润工具箱不对任何间接、附带、特殊、后果性或惩罚性损害，或任何利润或收入损失（无论是直接还是间接产生），或任何数据、使用、商誉或其他无形损失承担责任，包括但不限于因以下原因造成的损失：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>您使用或无法使用本网站</li>
            <li>对计算器结果或估算的任何依赖</li>
            <li>对您数据的未经授权访问或篡改</li>
            <li>本网站上任何第三方的声明或行为</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. 条款变更</h2>
          <p>我们保留随时修改本服务条款的权利。变更将在本页面发布后立即生效。您在任何变更后继续使用本网站即表示接受更新后的条款。</p>
          <p>我们建议您定期查看本页面以获取最新信息。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. 适用法律</h2>
          <p>本服务条款应受适用法律管辖并依其解释，不考虑法律冲突条款。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. 联系我们</h2>
          <p>如果您对本服务条款有任何疑问，请联系我们：</p>
          <p>电子邮件：<a href="mailto:taoxinglong94@gmail.com" className="text-blue-600 hover:underline">taoxinglong94@gmail.com</a></p>
        </section>
      </div>
      </div>
    </>
  );
}
