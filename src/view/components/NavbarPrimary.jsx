import React from 'react';
import { Link } from 'react-router-dom';
const NavbarPrimary = (props) => {
  return (
    <nav>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center'>
          <div className='logo-container'>
            <Link to='/' className='d-block logo'>
              <img
                src={`/assets/${
                  props.darkMode ? 'logo-dark' : 'logo-light'
                }.png`}
                alt='...'
              />
            </Link>
          </div>
          <div className='ms-auto'>
            <ul className='nav gap-4'>
              <li>
                <button
                  type='button'
                  className='btn btn-lg btn-outline-blue border-2 rounded-pill'
                >
                  <small onClick={() => props.buyToken('1')}>$1 Buy</small>
                </button>
              </li>
              <li>
                <button
                  type='button'
                  className='btn btn-lg btn-outline-blue border-2 rounded-pill'
                >
                  {props.address === null ? (
                    <small onClick={props.connectWallet}>Connect Wallet</small>
                  ) : (
                    <small>
                      {' '}
                      {props.address.slice(0, 5)}...{props.address.slice(38)}
                    </small>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPrimary;
