import React from 'react'; 
import { Link } from 'react-router-dom'; 
import logo from './logo.png';




const Navbar = ({ balance }) => { 
    return ( 
        <nav className="navbar shadow-sm p-3 mb-5 bg-light rounded"> 
            <div className="container"> 
                <a className="navbar-brand" href="#">
                    <img src={logo} className="App-logo" alt="HSBC Bank Canada" />
                </a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/">Home</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/HomePage">Transactions</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/transactionForm">Withdraw</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/login">Log in</Link>
                    </li>
                </ul>
            </div>  
        </nav> 
        
    ); 
}; 

export default Navbar;