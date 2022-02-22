import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import newsPlusApi from '../api/newsPlusApi';
import Moment from 'moment';
import apiConfig from '../api/apiConfig';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Detail = () => {
    const { slug } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await newsPlusApi.detail(slug, {params:{}});

            setItem(response);
        }
        getDetail();
        
    }, [slug]);


    return (
        <>
        <Header/> 
        {
            item && (
                <>
                    <div class="main-wrapper">
                        <article class="blog-post px-3 py-5 p-md-5">
                            <div class="container">
                                <header class="blog-post-header">
                                    <h2 class="title mb-2">{item.title}</h2>
                                    <div class="meta mb-3"><span class="date">Published {Moment(item.createdDate).format('ddd, MM-yyyy')}</span></div>
                                </header>
                                
                                <div class="blog-post-body">
                                    <img src={`${apiConfig.endpoint}/news/images/${item.urlImage}`} alt={item.title} />
                                    <div dangerouslySetInnerHTML={ { __html:item.content} }></div>
                                </div>
                                
                                    
                                <nav class="blog-nav nav nav-justified my-5">
                                <a class="nav-link-prev nav-item nav-link rounded-left" href="/">Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                                <a class="nav-link-next nav-item nav-link rounded-right" href="/">Next<i class="arrow-next fas fa-long-arrow-alt-right"></i></a>
                                </nav>
                                
                            </div>
                        </article>
                    </div>
                </>
            )
        }
        <Footer/>
        </>
        
    
    )
}

export default Detail;