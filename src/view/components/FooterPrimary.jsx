import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSinglePrismicDocument } from '@prismicio/react';
import { FaAirbnb } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const FooterPrimary = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [footer] = useSinglePrismicDocument('footer');

  useEffect(() => {
    if (footer) {
      setIsLoading(false);
    }
  }, [footer]);

  return (
    <footer className='bg-secondary py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-11 col-md-5 col-xl-3'>
            <Link to='/' className='d-block logo'>
              <img
                src={`/assets/${
                  props.darkMode ? 'logo-dark' : 'logo-light'
                }.png`}
                alt='...'
              />
            </Link>
            {!isLoading && footer && (
              <div className='ms-2'>{footer.data.footer_text[0].text}</div>
            )}
          </div>
          <div className='col-11 col-md-4 col-xl-3 mt-4 mt-md-0 ms-md-auto'>
            <div className='d-flex gap-4 filter-invert justify-content-md-end mt-md-4 ms-2'>
              <a
                href='https://t.me/airbrickfinance'
                rel='noopener noreferrer'
                target='_blank'
              >
                <svg
                  height={20}
                  viewBox='0 0 21 20'
                  width={21}
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.69336 12.386L8.39009 16.574C8.82399 16.574 9.01191 16.391 9.23726 16.1712L11.2715 14.2625L15.4868 17.2932C16.2599 17.7162 16.8045 17.4935 17.0131 16.595L19.7799 3.86605L19.7807 3.8653C20.0259 2.7433 19.3674 2.30456 18.6142 2.5798L2.35064 8.69302C1.24068 9.11602 1.25749 9.72352 2.16195 9.99877L6.3199 11.2685L15.978 5.33529C16.4325 5.03979 16.8458 5.20329 16.5058 5.49879L8.69336 12.386Z'
                    fill='white'
                  />
                </svg>
              </a>
              <a
                href='https://www.airbnb.co.uk/p/airbrick'
                rel='noopener noreferrer'
                target='_blank'
              >
                <FaAirbnb color='white' size='1.2em' />
              </a>
              <a
                href='https://www.instagram.com/airbrickfinance/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <AiFillInstagram color='white' size='1.2em' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPrimary;
