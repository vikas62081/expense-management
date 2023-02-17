import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Header = () => {
  const { toggleModal } = useContext(GlobalContext);
  return (
    <h2>
      Expense Management
      <button
        className="add-button"
        title="Add new transaction"
        onClick={toggleModal}
      >
        +
      </button>
    </h2>
  );
};
