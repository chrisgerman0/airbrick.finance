import React, { useState, useEffect } from 'react';
import { Carousel, ProgressBar } from 'react-bootstrap';
import { useSinglePrismicDocument } from '@prismicio/react';

const SectionThree = () => {
  const now = 60;
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState();
  const [section3] = useSinglePrismicDocument('section_3');

  useEffect(() => {
    if (section3) {
      setList(JSON.parse(section3.data.table[0].text));
      setIsLoading(false);
    }
  }, [section3]);

  return (
    <section className='pb-5'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='bg-secondary rounded-xl shadow-sm p-4 p-xxl-5 h-100'>
              {!isLoading && section3 && (
                <>
                  <div className='text-center mb-5 px-0 col-12 col-md-8 col-lg-10 col-xl-6 mx-auto'>
                    <h4 className='mb-0 fw-bold'>
                      {section3.data.section_3_title[0].text}
                    </h4>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <div className='bg-primary text-white shadow rounded-xl p-4'>
                        <h5 className='mb-4 fw-bold text-center font-italic'>
                          {section3.data.card_title[0].text}
                        </h5>
                        <div>
                          <ul className='nav flex-column h6 mb-0'>
                            {list.map((item, index) => (
                              <li className='mt-2' key={index}>
                                <div
                                  className={`d-flex ${
                                    item.bold && 'fw-bold font-italic'
                                  }`}
                                >
                                  <span>{item.name}</span>
                                  <span className='ms-auto'>{item.value}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='col-12 col-xl-6 mb-4 mb-xl-0 order-first order-xl-last'>
                      <div className='h-100-all height-size'>
                        <Carousel indicators={false}>
                          {section3 &&
                            section3.data.images.map((i) => (
                              <Carousel.Item key={i.url}>
                                <img
                                  className='d-block w-100 rounded-xl shadow-sm'
                                  src={i.url}
                                  alt=''
                                />
                              </Carousel.Item>
                            ))}
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className='col-12 col-lg-5 col-xxl-4 order-first order-lg-last mb-4 mb-lg-0'>
            <div className='bg-secondary rounded-xl shadow-sm p-4 p-xxl-5 position-sticky top-20'>
              {!isLoading && section3 && (
                <div>
                  <div className='text-center mb-5'>
                    <h4 className='mb-0 fw-bold'>
                      {section3.data.right_card_title[0].text}
                    </h4>
                  </div>
                  <div className='d-flex align-items-center'>
                    <span className='icon-size-1 me-3'>
                      <img
                        className='d-block h-100 w-100'
                        src='/assets/investment.svg'
                        alt='investment'
                      />
                    </span>
                    <span className='d-flex'>
                      <div className='h2 mb-0 fw-bold'>
                        <h5 className='fw-normal mb-0'>Remaining Tokens</h5>
                        <div className='d-flex align-items-baseline'>
                          <span className='me-2'>
                            {section3.data.tokens[0].text}
                          </span>{' '}
                          <h6 className='mb-0 text-uppercase'>
                            <div>BRICKS</div>{' '}
                            {section3.data.bricks_value[0].text}
                          </h6>
                        </div>
                      </div>
                    </span>
                  </div>

                  <div className='mt-4'>
                    <ProgressBar
                      variant='blue'
                      now={section3.data.progress_value[0].text}
                      label={`${section3.data.progress_value[0].text}% Raised`}
                    />
                  </div>

                  <div className='mt-4 pt-4 d-flex justify-content-between'>
                    <div style={{ width: '48%' }}>
                      <a
                        href='https://airbrick.finance/register/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-100 h-100 btn btn-lg btn-primary rounded-lg'
                      >
                        <small>Buy with FIAT</small>
                      </a>
                    </div>
                    <div style={{ width: '48%' }}>
                      <a
                        href='#Wallet'
                        className='w-100 h-100 btn btn-lg btn-primary rounded-lg'
                      >
                        <small>Buy with BUSD</small>
                      </a>
                    </div>
                  </div>
                  <div className='text-center mt-4'>
                    <h5 className='mb-0 fw-normal'>
                      Minimum Investment{' '}
                      {section3.data.minimum_investment[0].text}
                    </h5>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
