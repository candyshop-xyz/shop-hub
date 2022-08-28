import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Timeline from "../components/Timeline/Timeline";
import Subheader from "../components/Subheader";
import PageHeader from "../components/Layout/PageHeader";
import PageContent from "../components/Layout/PageContent";
import Button from "../components/common/Button";

const History = () => {
  return (
    <>
      <PageHeader>
        <Header title="history | mfers hub" />
        <Title title="history" />

        <Subheader
          title="moments &#38; milestones"
          body="a timeline of the major milestones and noteworthy moments that have happened since the inception of the mfers. click the button to suggest an event that should be added."
        />
        <Button
          text="what's missing?"
          link="https://www.addressform.io/form/132a5efc-cdb5-4f13-b9bd-30fe3c1b71a4"
        />
      </PageHeader>

      <PageContent>
        <Timeline />
      </PageContent>
    </>
  );
};

export default History;
