import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component{
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick() {
    this.refs.myTextInput.focus();
  };

  render() {
    return (
        <div>
        <input type='text' ref='myTextInput' />
        <input type='button' value='Focus' onClick={this.handleClick} />
        </div>
    );
  }
}

ReactDOM.render(
    <MyComponent />,
  document.getElementById('demo6')
);
