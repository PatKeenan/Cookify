import React from "react";
import { Menu } from "@/components-common/Menu";
import { Sidebar } from "@/components-common/Sidebar";
import type { NavItems } from "@/types";
import { ScrollArea, ScrollBar } from "./ui";

type LayoutProps = {
  children: React.ReactNode;
  activeNav?: NavItems;
};
export const Layout: React.FC<LayoutProps> = ({ children, activeNav }) => {
  return (
    <div className="flex h-screen max-h-full w-screen flex-auto flex-col">
      <Menu />
      <div className="grid h-full max-h-full flex-grow overflow-hidden border-t bg-background lg:grid-cols-5">
        <Sidebar activeNav={activeNav} />
        <div className="col-span-3 h-full max-h-full overflow-hidden lg:col-span-4 lg:border-l">
          <ScrollArea className="h-full">
            <div className="flex h-full max-h-full min-h-full flex-auto flex-grow flex-col px-4 py-6 lg:px-8">
              {children}
            </div>
            <ScrollBar />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
export const FullWidth = ({ children }: { children: React.ReactNode }) => (
  <div className="-mx-4 -mt-6 lg:-mx-8">{children}</div>
);
