import platforms from "../platforms.json";
import { useState } from "react";

export const Dropdown = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [icon, setIcon] = useState("");
  const [isOpen, setIsOpened] = useState(false);

  const handlePlatformChange = async (platformName: string) => {
    setSelectedPlatform(platformName);
    try {
      const platformIcon = await import(`./icons/${platformName}.svg`);
      setIcon(platformIcon.default);
    } catch (error) {
      console.error("Error loading platform icon", error);
      setIcon(""); // Fallback in case of error
    }
  };

  return (
    <div className="relative w-full">
      <div>
        <button
          onClick={() => setIsOpened(!isOpen)}
          className="border pl-8 border-borders rounded-lg w-full p-2"
        >
          {selectedPlatform || "Select a platform"}
        </button>
      </div>

      {isOpen && (
        <ul className="absolute top-10 left-0 w-full bg-white border border-borders rounded-lg">
          {platforms.map((platform) => (
            <li key={platform.name} className="p-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlePlatformChange(platform.name);
                  setIsOpened(false);
                }}
                className="cursor-pointer w-full text-left"
              >
                {platform.name}
              </button>
            </li>
          ))}
        </ul>
      )}

      {icon && (
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 flex items-center">
          <img src={icon} alt="platform icon" width="20" height="20" />
        </div>
      )}
    </div>
  );
};
