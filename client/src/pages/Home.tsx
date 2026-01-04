import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { getAssetPath } from '@/utils/assets';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <video
          src={getAssetPath('/video/hero-video-2.mp4')}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-background/60" />
        {/* Content */}
        <div className="relative z-10 container flex items-center h-full px-4 md:px-8">
          <div className="max-w-3xl space-y-6 bg-background/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl -mt-16 md:-mt-20">
            <h1 className="text-foreground leading-tight">
              Gentle counselling support for children, families, and teachers
            </h1>
            <p className="text-lg text-foreground leading-relaxed">
              Helping children understand their feelings, build resilience, and feel more confident during life's challenges.
            </p>
            <p className="text-base text-foreground/90 italic">
              Book a short, no-pressure conversation to see if counselling is the right fit for your child.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/appointments-faqs#contact">
                <a>
                  <Button size="lg" className="bg-[#7A8C7E] hover:bg-[#6B7D6F] text-primary-foreground w-full sm:w-auto">
                    Book a free call
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={getAssetPath('/images/gayle-dumbrell.webp')}
                alt="Gayle Dumbrell"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-foreground mb-6">Hi there.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Every child experiences moments when emotions feel big, confusing, or overwhelming. Sometimes they need a little extra support to make sense of what's happening inside and around them.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I offer a calm, supportive space where children feel safe to express themselves and be understood.
              </p>
            </div>
          </div>
          <div className="flex justify-center pt-8">
            <Link href="/about-me">
              <a>
                <Button size="lg" className="bg-[#7A8C7E] hover:bg-[#6B7D6F] text-primary-foreground">
                  Learn more about me
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* How I Can Help Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-foreground mb-12">How I can help</h2>
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
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={getAssetPath('/images/children-painting.webp')}
                alt="Children painting"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
          <div className="flex justify-center pt-8">
            <Link href="/how-i-can-help">
              <a>
                <Button size="lg" className="bg-[#7A8C7E] hover:bg-[#6B7D6F] text-primary-foreground">
                  Learn more about my approach
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
                  <Button size="lg" className="bg-[#7A8C7E] hover:bg-[#6B7D6F] text-primary-foreground">
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
