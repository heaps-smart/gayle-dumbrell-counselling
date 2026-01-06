import { getAssetPath } from '@/utils/assets';

export default function AppointmentsAndFAQs() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-background via-accent/30 to-background overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                {/* Appointments Column */}
                <div>
                  <h2 className="text-foreground mb-6">Appointments</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-lg text-foreground">Sessions are available by appointment</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-lg text-foreground">The initial call is free and obligation-free</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-lg text-foreground">Session frequency will be discussed based on individual needs</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Appointments are designed to be flexible and supportive, where wellbeing is the priority.
                  </p>
                </div>

                {/* Fees Column */}
                <div>
                  <h2 className="text-foreground mb-6">Fees</h2>
                  <div>
                    <p className="text-xl text-foreground mb-4">
                      <span className="font-bold">$120</span> per hourly counselling session
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Please get in touch if you have questions about session length, availability, or pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Video */}
            <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg">
              <video
                src={getAssetPath('/video/hero-video-3.mp4')}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-foreground mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl space-y-8">
            {[
              {
                question: 'Is counselling right for my child?',
                answer: 'If your child is experiencing emotional, behavioural, or social challenges, counselling may be helpful. The initial call is a good place to explore this.',
              },
              {
                question: 'Do parents attend sessions?',
                answer: 'This depends on the child\'s age and needs. Parent involvement is discussed together.',
              },
              {
                question: 'How long does counselling last?',
                answer: 'Some children benefit from short-term support, while others may attend for longer. Progress is reviewed regularly.',
              },
              {
                question: 'Is counselling confidential?',
                answer: 'Yes. Confidentiality is explained clearly, with child safety always prioritised.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-border pb-8 last:border-b-0">
                <h3 className="text-foreground font-display text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-foreground mb-2 text-center">Get in touch</h2>
            <p className="text-muted-foreground text-center mb-12">
              Send me an email and I'll be in touch to arrange a short phone call. We can talk about your needs and see whether counselling feels like the right fit for your family.
            </p>

            <div className="flex justify-center">
              <a
                href="mailto:gdcounselling@outlook.com"
                className="text-[#7A8C7E] hover:text-[#6B7D6F] transition-colors text-lg font-medium"
              >
                gdcounselling@outlook.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
