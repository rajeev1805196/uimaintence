import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './pageParam.css'

export default function PageParam(props) {
    return (
        <>
            <Card className='rounded-top-0'>
                <Card.Header className='text-end'>
                    <Button variant='primary mx-2 vertical-align-center' onClick={()=>props.setPage(3)}><i className='fa fa-arrow-left mx-1'></i> Previous</Button>
                    {/* <Button variant='primary mx-2 vertical-align-center' onClick={()=>props.setPage(3)}>Next <i className='fa fa-arrow-right mx-1'></i></Button> */}
                    <Button variant='info mx-2'>Submit</Button>
                </Card.Header>
                <Card.Body>
                    <form className="container-fluid mt-3 mb-3 Header" >
                        <h4>Header Url</h4>
                        <hr />
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
                        <hr />
                        <h5>Script</h5>
                        <Row className="mb-3">
                            <Form.Group controlId="formBasicEmail" className="col col-sm-2">
                                <Form.Label>SCRIPT ID</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-2">
                                <Form.Label>TABLE ID</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col col-sm-2">
                                <Form.Label>Col Id</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" className="col col-sm-12 mt-3">
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