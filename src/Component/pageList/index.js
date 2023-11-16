import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function PageList(props) {
    const [hide, setHide] = useState(false)

   

    return (
    <div className="content-Wrapper">
        <Card className='rounded-top-0'>
            <Card.Body>
                <h4>Pages' List Come here</h4>
                <ListGroup>
                    <ListGroup.Item className='d-flex justify-content-between'>123 - Page Name <a href='#' className='link text-end'>Edit</a></ListGroup.Item>
                    <ListGroup.Item className='d-flex justify-content-between'>123 - Page Name <a href='#' className='link text-end'>Edit</a></ListGroup.Item>
                    <ListGroup.Item className='d-flex justify-content-between'>123 - Page Name <a href='#' className='link text-end'>Edit</a></ListGroup.Item>
                    <ListGroup.Item className='d-flex justify-content-between'>123 - Page Name <a href='#' className='link text-end'>Edit</a></ListGroup.Item>
                    <ListGroup.Item className='d-flex justify-content-between'>123 - Page Name <a href='#' className='link text-end'>Edit</a></ListGroup.Item>
                    <ListGroup.Item className='d-flex justify-content-between'>123 - Page Name <a href='#' className='link text-end'>Edit</a></ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    </div>
    );
}
