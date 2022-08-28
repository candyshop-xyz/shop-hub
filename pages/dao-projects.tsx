import React from "react";
import Grid from "../components/dao-projects/Grid";
import Header from "../components/Header";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Subheader from "../components/Subheader";
import Title from "../components/Title";

const Projects = () => {
  return (
    <>
      <PageHeader>
        <Header title="projects | cereal box dao" />
        <Title title="cereal box dao" />

        <Subheader
          title="projects"
          body="cereal box dao projects proliferate the mfers meme and equip creators and builders with funding and support"
        />
      </PageHeader>

      <PageContent>
        <Grid />
      </PageContent>
    </>
  );
};

export default Projects;
