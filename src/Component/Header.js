import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-neutral-700 shadow-xl sm:flex sm:justify-between sm:items-center px-6 z-50 py-6 fixed top-0 left-0 right-0">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Link to="/">
            <h1 className="text-xl font-bold text-white">Movie App</h1>
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            aria-label="Menu"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 12H5v-2h14v2zM19 7H5V5h14v2zM5 17h14v-2H5v2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } px-2 pt-2 pb-4 sm:flex sm:p-0`}
      >
        <Link
          to="/"
          className="block p-3 text-white font-semibold rounded hover:bg-neutral-800"
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="block p-3 text-white font-semibold rounded hover:bg-neutral-800"
        >
          Movies
        </Link>
        <Link
          to="/about"
          className="block p-3 text-white font-semibold rounded hover:bg-neutral-800"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block p-3 text-white font-semibold rounded hover:bg-neutral-800"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
