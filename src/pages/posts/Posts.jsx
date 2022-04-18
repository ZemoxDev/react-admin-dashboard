import React from 'react'
import "./posts.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from '@material-ui/icons';
import { postsRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Posts() {
  const [data, setData] = useState(postsRows);

  const columns = [
    {field: 'id', headerName: 'ID', width: 90, flex: 1},
    {field: 'title', headerName: 'Title', width: 200, flex: 1},
    {field: 'slug', headerName: 'Slug', with: 140, flex: 1},
    {field: 'status', headerName: 'Status', with: 140, flex: 1},
    {field: 'views', headerName: 'Views', with: 200, flex: 1},
    {
        field: 'edit',
        headerName: 'Edit',
        width: 150,
        flex: 1,
        renderCell: (params)=>{
            return(
                <> 
                    <Link to={"/"}>
                        <button className="postsEdit">Edit</button>
                    </Link>
                </>
            );
        }
    },
    {
        field: 'view',
        headerName: 'View',
        width: 150,
        flex: 1,
        renderCell: (params)=>{
            return(
                <> 
                    <Link to={"/"}>
                        <button className="postsView">View</button>
                    </Link>
                </>
            );
        }
    }
  ];
  return (
    <div className="productList">
       <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
    </div>
  )
}
