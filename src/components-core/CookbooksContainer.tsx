import { Layout, PageTitle, RecipeArtwork } from "@/components-common";
import { Button, Input } from "@/components-common/ui";
import { madeForYouRecipes } from "@/components-feat/MadeForYouList";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export const CookbooksContainer = () => {
  return (
    <Layout activeNav="cookbooks">
      <PageTitle
        title="Cookbooks"
        subtitle="Find recipes by category, cuisine, and more."
        action={
          <Button>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Add cookbook
          </Button>
        }
      />
      <div className="h-full w-full flex-grow">
        <div className="mb-4">
          <Input
            placeholder="Filter cookbooks..."
            className="h-8 w-[150px] lg:w-[250px]"
          />
        </div>

        <div className="grid h-full grid-cols-4 gap-4 pb-4">
          {madeForYouRecipes.map((recipe, idx) => (
            <Link href={/cookbooks/ + String(idx)} key={recipe.name}>
              <RecipeArtwork
                recipe={recipe}
                className="w-full"
                aspectRatio="portrait"
                width={250}
                height={330}
              />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};
