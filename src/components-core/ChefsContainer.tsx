import { Layout, PageTitle } from "@/components-common";
import React from "react";

export const ChefsContainer = () => {
  return (
    <Layout activeNav="chefs">
      <PageTitle
        title="Chefs"
        subtitle="Find recipes by category, cuisine, and more."
      />
    </Layout>
  );
};
