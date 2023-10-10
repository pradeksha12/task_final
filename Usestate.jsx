import React from 'react'
import { useState } from 'react'
export default function Usestate() {
    const [value,setValue]=useState(0);
    const update=()=>{
       setValue(value+1);
    };
  return (
    <div>
        <p>Count:{value}</p>
        <button onClick={update}>Count</button>
    </div>
  )
}
