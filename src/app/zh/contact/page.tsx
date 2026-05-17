import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '联系我们',
  description: '联系卖家利润工具箱 — 获取利润计算器帮助、报告问题或发送反馈。我们会在 24 小时内回复。',
};

export default function ZhContactPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900">联系我们</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="prose prose-gray max-w-none space-y-6">
        <p>我们期待您的来信！无论您有问题、反馈还是建议，请随时联系我们。</p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">一般咨询</h2>
          <p>电子邮件：<a href="mailto:taoxinglong94@gmail.com" className="text-blue-600 hover:underline">taoxinglong94@gmail.com</a></p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">隐私与法律</h2>
          <p>电子邮件：<a href="mailto:taoxinglong94@gmail.com" className="text-blue-600 hover:underline">taoxinglong94@gmail.com</a></p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">功能建议</h2>
          <p>有新计算器或功能的想法？我们一直在寻找改进工具的方法。发送您的建议，我们会在未来的更新中考虑。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">商务合作</h2>
          <p>有兴趣与我们合作或在我们平台投放广告？请联系我们讨论合作机会。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">回复时间</h2>
          <p>我们通常在 2-3 个工作日内回复。感谢您的耐心等待！</p>
        </section>
      </div>
      </div>
    </>
  );
}
