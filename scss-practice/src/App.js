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

// React 18버전에서 공식적으로 릴리즈된 기능으로, Suspense 컴포넌트를 활용하면 컴포넌트 로드 상태에 따라 fallback 컴포넌트를 우선적으로 렌더링해주는 기능. 이를 사용하면 컴포넌트 내부에서 비동기 요청 후 로직에 필요한 성공 데이터만을 다루게 되어 더 효율적임.

export default App;
