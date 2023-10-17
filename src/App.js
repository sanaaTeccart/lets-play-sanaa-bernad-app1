//EXTERNAL IMPORTS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import User from './pages/User';
import Home from './pages/Home';
import AddUser from './pages/AddUser';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/' element={<Home />} />
        <Route path='/users/:id' element={<User />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App