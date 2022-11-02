import React, { useState } from 'react';

const EventPractice = () => {
  // setUsername, setMessage : useState값을 바꿔줌
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  // username의 state값을 바꾼다
  const onChangeUsername = (e) => setUsername(e.target.value);
  // message의 state값을 바꾼다
  const onChangeMassage = (e) => setMessage(e.target.value);

  const onClick = (e) => {
    alert(username + ':' + message);
    setUsername(''); /* 리셋 */
    setMessage('');
  };
  const onkeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="이름 입력"
        value={username} /* 변경되면 콘솔에서 출력 */
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        value={message}
        onChange={onChangeMassage}
        onKeyPress={onkeyPress}
      />
      <button onClick={onkeyPress}>확인</button>
    </div>
  );
};

export default EventPractice;
