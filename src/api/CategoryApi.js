import CrudApi from "./CrudApi";

class CategoryApi extends CrudApi {
    constructor() {
        super("/categories");
    }
}

export const categoryApi = new CategoryApi()