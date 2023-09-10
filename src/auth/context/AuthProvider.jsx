import { useEffect, useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { AuthReducer } from "./AuthReducer"

export const AuthProvider = ({children}) => {
  
  const init = () => {
    const user = JSON.parse(localStorage.getItem('user')) 

    return {
      logged: !!user,
      user: user,
    }
  }
const [state, dispatch] = useReducer(AuthReducer, {}, init)
const  login = (name) => {

  const user ={id:'ABC', name}
  const action = {type: 'login',payload:user}
  localStorage.setItem('user', JSON.stringify(user) )
  dispatch(action)
}

const logout = () => {
const userRemove = localStorage.removeItem('user')
dispatch({type: 'logout', payload: userRemove })
}


  return (
    <AuthContext.Provider value={{
      ...state, login: login, logout: logout
      }}>
        {children}
        </AuthContext.Provider>
  )
}
