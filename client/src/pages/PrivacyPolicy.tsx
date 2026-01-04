export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-foreground mb-8">Privacy Policy</h1>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <p className="text-sm text-muted-foreground/80 mb-2">Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>

              <div>
                <h2 className="text-foreground text-2xl mb-4">Introduction</h2>
                <p>
                  Gayle Dumbrell Counselling is committed to protecting your privacy and the privacy of your children. 
                  This privacy policy explains how we collect, use, and protect your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-foreground text-2xl mb-4">Information We Collect</h2>
                <p>
                  When you contact us or book an appointment, we may collect:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Your name and contact details (phone number, email address)</li>
                  <li>Information about your child and the reason for seeking counselling</li>
                  <li>Any other information you choose to provide during our initial consultation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-foreground text-2xl mb-4">How We Use Your Information</h2>
                <p>
                  We use the information you provide to:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Respond to your enquiries and arrange appointments</li>
                  <li>Provide counselling services to you and your child</li>
                  <li>Maintain appropriate records as required by professional standards</li>
                  <li>Communicate with you about appointments and services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-foreground text-2xl mb-4">Confidentiality</h2>
                <p>
                  All information shared during counselling sessions is treated with the strictest confidence. 
                  As a registered member of the Australian Counselling Association, I am bound by professional 
                  ethical guidelines regarding confidentiality. Information will only be shared with your consent, 
                  or in circumstances required by law (such as concerns about safety).
                </p>
              </div>

              <div>
                <h2 className="text-foreground text-2xl mb-4">Data Security</h2>
                <p>
                  We take reasonable steps to protect your personal information from unauthorised access, 
                  loss, or misuse. This includes secure storage of records and appropriate security measures 
                  for any digital information.
                </p>
              </div>

              <div>
                <h2 className="text-foreground text-2xl mb-4">Your Rights</h2>
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request corrections to your information</li>
                  <li>Request that we delete your information (subject to legal and professional obligations)</li>
                  <li>Withdraw consent for the use of your information (where applicable)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-foreground text-2xl mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or wish to exercise your rights, 
                  please contact us through the contact form on this website or by phone.
                </p>
              </div>

              <div>
                <h2 className="text-foreground text-2xl mb-4">Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. The most current version will 
                  always be available on this website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

