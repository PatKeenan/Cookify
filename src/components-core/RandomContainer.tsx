import { Layout, PageTitle } from "@/components-common";
import React from "react";

export const RandomContainer = () => {
  return (
    <Layout activeNav="random">
      <PageTitle
        title="Random"
        subtitle="Find recipes by category, cuisine, and more."
      />
    </Layout>
  );
};
