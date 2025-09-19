import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/resume", label: "Resume" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <NavLink to="/" className="text-4xl font-bold italic text-blue-600" style={{ fontFamily: "var(--font-merriweather)" }}>Ranjitha</NavLink>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center text-2xl">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className="relative px-1 py-2 inline-block"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`transition-colors duration-200 ${
                      isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* animated underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] bg-blue-600 rounded transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu (slide down) */}
      {open && (
        <div className="md:hidden bg-white/95 px-6 py-4 space-y-4 shadow-inner">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
              className="relative block py-2"
            >
              {({ isActive }) => (
                <>
                  <span className={`text-lg ${isActive ? "text-blue-600 font-semibold" : "text-gray-700"}`}>
                    {link.label}
                  </span>

                  {/* mobile underline */}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[3px] bg-blue-600 rounded transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
