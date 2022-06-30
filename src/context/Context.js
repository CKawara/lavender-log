import React, { createContext, useState } from 'react'

const UserContext = createContext();

const Context = ({children}) => {
    const [user,setUser] = useState(null)
  return(
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
)
}

export {UserContext, Context}