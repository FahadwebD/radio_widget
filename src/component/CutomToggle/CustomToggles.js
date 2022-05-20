import React from 'react';
import minus from './../../images/minus.png'
import plus from './../../images/plus.png'
import ELO_Time from './../../images/ELO_Time_expanded_album_cover.jpg'
import { Accordion, Card, ListGroup, useAccordionButton } from 'react-bootstrap';




const CustomToggles = ({m , nameOfStation}) => {

  const {name , img, channel} = m


  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
    nameOfStation(name)
    );
  
    return (
      <div  className='d-flex justify-content-between justify-content-center align-items-center' style={{border:'none' , backgroundColor:"#2a2a35"}} onClick={decoratedOnClick}>
        {children}
      </div>
    );
  }


  
  return (
    <div>
       <ListGroup.Item style={{backgroundColor:'#2a2a35' , color:'#a3acbe',overflow:'hidden' }}> <Accordion eventKey="0">
      <Card  style={{backgroundColor:'#2a2a35' , border:'none' , shadow:'none' }}>

      <Accordion.Collapse eventKey="0">
      <Card.Body className="d-flex justify-content-center align-items-center" style={{backgroundColor:"#2a2a35"}}>


<img src={plus} alt="" srcset="" style={{width:'40px' , height:'40px'}}/> <img className="rounded-circle" src={img} alt="" srcset="" style={{width:'150px' , height:'150px' , margin:'15px'}} /> <img src={minus} alt="" srcset="" style={{width:'40px' , height:'40px'}}/>

  </Card.Body>
        </Accordion.Collapse>
 
        <CustomToggle   eventKey="0"><p>{name}</p> <p>{channel}</p></CustomToggle>
        
       
      </Card>
    </Accordion></ListGroup.Item>
   
    </div>
  );
};

export default CustomToggles;