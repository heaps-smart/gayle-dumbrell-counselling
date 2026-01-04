import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { toast } from 'sonner';

export default function AppointmentsAndFAQs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    therapyFor: 'child',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Since this is a static site, we'll just show a success message
      // In a real scenario, you'd send this to a backend or email service
      toast.success('Thank you for reaching out! I\'ll be in touch soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        therapyFor: 'child',
        message: '',
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-accent/30 to-background">
        <div className="container">
          <h1 className="text-foreground">Appointments & FAQs</h1>
        </div>
      </section>

      {/* Appointments Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-foreground mb-8">Appointments</h2>
          <div className="max-w-3xl space-y-4 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <p className="text-lg text-foreground">Sessions are available by appointment</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <p className="text-lg text-foreground">The initial call is free and obligation-free</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <p className="text-lg text-foreground">Session frequency is discussed based on your child's needs</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Appointments are designed to be flexible and supportive, with your child's wellbeing always the priority.
          </p>
        </div>
      </section>

      {/* Fees Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-foreground mb-8">Fees</h2>
          <div className="max-w-3xl">
            <p className="text-xl text-foreground mb-4">
              <span className="font-bold">$120</span> per hourly counselling session
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Please get in touch if you have questions about session length, availability, or pricing.
            </p>
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
              Book a free call to discuss your child's needs and see if counselling is the right fit for your family.
            </p>

            <form onSubmit={handleSubmit} className="bg-background rounded-xl p-8 border border-border shadow-sm space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Your name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Your phone number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Your email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Therapy For */}
              <div className="space-y-3">
                <Label className="text-foreground font-medium">Who is the therapy for?</Label>
                <RadioGroup value={formData.therapyFor} onValueChange={(value) => setFormData({ ...formData, therapyFor: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="child" id="child" />
                    <Label htmlFor="child" className="text-foreground font-normal cursor-pointer">
                      My child
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="myself" id="myself" />
                    <Label htmlFor="myself" className="text-foreground font-normal cursor-pointer">
                      Myself
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">
                  Anything I should know?
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me a bit about what you're looking for..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground min-h-32 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>

            <p className="text-center text-muted-foreground text-sm mt-6">
              I'll get back to you as soon as possible to arrange a time that works for you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
