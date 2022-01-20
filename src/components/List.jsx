import React from 'react';
import '../styles/List.css'

export const List = () => {
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
             
                
                     <tr >
                        <td>CC</td>
                        <td>1022123123</td>
                        <td>Carlos Ríos</td>
                        <td>Colombia</td>
                        <td>3001230987</td>
                        <td>carlos@innventa.com</td>
                     </tr>
                 
             
           
         </tbody>
    </table>
</div>
  );
};
