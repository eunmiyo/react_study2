import React, {Component} from 'react';
import './App.css';
import MyComponent from './MyComponent'

const App = () => {
  // return <MyComponent />
  return <MyComponent name="react" forNumber={1}>리액트</MyComponent>
}

export default App;
