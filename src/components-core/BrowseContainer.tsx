import { Layout, PageTitle } from "@/components-common";
import React from "react";

export const BrowseContainer = () => {
  return (
    <Layout activeNav="browse">
      <PageTitle
        title="Browse"
        subtitle="Find recipes by category, cuisine, and more."
      />
    </Layout>
  );
};
