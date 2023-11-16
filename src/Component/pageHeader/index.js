import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import './pageHeader.css'

export default function PageHeader(props) {
    const [hide, setHide] = useState(false)

   

    return (

        <Card className='rounded-top-0'>
            <Card.Header className='text-end'>
                {/* <Button variant='primary mx-2 vertical-align-center' onClick={()=>props.setPage(1)}>Previous <i className='fa fa-arrow-left mx-1'></i></Button> */}
                <Button variant='primary mx-2 vertical-align-center' onClick={()=>props.setPage(2)}>Next <i className='fa fa-arrow-right mx-1'></i></Button>
                <Button variant='info mx-2'>Submit</Button>
            </Card.Header>
            <Card.Body>
                <form className="container-fluid Header" >
                    <Row className='mb-3'>
                        <Col md={9}>
                            <h4>Header Information</h4>
                            <Row className="mb-3">
                                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                    <Form.Label className='mr-3'>PAGE HEADER</Form.Label><br/>
                                    <Form.Control type="text" placeholder='Page header' />
                                
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                    <Form.Label>CREATEDBY COLNM</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        {/* <option>select </option> */}
                                        <option value="1">CREATEDBY</option>
                                        {/* <option value="2">N</option> */}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                    <Form.Label>DBTYPE</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>select </option>
                                        <option value="1">Oracle</option>
                                        <option value="2">MYSQL</option>

                                    </Form.Select>
                                </Form.Group>
                            
                                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                    <Form.Label>HEADER COL WIDTH</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>select </option>
                                        <option value="1">25%,25%,25%,25%</option>

                                    </Form.Select>
                                </Form.Group>
                            
                                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                    <Form.Label>SCREENTYPE</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>select </option>
                                        <option value="1">GV</option>
                                        <option value="2">GMV</option>
                                        <option value="3">GRF</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                    <Form.Label>SCREEN STYLE</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>select </option>
                                        <option value="1">Grid</option>
                                        <option value="2">Form</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                                    <Form.Label>DBTYPE</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>select </option>
                                        <option value="1">Oracle</option>
                                        <option value="2">MYSQL</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                        </Col>
                        <Col md={3} >
                            <div className="headerFlags mb-0">
                                <div className='d-flex justify-content-between'>
                                    <h4>Header Flags</h4>
                                    <div><a onClick={()=> setHide(!hide)}><i className={hide?'fa fa-minus':'fa fa-plus'}></i></a></div>
                                </div>
                                {hide && (<Row >
                                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label className='mb-0'>ADDTAB FLAG</Form.Label><br/>
                                        <BootstrapSwitchButton
                                            onstyle="info"
                                            checked={false}
                                            width={100}
                                            size='sm'
                                            onlabel='Y'
                                            offlabel='N'
                                        />
                                    
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label className='mb-0'>AUTOAUTHORFLAG</Form.Label><br/>
                                        <BootstrapSwitchButton
                                        onstyle="info"
                                            checked={false}
                                            width={100}
                                            size='sm'
                                            onlabel='Y'
                                            offlabel='N'
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label className='mb-0'>COMBO CONTROL FLAG</Form.Label><br/>
                                        <BootstrapSwitchButton
                                        onstyle="info"
                                            checked={false}
                                            width={100}
                                            size='sm'
                                            onlabel='Y'
                                            offlabel='N'
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label className='mb-0'>DEBUG FLAG</Form.Label><br/>
                                        <BootstrapSwitchButton
                                        onstyle="info"
                                            checked={false}
                                            width={100}
                                            size='sm'
                                            onlabel='Y'
                                            offlabel='N'
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label className='mb-0'>DEFAULT SEARCH</Form.Label><br/>
                                        <BootstrapSwitchButton
                                        onstyle="info"
                                            checked={false}
                                            width={100}
                                            size='sm'
                                            onlabel='Y'
                                            offlabel='N'
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label className='mb-0'>DELETE FLAG</Form.Label><br/>
                                        <BootstrapSwitchButton
                                        onstyle="info"
                                            checked={false}
                                            width={100}
                                            size='sm'
                                            onlabel='Y'
                                            offlabel='N'
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label className='mb-0'>EDIT FLAG</Form.Label><br/>
                                        <BootstrapSwitchButton
                                        onstyle="info"
                                            checked={false}
                                            width={100}
                                            size='sm'
                                            onlabel='Y'
                                            offlabel='N'
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label className='mb-0'>PAGINATION FLAG</Form.Label><br/>
                                        <BootstrapSwitchButton
                                        onstyle="info"
                                            checked={false}
                                            width={100}
                                            size='sm'
                                            onlabel='Y'
                                            offlabel='N'
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label className='mb-0'>PER DELETE FLAG</Form.Label><br/>
                                        <BootstrapSwitchButton
                                        onstyle="info"
                                            checked={false}
                                            width={100}
                                            size='sm'
                                            onlabel='Y'
                                            offlabel='N'
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label className='mb-0'>PAGINATION FLAG</Form.Label><br/>
                                        <BootstrapSwitchButton
                                        onstyle="info"
                                            checked={false}
                                            width={100}
                                            size='sm'
                                            onlabel='Y'
                                            offlabel='N'
                                        />
                                    </Form.Group>
                                </Row>)}
                            </div>
                        </Col>
                    </Row>
                </form>
            </Card.Body>
        </Card>

    );
}
