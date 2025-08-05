// import React from 'react'
// import "./CreateInvoiceSuccess.css";
// import { IoIosArrowForward } from 'react-icons/io';

// const CreateInvoiceSuccess = () => {

//     const styles = {
//     container: {
//       maxWidth: "800px",
//       margin: "auto",
//       padding: "40px",
//       border: "1px solid #ccc",
//       fontFamily: "Arial, sans-serif",
//       fontSize: "14px",
//       color: "#333",
//       backgroundColor: "#fff",
//     },
//     header: {
//       textAlign: "right",
//       fontSize: "35px",
//       letterSpacing: "4px",
//       fontWeight: "300",
//         // borderLeft: "1px solid #ccc",

//     },
//     section: {
//       marginBottom: "20px",
//     },
//     label: {
//       fontWeight: "bold",
//     },
//     rowBetween: {
//       display: "flex",
//       justifyContent: "space-between",
//     },
//     table: {
//       width: "100%",
//       borderCollapse: "collapse",
//       marginTop: "20px",
//     },
//     thtd: {
//     //   borderBottom: "1px solid #ccc",
//       padding: "8px",
//       textAlign: "left",
//     },
//     rightAlign: {
//       textAlign: "right",
//     },
//     totalSection: {
//       marginTop: "20px",
//     },
//     footer: {
//       marginTop: "40px",
//       fontSize: "13px",
//       textAlign: "center",
//       color: "#666",
//     },
//     btns: {
//       marginTop: "20px",
//       display: "flex",
//       gap: "10px",
//       justifyContent: "center",
//     },
//     btn: {
//       padding: "6px 16px",
//       border: "1px solid #aaa",
//       background: "#f2f2f2",
//       borderRadius: "4px",
//       cursor: "pointer",
//     },
//   };
//   return (
//     <div className="ac-containers">
//         <div className="ac-path">
//                 <span className="gray-color">Sales</span>
//                 <span style={{marginTop:"5px"}}>
//                   <IoIosArrowForward />
//                 </span>

//                 <span className="ac-name">Create Sales Order</span>
//               </div>

//               <div style={styles.container}>
//       <div style={styles.header}>INVOICE</div>

//       <div style={{ ...styles.section, ...styles.rowBetween }}>
//         <div>
//           <div><span style={styles.label}>INVOICE NO:</span> 01234</div>
//           <div><span style={styles.label}>DATE:</span> 11.02.2025</div>
//         </div>
//         <div><span style={styles.label}>DUE DATE:</span> 11.03.2025</div>
//       </div>

//       <div style={styles.section}>
//         <div style={styles.label}>ISSUED FROM:</div>
//         <div>Your Company Name</div>
//         <div>123 Anywhere St., Any City</div>
//         <div>Email - companyxyz@gmail.com, Phone - +91-XXXXXXXXXX</div>
//         <div>GSTIN - 27XXXXXXXXX125</div>
//       </div>

//       <div style={styles.section}>
//         <div style={styles.label}>ISSUED TO:</div>
//         <div>Client Name</div>
//         <div>456 Client Street, Commercial Zone, City, PIN - 111111</div>
//         <div>Email - companyxyz@gmail.com, Phone - +91-XXXXXXXXXX</div>
//       </div>

//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.thtd}>DESCRIPTION</th>
//             <th style={styles.thtd}>UNIT PRICE</th>
//             <th style={styles.thtd}>QTY</th>
//             <th style={styles.thtd}>TOTAL</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style={styles.thtd}>Wheel Chair</td>
//             <td style={styles.thtd}>₹5000</td>
//             <td style={styles.thtd}>1</td>
//             <td style={styles.thtd}>₹5000</td>
//           </tr>
//           <tr>
//             <td style={styles.thtd}>Luxury Bag</td>
//             <td style={styles.thtd}>₹735</td>
//             <td style={styles.thtd}>2</td>
//             <td style={styles.thtd}>₹1470</td>
//           </tr>
//           <tr>
//             <td style={styles.thtd}>Gaming Mouse</td>
//             <td style={styles.thtd}>₹690</td>
//             <td style={styles.thtd}>1</td>
//             <td style={styles.thtd}>₹690</td>
//           </tr>
//         </tbody>
//       </table>

//       <div style={styles.totalSection}>
//         <div style={styles.rowBetween}>
//           <div><strong>SUBTOTAL</strong></div>
//           <div>₹7160</div>
//         </div>
//         <div style={styles.rowBetween}>
//           <div>Tax +18%</div>
//           <div>₹1288.8</div>
//         </div>
//         <div style={styles.rowBetween}>
//           <div>Shipping Charges</div>
//           <div>₹200</div>
//         </div>
//         <div style={styles.rowBetween}>
//           <div><strong>Subtotal with Tax</strong></div>
//           <div>₹8648.8</div>
//         </div>
//         <div style={styles.rowBetween}>
//           <div>Discount -10%</div>
//           <div>-₹864.88</div>
//         </div>
//         <div style={{ ...styles.rowBetween, fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
//           <div>TOTAL</div>
//           <div>₹7783.92</div>
//         </div>
//       </div>

//       <div style={{ marginTop: "30px" }}>
//         <div style={styles.label}>PAY TO:</div>
//         <div>ICICI Bank</div>
//         <div>Account Name: Account Holder Name</div>
//         <div>Account No.: 0123 4567 8901</div>
//         <div>IFSC - ICIC0001234</div>
//       </div>

//       <div style={styles.footer}>
//         This is a computer-generated invoice and does not require a physical signature.
//       </div>

//       <div style={styles.btns}>
//         <button style={styles.btn}>Email</button>
//         <button style={styles.btn}>PDF</button>
//         <button style={styles.btn}>Print</button>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default CreateInvoiceSuccess

import React from "react";
import "./CreateInvoiceSuccess.css";
import { IoIosArrowForward } from "react-icons/io";

const CreateInvoiceSuccess = () => {
  return (
    <div className="ac-containerss">
      <div className="ac-path">
        <span className="gray-color">Sales</span>
        <span className="arrow-icon">
          <IoIosArrowForward />
        </span>
        <span className="ac-name">Create Invoice</span>
      </div>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "30px",
          width: "40%",
          minWidth: "750px",
          border: "1px solid #007B42",
          backgroundColor: "#BAFFDF",
          borderRadius: "4px",
          padding: "7px 8px",
          // maxWidth: "930px",
          margin: "auto",
        }}
      >
        <span>🎉 You have successfully created a Invoice.</span>
      </div>

      <div
        style={{
          background: "#F1F1F1",
          maxWidth: "579px",
          margin: "auto",
          padding: "30px",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="invoice-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
              width: "100%",
            }}
          >
            <div style={{ width: "70%", marginTop: "22px" }}>
              <hr />
            </div>
            <div className="invoice-header">INVOICE</div>
          </div>

          <div className="section ">
            <div>
              <div>
                <span className="label">INVOICE NO:</span> 01234
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>DUE DATE: 11.03.2025</span>
                <span>DATE: 11.02.2025</span>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="label">ISSUED FROM:</div>
            <div>Your Company Name</div>
            <div>123 Anywhere St., Any City</div>
            <div>Email - companyxyz@gmail.com, Phone - +91-XXXXXXXXXX</div>
            <div>GSTIN - 27XXXXXXXXX125</div>
          </div>

          <div className="section">
            <div className="label">ISSUED TO:</div>
            <div>Client Name</div>
            <div>456 Client Street, Commercial Zone, City, PIN - 111111</div>
            <div>Email - companyxyz@gmail.com, Phone - +91-XXXXXXXXXX</div>
          </div>

          <table className="invoice-table">
            <thead style={{ borderBottom: "2px solid #abababff" }}>
              <tr>
                <th>DESCRIPTION</th>
                <th>UNIT PRICE</th>
                <th>QTY</th>
                <th style={{ textAlign: "right" }}>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wheel Chair</td>
                <td>₹5000</td>
                <td>1</td>
                <td style={{ textAlign: "right" }}>₹5000</td>
              </tr>
              <tr>
                <td>Luxury Bag</td>
                <td>₹735</td>
                <td>2</td>
                <td style={{ textAlign: "right" }}>₹1470</td>
              </tr>
              <tr>
                <td>Gaming Mouse</td>
                <td>₹690</td>
                <td>1</td>
                <td style={{ textAlign: "right" }}>₹690</td>
              </tr>
            </tbody>
          </table>

          <div
            style={{ borderTop: "2px solid #abababff", paddingTop: "15px" }}
            className="total-section"
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <strong>SUBTOTAL</strong>
              </div>
              <div>
                {" "}
                <strong>₹7160</strong>{" "}
              </div>
            </div>
            <div className="row-between">
              <div>Tax </div>
              <div>+18%</div>
            </div>
            <div className="row-between">
              <div>Shipping Charges</div>
              <div>₹200</div>
            </div>
            <div
              className="row-between"
              style={{
                borderTop: "2px solid #abababff",
                marginTop: "7px",
                paddingTop: "8px",
              }}
            >
              <div>
                <strong>₹8648.8</strong>
              </div>
            </div>
            <div className="row-between" style={{ marginTop: "25px" }}>
              <div>Discount </div>
              <div>-10%</div>
            </div>
            <div
              className="row-between grand-total"
              style={{ borderTop: "2px solid #abababff", paddingTop: "5px" }}
            >
              <div>TOTAL</div>
              <div>₹7783.92</div>
            </div>
          </div>

          <div className="payment-info">
            <div className="label">PAY TO:</div>
            <div>ICICI Bank</div>
            <div>Account Name: Account Holder Name</div>
            <div>Account No.: 0123 4567 8901</div>
            <div>IFSC - ICIC0001234</div>
          </div>

          <div className="invoice-footer">
            This is a computer-generated invoice and does not require a physical
            signature.
          </div>
        </div>
        <div className="action-buttons">
          <button>Email</button>
          <button>Downlaod PDF</button>
          <button style={{ background: "black", color: "white" }}>Print</button>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoiceSuccess;
