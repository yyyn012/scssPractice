import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// 리액트에서 라우터 사용 시 파라미터 정보를 가져와 활용하고 싶다면 useParams를 사용하면 된다.

// useParams란 react-router-dom에서 제공하는 Hooks 중 하나로 파라미터 값을 URL을 통해서 넘겨받은 페이지에서 사용할 수 있도록 해준다.

// 예를 들어, 특정 제품 리스트에서 제품 클릭 시  해당 제품의 세부 정보를 나타내는 페이지로 이동하고 싶다면 제품의 ID 값을 URL로 넘겨 세부 페이지에서 그 ID 값에 해당하는 제품만 보여줄 수 있다.

import Main from "../components/section/Main";
import VideoSearch from "../components/videos/VideoSearch";
import { fetchFromAPI } from "../utils/api";

const Search = () => {
  const { searchId } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchId}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchId]); // searId, 즉 파라미터가 변화할 때마다 useEffect가 실행됨

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

// useParams 훅을 사용하여 useParams정보(현재 경로의 파라미터 정보)를 가져와 searchId라는 변수에 저장한다. 이 파라미터는 사용자가 입력한 검색어를 나타냅니다.

// fetch() : 특정 정보가 필요한 클라이언트가 존재했을 때, fetch()메소드로 서버에 HTTP 통신으로 요청(request)을 보내고, 정보를 응답(response)받을 수 있다.

// fetch - 1) 요청 (request) : fetch()는 아래와 같이 첫번째 인자에는 필수적으로 데이터를 요청할 API 주소를 적고, 두번째 인자부터는 요청의 옵션 값들로 필요에 따라 객체 형태로 넣을 수 있다.

// fetch("API주소",{
// 	method: "POST",
// 	headers: {"key" : "value"},
// 	body: JSON.stringfy({'key' : 'value'})
// })

// 첫번째 인자인 API주소는 서버(백엔드)에서 받는다.

// 두번째 인자인 body( - 선택사항)이 있는 경우는 서버에 보낼 정보가 있는 경우이다. 이 경우에는 요청을 body에 담아서 보내며, JSON.stringify라는 메서드에 담아 보내야 한다.(JSON으로 형 변환을 해서 보내야 하기 때문)

// fetch - 2) 응답(reponse)에는 주로 promise객체의 then()메서드와 catch()메서드가 사용된다.

// then()메서드는 비동기 작업이 성공했을 때 실행할 콜백 함수를 등록하는 데 사용된다.
// 비동기 작업이 완료되면 해당 작업의 결과값을 인자로 받아 실행한다.
//성공적인 작업 이후에 실행할 로직을 정의할 수 있다.
// then()의 첫번째 인자는 response로 받는다.

// catch()메서드는 비동기 작업에서 에러가 발생했을 때 실행할 콜백함수를 등록하는 데 사용된다.
//catch()로 에러 처리 로직을 정의할 수 있으며 then()체인 내에서 에러가 발생하면 catch()블록으로 이동하여 에러를 처리한다.
