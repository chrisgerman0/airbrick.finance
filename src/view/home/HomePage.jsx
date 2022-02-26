import React from 'react';
import SectionOne from './Sections/SectionOne';
import SectionThree from './Sections/SectionThree';
import SectionTwo from './Sections/SectionTwo';

const HomePage = ({time,earnings,vaultBalance,brickBalance,busdBalance,depositToVault,withdraw,getReward,buyToken,collectRentAndReinvest}) => {
  return (
    <main className='pt-4'>
      <SectionOne brickBalance={brickBalance} busdBalance={busdBalance} depositToVault={depositToVault} buyToken={buyToken}/>
      <SectionTwo time={time} earnings={earnings} brickBalance={brickBalance} vaultBalance={vaultBalance} withdraw={withdraw} depositToVault={depositToVault} getReward={getReward} collectRentAndReinvest={collectRentAndReinvest} />
      <SectionThree />
    </main>
  );
};

export default HomePage;
