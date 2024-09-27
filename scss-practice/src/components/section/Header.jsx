import React from "react";
import { headerMenus, searchKeyword, snsLink } from "../../data/header";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(0);

  return (
    <header id="header" role="banner">
      <h1 className="header__logo">
        <a href="/">
          <em aria-hidden="true"></em>
          <span>
            webs
            <br />
            youtube
          </span>
        </a>
      </h1>

      <nav className="header__menu">
        <ul className="menu">
          {headerMenus.map((menu, key) => (
            <li
              key={key}
              className={location.pathname === menu.src ? "active" : ""}
            >
              <Link to={menu.src}>
                {/*menu의 소스코드를 하나하나 입력하지 않아도 map()의 기능 덕분에 자동으로 입력된다.*/}
                {menu.icon}
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="keyword">
          {searchKeyword.map((keyword, key) => (
            <li
              key={key}
              className={location.pathname === keyword.src ? "active" : ""}
            >
              <Link to={keyword.src}>{keyword.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header__sns">
        <ul>
          {snsLink.map((sns, key) => (
            <li key={key}>
              <a
                href={sns.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sns.title}
              >
                <span>{sns.icon}</span>
              </a>
              {/* 내부 페이지 이동 시 <Link>를, 외부 페이지 이동 시 <a>를 사용한다. */}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
