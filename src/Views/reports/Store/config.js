module.exports = {
  form: [
    {
      //input props   
      id: "Trande",
      name: "Trande",
      type: "text",
      //label
      label: "Trande name",


    },
    {
      id: "1",
      name: "number",
      type: "number",
      //label
      label: "text",


    },
    {
      id: "exampleCheck",
      name: "email",
      type: "number",
      //label
      label: "Gerneric number",


    }, {
      id: "exampleCheck",
      name: "email",
      type: "select",
      select: [
        "",
        "",
        ""
      ],
      //label
      label: "text",


    },
  ],
  buttons: [


  ],
  columns: [{
    dataField: 'generalname',
    text: 'General Name'
  }, {
    dataField: 'tradname',
    text: 'Trad Name'
  } ,{
    dataField: 'in',
    text: 'in'
  }, {
    dataField: 'out',
    text: 'out'
  }, {
    dataField: 'available',
    text: 'available'
  },
  ]
}