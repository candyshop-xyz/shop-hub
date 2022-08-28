import React from "react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <div className="font-extrabold text-5xl mferFont pb-6 tracking-wide">{title}</div>;
};

export default Title;
