import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './vistas/login'
import UserTable from './components/UserTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import addUserForm from './components/AddUserForm';
import {v4 as uuidv4} from 'uuid';


function App() {
  const usersData = [
    {id: uuidv4(),descricion:'Hola mi nombre es Hansel',username:'hansel07'},
    {id: uuidv4(),descricion:'Hola, como les va en esta cuarentena?',username:'felipe03'},
    {id: uuidv4(),descricion:'Durmiendo mucho',username:'estefani04'},
    {id: uuidv4(),descricion:'Yo viendo netflix',username:'rosa20'},
    {id: uuidv4(),descricion:'Quiero que esto pasa ya :(',username:'pedro09'},





  ]
  const [users,setUsers] = useState(usersData)

 





  return (
    <div className="App">
      <img src='https://icons.iconarchive.com/icons/visualpharm/must-have/256/User-icon.png' className="App-logo" alt="logo" />
      <br></br> 
      <Login/>
      <br>
      </br>
      <br>
      </br> <br>
      </br>
      <h1 className="share">Comparte con tus amigos aqui !!!</h1>
      <hr></hr>
      <addUserForm/>
   
      
      
            <UserTable users={users}/>

            </div>
           



        

   


      

  );
}

export default App;
