import {Route, Switch} from "react-router-dom";
import CategoryPage from "../components/category/CategoryPage";
import BannerPage from "../components/banner/BannerPage";
import {SingleBannerPage} from "../components/banner/SingleBannerPage";

export default function RouteSwitch() {
    return (
        <Switch>
            <Route path="/banners">
                <BannerPage/>
            </Route>
            <Route path="/categories">
                <CategoryPage/>
            </Route>
            <Route path="/">
                <SingleBannerPage/>
            </Route>
        </Switch>
    )
}