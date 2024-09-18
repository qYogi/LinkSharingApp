import { createFileRoute } from "@tanstack/react-router";
import SignupForm from "./index.Signup.lazy.tsx";
export const Route = createFileRoute("/(authentication)/signup/")({
  component: Signup,
});

function Signup() {
  return (
    <div className="p-2">
      <SignupForm />
    </div>
  );
}
