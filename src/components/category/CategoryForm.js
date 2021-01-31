import {useIsMount} from "../../util/util";
import FormField from "../core/FormField";

export default function CategoryForm(props) {
    const isMount = useIsMount()

    // useEffect(() => {
    //     if (!isMount) {
    //         entity.name = "";
    //         entity.requestName = "";
    //     }
    // }, [props.refresh])
    return (
        <>
            <FormField controlId="name" value={props.entity?.name} placeHolder="Name"/>
            <FormField controlId="requestName" value={props.entity?.requestName} placeHolder="Request name"/>
        </>
    )
}