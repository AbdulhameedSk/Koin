import { useState } from 'react';
import logo from "../assets/logo.svg";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

// Navigation item component for desktop view
function NavItem({ href, children }: NavItemProps) {
  return (
    <a
      href={href}
      className="text-lg font-semibold text-[#0F1629] hover:text-[#2870EA]"
    >
      {children}
    </a>
  );
}

// Navigation item component for mobile view
function NavItemMobile({ href, children }: NavItemProps) {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-[#0F1629] hover:text-[#2870EA] hover:bg-gray-50"
    >
      {children}
    </a>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 shadow-md bg-[#FFFFFF] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div>
            <img src={logo} alt="Logo" className="w-24 h-6"></img>
          </div>
          <div className="hidden sm:flex items-center space-x-6">
            <NavItem href="#">Crypto Taxes</NavItem>
            <NavItem href="#">Free Tools</NavItem>
            <NavItem href="#">Resource Center</NavItem>
            <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-8 py-2 text-white rounded-lg">
              Get Started
            </button>
          </div>
          <div className="sm:hidden">
            {/* Hamburger menu button for small screens */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. Heroicon name: outline/menu */}
              <svg
                className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. Heroicon name: outline/x */}
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, toggle className based on menu state. */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavItemMobile href="#">Crypto Taxes</NavItemMobile>
          <NavItemMobile href="#">Free Tools</NavItemMobile>
          <NavItemMobile href="#">Resource Center</NavItemMobile>
          <button className="block w-full text-left px-4 py-2 text-sm text-white bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
