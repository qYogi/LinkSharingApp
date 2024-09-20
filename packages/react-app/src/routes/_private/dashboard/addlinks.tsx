import { createFileRoute } from "@tanstack/react-router";
import { AddLinksScreen } from "../../../dashboard/AddLinksAndProfileDetails/AddLinksScreen.tsx";

export const Route = createFileRoute("/_private/dashboard/addlinks")({
  component: () => <AddLinksScreen />,
});
