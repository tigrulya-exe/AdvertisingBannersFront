import {Button, Form} from 'react-bootstrap';
import {useEffect, useState} from "react";
import SearchItem from "./SearchItem";
import CrudApi from "../../api/CrudApi";
import styles from "../../css/Sidebar.module.css"

export default function Sidebar(props) {
    const [searchResults, setSearchResults] = useState([]);
    const [template, setTemplate] = useState("");

    useEffect(() => {
        if (!(props.api instanceof CrudApi)) {
            return
        }
        props.api
            .search(template)
            .then(res => {
                setSearchResults(res.data)
            })
            .catch(err =>
                alert(err)
            )
    }, [template, props.refresh])

    return (
        <div className={styles.container}>
            <div>
                <h5>
                    {props.title}
                </h5>
                <Form className={styles.input}
                      onChange={e => setTemplate(e.target.value)}>
                    <Form.Group controlId="email">
                        <Form.Control placeholder="Enter name..."/>
                    </Form.Group>
                </Form>
                <div className={styles.list}>
                    {
                        searchResults.map(
                            r => (
                                <SearchItem
                                    id={r.id}
                                    title={r.name}
                                    onClick={() => props.onEntityClick(r.id)}
                                />
                            ))
                    }
                </div>
            </div>
            <Button
                variant="primary"
                onClick={props.onEntityCreate}>
                Create new
            </Button>
        </div>
    )
}