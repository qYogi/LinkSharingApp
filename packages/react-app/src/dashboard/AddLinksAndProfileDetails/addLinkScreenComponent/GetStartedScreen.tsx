import { GetStartedScreenIcon } from "./svgs/GetStartedScreenIcon.tsx";

export const GetStartedScreen = () => {
  return (
    <div className=" flex flex-col justify-center items-center rounded-lg bg-light-gray overflow-x-hidden h-96 md:max-h-[500px] md:h-full xl:max-h-[450px] xl:h-full px-3 md:py-10 xl:py-14">
      <div className="mb-5 ">
        <GetStartedScreenIcon />
      </div>
      <div className="text-center flex flex-col ">
        <h1 className="text-dark-gray font-semibold mb-5 text-2xl md:text-2xl md:mb-6">
          Let's get you started
        </h1>
        <p className=" w-3/4 text-base self-center md:font-extralight text-justify text-gray font-light md:text-center md:max-w-[488px] md:w-full">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
};
