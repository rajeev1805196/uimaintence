
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Inputdata from "../Components/input"
import SelectData from "../Components/select"
import Form from 'react-bootstrap/Form';
export default function TextInformation() {
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
            {<button onClick={handleAddClick3}>Add</button>}
             
                {inputList.map((x, i) => {
                    return (
                        <Card style={{ width: '100%' }}>
                           
                            <Card.Body>

                                <Row >
                                    <Col md={4}>
                                        <Form.Select >
                                            <option disabled>Select</option>
                                            <option>Text</option>
                                            <option>select</option>
                                            <option>Dcombo</option>
                                            <option>Combo</option>
                                        </Form.Select>

                                    </Col>
                                    <Col md={4}>

                                        <Inputdata />
                                    </Col>
                                    <Col md={4}>
                                        <div className="btn-box">
                                            {inputList.length !== 1 && <button
                                                className="mr10"
                                                onClick={() => handleRemoveClick(i)}>Remove</button>}
                                            {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}

                                        </div>
                                    </Col>
                                </Row>




                            </Card.Body>
                            <br />
                        </Card>


                    );
                })}

                {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
            </Container >
        </div >
    );
}

