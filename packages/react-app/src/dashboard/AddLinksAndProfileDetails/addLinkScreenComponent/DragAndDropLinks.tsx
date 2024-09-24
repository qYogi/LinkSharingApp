import { useState } from "react";
import { Links } from "./Links/Links.tsx";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { AddNewLinkButton } from "./AddNewLinkButton.tsx";
import { GetStartedScreen } from "./GetStartedScreen.tsx";

interface linksType {
  id: number;
  link: {
    platform: string;
    link: string;
  };
}

export function DragAndDropLinks() {
  const [links, setLinks] = useState<linksType[]>([]);

  //Update <h3> Link #{id} if the id changes with

  const addLink = () => {
    const newLink = {
      id: links.length + 1,
      link: {
        platform: "",
        link: "",
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
    <div className=" mx-auto grid gap-2 my-10">
      <div className="text-2xl font-bold- mb-4">
        <AddNewLinkButton onClick={addLink} />
      </div>
      <div className="h-96 max-h-96 overflow-x-hidden  overflow-y-auto">
        {links.length === 0 ? (
          <GetStartedScreen />
        ) : (
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
        )}
      </div>
    </div>
  );
}
