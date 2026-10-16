import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 bg-primary-900/10">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;


