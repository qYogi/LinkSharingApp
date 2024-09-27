import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_private")({
  component: () => (
    <div className="h-root bg-light-gray">
      <Outlet />
    </div>
  ),
});
