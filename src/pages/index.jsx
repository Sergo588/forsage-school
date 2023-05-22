import React from 'react';
import { Second, Points, CryptoMain, NotTraidng, Earning, InstallWallet, BuyCrypto, Steps, Security, Marketing} from '@/features';


const Index = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Second />
      <Points />
      <CryptoMain />
      <NotTraidng />
      <Earning />
      <InstallWallet />
      <BuyCrypto />
      <Steps />
      <Security />
      <Marketing />
    </div>
  )
}
export default Index;