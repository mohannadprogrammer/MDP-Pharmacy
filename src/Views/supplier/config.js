module.exports={
    form:[
        {
            //input props   
            id :"Trande",
            name:"Trande",
            type:"text",
            //label
            label:"Trande name",
           
            
        },
        {
            id :"1",
            name:"number",
            type:"number",
            //label
            label:"text",
            
            
        },
        {
            id :"exampleCheck",
            name:"email",
            type:"number",
            //label
            label:"Gerneric number",
            
            
        },{
            id :"exampleCheck",
            name:"email",
            type:"select",
            select:[
                "",
                "",
                ""
            ],
            //label
            label:"text",
            
            
        },
    ],
    buttons:[
        

    ],
    columns : [{
        dataField: 'name',
        text: 'name'
      }, {
        dataField: 'email',
        text: 'email'
      }, {
        dataField: 'address',
        text: 'address'
      }, {
        dataField: 'phone',
        text: 'phone'
      }, {
        dataField: 'updateduser',
        text: 'updateduser'
      }, {
        dataField: 'edit',
        text: 'Edit'
      }
    ]}