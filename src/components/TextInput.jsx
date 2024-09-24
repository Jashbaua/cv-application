import '../styles/TextInput.css'
import { useState } from 'react'
export default function TextInput({ submitted, title, type }) {
    const [data, setData] = useState('')
    function handleInput(e){
        setData(e.target.value)
    }
    return !submitted?<>
        <label htmlFor={title}>{title+': '}</label>
        <input type={type} id={title} onInput={handleInput} value={data} />
    </> : <><span>{title + ': '}</span><span>{data}</span></>
}