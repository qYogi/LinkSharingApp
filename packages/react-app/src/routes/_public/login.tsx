import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "../../authentification/LoginForm.tsx";
import { Auth } from "aws-amplify";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/login")({
  component: () => {
    const navigate = useNavigate();
    Auth.currentAuthenticatedUser()
      .then(() => {
        navigate({ to: "/dashboard" });
      })
      .catch(() => {
        return <LoginForm />;
      });
  },
});
