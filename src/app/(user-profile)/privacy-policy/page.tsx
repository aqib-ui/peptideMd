import LegalLayout from "../ProfileComponents/LegalLayout";
export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="text-[#51595A] text-base md:text-xl ">
        We respect your privacy and are committed to protecting your personal
        information. This policy outlines how we collect, use, and safeguard
        your data.
      </p>

      <div>
        <h2 className="text-xl font-semibold text-[#25292A] mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc ml-8 space-y-2 text-[#51595A] text-base md:text-xl">
          <li>
            Personal info: such as name, email, age, gender (as provided by you)
          </li>
          <li>Usage data: app activity, selected peptides, AI queries</li>
          <li>
            Health-related input: goals, peptide selections, and dosage data you
            choose to enter
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-[#25292A] mb-2">
          2. How We Use Your Data
        </h2>
        <ul className="list-disc ml-8 space-y-2 text-[#51595A] text-base md:text-xl">
          <li>To personalize your peptide learning and dosage experience</li>
          <li>
            To improve AI suggestions, dosage tracking, and content
            recommendations
          </li>
          <li>To provide customer support and improve the app</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-[#25292A] mb-2">
          3. Data Sharing
        </h2>
        <ul className="list-disc ml-8 space-y-2 text-[#51595A] text-base md:text-xl">
          <li>We do not sell your personal data.</li>
          <li>
            We may share anonymized usage statistics with trusted partners for
            product improvements.
          </li>
          <li>
            Data may be shared with service providers (e.g., analytics, payment
            processors) under confidentiality agreements.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-[#25292A] mb-2">
          4. AI Interactions
        </h2>
        <ul className="list-disc ml-8 space-y-2 text-[#51595A] text-base md:text-xl">
          <li>
            Your AI interactions may be stored securely to improve app
            performance and provide relevant suggestions.
          </li>
          <li>
            All sensitive data is handled with care and is not exposed to third
            parties.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-[#25292A] mb-2">
          5. Your Rights
        </h2>
        <ul className="list-disc ml-8 space-y-2 text-[#51595A] text-base md:text-xl">
          <li>
            You can access, update, or delete your data anytime by contacting
            support.
          </li>
          <li>
            You can opt-out of marketing or AI feedback features in settings.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-[#25292A] mb-2">
          6. Data Security
        </h2>
        <ul className="list-disc ml-8 space-y-2 text-[#51595A] text-base md:text-xl">
          <li>
            We use industry-standard encryption and secure infrastructure.
          </li>
          <li>
            While we take all precautions, no platform is 100% immune from
            breaches.
          </li>
        </ul>
      </div>
    </LegalLayout>
  );
}
