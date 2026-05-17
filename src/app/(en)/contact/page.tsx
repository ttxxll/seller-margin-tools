import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Seller Margin Tools — get help with our profit calculators, report issues, or send feedback. We respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="prose prose-gray max-w-none space-y-6">
        <p>We&apos;d love to hear from you! Whether you have questions, feedback, or suggestions, please don&apos;t hesitate to reach out.</p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Inquiries</h2>
          <p>Email: <a href="mailto:taoxinglong94@gmail.com" className="text-blue-600 hover:underline">taoxinglong94@gmail.com</a></p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy & Legal</h2>
          <p>Email: <a href="mailto:taoxinglong94@gmail.com" className="text-blue-600 hover:underline">taoxinglong94@gmail.com</a></p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feature Requests</h2>
          <p>Have an idea for a new calculator or feature? We&apos;re always looking to improve our tools. Send us your suggestions and we&apos;ll consider them for future updates.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Business Partnerships</h2>
          <p>Interested in partnering with us or advertising on our platform? Contact us to discuss opportunities.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Response Time</h2>
          <p>We typically respond within 2-3 business days. Thank you for your patience!</p>
        </section>
      </div>
      </div>
    </>
  );
}
