import {Button} from "react-bootstrap";
import { useLocation, useHistory } from 'react-router-dom'

    export default function SearchItem(props) {
    const location = useLocation();
    const history = useHistory();

    return (
        <Button
            variant="light"
            onClick={() => history.push(`${location.pathname}/${props.id}`)}
        >
            {props.title}
        </Button>
    )
}