import React from 'react';
import useAxiosNatl from '../hooks/useAxiosNatl';
import '../styles/Form.css'
import Swal from 'sweetalert2'
import { useForm } from '../hooks/useForm';
import { postUser } from '../helpers/postUser';




export const Form = () => {
    
    const [values, handleInputChange, reset] = useForm({
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
    const { firstName, lastName, email, sicCode, sicCodeType, mobilePhone, nationality } = values

    const { data: natls } = useAxiosNatl()
    console.log(natls)

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    const handleAdd = async () => {
        

        if (isFormValid()) {
            

            values.completeName = values.firstName + ' ' + values.lastName
            console.log(values)

            postUser(values)
            reset()

        }
    }


    const isFormValid = () => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexNumber = /^[0-9]*$/;
        if (values.firstName.trim().length === 0 || values.lastName.trim().length === 0 || values.email.length === 0 || values.sicCode.length === 0 || values.sicCodeType.length === 0 || values.mobilePhone.length === 0 || values.nationality.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: '¡Formato invalido! Proporcione un valor para el campo requerido en el formulario',
            })
            return false
        } else if (!regexEmail.test(values.email)) {
            Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: '¡E-mail incorrecto!',
            })
            return false
        } else if (!regexNumber.test(values.sicCode) || !regexNumber.test(values.mobilePhone)) {
            Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: '¡Número incorrecto!',
            })
            return false
        }


        return true

    }

    return (
        <div className="form-container">
            <form id="form" onSubmit={handleSubmit}>
                <h1>Registro de usuarios</h1>
                <hr />

                <div className="form-grp">


                    <div className="left-grp">
                        <div className="form-group col-md-10 mb-3">
                            <label>Tipo Documento :</label><br />

                            <select className="form-control " name="sicCodeType" value={sicCodeType} onChange={handleInputChange} >
                                <option name="Seleccionar" value="">Seleccionar</option>
                                <option name="cédula de ciudadanía" value="cédula de ciudadanía">cédula de ciudadanía</option>
                                <option name="Pasaporte" value="Pasaporte">Pasaporte</option>
                                <option name="cédula de extranjería" value="cédula de extranjería">cédula de extranjería</option>
                            </select>
                        </div>
                        <div className="form-group col-md-10 mb-3">
                            <label>Nombre(s) :</label><br />

                            <input className="form-control" name="firstName" value={firstName} onChange={handleInputChange} />
                        </div>
                        <div className="form-group col-md-10 mb-3">
                            <label>Nacionalidad :</label><br />
                            {
                                (natls) ? 
                                (
                                    <select className="form-control " name="nationality" value={nationality} onChange={handleInputChange} >
                                    <option name="Seleccionar" value="">Seleccionar</option>
                                    {
                                        natls.map((ctry, idx) => (
                                            <option key={idx} name={ctry.name} value={ctry.name}>{ctry.name}</option>
                                        ))
                                    }
    
    
                                </select>
                                ) :
                                (
                                    <select className="form-control " name="nationality" value={nationality} onChange={handleInputChange} >
                                    <option name="Seleccionar" value="">Seleccionar</option>
    
    
                                </select>
                                )
                                
                            }


                        </div>
                        <div className="form-group col-md-10 mb-3">
                            <label>Email :</label><br />

                            <input className="form-control" name="email" value={email} onChange={handleInputChange} />
                        </div>



                    </div>

                    <div className="right-grp">
                        <div className="form-group col-md-10 mb-3">
                            <label>Identificación :</label><br />

                            <input className="form-control" type="number" name="sicCode" value={sicCode} onChange={handleInputChange} />
                        </div>

                        <div className="form-group col-md-10 mb-3">
                            <label>Apellidos :</label><br />

                            <input className="form-control" name="lastName" value={lastName} onChange={handleInputChange} />
                        </div>
                        <div className="form-group col-md-10 mb-3">
                            <label>Celular :</label><br />

                            <input className="form-control" type="number" name="mobilePhone" value={mobilePhone} onChange={handleInputChange} />
                        </div>

                        <br />
                        <div className=' col-md-10 '>
                            <button className="bttn bttn-black" type="button" onClick={() => handleAdd()}><span>+ Agregar</span></button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};
