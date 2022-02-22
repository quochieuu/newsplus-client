import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateCategory = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const addCategory = () => {
        axios.post("https://localhost:7121/api/category/create", {
            name: name,
            status: 1
        }).then(() => {
            toast("🦄 Thêm mới thành công");
            setTimeout(() =>{
                navigate('/admin/categories');
            }, 2000)
        }).catch(function (error) {
            toast("🦄 Thêm mới thất bại");
            console.log(error);
        });
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
            <ToastContainer />
                <div className="col p-5">
                    <div className='col-md-6'>
                    <div className='flex-head'>
                        <h3 className='tblheading'>Thêm danh mục tin tức</h3>
                    </div>

                    <div className='tblform'>
                        <div className="form-group">
                            <label>Tên danh mục</label>
                            <input type="text" className="form-control" placeholder='Nhập tên danh mục' 
                                onChange={(event) => {
                                setName(event.target.value);
                            }}/>
                        </div>
                        <div className="form-group">
                        <button className='tblbtn' onClick={addCategory}>Add Employee</button>
                        </div>
                    </div>

                    <Link to="/admin/categories">Hủy</Link>
                </div>
            </div>
                    
                
            </>

        )
    }

export default CreateCategory;
