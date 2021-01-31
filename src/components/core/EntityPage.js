import styles from "../../css/EntityPage.module.css"
import SearchSidebar from "./SearchSidebar";
import EntityForm, {Action} from "./EntityForm";
import {useState} from "react";
import {flushFields} from "../../util/util";

export default function EntityPage(props) {
    const [action, setAction] = useState(Action.CREATE);
    const [entity, setEntity] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const getEntity = id => {
        props.api.get(id)
            .then(result => {
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
        setAction(Action.CREATE);
        setEntity(flushFields(entity));
    }

    const FormFields = props.formFields;
    return (
        <div className={styles.container}>
            <SearchSidebar
                title={props.title}
                api={props.api}
                refresh={refresh}
                onEntityClick={getEntity}
                onEntityCreate={onEntityCreate}
            />
            <EntityForm
                action={action}
                api={props.api}
                onFormUpdate={mergeEntity}
                refresh={() => setRefresh(!refresh)}
                entity={entity}
            >
                <FormFields entity={entity} refresh={refresh}/>
            </EntityForm>
        </div>
    )
}