import React,  {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Teachers from './Teachers';
import {v4 as uuid} from "uuid";
import { useNavigate } from "react-router-dom"

function Cadastro(){

    const[name, setName] = useState('');
    const[subject, setSubject] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
            
            const ids = uuid();
            let uniqueId = ids.slice(0, 8);

            let a = name,
            b = subject;

            Teachers.push({id: uniqueId, name: a, subject: b});

            history("/")
    }

  return (
   <div className='w-25 d-inline-block'>
        <Form className='d-grid gap-2' style={{margin:"50px"}}>
            <p> Cadastro de Professores </p>
            <Form.Control type="text" placeholder="Digite o nome do Professor..." required onChange={(e) => setName(e.target.value)} />
            <Button onClick={(e) => handleSubmit(e)} type="submit"> Submit </Button>
        </Form>
    </div>
  )
}

export default Cadastro