import { useNavigate } from "react-router-dom"

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export const Login = () => {

  const {login} = useContext(AuthContext)
const navigate = useNavigate()

const onLogin = () => {

  const lastPath = localStorage.getItem('lastPath') || '/'

  login('Anneuri')

  navigate(lastPath, {
    replace: true
  })
}

  return (
    <div className="container mt-5 card-img animate__animated animate__zoomIn"
     
  >
      <h1>Login</h1>
    <hr/>

    <button
    className="btn btn-primary"
    onClick={onLogin}
    >Login
    </button>
    </div>
  )
}
