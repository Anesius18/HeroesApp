import React from 'react'

export const AuthReducer = (state, action) => {
  
  switch (action.type) {
    case 'login':
        return {
            ...state,
            logged: true,
            user: action.payload
        }
    case 'logout':
        return {
            ...state,
            logged: false,
        }
  
    default:
        break;
  }
  

  
}
