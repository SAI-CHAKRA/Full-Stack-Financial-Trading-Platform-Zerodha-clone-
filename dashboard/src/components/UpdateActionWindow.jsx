import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
 
import axios from "axios";

import UpdateGeneralContext from "./UpdateGeneralContext";

import "./BuyActionWindow.css";


const UpdateActionWindow = ({ uid }) => {

  const updateContext = useContext(UpdateGeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleUpdateClick = () =>{
    axios.put(`http://localhost:3002/updateOrder/${id}`,{
      name:uid,
      qty:stockQuantity,
      price:stockPrice,
      mode:"Updated",
    }).then((res)=>{
      console.log("update successfull");
    }).catch((err)=>{
      console.error("updated error",err);
    })
    updateContext.closeUpdateWindow();
  };

  const handleCancelClick = () => {
    updateContext.closeUpdateWindow();
  }; 

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleUpdateClick} >
            Update
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateActionWindow;