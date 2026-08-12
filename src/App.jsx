import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import { DarkModeProvier } from "./context/DarkModeContext";
import AdminLayout from "./features/admin/AdminLayout";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import OwnerLayout from "./features/owner/OwnerLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Auth from "./pages/Auth";
import CompleteProfile from "./pages/CompleteProfile";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import Users from "./pages/Users";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvier>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route
            path="/owner"
            element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route
            path="/freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="projects" element={<SubmittedProjects />} />
          </Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvier>
  );
}

export default App;
