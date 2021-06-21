import React, { Component } from "react";

class DTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <textarea
        hidden={this.props.hidden}
        readOnly={this.props.readOnly}
        value={this.props.value}
        className='textArea'
        id={this.props.id}
      ></textarea>
    );
  }
}

export default DTextArea;
