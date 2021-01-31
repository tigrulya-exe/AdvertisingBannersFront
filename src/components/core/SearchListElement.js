import {Button} from "react-bootstrap";

export default function SearchListElement(props) {
    return (
        <Button
            variant="light"
            onClick={props.onClick}
        >
            {props.title}
        </Button>
    )
}