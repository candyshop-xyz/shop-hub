import React from "react";
import Head from "next/head";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/earth.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="manifest" href="/manifest.json" />      
      <link rel="icon" href="/earth.png" />
      <script async src="https://cdn.splitbee.io/sb.js"></script>
    </Head>
  );
};

export default Header;
