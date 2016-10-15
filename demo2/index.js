import React from 'react';
import ReactDOM from 'react-dom';

var array = [
  1,
  2,
  3,
    <h1>demo2</h1>,
    <h1>demo2</h1>
];


ReactDOM.render(
    <div>
    {
      array.map(function (item) {
        if (Number.isInteger(item)) {
          return <h1>number {item}</h1>;
        }
        return item;
      })
    }
  </div>,
  document.getElementById('demo2'));
