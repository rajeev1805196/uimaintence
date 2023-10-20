import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

export default function HeaderUrl() {
    return (
        <>

            <Card >

                <Card.Body>
                    <form className="container mt-3 mb-3 Header" >
                        <h4>Header Url</h4>
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>CONTROL TYPE</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>select </option>
                                    <option value="1">hyperlink</option>
                                    {/* <option value="2">N</option> */}

                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>LINK LABEL</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>TABLEID</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>URL CONTENT</Form.Label>
                                <Form.Control type="text" placeholder="T|3|A|mpopup|F|1000|400|Y|Y" />
                            </Form.Group>

                        </Row>
                        <hr />
                        <h5>Param</h5>
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>DATE FORMAT</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>DELETE LINK LABEL</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>select </option>
                                    <option value="1">Remove</option>
                                    <option value="2">Delete</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>EDIT LINK LABEL</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>select </option>
                                    <option value="1">Edit</option>
                                    <option value="2">Update</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>SPECIAL CHAR</Form.Label>
                                <Form.Control type="text" placeholder="<>?$%^" />
                            </Form.Group>
                        </Row>
                        <hr />
                        <h5>Script</h5>
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicEmail" className="col col-sm-12">
                                
                                <Form.Control
                                    as="textarea"
                                    placeholder="Write Script"
                                    style={{ height: '100px' }}
                                />
                            </Form.Group>

                        </Row>
                    </form>
                </Card.Body>
            </Card>

        </>
    )
}