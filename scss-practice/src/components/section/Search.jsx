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
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Search;
