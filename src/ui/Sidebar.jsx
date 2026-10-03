import { HiOutlineX } from "react-icons/hi";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

function Sidebar({ children, isOpen, onClose }) {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const location = useLocation();
  const prevPathnameRef = useRef(location.pathname);

  useEffect(() => {
    if (prevPathnameRef.current !== location.pathname) {
      prevPathnameRef.current = location.pathname;
      if (isMobile && isOpen) {
        onClose();
      }
    }
  }, [location.pathname, isMobile, isOpen, onClose]);

  if (isMobile) {
    return (
      <>
        <div
          className={`fixed inset-0 z-40 bg-secondary-900/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={onClose}
        />
        <aside
          className={`fixed top-0 right-0 z-50 h-full w-64 max-w-[80vw] bg-secondary-0 border-l border-secondary-200 shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-secondary-200">
            <span className="font-bold text-secondary-900">منو</span>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-secondary-100 transition-colors"
              aria-label="بستن منو"
            >
              <HiOutlineX className="w-5 h-5 text-secondary-700" />
            </button>
          </div>
          <nav className="p-4">
            <ul className="flex flex-col gap-y-2">{children}</ul>
          </nav>
        </aside>
      </>
    );
  }

  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-secondary-200 p-4">
      <ul className="flex flex-col gap-y-4">{children}</ul>
    </div>
  );
}

export default Sidebar;