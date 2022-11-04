import './App.css';

function App() {
  //4. 인라인 스타일을 사용한다.
  const name = '리액트'
  const style = {
    backgroundColor: 'red',
    color: 'black',
    fontSize: '48px'
  }
  return (  
    <div style={style}>{name}</div>
  );
}

export default App;
