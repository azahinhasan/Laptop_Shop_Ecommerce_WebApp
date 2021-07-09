import React, { useRef ,useEffect} from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import classes from './htmlToPdf2EmployeeInfo.css';
import { useParams } from 'react-router';
//import {withRouter,Redirect,useParams} from 'react-router-dom';
import axios from '../../api/axios';
class ComponentToPrint extends React.Component {

    // const [allData,setAllData]=useState([]);
    // const [allDataProduct,setAllDataProduct]=useState([]);
    // const [prmoCodeOffer,setPrmoCodeOffert]=useState(0);
    //  {category} = useParams();
    state={
        allData:[],
        loginData:'',
        rankData:[],
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
        console.log(this.props.userID);
        axios.get('/employeeInfo/'+this.props.userID).then(r=>{

            console.log(r.data);
            
            axios.get('/loginInfo/'+r.data.LoginTableID).then(r=>{
                this.setState({loginData:r.data})
            })

            this.setState({
                allData:r.data,
                rankData:r.data.EmployeeRank,
            })

            
            
            
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
        <h2>New Employee Recipt!</h2>
        <table className={classes.table}>
            <tr>
                <td>Name: </td>
                <td>{this.state.allData.Name}</td>
            </tr>
            <tr>
                <td>Email: </td>
                <td>{this.state.allData.Email}</td>
            </tr>
            <tr>
                <td>Password: </td>
                <td>{this.state.loginData}</td>
            </tr>
            <tr>
                <td>Rank: </td>
                <td>{this.state.rankData.Rank}</td>
            </tr>
        </table>
    </div>
    );
    }
}

const PrintToPDF = () => {
    const {userID} = useParams();
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
    </div>
        <ComponentToPrint userID={userID} ref={componentRef} />
        <br/>
        <button onClick={handlePrint}>Print this out!</button>
    </div>
    );
};

//render(<PrintToPDF />, document.querySelector("#root"))

export default PrintToPDF; 