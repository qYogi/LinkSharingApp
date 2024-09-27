import { useState } from "react";
import { Links } from "./Links/Links.tsx";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { AddNewLinkButton } from "./AddNewLinkButton.tsx";
import { GetStartedScreen } from "./GetStartedScreen.tsx";

interface linksType {
  id: number;
  link: {
    selectedPlatform: string;
    url: string;
  };
}

export function DragAndDropLinks({}) {
  const [links, setLinks] = useState<linksType[]>([]);

  const addLink = () => {
    const newLink = {
      id: links.length + 1,
      link: {
        selectedPlatform: "",
        url: "",
      },
    };
    setLinks([...links, newLink]);
  };

  const handleRemoveLinkItem = (id: number) => {
    const newLinks = links.filter((link) => link.id !== id);
    setLinks(newLinks);
  };

  console.log(links);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = links.findIndex((link) => link.id === active.id);
      const newIndex = links.findIndex((link) => link.id === over.id);

      const reorderedLinks = Array.from(links);
      reorderedLinks.splice(oldIndex, 1);
      reorderedLinks.splice(newIndex, 0, links[oldIndex]);

      setLinks(reorderedLinks);
    }
  };

  return (
    <div className=" md:max-h-[550px] md:min-h-[550px] md:h-full mx-auto my-10">
      <div className="text-2xl font-bold- mb-6">
        <AddNewLinkButton onClick={addLink} />
      </div>
      <div className="md:max-h-[550px] md:h-full">
        {links.length === 0 ? (
          <div className=" md:max-h-[500px] md:h-full xl:max-h-[450px] xl:h-full overflow-hidden">
            <GetStartedScreen />
          </div>
        ) : (
          <div className="h-96 md:max-h-[515px] md:min-h-[469px] md:h-full xl:max-h-[485px] xl:h-full overflow-x-hidden  overflow-y-auto">
            <DndContext onDragEnd={handleDragEnd}>
              <SortableContext items={links.map((link) => link.id)}>
                {links.map((link, index) => (
                  <Links
                    key={link.id}
                    id={link.id}
                    displayIndex={index + 1}
                    handleRemove={handleRemoveLinkItem}
                  />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        )}
      </div>
    </div>
  );
}
