import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Seller Margin Tools — learn how we handle your data. Our calculators run entirely in your browser with zero data collection.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="prose prose-gray max-w-none space-y-6">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
          <p>Welcome to Seller Margin Tools (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website sellermargintools.com.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
          <p>We do not require user registration or collect personal information such as names, email addresses, or payment details. Our calculators operate entirely in your browser.</p>
          <p>We may automatically collect certain non-personal information, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent</li>
            <li>Referring website addresses</li>
            <li>IP address (anonymized)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookies and Analytics</h2>
          <p>We may use cookies and similar tracking technologies to analyze website traffic and improve our services. We use Google Analytics to understand how visitors use our site. Google Analytics uses cookies to collect information about your use of our website.</p>
          <p>You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">Google Analytics Opt-out Browser Add-on</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Services</h2>
          <p>We may use third-party services, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Google Analytics:</strong> For website analytics. <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">Google Privacy Policy</a></li>
            <li><strong>Google AdSense:</strong> For displaying advertisements. <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline">How Google uses data</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
          <p>We implement appropriate security measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Children&apos;s Privacy</h2>
          <p>Our services are not intended for children under 13. We do not knowingly collect personal information from children.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <p>Email: <a href="mailto:taoxinglong94@gmail.com" className="text-blue-600 hover:underline">taoxinglong94@gmail.com</a></p>
        </section>
      </div>
      </div>
    </>
  );
}
