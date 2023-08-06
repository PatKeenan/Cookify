import React from "react";
import { Menu } from "@/components-common/Menu";
import { Sidebar } from "@/components-common/Sidebar";
import type { NavItems } from "@/types";

type LayoutProps = {
  children: React.ReactNode;
  activeNav?: NavItems;
};
export const Layout: React.FC<LayoutProps> = ({ children, activeNav }) => {
  return (
    <div>
      <Menu />
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar activeNav={activeNav} />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
