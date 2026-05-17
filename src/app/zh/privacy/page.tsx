import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '隐私政策',
  description: '卖家利润工具箱隐私政策 — 了解我们如何处理您的数据。所有计算器在浏览器本地运行，零数据收集。',
};

export default function ZhPrivacyPolicy() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900">隐私政策</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="prose prose-gray max-w-none space-y-6">
        <p><strong>最后更新：</strong>{new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 简介</h2>
          <p>欢迎访问卖家利润工具箱（以下简称&quot;我们&quot;）。我们致力于保护您的隐私。本隐私政策说明了您访问本网站时我们如何收集、使用和保护您的信息。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 我们收集的信息</h2>
          <p>我们不需要用户注册，也不收集个人信息，如姓名、电子邮件地址或付款信息。我们的计算器完全在您的浏览器中运行。</p>
          <p>我们可能会自动收集某些非个人信息，包括：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>浏览器类型和版本</li>
            <li>操作系统</li>
            <li>访问的页面和停留时间</li>
            <li>来源网站地址</li>
            <li>IP 地址（已匿名化）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookie 和分析</h2>
          <p>我们可能使用 Cookie 和类似跟踪技术来分析网站流量和改善服务。我们使用 Google Analytics 来了解访客如何使用我们的网站。</p>
          <p>您可以通过安装 <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">Google Analytics 退出浏览器插件</a> 来选择退出 Google Analytics。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 第三方服务</h2>
          <p>我们可能使用以下第三方服务：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Google Analytics：</strong>用于网站分析。<a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">Google 隐私政策</a></li>
            <li><strong>Google AdSense：</strong>用于展示广告。<a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline">Google 如何使用数据</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 数据安全</h2>
          <p>我们实施适当的安全措施来保护您的信息。但是，没有任何通过互联网传输的方法是 100% 安全的。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 儿童隐私</h2>
          <p>我们的服务不面向 13 岁以下儿童。我们不会故意收集儿童的个人信息。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 政策变更</h2>
          <p>我们可能会不时更新本隐私政策。我们将在本页面发布新政策来通知您。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 联系我们</h2>
          <p>如果您对本隐私政策有疑问，请通过以下方式联系我们：</p>
          <p>电子邮件：<a href="mailto:taoxinglong94@gmail.com" className="text-blue-600 hover:underline">taoxinglong94@gmail.com</a></p>
        </section>
      </div>
      </div>
    </>
  );
}
