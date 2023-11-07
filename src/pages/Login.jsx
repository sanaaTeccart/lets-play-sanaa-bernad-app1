
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { login } from "../controllers/auth";
import Alert from "./Alert";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passWordError, setPassWordError] = useState('');

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');





  const validateEmail = () => {
    if (!email || email.trim() === '') {
      setEmailError('Veuillez renseigner ce champ.');
    }
    else if (!email.includes('@')) {
      setEmailError('Veuillez entrer une adresse email valide');
    } else {
      setEmailError(''); // Effacez les erreurs précédentes
    }
  };



  const validatePassword = () => {
    if (!passWord || passWord.trim() === '') {
      setPassWordError('Veuillez renseigner ce champ.');
    } else if (passWord.length < 8) {
      setAlertMessage("Quelque chose s'est mal passé\nAdresse courriel ou mot de passe invalide");
      setAlertType('error');
      setShowAlert(true);
    } else {
      setPassWordError(''); // Effacez les erreurs précédentes
    }
  };


  const handlOnSubmit = async (e) => {
    e.preventDefault();

    // Valider l'email et le mot de passe
    validateEmail();
    validatePassword();



    const isGood = await login(email, passWord)
    if (isGood) {
      //redirige a /user
      navigate('/users')

    } else {
      //afficher une erreur
      console.log('visuel  erreur')
    }
  };

  const handeleOnChangePassWord = (e) => {
    setPassWord(e.target.value);
  };

  const handeleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertMessage('');
    setAlertType('');
  };



  return (
    <div>
      {showAlert && (
        <Alert message={alertMessage} type={alertType} onClose={handleCloseAlert} />
      )}



      <div className='container'>
        <h1>Content de vous revoir 👋</h1>
        <h4>Connectez-vous à votre compte</h4>
        <form onSubmit={handlOnSubmit}>
          <input
            className="btn"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handeleOnChangeEmail}
          />
          {emailError && <div className="input-error">{emailError}</div>}

          <input
            className="btn"
            type="password"
            placeholder="passWord"
            value={passWord}
            onChange={handeleOnChangePassWord}
          />
          {passWordError && <div className="input-error">{passWordError}</div>}

          <button type='submit' className="btn-primary">Connexion</button>
          <div className='title-button'>
            <h4>Vous n'avez pas de compte ?</h4>
            <Link className='menu-item.link' to='/auth/login'>
              S'inscrire
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
