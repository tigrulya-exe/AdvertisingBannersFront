import {Button, Form} from 'react-bootstrap';

export default function DetailsContainer(props) {
    const saveEntity = () => {
        // TODO
        props.api
            .save(props.entity)
            .then(response => {
                alert("Saved")
            })
            .catch(error => {
                alert(error)
            })
        props.refresh()
    }
    const updateEntity = () => {
        props.api
            .update(props.entity)
            .then(response => {
                // alert("Updated")
            })
            .catch(error => {
                alert(error)
            })
        props.refresh()
    }
    const deleteEntity = () => {
        props.api
            .delete(props.entity.id)
            .then(response => {
                alert("Deleted")
            })
            .catch(error => {
                alert(error)
            })
        props.refresh()
    }

    return (
        <div className={props.className}>
            <h5>
                {props.title}
            </h5>
            <Form onChange={e => props.onFormUpdate({
                [e.target.id]: e.target.value
            })}>
                {props.children}
            </Form>
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