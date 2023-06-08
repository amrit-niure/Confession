
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import FAQs from './components/FAQs'
import Categories from './components/Categories'
import SideMenu from './components/SideMenu'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route element={<Header />}>
          <Route index element={<Home />}/>
          <Route path='categories' element={<Categories />}/>
          <Route path='about' element={<About />}/>
          <Route path='feedback' element={<FAQs />}/>
          </Route>
          <Route path='login' element={<LogIn />}/>
          <Route path='signup' element={<SignUp />}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
