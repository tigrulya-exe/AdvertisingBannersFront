import {Button} from "react-bootstrap";

export default function SearchItem(props) {
    return (
        <Button
            variant="light"
            onClick={props.onClick}
        >
            {props.title}
        </Button>
    )
}