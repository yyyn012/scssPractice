import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/section/Main";

const Home = lazy(() => import("./pages/Home"));
const Today = lazy(() => import("./pages/Today"));
const Developer = lazy(() => import("./pages/Developer"));
const Webd = lazy(() => import("./pages/Webd"));
const Website = lazy(() => import("./pages/Website"));
const Gsap = lazy(() => import("./pages/Gsap"));
const Port = lazy(() => import("./pages/Port"));
const Youtube = lazy(() => import("./pages/Youtube"));
const Channel = lazy(() => import("./pages/Channel"));
const Video = lazy(() => import("./pages/Video"));
const Search = lazy(() => import("./pages/Search"));
const Not = lazy(() => import("./pages/Not"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/webd" element={<Webd />} />
          <Route path="/website" element={<Website />} />
          <Route path="/gsap" element={<Gsap />} />
          <Route path="/port" element={<Port />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/video/:videoId" element={<Video />} />
          <Route path="/search/:searchId" element={<Search />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

// Suspense는 페이지가 렌더링 되기 전 다른 작업(ex. 로딩 창)이 이루어지도록 도와준다.

//  Suspense를 React.lazy와 함께 사용하면 동적으로 컴포넌트를 불러올 수 있다.

// import React, { Suspense } from 'react';

// const OtherComponent = React.lazy(() => import('./OtherComponent'));

// function MyComponent() {
//   return (
//     <React.Suspense fallback={<Spinner />}>
//       <div>
//         <OtherComponent />
//       </div>
//     </React.Suspense>
//   );
// }

// 위의 예시에서 OtherComponent 컴포넌트가 렌더링 준비가 안된 상태라면 Spinner 컴포넌트를 보여준다.

// lazy 컴포넌트는 Suspense컴포넌트의 하위에서 렌더링 되어야 하며, React.lazy()를 사용하면 동적으로 불러오는 컴포넌트를 정의할 수 있다.

// 이렇게 하면 번들의 크기를 줄이고, 초기 렌더링에서 사용되지 않는 컴포넌트를 불러오는 작업을 지연시킬 수 있다.

// 한번 렌더링이 완료된 페이지는 다시 들어가더라도 Suspense가 작동하지 않는다.

// fallback은 컴포넌트가 로딩 중일 때 보여줄 'UI를 설정하는 prop'이다. 자주 사용되는 예시 중 하나로는 로딩 스피너가 있다.
