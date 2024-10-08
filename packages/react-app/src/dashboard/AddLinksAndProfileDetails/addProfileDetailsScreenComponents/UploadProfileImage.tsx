import { UploadImageSvg } from "./svg/UploadImageSvg.tsx";
import { s3Upload } from "../../../lib/awsLib.ts";
import { useRef, useState } from "react";
import { onError } from "../../../lib/errorLib.ts";
import { ChangeProfilePicture } from "./svg/ChangeProfilePicture.tsx";

export const UploadProfileImage = () => {
  const file = useRef<null | File>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      file.current = event.target.files[0];

      // Generate a local URL for the image preview
      const fileURL = URL.createObjectURL(file.current);
      setImagePreview(fileURL);
    }
  };

  async function handleUploadImage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Uploading image");

    if (file.current && file.current.size > 1024 * 1024) {
      console.error("Image too large");
    }

    try {
      const attachment = file.current
        ? await s3Upload(file.current)
        : undefined;

      console.log(attachment);
    } catch (e) {
      onError(e);
    }
  }

  return (
    <form
      onSubmit={handleUploadImage}
      className="bg-light-gray max-h-[333px] h-full rounded-lg p-5 mb-6 md:flex md:justify-center md:max-h-[233px]"
    >
      <div className="md:grid md:grid-cols-[1fr_2fr_1fr] xl:grid-cols-[1fr_2fr_2fr]">
        <p className="text-gray font-extralight text-base mb-2 md:self-center md:max-w-[256px]">
          Profile Picture
        </p>
        <div className="md:flex md:justify-end">
          <div className="relative mb-2 h-48 w-48 rounded-lg">
            {imagePreview ? (
              <>
                <img
                  src={imagePreview}
                  alt="Profile Preview"
                  className="h-full w-full rounded-lg object-cover"
                />

                <button
                  type="button"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50  opacity-100 rounded-lg transition-opacity"
                  onClick={() => document.getElementById("fileInput")?.click()}
                >
                  <ChangeProfilePicture />
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => document.getElementById("fileInput")?.click()}
                className="h-full w-full bg-light-purple rounded-lg flex justify-center items-center active:bg-purple-hover"
              >
                <UploadImageSvg />
              </button>
            )}
          </div>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
        <p className="text-gray font-extralight text-xs md:self-center md:pl-4">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </form>
  );
};
