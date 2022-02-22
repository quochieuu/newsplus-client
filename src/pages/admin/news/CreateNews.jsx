import React from 'react'
import CreateNews from '../../../components/admin/news/CreateNews';
import Sidebar from '../../../components/admin/sidebar/Sidebar';

const AdminCreateNews = () => {
    return (
        <div class="container-fluid p-0">
            <div class="row" id="body-row">
                <Sidebar/>
                <CreateNews/>
            </div>
        </div>
    )
}

export default AdminCreateNews;