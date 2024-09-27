import { LinksSvg } from "../../svg/LinksSvg.tsx";
import { ProfileSvg } from "../../svg/ProfileSvg.tsx";
import { LogoSvg } from "../../svg/Logo.tsx";
import { PreviewSvg } from "../../svg/PreviewSvg.tsx";
import { Link } from "@tanstack/react-router";

export const Links = () => {
  return (
    <div className="navbar flex flex-row h-11 items-center justify-between w-full mx-4 ">
      <div className="flex flex-row">
        <div className="w-8 self-center">
          <LogoSvg />
        </div>
        <h1 className="font-bold text-3xl sm:hidden md:block">devlinks</h1>
      </div>
      <div className="flex flex-row md:w-80">
        <Link to="/dashboard/addlinks" className=" rounded-lg">
          {({ isActive }) => {
            return (
              <>
                <LinksSvg isActive={isActive} />
              </>
            );
          }}
        </Link>
        <Link
          to="/dashboard/profile"
          className="md:flex-grow md:bg-light-purple rounded-lg"
        >
          {({ isActive }) => {
            return (
              <>
                <ProfileSvg isActive={isActive} />
              </>
            );
          }}
        </Link>
      </div>
      <div>
        <PreviewSvg />
      </div>
    </div>
  );
};
