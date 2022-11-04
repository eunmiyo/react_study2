import React from 'react';
import { Link } from 'react-router-dom';

//http://localhost:3000/teste?test=111&etet=22

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>홈 입니다.</p>
      <Link to="/about">소개</Link>
    </div>
  );
};

export default Home;
