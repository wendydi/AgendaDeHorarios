import React, { Fragment } from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Teachers from './Teachers';
import DatePicker from './DatePicker';
import Cadastro from './Cadastro';
import { Link, useNavigate } from "react-router-dom"
import Horarios from './Horarios';


const Home = () => {

    let history = useNavigate();

    const handleEdit= (id, name, subject) => {
        localStorage.setItem('name', name);
        localStorage.setItem('subject', subject);
        localStorage.setItem('id', id);
    }

    const handleDelete = (id) => {
        var index = Teachers.map(function(e){
            return e.id
        }).indexOf(id);

        Teachers.splice(index,1);

        history('/');
        }

  return (
    <Fragment> 
        <div style={{margin:"2rem"}}>
            <div className='mx-auto' style={{width: "90rem"}}>
                <Cadastro/>
                <Cadastro/>
                <Cadastro/>
            </div>
            <div>
                <p className='d-inline-block'> Professor </p>
                <p className='d-inline-block mx-5'> Disciplina </p>
                <p className='d-inline-block'> Turma </p>
            </div>
            <div className="input-group" style={{width: "90rem", margin: "20px"}}>
                <Horarios/>
                <Horarios/>
                <Horarios/>
                    <button class="btn btn-outline-secondary" type="button">Cadastrar</button>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Nome
                        </th>
                        <th>
                            Matéria
                        </th>
                        <th> 
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Teachers &&  Teachers.length > 0
                        ?
                        Teachers.map((item) => {
                            return(
                                <tr>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.subject}
                                    </td>
                                    <td>
                                        <DatePicker />
                                        <Button onClick= {() => handleDelete(item.id)}> DELETE </Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "Nenhum informação disponível"
                    }
                </tbody>
            </Table> 
            <br></br>
            <Link className="d-grip gap-2" to="/create">
                <Button size="lg"> Create </Button>
            </Link>
        </div>
    </Fragment>
  )
}

export default Home