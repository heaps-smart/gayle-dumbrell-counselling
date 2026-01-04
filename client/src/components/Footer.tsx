import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container py-12">
        <div className="mb-8">
          {/* About */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-4">
              Gayle Dumbrell Counselling
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Gentle, supportive counselling for children and families in Busselton, Western Australia.
            </p>
            <Link href="/privacy-policy">
              <a className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Gayle Dumbrell Counselling. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
