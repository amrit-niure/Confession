
import './App.css'
import Main from './components/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import FAQs from './components/FAQs'
import Categories from './components/Categories'
import SideMenu from './components/SideMenu'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import FirstHeader from './components/FirstHeader'
import Profile from './components/Profile'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<FirstHeader />} >
          <Route index element={<LogIn />} />
          <Route path='signup' element={<SignUp />} />
          </Route>
          <Route path='/:id'element={<Main />}>
            <Route index element={<Home />} />
            <Route path='categories' element={<Categories />} />
            <Route path='about' element={<About />} />
            <Route path='feedback' element={<FAQs />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
