import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Dashboard from '../pages/admin/Dashboard';
import AdminCategory from '../pages/admin/category/ListCategories';
import AdminCreateCategory from '../pages/admin/category/CreateCategory';
import AdminUpdateCategory from '../pages/admin/category/UpdateCategory';
import AdminNews from '../pages/admin/news/ListNews';
import AdminCreateNews from '../pages/admin/news/CreateNews';
import AdminUpdateNews from '../pages/admin/news/UpdateNews';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/detail/:slug' element={<Detail/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/admin' element={<Dashboard/>}></Route>
            <Route path='/admin/categories' element={<AdminCategory/>}></Route>
            <Route path='/admin/category/create' element={<AdminCreateCategory/>}></Route>
            <Route path='/admin/category/update/:id' element={<AdminUpdateCategory/>}></Route>

            <Route path='/admin/news' element={<AdminNews/>}></Route>
            <Route path='/admin/news/create' element={<AdminCreateNews/>}></Route>
            <Route path='/admin/news/update/:id' element={<AdminUpdateNews/>}></Route>
        </Routes>
    )
}

export default AppRoutes;