import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import power from './../../images/switch.png';
import backArrow from './../../images/back-arrow.png'
import CustomToggles from '../CutomToggle/CustomToggles';
import useChannelList from '../../hooks/useChannelList';


const RadioScreen = () => {
  
    const {list} = useChannelList()
    console.log(list)
     const [playingChannel , setPlayingChannel] = useState()
    const nameOfStation=(name)=>{
        setPlayingChannel(name)
    }
    return (
        <div className='container '>
            <Card className='shadow-lg' style={{ width: '18rem', backgroundColor:'#2a2a35' , position:'relative'}}>
  <Card.Header style={{ backgroundColor:'#eeae61' , border:'none' , padding:'15px'}} className='rounded-top d-flex justify-content-between justify-content-center align-items-center' ><div><img style={{width:'20px' , height:'20px'}} src={backArrow} alt="" srcset="" /></div><p className='m-0' style={{fontWeight:'bolder' , color:'white'}}>STATION</p> <div><img style={{width:'20px' , height:'20px'}} src={power} alt="" srcset="" /></div></Card.Header>
  <ListGroup variant="flush"  >
 
   {
   
   list.map(m=> <CustomToggles
    
    key={m.id}
    m={m} 
    nameOfStation={nameOfStation}
    >
    
    </CustomToggles>)
   
   }
   
  </ListGroup >
  <Card.Header style={{ backgroundColor:'#22222b' , border:'none' , padding:'15px' , marginTop:'-2px' , position:'relative'}} className='rounded-top d-flex flex-column justify-content-between justify-content-center align-items-center' ><div><h6 style={{color:'yellow'}}>Currrently Playing</h6></div><p className='m-0' style={{fontWeight:'bolder' , color:'white'}}>{playingChannel}</p></Card.Header>
</Card>



        </div>
    );
};

export default RadioScreen;