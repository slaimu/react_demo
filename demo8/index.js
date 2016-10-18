import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component{
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: 1};
  };
  handleChange(event) {
    this.setState({value: event.target.value});
  };
  
  render() {
    var value = this.state.value;
    return (
        <div>
        <input type='text' value= {value} onChange={this.handleChange} />
        <p>{value}</p>
        </div>
    );
  }
}

ReactDOM.render(
    <MyComponent />,
  document.getElementById('demo8')
);
