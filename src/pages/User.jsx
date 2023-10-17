//EXTERNAL IMPORTS
import { useParams, useNavigate } from "react-router-dom";

//INTERNAL IMPORTS
import { findByemail } from "../controllers/users";

const User = () => {
    const navigate = useNavigate();
    const { email } = useParams();

    const user = findByemail(email);

    const handleOnBack = () => {
        navigate(-1);
    }


    return (
        <div className="container">
            <h1>Content de vous revoir 👋</h1>
            <h2>Connectez-vous à votre compte</h2>
            <div className="card">
                {
                    user === null ? <div className="cardbody">
                        <h5 className="card-title">Vous n'avez pas de compte</h5>
                        <Link className='add-button' to='/add-user'>S'identifier</Link>
                    </div> :
                        <div className="card-body">
                           <TextInput text={email} setText={setEmail} placeHolder={'Email'} isBlank={emailBlank} className=" btn"  />
                            <TextInput text={passWord} setText={setPassWord} placeHolder={'PassWord'} isBlank={passWordBlank} className=" btn" />

                            <button className=" btn-primary" onClick={handleOnBack}>connexion</button>
                        </div>
                }

            </div>
           

        </div>
    )
}

export default User