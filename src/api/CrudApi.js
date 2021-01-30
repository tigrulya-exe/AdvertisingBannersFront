import {AXIOS} from "./Axios";

export default class CrudApi {
    constructor(prefix) {
        this.prefix = prefix
    }

    get(id) {
        return AXIOS.get(`${this.prefix}/${id}`)
    }

    search(template) {
        return AXIOS.get(`${this.prefix}/search`, {
            params: {
                template: template
            }
        })
    }

    update(banner) {
        return AXIOS.put(
            this.prefix,
            banner
        )
    }

    save(banner) {
        return AXIOS.post(
            this.prefix,
            banner
        )
    }
}
