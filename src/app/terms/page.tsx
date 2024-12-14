export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="section-title">Terms and Conditions</h1>
          <p className="section-description mt-5">
            Please read these terms and conditions carefully before using our
            service
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-600">
              By accessing and using Resume Builder Pro's services, you agree to
              be bound by these Terms and Conditions and our Privacy Policy. If
              you disagree with any part of these terms, you may not access our
              service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Services Description
            </h2>
            <p className="text-gray-600">
              Resume Builder Pro provides resume creation and management
              services, including:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Resume template creation and customization</li>
              <li>
                AI-powered resume enhancement features (powered by OpenAI)
              </li>
              <li>Resume storage and sharing capabilities</li>
              <li>LinkedIn data integration (Premium feature)</li>
              <li>Voice typing capabilities (Premium feature)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. User Accounts
            </h2>
            <p className="text-gray-600">
              When you create an account with us, you must provide accurate,
              complete, and current information. You are responsible for
              maintaining the confidentiality of your account and password.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Privacy and Data Protection
            </h2>
            <p className="text-gray-600">
              We take your privacy seriously. Your use of our service is also
              governed by our Privacy Policy, which outlines how we collect,
              use, and protect your personal information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-600">
              The service and its original content, features, and functionality
              are owned by Resume Builder Pro and are protected by international
              copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Prohibited Activities
            </h2>
            <p className="text-gray-600">
              You may not access or use the Service for any purpose other than
              that for which we make the Service available. The Service may not
              be used in connection with any commercial endeavors except those
              that are specifically endorsed or approved by us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. AI Services and OpenAI Integration
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  7.1. AI Feature Acknowledgement
                </h3>
                <p className="text-gray-600">
                  Our AI features are powered by OpenAI's language models. By
                  using these features, you acknowledge:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                  <li>Your inputs will be processed by OpenAI's services</li>
                  <li>Generated content may vary in quality and accuracy</li>
                  <li>We cannot guarantee specific AI-generated outcomes</li>
                  <li>Usage is subject to OpenAI's usage policies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  7.2. AI Usage Restrictions
                </h3>
                <ul className="space-y-1 text-gray-600 list-disc list-inside">
                  <li>
                    You may not use AI features for generating harmful or
                    malicious content
                  </li>
                  <li>
                    Generated content must comply with our content guidelines
                  </li>
                  <li>
                    We reserve the right to limit AI feature usage to prevent
                    abuse
                  </li>
                  <li>
                    Premium features may have usage limits per subscription tier
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  7.3. AI Content Rights
                </h3>
                <ul className="space-y-1 text-gray-600 list-disc list-inside">
                  <li>You retain rights to your input content</li>
                  <li>You receive a license to use AI-generated content</li>
                  <li>
                    Generated content may be similar to other users' results
                  </li>
                  <li>We may use anonymized inputs to improve our services</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              Resume Builder Pro shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting
              from your use or inability to use the service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. We will
              notify users of any material changes via email or through our
              service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Contact Information
            </h2>
            <p className="text-gray-600">
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                Email: support@resumebuilderpro.com
              </p>
              <p className="text-gray-600">Address: [Your Company Address]</p>
            </div>
          </section>
        </div>

        <div className="mt-16 text-center text-sm text-gray-500">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
