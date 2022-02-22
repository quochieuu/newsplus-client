import React from 'react'
import { Link } from 'react-router-dom';
import './sidebar.scss';
import 'boxicons';


const Sidebar = () => {
    return (
        <>
            <div id="sidebar-container" class="sidebar-expanded d-none d-md-block">
        <ul class="list-group">
            <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>QUẢN LÝ CHUNG</small>
            </li>
            <Link to="/admin" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-th-large fa-chart-line mr-3"></span>
                    <span class="menu-collapsed">Dashboard</span>
                    <span class="submenu-icon ml-auto"></span>
                </div>
            </Link>
            <Link to="/admin/categories" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-th-large fa-fw mr-3"></span>
                    <span class="menu-collapsed">Danh mục</span>
                </div>
            </Link>
            <Link to="/admin/news" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-newspaper fa-fw mr-3"></span>
                    <span class="menu-collapsed">Tin tức</span>
                </div>
            </Link>
            <Link to="/admin" data-toggle="collapse" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-user fa-user-plus mr-3"></span>
                    <span class="menu-collapsed">Người đăng ký</span>
                    <span class="submenu-icon ml-auto"></span>
                </div>
            </Link>
            <Link to="/admin" data-toggle="collapse" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-users fa-fw mr-3"></span>
                    <span class="menu-collapsed">Người dùng</span>
                    <span class="submenu-icon ml-auto"></span>
                </div>
            </Link>
            <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>CÁ NHÂN</small>
            </li>
            <Link to="/profile" class="bg-dark list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-user fa-fw mr-3"></span>
                    <span class="menu-collapsed">Hồ sơ</span>
                </div>
            </Link>
            
            <li class="list-group-item sidebar-separator menu-collapsed"></li>   
            <Link to="/logout" class="bg-dark list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    {/* <span class="fas fa-sign-out fa-fw mr-3"></span> */}
                    <span class="menu-collapsed">Đăng xuất</span>
                </div>
            </Link> 
        </ul>
    </div>
        </>

    )
}

export default Sidebar;
