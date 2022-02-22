import React from 'react'
import CreateCategory from '../../../components/admin/category/CreateCategory';
import Sidebar from '../../../components/admin/sidebar/Sidebar';

const AdminCreateCategory = () => {
    return (
        <div class="container-fluid p-0">
            <div class="row" id="body-row">
                <Sidebar/>
                <CreateCategory/>
            </div>
        </div>
    )
}

export default AdminCreateCategory;