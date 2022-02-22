import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateCategory = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [item, setItem] = useState({
        name: "",
    });

    const { name } = item;
    useEffect(() => {
        loadItem();
    }, []);

    const onInputChange = e => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`https://localhost:7121/api/category/update/${id}`, item).then(() => {
            toast("🦄 Cập nhật thành công");
            setTimeout(() =>{
                navigate('/admin/categories');
            }, 2000)
        }).catch(function (error) {
            toast("🦄 Cập nhật thất bại");
            console.log(error);
        });
    };
    

    const loadItem = async () => {
        const result = await axios.get(`https://localhost:7121/api/category/${id}`);
        setItem(result.data);
    };

    
    

        return (
            <>
            
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
                <div className="col p-5">
                    <div className='col-md-6'>
                    <div className='flex-head'>
                        <h3 className='tblheading'>Thêm danh mục tin tức</h3>
                    </div>

                    <form onSubmit={e => onSubmit(e)} className='tblform'>
                        <div className="form-group">
                            <label>Tên danh mục</label>
                            <input type="text" className="form-control" placeholder='Nhập tên danh mục' 
                                name="name"
                                value={name}
                                onChange={e => onInputChange(e)}/>
                        </div>
                        <div className="form-group">
                        <button className='tblbtn' type='submit'>Update Employee</button>
                        </div>
                    </form>

                    <Link to="/admin/categories">Hủy</Link>
                </div>
            </div>
                    
                
            </>

        )
    }

export default UpdateCategory;
