import { Separator } from "@/components/ui/separator";

const LongbytePrivacyPolicy = () => {

  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <p>
            This Privacy Policy explains how Longbyte Software Private Limited ("Longbyte", "we", "us", or "our") collects, uses, discloses,
            and safeguards your information when you visit our website and use our services. By accessing or using our website, you agree to the
            collection and use of information in accordance with this policy.
          </p>

          <Separator className="my-8" />

          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium">Information you provide</span>: name, email address, phone number, company, and any details you share via forms or inquiries.
            </li>
            <li>
              <span className="font-medium">Usage data</span>: pages visited, interactions, referring pages, and approximate location derived from IP address.
            </li>
            <li>
              <span className="font-medium">Cookies and similar technologies</span>: used to remember preferences and improve the site experience.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide, operate, and improve our website and services.</li>
            <li>To respond to inquiries and deliver customer support.</li>
            <li>To personalize content and understand how users interact with our site.</li>
            <li>To communicate updates, marketing, and promotional materials where permitted.</li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Cookies</h2>
          <p>
            We use cookies to operate our website, analyze traffic, and enhance user experience. You can control cookies through your browser
            settings. Disabling cookies may impact some features of the site.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share information with trusted service providers who assist in operating our website
            and delivering services, bound by contractual confidentiality and security obligations. We may also disclose information if required by
            law or to protect our rights.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Data Retention</h2>
          <p>
            We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal
            obligations, resolve disputes, and enforce agreements.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, update, or delete your personal information, object to or restrict
            certain processing, and request data portability. To exercise these rights, contact us using the details below.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Children's Privacy</h2>
          <p>
            Our services are not directed to children under 13, and we do not knowingly collect personal information from children. If you believe a
            child has provided us personal information, please contact us to request deletion.
          </p>

          <h2 className="text-2xl font-semibold mt-8">International Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own. We take steps to ensure appropriate safeguards
            are in place consistent with applicable data protection laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will indicate the latest effective date at the top of this page. Your continued
            use of the website following changes signifies acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, contact us at:
          </p>
          <p className="mt-2">
            Longbyte Software Private Limited<br />
            Miryalaguda, Nalgonda, Telangana, India - 508278<br />
            Email: hi@longbyte.in
          </p>
        </div>
      </div>
    </section>
  );
};

export default LongbytePrivacyPolicy;


