import {Form} from "react-bootstrap";

export default function FormField(props) {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Control value={props.value} placeholder={props.placeHolder}/>
        </Form.Group>
    )
}