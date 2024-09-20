import { LinksSvg } from "../../svg/LinksSvg.tsx";
import { ProfileSvg } from "../../svg/ProfileSvg.tsx";
import { LogoSvg } from "../../svg/Logo.tsx";
import { PreviewSvg } from "../../svg/PreviewSvg.tsx";
import { Link } from "@tanstack/react-router";

export const Links = () => {
  return (
    <div className="navbar flex flex-row h-11 items-center justify-between w-full mx-4 ">
      <div>
        <LogoSvg />
      </div>
      <div className="flex flex-row">
        <Link to="/dashboard/addlinks" className="bg-light-purple rounded-xl">
          {({ isActive }) => {
            return (
              <>
                <LinksSvg isActive={isActive} />
              </>
            );
          }}
        </Link>
        <Link to="/dashboard/profile" className="rounded-xl">
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
