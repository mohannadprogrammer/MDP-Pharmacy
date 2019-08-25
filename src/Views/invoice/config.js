module.exports={
    form:[
        {
            //input props   
            id :"تقليدي",
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
                "car",
                "ddf",
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
        text: 'product'
      }, {
        dataField: 'quantity',
        text: 'quantity'
      }, {
        dataField: 'price',
        text: 'price'
      }, {
        dataField: 'expiredate',
        text: 'expire date'
      }
    ]}