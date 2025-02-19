import React from "react";
import Logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

const NavLinks = [
  {
    id: 1,
    name: "Inicio",
    link: "#",
  },
  {
    id: 2,
    name: "Productos",
    link: "#",
  },
  {
    id: 3,
    name: "Precios",
    link: "#",
  },
  {
    id: 4,
    name: "Contacto",
    link: "#contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  
  // Toggle the menu open/close
  const toggleMenu = () => setShowMenu(!showMenu);

  // Close the menu when a link is clicked
  const closeMenu = () => setShowMenu(false);

  return (
    <div className="relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="h-16" />
            <p translate="no" className="text-3xl font-bold">
              Keku <span className="font-normal"> Enterprise</span>
            </p>
          </div>

          {/* Desktop Menu section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => {
                return (
                  <li key={id} className="py-4">
                    <a
                      href={link}
                      className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
              {/* Darkmode feature */}
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile View Sidebar */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}  // Alterna el menú
                  className="cursor-pointer"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}  // Alterna el menú
                  className="cursor-pointer"
                  size={30}
                />
              )}
            </div>

            {/* Mostrar el menú cuando showMenu es true */}
            {showMenu && (
              <div
                className="absolute top-0 right-0 w-full h-screen bg-black bg-opacity-50 z-40"
                onClick={closeMenu}  // Cierra el menú cuando se hace clic en el fondo
              >
                <nav
                  className="absolute top-0 right-0 w-3/4 sm:w-2/3 lg:w-1/2 bg-white dark:bg-black text-black dark:text-white z-50 h-full p-6 transition-transform transform"
                  style={{
                    transform: showMenu ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onClick={(e) => e.stopPropagation()}  // Evita que el clic en el menú cierre el menú
                >
                  <ul className="flex flex-col items-center gap-4 py-4">
                    {NavLinks.map(({ id, name, link }) => (
                      <li key={id}>
                        <a
                          href={link}
                          className="text-xl font-semibold hover:text-primary py-2 transition-colors duration-500"
                          onClick={closeMenu}  // Cierra el menú al hacer clic en una opción
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
