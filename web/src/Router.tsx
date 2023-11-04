import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { PetDetails } from './pages/PetDetails'


export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detalhes" element={<PetDetails />} /> 
    </Routes>
  )
}
