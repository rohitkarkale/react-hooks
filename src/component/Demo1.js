import React, { useEffect, useState } from 'react' // rfce to get shorcut of funciton syntax

function Demo1() {
    // initialize the state
    const [count, setCount] = useState(0) // usestate takes value of count

    const run = ()=>{
        setCount(count+1)
    }

    const decreament =()=>{
        setCount(count-1)
    }

    useEffect(()=>{
      console.log("called onload")
    },[])

    useEffect(()=>{
      console.log("called on update")
    },[count])

  return (
    <div className='container'>
      <p>The count is {count}</p>
      <button className='btn btn-primary mx-3' onClick={run}>Click to increment</button>
      <button className='btn btn-primary mx-3' onClick={decreament}>Click to decrement</button>
   </div>
  )
}

export default Demo1






