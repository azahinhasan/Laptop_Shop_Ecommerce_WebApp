import React from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import classes from './employee.css';

const ProductEdit = props =>{
    
    return (
        <div className={classes.Product}>
    
        <label>Search</label>
        <input type=""></input>
        <button>Search</button>

        <table className={classes.Form}> 
            <tr>
                <td>Name</td>
                <td><input></input></td>
            </tr>
            <tr>
                <td> <label>Price</label></td>
                <td><input type="number"></input></td>
            </tr>
            <tr>
                <td><label>Status</label></td>
                <td>
                    <select>
                        <option value="In Stock">In Stock</option>
                        <option value="Out Stock">Out Stock</option>
                        <option value="Up Coming">Up Coming</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><label>Brand</label></td>
                <td>
                    <select>
                        <option value="1">RAZER</option>
                        <option value="2">HP</option>
                        <option value="3">ASUS</option>
                        <option value="4">APPLE</option>
                        <option value="5">DELL</option>
                        <option value="6">MSI</option>
                        <option value="7">LENOVO</option>
                        <option value="8">ACER</option>
                        <option value="9">Team</option>
                        <option value="10">WESTERN DIGITAL</option>
                        <option value="11">Antec</option>
                    </select>
                </td>
            </tr>

        </table>
        
        </div>
    );
    } 

export default ProductEdit;





