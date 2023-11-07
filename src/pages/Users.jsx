import React, { useState, useEffect ,} from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { find, deleteById,updateScore } from "../controllers/users";


const Users = () => {
    const isAdmin = sessionStorage.getItem("isAdmin");
    const {id}=useParams();
    //const user = find(id)
    const [users, setUsers] = useState([]);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [resultMessage, setResultMessage] = useState("");
     const navigate = useNavigate();


    const handleOnStart = async () => {
        const randomNumber = Math.floor(Math.random() * 2); // Génère 0 ou 1
      
        try {
          const score = await updateScore(id, randomNumber === 0);
          console.log(score)
          if (score !== -1) { // Vérifiez si la mise à jour du score a réussi
            setScore(score); // Mettez à jour le score avec la nouvelle valeur
          
            if (randomNumber === 0) {
              setResultMessage("Vous avez gagné 🤙");
            } else {
              setResultMessage("Vous avez perdu 😱");
            }
          } 
        } catch (error) {
        
          setResultMessage("Échec de la mise à jour du score : " + error.message);
        }
      }
      




    //   }


    // }


      
    const handleOnRetour = () => {
        navigate('/');
    }


    useEffect(() => {
        const fetchData = async () => {
            const usersData = await find();
            setUsers(usersData);
            setIsLoading(false);
        };
       fetchData();
    }, [id]);

  



const handledeleteById = (id) => {
    const  userDeleted =  deleteById(id);
console.log( userDeleted)
    if (userDeleted) {
        // Si la suppression réussit, mettez à jour la liste des utilisateurs
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
    } else {
        alert("Utilisateur non trouvé ou suppression échouée.");
    }
};




    return (
        <div>
            <div className="container">
                <h2>Jouer maintenant</h2>
                <h3>Démarrer une partie</h3>
                <button className="menu-item" onClick={handleOnStart}>Jouer!</button>
                {resultMessage && (
                    <p className="menu-item" style={{ color: resultMessage === "Vous avez gagné" ? "green" : "red" }}>
                        {resultMessage}
                     </p>
                )}
             
            </div>
            <form className="form-control">
                <div className="container">
                    <h1>Liste d'utilisateurs existants</h1>
                    <h4>Connectez-vous à votre compte réel.</h4>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th className="table-header" style={{ width: '90%', textAlign: 'left' }}>Informations</th>
                            <th className="table-header"  style={{ width: '10%'}}>Score</th>
                        
                            {isAdmin== "true" ? (
                               <th className="table-header" style={{ width: '10%'}}>Action</th> ) 
                               
                               : null}
                      </tr>
                    </thead>
                    {isLoading ? <div>Un instant....</div> : (
                        <tbody className="table">
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td> 🙂{user.username}<br/>
                                         {user.email} </td>
                                    <td>{user.score} </td>
                                    {isAdmin == 'true' ? (
                                        <>
                            <td className="btn-delete"  onClick={() => handledeleteById(user.id)} >supp</td>
                            <Link className="btn-delete" to={'/users/'+ user.id} >mod</Link>
                            </>
                            ) : 
                            null
                            }

                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
                <div className="form-group">
                    <Link className="add-button-icone" to={`/me`}> gérer </Link>
                    <button onClick={handleOnRetour} className="add-button-icone">retour</button>
                </div>
            </form>
        </div>
    );
}

export default Users;