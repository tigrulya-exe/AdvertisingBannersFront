import Sidebar from "./Sidebar";
import styles from "../../css/CrudContainer.module.css"
import DetailsContainer, {Action} from "./DetailsContainer";

export default function CrudContainer(props) {
    return (
        <div className={styles.container}>
            <Sidebar
                className={styles.sidebar}
                title={"Test title"}
            />
            <DetailsContainer
                className={styles.detailsContainer}
                title={"Details title"}
                action={Action.SAVE}
            />
        </div>
    )
}