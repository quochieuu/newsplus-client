import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import newsPlusApi from '../../../api/newsPlusApi';
import NewsRow from './NewsRow';

const ListNews = () => {

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
        <>
            <div className="col p-5">
                <div className='flex-head'>
                    <h3 className='tblheading'>Tin tức</h3>
                    <Link to="/admin/news/create" className='tblbtn'>Thêm mới</Link>
                </div>
                
                <div className='round-tbl'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, i) => (
                                    <NewsRow item={item} key={i}/>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )
}

export default ListNews;
