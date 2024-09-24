import TextInput from "./TextInput";
import { useState } from "react";
export default function Form() {
    const [submitted,setSubmitted]=useState(false)
    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
    }
    function handleEdit(e) {
        e.preventDefault()
        setSubmitted(false)
    }
    return <form>
        <h1>General Information</h1>
        <TextInput submitted={submitted} title='Name' type='text'></TextInput>
        <TextInput submitted={submitted} title='Email' type='email'></TextInput>
        <TextInput submitted={submitted} title='Phone Number' type='tel'></TextInput>
        <h1>Educational experience</h1>
        <TextInput submitted={submitted} title='School name' type='text'></TextInput>
        <TextInput submitted={submitted} title='Title of study' type='text'></TextInput>
        <TextInput submitted={submitted} title='Date of study' type='date'></TextInput>
        <h1>Practical experience</h1>
        <TextInput submitted={submitted} title='Company name' type='text'></TextInput>
        <TextInput submitted={submitted} title='Position title' type='text'></TextInput>
        <TextInput submitted={submitted} title='Main responsibilities of your jobs' type='text'></TextInput>
        <TextInput submitted={submitted} title='Date from' type='date'></TextInput>
        <TextInput submitted={submitted} title='Date to' type='date'></TextInput>
        {submitted?<button onClick={handleEdit}>Edit</button>:<button onClick={handleSubmit}>Submit</button>}
    </form>
}