import { useState } from "react"


export const useForm = (initialValue = {}) => {
const [formState, setFormState] = useState(initialValue)

const handleInput = ({target}) => {
   const {name, value} = target
    // setFormState({...formState, [e.target.name]: e.target.value })
    setFormState({...formState, [name]: value })
}
const ResetForm = () => {
  setFormState(initialValue)
}



return {
    ...formState,
    handleInput,
    formState,
    ResetForm, 
}

}