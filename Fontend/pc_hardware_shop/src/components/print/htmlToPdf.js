import jsPDF from 'jspdf';
//npm install jspdf --save
import html2canvas from 'html2canvas';
//npm install --save html2canvas //for sceenShort
import React from 'react';


const ToPdf=()=>{
    const exportPdf = () => {

     html2canvas(document.querySelector("#capture")).then(canvas => {
        //document.body.appendChild(canvas);  // if you want see your screenshot in body.
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("download.pdf"); 
    });

 }

    return(
        <div id="capture">
            <p>Hello in my life</p>
            <span>How can hellp you</span>
            <button onClick={exportPdf}> Print</button>
        </div>
    )

}

export default ToPdf;
