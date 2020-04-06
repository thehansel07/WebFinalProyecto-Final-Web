import React from 'react';
import 'firebaseui/dist/firebaseui.css';
import Firebase from '../server/firebase';
import { render } from '@testing-library/react';

class Login extends React.Component{
    state = {
        autenticando: false,
        usuario: "",
        firebase: null



    }

    componentDidMount(){
        const firebase = new Firebase();

        firebase.auth.onAuthStateChanged(authUser =>{
            authUser
            ? this.setState({
                autenticando:true,
                usuario: firebase.auth.currentUser.email,
                firebase: firebase






            })
            :firebase.firebaseui.start("#firebaseui-auth-container",{
                signInSuccessUrl: "/",
                credentialHelper:"none",
                callbacks:{
                    signInSuccessWithAuthResult:(authResult, redirectUrl)=>{
                    this.setState({
                        autenticando:true,
                        usuario:firebase.auth.currentUser.email,
                        firebase:firebase


                    })
                    return false;


                    }


                },
                signInOptions:[
                    {
                        provider: firebase.autorization.EmailAuthProvider.PROVIDER_ID



                    }



                ]

               
            })

        })

        
    

       
    }


    
    render(){
        return this.state.autenticando
        ?(
            <React.Fragment>
                <div>usuario Logado{this.state.usuario}</div>
                <a href="#?" onClick={()=>{this.state.firebase.auth.signOut().then(success=>{
                                                     this.setState({
                                                         autenticando:false 
                                                        })
                                                    
                                                        })
                                               
                                               
                                               
                                             }  
                                        } >Salir</a>

            </React.Fragment>




        
        )
        :<div id="firebaseui-auth-container"></div>
    
    
    }
  


}

export default Login;
