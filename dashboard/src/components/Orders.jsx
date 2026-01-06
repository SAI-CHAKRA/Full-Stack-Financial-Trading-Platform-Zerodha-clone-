
import React, { useState,useEffect, useContext } from "react";

import axios from "axios";

import UpdateGeneralContext from "./UpdateGeneralContext";

const Orders = () => {

  const updateContext = useContext(UpdateGeneralContext);

  const handleBuyClick = ({uid}) => {
    updateContext.openUpdateWindow(uid);
  };

  const [allOrders, setAllOrders] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3002/allOrders")
    .then((res)=>{
      console.log(res.data);
      setAllOrders(res.data);
    })
    .catch((err)=>{
      console.error(err);
    });
  },[]);

  return (
    <div className="order-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Modify</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((stock,index)=>{
            return(
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td><button className="buy" onClick={()=>handleBuyClick(stock.name)}>Update</button></td>
                <td><button>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
       
      </table>
    </div>
  );
};

export default Orders;