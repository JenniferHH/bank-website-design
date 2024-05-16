import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Navbar'; 
import HomePage from './HomePage'; 
import TransactionForm from './TransactionForm';
import Login from './Login';
import Welcomepage from './Welcomepage';
import Footer from './Footer';
import Deposit from './deposit';
import ParentComponent from './ParentComponent';


const App = () => { 
  const [accountNumber, setAccountNumber] = useState('123456789'); 
  const [balance, setBalance] = useState(1000); 
  const [transactions, setTransactions] = useState([]); 

  const handleTransaction = ({ amount, type }) => { 
    const transaction = { 
      type, 
      accountNumber: Number(accountNumber), 
      amount: Number(amount), 
      timestamp: new Date().toLocaleString() 
    };

    if (type === 'deposit') { 
      setBalance(prevBalance => prevBalance + Number(amount)); 
    } else if (type === 'withdraw') { 
      setBalance(prevBalance => prevBalance - Number(amount)); 
    }

    setTransactions(prevTransactions => [...prevTransactions, transaction]);
  };

  return ( 
    <Router> 
      <div> 
        <Navbar balance={balance} /> 
        <div className="container mt-4"> 
          <Routes> 
            <Route 
              path="/" element={<Welcomepage />} 
            /> 
            <Route path="/HomePage" element={<HomePage accountNumber={accountNumber} balance={balance} transactions={transactions} />} />
            <Route path="/transactionForm" element={<TransactionForm type="withdraw" onSubmit={handleTransaction} />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/deposit" element={<Deposit type="deposit" onSubmit={handleTransaction} />} />
            <Route path="/ParentComponent" element={<ParentComponent />} />
          </Routes> 
        </div> 
        <Footer balance={balance} /> 
      </div> 
    </Router> 
  ); 
}; 
  
export default App;
    
