import React from "react"
import { Route, Switch } from "react-router-dom"
import Form from "./components/ItemRejesterForm/form"
import Printdata from './DB/DBcomponent'

//it a moduals .
function router() {
    return (
        <Switch>
            <Route to="/" component={Printdata} />
        </Switch>
    )
}
export default router;