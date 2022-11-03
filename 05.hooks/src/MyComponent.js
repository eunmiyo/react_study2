import React, { useRef } from 'react';

const MyComponent = () => {
  const id = useRef(1); //로컬변수, 렌더링 되지 않음
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  return <div>배불러힝</div>;
};

export default MyComponent;
