import { DragAndDropLinks } from "./addLinkScreenComponent/DragAndDropLinks.tsx";
import { SaveButton } from "./SaveButton.tsx";

export const AddLinksScreen = () => {
  return (
    <div className="background flex md:mx-inner-spacing xl:mx-0 flex-col md:justify-between bg-white rounded-xl p-6 md:max-h-[874px] md:h-full md:p-10 xl:h-full  ">
      <div className="md:max-h-[779px] md:h-full">
        <div>
          <h1 className="font-bold text-2xl mb-2 text-dark-gray md:text-2xl">
            Customize your links
          </h1>
          <p className=" text-gray md:text-lg font-light">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>

        <div className="md:max-h-[597px] md:min-h-[597] md:h-full xl:max-h-[470px] xl:h-full  xl:mb-6">
          <DragAndDropLinks />
        </div>
      </div>
      <div>
        <hr className="border-0 h-px bg-borders sp mb-5 w-[calc(100vw - 2 * 1.5rem)] -mx-6 md:-mx-10 " />
      </div>
      <div className="md:self-end ">
        <SaveButton />
      </div>
    </div>
  );
};
