import React from 'react';
import ReactDOM from 'react-dom';

class Titletype extends React.Component{
  render() {
    return  <div>{this.props.title}</div>;
  }
}

Titletype.propTypes = {
  title: React.PropTypes.string.isRequired
};

Titletype.defaultProps={
  title: 'hello world'
};

ReactDOM.render(
    <Titletype />,
  document.getElementById('demo5')
);
