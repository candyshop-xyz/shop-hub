import React from "react";

const Podcasts = () => {
  return (
    <div className=" overflow-hidden divide-y divide-gray-200 sm:divide-y-0 sm:grid xs:grid-cols-1 sm:grid-cols-2 sm:gap-3">

      <iframe
        height="200px"
        width="100%"
        frameBorder="no"
        scrolling="no"
        seamless
        src="https://anchor.fm/cerealboxdao/embed/episodes/Live-Read-of-The-Network-State-by-Balaji-Srinivasan---Chapter-1-e1kqshc"
      ></iframe>
      
    </div>
  );
};

export default Podcasts;
