import jsPDF from 'jspdf';
//npm install jspdf --save
import html2canvas from 'html2canvas';
//npm install --save html2canvas //for sceenShort
import React, { useState,useEffect} from 'react';
import axios from 'axios';
import classes from './htmlToPdf.css';

const ToPdf=()=>{

    const [allData,setAllData]=useState([]);
    const [allDataProduct,setAllDataProduct]=useState([]);
    const [prmoCodeOffer,setPrmoCodeOffert]=useState(0);
    const exportPdf = () => {
        pageData();
        html2canvas(document.querySelector("#capture")).then(canvas => {
            document.body.appendChild(canvas);  // if you want see your screenshot in body.
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', -35, 5);
            //pdf.save("download.pdf"); 
        });
        
    }

    useEffect(()=>{
       
        //exportPdf();
    },[])


    const pageData=()=>{

        axios.get('http://localhost:3819/api/loadCustomerInfo/1017').then(r=>{
            console.log(r.data);
            console.log(r.data.AllOrders[0].ProductCategoryLink.Product.pName);
            setAllData(r.data);
            //console.log(allData.Name);
            setAllDataProduct(r.data.AllOrders);
            setPrmoCodeOffert(r.data.PrmoCodeOffer);

        })
    }



    let totalPrice=0;

    return(
        <div>
            <button onClick={exportPdf}>Print</button>

            <div  id="capture"> 
                <h2>Memo</h2>
                <table className={classes.table}>
                    <tr>
                        <td>Order Data </td>
                        <td></td>
                        <td>Order ID </td>
                        <td>{allData.ID}</td>
                    </tr>
                    <tr>
                        <td>Name </td>
                        <td>{allData.Name}</td>
                        <td>Phone </td>
                        <td>{allData.Phone}</td>
                    </tr>

                </table>
                <h3>Orderd Peoduct</h3>
                <table className={classes.table}>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total Price</th>
                    </tr>
                    {
                        
                        allDataProduct.map(data=>{
                            
                            //updateTotalPrice(Number(data.ProductCategoryLink.Product.Price.replace(/,/g, ''))*Number(data.Quantity));
                            totalPrice=totalPrice+Number(data.ProductCategoryLink.Product.Price.replace(/,/g, ''))*Number(data.Quantity);
                            return(
                                <tr key={data.ProductCategoryLink.Product.ID}>
                                    <td>{data.ProductCategoryLink.Product.ID}</td>
                                    <td>{data.ProductCategoryLink.Product.pName}</td>
                                    <td>{data.Quantity}</td>
                                    <td>{data.ProductCategoryLink.Product.Price}</td>
                                    <td>{Number(data.ProductCategoryLink.Product.Price.replace(/,/g, ''))*Number(data.Quantity)}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total </td>
                        <td>{totalPrice}</td>
                    </tr>

                    {prmoCodeOffer>0?
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>PromoCode Applied</td>
                        <td style={{color:'red'}}>-{((totalPrice*10)/100)}</td>
                    </tr>
                    :null}

                    {prmoCodeOffer>0?
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>New Price</td>
                            <td>{totalPrice-((totalPrice*10)/100)}</td>
                        </tr>
                    :null}
                </table>
            </div>
        </div>
    )

}

export default ToPdf;
