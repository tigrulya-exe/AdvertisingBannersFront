/* eslint-disable react-hooks/exhaustive-deps */
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
            })
            .catch(err => {
                props.onError(getError(err))
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
                console.log(err.response?.data?.error)
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
                            <option value="" disabled selected>Choose category</option>
                            {
                                categoryReqNames?.map(
                                    c => <option key={c} value={c}>{c}</option>
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