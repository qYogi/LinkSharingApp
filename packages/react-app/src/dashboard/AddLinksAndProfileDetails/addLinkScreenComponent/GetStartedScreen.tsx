import { GetStartedScreenIcon } from "./svgs/GetStartedScreenIcon.tsx";

export const GetStartedScreen = () => {
  return (
    <div className=" flex flex-col justify-center items-center  bg-light-gray h-96 px-3 py-10 ">
      <div className="mb-5">
        <GetStartedScreenIcon />
      </div>
      <div className="text-center flex flex-col ">
        <h1 className="text-dark-gray font-semibold mb-5 text-2xl ">
          Let's get you started
        </h1>
        <p className=" w-3/4 text-base self-center text-justify text-gray font-light">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
};
