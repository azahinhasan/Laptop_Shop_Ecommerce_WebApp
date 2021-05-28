import React, { useRef ,useEffect} from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import classes from './htmlToPdf.css';
import axios from 'axios';
import { useParams } from 'react-router';
//import {withRouter,Redirect,useParams} from 'react-router-dom';

class ComponentToPrint extends React.Component {

    // const [allData,setAllData]=useState([]);
    // const [allDataProduct,setAllDataProduct]=useState([]);
    // const [prmoCodeOffer,setPrmoCodeOffert]=useState(0);
    //  {category} = useParams();
    state={
        allData:[],
        allDataProduct:[],
        prmoCodeOffer:0,
        totalPrice:0,
        
    
    }

    exportPdf = () => {
        this.pageData();
        // html2canvas(document.querySelector("#capture")).then(canvas => {
        //     document.body.appendChild(canvas);  // if you want see your screenshot in body.
        //     const imgData = canvas.toDataURL('image/png');
        //     const pdf = new jsPDF();
        //     pdf.addImage(imgData, 'PNG', -35, 5);
        //     //pdf.save("download.pdf"); 
        // });
        
    }


    pageData=()=>{

        axios.get('http://localhost:3819/api/loadCustomerInfo/'+this.props.orderedID).then(r=>{
           //console.log(r.data.AllOrders,'print');
           // setAllData(r.data);
            // setAllDataProduct(r.data.AllOrders);
            // setPrmoCodeOffert(r.data.PrmoCodeOffer);

            
            this.setState({allDataProduct:r.data.AllOrders,allData:r.data,prmoCodeOffer:r.data.PrmoCodeOffer})
            this.setState({allDataProduct:this.state.allData.AllOrders})
            
            if(this.state.allDataProduct.length==0){
                this.pageData();
            }
            
            console.log(this.state.allDataProduct,'allDataProduct');
            
        })
    }

    setupBeforeUnloadListener = () => {
        window.addEventListener("beforeunload", (ev) => 
        {  
            ev.preventDefault();
            return ev.returnValue = 'Are you sure you want to close?';
        });
    };

    componentDidMount() {
        
        this.pageData();
        this.setupBeforeUnloadListener();
    
    }

    componentDidUpdate(){
        this.setupBeforeUnloadListener();
    }


render() {
    return (
        <div  id="capture"> 
        <h2>Memo</h2>
        <table className={classes.table}>
            <tr>
                <td>Order Data </td>
                <td>{ Date().toLocaleString()}</td>
                <td>Order ID </td>
                <td>{this.state.allData.ID}</td>
            </tr>
            <tr>
                <td>Name </td>
                <td>{this.state.allData.Name}</td>
                <td>Phone </td>
                <td>{this.state.allData.Phone}</td>
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
                
                this.state.allDataProduct.map(data=>{
                    
                    //updateTotalPrice(Number(data.ProductCategoryLink.Product.Price.replace(/,/g, ''))*Number(data.Quantity));
                    this.state.totalPrice=this.state.totalPrice+Number(data.ProductCategoryLink.Product.Price.replace(/,/g, ''))*Number(data.Quantity);
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
                <td>{this.state.totalPrice}</td>
            </tr>

            {this.state.prmoCodeOffer>0?
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>PromoCode Applied</td>
                <td style={{color:'red'}}>-{((this.state.totalPrice*10)/100)}</td>
            </tr>
            :null}

            {this.state.prmoCodeOffer>0?
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>New Price</td>
                    <td>{this.state.totalPrice-((this.state.totalPrice*10)/100)}</td>
                </tr>
            :null}
        </table>
    </div>
    );
    }
}

const PrintToPDF = () => {
    const {orderedid} = useParams();
    //const {orderedid1} = useParams();
    //const orderedid=5;
    const componentRef = useRef();
    useEffect(() => {
        handlePrint();
    }, [])

    const handlePrint = useReactToPrint({
    content: () => componentRef.current,
});


return (
    <div>
    <div>
        <h1>Your Order Submitted..</h1>
        <h3>For any Qus call: 018XXXXXXXX</h3> 
    </div>
        <ComponentToPrint orderedID={orderedid} ref={componentRef} />
        <button onClick={handlePrint}>Print this out!</button>
    </div>
    );
};

//render(<PrintToPDF />, document.querySelector("#root"))

export default PrintToPDF; 