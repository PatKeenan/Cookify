import { Layout, PageTitle } from "@/components-common";
import React from "react";

export const MadeForYouContainer = () => {
  return (
    <Layout activeNav="madeForYou">
      <PageTitle
        title="Made For You"
        subtitle="Find recipes by category, cuisine, and more."
      />
    </Layout>
  );
};
