import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import newsPlusApi from '../../../api/newsPlusApi';
import CategoryRow from './CategoryRow';

const ListCategories = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            
            response = await newsPlusApi.getCategories();
                
            setItems(response);
        }
        getList();
    }, []);

    return (
        <>
            <div className="col p-5">
                <div className='flex-head'>
                    <h3 className='tblheading'>Danh mục tin tức</h3>
                    <Link to="/admin/category/create" className='tblbtn'>Thêm mới</Link>
                </div>
                
                <div className='round-tbl'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Slug</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, i) => (
                                    <CategoryRow item={item} key={i}/>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )
}

export default ListCategories;
