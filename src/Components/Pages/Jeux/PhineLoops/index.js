import React, { Component } from "react";

class PhineLoops extends Component {
  constructor(props) {
    super(props);
    let rows = props.rows;
    let cols = props.cols;
    let Tmp = [];
    Array(rows).forEach((value, index) => {
      Tmp.push([...Array(cols).keys()]);
    });
    this.state = { data: Tmp };
  }

  render() {
    return <>test</>;
  }
}

export default PhineLoops;
