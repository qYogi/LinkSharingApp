import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="h-root  xl:overflow-hidden">
      <Outlet />
      {/*<TanStackRouterDevtools />*/}
      {/*<ReactQueryDevtools />*/}
    </div>
  );
}
