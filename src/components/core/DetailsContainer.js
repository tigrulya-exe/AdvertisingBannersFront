import {Button} from 'react-bootstrap';
import {useState} from "react";

export default function DetailsContainer(props) {
    const [searchTemplate, setSearchTemplate] = useState("");
    const [searchResults, setSearchResults] = useState([{id: 1, title: "hello"}]);
    console.log(searchResults)

    const saveEntity = () => {
    }
    const updateEntity = () => {
    }
    const deleteEntity = () => {
    }

    return (
        <div className={props.className}>
            <h5>
                {props.title}
            </h5>
            {props.children}
            <Button
                variant="success"
                onClick={() => {
                    props.action === Action.SAVE ? saveEntity() : updateEntity();
                }}>
                Save
            </Button>
            <Button
                variant="danger"
                onClick={deleteEntity}>
                Delete
            </Button>
        </div>
    )
}

export const Action = {
    SAVE: 0,
    UPDATE: 1
}