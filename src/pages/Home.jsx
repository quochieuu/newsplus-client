import React from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Subscribe from '../components/home/Subscribe'
import NewsList from '../components/news-list/NewsList';

const Home = () => {
    return (
        <>
        <Header/> 
        <div className="main-wrapper">
            <Subscribe/>
            <NewsList/>
        </div>
        <Footer/>
        </>
    )
}

export default Home;