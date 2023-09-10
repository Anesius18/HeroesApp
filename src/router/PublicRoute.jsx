import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useNavigate } from "react-router-dom"

export const PublicRoute = ({children}) => {
  const navigate = useNavigate()
  const {logged} = useContext(AuthContext)
  
  
  return (!logged) 
  ? children
  : <Navigate to={navigate(-1)}/>
}
