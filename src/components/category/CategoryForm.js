import FormField from "../core/FormField";

export default function CategoryForm(props) {
    return (
        <>
            <FormField controlId="name" value={props.entity?.name} label="Name"/>
            <FormField controlId="requestName" value={props.entity?.requestName} label="Request name"/>
        </>
    )
}