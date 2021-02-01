import CrudApi from "./CrudApi";
import {AXIOS} from "./Axios";

class CategoryApi extends CrudApi {
    constructor() {
        super("/categories");
    }

    getRequestNames() {
        return AXIOS.get(`${this.prefix}/req-names`)
    }
}

export const categoryApi = new CategoryApi()