import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { register } from "../controllers/auth";
import Alert from "./Alert";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passWordError, setPassWordError] = useState('');
  const [userNameError, setUserNameError] = useState('');

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

  const validateUserName = () => {
    if (!username || username.trim() === '') {
      setAlertMessage("Quelque chose s'est mal passé\nAdresse courriel ou mot de passe invalide");
      setAlertType('error');
      setShowAlert(true);
    } else {
      setUserNameError(''); // Effacez les erreurs précédentes
    }

  }

  const validatePassword = () => {
    if (!password || password.trim() === '') {
      setPassWordError('Veuillez renseigner ce champ.');
    } else if (password.length < 8) {
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
    validateUserName();



    const isGood = await register(username, email, password)
    if (isGood) {
      //redirige a /user
      navigate('/users')

    } else {
      //afficher une erreur
      console.log('visuel  erreur')
    }
  };

  const handlOnChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlOnChangePassWord = (e) => {
    setPassWord(e.target.value);
  };

  const handlOnChangeEmail = (e) => {
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
        <h1>Bienvenu 🙂</h1>
        <h4>Créez-vous un compte, c'est gratuit !!</h4>
        <form onSubmit={handlOnSubmit}>



          <input
            className="btn"
            type="text"
            placeholder="Nom"
            value={username}
            onChange={handlOnChangeUserName}
          />
          {userNameError && <div className="input-error">{userNameError}</div>}

          <input
            className="btn"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handlOnChangeEmail}
          />
          {emailError && <div className="input-error">{emailError}</div>}

          <input
            className="btn"
            type="password"
            placeholder="passWord"
            value={password}
            onChange={handlOnChangePassWord}
          />
          {passWordError && <div className="input-error">{passWordError}</div>}

          <button type='submit' className="btn-primary">  S'identifier</button>
          <div className='title-button'>
            <h4>Vous n'avez pas de compte ?</h4>
            <Link className='menu-item.link' to='/'>
              S'identifie
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
