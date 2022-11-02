import React, { useState } from 'react';

const EventPractice = () => {
  const [username, setUsername] = useState('');
  const [password, setPwd] = useState('');

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangePwd = (e) => setPwd(e.target.value);

  const onClick = (e) => {
    alert('아이디는 :' + username + '비밀번호는 :' + Pwd);
    setUsername(''); /* 리셋 */
    setPwd('');
  };

  const onkeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="이름 입력"
        value={username} /* 변경되면 콘솔에서 출력 */
        onChange={onChangeUsername}
      />
      <input
        type="password"
        name="Pwd"
        value={password}
        onChange={onChangePwd}
        onKeyPress={onkeyPress}
      />
    </div>
  );
};
export default Login;
