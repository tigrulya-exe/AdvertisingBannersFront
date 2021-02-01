import styles from "../../css/SingleBannerPage.module.css"
import {Button, Col, Form, Jumbotron, Row} from "react-bootstrap";
import wrapWithAlert from "../core/AlertWrappedComponent";
import {useEffect, useState} from "react";
import {categoryApi} from "../../api/CategoryApi";
import {bannerApi} from "../../api/BannerApi";
import {getError} from "../../util/util";

function UnwrappedSingleBannerPage(props) {
    const [categoryReqNames, setCategoryReqNames] = useState();
    const [bannerText, setBannerText] = useState("");
    const [currentReqName, setCurrentReqName] = useState();

    useEffect(() => {
        categoryApi.getRequestNames()
            .then(result => {
                setCategoryReqNames(result.data)
                setCurrentReqName((result.data.length > 0) && result.data[0])
            })
            .catch(err => {
                props.onError(err.response?.data?.message)
            })
    }, []);

    const getBanner = () => {
        bannerApi.getByCategory(currentReqName)
            .then(result => {
                if (result.status === 204) {
                    props.onError(`No more banners in category '${currentReqName}'`)
                    setBannerText("")
                    return
                }
                setBannerText(result.data.content)
            })
            .catch(err => {
                props.onError(getError(err))
            })
    }

    return (
        <div className={styles.container}>
            <Jumbotron className={styles.textContainer}>{bannerText}</Jumbotron>
            <Row className={styles.form}>
                <Col sm={10}>
                    <Form.Group controlId="categoryId">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" onChange={e => setCurrentReqName(e.target.value)}>
                            {
                                categoryReqNames?.map(
                                    c => <option value={c}>{c}</option>
                                )
                            }
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col sm={2}>
                    <Button
                        className={styles.button}
                        variant="primary"
                        onClick={getBanner}
                    >
                        Get banner
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export const SingleBannerPage = wrapWithAlert(UnwrappedSingleBannerPage)