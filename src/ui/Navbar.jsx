import { useState } from "react";
import { HiOutlineLogin, HiOutlineX } from "react-icons/hi";
import {
  HiOutlineBars3,
  HiOutlineInformationCircle,
  HiOutlinePhone,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { label: "درباره ما", to: "/about", icon: HiOutlineInformationCircle },
  { label: "تماس با ما", to: "/contact", icon: HiOutlinePhone },
  { label: "ورود به داشبورد", to: "/auth", icon: HiOutlineLogin },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary-0 border-b border-secondary-200 sticky top-0 z-30">
      <div className="container xl:max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="hidden md:flex items-center gap-x-6 text-sm font-medium">
          <span className="font-bold text-secondary-900">کارینو</span>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="flex items-center gap-2 text-secondary-700 hover:text-primary-900 transition-colors"
            >
              <link.icon className="w-5 h-5" />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors"
          aria-label="باز کردن منو"
        >
          <HiOutlineBars3 className="w-6 h-6 text-secondary-900" />
        </button>

        <div className="flex items-center gap-x-6 text-sm font-medium">
          <DarkModeToggle />
          <Link
            to="/auth"
            className="text-white transition-colors btn btn--primary"
          >
            ورود | ثبت نام
          </Link>
        </div>
      </div>

      <div className="md:hidden">
        <div
          className={`fixed inset-0 z-40 bg-secondary-900/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />
        <aside
          className={`fixed top-0 right-0 z-50 h-full w-64 max-w-[80vw] bg-secondary-0 border-l border-secondary-200 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-secondary-200 shrink-0">
            <span className="font-bold text-xl text-secondary-900">کارینو</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-secondary-100 transition-colors"
              aria-label="بستن منو"
            >
              <HiOutlineX className="w-5 h-5 text-secondary-700" />
            </button>
          </div>
          <nav className="p-4 overflow-y-auto flex-1 min-h-0">
            <ul className="flex flex-col gap-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-secondary-700 hover:bg-primary-600/30 hover:text-secondary-800 transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </nav>
  );
}

export default Navbar;
