import Input from "./Input"
import {useState } from "react";
import Button from "./Button";


const Form = () => {
    const [note, setNote] = useStat({task:"", datetime:""})
  return (
    <div>
        <form >
            <Input type="text" id="task" label="Task" placeholder="Add Task" value={note.task} onChange={(e)=> setNote({...note, task: e.target.value})}/>
            <Input type="datetime-local" id="datetime" label="Date and Time" placeholder="Add Date and time" value={note.datetime} onChange={(e)=> setNote({...note, datetime: e.target.value})}/>
            <



        </form>
    </div>
  )
}

export default Form