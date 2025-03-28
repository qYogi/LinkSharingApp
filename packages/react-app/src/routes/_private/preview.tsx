import { createFileRoute } from "@tanstack/react-router";
import { PreviewScreen } from "../../preview/PreviewScreen.tsx";

export const Route = createFileRoute("/_private/preview")({
  component: () => (
    <div className=" md:max-h-[874px] md:h-full xl:max-h-[root-90] xl:h-full">
      <PreviewScreen />
    </div>
  ),
});
