import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
class index extends Component {
  render() {
    console.log(this.props.notify);
    const notify = this.props.notify;
    return (
      <div
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <h5>
          <FontAwesome
            name="line-chart"
            style={{
              width: "32px",
              height: "32px",
              fontSize: "26px",
              color: "#CA4970"
            }}
          />{" "}
          <span>Minnmum Level item: {notify.item} </span>
        </h5>

        <div>
          {" "}
          store :{notify.store} 
        </div>
      </div>
    );
  }
}

export default index;
