import { Layout, PageTitle } from "@/components-common";
import { Button } from "@/components-common/ui";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import React from "react";

export const RecipesContainer = () => {
  return (
    <Layout activeNav="recipes">
      <PageTitle
        title="Recipes"
        subtitle="Find recipes by category, cuisine, and more."
        action={
          <Button>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Add recipe
          </Button>
        }
      />
    </Layout>
  );
};
