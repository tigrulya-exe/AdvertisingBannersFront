import styles from "../../css/EntityPage.module.css"
import SearchSidebar from "./SearchSidebar";
import EntityForm, {Action} from "./EntityForm";
import {useState} from "react";
import {flushFields, getError} from "../../util/util";
import wrapWithAlert from "./AlertWrappedComponent";

function UnwrappedEntityPage(props) {
    const [action, setAction] = useState(Action.CREATE);
    const [entity, setEntity] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const getEntity = id => {
        props.api.get(id)
            .then(result => {
                setEntity(result.data)
                setAction(Action.UPDATE)
            })
            .catch(err => {
                props.onError(getError(err))
            })
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
                refresh={refresh}
                onEntityClick={getEntity}
                onEntityCreate={onEntityCreate}
                {...props}
            />
            <EntityForm
                action={action}
                onFormUpdate={mergeEntity}
                entity={entity}
                {...props}
                onSuccess={(message) => {
                    props.onSuccess(message)
                    setRefresh(!refresh)
                }}
            >
                <FormFields entity={entity} refresh={refresh}/>
            </EntityForm>
        </div>
    )
}

export const EntityPage = wrapWithAlert(UnwrappedEntityPage)