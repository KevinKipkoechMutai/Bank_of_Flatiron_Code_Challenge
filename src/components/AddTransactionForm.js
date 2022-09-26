import React from "react";

function AddTransactionForm({handleAddTransaction}) {
  const [formDate, setFormData] = React.useState({
    date:"",
    description: "",
    category:"",
    amount: null,
  });
  //posting the transaction
  const handlePostTransaction = async (event) => {
      event.preventDefault();
      console.log(FormData);
      try {
        const response = await fetch("http://localhost:8001/transactions", {
          method: "POST",
          headers: {"Content-Type: 'application/json'"}
        })
      }
  }
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
