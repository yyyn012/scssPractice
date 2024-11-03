import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import ScrollTo from "../../utils/scrollTo";

const Main = (props) => {
  return (
    <HelmetProvider>
      <ScrollTo />
      {/* 페이지 이동 시 화면 최상단으로 올라갈 수 있도록 해주는 함수 */}
      <Helmet
        titleTemplate="%s | Webs Youtube"
        defaultTitle="Webs Youtube"
        defer={false}
      >
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
      <Header />
      <main id="main" role="main">
        <Search />
        {props.children}
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Main;
