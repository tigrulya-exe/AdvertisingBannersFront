import EntityPage from "../core/EntityPage";
import {bannerApi} from "../../api/BannerApi";
import BannerForm from "./BannerForm";

export default function BannerPage() {
    return (
        <EntityPage
            api={bannerApi}
            title={"Banners"}
            formFields={BannerForm}
        />
    )
}