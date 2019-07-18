import React from "react"
import {Route,Switch} from "react-router-dom"
import Form from "./components/ItemRejesterForm/form"

//it a moduals .
 function router(){
    return (
        <Switch>
            <Route to ="/" component={Form}/>
        </Switch>
    )
 }
export default router;