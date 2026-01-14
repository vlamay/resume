import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" }, // Added for completeness based on portfolio standards
  { name: "Contact", to: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
          <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg group-hover:shadow-lg group-hover:shadow-primary/25 transition-all">
            <Terminal className="text-white w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            VM<span className="text-primary">.dev</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all cursor-pointer"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-lg font-medium text-foreground/80 hover:text-primary py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
