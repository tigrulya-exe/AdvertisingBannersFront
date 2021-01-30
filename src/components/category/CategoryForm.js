import {Form} from "react-bootstrap";
import {useEffect} from "react";
import {useIsMount} from "../../util/useIsMount";

export default function CategoryForm(props) {
    const entity = props.entity;
    const isMount = useIsMount()

    useEffect(() => {
        if (!isMount) {
            console.log("jjjjjj");
            entity.name = "";
            entity.requestName = "";
        }
    }, [props.refresh])
    return (
        <>
            <Form.Group controlId="name">
                <Form.Control value={entity?.name} placeholder="Name"/>
            </Form.Group>
            <Form.Group controlId="requestName">
                <Form.Control value={entity?.requestName} placeholder="Request name"/>
            </Form.Group>
        </>
    )
}