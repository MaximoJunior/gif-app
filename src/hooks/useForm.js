import { useState } from "react"

export const useForm = ( initialState = { } ) => {
    
    const [state, setState] = useState( initialState );
     
    const handleInputChange = (e) => {

        const { value, name } = e.target;

        setState({
            ...state,
            [name]: value
        })
    }

    const resetInput = () => {
        setState( initialState )
    } 

    return { state, handleInputChange, resetInput }
}
