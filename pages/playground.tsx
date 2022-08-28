
import React, { useEffect } from "react";
import Header from "../components/Header";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Title from "../components/Title";
import Subheader from "../components/Subheader";
import Status from "../components/common/Status";
import TextContent from "../components/Layout/TextContent";
import getTraits from "../api/main.js";
import { downloadMfer } from "../api/main.js";

const Playground = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      getTraits();
    }
  }, []);

  return (
    <>
      <PageHeader>
        <Header title="playground | mfer hub" />
        <Title title="playground" />

        <Subheader
          title="create your own mfer and download it at 1000px x 1000px resolution"
          body="refresh your browser if you don't see trait selectors under the download mfer button"
        />
      </PageHeader>
      
      <PageContent>
      
     <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl mb-8">                
       <script type="text/javascript" src="/main.js" defer></script>
        <div className="canvasWrap">
          <canvas id="canvas"></canvas>
          <div className="export cursor-pointer" onClick={downloadMfer}>
            download mfer
          </div>
        </div>
        <div className="selectionWrap"></div>
      </div>
        
      </PageContent>
    </>
  );
};

export default Playground;
