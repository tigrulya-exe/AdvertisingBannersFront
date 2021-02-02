import FormField from "../core/FormField";
import {Form} from "react-bootstrap";
import {categoryApi} from "../../api/CategoryApi";
import {useEffect, useState} from "react";

export default function BannerForm(props) {
    const [categories, setCategories] = useState()
    useEffect(() => {
        categoryApi.search("")
            .then(result => setCategories(result.data))
    }, [])

    return (
        <>
            <FormField controlId="name"
                       value={props.entity?.name}
                       label="Name"
                       text="Max length: 255 chars"/>
            <FormField controlId="price"
                       value={props.entity?.price}
                       label="Price"
                       text="Max significant digits: 8. Max digits after decimal point: 2."/>
            <Form.Group controlId="categoryId">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" value={props.entity?.categoryId}>
                    <option value="" selected disabled>Choose category</option>
                    {
                        categories?.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
                    }
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="content">
                <Form.Label>Text</Form.Label>
                <Form.Control className="textArea"
                              as="textarea"
                              rows="6"
                              value={props.entity?.content}/>
            </Form.Group>
        </>
    )
}