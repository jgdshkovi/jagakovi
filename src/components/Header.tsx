
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="font-heading text-lg font-bold">
          <a href="#hero" className="text-accent hover:text-accent/90">
            <span className="relative pr-1">D</span>ev
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
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
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
