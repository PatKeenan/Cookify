import React from "react";
import { Separator } from "@/components-common/ui";

type PageTitleProps = {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
};

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  action,
}) => (
  <React.Fragment>
    <div className="flex items-start justify-between">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {action && <div className="ml-auto mr-4">{action}</div>}
    </div>
    <Separator className="my-4" />
  </React.Fragment>
);
