
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Inputdata from "../Components/input"
import SelectData from "../Components/select"
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


const headers =[
    "CONTROL TYPE",
    "DBCOL NAME",
    "COLUMN HDR LABEL",
    "SHOW HDR ROWNO",
    "SHOW HDR COLUMNSEQ",
    "SHOW HDR LABEL WIDTH",
    "SHOW HDR CONTROL WIDTH",
    "DATATYPE",
    "DATALENGTH",
    "DEFAULT VAL",
    "SHOW LIST SEQ",
    "SHOW LIST COL WIDTH",
    "SHOW LIST LABEL",
    "SHOW LIST COL ALIGN",
    "SHOW LIST HEAD ALIGN",
    "SORT EXPRESSION",
    "COLUMN URL",
    "COLUMN COLUMNAME",
    "DB COL FLAG",
    "ENCRYPTION FLAG",
    "INSERT FLAG",
    "PK FLAG",
    "REQUIRED FLAG",
    "SEARCH FLG",
    "SHOW LIST",
    "SHOW HDR",
    "SEQ FLAG",
    "SORT FLAG",
    "SEND PARAMETER",
    "SESSION VALUE",
    "T UPPER",
    "UNIQUE FLAG",
    "UPDATE FLG",
    "XML PARAM SEND",
    "XLSX COL FLAG"
];
const calData =[
    "CONTROL_TYPE",
    "DBCOL_NAME",
    "COLUMN_HDR_LABEL",
    "SHOW_HDR_ROWNO",
    "SHOW_HDR_COLUMNSEQ",
    "SHOW_HDR_LABEL_WIDTH",
    "SHOW_HDR_CONTROL_WIDTH",
    "DATATYPE",
    "DATALENGTH",
    "DEFAULT_VAL",
    "SHOW_LIST_SEQ",
    "SHOW_LIST_COL_WIDTH",
    "SHOW_LIST_LABEL",
    "SHOW_LIST_COL_ALIGN",
    "SHOW_LIST_HEAD_ALIGN",
    "SORT_EXPRESSION",
    "COLUMN_URL",
    "COLUMN_COLUMNAME",
    "DB_COL_FLAG",
    "ENCRYPTION_FLAG",
    "INSERT_FLAG",
    "PK_FLAG",
    "REQUIRED_FLAG",
    "SEARCH_FLG",
    "SHOW_LIST",
    "SHOW_HDR",
    "SEQ_FLAG",
    "SORT_FLAG",
    "SEND_PARAMETER",
    "SESSION_VALUE",
    "T_UPPER",
    "UNIQUE_FLAG",
    "UPDATE_FLG",
    "XML_PARAM_SEND",
    "XLSX_COL_FLAG"
];
export default function TextInformation(props) {
    const {
        tableData
    } = props

    return (
        <Card style={{ width: '100%' }} className="my-3">
            <Card.Body>
                    <h1>table</h1>
                    <Table responsive className="column-info">
                        <thead>
                            <tr>
                                {headers.map((data, index) => (
                                    <th key={index} style={{whiteSpace: "nowrap"}}>{data}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData.map((data, index)=>{
                                    console.log(data)
                                    return(<tr className="text-center">
                                        {calData.map((hdata, index) => {
                                            console.log(hdata)
                                            console.log(data[hdata])
                                            return (<td key={index} >{data[hdata]}</td>)
                                        })
                                        }
                                    </tr>)
                                })
                            }
                            {/* <tr>
                                <td>1</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr> */}
                            {/* <tr>
                                <td>2</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                            <tr>
                                <td>3</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr> */}
                        </tbody>
                    </Table>
            </Card.Body>
        </Card>
    );
}

