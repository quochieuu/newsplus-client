import React from 'react'
import UpdateNews from '../../../components/admin/news/UpdateNews';
import Sidebar from '../../../components/admin/sidebar/Sidebar';

const AdminUpdateNews = () => {
    return (
        <div class="container-fluid p-0">
            <div class="row" id="body-row">
                <Sidebar/>
                <UpdateNews/>
            </div>
        </div>
    )
}

export default AdminUpdateNews;