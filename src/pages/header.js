import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import ColumnInfo from './ColumnInfo';


export default function Header() {
    const [submitH, setSubmitH] = useState(false)

    const onSubmit = (e)=>{
        setSubmitH(true)
    }

    return (<>
        {submitH?
            <ColumnInfo />
        :
        <form className="container mt-3 mb-3">
            <h2>Header Information</h2>
            <Row className="mb-3">
                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                    <Form.Label>ADDTAB_FLAG</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>select </option>
                        <option value="1">Y</option>
                        <option value="2">N</option>
                    
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                    <Form.Label>AUTOAUTHORFLAG</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>select </option>
                        <option value="1">Y</option>
                        <option value="2">N</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                    <Form.Label>COMBO_CONTROL_FLAG</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>select </option>
                        <option value="1">Y</option>
                        <option value="2">N</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                    <Form.Label>CREATEDBY_COLNM</Form.Label>
                    <Form.Select aria-label="Default select example">
                        {/* <option>select </option> */}
                        <option value="1">CREATEDBY</option>
                        <option value="2">N</option>
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
                    <Form.Label>DEBUG_FLAG</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>select </option>
                        <option value="1">Y</option>
                        <option value="2">N</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                    <Form.Label>DEFAULT_SEARCH</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>select </option>
                        <option value="1">Y</option>
                        <option value="2">N</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                    <Form.Label>DELETE_FLAG</Form.Label>
                    <Form.Select aria-label="Default select example">
                        {/* <option>select </option> */}
                        <option value="1">Y</option>
                        <option value="2">N</option>
                    </Form.Select>
                </Form.Group>
               
            </Row>
            <Row className="mb-3">
                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                    <Form.Label>EDIT_FLAG</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>select </option>
                        <option value="1">Y</option>
                        <option value="2">N</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                    <Form.Label>HEADER_COL_WIDTH</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>select </option>
                        <option value="1">25%,25%,25%,25%</option>
                        
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                    <Form.Label>PAGINATION_FLAG</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>select </option>
                        <option value="1">Y</option>
                        <option value="2">N</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="col col-sm-3">
                    <Form.Label>PER_DELETE_FLAG</Form.Label>
                    <Form.Select aria-label="Default select example">
                        {/* <option>select </option> */}
                        <option value="1">Y</option>
                        <option value="2">N</option>
                    </Form.Select>
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
                    <Form.Label>SCREEN_STYLE</Form.Label>
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
                    <Form.Label>PAGINATION_FLAG</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>select </option>
                        <option value="1">Y</option>
                        <option value="2">N</option>
                    </Form.Select>
                </Form.Group>
               
            </Row>
         
            <Row className="mb-3">
                <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                    <button type="submit" className="me-4 btn btn-success btn-lg btn-block" onClick={onSubmit}>Submit</button>
                    <button type="reset" onClick="{resetButton}" className="me-4 btn btn-danger btn-lg btn-block">Cancel</button>
                </Form.Group>
            </Row>
        </form>
        }
        </>
    );
}
