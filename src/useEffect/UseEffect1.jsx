import React, { useEffect, useState } from 'react';

const UseEffect1 = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
      document.title = `Chats (${count})`;
    })

 return (
     <>
     <h1> {count} </h1>
     <button onClick={()=> setCount(count+1)} className='btn' >Click</button>
     </>
 )   
}

export default UseEffect1;