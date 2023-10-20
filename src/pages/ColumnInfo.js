
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Inputdata from "../Components/input"
import SelectData from "../Components/select"
import Form from 'react-bootstrap/Form';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


export default function ColumnInfo() {
    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
    const [ChooseFile, setChooseFile] = useState('')
    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = (e) => {
        //console.log(e.target.value)
        setChooseFile(e.target.value)
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };
    const handleAddClick3 = (e) => {
        //console.log(e.target.value)
        setChooseFile(e.target.value)
        setInputList([  inputList ]);
    };
    return (
        <div className="App">
            <Container>
                <button onClick={handleAddClick3} className="my-3">reset</button>
             
                {inputList.map((x, i) => {
                    return (
                        <Card style={{ width: '100%' }} className="my-3">
                            <Card.Body>
                                <div className=" text-end ">
                                    {inputList.length !== 1 && <button
                                        className="btn p-0"
                                        onClick={() => handleRemoveClick(i)}>Remove</button>}
                                </div>
                                <form className="container mt-3 mb-3">
                                    <Row >
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>CONTROL TYPE</Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option>Text</option>
                                                    <option>Date</option>
                                                    <option>Dcombo</option>
                                                    <option>Combo</option>
                                                    <option>Email</option>
                                                    <option>Number</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>DBCOL NAME</Form.Label>
                                                <Form.Control type="text" placeholder=" " />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
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
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>SHOW HDR LABEL WIDTH</Form.Label>
                                                <Form.Control type="number" placeholder=" " />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>SHOW HDR CONTROL WIDTH</Form.Label>
                                                <Form.Control type="number" placeholder=" " />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>DATATYPE</Form.Label>
                                                <Form.Control type="text" placeholder=" " />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>DATALENGTH</Form.Label>
                                                <Form.Control type="number" placeholder=" " />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>DEFAULT VAL</Form.Label>
                                                <Form.Control type="text" placeholder=" " />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>SHOW LIST SEQ</Form.Label>
                                                <Form.Control type="number" placeholder=" " />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>SHOW LIST COL WIDTH</Form.Label>
                                                <Form.Control type="number" placeholder=" " />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>SHOW LIST LABEL</Form.Label>
                                                <Form.Control type="text" placeholder=" " />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>SHOW LIST COL ALIGN</Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value={"LEFT"}>Left</option>
                                                    <option value={"RIGHT"}>Right</option>
                                                    <option value={"CENTER"}>Center</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>SHOW LIST HEAD ALIGN</Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value={"LEFT"}>Left</option>
                                                    <option value={"RIGHT"}>Right</option>
                                                    <option value={"CENTER"}>Center</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>SORT EXPRESSION</Form.Label>
                                                <Form.Control type="text" placeholder=" " />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>COLUMN URL</Form.Label>
                                                <Form.Control type="text" placeholder=" " />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label>COLUMN COLUMNAME</Form.Label>
                                                <Form.Control type="text" placeholder=" " />
                                            </Form.Group>
                                        </Col>
                                        
                                    </Row>
                                    <Row >
                                        <Col md={12}>
                                            <h3>Flags</h3>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group controlId="formBasicEmail" className="text-start my-2">
                                                <Form.Label className="me-3">DB COL FLAG</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">ENCRYPTION FLAG</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">INSERT FLAG</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">PK FLAG</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">REQUIRED FLAG</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">SEARCH FLG</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">SHOW LIST</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">SHOW HDR</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3"> SEQ FLAG</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">SORT FLAG</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">SEND PARAMETER</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">SESSION VALUE</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">T UPPER</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">UNIQUE FLAG</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">UPDATE FLG</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">XML PARAM SEND</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
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
                                                <Form.Label className="me-3">XLSX COL FLAG</Form.Label>
                                                <BootstrapSwitchButton
                                                        checked={false}
                                                        width={70}
                                                        onlabel='Y'
                                                        offlabel='N'
                                                        // onChange={(checked) => {
                                                        //     this.setState({ isUserAdmin: checked })
                                                        // }}
                                                    />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </form>
                            </Card.Body>
                        </Card>


                    );
                })}

                 <button onClick={handleAddClick}>Add</button>
                {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
            </Container>
        </div> 
    );
}

