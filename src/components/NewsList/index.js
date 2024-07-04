import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getNewsList();
  }, []);

  const getNewsList = async () => {
    // 로딩중 : 백엔드의 응답을 기다리는중
    setIsLoading(true);

    // fetch() : url 주소를 그대로 string으로 넣어주면됨
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-06-04&sortBy=publishedAt&apiKey=13697b4b347f4b3ba8b2163635620f60"
    );

    // 데이터가 먼저 로드되고
    const data = await response.json();
    // 그 다음에 콘솔이 찍힘
    console.log(data);
    setNews(data.articles);
    setIsLoading(false);
  };

  return (
    <div>
      {/* 로딩중이 아니면 컨텐츠 불러오기 */}
      {!isLoading && news.map((news) => <NewsItem {...news} />)}
      {/* 로딩중이면 문구 뜨게 */}
      {isLoading && <p>로딩중입니다.</p>}
    </div>
  );
};

export default NewsList;
