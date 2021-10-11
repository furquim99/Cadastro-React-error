import React, {useState, useEffect} from 'react'
import formulario_cad from './formulario_cad'
import fireDb from '../firebase'
import { useEffect, useState } from 'react'

const Cadastro = () =>{

    let [dadosPacientes, setdadosPacientes] = useState({})

    let [idAtual, setIdAtual] = useState('')

    useEffect(() => {
        fireDb.child('pacientes').on('value', dbPhoto => {
            if(dbPhoto.val() != null){
                setdadosPacientes({
                    ...dbPhoto.val()
                })
            } else{
                setdadosPacientes({})
            }
        })
    }, [])

    const addEedit = obj =>{
        if(idAtual == ''){
            console.info(obj)
        fireDb.child('pacientes').push(
            obj,
            error =>{
                if(error){
                    console.log(error)
                }else{
                    setIdAtual('')
                }
            }
        )    
        }else{
            fireDb.child('pacientes/${idAtual}').set(
                obj,
                error =>{
                    if(error){
                        console.log(error)
                    }
                }
            )
        }
    }

    const deletePaciente = key =>{
        if(window.confirm('deseja deletar esse perfil?')){
            fireDb.child('pacientes/${idAtual}').remove
                error =>{
                    if(error){
                        console.log(error)
                    }
                }
        }
    }
    return(
        <div>
                
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
            <div className='row'>
                <div className='cold-md-10'>
                    <formulario_cad {...({addEedit, idAtual, dadosPacientes})}/>

                </div>
                <div className='col-md-7'>
                    <table className='table table-boderless table-stripped'>
                        <thead className='thead-light'>
                            <tr>
                                <td>nome completo</td>
                                <td>telefone</td>
                                <td>email</td>
                                <td>endereço</td>
                                <td>consulta</td>
                            </tr>

                        </thead>
                        <tbody>
                            {

                                Object.keys(dadosPacientes).map(id =>{
                                    return<tr key={id}>
                                        <td>{dadosPacientes[id].name}</td>
                                        <td>{dadosPacientes[id].telefone}</td>
                                        <td>{dadosPacientes[id].email}</td>
                                        <td>{dadosPacientes[id].endereco}</td>
                                        <td>{dadosPacientes[id].consulta}</td>

                                        <td>
                                            <a className='btn btn-primary' onClick={ () => {setAtual(id)} }>
                                                <i className='fas fa-pencil-alt'></i>
                                            </a>
                                            <a className='btn btn-primary' onClick={() => deletePaciente(key)}>
                                                <i className='fas fa-trash-alt'></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>

                    </table>
                    
                </div>

            </div> 
        </div>
    )
}

export default Cadastro