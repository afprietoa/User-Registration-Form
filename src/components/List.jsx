import React from 'react';
import useAxiosUser from '../hooks/useAxiosUser';
import '../styles/List.css'

export const List = () => {

    const { data: users } = useAxiosUser()
    console.log(users)


    return (
        <div className='list-container'>
            <table className="table" >
                <thead>
                    <tr>
                        <th>Documento</th>
                        <th>Nombre completo</th>
                        <th>Nacionalidad</th>
                        <th>Celular</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((usr, idx) => (
                            <tr key={idx}>
                                {
                                    (usr.sicCodeType === 'cédula de ciudadanía' || usr.sicCodeType ==='CC' || usr.sicCodeType ==='Cédula de Ciudadania' || usr.sicCodeType ==='Cedula de ciudadania') ?
                                        (
                                            <td>CC - {usr.sicCode}</td>
                                        ) : (usr.sicCodeType === 'Pasaporte' || usr.sicCodeType ==='pasaporte' || usr.sicCodeType ==='PA') ?
                                            (
                                                <td>TP - {usr.sicCode}</td>
                                            ) : (usr.sicCodeType === 'cédula de extranjería' || usr.sicCodeType === 'cedula') ?
                                                (
                                                    <td>CE - {usr.sicCode}</td>
                                                ) : ''
                                }
                                <td>CC - {usr.sicCode}</td>
                                <td>{usr.completeName}</td>
                                <td>{usr.nationality}</td>
                                <td>{usr.mobilePhobe}</td>
                                <td>{usr.email}</td>
                            </tr>
                        ))

                    }


                </tbody>
            </table>
        </div>
    );
};
