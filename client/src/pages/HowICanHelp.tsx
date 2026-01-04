import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { getAssetPath } from '@/utils/assets';

export default function HowICanHelp() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-background via-accent/30 to-background overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-foreground leading-tight">
                Supporting children through emotional challenges
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Children don't always have the words to explain what they're feeling. Counselling gives them space to explore emotions in ways that feel natural and safe.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={getAssetPath('/images/kid-hugging-dad.webp')}
                alt="Child hugging parent"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={getAssetPath('/images/help.webp')}
                alt="Helping children"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-foreground mb-6 text-left">I work with children who may be experiencing:</h2>
              <ul className="space-y-4">
                {[
                  'Anxiety or ongoing worries',
                  'Emotional outbursts or withdrawal',
                  'Difficulty adjusting to family changes',
                  'Social challenges or school stress',
                  'Low confidence or self-esteem',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">My approach</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            I use gentle, evidence-based approaches that are tailored to each child's age, personality, and needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Play-based counselling',
                description: 'Play is how children naturally express themselves. Through play, art, stories, and creative activities, children can explore feelings and experiences in a way that feels safe and comfortable.',
              },
              {
                title: 'Solution-focused support',
                description: 'This approach focuses on strengths and what is already working well. Together, we identify small, practical steps that help children and families move forward with confidence.',
              },
              {
                title: 'Emotion regulation skills',
                description: 'Children learn simple strategies to understand and manage big feelings like worry, anger, sadness, or frustration. These skills can make everyday life at home and school feel calmer and more manageable.',
              },
              {
                title: 'Parent and family sessions',
                description: 'Parents and caregivers are an important part of the process. These sessions provide space to talk through concerns, explore helpful strategies, and better understand a child\'s emotional needs.',
              },
            ].map((approach, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-secondary font-display text-xl mb-4">{approach.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Counselling Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">How counselling works</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                number: '1',
                title: 'Initial call',
                description: 'A free, short call to talk through your concerns, ask questions, and decide whether counselling feels right for your family.',
              },
              {
                number: '2',
                title: 'First sessions',
                description: 'The focus is on helping your child feel comfortable and safe. There is no pressure to talk before they are ready.',
              },
              {
                number: '3',
                title: 'Ongoing support',
                description: 'Sessions are guided by your child\'s needs and may include conversation, play, creative activities, and practical strategies to support emotional wellbeing.',
              },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-foreground font-display text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working with Families */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-foreground mb-6">Working with families</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Parents and caregivers are an important part of the process. Where appropriate, I work collaboratively with families to help support positive change at home and school.
            </p>
            <Link href="/appointments-faqs#contact">
              <a>
                <Button size="lg" className="bg-[#7A8C7E] hover:bg-[#6B7D6F] text-primary-foreground">
                  Book a free call
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
