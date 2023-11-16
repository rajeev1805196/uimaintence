import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';

export default function Home(props) {
    const [hide, setHide] = useState(false)

   

    return (
    <div className="content-Wrapper">
        <Card className='rounded-top-0 p-5'>
            <Card.Body>
                <h4>This is Home Page</h4>
            </Card.Body>
        </Card>
    </div>
    );
}
