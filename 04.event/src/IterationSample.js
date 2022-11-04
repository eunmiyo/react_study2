import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    // names 초기값
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '겨울' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);
  // 입력된 값으로 업데이트를 시켜줌
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    // concat: 두개의 배열을 합쳐줌
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    console.log(nextNames);
    setNames(nextNames);
    setInputText('');
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
