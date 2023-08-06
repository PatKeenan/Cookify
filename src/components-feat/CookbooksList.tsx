import { Button, ScrollArea } from "@/components-common/ui";
import Link from "next/link";
import React from "react";

export const CookbooksList = () => (
  <React.Suspense fallback={"Loading..."}>
    <CookbooksListInner />
  </React.Suspense>
);

export const CookbooksListInner = () => {
  // logic to get cookbooks here
  return (
    <ScrollArea className="h-[300px] px-1">
      <div className="space-y-1 p-2">
        {cookbooks?.map((cookbook) => (
          <Button
            key={cookbook.id}
            variant="ghost"
            className="w-full justify-start font-normal"
            asChild
          >
            <Link href={`/cookbooks/${cookbook.id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M21 15V6" />
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M12 12H3" />
                <path d="M16 6H3" />
                <path d="M12 18H3" />
              </svg>
              {cookbook.title}
            </Link>
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
};

export type Cookbook = (typeof cookbooks)[number];
export const cookbooks = [
  { id: "1", ownerId: "1", title: "Recently Added", public: true },
  { id: "2", ownerId: "1", title: "Recently Cooked", public: true },
  { id: "3", ownerId: "1", title: "Top Recipes", public: true },
  { id: "4", ownerId: "1", title: "Top Cookbooks", public: true },
  { id: "5", ownerId: "1", title: "Top Chefs", public: true },
  { id: "6", ownerId: "1", title: "Logic Discography", public: true },
  { id: "7", ownerId: "1", title: "Bedtime Snacks", public: true },
  { id: "8", ownerId: "1", title: "Happy Hour", public: true },
  { id: "9", ownerId: "1", title: "Brunch", public: true },
  { id: "10", ownerId: "1", title: "Fall Flavors", public: true },
  { id: "11", ownerId: "1", title: "Rainy Day Soups", public: true },
  { id: "12", ownerId: "1", title: "Tasty Deserts", public: true },
];
