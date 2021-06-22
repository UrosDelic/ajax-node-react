import React, { Component } from "react";

class DTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <textarea
        className='textArea'
        hidden={this.props.hidden}
        readOnly={this.props.readOnly}
        value={this.props.value}
        id={this.props.id}
      ></textarea>
    );
  }
}

export default DTextArea;
