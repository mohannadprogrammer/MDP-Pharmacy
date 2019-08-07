module.exports={
    form:[
        {
            //input props   
            id :"username",
            name:"name",
            type:"text",
            //label
            label:"username",
           
            
        },
        {
            id :"pass",
            name:"pass",
            type:"password",
            //label
            label:"password",
            
            
        },
        {
            id :"passconfi",
            name:"passconfi",
            type:"password",
            //label
            label:"password confirm",
            
            
        }
    ],
    buttons:[
       {
           text:"save"
       }

    ],
    columns : [
        {
        dataField: 'username',
        text: 'username'
        },
        {
            dataField: 'email',
        text: 'Email'
      }, {
        dataField: 'jobtitle',
        text: 'job'
      },{
      dataField: 'phone',
        text: 'phone'
      }
    ]}