import { Separator } from "@/components-common/ui";
import React from "react";

export const RecipesView = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">New Recipes</h2>
          <p className="text-sm text-muted-foreground">
            Your favorite recipes. Updated daily.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
    </React.Fragment>
  );
};
