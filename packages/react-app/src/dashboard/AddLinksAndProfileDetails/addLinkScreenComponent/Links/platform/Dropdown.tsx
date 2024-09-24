import platforms from "./platforms.json";
import { useState } from "react";
import { Icons } from "./icons";

interface Props {
  selectedPlatform: string;
  onPlatformChange: (platformName: string) => void;
}

export const Dropdown = ({ selectedPlatform, onPlatformChange }: Props) => {
  // const [selectedPlatform, setSelectedPlatform] = useState<string>("GitHub");
  // const [icons, setIcons] = useState<Record<string, string>>({});
  const [isOpen, setIsOpened] = useState(false);

  const handlePlatformChange = (platformName: string) => {
    onPlatformChange(platformName);
    setIsOpened(false);
  };

  const handleClick = () => {
    setIsOpened((prevState) => !prevState);
  };
  return (
    <div className="relative w-full mb-3">
      <div>
        <button
          onClick={handleClick}
          className="border pl-8 border-borders rounded-lg bg-white w-full p-2 flex self-start active:border-purple "
        >
          {selectedPlatform}
        </button>
      </div>

      {isOpen && (
        <ul className="absolute top-14 max-h-[540px] left-0 w-full bg-white border border-borders rounded-lg overflow-auto z-10">
          {platforms.map((platform) => (
            <li key={platform.name} className="px-3">
              <button
                onClick={() => handlePlatformChange(platform.name)}
                className="cursor-pointer w-full text-left"
              >
                <div className="flex flex-row items-center my-3 text-base">
                  {Icons[platform.name] && (
                    <img
                      src={Icons[platform.name]}
                      alt={`${platform.name} icon`}
                      className="mr-2"
                    />
                  )}
                  <span>{platform.name}</span>
                </div>
              </button>
              <hr className="h-px w-full bg-borders border-0" />
            </li>
          ))}
        </ul>
      )}

      {Icons[selectedPlatform] && (
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 flex items-center">
          <img src={Icons[selectedPlatform]} alt="platform icon" />
        </div>
      )}
    </div>
  );
};
