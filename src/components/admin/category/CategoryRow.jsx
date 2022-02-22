import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function deleteCategory (id) {

    axios.delete("https://localhost:7121/api/category/delete/" + id).then(() => {
        window.location.reload();
        
    }).catch(function (error) {
        console.log(error);
    });
}


const CategoryRow = props => {
   
    const item  = props.item;
    const linkUpdate = '/admin/category/update/' + item.id;

    

    return (
        <>
        
        <tr>
            <td>{item.name}</td>
            <td>{item.slug}</td>
            <td>{ item.status === 0 ? <span className='tblhide'>Ẩn</span> : <span className='tblshow'>Hiện</span>}</td>
            <td>
                <Link to={linkUpdate}><i class="far fa-edit tblico"></i></Link>
                <button className='tblico' onClick={() => deleteCategory(item.id)}><i class="fas fa-trash-alt tblico"></i></button>
            </td>
        </tr>
        </>
    );
}

export default CategoryRow;