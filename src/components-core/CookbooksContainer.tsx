import { Layout, PageTitle } from "@/components-common";
import React from "react";

export const CookbooksContainer = () => {
  return (
    <Layout activeNav="cookbooks">
      <PageTitle
        title="Cookbooks"
        subtitle="Find recipes by category, cuisine, and more."
      />
    </Layout>
  );
};
