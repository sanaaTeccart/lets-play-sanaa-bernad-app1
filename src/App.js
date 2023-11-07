//EXTERNAL IMPORTS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Users from "./pages/Users";
import User from "./pages/User"
import Login from './pages/Login';
 import Register from './pages/Register';
 import Me from "./pages/me";
 //import ResetScoreme from "./pages/ResetScoreme";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/login' element={<Register />} />
        <Route path='/' element={<Login />} />
        <Route path='/me' element={<Me />} />
      

        <Route path='/users' element={<Users />} />
        {/* //<Route path='/*' element={<NotFound />} /> */}
        <Route path='/users/:id' element={<User />} />
        {/* <Route path='/me/reset-score' element={<Me />} /> */}
       
      </Routes>
    </BrowserRouter>
  )
}

export default App