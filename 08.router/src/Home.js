import React from 'react';
import { Link } from 'react-router-dom';

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
