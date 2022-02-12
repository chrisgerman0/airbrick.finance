import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './view/home/HomePage';

const RoutesPrimary = ({time,earnings,vaultBalance,brickBalance,busdBalance,depositToVault,withdraw,getReward,buyToken}) => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage time={time} earnings={earnings} vaultBalance={vaultBalance} brickBalance={brickBalance} getReward={getReward} busdBalance={busdBalance} buyToken={buyToken} withdraw={withdraw} depositToVault={depositToVault}/>} />
    </Routes>
  );
};

export default RoutesPrimary;
