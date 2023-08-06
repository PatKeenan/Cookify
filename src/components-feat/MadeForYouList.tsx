import React from "react";
import { RecipeArtwork } from "@/components-common/RecipeArtwork";
import { ScrollArea, ScrollBar } from "@/components-common/ui";

export const MadeForYouList = () => (
  <React.Suspense fallback={"Loading..."}>
    <MadeForYouListInner />
  </React.Suspense>
);

const MadeForYouListInner = () => {
  return (
    <ScrollArea>
      <div className="flex space-x-4 pb-4">
        {madeForYouRecipes.map((recipe) => (
          <RecipeArtwork
            key={recipe.name}
            recipe={recipe}
            className="w-[150px]"
            aspectRatio="square"
            width={150}
            height={150}
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export interface Recipes {
  name: string;
  artist: string;
  cover: string;
}

export const madeForYouRecipes: Recipes[] = [
  {
    name: "Chef Mike",
    artist: "Italian Cuisine",
    cover:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZiUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Brunch Favorites",
    artist: "Brunch",
    cover:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Healthy Meal Prep",
    artist: "Meal Prep",
    cover:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
  },
  {
    name: "Sloppy Sandwiches",
    artist: "Sinful Delights",
    cover:
      "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Fancy Dinner",
    artist: "Fancy",
    cover:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Summer Cocktails",
    artist: "Cocktails",
    cover:
      "https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=80",
  },
];
