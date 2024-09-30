import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "./Header";
import Footer from "./Footer";

const Main = (props) => {
  return (
    <HelmetProvider>
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
        {props.children}
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Main;

// HelmetProvider : react-helmet-async의 HelmetProvider 컴포넌트를 사용하여 Helmet 컴포넌트를 초기화합니다. Helmet은 페이지의 헤드 태그에 메타 데이터와 타이틀을 동적으로 추가하거나 변경하는 데 사용됩니다.

// Helmet : Helmet 컴포넌트를 사용하여 페이지의 메타 데이터와 타이틀을 설정합니다. 이 컴포넌트를 사용하면 서버 사이드 렌더링(SSR) 및 동적 페이지 제목 설정과 같은 작업을 쉽게 수행할 수 있습니다. 주로 title, meta, link, script 등의 태그를 동적으로 조작하는 데 사용됩니다.

// titleTemplate : 페이지 타이틀의 템플릿을 설정합니다. %s는 나중에 실제 타이틀로 대체됩니다.

// defaultTitle : 기본 타이틀을 설정합니다. 페이지 타이틀이 없는 경우 사용됩니다.

// defer : true로 설정하면 렌더링 전까지 <Helmet> 컴포넌트가 기다립니다.

//<title>과 <meta> 태그 : props로 전달된 title과 description 값을 사용하여 페이지의 타이틀과 메타 설명을 설정합니다. props.title과 props.description이 없는 경우, 기본값으로 "Webs Youtube"가 타이틀로 설정됩니다.
