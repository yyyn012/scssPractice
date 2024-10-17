import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();
  //useNavigate는 기본적으로 페이지를 이동할 때 사용된다.

  // Link는 단순하게 이동만 시켜야 하는 경우,  useNavigate는 특정 이벤트가 실행됐을 때 동작하도록 하거나 추가적인 로직이 필요한 경우에 주로 사용된다.

  const handleSearch = () => {
    console.log(searchKeyword);
    if (searchKeyword) {
      navigate(`/search/${searchKeyword}`);
      setSearchKeyword("");
    }
  };
  // 키워드를 검색하여 그에 맞는 링크로 이동한 후 값을 비워놓는 함수

  return (
    <div id="search">
      <div className="search__inner">
        <label htmlFor="searchInput">
          <span className="ir">검색</span>
        </label>
        <input
          type="search"
          id="searchInput"
          placeholder="검색어를 입력해주세요"
          autoComplete="off"
          className="search__input"
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyDown={(e) => {
            // 사용자가 키보드의 키를 눌렀을 때 이벤트 발생
            if (e.key === "Enter") {
              // 사용자가 엔터 키를 눌렀을 때 handleSearch()함수 실행
              handleSearch();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Search;

// 이 컴포넌트의 목적은 검색 입력 필드를 제공하여 사용자가 입력하고 Enter 키를 누르면 URL의 일부로 검색 키워드를 포함하는 새로운 URL로 이동하는 것입니다. react-router-dom 라이브러리는 클라이언트 사이드 라우팅을 위해 사용되며, 페이지 전체 새로고침 없이 동적으로 URL을 변경할 수 있게 해줍니다

// useState를 사용하여 searchKeyword라는 상태 변수를 생성하고 초기값을 빈 문자열로 설정합니다. 이 변수는 사용자가 입력한 검색어를 저장합니다.

// useNavigate 훅을 사용하여 navigate 함수를 가져옵니다. 이 함수는 React Router의 내비게이션을 처리하는데 사용됩니다.

// handleSearch 함수는 검색 버튼을 클릭하거나 Enter 키를 눌렀을 때 호출됩니다. 먼저, 현재 검색어를 콘솔에 출력합니다(console.log(searchKeyword)). 그런 다음, 검색어가 비어 있지 않은 경우에만 내비게이션을 수행하고 검색어를 초기화합니다.

// JSX에서는 검색 UI를 렌더링합니다. <input> 엘리먼트를 통해 검색어를 입력할 수 있으며, onChange 이벤트 핸들러를 사용하여 입력된 검색어를 searchKeyword 상태에 업데이트합니다. 또한, Enter 키를 눌렀을 때 검색을 실행하도록 onKeyDown 이벤트 핸들러를 설정합니다.

// label 엘리먼트는 스크린 리더 사용자를 위한 접근성을 향상시키기 위해 사용되며, 레이블에는 "검색" 아이콘이 포함됩니다.

// 검색 버튼을 클릭하거나 Enter 키를 누르면 handleSearch 함수가 호출되어 검색을 수행하고, 검색어는 초기화됩니다.
