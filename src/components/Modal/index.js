import {React,useState} from "react";
import "./index.css";

const Modal=({setOpenModal})=>{
const updateOpenModal=()=>{
  setOpenModal(false)
}
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={updateOpenModal}
          >
            X
          </button>
        </div>
        <div className="title">
          <p>Filters</p>
          <hr/>
        </div>
        <div className="inputs">
        <input className="checkbox-sub" type="checkbox"/> subscription
        <input className="checkbox-sub" type="checkbox"/> Burner
        </div>
        <p className="cardholder">Card Holder</p>
        <select className="select-option">
            <option>Select cardholder</option>
            <option>Vishal</option>
            <option>Rajesh</option>
            <option>Rajith</option>
            <option>Mayank</option>
        </select>
        <div className="footer">
        <button id="apply-button">Apply</button>
          <button
            onClick={updateOpenModal}
            id="cancelBtn"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;