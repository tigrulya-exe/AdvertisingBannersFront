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
            <FormField controlId="name" value={props.entity?.name} placeHolder="Name"/>
            <FormField controlId="price" value={props.entity?.price} placeHolder="Price"/>
            <Form.Group controlId="categoryId">
                <Form.Control as="select" value={props.entity?.categoryId}>
                    {
                        categories?.map(c => <option value={c.id}>{c.name}</option>)
                    }
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="content">
                <Form.Control as="textarea" value={props.entity?.content} placeholder="Content"/>
            </Form.Group>
        </>
    )
}