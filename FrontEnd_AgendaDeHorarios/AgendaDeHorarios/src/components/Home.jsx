import React, { Fragment } from 'react';
import { Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Teachers from './Teachers';
import Cadastro from './Cadastro';
import { Link, useNavigate } from "react-router-dom"
import Selects from './Selects';


const Home = () => {

    let history = useNavigate();

    const handleDelete = (id) => {
        var index = Teachers.map(function(e){
            return e.id
        }).indexOf(id);

        Teachers.splice(index,1);

        history('/');
        }

  return (
    <Fragment> 
        <div className='m4'>
            <div className='text-center'>
                <Cadastro/>
                <Cadastro/>
                <Cadastro/>
            </div>
            <Selects/>
            <Table striped bordered hover size="sm" >
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
                                        <Button onClick= {() => handleDelete(item.id)}> DELETE </Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "Nenhuma informação disponível"
                    }
                </tbody>
            </Table> 
        </div>
    </Fragment>
  )
}

export default Home