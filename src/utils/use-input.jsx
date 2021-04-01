import { useState } from "react"

export const useInput = (initialValues) => {
  const [input, setInput] = useState(initialValues)

  const controlInput = e => {
    let { name, value } = e.target
    console.log('Campo: ', name, 'Valor: ', value)
    // value = name.includes('value') ? Number(value) : String(value)
    setInput({...input, [name]: value })
  }

  return {input, setInput, controlInput}
}