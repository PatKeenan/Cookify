import React from "react";
import { Separator } from "@/components-common/ui";
import { MadeForYouList } from "@/components-feat/MadeForYouList";
import { CookNowRecipesList } from "@/components-feat/CookNowRecipesList";
import { PageTitle } from "@/components-common";

export const ExploreView = () => {
  return (
    <React.Fragment>
      <PageTitle
        title="Cook Now"
        subtitle="Top picks for you. Updated daily."
      />

      <div className="relative">
        <CookNowRecipesList />
      </div>
      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
        <p className="text-sm text-muted-foreground">
          Your personal playlists. Updated daily.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <MadeForYouList />
      </div>
    </React.Fragment>
  );
};
