import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function deleteCategory (id) {

    axios.delete("https://localhost:7121/api/news/delete/" + id).then(() => {
        window.location.reload();
        
    }).catch(function (error) {
        console.log(error);
    });
}


const NewsRow = props => {
   
    const item  = props.item;
    const linkUpdate = '/admin/news/update/' + item.id;

    

    return (
        <>
        
        <tr>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{ item.status === 0 ? <span className='tblhide'>Ẩn</span> : <span className='tblshow'>Hiện</span>}</td>
            <td>
                <Link to={linkUpdate}><i class="far fa-edit tblico"></i></Link>
                <button className='tblico' onClick={() => deleteCategory(item.id)}><i class="fas fa-trash-alt tblico"></i></button>
            </td>
        </tr>
        </>
    );
}

export default NewsRow;