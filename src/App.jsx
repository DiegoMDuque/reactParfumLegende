import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import UsersApi from './components/Api/UsersApi' 
import UsersApi from './components/Api/ProductsApi' 
import UsersApi from './components/Api/CategoriesApi' 

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="categories" element={<CategoriesApi />} />
                    <Route path="products" element={<ProductsApi />} />
                    <Route path="users" element={<UsersApi />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
