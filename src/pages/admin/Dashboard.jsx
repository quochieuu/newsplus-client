import React from 'react'
import AdminDashboard from '../../components/admin/dashboard/Dashboard';
import Sidebar from '../../components/admin/sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div class="container-fluid p-0">
            <div class="row" id="body-row">
                <Sidebar/>
                <AdminDashboard/>
            </div>
        </div>
    )
}

export default Dashboard;