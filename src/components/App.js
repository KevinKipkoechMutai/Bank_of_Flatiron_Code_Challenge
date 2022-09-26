import React from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [setTransactions, transactions] = React.useState([]);
  React.useEffect(() => {getTransactions();}, []);
  const getTransactions = async function() {
    try{
      const response = await fetch('http://localhost:8001/transactions');
      const jsonResponse = await response.json();
      setTransactions(jsonResponse);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
  const handleDelTransaction = (transactionID) => {
    const filterTrans = transactions.filter(
      (trans) => trans.id !== transactionID
    );
    setTransactions(filterTrans);
  };
  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filterTrans = transactions.filter(
        (trans) => {
          if (trans.description.toLowerCase().match(searchTerm.toLowerCase())) {
            return true;
          } else{
            return false;
          }
        }
      );
    setTransactions(filterTrans);  } else {
      getTransactions();
    };
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer 
        handleAddTransaction={handleAddTransaction}
        transactions={transactions}
        handleSearch={handleSearch}
        handleDelTransaction={handleDelTransaction}
      />
    </div>
  );
}}

export default App;
