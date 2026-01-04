import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-4">
              Gayle Dumbrell Counselling
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Gentle, supportive counselling for children and families in Busselton, Western Australia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/how-i-can-help">
                  <a className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    How I can help
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/appointments-faqs">
                  <a className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Appointments & FAQs
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about-me">
                  <a className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    About me
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <p className="text-muted-foreground text-sm mb-2">
              Based in Busselton, WA
            </p>
            <p className="text-muted-foreground text-sm">
              Offering face-to-face and online counselling
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Gayle Dumbrell Counselling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
