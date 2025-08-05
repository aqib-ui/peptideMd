import LegalLayout from "../ProfileComponents/LegalLayout";


export default function TermsAndConditions() {
  return (
    <LegalLayout title="Terms & Conditions">
      <p  className="text-[#51595A] text-base md:text-xl ">
        Welcome to [App Name] ("we," "our," or "us"). By accessing or using our
        mobile application and services, you agree to comply with and be bound
        by these Terms & Conditions.
      </p>

      <div className="pt-3">
        <h2 className="text-xl font-semibold text-[#25292A] mb-2">1. Use of Service</h2>
        <ul className="list-disc ml-8 space-y-2 text-[#51595A] text-base md:text-xl">
          <li>You must be 18 years or older to use the app.</li>
          <li>
            The content provided (including peptide information, AI suggestions,
            and dosage tracking) is for informational purposes only and is not a
            substitute for professional medical advice.
          </li>
          <li>
            You agree not to misuse the app or attempt to disrupt its
            functionality.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-[#25292A] mb-2">2. User Content</h2>
        <ul className="list-disc ml-8 space-y-2 text-[#51595A] text-base md:text-xl">
          <li>
            Users may post content (such as comments and discussions) under
            their account.
          </li>
          <li>
            You retain rights to your content, but grant us a license to use,
            display, and moderate it within the platform.
          </li>
          <li>
            We may remove or restrict any content that violates community
            standards or legal obligations.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-[#25292A] mb-2">3. AI-Powered Features</h2>
        <ul className="list-disc ml-8 space-y-2 text-[#51595A] text-base md:text-xl">
          <li>
            AI-generated responses are based on user input and available data.
          </li>
          <li>
            We do not guarantee accuracy, completeness, or applicability of AI
            suggestions, particularly regarding dosage plans or health advice.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-[#25292A] mb-2">4. Subscriptions & Payments</h2>
        <ul className="list-disc ml-8 space-y-2 text-[#51595A] text-base md:text-xl">
          <li>
            Some features may require a paid subscription. Terms will be clearly
            displayed prior to purchase.
          </li>
          <li>
            Subscriptions renew automatically unless canceled before the renewal
            period.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-[#25292A] mb-2">5. Limitation of Liability</h2>
        <ul className="list-disc ml-8 space-y-2 text-[#51595A] text-base md:text-xl">
          <li>
            We are not liable for any decisions made based on app content, AI
            output, or user discussions.
          </li>
          <li>
            Always consult with a licensed medical professional before acting on
            any advice or recommendations in the app.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-[#25292A] mb-2">6. Account Termination</h2>
        <ul className="list-disc ml-8 space-y-2 text-[#51595A] text-base md:text-xl">
          <li>
            We reserve the right to suspend or terminate user accounts that
            violate these terms or abuse the platform.
          </li>
        </ul>
      </div>
    </LegalLayout>
  );
}
