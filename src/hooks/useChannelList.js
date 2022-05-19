import { useEffect, useState } from "react"

const useChannelList = () =>{

 
    const [list , setList] = useState([])

    useEffect(()=>{
        fetch('./station.JSON')
    .then(res => res.json())
    .then(data => setList(data))

    } ,[])


   
    return {list}

}

export default useChannelList;