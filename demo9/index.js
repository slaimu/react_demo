import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component{
  constructor() {
    super();
    this.state = {opacity: 1};
  };
  componentDidMount() {
    var that = this;
    setInterval(function () {
      var opacity = that.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      that.setState({
        opacity: opacity
      });
    }, 100);
  };
  render() {
    return (
        <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
}


ReactDOM.render(
    <MyComponent name = "world"/>,
  document.getElementById('demo9')
);
