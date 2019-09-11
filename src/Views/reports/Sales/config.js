module.exports = {
  home: "Sales",
  form: [
    {
      //input props
      id: "Trande",
      name: "Trande",
      type: "text",
      //label
      label: "Trande name"
    },
    {
      id: "1",
      name: "number",
      type: "number",
      //label
      label: "text"
    },
    {
      id: "exampleCheck",
      name: "email",
      type: "number",
      //label
      label: "Gerneric number"
    },
    {
      id: "exampleCheck",
      name: "email",
      type: "select",
      select: ["", "", ""],
      //label
      label: "text"
    }
  ],
  buttons: [],
  columns: [
    {
      dataField: "invoiceid",
      text: "ID"
    },
    {
      dataField: "type",
      text: "transaction type"
    },
    {
      dataField: "date",
      text: "Date"
    }
  ],
  itemsColumns:[
    {
      dataField: "generalname",
      text: "generalname"
    },
    {
      dataField: "tradname",
      text: "tradname"
    },
    {
      dataField: "quantity",
      text: "Date"
    }
  ]
};
