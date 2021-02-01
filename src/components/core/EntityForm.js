import styles from "../../css/EntityForm.module.css"
import {Button, Form} from 'react-bootstrap';
import {getError} from "../../util/util";

export default function EntityForm(props) {
    const handlePromise = (promise, message) => {
        promise.then(res => props.onSuccess(message))
            .catch(err => {
                props.onError(getError(err))
            })
    };

    const saveEntity = () => handlePromise(
        props.api.save(props.entity),
        "Saved"
    );

    const updateEntity = () => handlePromise(
        props.api.update(props.entity),
        "Updated"
    );

    const deleteEntity = () => handlePromise(
        props.api.delete(props.entity?.id),
        "Deleted"
    );

    return (
        <div className={styles.container}>
            <div>
                <h5>
                    {props.action === Action.CREATE
                        ? `Create new entity` : `Update entity #${props.entity?.id}`}
                </h5>
                <hr/>
                <Form className={styles.fields} onChange={e => props.onFormUpdate({
                    [e.target.id]: e.target.value
                })}>
                    {props.children}
                </Form>
            </div>
            <div className={styles.buttons}>
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
        </div>
    )
}

export const Action = {
    CREATE: "Create",
    UPDATE: "Update"
}