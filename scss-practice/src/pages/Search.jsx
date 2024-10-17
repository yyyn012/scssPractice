import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// 리액트에서 라우터 사용 시 파라미터 정보를 가져와 활용하고 싶다면 useParams를 사용하면 된다.

// useParams란 react-router-dom에서 제공하는 Hooks 중 하나로 파라미터 값을 URL을 통해서 넘겨받은 페이지에서 사용할 수 있도록 해준다.

// 예를 들어, 특정 제품 리스트에서 제품 클릭 시  해당 제품의 세부 정보를 나타내는 페이지로 이동하고 싶다면 제품의 ID 값을 URL로 넘겨 세부 페이지에서 그 ID 값에 해당하는 제품만 보여줄 수 있다.

import Main from "../components/section/Main";

import VideoSearch from "../components/videos/VideoSearch";

const Search = () => {
  const { searchId } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setVideos(result.items);
      })
      .catch((error) => console.log(error));
  }, [searchId]);

  return (
    <Main title="유튜브 검색" description="유튜브 검색 결과 페이지입니다.">
      <section id="searchPage">
        <div className="video__inner search">
          <VideoSearch videos={videos} />
        </div>
      </section>
    </Main>
  );
};

export default Search;

// 이 컴포넌트는 검색 결과를 표시하는 페이지로, YouTube API를 사용하여 검색 결과를 가져와 표시합니다

// useParams 훅을 사용하여 현재 경로에서 searchId 파라미터를 가져옵니다. 이 파라미터는 사용자가 입력한 검색어를 나타냅니다.

// useState를 사용하여 videos라는 상태 변수를 생성하고 초기값을 빈 배열로 설정합니다. 이 변수는 검색 결과로 받아온 비디오 목록을 저장합니다.

// useEffect 훅을 사용하여 컴포넌트가 마운트되거나 searchId가 변경될 때마다 유튜브 API를 호출하여 검색 결과를 가져옵니다. API 호출에는 fetch 함수를 사용하며, 검색어와 API 키를 쿼리 파라미터로 전달합니다.

// 여기에서 마운트(mount)란 리액트 컴포넌트 생명 주기인 마운트, 업데이트, 언마운트에서 비롯된 말로 DOM 객체가 생성되고 브라우저에 나타나는 것을 의미합니다.

//  API 응답을 JSON으로 파싱하고, 결과를 setVideos 함수를 사용하여 videos 상태 변수에 저장합니다. API 호출 중에 발생할 수 있는 오류도 처리합니다.

// JSX에서는 Main 컴포넌트를 사용하여 페이지의 제목과 설명을 설정합니다. 그리고 검색 결과를 표시하기 위해 VideoSearch 컴포넌트를 렌더링합니다. VideoSearch 컴포넌트에는 검색 결과로 받아온 비디오 목록이 전달됩니다.
