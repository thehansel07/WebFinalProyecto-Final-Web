import React from 'react';

const UserTable   = (props) =>{
    console.log(props.users)
    return (

        <table >
            <thead>
                <tr>
                    <th hidden>En Cabezado</th>
                    <th hidden>Descripcion</th>
                    <th hidden>Acciones</th>


                </tr>
                <tbody>
                    {
                        props.users.map(user =>(
                            <tr key={user.id}>
                  
                        <td>{user.username} dice:"{user.descricion}</td>
                        
                        <th>



                        </th>


                    </tr>




                        ))

                            
                        


                    }



                    


                </tbody>



            </thead>


        </table>




    );



}

export default UserTable;