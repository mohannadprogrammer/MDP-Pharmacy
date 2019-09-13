import React from "react";
import { Button } from "reactstrap";
import FontAwesome from "react-fontawesome";
const config = {
  columns: [
    {
      dataField: "name",
      text: "Name"
    },
    {
      dataField: "email",
      text: "Email"
    },
    {
      dataField: "address",
      text: "Address"
    },
    {
      dataField: "phone",
      text: "Phone"
    },
    {
      dataField: "updateduser",
      text: "updateduser"
    },
    {
      dataField: "edit",
      text: "Edit"
    },
    {
      text: "Control",
      headerStyle: {
        width: "130px"
      },
      formatter: (cellCnotent, row) => {
        return (
          <div>
            <Button color="primary" >
              {" "}
              <FontAwesome name="edit"  style={{ fontSize: "20px" }} />
            </Button>{" "}
            <Button color="danger">
              {" "}
              <FontAwesome name="trash" style={{ fontSize: "20px" }} />
            </Button>
          </div>
        );
      }
    }
  ]
};
export default config;
