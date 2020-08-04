import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

// <App /> 따위의 것들 : component. react는 component와 함께 동작함. component를 사용하고자 할 때.
// 꼭 <App > 형태여야 함. React는 components를 사용해서 HTML처럼 작성하려는 경우에 필요.
// component는 HTML을 반환하는 함수. data를 보여주는 요소들임.


/*
 - JSX = Javascript + HTML. React에 특화된 개념.
 - REACT Application은 한 번에 하나의 component만 rendering 할 수 있음. 따라서 모든 것이 App 안에 들어가야 함.

 
 */
