import React from 'react'
import "./product.css"
import {Link} from 'react-router-dom';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";


export default function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
                <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                  <LineChart data={productData}>
                      <XAxis dataKey="name" stroke="#112D4E"/>
                      <Line type="monotone" dataKey="Sales" stroke="#112D4E" />
                      <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="" alt="" className="productInfoImg"/>
                    <span className="productName">Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">5123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder="Airpods"/>
                    <label>In Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="" alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish />
                        </label>
                        <input type="file" id="file" style={{display: "none"}}/>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
