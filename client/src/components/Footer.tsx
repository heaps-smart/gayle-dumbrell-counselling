import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container py-12">
        <div className="mb-8">
          {/* About */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">
              Gayle Dumbrell Counselling
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Gentle, supportive counselling for children and families in Busselton, Western Australia.
            </p>
            <Link href="/privacy-policy">
              <a className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold">
                Privacy Policy
              </a>
            </Link>
            <p className="text-muted-foreground text-sm mt-4">
              © {currentYear} Gayle Dumbrell Counselling. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
