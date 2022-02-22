import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoditEditor from "jodit-react";
import newsPlusApi from '../../../api/newsPlusApi';

const CreateNews = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [urlImage] = useState('');
    const [selectedFile, setSelectedFile] = React.useState(null);
    const navigate = useNavigate();
    const editor = useRef(null);

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            
            response = await newsPlusApi.getCategories();
                
            setItems(response);
        }
        getList();
    }, []);

	const config = {
		readonly: false
	}


    const addNews = () => {
        axios.post("https://localhost:7121/api/news/create", {
            title: title,
            description: description,
            urlImage: '',
            content: content,
            categoryId: categoryId,
            status: 1
        }).then((res) => {
            const data  = new FormData()
            data.append('UrlImage', selectedFile)
            console.log(urlImage)
            console.log(data)
            axios.post("https://localhost:7121/api/news/create-image/" + res.data.id, data, {
                headers: {
                    'content-type': 'multipart/form-data'
                },
            }).then(() => {
                toast("🦄 Thêm mới thành công");
                setTimeout(() =>{
                    navigate('/admin/news');
                }, 2000)
            }).catch(function (error) {
                toast("🦄 Thêm mới thất bại");
                console.log(error);
            });
            
            toast("🦄 Thêm mới thành công");
            setTimeout(() =>{
                navigate('/admin/news');
            }, 2000)
        }).catch(function (error) {
            toast("🦄 Thêm mới thất bại");
            console.log(error);
        });
    };

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
      }


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
                        <h3 className='tblheading'>Thêm tin tức</h3>
                    </div>

                    <div className='tblform'>
                        <div className="form-group">
                            <label>Tiêu đề bài viết</label>
                            <input type="text" className="form-control" placeholder='Nhập tiêu đề bài viết' 
                                onChange={(event) => {
                                setTitle(event.target.value);
                            }}/>
                        </div>
                        <div className='form-group'>
                            <label>Mô tả</label>
                            <textarea className="form-control" onChange={(event) => {
                                setDescription(event.target.value);
                            }} cols="30" rows="5"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Nội dung</label>
                            <JoditEditor
                                ref={editor}
                                value={content}
                                config={config}
                                tabIndex={1} 
                                onBlur={newContent => setContent(newContent)} 
                                onChange={(event) => {
                                    setContent(event.target.value);
                                }}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Danh mục</label>
                            <select className="form-control" onChange={(event) => {
                                setCategoryId(event.target.value);
                            }}>
                                <option value="">--Chọn danh mục--</option>
                                {
                                    items.map((item, i) => (
                                        <option value={ item.id }>{ item.name }</option>
                                    ))
                                }
                            </select>
                        </div>
                        
                        <div className="form-group">
                        <button className='tblbtn' onClick={addNews}>Xuất bản</button>
                        </div>
                    </div>

                    <Link to="/admin/news">Hủy</Link>
                </div>
                <div className='col-md-4'>
                    <div className='tblform'>
                            <div className='form-group'>
                                <label>Ảnh bài viết</label>
                                <input type="file" className="form-control" onChange={handleFileSelect}/>
                            </div>
                    </div>
                </div>
                    </div>
            </div>
                    
                
            </>

        )
    }

export default CreateNews;
