import {
  createFileRoute,
  Outlet,
  useNavigate,
  useLocation,
} from "@tanstack/react-router";
// import { DashboardScreen } from "../../dashboard/DashboardScreen.preview.tsx";
import { Navbar } from "../../dashboard/navbar/Navbar.tsx";
import { useEffect } from "react";

export const Route = createFileRoute("/_private/dashboard")({
  component: () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (location.pathname === "/dashboard") {
        navigate({ to: "/dashboard/addlinks" });
      }
    }, [location, navigate]);

    return (
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    );
  },
});
