import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component{
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

ReactDOM.render(
    <MyComponent name="John" />,
  document.getElementById('demo3')
);
