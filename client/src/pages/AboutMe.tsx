import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function AboutMe() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-accent/30 to-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-foreground mb-6">Hi, I'm Gayle</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a qualified counsellor with a Master's degree in Counselling, a registered member of the Australian Counselling Association, and I hold a current Working With Children authorisation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I bring over 35 years of experience in education as a teacher, along with recent experience working as a counsellor in a primary school setting. This background has given me a deep understanding of children's emotional development, learning environments, and the challenges families and schools face every day.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👋</div>
                  <p className="text-muted-foreground">Gayle Dumbrell</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-foreground mb-8">My approach</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My counselling style is warm, empathetic, and practical. I focus on creating a calm, supportive space where children feel safe, understood, and accepted.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I support children, adolescents, and families as they navigate emotional challenges, life changes, and periods of uncertainty, helping them build confidence, resilience, and emotional wellbeing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I also have a strong understanding of the pressures faced by teachers and school staff, and I offer a supportive space for them to explore their own wellbeing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-foreground mb-12 text-center">Qualifications & Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-background rounded-xl p-8 border border-border">
                <h3 className="text-secondary font-display text-xl mb-3">Master's Degree in Counselling</h3>
                <p className="text-muted-foreground">Advanced training in therapeutic approaches and evidence-based counselling practices</p>
              </div>
              <div className="bg-background rounded-xl p-8 border border-border">
                <h3 className="text-secondary font-display text-xl mb-3">Registered Member of the Australian Counselling Association</h3>
                <p className="text-muted-foreground">Committed to professional standards, ethics, and ongoing professional development</p>
              </div>
              <div className="bg-background rounded-xl p-8 border border-border">
                <h3 className="text-secondary font-display text-xl mb-3">Working With Children Authorisation</h3>
                <p className="text-muted-foreground">Current clearance ensuring safe, professional practice with children and families</p>
              </div>
              <div className="bg-background rounded-xl p-8 border border-border">
                <h3 className="text-secondary font-display text-xl mb-3">35+ Years in Education</h3>
                <p className="text-muted-foreground">Extensive experience as a teacher, providing deep understanding of child development and learning environments</p>
              </div>
              <div className="bg-background rounded-xl p-8 border border-border">
                <h3 className="text-secondary font-display text-xl mb-3">School Counselling Experience</h3>
                <p className="text-muted-foreground">Recent experience working as a counsellor in a primary school setting, understanding the unique challenges families and schools face</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working with Me */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-foreground mb-8">Working with me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Based in Busselton, I offer both face-to-face and online counselling for clients in the local area and surrounding districts.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              My work is guided by empathy, respect, and genuine care, always moving at a pace that feels right for each individual.
            </p>
            <Link href="/appointments-faqs#contact">
              <a>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
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
