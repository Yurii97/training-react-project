// import React from 'react';
import ReactDOM from 'react-dom';
import paintings from './paiting.json'

const data = paintings[0];

function Painting(props){
  return <div>
  <img src = {props.url} alt={props.title} width="480"/>
  <h2>{data.title}</h2>
  <p>
    Author: <a href={data.author.url}>{props.author.tag}</a>
  </p>
  <p>
    Price: {props.price}, UAH
  </p>
  <p>
  Availability: {props.quantity} 
  </p>
  <button>Add to cart</button>
</div>
}

ReactDOM.render(<Painting />, document.querySelector('#root'))

//=========================================

// const penting = (
// <div>
//   <img src = {data.url} alt={data.title} width="480"/>
//   <h2>{data.title}</h2>
//   <p>
//     Author: <a href={data.author.url}>{data.author.tag}</a>
//   </p>
//   <p>
//     Price: {data.price}, UAH
//   </p>
//   <p>
//   Availability: {data.quantity} 
//   </p>
//   <button>Add to cart</button>
// </div>
// );

// ReactDOM.render(penting, document.querySelector('#root'))

//====================================

// const element1 = <span>Hello</span>;
// const element2 = <span>World</span>;

// // const element = React.createElement('div', {a:5, b:10, children: 'Hello World'});

// const element = (
//   <div>
//     {element1}
//     {element2}
//   </div>
// );

// console.log(element);

// ReactDOM.render(element, document.querySelector('#root'))

//==================================
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


//===========================
