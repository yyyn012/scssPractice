import axios from "axios";

export const BASE_URL =
  "https://youtube-data-api-v33.p.rapidapi.com/i18nRegions?key=AIzaS9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6a7b8c9dTr";

const options = {
  params: {
    maxResults: 48,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-data-api-v33.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data);
  return data;
};

//Axios는 JavaScript 및 Node.js에서 사용할 수 있는 라이브러리로, HTTP 요청을 간단하게 만들고 처리하는데 도움을 주는 것이 주요 목적입니다. 주로 클라이언트 측 및 서버 측 개발에서 사용되며, 다음과 같은 주요 특징을 가지고 있습니다

// 간편한 HTTP 요청: Axios는 HTTP GET, POST, PUT, DELETE 등의 다양한 요청 메서드를 간편하게 만들어주며, 다른 HTTP 클라이언트보다 사용하기 쉽습니다.

//Promise 기반: Axios는 Promise를 기반으로 동작하기 때문에 비동기적인 작업을 처리하기 용이합니다. 이로써 비동기 코드를 관리하고 오류 처리를 쉽게 할 수 있습니다.

// 요청 및 응답 인터셉터: Axios는 요청과 응답을 인터셉트(intercept)하여 필요한 처리를 수행할 수 있게 해줍니다. 예를 들어, 요청 전에 인증 토큰을 추가하거나 응답을 처리하기 전에 데이터를 변환할 수 있습니다.

//자동 데이터 변환: Axios는 JSON 데이터를 자동으로 JavaScript 객체로 변환해주거나 반대로 JavaScript 객체를 JSON 문자열로 변환해주는 편리한 기능을 제공합니다.

//HTTP 요청의 취소: Axios는 HTTP 요청을 중간에 취소할 수 있는 기능을 제공하여 불필요한 네트워크 요청을 방지할 수 있습니다.

//서버 및 브라우저 환경에서 사용 가능: Axios는 브라우저와 Node.js 환경에서 모두 사용 가능하므로, 클라이언트 측 및 서버 측 코드에서 동일한 코드를 사용할 수 있습니다.

//안전한 CSRF(Cross-Site Request Forgery) 보호: Axios는 기본적으로 CSRF를 방어하기 위한 설정을 포함하고 있어, 보안적인 측면에서도 강력한 도구로 사용됩니다.
