import React,{useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './pageColumn.css'
import ColumnCard from '../columncard';

export default function PageColumn(props) {
    // const [hide, setHide] = useState(false)
    // const [addInfo, setAddInfo] = useState(false)
    const [renderCard, setRenderCard] = useState([0])
    // let renderCard = []
    // useEffect(()=>{
    //     // renderCard.push(1)
    //     setRenderCard(renderCard =>[...renderCard, renderCard.length])
    // },[])

    
   const addColumn = ()=>{
    // renderCard.push(<ColumnCard />)
    setRenderCard(renderCard =>[...renderCard, renderCard.length])
   }

   console.log(renderCard);
    return (
        <Card className='rounded-top-0'>
            <Card.Header className='text-end'>
                <Button variant='primary mx-2 vertical-align-center' onClick={()=>props.setPage(1)}><i className='fa fa-arrow-left mx-1'></i> Previous</Button>
                <Button variant='primary mx-2 vertical-align-center' onClick={()=>props.setPage(3)}>Next <i className='fa fa-arrow-right mx-1'></i></Button>
                <Button variant='info mx-2'>Submit</Button>
            </Card.Header>
            <Card.Body>
                <h4>Column Information</h4>
                {renderCard?.map((a)=>(<ColumnCard />))}
                 
                <div className='text-end'>
                    <Button className='text-center m-3' onClick={()=> addColumn()}>ADD Column</Button>
                </div>
            </Card.Body>
        </Card>
    );
}
