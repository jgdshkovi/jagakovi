import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-border/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 flex justify-between items-center">
        <div className="font-heading text-lg font-bold">
          <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} className="text-accent hover:text-accent/90">
            <span className="relative pr-1 text-trendy-secondary">Jaga</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["About", "Skills", "Experience", "Projects"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div>
          <Button
            variant="outline"
            size="sm"
            className="hover:text-accent hover:border-accent transition-colors"
            asChild
          >
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Let's Talk</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

