import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component{
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {liked: false}
  };
  handleClick() {
    this.setState({liked: !this.state.liked});
  };
  
  render() {
    var text = this.state.liked? 'like' : 'Don\'t like';
    return (
        <div onClick={this.handleClick}>
        You {text} this. Click to toggle.
        </div>
    );
  }
}

ReactDOM.render(
    <MyComponent />,
  document.getElementById('demo7')
);
