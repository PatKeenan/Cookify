import React from "react";
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components-common/ui";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { ExploreView, RecipesView } from "./views";
import { Layout } from "@/components-common/Layout";

export const HomeContainer = () => {
  return (
    <Layout activeNav="cookNow">
      <Tabs defaultValue="explore" className="h-full space-y-6">
        <div className="space-between flex items-center">
          <TabsList>
            <TabsTrigger value="explore" className="relative">
              Explore
            </TabsTrigger>
            <TabsTrigger value="recipes">Recipes</TabsTrigger>
            <TabsTrigger value="live" disabled>
              Live
            </TabsTrigger>
          </TabsList>
          <div className="ml-auto mr-4">
            <Button>
              <PlusCircledIcon className="mr-2 h-4 w-4" />
              Add recipe
            </Button>
          </div>
        </div>
        <TabsContent value="explore" className="border-none p-0 outline-none">
          <ExploreView />
        </TabsContent>
        <TabsContent
          value="recipes"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <RecipesView />
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export type Cookbook = (typeof cookbooks)[number];

export const cookbooks = [
  "Recently Added",
  "Recently Cooked",
  "Top Recipes",
  "Top Cookbooks",
  "Top Chefs",
  "Logic Discography",
  "Bedtime Snacks",
  "Happy Hour",
  "Brunch",
  "Fall Flavors",
  "Rainy Day Soups",
  "Tasty Deserts",
];
