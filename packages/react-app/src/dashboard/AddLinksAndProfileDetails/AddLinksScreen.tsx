import { DragAndDropLinks } from "./addLinkScreenComponent/DragAndDropLinks.tsx";

export const AddLinksScreen = () => {
  return (
    <div className="background flex flex-col bg-white m-inner-spacing max-h-[922px] rounded-xl p-6">
      <div className="">
        <h1 className="text-2xl mb-2 text-dark-gray">Customize your links</h1>
        <p className="text-gray">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>

      <div className="mb">
        <DragAndDropLinks />
      </div>
      <hr className="border-gray-200 my-6" />
      <button className="bg-purple text-white rounded-lg w-full h-12 cursor-pointer font-semibold mb-6 hover:bg-light-purple">
        Save
      </button>
    </div>
  );
};
