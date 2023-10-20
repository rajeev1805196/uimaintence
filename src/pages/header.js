
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

export default function Header() {


    return (

        <Card >

            <Card.Body>
                <form className="container mt-3 mb-3 Header" >
                    <h4>Header Information</h4>
                    <Row className="mb-3">
                        <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                            <Form.Label className='mr-3'>ADDTAB FLAG</Form.Label><br/>
                            <BootstrapSwitchButton
                             onstyle="info"
                                checked={false}
                                width={100}
                                height={35}
                                onlabel='Y'
                                offlabel='N'
                            />
                          
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                            <Form.Label>AUTOAUTHORFLAG</Form.Label><br/>
                            <BootstrapSwitchButton
                             onstyle="info"
                                checked={false}
                                width={100}
                                height={35}
                                onlabel='Y'
                                offlabel='N'
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                            <Form.Label>COMBO CONTROL FLAG</Form.Label><br/>
                            <BootstrapSwitchButton
                             onstyle="info"
                                checked={false}
                                width={100}
                                height={35}
                                onlabel='Y'
                                offlabel='N'
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                            <Form.Label>CREATEDBY COLNM</Form.Label>
                            <Form.Select aria-label="Default select example">
                                {/* <option>select </option> */}
                                <option value="1">CREATEDBY</option>
                                {/* <option value="2">N</option> */}
                            </Form.Select>
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
                        <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                            <Form.Label>DBTYPE</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>select </option>
                                <option value="1">Oracle</option>
                                <option value="2">MYSQL</option>

                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                            <Form.Label>DEBUG FLAG</Form.Label><br/>
                            <BootstrapSwitchButton
                             onstyle="info"
                                checked={false}
                                width={100}
                                height={35}
                                onlabel='Y'
                                offlabel='N'
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                            <Form.Label>DEFAULT SEARCH</Form.Label><br/>
                            <BootstrapSwitchButton
                             onstyle="info"
                                checked={false}
                                width={100}
                                height={35}
                                onlabel='Y'
                                offlabel='N'
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                            <Form.Label>DELETE FLAG</Form.Label><br/>
                            <BootstrapSwitchButton
                             onstyle="info"
                                checked={false}
                                width={100}
                                height={35}
                                onlabel='Y'
                                offlabel='N'
                            />
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
                        <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                            <Form.Label>EDIT FLAG</Form.Label><br/>
                            <BootstrapSwitchButton
                             onstyle="info"
                                checked={false}
                                width={100}
                                height={35}
                                onlabel='Y'
                                offlabel='N'
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                            <Form.Label>HEADER COL WIDTH</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>select </option>
                                <option value="1">25%,25%,25%,25%</option>

                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                            <Form.Label>PAGINATION FLAG</Form.Label><br/>
                            <BootstrapSwitchButton
                             onstyle="info"
                                checked={false}
                                width={100}
                                height={35}
                                onlabel='Y'
                                offlabel='N'
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                            <Form.Label>PER DELETE FLAG</Form.Label><br/>
                            <BootstrapSwitchButton
                             onstyle="info"
                                checked={false}
                                width={100}
                                height={35}
                                onlabel='Y'
                                offlabel='N'
                            />
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
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
                        <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                            <Form.Label>PAGINATION FLAG</Form.Label><br/>
                            <BootstrapSwitchButton
                             onstyle="info"
                                checked={false}
                                width={200}
                                height={35}
                                onlabel='Y'
                                offlabel='N'
                            />
                        </Form.Group>
                    </Row>

                </form>
            </Card.Body>
        </Card>

    );
}
