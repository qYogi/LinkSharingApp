import { createFileRoute } from "@tanstack/react-router";
import { AddProfileDetailScreen } from "../../../dashboard/AddLinksAndProfileDetails/AddProfileDetailScreen.tsx";

export const Route = createFileRoute("/_private/dashboard/profile")({
  component: () => (
    <div className=" md:max-h-[874px] md:h-full xl:max-h-[root-90] xl:h-full">
      <AddProfileDetailScreen />
    </div>
  ),
});
