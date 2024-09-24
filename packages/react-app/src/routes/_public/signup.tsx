import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SignupScreen } from "../../authentification/SignupScreen.tsx";
import { Auth } from "aws-amplify";

export const Route = createFileRoute("/_public/signup")({
  component: () => {
    const navigate = useNavigate();
    Auth.currentAuthenticatedUser()
      .then(() => {
        navigate({ to: "/dashboard" });
      })
      .catch(() => {
        console.log("re");
      });
    return <SignupScreen />;
  },
});
