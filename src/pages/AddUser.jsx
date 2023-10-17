//EXTERNAL IMPORTS
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../controllers/users";
import User from "./User";



const AddUser = () => {
     const [fullName, setFullName] = useState('');
    const [fullNameBlank, setFullNameBlank] = useState(false);
    const [useName, setUseName] = useState('');
    const [useNameBlank, setUseNameBlank] = useState(false);
    const [email, setEmail] = useState('');
    const [emailBlank, setEmailBlank] = useState(false);
    const [passWord, setPassWord] = useState('');
    const [passWordBlank, setPassWordBlank] = useState(false);




    const validateTextInput = () => {
        
        setUseNameBlank(false);
        setFullNameBlank(false);
        setEmailBlank(false);
        setPassWordBlank(false);

        if (useName === '') {
            setUseNameBlank(true);
            return false;
        }


        if (fullName === '') {
            setFullNameBlank(true);
            return false;
        }
        if (email === '') {
            setEmailBlank(true);
            return false;
        }

        if (passWord === '') {
            setPassWordBlank(true);
            return false;
        }

        return true;
    }


    const AddUser = () => {
        const navigate = useNavigate();
      
        const handleCreateUser = () => {
          navigate(-1);
        }
        
  return (User );
 }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!validateTextInput()) {
            return;
        }

        // Create a new user object
        const newUser = {
            id: us.length + 1, // Generate a new unique ID
            fullName,
            useName,
            email,
            passWord,
        };

        //ajouter un nouveau user au tableau
        createUser(newUser);

        // Clear input fields

        setFullName('');
        setUseName('');
        setEmail('');
        setPassWord('');
    }
    
    return (
        <>
            <div className='container'>
                <h1>Bienvenu </h1>
                <h2>Créez-vous un compte, c'est gratuit !!</h2>
                <form onSubmit={onSubmit}>
                    <TextInput text={fullName} setText={setFullName} placeHolder={'FullName'} isBlank={fullNameBlank} />
                    <TextInput text={useName} setText={setUseName} placeHolder={'UseName'} isBlank={useNameBlank} />
                    <TextInput text={email} setText={setEmail} placeHolder={'Email'} isBlank={emailBlank} />
                    <TextInput text={passWord} setText={setPassWord} placeHolder={'PassWord'} isBlank={passWordBlank} />

                    <div>
                        <input type='submit' value="S'identifie" className='btn-primary' />


                        <h4>Vous avez déjà un compte ? </h4>
                        <Link className='add-button' to='/add-user'>S'identifier</Link>
                    </div>



                </form>
            </div>
        </>
    );
    };

export default AddUser;
