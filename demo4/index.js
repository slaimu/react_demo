import React from 'react';
import ReactDOM from 'react-dom';

class Nodelist extends React.Component{
  render() {
    return (
      <ul>
        {
          React.Children.map(
            this.props.children, function (child) {
              return <li>{child}</li>;
            })
        }
      </ul>
    );
  }
}

ReactDOM.render(
  <Nodelist>
    <span>hello</span>
    <span>world</span>
  </Nodelist>,
  document.getElementById('demo4')
);
