import React from 'react'
import UpdateCategory from '../../../components/admin/category/UpdateCategory';
import Sidebar from '../../../components/admin/sidebar/Sidebar';

const AdminUpdateCategory = () => {
    return (
        <div class="container-fluid p-0">
            <div class="row" id="body-row">
                <Sidebar/>
                <UpdateCategory/>
            </div>
        </div>
    )
}

export default AdminUpdateCategory;