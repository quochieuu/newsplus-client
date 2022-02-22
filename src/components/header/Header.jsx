import React from 'react';

import '../../styles/app.scss';

import { Link, useLocation } from 'react-router-dom';

const sidebar = [
    {
        display: 'Home',
        path: '/',
        icon: 'fas fa-home fa-fw mr-2'
    },
    {
        display: 'Blog Post',
        path: '/detail',
        icon: 'fas fa-newspaper fa-fw mr-2'
    },
    {
        display: 'About',
        path: '/detail',
        icon: 'fas fa-envelope-open-text fa-fw mr-2'
    }
];

const socialContact = [
    {
        icon: 'fab fa-twitter fa-fw',
        path: '/'
    },
    {
        icon: 'fab fa-linkedin-in fa-fw',
        path: '/'
    },
    {
        icon: 'fab fa-github-alt fa-fw',
        path: '/'
    },
    {
        icon: 'fab fa-stack-overflow fa-fw',
        path: '/'
    },
    {
        icon: 'fab fa-codepen fa-fw',
        path: '/'
    }
]

const Header = () => {
    const { pathname } = useLocation();

    const active = sidebar.findIndex(e => e.path === pathname);
    return (
        <>
            <header className="header text-center">	    
                <h1 className="blog-name pt-lg-4 mb-0"><Link to="/">News Plus</Link></h1>
                
                <nav className="navbar navbar-expand-lg navbar-dark" >
                
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="navigation" className="collapse navbar-collapse flex-column" >
                        <div className="profile-section pt-3 pt-lg-0">
                            <ul className="social-list list-inline py-3 mx-auto">
                                {
                                    socialContact.map((e, i) => (
                                        <li className="list-inline-item">
                                            <a href={e.path}>
                                                <i className={e.icon}></i>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                            <hr /> 
                        </div>
                        
                        <ul className="navbar-nav flex-column text-left">
                            {
                                sidebar.map((e, i) => (
                                    <li key={i} className={`${i === active ? 'nav-item active' : 'nav-item'}`}>
                                        <Link className="nav-link" to={e.path}><i className={e.icon}></i>{e.display} <span className="sr-only">(current)</span></Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;