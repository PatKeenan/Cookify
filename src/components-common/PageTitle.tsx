import React from "react";
import { Separator } from "@/components-common/ui";

type PageTitleProps = {
  title: string;
  subtitle?: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => (
  <React.Fragment>
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
    <Separator className="my-4" />
  </React.Fragment>
);
