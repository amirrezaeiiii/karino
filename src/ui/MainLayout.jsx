import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
