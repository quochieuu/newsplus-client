import React from 'react';

import './news-card.scss';

import { Link } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';

const NewsCard = props => {

    const item  = props.item;

    console.log(item)

    const link = '/detail/' + item.slug;

    const bg = apiConfig.w500Image(item.urlImage);

    return (
        <div className="item mb-5">
            <div className="media">
                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={bg} alt={item.title}/>
                <div className="media-body">
                    <h3 className="title mb-1"><Link to={link}>{item.title}</Link></h3>
                    <div className="meta mb-1"><span className="date">Published 2 days ago</span><span className="time">5 min read</span><span className="comment">
                        <Link to={link}>8 comments</Link></span></div>
                    <div className="intro">{item.description}</div>
                    <Link className="more-link" to={link}>Read more &rarr;</Link>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;