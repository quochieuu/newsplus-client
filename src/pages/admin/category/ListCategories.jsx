import React from 'react'
import ListCategories from '../../../components/admin/category/ListCategories';
import Sidebar from '../../../components/admin/sidebar/Sidebar';

const AdminCategory = () => {
    return (
        <div class="container-fluid p-0">
            <div class="row" id="body-row">
                <Sidebar/>
                <ListCategories/>
            </div>
        </div>
    )
}

export default AdminCategory;