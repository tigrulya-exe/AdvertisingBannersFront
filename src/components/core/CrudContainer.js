import Sidebar from "./Sidebar";
import styles from "../../css/CrudContainer.module.css"
import DetailsContainer, {Action} from "./DetailsContainer";
import {useState} from "react";

export default function CrudContainer(props) {
    const [action, setAction] = useState(Action.SAVE);
    const [entity, setEntity] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const getEntity = id => {
        props.api.get(id)
            .then(result => {
                console.log(result)
                setEntity(result.data)
                setAction(Action.UPDATE)
            })
            .catch(err => alert(err))
    }

    const mergeEntity = newEntity => {
        setEntity({
            ...entity,
            ...newEntity
        })
    }

    const onEntityCreate = () => {
        setAction(Action.SAVE)
        setRefresh(!refresh)
        // TODO
    }
    return (
        <div className={styles.container}>
            <Sidebar
                title={props.title}
                api={props.api}
                refresh={refresh}
                onEntityClick={getEntity}
                onEntityCreate={onEntityCreate}
            />
            <DetailsContainer
                className={styles.detailsContainer}
                title={"Details title"}
                action={action}
                api={props.api}
                onFormUpdate={mergeEntity}
                refresh={() => setRefresh(!refresh)}
                entity={entity}
            >
                {props.formGenerator(entity, refresh)}
            </DetailsContainer>
        </div>
    )
}