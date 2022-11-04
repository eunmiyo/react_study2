import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

//http://localhost:3000/about/about

// http://localhost:3000/about?detail=true&mode=1

const About = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 프로젝트</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <p>쿼리스트링: {location.search}</p>
    </div>
  );
};

export default About;
