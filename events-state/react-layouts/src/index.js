import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// const products = [{
//   name: "Nike Metcon 2",
//   price: "130",
//   color: "red",
//   img: "./i/1.jpg"
// }, {
//   name: "Nike Metcon 2",
//   price: "130",
//   color: "green",
//   img: "./i/2.jpg"
// }, {
//   name: "Nike Metcon 2",
//   price: "130",
//   color: "blue",
//   img: "./i/3.jpg"
// }, {
//   name: "Nike Metcon 2",
//   price: "130",
//   color: "black",
//   img: "./i/4.jpg"
// }, {
//   name: "Nike free run",
//   price: "170",
//   color: "black",
//   img: "./i/7.jpg"
// }, {
//   name: "Nike Metcon 3",
//   price: "150",
//   color: "green",
//   img: "./i/5.jpg"
// }];

// const cardsLayout = {
//   xs: 12,
//   sm: 8,
//   md: 6,
//   lg: 4
// };

// ReactDOM.render(
//   <App layout={cardsLayout} products={products} />,
//   document.getElementById('root')
// );