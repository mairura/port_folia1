import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "work" },
    { name: "Projects", id: "projects" },
    { name: "Culture", id: "culture" },
  ];

  return (
    <nav className="text-white px-8 py-4 w-full fixed top-0 bg-black z-50">
      <div className="flex items-center md:justify- justify-between">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-xl font-bold cursor-pointer"
        >
          <span className="text-3xl">M</span>airura.
        </ScrollLink>

        {/* Mobile menu toggle button */}
        <button className="md:hidden text-2xl z-50" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              className="hover:text-yellow-400 cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden fixed top-0 left-0 w-full h-screen bg-black
          transition-transform transform duration-300 ease-in-out origin-top
          ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}
        `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 text-xl">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="hover:text-yellow-400 cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
