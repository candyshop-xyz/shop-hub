import React from "react";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Title from "../components/Title";
import { NotionRenderer } from "react-notion";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Button from "../components/common/Button";

const Template = () => {
  return (
    <div>
      <Header title="Template | Nouns Center" />
      <Title title="Template" />
    </div>
  );
};

export default Template;
