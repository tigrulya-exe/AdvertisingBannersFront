import {Form} from "react-bootstrap";

export default function FormField(props) {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control value={props.value}/>
        </Form.Group>
    )
}