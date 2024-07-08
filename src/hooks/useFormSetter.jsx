import { useState } from "react"

const useFormSetters = (initialState) => {
    const [formState, setFormState] = useState(initialState)
  
    const createFormSetter = (fieldName) => {
      const setter = (fieldValue) => {
        const newFormState = {
          ...formState,
          [fieldName]: fieldValue
        }
  
        setFormState(() => newFormState)
      }
  
      return setter
    }
  
    return [formState, createFormSetter]
}

export default useFormSetters