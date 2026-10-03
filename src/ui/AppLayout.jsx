import { useState, cloneElement } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebar = cloneElement(children, {
    isOpen: isSidebarOpen,
    onClose: () => setIsSidebarOpen(false),
  });

  return (
    <div className="grid h-screen grid-rows-[auto_1fr] max-lg:grid-cols-1 lg:grid-cols-[15rem_1fr]">
      <Header onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
      {sidebar}
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-5xl flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AppLayout;