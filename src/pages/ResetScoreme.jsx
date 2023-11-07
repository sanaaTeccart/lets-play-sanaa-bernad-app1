
import React, { useState } from 'react';
import { resetScore } from "../controllers/auth"; 
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";



const ResetScoreme = () => {
 

    const token = sessionStorage.getItem('token'); 
    
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate();
    
    const handleResetUserScore = async () => {
        const success = await resetScore(token); // Utilisez le service d'authentification
        if (success) {
            console.log('Pointage réinitialisé avec succès');
            setAlertMessage("Succès!\nStatistiques réinitialisées avec succès");
            setAlertType('error');
            setShowAlert(true)


            // Rediriger vers la page d'accueil après un court délai
setTimeout(() => {
    navigate('/');
  }, 2000); // Redirection après 2 secondes 
        } else {
            console.log('Échec de la réinitialisation du pointage');
            
        }
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
         
         <div>
        <h2>Réinitialiser les statistiques</h2>
        Si vous supprimez votre compte, toutes vos informations seront perdues. 
        
        </div>
        
            <button  className="btn" onClick={handleResetUserScore}>Réinitialiser le pointage</button>

        </div>
    );
}
   
export default ResetScoreme