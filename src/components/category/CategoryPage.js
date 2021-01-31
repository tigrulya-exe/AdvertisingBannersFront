import {EntityPage} from "../core/EntityPage";
import {categoryApi} from "../../api/CategoryApi";
import CategoryForm from "./CategoryForm";

export default function CategoryPage() {
    return (
        <EntityPage
            api={categoryApi}
            title={"Categories"}
            formFields={CategoryForm}
        />
    )
}