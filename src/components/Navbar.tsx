import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Flower, Star, Calendar, Phone, ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  const menuItems = [
    { icon: <Home className="w-6 h-6" />, label: "Home", href: "#home" },
    { icon: <Flower className="w-6 h-6" />, label: "Services", href: "#services" },
    { icon: <Star className="w-6 h-6" />, label: "About us", href: "#about" },
    { icon: <Calendar className="w-6 h-6" />, label: "Book now", href: "#booking" },
    { icon: <Phone className="w-6 h-6" />, label: "Get in Touch", href: "#contact" },
    { icon: <ShoppingBag className="w-6 h-6" />, label: "Store", path: "/shop" }, // external page
  ];

  // Detect section in viewport (only for same-page links)
  useEffect(() => {
    const handleScroll = () => {
      menuItems.forEach((item, i) => {
        if (!item.href) return; // skip external pages
        const section = document.querySelector(item.href) as HTMLElement;
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActive(i);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  return (
    <div className="fixed top-1 left-0 w-full bg-transparent z-50">
      <nav className="relative h-20 flex items-center justify-between pl-3 pr-10">
        {/* Logo on left */}
        <div className="flex items-center cursor-pointer">
          <img
            src="../src/assets/logo.png"
            alt="Logo"
            className="w-12 h-12 object-contain border-2 border-rose-400 rounded-full border-opacity-70"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex w-[480px] justify-between relative">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className={`relative w-20 h-20 flex flex-col items-center justify-center ${
                active === i ? "text-rose-500" : "text-rose-700"
              }`}
            >
              {item.path ? (
                <Link to={item.path} className="flex flex-col items-center justify-center w-full h-full">
                  <span className={`transition-transform duration-500 ${active === i ? "-translate-y-3 z-20 text-white" : "translate-y-0"}`}>
                    {item.icon}
                  </span>
                  <span className={`absolute text-xs transition-all duration-500 ${active === i ? "translate-y-6 opacity-100 text-rose-600" : "translate-y-10 opacity-0"}`}>
                    {item.label}
                  </span>
                </Link>
              ) : (
                <a href={item.href} onClick={() => setActive(i)} className="flex flex-col items-center justify-center w-full h-full">
                  <span className={`transition-transform duration-500 ${active === i ? "-translate-y-3 z-20 text-white" : "translate-y-0"}`}>
                    {item.icon}
                  </span>
                  <span className={`absolute text-xs transition-all duration-500 ${active === i ? "translate-y-6 opacity-100 text-rose-600" : "translate-y-10 opacity-0"}`}>
                    {item.label}
                  </span>
                </a>
              )}
            </li>
          ))}

          {/* Magic Indicator */}
          <div
            className="absolute top-[1px] left-[12px] w-14 h-14 bg-rose-400 rounded-full transition-transform duration-500"
            style={{ transform: `translateX(${active * 80}px)` }}
          ></div>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-rose-500" /> : <Menu className="w-6 h-6 text-rose-500" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white dark:bg-black shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
            {menuItems.map((item, i) => (
              item.path ? (
                <Link key={i} to={item.path} className="text-rose-700 text-lg" onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <a key={i} href={item.href} className="text-rose-700 text-lg" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              )
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
