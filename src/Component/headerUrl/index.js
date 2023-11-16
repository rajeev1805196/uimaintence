import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import './headerUrl.css'

export default function HeaderUrl(props) {
    return (
        <>
            <Card className='rounded-top-0'>
                <Card.Header className='text-end'>
                    <Button variant='primary mx-2 vertical-align-center' onClick={()=>props.setPage(2)}><i className='fa fa-arrow-left mx-1'></i> Previous</Button>
                    <Button variant='primary mx-2 vertical-align-center' onClick={()=>props.setPage(4)}>Next <i className='fa fa-arrow-right mx-1'></i></Button>
                    <Button variant='info mx-2'>Submit</Button>
                </Card.Header>
                <Card.Body>
                    <form className="container-fluid mt-3 mb-3 Header" >
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
                        </Row>
                        <hr />
                        <Row className='mb-3'>
                            <h4>Header Url Content</h4>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>Url Type</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>select </option>
                                    <option value="1">T</option>
                                    <option value="2">C</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>Table Id</Form.Label>
                                <Form.Control type="text" placeholder="T|3|A|mpopup|F|1000|400|Y|Y" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>Mode</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>select </option>
                                    <option value="A">Add</option>
                                    <option value="E">Edit</option>
                                    <option value="V">View</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>Screen</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>select </option>
                                    <option value="1">popup</option>
                                    <option value="2">mpopup</option>
                                    <option value="2">self</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>Form Type</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>select </option>
                                    <option value="1">F</option>
                                    <option value="2">S</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>width</Form.Label>
                                <Form.Control type="text" placeholder="1000" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>Height</Form.Label>
                                <Form.Control type="text" placeholder="400" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3 d-flex align-items-end justify-content-between">
                                <Form.Label>Header</Form.Label>
                                <BootstrapSwitchButton
                                    onstyle="info"
                                        checked={false}
                                        width={50}
                                        height={35}
                                        onlabel='Y'
                                        offlabel='N'
                                    />
                            
                                <Form.Label>Side Bar</Form.Label>
                                <BootstrapSwitchButton
                                    onstyle="info"
                                        checked={false}
                                        width={50}
                                        height={35}
                                        onlabel='Y'
                                        offlabel='N'
                                    />
                            </Form.Group>
                        </Row>
                        {/* <hr />
                        <h5>Param</h5>
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                <Form.Label>DATE FORMAT</Form.Label>
                                <Form.Control type="text" />
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
                        <hr /> */}
                        {/* <h5>Script</h5>
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicEmail" className="col col-sm-12">
                                
                                <Form.Control
                                    as="textarea"
                                    placeholder="Write Script"
                                    style={{ height: '100px' }}
                                />
                            </Form.Group>

                        </Row> */}
                    </form>
                </Card.Body>
            </Card>

        </>
    )
}