import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  //16.3이후
  //props로 받아온 값을 state에 동기화를 시킬 수 있음
  //컴포넌트가 마운트 될 때, 업데이트 될때 호출
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps..');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null; //state를 변경할 필요가 없다면 null을 반환
  }

  componentDidMount() {
    console.log('componentDidMount..');
  }

  //return값이 true면 리렌더링 false면 리렌더링하지 않음
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate..');
    console.log(nextProps);
    console.log(nextState);

    //숫자의 마지막 자리가 4면 리렌더링 하지 않음
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  //render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
  componentDidUpdate(prevProps, prevStatem, snapshot) {
    console.log('componentDidUpdate..');
    if (snapshot) {
      console.log('업데이트 되기전 색상:', snapshot);
    }
  }

  //리렌더링이 완료된 후에 실행됨
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate..');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  render() {
    console.log('render');

    const style = { color: this.props.color };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
