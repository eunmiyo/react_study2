import './App.css';

function App() {
  //6. 닫는 태그가 반드시 있어야 한다.
  const name = '리액트'
  return (
    <>
      <div className="react">{name}</div>
      {/* <input></input> */}
      <input />
    </>
  );
}

export default App;
