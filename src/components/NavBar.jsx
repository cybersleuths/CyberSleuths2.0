import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { RiTeamLine, RiBook2Line } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);
  const navscrolled = "fixed top-0 left-0 w-full duration-1000 bg-gradient-to-t from-red-700 to-red-900 shadow-lg shadow-black-700/50 z-50";
  const navtop = "fixed top-0 left-0 w-full duration-1000 bg-transparent shadow-none z-50";

  return (
    <div>
      <nav className={navbar ? navscrolled : navtop}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="/img/logo.png"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="/img/logo.png"
                  alt="Workflow"
                />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-auto">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="flex rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-600"
                >
                  <AiOutlineHome className="mx-1 text-lg" /> Home
                </Link>
                <Link
                  to="/events"
                  className="flex rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-600"
                >
                  <BsCalendarEvent className="mx-1 text-lg" /> Events
                </Link>
                <Link
                  to="/teams"
                  className="flex rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-600"
                >
                  <RiTeamLine className="mx-1 text-lg" /> Teams
                </Link>
                <Link
                  to="/resources"
                  className="flex rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-600"
                >
                  <RiBook2Line className="mx-1 text-lg" /> Resources
                </Link>
                <Link
                  to="/cybersleuthsxisoeh"
                  className="flex rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-600"
                >
                  <FaHandshake className="mx-1 text-lg" /> Cyber Sleuths X ISOEH
                </Link>
                <Link
                  to="/faq"
                  className="flex rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-600"
                >
                  FAQ
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
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

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="sm:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/events"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Events
                </Link>
                <Link
                  to="/teams"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Teams
                </Link>
                <Link
                  to="/resources"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Resources
                </Link>
                <Link
                  to="/cybersleuthsxisoeh"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Cyber Sleuths X ISOEH
                </Link>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  FAQ
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}