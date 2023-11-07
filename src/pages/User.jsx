//exteral import
import { useParams, useNavigate  } from "react-router-dom";
//interal import
import { findById, updateById} from "../controllers/users";
import {useState, useEffect} from 'react';







const User = ()=> {
  const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
   
    const navigate = useNavigate();

   const {id}=useParams();
    const user =findById(id)


      useEffect(() => {
    // Récupération des données de l'utilisateur par ID
    const fetchData = async () => {
      const user = await findById(id);
      setUserName(user.username);
      setEmail(user.email);
      setPassWord(user.password);
    };
    
    fetchData();
  }, [id]);

     
     const handlOnSubmit = async (e) => {
        e.preventDefault();
        await updateById(id, { username, email, password })
        
     navigate('/users');

    }

     const handlOnChangeUserName = (e) => {
        setUserName(e.target.value);
      };
      const handlOnChangePassWord = (e) => {
        setPassWord(e.target.value);
      };
    
      const handlOnChangeEmail = (e) => {
        setEmail(e.target.value);
      };
      

     
    

  return (

    <div className='container'>
    <h1>Bienvenu </h1>
    <h4>Voulez vous modifier  le Compte au id :{id}</h4>
    
    
    
<form onSubmit={handlOnSubmit}>



     <input
        className="btn"
        type="text"
        name="username"
        placeholder='*username'
        value={username}
        onChange={handlOnChangeUserName}
      />
      {/* {userNameError && <div className="input-error">{userNameError}</div>} */}

      <input
        className="btn"
        type="email"
        placeholder='*email*'
        value={email}
        onChange={handlOnChangeEmail}
      />
      {/* {emailError && <div className="input-error">{emailError}</div>} */}

      <input
        className="btn"
        type="password"
        placeholder='*password*'
        value={password}
        onChange={handlOnChangePassWord}
      />
      {/* </form>{passWordError && <div className="input-error">{passWordError}</div>} */}

      <button type='submit' className="btn-primary">Modifier</button>

</form>
</div>


  )

  }
export default User