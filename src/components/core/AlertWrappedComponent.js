import styles from "../../css/Alert.module.css"
import {Alert} from "react-bootstrap";
import {useState} from "react";

const ALERT_TIMEOUT = 4000;

export default function wrapWithAlert(Component) {
    return function (props) {
        const [isVisible, setVisible] = useState(false)
        const [alertProps, setAlertProps] = useState({
            type: AlertType.SUCCESS,
            message: "",
            timerId: 0
        })

        const showAlert = (type, message) => {
            alertProps.timerId && clearTimeout(alertProps.timerId)
            const timerId = window.setTimeout(() => {
                setVisible(false)
            }, ALERT_TIMEOUT)
            setAlertProps({
                type: type,
                message: message,
                timerId: timerId
            })
            setVisible(true)
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