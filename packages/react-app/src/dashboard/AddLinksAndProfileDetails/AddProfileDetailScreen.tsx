import { UploadProfileImage } from "./addProfileDetailsScreenComponents/UploadProfileImage.tsx";
import { PersonalDetailsForm } from "./addProfileDetailsScreenComponents/PersonalDetailsForm.tsx";

export const AddProfileDetailScreen = () => {
  return (
    <div className="background flex md:mx-inner-spacing xl:mx-0 flex-col md:justify-between bg-white rounded-xl p-6 md:max-h-[874px] md:h-full md:p-10 xl:h-full">
      <div className="mb-10 ">
        <div className="header mb-10">
          <h1 className="font-bold text-2xl mb-2 text-dark-gray md:text-2xl">
            Profile Details
          </h1>
          <p className="text-gray md:text-lg font-light">
            Add your details to create a personal touch to your profile
          </p>
        </div>
        <UploadProfileImage />
        <PersonalDetailsForm />
      </div>
      <div className=" md:mt-16 md:flex md:flex-col">
        <hr className="border-0 h-px bg-borders sp mb-5 w-[calc(100vw - 2 * 1.5rem)] md:justify-end -mx-6 md:-mx-10" />
        <button
          type="submit"
          className="bg-purple text-white rounded-lg w-full h-12 cursor-pointer xl:justify-center font-semibold mb-6 md:mb-0 hover:bg-light-purple xl:hover:shadow-purple-hover md:self-end md:h-12 md:w-20"
        >
          Save
        </button>
      </div>
    </div>
  );
};
