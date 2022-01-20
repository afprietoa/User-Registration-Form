import React from 'react';
import useAxiosUser from '../hooks/useAxiosUser';
import '../styles/List.css'

export const List = () => {

    
    const { data: users } = useAxiosUser()
    console.log(users)

    const truncate = (input) => {
        if (input.length > 13) {
            return input.substring(0, 13) + '...';
        }
        return input;
    }
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
                {
                    (users) ?
                        (
                            <tbody>


                                {
                                    users.map((usr, idx) => (
                                        <tr key={idx}>
                                            {

                                                (usr.sicCodeType === 'cédula de ciudadanía' || usr.sicCodeType === 'CC' || usr.sicCodeType === 'Cédula de Ciudadania' || usr.sicCodeType === 'Cedula de ciudadania') ?
                                                    (
                                                        <td>CC - {usr.sicCode}</td>
                                                    ) : (usr.sicCodeType === 'Pasaporte' || usr.sicCodeType === 'pasaporte' || usr.sicCodeType === 'PA') ?
                                                        (
                                                            <td>TP - {usr.sicCode}</td>
                                                        ) : (usr.sicCodeType === 'cédula de extranjería' || usr.sicCodeType === 'cedula') ?
                                                            (
                                                                <td>CE - {usr.sicCode}</td>
                                                            ) : (
                                                                <td> ?? - {
                                                                    (typeof (usr.sicCode) === 'undefined') ?
                                                                        '??' : (usr.sicCode === '') ? '??' : truncate(usr.sicCode)

                                                                }</td>
                                                            )

                                            }
                                            {
                                                (usr.completeName === ' ') ?
                                                    (
                                                        <td>??</td>
                                                    ) :
                                                    (
                                                        <td>{truncate(usr.completeName)}</td>
                                                    )
                                            }
                                            {
                                                (typeof (usr.nationality) === 'undefined') ? (
                                                    <td>??</td>
                                                ) : (usr.nationality === '') ?
                                                    (
                                                        <td>??</td>
                                                    ) :
                                                    (
                                                        <td>{truncate(usr.nationality)}</td>
                                                    )
                                            }

                                            {
                                                (typeof (usr.mobilePhone) === 'undefined') ? (
                                                    <td>??</td>
                                                ) : (usr.mobilePhone === '') ?
                                                    (
                                                        <td>??</td>
                                                    ) :
                                                    (
                                                        <td>{truncate(usr.mobilePhone)}</td>
                                                    )
                                            }
                                            {
                                                (typeof (usr.email) === 'undefined') ? (
                                                    <td>??</td>
                                                ) : (usr.email === '') ?
                                                    (
                                                        <td>??</td>
                                                    ) :
                                                    (
                                                        <td>{truncate(usr.email)}</td>
                                                    )
                                            }

                                        </tr>
                                    ))

                                }


                            </tbody>
                        ) :
                        (
                            <tbody>



                                <tr >

                                    <td>CC - 1098765432</td>

                                    <td>Jennifer Restrepo</td>

                                    <td>Colombia</td>

                                    <td>3120987654</td>

                                    <td>Jennifer@innventa.com</td>


                                </tr>
                            
                             </tbody>
                             {() => window.location.reload()}()
                        )

                    }
                

            </table>
        </div>
    );
};
