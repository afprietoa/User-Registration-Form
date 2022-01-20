import React from 'react';
import useAxiosNatl from '../hooks/useAxiosNatl';
import '../styles/Form.css'

export const Form = () => {


    const {data:natls} = useAxiosNatl()
    console.log(natls)
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = () => {

    }
    const handleAdd = () => {

    }

    return (
        <div className="form-container">
            <form id="form" onSubmit={handleSubmit}>
                <h2>Registro de usuarios</h2>
                <hr />

                <div className="d-flex">


                    <div className="w-100">
                        <div className="form-group col-md-10">
                            <label>Tipo Documento</label><br />

                            <select className="form-control " name="typeId" onChange={handleChange} required >
                                <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                                <option name="C.C" value="C.C">C.C</option>
                                <option name="T.P" value="T.P">T.P</option>
                                <option name="C.E" value="C.E">C.E</option>
                            </select>
                        </div>
                        <div className="form-group col-md-10">
                            <label>Nombre(s)</label><br />

                            <input className="form-control" name="names" onChange={handleChange} required />
                        </div>
                        <div className="form-group col-md-10">
                            <label>Nacionalidad</label><br />

                            <select className="form-control " name="nationality" onChange={handleChange} required >
                                <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                                {
                                    natls.map((ctry, idx) =>(
                                        <option name={ctry.name} value={ctry.name}>{ctry.name}</option>
                                    ))
                                }
                                

                            </select>
                        </div>
                        <div className="form-group col-md-10">
                            <label>Email</label><br />

                            <input className="form-control" name="email" onChange={handleChange} required />
                        </div>



                    </div>

                    <div className="w-100">
                        <div className="form-group col-md-10 ms-4">
                            <label>Identificación</label><br />

                            <input className="form-control" type="number" name="idNum" onChange={handleChange} />
                        </div>

                        <div className="form-group col-md-10 ms-4">
                            <label>Apellidos</label><br />

                            <input className="form-control" name="lastNames" onChange={handleChange} />
                        </div>
                        <div className="form-group col-md-10 ms-4">
                            <label>Celular</label><br />

                            <input className="form-control" type="number" name="cel" onChange={handleChange} />
                        </div>

                        <br />
                        <div className='ms-4 col-md-10'>
                            <button className="btn btn-secondary w-100 btn-lg" type="button" onClick={() => handleAdd()}>+ Agregar</button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};