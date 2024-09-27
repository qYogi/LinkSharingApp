import { createFileRoute } from "@tanstack/react-router";
import { AddLinksScreen } from "../../../dashboard/AddLinksAndProfileDetails/AddLinksScreen.tsx";

export const Route = createFileRoute("/_private/dashboard/addlinks")({
  component: () => (
    <div className=" md:max-h-[874px] md:h-full xl:max-h-[root-90] xl:h-full">
      <AddLinksScreen />
    </div>
  ),
});
