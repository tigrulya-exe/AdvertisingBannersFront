import {Button, Form} from 'react-bootstrap';
import {useEffect, useState} from "react";
import SearchListElement from "./SearchListElement";
import CrudApi from "../../api/CrudApi";
import styles from "../../css/SearchSidebar.module.css"

export default function SearchSidebar(props) {
    const [searchResults, setSearchResults] = useState([]);
    const [template, setTemplate] = useState("");

    const mapSearchResults = () => searchResults.map(
        r => (
            <SearchListElement
                id={r.id}
                title={r.name}
                onClick={() => props.onEntityClick && props.onEntityClick(r.id)}
            />
        )
    )

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
                <Form onChange={e => setTemplate(e.target.value)}>
                    <Form.Group controlId="search">
                        <Form.Control placeholder="Enter name..."/>
                    </Form.Group>
                </Form>
                <div className={styles.list}>
                    {mapSearchResults()}
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