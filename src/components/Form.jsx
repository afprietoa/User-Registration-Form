import React from 'react';
import useAxiosNatl from '../hooks/useAxiosNatl';
import '../styles/Form.css'
import Swal from 'sweetalert2'
import { useForm } from '../hooks/useForm';
import { postUser } from '../helpers/postUser';
import { getUser } from '../helpers/getUser';

let usrsObj ={}

export const Form = () => {
    const [values, handleInputChange] = useForm({
        firstName: "",
        lastName: "",
        completeName: "",
        email: "",
        sicCode: "",
        sicCodeType: "",
        mobilePhone: "",
        nationality: "",
        createdBy: "Andrés Prieto",
    })
    const {firstName, lastName, email, sicCode, sicCodeType, mobilePhone, nationality } = values

    const {data:natls} = useAxiosNatl()
    console.log(natls)
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleAdd = () => {
        if(isFormValid()){

          values.completeName = values.firstName + ' ' + values.lastName
           console.log(values)
           usrsObj = getUser()
           postUser(usrsObj)
        }
    }
     const isFormValid = () =>{
         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
         if(!regex.test(values.email)){
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡E-mail incorrecto!',
          })
          return false
         }
        return true

     }

    return (
        <div className="form-container">
            <form id="form" onSubmit={handleSubmit}>
                <h2>Registro de usuarios</h2>
                <hr />

                <div className="form-grp">


                    <div className="left-grp">
                        <div className="form-group col-md-10">
                            <label>Tipo Documento</label><br />

                            <select className="form-control " name="sicCodeType" value={sicCodeType} onChange={handleInputChange} required >
                                <option name="Seleccionar" value="none">Seleccionar</option>
                                <option name="cédula de ciudadanía" value="cédula de ciudadanía">cédula de ciudadanía</option>
                                <option name="Pasaporte" value="Pasaporte">Pasaporte</option>
                                <option name="cédula de extranjería" value="cédula de extranjería">cédula de extranjería</option>
                            </select>
                        </div>
                        <div className="form-group col-md-10">
                            <label>Nombre(s)</label><br />

                            <input className="form-control" name="firstName" value={firstName} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group col-md-10">
                            <label>Nacionalidad</label><br />

                            <select className="form-control " name="nationality" value={nationality} onChange={handleInputChange} required >
                                <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                                {
                                    natls.map((ctry, idx) =>(
                                        <option key={idx} name={ctry.name} value={ctry.name}>{ctry.name}</option>
                                    ))
                                }
                                

                            </select>
                        </div>
                        <div className="form-group col-md-10">
                            <label>Email</label><br />

                            <input className="form-control" name="email" value={email} onChange={handleInputChange} required />
                        </div>



                    </div>

                    <div className="right-grp">
                        <div className="form-group col-md-10 ">
                            <label>Identificación</label><br />

                            <input className="form-control" type="number" name="sicCode" value={sicCode} onChange={handleInputChange} />
                        </div>

                        <div className="form-group col-md-10 ">
                            <label>Apellidos</label><br />

                            <input className="form-control" name="lastName" value={lastName} onChange={handleInputChange} />
                        </div>
                        <div className="form-group col-md-10 ">
                            <label>Celular</label><br />

                            <input className="form-control" type="number" name="mobilePhone" value={mobilePhone} onChange={handleInputChange} />
                        </div>

                        <br />
                        <div className=' col-md-10'>
                            <button className="btn btn-secondary w-100 btn-lg" type="button" onClick={() => handleAdd()}>+ Agregar</button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};
