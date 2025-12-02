import { Link } from "react-router-dom";
import { Mail, Menu } from "lucide-react";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#d94e1f] to-[#f09819] font-[Poppins,sans-serif] text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full px-8 py-6 flex justify-between items-center z-50 bg-gradient-to-b from-[#d94e1f]/80 to-transparent backdrop-blur-[2px]">
        <Link to="/" className="text-2xl font-black tracking-wider cursor-pointer">OG</Link>
        <div className="hidden md:flex gap-12 text-sm font-bold uppercase tracking-widest">
            <Link to="/#home" className="hover:text-orange-200 transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/#about" className="hover:text-orange-200 transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/#download" className="hover:text-orange-200 transition-colors relative group">
                Download
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
             <span className="text-orange-200 relative group cursor-default">
                Privacy
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"></span>
            </span>
        </div>
        <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <Mail size={20} strokeWidth={2} />
            </button>
             <button className="md:hidden p-2">
                <Menu size={24} />
            </button>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-32">
        <div className="bg-black/20 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
          <h1 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">Privacy Policy</h1>

          <div className="space-y-8 text-sm md:text-base font-light opacity-90 leading-relaxed">
              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Introduction</h2>
                <p>
                  This privacy policy applies to the messaging app ("tapd") developed by Kanchana listed under tapd’s Google Play listing, with contact available at{" "}
                  <a href="mailto:stanfordtapd@gmail.com" className="underline hover:text-orange-200">stanfordtapd@gmail.com</a>
                  . The privacy policy is linked on tapd’s store listing page in the Google Play Console and is accessible within tapd itself. This document is labeled as a privacy policy and aims to disclose all necessary details regarding how tapd accesses, collects, uses, and shares user data.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Information We Collect</h2>
                <p className="mb-2">
                  tapd collects the following personal and sensitive user data, stored securely within the Google Firebase Database:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>User Email:</strong> The email address used to sign in to tapd.</li>
                  <li><strong>Unique ID:</strong> A unique identifier assigned to users by Google Firebase.</li>
                  <li><strong>User Name:</strong> The name provided by the user upon registration.</li>
                  <li><strong>Messages:</strong> The text messages sent and received within tapd.</li>
                </ul>
                <p className="mt-2">
                  tapd does not collect any additional personal or sensitive information beyond what is listed above.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Data Usage and Sharing</h2>
                <p className="mb-2">
                  tapd uses the collected data for the following purposes:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Facilitating messaging between users.</li>
                  <li>Storing messages and user information within Google Firebase to provide the core functionalities of tapd.</li>
                </ul>
                <p className="mt-2">
                  No personal or sensitive user data is shared with third parties except in cases where it is necessary for the functioning of tapd (e.g., for Firebase database operations). tapd ensures that data shared with third parties is handled in accordance with secure data-handling procedures.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Data Retention and Deletion Policy</h2>
                <p>
                  User data is retained for as long as the user remains active in tapd. Upon request, users can contact us at{" "}
                  <a href="mailto:stanfordtapd@gmail.com" className="underline hover:text-orange-200">stanfordtapd@gmail.com</a>
                  {" "}to delete their data. Data will be permanently deleted from the Firebase database upon such a request.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Data Security</h2>
                <p>
                  tapd follows strict procedures to ensure that personal and sensitive user data is handled securely. Data is encrypted and stored in Google Firebase, which complies with industry-standard security measures.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">User Rights and Controls</h2>
                <p>
                  Users have the right to request access to their data, make corrections, or request the deletion of their data. For any inquiries or concerns related to privacy, users may contact us via{" "}
                  <a href="mailto:stanfordtapd@gmail.com" className="underline hover:text-orange-200">stanfordtapd@gmail.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Accessibility</h2>
                <p>
                  This privacy policy is available at an active, publicly accessible link at:{" "}
                  <a href="https://ediflylearn.wixsite.com/edifly" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-200">https://ediflylearn.wixsite.com/edifly</a>
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Compliance with Google Play Requirements</h2>
                <p className="mb-2">This privacy policy complies with Google Play’s requirements, including:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Being linked on tapd’s store listing page in Play Console.</li>
                  <li>Being accessible within tapd.</li>
                  <li>Fully disclosing how tapd accesses, collects, uses, and shares user data.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Contact Information</h2>
                <p>
                  For any privacy-related questions, concerns, or inquiries, please contact us at{" "}
                  <a href="mailto:stanfordtapd@gmail.com" className="underline hover:text-orange-200">stanfordtapd@gmail.com</a>.
                </p>
              </section>

               <hr className="border-white/20 my-8" />

              <h1 className="text-3xl md:text-4xl font-black mb-8 tracking-tight opacity-100">Terms and Conditions</h1>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Introduction</h2>
                <p>
                  These Terms and Conditions govern the use of the messaging app ("tapd"). By accessing or using tapd, you agree to comply with and be bound by these Terms and Conditions. tapd is provided by the entity listed under tapd’s Google Play listing, and the contact email for inquiries is{" "}
                  <a href="mailto:stanfordtapd@gmail.com" className="underline hover:text-orange-200">stanfordtapd@gmail.com</a>
                  . These Terms and Conditions are linked on tapd’s store listing page in Play Console and are also accessible within tapd.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Educational and Research Use</h2>
                <p>
                  tapd must be used in support of educational and research activities consistent with school policies and curriculum standards.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Appropriate Language and Content</h2>
                <p>
                  Users must use appropriate language in all transmissions. Submitting, publishing, or displaying material that is abusive, offensive, inflammatory, inaccurate, sexually-oriented, threatening, or illegal is prohibited. False statements about any person on the internet could constitute libel.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Copyright Adherence</h2>
                <p>
                  All copyright laws must be followed at all times. No commercial/shareware/freeware software of any kind shall be sent or downloaded from tapd unless first approved by the relevant authority or school.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Messaging and Posts</h2>
                <p>
                  Messaging or posts within tapd cannot be used for private or commercial offerings of products or services for sale or to solicit products or services. tapd may not be used for political or religious purposes.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Network Storage</h2>
                <p>
                  Network storage areas associated with tapd may be treated like school lockers. Network administrators have the right to review files and communications to maintain system integrity and ensure responsible use. Users should not expect that files stored on district computers or within tapd’s system will remain private.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">User Authentication</h2>
                <p>
                  All students or users must sign in with their school-provided Google accounts or an account approved by the entity managing tapd. Login credentials (username and password) must not be shared with anyone.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold mb-2 opacity-100">Violations and Disciplinary Action</h2>
                <p>
                   Any student or user found in violation of these rules shall be removed from tapd, and further actions will be determined by the school administration or tapd's governing body. Additional disciplinary actions may be taken as outlined by the school or institution's guidelines.
                </p>
              </section>

              <section>
                 <h2 className="text-lg font-bold mb-2 opacity-100">Harassment Policy</h2>
                 <p>
                   tapd may not be used for the purpose of harassment. All forms of harassment in cyberspace are unacceptable and a violation of public law.
                 </p>
              </section>

              <section>
                 <h2 className="text-lg font-bold mb-2 opacity-100">Admin Rights to Content</h2>
                 <p>
                   The school or app administrators have the permission to delete any posts or content uploaded by any users (students, faculty, or others) within tapd if they violate these terms.
                 </p>
              </section>

              <section>
                 <h2 className="text-lg font-bold mb-2 opacity-100">Privacy Policy</h2>
                 <p>
                   tapd has a separate Privacy Policy that outlines how user data is collected, used, and shared. Users must agree to both the Terms and Conditions and the Privacy Policy to use tapd. The Privacy Policy is available on tapd’s store listing page and within tapd itself.
                 </p>
              </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
