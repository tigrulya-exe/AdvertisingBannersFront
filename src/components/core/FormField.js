import {Form} from "react-bootstrap";

export default function FormField(props) {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control value={props.value}/>
            {props.text && (
                <Form.Text muted>
                    {props.text}
                </Form.Text>
            )}
        </Form.Group>
    )
}