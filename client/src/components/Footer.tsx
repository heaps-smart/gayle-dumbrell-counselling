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
            <a 
              href="mailto:gdcounselling@outlook.com" 
              className="text-foreground text-base font-medium leading-relaxed hover:text-primary transition-colors block mt-2"
            >
              gdcounselling@outlook.com
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Busselton, Western Australia
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              ABN 95596977240
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4">
            <Link href="/privacy-policy">
              <a className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold">
                Privacy Policy
              </a>
            </Link>
            <p className="text-muted-foreground text-sm mt-4 md:mt-0 md:text-right">
              © {currentYear} Gayle Dumbrell Counselling. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
