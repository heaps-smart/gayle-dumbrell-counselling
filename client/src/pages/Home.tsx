import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-accent/30 to-background overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-foreground leading-tight">
                Gentle counselling support for children and families
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Helping children understand their feelings, build resilience, and feel more confident during life's challenges.
              </p>
              <p className="text-base text-muted-foreground italic">
                Book a short, no-pressure conversation to see if counselling is the right fit for your child.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/appointments-faqs#contact">
                  <a>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                      Book a free call
                    </Button>
                  </a>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/kid-hugging-dad.jpg"
                alt="Child hugging parent"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-foreground mb-6">Hi there.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Every child experiences moments when emotions feel big, confusing, or overwhelming. Sometimes they need a little extra support to make sense of what's happening inside and around them.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I offer a calm, supportive space where children feel safe to express themselves and be understood.
            </p>
          </div>
          <div className="flex justify-center pt-8">
            <Link href="/about-me">
              <a>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Learn more about me
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* How I Can Help Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">How I can help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-secondary font-display text-2xl">I support children and families with:</h3>
              <ul className="space-y-3">
                {[
                  'Anxiety, worries, and fears',
                  'Big emotions and emotional regulation',
                  'Changes at home, separation, or loss',
                  'School or friendship challenges',
                  'Confidence and self-esteem',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/children-painting.jpg"
                alt="Children painting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
          <div className="flex justify-center pt-8">
            <Link href="/how-i-can-help">
              <a>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Learn more about my approach
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-foreground mb-8 text-center">What to expect</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
              Counselling is gentle, age-appropriate, and tailored to each child. Sessions may include talking, play-based activities, creative expression, and practical tools to help children manage emotions in everyday life.
            </p>
            <div className="flex justify-center">
              <Link href="/appointments-faqs">
                <a>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    Learn more about appointments
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
