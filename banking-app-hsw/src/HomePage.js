import React from 'react'; 
import { Link } from 'react-router-dom'; 
import Table from 'react-bootstrap/Table';
import './home.css';

const HomePage = ({ accountNumber, balance, transactions }) => { 
    return ( 
        <div> 
            <div className='text'>
            <h4 class = 'display-6'>Do you need you can get earn the money back in every tansaction?</h4>
            </div>
            <div className='accounttext'>
            <p><strong>Account Number:</strong> {accountNumber}</p> 
            <p><strong>Balance:</strong> ${balance}</p>
            </div>
            <div class="btn-group me-2" role="group" aria-label="Second group" style={{width: '20%'}} className='button'>
                {/* Link to Deposit page */} 
                < Link to="/deposit" className="btn btn-outline-secondary"> 
                    Deposit 
                </Link> 
                {/* Link to Withdraw page */} 
                <Link to="/TransactionForm" className="btn btn-outline-secondary"> 
                    Withdraw 
                </Link> 
            </div> 
            <div className='tran'>
            <h3>Transactions: 
            </h3>
            </div>
            <Table striped bordered hover responsive > 
                <thead> 
                    <tr> 
                        <th>#</th> 
                        <th>Date</th> 
                        <th>Type</th> 
                        <th>Amount</th> 
                        <th>Account Number</th>
                    </tr> 
                </thead>
                <tbody> 
                 {transactions.map((transaction, index) => (
                    <tr> {/* Ensure each row is wrapped in a <tr> tag */}
                        <td>{index + 1}</td> 
                        <td>{transaction.timestamp}</td> 
                        <td>{transaction.type === 'deposit' ? 'Deposit' : 'Withdraw'}</td> 
                        <td>${transaction.amount}</td> 
                        <td>{transaction.accountNumber}</td>
                    </tr> 
                ))} 
        </tbody> 
            </Table>
            
            </div>

    ); 
}; 

export default HomePage;



    