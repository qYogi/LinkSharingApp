import { createFileRoute } from "@tanstack/react-router";
import LoginForm from "./index.Login.lazy.tsx";
export const Route = createFileRoute("/(authentication)/login/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <LoginForm />
    </div>
  );
}
