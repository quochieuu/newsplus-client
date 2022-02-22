import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoditEditor from "jodit-react";

const UpdateNews = () => {
    const navigate = useNavigate();
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const { id } = useParams();
    const [news, setNews] = useState({
        title: "",
        description: "",
        content: "",
    });

    const { title, description } = news;

    useEffect(() => {
        loadNews();
    }, []);

    const onInputChange = e => {
        setNews({ ...news, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`https://localhost:7121/api/news/update/${id}`, news).then(() => {
            toast("🦄 Cập nhật thành công");
            setTimeout(() =>{
                navigate('/admin/news');
            }, 2000)
        }).catch(function (error) {
            toast("🦄 Cập nhật thất bại");
            console.log(error);
        });
    };

	const config = {
		readonly: false,
	}

    const loadNews = async () => {
        const result = await axios.get(`https://localhost:7121/api/news/${id}`);
        setNews(result.data);
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
                    <div className="row">
                    <div className='col-md-8'>
                    <div className='flex-head'>
                        <h3 className='tblheading'>Cập nhật tin tức</h3>
                    </div>

                    <form onSubmit={e => onSubmit(e)} className='tblform'>
                        <div className="form-group">
                            <label>Tiêu đề bài viết</label>
                            <input type="text" className="form-control" placeholder='Nhập tiêu đề bài viết' 
                                name="title"
                                value={title}
                                onChange={e => onInputChange(e)}/>
                        </div>
                        <div className='form-group'>
                            <label>Mô tả</label>
                            <textarea className="form-control" 
                            name="description"
                                value={description}
                                onChange={e => onInputChange(e)} cols="30" rows="5"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Nội dung</label>
                            <JoditEditor
                                ref={editor}
                                value={content}
                                config={config}
                                // name={content}
                                onBlur={content => setContent(content)} 
                                tabIndex={1} 
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        {/* <div className='form-group'>
                            <label>Danh mục</label>
                            <select className="form-control" name="categoryId"
                                value={categoryId}
                                onChange={e => onInputChange(e)}>
                                <option value="">--Chọn danh mục--</option>
                            </select>
                        </div> */}
                        
                        <div className="form-group">
                        <button className='tblbtn' type='submit'>Cập nhật</button>
                        </div>
                    </form>

                    <Link to="/admin/news">Hủy</Link>
                </div>
                {/* <div className='col-md-4'>
                    <div className='tblform'>
                            <div className='form-group'>
                                <label>Ảnh bài viết</label>
                                <input type="file" className="form-control" onChange={handleFileSelect}/>
                            </div>
                    </div>
                </div> */}
                    </div>
            </div>
                    
                
            </>

        )
    }

export default UpdateNews;
