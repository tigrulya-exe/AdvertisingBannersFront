import CrudApi from "./CrudApi";
import {AXIOS} from "./Axios";

class BannerApi extends CrudApi {
    constructor() {
        super("/banners");
    }

    getByCategory(categoryReqName) {
        return AXIOS.get(this.prefix, {
            params: {
                category: categoryReqName
            }
        })
    }
}

export const bannerApi = new BannerApi()