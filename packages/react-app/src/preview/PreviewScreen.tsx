import { Link } from "@tanstack/react-router";

export const PreviewScreen = () => {
  return (
    <div className="flex flex-col">
      <div className={`navbar flex flex-row justify-evenly p-4 mb-16`}>
        <Link
          to="/preview"
          className={`border rounded-lg w-40 h-12 font-[600] flex justify-center items-center border-purple text-purple`}
        >
          Back to Editor
        </Link>
        <h1
          className={` rounded-lg w-40 h-12 font-[600] flex justify-center items-center bg-purple text-white `}
        >
          Share Link
        </h1>
      </div>

      <div className={`previewContainer flex flex-col `}>
        <div className={`info flex flex-col justify-center items-center`}>
          <span
            className={`border-4 border-purple w-28 h-28  rounded-full mb-6`}
          >
            Image here
          </span>
          <h1 className={`name text-4xl text-dark-gray font-[700]`}>
            Ben Wright
          </h1>
          <h3 className={`email text-gray mt-3`}>email@google.com</h3>
        </div>
      </div>
    </div>
  );
};
