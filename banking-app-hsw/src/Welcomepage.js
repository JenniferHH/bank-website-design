import React from 'react';
import Banner from './Banner.PNG';
import './welcome.css';
import { Link } from 'react-router-dom';

const Welcomepage = () => {
  return (
    <div>
      <div className='banner'>
        <img src={Banner} className="App-banner img-fluid" alt="banner"/>
      </div>
      <br></br>
      <div className="text-center"><h1 className="display-6">What can we help you?</h1></div>
        <br></br>

      <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col shadow p-3 mb-5 bg-body-tertiary rounded" style={{marginRight: "30px", width: "23%"}}>
      <div class="card-body" onclick="location.href='/HomePage';">
        <h5 class="card-title" Link >Tansaction</h5>
        <Link className="transcation" to="/HomePage" class="link-underline-light">
        <p class="card-text">Get unlimited transactions at a low price with the most popular account and earn the money back.</p>
        <br></br>
        <br></br>
        <br></br>
        </Link>
      </div>
    </div>
  <div class="col shadow p-3 mb-5 bg-body-tertiary rounded" style={{marginRight: "30px", width: "23%"}}>
      <div class="card-body1">
        <h5 class="card-title">Withdraw</h5>
        <Link className="Withdraw" to="/TransactionForm" class="link-underline-light">
        <p class="card-text">Enjoy the truly unlimited withdrawal to keep your work smoothly.</p>
        <br></br>
        <br></br>
        <br></br>
        </Link>
      </div>
    </div>
  <div class="col shadow p-3 mb-5 bg-body-tertiary rounded" style={{marginRight: "30px", width: "23%"}}>
      <div class="card-body2">
        <h5 class="card-title">Deposit</h5>
        <Link className="deposit" to="/deposit" class="link-underline-light">
        <p class="card-text">Enjoy the truly unlimited deposit to keep your work smoothly.</p>
        <br></br>
        <br></br>
        <br></br>
        </Link>
      </div>
    </div>
  <div class="col shadow p-3 mb-5 bg-body-tertiary rounded" style={{width: "23%"}}>
      <div class="card-body3">
        <h5 class="card-title">Log in</h5>
        <Link className="login" to="/Login" class="link-underline-light">
        <p class="card-text">Log in to your online bank account to earn up to cash bonus in easy steps.</p>
        <br></br>
        <br></br>
        <br></br>
        </Link>
      </div>
    </div>
 
</div>
    </div>
  );
};

export default Welcomepage;
