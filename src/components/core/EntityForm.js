import styles from "../../css/EntityForm.module.css"
import {Button, Form} from 'react-bootstrap';

export default function EntityForm(props) {
    const saveEntity = () => {
        // TODO
        props.api
            .save(props.entity)
            .then(response => {
                alert("Saved")
                props.refresh()
            })
            .catch(error => {
                alert(error)
            })
    }
    const updateEntity = () => {
        props.api
            .update(props.entity)
            .then(response => {
                // alert("Updated")
                props.refresh()
            })
            .catch(error => {
                alert(error)
            })
    }
    const deleteEntity = () => {
        props.api
            .delete(props.entity.id)
            .then(response => {
                alert("Deleted")
                props.refresh()
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <div className={styles.container}>
            <h5>
                {props.action === Action.CREATE
                    ? `Create new entity` : `Update entity #${props.entity?.id}`}
            </h5>
            <Form onChange={e => props.onFormUpdate({
                [e.target.id]: e.target.value
            })}>
                {props.children}
            </Form>
            <Button
                variant="success"
                onClick={() => {
                    props.action === Action.CREATE ? saveEntity() : updateEntity();
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
    CREATE: "Create",
    UPDATE: "Update"
}