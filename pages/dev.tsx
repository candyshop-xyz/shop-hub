import React from "react";
import Grid from "../components/Dev/Grid";
import Header from "../components/Header";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Subheader from "../components/Subheader";
import Title from "../components/Title";

const Dev = () => {
  return (
    <>
      <PageHeader>
        <Header title="dev | mfers hub" />
        <Title title="dev resources" />

        <Subheader body="tehnical resources and github repos by and for mfers" />
      </PageHeader>

      <PageContent>
        <Grid />
      </PageContent>
    </>
  );
};

export default Dev;
