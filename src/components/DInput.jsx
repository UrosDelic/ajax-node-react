import React, { Component } from "react";
class DInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <input
        type={this.props.type}
        className='input'
        id={this.props.id}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default DInput;
