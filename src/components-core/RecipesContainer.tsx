import { Layout, PageTitle } from "@/components-common";
import React from "react";

export const RecipesContainer = () => {
  return (
    <Layout activeNav="recipes">
      <PageTitle
        title="Recipes"
        subtitle="Find recipes by category, cuisine, and more."
      />
    </Layout>
  );
};
