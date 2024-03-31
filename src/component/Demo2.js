import React, { useEffect, useState } from 'react'

function Demo2() {
    const [users,setUser] = useState([])
    const [uname,setuname] = useState('')
    const [email,setemail] = useState('')

    useEffect(()=>{
        localStorage.setItem("gfg",JSON.stringify(users))
     },[users])

    const adduser =(e)=>{
        e.preventDefault()
        setUser([
            ...users,{uname, email}
        ])
        setuname('')
        setemail('')
    }

    const deleteUser=(uname)=>{
        setUser(users.filter((note)=> note.uname !== uname))
     }

     



  return (
    <div className='container my-4'>
    <div className='card text-bg-dark'>
       {users.map((data)=>(
        <div key={data.uname}>
            {data.uname}
            {data.email}
            <button onClick={()=>deleteUser(data.uname)} className='btn btn-danger mx-3'>delete</button>
            
        </div>
       ))}
       <hr></hr>
       <form onSubmit={adduser}>
       <input type='text' placeholder='Enter the text here' className='my-3 form-control'value={uname} onChange={(e)=>setuname(e.target.value)}/>
       <br></br>
       <input type='email' placeholder='Enter the email here ' className='form-control'value={email} onChange={(e)=>setemail(e.target.value)}/>
       <br></br><br></br>
       <button className="btn btn-primary mx-2">Add user</button>
       </form>
    </div>
    </div>
  )
}

export default Demo2
