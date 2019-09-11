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
            name="recycle"
            style={{
              width: "32px",
              height: "32px",
              fontSize: "26px",
              color: "#A49700"
            }}
          />{" "}
          <span>expiered item: {notify.item} </span>
        </h5>

        <div>
          {" "}
          store :{notify.store} patch: {notify.patch}
        </div>
      </div>
    );
  }
}

export default index;
