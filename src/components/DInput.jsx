import React, { Component } from "react";
class DInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <input
        className='input'
        type={this.props.type}
        id={this.props.id}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default DInput;
