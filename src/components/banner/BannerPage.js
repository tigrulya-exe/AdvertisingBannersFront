import CrudContainer from "../core/CrudContainer";
import {bannerApi} from "../../api/BannerApi";

export default function BannerPage() {
    return (
        <CrudContainer
            api={bannerApi}
            title={"Banners"}
        >
        </CrudContainer>
    )
}