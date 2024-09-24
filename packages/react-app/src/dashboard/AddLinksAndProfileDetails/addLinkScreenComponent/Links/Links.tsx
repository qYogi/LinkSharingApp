import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useFormFields } from "../../../../lib/hooksLib.ts";
import { InputSvg } from "../svgs/InputSvg.tsx";
import { Dropdown } from "./platform/Dropdown.tsx";
import { useState } from "react";
import { DndSignSvg } from "../svgs/DndSignSvg.tsx";

interface Props {
  id: number;
  handleRemove: (id: number) => void;
  displayIndex: number;
}

export const Links = ({ id, handleRemove, displayIndex }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const [fields, handleFieldChange] = useFormFields({
    link: "",
  });
  const [selectedPlatform, setSelectedPlatform] = useState<string>("GitHub");

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-light-gray rounded-lg mb-6 flex flex-col p-4"
    >
      <div className="flex justify-between mb-3">
        <div {...attributes} {...listeners} className="flex flex-row">
          <div className="mt-2.5">
            <DndSignSvg />
          </div>
          <h3 className="text-lg text-gray font-bold ml-2">
            Link #{displayIndex}
          </h3>
        </div>

        <button
          onClick={() => handleRemove(id)}
          className="text-lg text-gray font-light"
        >
          Remove
        </button>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="text-dark-gray font-light text-base mb-1">
            Platform
          </div>

          <Dropdown
            selectedPlatform={selectedPlatform}
            onPlatformChange={setSelectedPlatform}
          />

          <div className="text-dark-gray font-light text-base mb-1">Link</div>

          <div className="relative w-full">
            <input
              type="url"
              id="link"
              placeholder={`e.g. https://${selectedPlatform.toLowerCase()}/username`}
              value={fields.link}
              onChange={handleFieldChange}
              className="border pl-8 border-borders rounded-lg w-full p-2 focus:border-purple transition duration-300 focus:shadow-purple-hover focus:shadow-2xl focus:outline-none"
            />
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2 flex items-center">
              <InputSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
