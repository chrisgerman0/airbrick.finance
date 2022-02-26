import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Chartbar from '../../components/Chartbar';
import MonochromePie from '../../components/MonochromePie';
import PeriodCountdown from '../../components/PeriodCountdown';
import { useSinglePrismicDocument } from '@prismicio/react';

const SectionTwo = ({
  time,
  earnings,
  vaultBalance,
  brickBalance,
  withdraw,
  depositToVault,
  getReward,
  collectRentAndReinvest
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState();
  const [series, setSeries] = useState();
  const [colors, setColors] = useState();
  const [monthlyData, setMontlyData] = useState();
  const [section2] = useSinglePrismicDocument('section_2');

  useEffect(() => {
    if (section2) {
      setPlaces(section2.data.places[0].text.split(','));
      setSeries(section2.data.places_data[0].text.split(',').map(Number));
      setColors(section2.data.places_colors[0].text.split(','));
      setMontlyData(section2.data.monthly_data[0].text.split(','));
      setIsLoading(false);
    }
  }, [section2]);





  return (
    <section className='pb-5'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='bg-secondary rounded-xl shadow-sm p-4 p-xxl-5 h-100'>
              {!isLoading && section2 && (
                <>
                  <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-start'>
                    <span className='icon-size-3 me-3 me-md-5'>
                      <img
                        className='d-block h-100 w-100'
                        src='/assets/percentage.svg'
                        alt='percentage'
                      />
                    </span>
                    <span className='text-center'>
                      <h5 className='text-black-50 mb-1'>
                        {section2.data.section_2_heading[0].text}
                      </h5>
                      <div className='display-5 fw-bold'>
                        {section2.data.section_2_value[0].text}
                      </div>
                    </span>
                  </div>
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-1 row-cols-xl-2 justify-content-center mt-2 gy-4'>
                    <Col>
                      <div>
                        <MonochromePie
                          places={places}
                          series={series}
                          colors={colors}
                          pieValue={section2.data.pie_chart_value[0].text}
                          pieHeading={section2.data.pie_chart_text[0].text}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <Chartbar
                          monthlyData={monthlyData}
                          barHeading={section2.data.bar_chart_text[0].text}
                          barValue={section2.data.bar_chart_value[0].text}
                        />
                      </div>
                    </Col>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className='col-12 col-lg-5 col-xxl-4 order-first order-lg-last mb-4 mb-lg-0'>
            <div className='bg-secondary rounded-xl shadow-sm p-4 p-xxl-5 position-sticky top-20'>
              <div>
                <div className='d-flex align-items-center'>
                  <span className='icon-size-1 me-3'>
                    <img
                      className='d-block h-100 w-100'
                      src='/assets/vault.png'
                      alt='vault'
                    />
                  </span>
                  <span className='d-flex'>
                    <div className='h2 mb-0 fw-bold'>
                      <h4 className='fw-bold mb-0'>Vault</h4>
                      <div className='d-flex align-items-baseline'>
                        <span className='me-2'>{vaultBalance}</span>{' '}
                        <h6 className='mb-0 text-uppercase'>
                          <div>BRICKS</div>
                          {/* ~${parseFloat(earnings).toFixed(2)} */}
                        </h6>
                      </div>
                    </div>
                  </span>
                </div>

                <div className='mt-4 d-flex justify-content-between'>
                  {/* <div className='d-flex flex-column' style={{ width: '48%' }}>
                    <input
                      type='text'
                      className='form-control rounded-lg mb-3'
                      id='deposit'
                    />
                    <button
                      type='button'
                      className='w-100 h-100 btn btn-lg btn-primary rounded-lg'
                      onClick={() =>
                        depositToVault(document.getElementById('deposit').value)
                      }
                    >
                      Deposit
                    </button>

                    <button
                      className='mt-2 btn btn-sm max rounded-lg'
                      onClick={() =>
                        (document.getElementById('deposite').value =
                          brickBalance)
                      }
                    >
                      MAX
                    </button>
                  </div> */}
                  <div className='d-flex flex-column' style={{ width: '100%' }}>
                    <input
                      type='text'
                      className='form-control rounded-lg mb-3'
                      id='withdraw'
                    />
                    <button
                      type='button'
                      className='w-100 h-100 btn btn-lg btn-primary rounded-lg'
                      onClick={() =>
                        withdraw(document.getElementById('withdraw').value)
                      }
                    >
                      Withdraw*
                    </button>
                    <button
                      className='mt-2 btn btn-sm max rounded-lg'
                      onClick={() =>
                        (document.getElementById('withdraw').value =
                          vaultBalance)
                      }
                    >
                      MAX
                    </button>
                  </div>
                </div>
              </div>
              <div className='mt-3'>
                <div className='d-flex align-items-center'>
                  <span className='icon-size-1 me-3'>
                    <img
                      className='d-block h-100 w-100'
                      src='/assets/v-icon-1.svg'
                      alt='...'
                    />
                  </span>
                  <span className='d-flex'>
                    <div className='h2 mb-0 fw-bold'>
                      <div className='d-flex align-items-baseline'>
                        <span className='me-2'>
                          ${parseFloat(earnings).toFixed(2)}
                        </span>{' '}
                        <h6 className='mb-0 text-uppercase'>BUSD</h6>
                      </div>
                    </div>
                  </span>
                </div>

                <div className='mt-2 d-flex justify-content-between'>
                  <div style={{ width: '48%' }}>
                    <button
                      type='button'
                      className='w-100 h-100 btn btn-lg btn-primary rounded-lg'
                      onClick={getReward}
                    >
                      Collect Rent
                    </button>
                  </div>
                  <div style={{ width: '48%' }}>
                    <button
                      type='button'
                      className='w-100 h-100 btn btn-lg btn-primary rounded-lg'
                      onClick={collectRentAndReinvest}
                    >
                      Collect & Reinvest
                    </button>
                  </div>
                </div>

                <div className='text-center mt-4'>
                  <h5 className='mb-0 fw-normal'>Lock up period - Countdown</h5>
                  <div className='my-2'>
                    <PeriodCountdown time={time} />
                  </div>
                  <h6 className='mb-0 fw-normal'>
                    *Early withdrawal includes a 50% penalty fee.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
