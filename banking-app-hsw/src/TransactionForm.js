import React, { useState } from 'react'; 
import './tran.css';

const TransactionForm = ({ type, onSubmit }) => { 
    const [accountNumber, setAccountNumber] = useState(''); 
    const [amount, setAmount] = useState(''); 

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        // Validate form inputs 
        if (!accountNumber.trim() || !amount.trim()) { 
            alert('Please enter both account number and amount.'); 
            return; 
        } 
        // Prepare transaction data 
        const transactionData = { 
            accountNumber: accountNumber.trim(), 
            amount: parseFloat(amount.trim()), // Convert amount to number 
            type: type 
        }; 
        // Check if onSubmit is a function before calling it
        if (typeof onSubmit === 'function') {
            onSubmit(transactionData);
        } else {
            console.error('onSubmit is not a function');
        }
        
        // Reset form fields after submission 
        setAccountNumber(''); 
        setAmount(''); 
    }; 

    return ( 
        <div className='from'> 
            <div className='from' class="col shadow p-3 mb-5 bg-body-tertiary rounded">
                <form onSubmit={handleSubmit}> 
                    <h2>{type === 'deposit' ? 'Deposit' : 'Withdraw'} Form</h2>
                    <div className="form-group"> 
                        <label htmlFor="accountNumber">Account Number</label> 
                        <input 
                            type="text" 
                            className="form-control" 
                            id="accountNumber" 
                            value={accountNumber} 
                            onChange={(e) => setAccountNumber(e.target.value)} 
                            required 
                        /> 
                    </div> 
                    <div className="form-group"> 
                        <label htmlFor="amount">Amount</label> 
                        <input 
                            type="number" 
                            className="form-control" 
                            id="amount" 
                            value={amount} 
                            onChange={(e) => setAmount(e.target.value)} 
                            required 
                        /> 
                    </div> 
                    <div className='but'>
                        <button type="submit" className="btn btn-secondary"> 
                            Submit 
                        </button> 
                    </div>
                </form>
            </div> 
        </div>
    ); 
}; 

export default TransactionForm;