import {Route, Switch} from "react-router-dom";
import CrudContainer from "../components/core/CrudContainer";

export default function RouteSwitch() {
    return (
        <Switch>
            <Route path="/banners">

            </Route>
            <Route path="/categories">
                <CrudContainer title="Categories"/>
            </Route>
        </Switch>
    )
}