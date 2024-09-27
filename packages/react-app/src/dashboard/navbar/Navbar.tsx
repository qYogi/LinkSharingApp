import { Links } from "./Links.tsx";

export const Navbar = () => {
  return (
    <div className="md:h-32 md:flex md:justify-center md:items-center md:mx-inner-spacing">
      <div className=" bg-white flex flex-row sm:mb-4 md:-0 h-20 items-center rounded-lg  justify-between w-full xl:max-w-root-90 xl:w-root-90 md:h-20">
        <Links />
      </div>
    </div>
  );
};
