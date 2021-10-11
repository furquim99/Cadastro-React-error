import React, { useEffect, useState } from 'react'

const formulario_cad = (props) =>{

    const campIniciaValores = {
        name: '',
        telefone: '',
        email:'',
        endereco: '',
        consulta:''
    }

    let { values, setValues} = useState(campIniciaValores)

    useEffect( () => {
        if(props.idAtual == ''){
            setValues({
                ...campIniciaValores
            })
        } else{
            setValues({
                ...props.dadosPacientes[props.idAtual]
            })
        }

    }, [props.idAtual, props.dadosPacientes])

    const maniInputchange = e =>{
        let { name, value} = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const maniformenv = e=>{
        e.preventDefault()
        props.addEedit(values)
    }

    return(
        <fom autoComplete='off' onSubmit={maniformenv}>
            <div className='form-group input-group col-md-6'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fa fa-user'></i>

                    </div>

                </div>

                <input className='form-control' placeholder='name' name='nomecompleto' value={values.name}
                onChange={maniInputchange} />

            </div>
            <div className='row'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fa fa-user'></i>

                    </div>

                </div>
                <input className='form-control' placeholder='telefone' name='telefone' value={values.telefone} 
                onChange={maniInputchange}/>
            </div>
            <div className='row'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fa fa-user'></i>

                    </div>

                </div>
                <input className='form-control' placeholder='email' name='email' value={values.email} 
                onChange={maniInputchange}/>
            </div>
            <div className='row'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fa fa-user'></i>

                    </div>

                </div>
                <input className='form-control' placeholder='endereco' name='endereco' value={values.endereco} 
                onChange={maniInputchange}/>
            </div>
            <div className='row'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fa fa-user'></i>

                    </div>

                </div>
                <input className='form-control' placeholder='consulta' name='consulta' value={values.consulta} 
                onChange={maniInputchange}/>
            </div>
            <div className='form-group'>
                <input type="submit" value={props.idAtual == '' ? 'save' : 'atualizar'} className='btn btn-primary btn-block'/>
            </div>

        </fom>
    )
}

export default formulario_cad