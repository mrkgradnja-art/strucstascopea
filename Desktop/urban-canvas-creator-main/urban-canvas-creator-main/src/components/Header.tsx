import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/", isHash: false },
    { name: "Projects", href: "/projects", isHash: false },
    { name: "Our Approach", href: "/approach", isHash: false },
    { name: "Contact", href: "/contact", isHash: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center">
        <div className="w-full max-w-[1250px] backdrop-blur-md bg-gradient-to-b from-gray-50/95 via-gray-100/90 to-gray-100/85 border-b border-border/50 rounded-[20px]">
          <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="STRUCSTA SCOPE" 
              className="h-12 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.isHash ? false : location.pathname === link.href;
              return link.isHash ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-foreground underline" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-foreground underline" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="hero" 
              size="default" 
              className="gap-2"
              asChild
            >
              <Link to="/contact">
                <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
                Discuss a project
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = link.isHash ? false : location.pathname === link.href;
                  return link.isHash ? (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`text-base font-medium transition-colors duration-200 ${
                        isActive ? "text-foreground underline" : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`text-base font-medium transition-colors duration-200 ${
                        isActive ? "text-foreground underline" : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <Button 
                  variant="hero" 
                  size="default" 
                  className="w-full mt-2 gap-2"
                  asChild
                >
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
                    Discuss a project
                  </Link>
                </Button>
              </nav>
            </div>
          )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
