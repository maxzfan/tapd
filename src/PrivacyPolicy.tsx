import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#4A5568] font-[Poppins,system-ui,sans-serif]">
      {/* Navigation Bar */}
      <nav className="bg-[#E8DFD3] px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#5C2E2E] rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-2xl">T</span>
          </div>
          <div className="text-[#5C2E2E] font-black text-xl uppercase tracking-tight">
            TAPD OUT
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link to="/#features" className="text-[#5C2E2E] font-semibold hover:text-orange-600 transition-colors">
            Features
          </Link>
          <Link to="/#about" className="text-[#5C2E2E] font-semibold hover:text-orange-600 transition-colors">
            About Us
          </Link>
          <Link to="/privacy" className="text-[#5C2E2E] font-semibold hover:text-orange-600 transition-colors">
            Privacy Policy
          </Link>
          <button className="px-6 py-2 border-2 border-[#5C2E2E] text-[#5C2E2E] font-bold rounded-lg hover:bg-[#5C2E2E] hover:text-white transition-colors">
            Log in
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="bg-white rounded-2xl p-12 shadow-2xl">
          <h1 className="text-5xl font-black text-[#FF5722] mb-8">Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              This privacy policy applies to the messaging app ("tapd") developed by Kanchana listed under tapd's Google Play listing, with contact available at{" "}
              <a href="mailto:stanfordtapd@gmail.com" className="text-[#FF5722] hover:underline">
                stanfordtapd@gmail.com
              </a>
              . The privacy policy is linked on tapd's store listing page in the Google Play Console and is accessible within tapd itself. This document is labeled as a privacy policy and aims to disclose all necessary details regarding how tapd accesses, collects, uses, and shares user data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              tapd collects the following personal and sensitive user data, stored securely within the Google Firebase Database:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>User Email:</strong> The email address used to sign in to tapd.</li>
              <li><strong>Unique ID:</strong> A unique identifier assigned to users by Google Firebase.</li>
              <li><strong>User Name:</strong> The name provided by the user upon registration.</li>
              <li><strong>Messages:</strong> The text messages sent and received within tapd.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              tapd does not collect any additional personal or sensitive information beyond what is listed above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Data Usage and Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              tapd uses the collected data for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Facilitating messaging between users.</li>
              <li>Storing messages and user information within Google Firebase to provide the core functionalities of tapd.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              No personal or sensitive user data is shared with third parties except in cases where it is necessary for the functioning of tapd (e.g., for Firebase database operations). tapd ensures that data shared with third parties is handled in accordance with secure data-handling procedures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Data Retention and Deletion Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              User data is retained for as long as the user remains active in tapd. Upon request, users can contact us at{" "}
              <a href="mailto:stanfordtapd@gmail.com" className="text-[#FF5722] hover:underline">
                stanfordtapd@gmail.com
              </a>{" "}
              to delete their data. Data will be permanently deleted from the Firebase database upon such a request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              tapd follows strict procedures to ensure that personal and sensitive user data is handled securely. Data is encrypted and stored in Google Firebase, which complies with industry-standard security measures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">User Rights and Controls</h2>
            <p className="text-gray-700 leading-relaxed">
              Users have the right to request access to their data, make corrections, or request the deletion of their data. For any inquiries or concerns related to privacy, users may contact us via{" "}
              <a href="mailto:stanfordtapd@gmail.com" className="text-[#FF5722] hover:underline">
                stanfordtapd@gmail.com
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Accessibility</h2>
            <p className="text-gray-700 leading-relaxed">
              This privacy policy is available at an active, publicly accessible link at:{" "}
              <a href="https://ediflylearn.wixsite.com/edifly" target="_blank" rel="noopener noreferrer" className="text-[#FF5722] hover:underline">
                https://ediflylearn.wixsite.com/edifly
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Compliance with Google Play Requirements</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This privacy policy complies with Google Play's requirements, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Being linked on tapd's store listing page in Play Console.</li>
              <li>Being accessible within tapd.</li>
              <li>Fully disclosing how tapd accesses, collects, uses, and shares user data.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For any privacy-related questions, concerns, or inquiries, please contact us at{" "}
              <a href="mailto:stanfordtapd@gmail.com" className="text-[#FF5722] hover:underline">
                stanfordtapd@gmail.com
              </a>
              .
            </p>
          </section>

          <hr className="my-12 border-t-2 border-gray-300" />

          <h1 className="text-5xl font-black text-[#FF5722] mb-8 mt-12">Terms and Conditions</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions govern the use of the messaging app ("tapd"). By accessing or using tapd, you agree to comply with and be bound by these Terms and Conditions. tapd is provided by the entity listed under tapd's Google Play listing, and the contact email for inquiries is{" "}
              <a href="mailto:stanfordtapd@gmail.com" className="text-[#FF5722] hover:underline">
                stanfordtapd@gmail.com
              </a>
              . These Terms and Conditions are linked on tapd's store listing page in Play Console and are also accessible within tapd.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Educational and Research Use</h2>
            <p className="text-gray-700 leading-relaxed">
              tapd must be used in support of educational and research activities consistent with school policies and curriculum standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Appropriate Language and Content</h2>
            <p className="text-gray-700 leading-relaxed">
              Users must use appropriate language in all transmissions. Submitting, publishing, or displaying material that is abusive, offensive, inflammatory, inaccurate, sexually-oriented, threatening, or illegal is prohibited. False statements about any person on the internet could constitute libel.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Copyright Adherence</h2>
            <p className="text-gray-700 leading-relaxed">
              All copyright laws must be followed at all times. No commercial/shareware/freeware software of any kind shall be sent or downloaded from tapd unless first approved by the relevant authority or school.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Messaging and Posts</h2>
            <p className="text-gray-700 leading-relaxed">
              Messaging or posts within tapd cannot be used for private or commercial offerings of products or services for sale or to solicit products or services. tapd may not be used for political or religious purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Network Storage</h2>
            <p className="text-gray-700 leading-relaxed">
              Network storage areas associated with tapd may be treated like school lockers. Network administrators have the right to review files and communications to maintain system integrity and ensure responsible use. Users should not expect that files stored on district computers or within tapd's system will remain private.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">User Authentication</h2>
            <p className="text-gray-700 leading-relaxed">
              All students or users must sign in with their school-provided Google accounts or an account approved by the entity managing tapd. Login credentials (username and password) must not be shared with anyone.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Violations and Disciplinary Action</h2>
            <p className="text-gray-700 leading-relaxed">
              Any student or user found in violation of these rules shall be removed from tapd, and further actions will be determined by the school administration or tapd's governing body. Additional disciplinary actions may be taken as outlined by the school or institution's guidelines.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Harassment Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              tapd may not be used for the purpose of harassment. All forms of harassment in cyberspace are unacceptable and a violation of public law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Admin Rights to Content</h2>
            <p className="text-gray-700 leading-relaxed">
              The school or app administrators have the permission to delete any posts or content uploaded by any users (students, faculty, or others) within tapd if they violate these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2D1B1B] mb-4">Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              tapd has a separate Privacy Policy that outlines how user data is collected, used, and shared. Users must agree to both the Terms and Conditions and the Privacy Policy to use tapd. The Privacy Policy is available on tapd's store listing page and within tapd itself.
            </p>
          </section>

          {/* Back button */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-block px-8 py-4 bg-[#FF5722] text-white rounded-lg font-bold hover:bg-[#E64A19] transition-colors shadow-lg"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

