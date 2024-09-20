import { Links } from "./Links.tsx";

export const Navbar = () => {
  return (
    <div className="background-navbar bg-white h-20 flex items-center justify-center w-full mb-4">
      <div className=" bg-white flex flex-row h-11 items-center justify-between w-full mx-4 ">
        <Links />
      </div>
    </div>
  );
};
