import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './news-list.scss';
import newsPlusApi from '../../api/newsPlusApi';
import NewsCard from '../news-card/NewsCard';
import { Link } from 'react-router-dom';


const NewsList = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            
            response = await newsPlusApi.getNewsList();
                
            setItems(response);
        }
        getList();
    }, []);

    return (
        <section className="blog-list px-3 py-5 p-md-5">
            <div className="container">
                {
                    items.map((item, i) => (
                        <NewsCard item={item} key={i}/>
                    ))
                }
                <nav className="blog-nav nav nav-justified my-5">
                  <Link className="nav-link-next nav-item nav-link rounded" to='/all'>Xem thêm<i className="arrow-next fas fa-long-arrow-alt-right"></i></Link>
                </nav>
            </div>
        </section>
    )
}

NewsList.propTypes = {
    category: PropTypes.string.isRequired
}

export default NewsList;