import React from "react";
import "./SalesRecord.css";
import { IoSearch } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import { TbArrowsSort } from "react-icons/tb";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

import chair from "../images/chair.jpg";
import tshirt from "../images/tshirts.jpg";
import wheelchair from "../images/chair2.png";
import chair3 from "../images/chair3.jpg";
import cheery from "../images/cheery.jpg";
import mouse from "../images/mouse.jpg";
import sofa from "../images/sofa.jpg";
import tshirts2 from "../images/tshirts2.jpg";
import tshirts3 from "../images/tshirts3.jpg";
import bag from "../images/bag.jpg";

const SalesRecord = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const data = [
    {
      customer: "ABC Chair Factory",
      date: "01 Jan",
      status: "Pending",
      amount: "₹17,470.00",
      image: chair,
    },
    {
      customer: "Luxe Seating Co.",
      date: "02 Jan",
      status: "Pending",
      amount: "₹4,470.00",
      image: tshirt,
    },
    {
      customer: "Comfort Craft Chairs",
      date: "03 Jan",
      status: "Paid",
      amount: "₹17,470.00",
      image: wheelchair,
    },
    {
      customer: "Elite Chair Makers",
      date: "04 Jan",
      status: "Paid",
      amount: "₹72,830.00",
      image: cheery,
    },
    {
      customer: "Chic Seating Solutions",
      date: "05 Jan",
      status: "Paid",
      amount: "₹17,470.00",
      image: tshirts2,
    },
    {
      customer: "Premier Chair Designs",
      date: "06 Jan",
      status: "Overdue",
      amount: "₹12,030.00",
      image: chair3,
    },
    {
      customer: "Stylish Seating Inc.",
      date: "07 Jan",
      status: "paid",
      amount: "₹17,470.00",
      image: bag,
    },
    {
      customer: "Innovative Chair Works",
      date: "08 Jan",
      status: "paid",
      amount: "₹17,470.00",
      image: tshirts3,
    },
    {
      customer: "Signature Seating Co.",
      date: "09 Jan",
      status: "Overdue",
      amount: "₹76,400.00",
      image: tshirts3,
    },
    {
      customer: "Artisan Chair Studio",
      date: "10 Jan",
      status: "Overdue",
      amount: "₹17,470.00",
      image: tshirts3,
    },
    {
      customer: "Quality Chair Creations",
      date: "11 Jan",
      status: "paid",
      amount: "₹72,830.00",
      image: sofa,
    },
    {
      customer: "Modern Chair Collective",
      date: "12 Jan",
      status: "Overdue",
      amount: "₹94,470.00",
      image: mouse,
    },
  ];

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <div className="dashboard-container">
      {/* Top Section   background: #FFFFFF;
    
    border-radius: 8px;
     padding: 0px 20px; */}
      <div style={{background:"#FFFFFF" , borderRadius:"8px", padding:"0px 20px",paddingBottom:"2px"}} >
            <div className="dashboard-metricss">
            <div >
              <h3>Sales Record</h3>
            </div>
            <div className="toolbar-actions">
              <button className="btn btn-primary">+ Create Sales</button>
            </div>
            </div>
           
 <div style={{ margin: '10px 0', fontFamily: 'Arial, sans-serif' }}>
  <label
    style={{
      display: 'block',
      marginBottom: '5px',
      color: '#333',
    }}
  >
    Customer Name or Mobile No.
  </label>
  <select
    name="category"
    style={{
      width: '100%',
      padding: '8px 12px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#f8f9fa',
      cursor: 'pointer',
    }}
  >
    <option>Select a product category</option>
  </select>
</div>
         
       
      </div>
      {/* Toolbar */}
      <div className="overview">
        <div>
          

          <div className="toolbar-actions-ths" style={{border: '1px solid #ccc',borderRadius: '6px',  padding: '4px 11px',}}>
            <div className="toolbar-titles">
              <button className="toolbar-filter-btn">All</button>
            </div>

            <div className="toolbar-action" style={{ marginTop: "4px" }}>
              <button className="icon-btn ">
                <IoSearch />
              </button>
              <button className="icon-btn">
                <CgSortAz />
              </button>
              <button className="icon-btn">
                <TbArrowsSort />
              </button>
            </div>
          </div>
        </div>

        {/* Product Table */}
        <div>
          <table className="product-table">
            <thead>
              <tr style={{ color: "#676767" }}>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Customer</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((sales, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      src={sales.image}
                      alt={sales.name}
                      className="product-img"
                    />
                    {sales.customer}
                  </td>
                  <td>{sales.date} </td>
                  <td>
                    <span className={`status ${sales.status.toLowerCase()}`}>
                      {sales.status}
                    </span>
                  </td>
                  <td>{sales.amount}</td>
                  <td>
                    <BsThreeDots />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <div className="pagination-boxx">{itemsPerPage} per page</div>
            <div className="pagination-boxx pagination-info">
              <span>
                {startIndex + 1}-{Math.min(endIndex, totalItems)} of{" "}
                {totalItems}
              </span>
              <span style={{ color: "grey" }}> | </span>
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="pagination-arrow"
              >
                <FaAngleLeft />
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="pagination-arrow"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesRecord;
