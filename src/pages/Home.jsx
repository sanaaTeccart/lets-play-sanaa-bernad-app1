// //EXTERNAL IMPORTS
// import { Link } from "react-router-dom";

// //INTERNAL IMPORTS
// import { find } from '../controllers/users';
// import { useState } from "react";



//   const Home = ({placeholder,type,value,setValue}) => {
//     // const [isFirstLoad, setIsFirstLoad] = useState(true);
//     // const [isLoading, setIsLoading] = useState(false);

//     // const fetchData = async () => {
//     //     setIsLoading(true);

//     // const response = await find();
//     //     setIsLoading(false);
//     //     setUsers(response);
//     // }

//     // if (isFirstLoad) {
//     //     setIsFirstLoad(false);
//     //     fetchData();
//     // }


// const showAlert = ()=>{

//   if(value===""){
//     return <br />
//   }

//   if(type=== 'email' && !value.includes('@')){
//     return <div className='input-error'>Veuillez entrer une adresse email valide</div>
//   }



//   if(type=== 'password' && value.length < 8){
//     return <div className='input-error'>Votre mot de pass doit contenir au minimum 8 carct</div>
//   }
//       return <div className='input-success'></div>
// }
//   return (

// <div className='container'>
//     <h1>Bienvenu </h1>
//     <h2>Créez-vous un compte, c'est gratuit !!</h2>
//     <form onSubmit={onSubmit}>
//     <TextInput text={email} setText={setEmail} placeHolder={'Email'} isBlank={emailBlank} />
//      <TextInput text={passWord} setText={setPassWord} placeHolder={'PassWord'} isBlank={passWordBlank} />
      
//         {showAlert()}
       
    
//         <input type='submit' value=" Connexion" className='btn' /> 
//                 <div className='title-button'>
//                     <h4>Vous n'avez pas de compte ?</h4>
//                <Link className='add-button' to='/add-user'>S'inscrire</Link>
//                 </div>
    
    
    
      
//         </form>
//       </div>

//     )
// }

// export default Home



import React, { useState } from 'react';
import { Link } from "react-router-dom";
import TextInput from '../components/TextInput'; // Assurez-vous d'importer le composant TextInput si ce n'est pas déjà fait.

const Home = () => {
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [emailBlank, setEmailBlank] = useState(false);
  const [passWordBlank, setPassWordBlank] = useState(false);
  const [submitted, setSubmitted] = useState(false);
//   const showAlert = () => {
    
//     if (email === '' || !email.includes('@')) {
//       return <div className='input-error'>Veuillez entrer une adresse email valide</div>;
//     }
//     if (passWord === '' || passWord.length < 8) { 
//       return <div className='input-error'>Votre mot de passe doit contenir au moins 8 caractères</div>;
//     }  return <div className='input-success'></div>;
// }

   

 

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (email === '' || passWord === '') {
      setEmailBlank(email === '');
      setPassWordBlank(passWord === '');
    }
    
    
    };

    // Le reste de votre logique d'envoi ou de traitement des données ici
  

  return (
    <div className='container'>
      <h1>Content de vous revoir 👋</h1>
            <h4>Connectez-vous à votre compte</h4>
      <form onSubmit={onSubmit}>
        <TextInput  
         text={email} 
         setText={setEmail}
          placeHolder={'Email'} 
         isBlank={emailBlank}
           validate={(value) => {
          if (submitted && value === '') return 'Veuillez renseigner ce champ.';
        if (submitted && !value.includes('@')) return 'Veuillez entrer une adresse email valide';
      return '';
      }}
        />
        <TextInput  
          text={passWord} 
          setText={setPassWord}
       type="password" 
       placeHolder={'Password'}
        isBlank={passWordBlank}
        validate={(value) => {
          if (submitted && value === '') return 'Veuillez renseigner ce champ.';
          if (submitted && value.length < 8) return 'Votre mot de passe doit contenir au moins 8 caractères';
        return '';
        }} /><br/>
      
         
        <input type='submit' value="Connexion"  className='btn-primary' />
        <div className='title-button'>
          <h4>Vous n'avez pas de compte ?</h4>
          <Link className='menu-item.link' to='/add-user'>
            S'inscrire
          </Link>
        </div>
      </form>
    </div>
  )
  
  }
export default Home
