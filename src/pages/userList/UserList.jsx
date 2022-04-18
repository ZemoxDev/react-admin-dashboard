import React from 'react'
import "./userList.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }
    
    const columns = [
        {field: 'id', headerName: 'ID', width: 90, flex: 1},
        {field: 'firstName', headerName: 'First Name', width: 130, flex: 1},
        {field: 'lastName', headerName: 'Last Name', width: 130, flex: 1},
        {field: 'email', headerName: 'Email', with: 200, flex: 1},
        {field: 'status', headerName: 'Status', with: 120, flex: 1},
        {field: 'transaction', headerName: 'Transaction', with: 160, flex: 1},
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            flex: 1,
            renderCell: (params)=>{
                return(
                    <> 
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                );
            }
        }
    ];

    return (
        <div className="userList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection/>
        </div>
    )
}
