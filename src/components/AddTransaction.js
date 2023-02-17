import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction, toggleModal, showModal } = useContext(GlobalContext);
  const resetForm = () => {
    setText("");
    setAmount("");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    resetForm();
    toggleModal();
  };
  if (!showModal) {
    return <></>;
  }
  return (
    <>
      <div class="modal show-modal">
        <div class="modal-content">
          <span class="close-button" onClick={toggleModal}>
            &times;
          </span>

          <h3>Add new transaction</h3>
          <form onSubmit={onSubmit}>
            <div className="form-control">
              <label htmlFor="text">Text</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text..."
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="amount">
                Amount <br />
                (negative - expense, positive - income)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount..."
                required
              />
            </div>
            <button className="btn">Add transaction</button>
          </form>
        </div>
      </div>
    </>
  );
};
