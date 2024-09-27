import { UploadImageSvg } from "./svg/UploadImageSvg.tsx";

export const UploadProfileImage = () => {
  return (
    <div className="bg-light-gray max-h-[333px] h-full rounded-lg p-5 mb-6 md:flex md:justify-center md:max-h-[233px] ">
      <div className="md:grid md:grid-cols-[1fr_2fr_1fr] xl:grid-cols-[1fr_2fr_2fr]">
        <p className="text-gray font-extralight text-base mb-2 md:self-center md:max-w-[256px]">
          Profile Picture
        </p>
        <div className="md:flex md:justify-end ">
          <button className="mb-2 bg-light-purple h-48 w-48 rounded-lg flex justify-center items-center  active:bg-purple-hover">
            <UploadImageSvg />
          </button>
        </div>
        <p className="text-gray font-extralight text-xs  md:self-center md:pl-4">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
};
