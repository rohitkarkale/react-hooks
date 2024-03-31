import React, { createContext, useContext, useState } from 'react'

const appContext = createContext()

const udata ={
    uname : "Rohit Karkale", email : "rohitkarkale0305@gmail.com", Salary : 234578
}

function ContextApp(props) {
    const[users,setUsers]= useState(udata)
  return (
    <div>
     <appContext.Provider value={users}> 
      <Employee/>
      </appContext.Provider>
    </div>
  )
}

function Employee(prosp) {
    const empContext = useContext(appContext)
    return (
      <div>
        Employee : {empContext.uname}
        <Salary/>
      </div>
    )
  }

  function Salary(props) {
    const salaryContext = useContext(appContext)
    return (
      <div>
        salary : {salaryContext.Salary}
      </div>
    )
  }

export default ContextApp
