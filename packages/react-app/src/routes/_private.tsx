import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_private")({
  component: () => (
    <div className="w-screen h-screen bg-light-gray">
      <Outlet />{" "}
    </div>
  ),
});
