import {
  createFileRoute,
  Outlet,
  useNavigate,
  useLocation,
} from "@tanstack/react-router";
// import { DashboardScreen } from "../../dashboard/DashboardScreen.preview.tsx";
import { Navbar } from "../../dashboard/navbar/Navbar.tsx";
import { useEffect } from "react";
import { RealTimePreview } from "../../dashboard/leftPanel/RealTimePreview.tsx";

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
      <div className="">
        <Navbar />
        <div className="md:max-h-[874px] md:h-full xl:flex md:flex md:justify-center xl:justify-center xl:h-root  xl:w-root-100">
          <main className=" md:max-w-[720px] md:max-h-[874px] md:h-full xl:flex xl:justify-center xl:mb-10 xl:mx-inner-spacing xl:max-h-[814px] xl:h-full  xl:max-w-[1500px] ">
            <div className="sm:hidden xl: mr-6 xl:max-h-[834px] xl:h-full xl:max-w-[600px] xl:w-full xl:block xl:min-w-[560px] ">
              <RealTimePreview />
            </div>
            <div className=" xl:flex-grow md:max-h-[874px] xl:mb-2.5  md:h-full  xl:h-full xl:min-w-[808px] xl:max-w-[808px] ">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    );
  },
});
