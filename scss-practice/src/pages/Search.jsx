import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Main from "../components/section/Main";
import VideoSearch from "../components/videos/VideoSearch";
import { fetchFromAPI } from "../utils/api";

const Search = () => {
  const { searchId } = useParams();
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);

  useEffect(() => {
    setVideos([]);
    fetchVideos(searchId);
  }, [searchId]);

  const fetchVideos = (query, pageToken = "") => {
    fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
      .then((data) => {
        setNextPageToken(data.nextPageToken);
        setVideos((prevVideos) => [...prevVideos, ...data.items]);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  };

  const handleLoadMore = () => {
    if (nextPageToken) {
      fetchVideos(searchId, nextPageToken);
    }
  };

  return (
    <Main title="유튜브 검색" description="유튜브 검색 결과 페이지입니다.">
      <section id="searchPage">
        <h2>
          <em>{searchId}</em> 검색 결과입니다.
        </h2>
        <div className="video__inner search">
          <VideoSearch videos={videos} />
        </div>
        <div className="video__more">
          {nextPageToken && <button onClick={handleLoadMore}>더보기</button>}
        </div>
      </section>
    </Main>
  );
};

export default Search;

//이 컴포넌트는 YouTube API를 통해 검색 결과를 가져와 사용자에게 표시하고, 더 많은 결과를 불러올 수 있는 기능을 제공합니다. 결과를 동적으로 업데이트하고 더 많은 동영상을 불러오는 기능을 갖춘 검색 결과 페이지를 만들 수 있게 해주는 컴포넌트입니다.

// nextPageToken 상태 변수: nextPageToken은 다음 페이지의 토큰을 저장합니다. 이를 사용하여 API 호출 시 다음 페이지의 결과를 가져옵니다. 초기값은 null로 설정됩니다.

// useEffect로 초기 검색 결과 초기화: 검색어(searchId)가 변경될 때마다 videos 상태와 nextPageToken 상태를 초기화합니다. 이렇게 함으로써 새로운 검색어로 검색 결과를 다시 불러옵니다.

// fetchVideos 함수: 검색 결과를 가져오는 로직을 함수로 추상화합니다. 함수에는 query (검색어)와 pageToken (다음 페이지 토큰)을 인자로 받습니다.

// handleLoadMore 함수: "더 보기" 버튼 클릭 시 호출되는 함수로, nextPageToken이 있을 때만 추가 데이터를 로드합니다.

// JSX에서 "더 보기" 버튼 추가: 검색 결과 아래에 "더 보기" 버튼을 추가하고, nextPageToken이 존재할 때만 이 버튼을 렌더링합니다. 버튼을 클릭하면 handleLoadMore 함수가 실행되어 추가 데이터를 가져옵니다.
