import {Button, Form} from 'react-bootstrap';
import {useState} from "react";
import SearchItem from "./SearchItem";

export default function Sidebar(props) {
    const [searchTemplate, setSearchTemplate] = useState("");
    const [searchResults, setSearchResults] = useState([{id: 1, title: "hello"}]);
    console.log(searchResults)
    return (
        <div className={props.className}>
            <h5>
                {props.title}
            </h5>
            <Form onChange={e => setSearchTemplate(e.target.value)}>
                <Form.Group controlId="email">
                    <Form.Control placeholder="Enter name..."/>
                </Form.Group>
                {
                    searchResults.map(
                        r => (
                            <SearchItem
                                id={r.id}
                                title={r.title}/>
                        ))
                }
            </Form>
        </div>
    )
}