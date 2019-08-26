import React, { Component } from "react";
import { FormFeedback } from "reactstrap";
class index extends Component {
  state = {
    invalid: true,
    msg: ""
  };
  //condtio
  validation = info => {
    for (var i = 0; i <= info.length; i++) {
      if (info.condition) {
        this.setState({
          invalid: true,
          msg: info.msg
        });
      }
    }
  };
  componentDidUpdate(){
    this.validation(this.props.info)
  }
  render() {
      
    return <FormFeedback invalid={this.state.invalid} />;
  }
}

export default index;
