import React from 'react'
import "./productList.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        {field: 'id', headerName: 'ID', width: 90, flex: 1},
        {field: 'name', headerName: 'Name', width: 200, flex: 1},
        {field: 'stock', headerName: 'Stock', with: 140, flex: 1},
        {field: 'status', headerName: 'Status', with: 140, flex: 1},
        {field: 'price', headerName: 'Price', with: 200, flex: 1},
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            flex: 1,
            renderCell: (params)=>{
                return(
                    <> 
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                );
            }
        }
    ];

    return (
        <div className="productList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection/>
        </div>
    )
}
