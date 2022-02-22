import React from 'react'
import ListNews from '../../../components/admin/news/ListNews';
import Sidebar from '../../../components/admin/sidebar/Sidebar';

const AdminNews = () => {
    return (
        <div class="container-fluid p-0">
            <div class="row" id="body-row">
                <Sidebar/>
                <ListNews/>
            </div>
        </div>
    )
}

export default AdminNews;