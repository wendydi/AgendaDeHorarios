import React, { useRef, useState, useEffect } from 'react'
import Horarios from './Horarios'
import "bootstrap/dist/css/bootstrap.min.css"

function Selects() {
    const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const [label, setLabel] = useState('');
  useEffect(() => {
    
  }, [label])

  return (
    <div className="input-group" >
        <Horarios label ="Professor"/>
        <Horarios label ="Disciplina" />
        <Horarios label ="Turma" />
        <input label ="Carga Horária" type="number" min="0" style={{width: "8rem", textAlign:"center", border: "solid 1px"}}></input>
        <input label ="Data" type="date" style={{width: "10rem", border: "solid 1px"}} 
        onChange={handleChange} ref={dateInputRef} />  
        <button className="btn btn-outline-secondary" type="button"> Cadastrar </button>
    </div>
  )
}

export default Selects