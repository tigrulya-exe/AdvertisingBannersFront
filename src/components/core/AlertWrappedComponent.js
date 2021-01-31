import styles from "../../css/Alert.module.css"
import {Alert} from "react-bootstrap";
import {useState} from "react";

export default function wrapWithAlert(Component) {
    return function (props) {
        const [isVisible, setVisible] = useState(false)
        const [alertProps, setAlertProps] = useState({
            type: AlertType.SUCCESS,
            message: ""
        })

        const showAlert = (type, message) => {
            setAlertProps({
                type: type,
                message: message
            })
            setVisible(true)
            window.setTimeout(() => {
                setVisible(false)
            }, 4000)
        }

        return (
            <>
                <Component
                    onError={(message) => showAlert(AlertType.ERROR, message)}
                    onSuccess={(message) => showAlert(AlertType.SUCCESS, message)}
                    {...props}/>
                <Alert
                    className={styles.alert}
                    show={isVisible}
                    variant={alertProps.type}>
                    {alertProps.message}
                </Alert>
            </>
        )
    };
};

export const AlertType = {
    SUCCESS: "success",
    ERROR: "danger"
}