import CrudContainer from "../core/CrudContainer";
import {categoryApi} from "../../api/CategoryApi";
import CategoryForm from "./CategoryForm";

export default function CategoryPage() {
    return (
        <CrudContainer
            api={categoryApi}
            title={"Categories"}
            formGenerator={(entity, refresh) => <CategoryForm entity={entity} refresh={refresh}/>}
        />
    )
}