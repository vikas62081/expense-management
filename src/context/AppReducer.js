export default (state, action) => {
  let trans = [];
  switch (action.type) {
    case "DELETE_TRANSACTION":
      trans = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      return {
        ...state,
        transactions: setLocal(trans),
      };
    case "ADD_TRANSACTION":
      trans = [action.payload, ...state.transactions];
      return {
        ...state,
        transactions: setLocal(trans),
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        showModal: !state.showModal,
      };
    default:
      return state;
  }
};

export const getLocal = (key = "transactions") => {
  return JSON.parse(localStorage.getItem(key)) ?? [];
};
export const setLocal = (trans, key = "transactions") => {
  localStorage.setItem(key, JSON.stringify(trans));
  return trans;
};
