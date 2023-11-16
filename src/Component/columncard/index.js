import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
// import './pageColumn.css'

export default function ColumnCard(props) {
    const [hide, setHide] = useState(false)
    const [addInfo, setAddInfo] = useState(false)

   

    return (
        <Card className='my-3'>
            <Card.Body>
                <form className="container-fluid Header" >
                    <Row>
                        <Col md={3}>
                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                <Form.Label>Control Type</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Text</option>
                                    <option>select</option>
                                    <option>Dcombo</option>
                                    <option>Combo</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                <Form.Label>Input Label</Form.Label>
                                <Form.Control type="text" placeholder="Column HDR Label" />
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                <Form.Label>Row No</Form.Label>
                                <Form.Control type="number" placeholder="SHOW HDR ROWNO" />
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                <Form.Label>Column Seq</Form.Label>
                                <Form.Control type="number" placeholder="SHOW HDR COLUMNSEQ" />
                            </Form.Group>
                        </Col>
                        <Col md={1} className='align-items-center d-flex justify-content-end'>
                            <a className='text-end link mx-2'><i className='fa fa-trash'></i></a>
                            <a className='link pointer mx-2' onClick={()=> setAddInfo(!addInfo)}><i className={addInfo?'fa fa-minus':'fa fa-plus'}></i></a>
                        </Col>
                    </Row>
                    {addInfo && <Row className='mb-3'>
                        <hr/>
                        <Col md={6}>
                            <Row>
                                {/* <Col md={3}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>CONTROL TYPE</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Text</option>
                                            <option>select</option>
                                            <option>Dcombo</option>
                                            <option>Combo</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col> */}
                                <Col md={4}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>DBCOL NAME</Form.Label>
                                        <Form.Control type="text" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                {/* <Col md={3}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>Column HDR Label</Form.Label>
                                        <Form.Control type="text" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>SHOW HDR ROWNO</Form.Label>
                                        <Form.Control type="number" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>SHOW HDR COLUMNSEQ</Form.Label>
                                        <Form.Control type="number" placeholder=" " />
                                    </Form.Group>
                                </Col> */}
                                <Col md={4}> 
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>SHOW HDR LABEL WIDTH</Form.Label>
                                        <Form.Control type="number" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>SHOW HDR CONTROL WIDTH</Form.Label>
                                        <Form.Control type="number" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>DATATYPE</Form.Label>
                                        <Form.Control type="text" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>DATALENGTH</Form.Label>
                                        <Form.Control type="number" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>DEFAULT VAL</Form.Label>
                                        <Form.Control type="text" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>SHOW LIST SEQ</Form.Label>
                                        <Form.Control type="number" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>SHOW LIST COL WIDTH</Form.Label>
                                        <Form.Control type="number" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>SHOW LIST LABEL</Form.Label>
                                        <Form.Control type="text" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>SHOW LIST COL ALIGN</Form.Label>
                                        <Form.Control type="text" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>SHOW LIST HEAD ALIGN</Form.Label>
                                        <Form.Control type="text" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>SORT EXPRESSION</Form.Label>
                                        <Form.Control type="text" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>COLUMN URL</Form.Label>
                                        <Form.Control type="text" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                        <Form.Label>COLUMN COLUMNAME</Form.Label>
                                        <Form.Control type="text" placeholder=" " />
                                    </Form.Group>
                                </Col>
                                
                            </Row>
                        </Col>
                        <Col md={6} >
                            <div className="headerFlags mb-0">
                                <div className='d-flex justify-content-between' onClick={()=> setHide(!hide)}>
                                    <h4>Column Flags</h4>
                                    <div><a className='link'><i className={hide?'fa fa-minus':'fa fa-plus'}></i></a></div>
                                </div>
                                {hide && (<>
                                    <Row>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="mb-0">DB COL FLAG</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                    checked={false}
                                                    width={70}
                                                    size='sm'
                                                    onlabel='Y'
                                                    offlabel='N'
                                                    // onChange={(checked) => {
                                                    //     this.setState({ isUserAdmin: checked })
                                                    // }}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">ENCRYPTION FLAG</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">INSERT FLAG</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">PK FLAG</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">REQUIRED FLAG</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">SEARCH FLG</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">SHOW LIST</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">SHOW HDR</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3"> SEQ FLAG</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">SORT FLAG</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">SEND PARAMETER</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">SESSION VALUE</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">T UPPER</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">UNIQUE FLAG</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">UPDATE FLG</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">XML PARAM SEND</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                        
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">XLSX COL FLAG</Form.Label><br/>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        size='sm'
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </>)}
                            </div>
                        </Col>
                    </Row>}
                </form>
            </Card.Body>
        </Card>
    );
}
