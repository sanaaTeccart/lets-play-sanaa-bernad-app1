///exteral import
import { useParams, useNavigate } from "react-router-dom";

//interal import

import {useState, useEffect} from 'react';
import { findME, DeleteMe, updateMe} from "../controllers/me";
import Alert from "./Alert";
import {resetScore } from "../controllers/auth"; 






const Me = ()=> {
    

     const navigate = useNavigate();
   
 const [showAlert1, setShowAlert1] = useState(false);
    const [alertMessage1, setAlertMessage1] = useState('');
    const [alertType, setAlertType] = useState('');
   const token = sessionStorage.getItem('token'); 
    
    const [showAlert2, setShowAlert2] = useState(false);
    const [alertMessage2, setAlertMessage2] = useState('');

    const [showAlert3, setShowAlert3] = useState(false);
    const [alertMessage3, setAlertMessage3] = useState('');

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    

    const {id}=useParams();
    // const user =findME(id)
    
    useEffect(() => {
      // Récupération des données de l'utilisateur par ID
      const fetchData = async () => {
        const user = await findME(id);
      setUserName(user.username)
      setEmail(user.email);
       
      };
      
      fetchData();
    }, [id]);

   
  


const handlOnSubmit=async(e)=>{
  e.preventDefault();

const success = await updateMe(id, {username, email  });
setShowAlert3(true);
setAlertMessage3("Succès! \nVotre compte a été modifié");
  if (success) {
    console.log('Utilisateur actuel est enregistre avec succès');
    
         setAlertMessage3("Succès!\nvotre compte a ete modifier ");
          setAlertType('error');
         
    
  } 
};





  const handlOnChangeUserName = (e) => {
    setUserName(e.target.value);

  };

  const handlOnChangeEmail = (e) => {
    setEmail(e.target.value);

  };

  const handleResetUserScore = async () => {
    const success = await resetScore(token); // Utilisez le service d'authentification
    if (success) {
        console.log('Pointage réinitialisé avec succès');

        setAlertMessage1("Succès!\nStatistiques réinitialisées avec succès");
        setAlertType('error');
        setShowAlert1(true)
    } else {
        console.log('Échec de la réinitialisation du pointage');
        
    }
};




const handleDeleteCurrentUser = async () => {
  const success = await DeleteMe(token);

  if (success) {
    console.log('Utilisateur actuel supprimé avec succès');
    
         setAlertMessage2("Succès!\n un instant ...ce compte sera supprimer ");
          setAlertType('error');
          setShowAlert2(true);
         
// Rediriger vers la page d'accueil après un court délai
setTimeout(() => {
  navigate('/');
}, 2000); // Redirection après 2 secondes 
  
  } else {
    console.log('Échec de la suppression de l\'utilisateur actuel');
    // Gérez les erreurs ici si nécessaire
  }
};






const handleCloseAlert1 = () => {
    setShowAlert1(false);
    setAlertMessage1('');
    setAlertType('');
  };
  
  const handleCloseAlert2 = () => {
    setShowAlert2(false);
    setAlertMessage2('');
    setAlertType('');
  };
  

  const handleCloseAlert3= () => {
    setShowAlert3(false);
    setAlertMessage3('');
    setAlertType('');
  };

 
    return(
        <div>


            <h1>Parametres</h1>
        
            <div className="card" >
           

 

    <form onSubmit={handlOnSubmit}>

        <h2>Informations personnels</h2>
        Veuillez confirmer votre mot de passe afin de valider votre identité
        
   
        {showAlert3 && (
        <Alert message={alertMessage3} type={alertType} onClose={handleCloseAlert3} />
        )}

        <input
        className="btn"
        type="text"
        placeholder='*username*'
        value={username}
        onChange={handlOnChangeUserName}
      />
   

          <input
        className="btn"
        type="email"
        placeholder='*email*'
        value={email}
        onChange={handlOnChangeEmail}
      />
  

   <button type='submit' className="add-button">Modifier</button>
   </form>
   </div>
   

<br/>
        <div className="card" >
        {showAlert1 && (
        <Alert message={alertMessage1} type={alertType} onClose={handleCloseAlert1} />
      )}
      <div>
        <h2>Réinitialiser les statistiques</h2>
        Si vous supprimez votre compte, toutes vos informations seront perdues. 
        <button  className="add-button " onClick={handleResetUserScore}>Réinitialiser</button>
        </div>
        </div>
<br/>
       
        <div className="card" >
        {showAlert2 && (
        <Alert message={alertMessage2} type={alertType} onClose={handleCloseAlert2} />
        )}
        <div>
        <h2>Supprimer le compte</h2>
        Si vous supprimez le compte, toutes vos informations seront perdues
       <button className="add-button" onClick={handleDeleteCurrentUser} >Supprimer </button>
        </div>
        </div>

        
        
        
        
        </div>

    )
} 
 export default Me