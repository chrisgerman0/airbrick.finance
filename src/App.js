import { useState } from 'react';
import NavbarPrimary from './view/components/NavbarPrimary';
import RoutesPrimary from './RoutesPrimary';
import FooterPrimary from './view/components/FooterPrimary';
import Web3 from 'web3';
import Token from './contracts/Token.json';
import Vault from './contracts/Vault.json';
import ICO from './contracts/ICO.json';
import BUSD from './contracts/BUSD.json';
function App() {
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [address, setAddress] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [ico, setIco] = useState(null);
  const [busd, setBusd] = useState(null);
  const [token, setToken] = useState(null);
  const [vault, setVault] = useState(null);
  const [brickBalance, setBrickBalance] = useState('0');
  const [busdBalance, setBusdBalance] = useState('0');
  const [vaultBalance, setVaultBalance] = useState('0');
  const [earnings, setEarnings] = useState('0');
  const [time, setTime] = useState(0);

  async function connectWallet() {
    try {
      setLoading(true);
      if (window.ethereum) {
        const _web3 = new Web3(window.ethereum);
        setWeb3(_web3);
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const networkId = await _web3.eth.net.getId();

        if (networkId !== 56) {
          alert('please select bsc network');
          return;
        }
        setAddress(window.ethereum.selectedAddress);

        let _ico = new _web3.eth.Contract(ICO.abi, ICO.address);
        setIco(_ico);

        let _token = new _web3.eth.Contract(Token.abi, Token.address);
        setToken(_token);
        let brick_balance = await _token.methods
          .balanceOf(window.ethereum.selectedAddress)
          .call();

        setBrickBalance(_web3.utils.fromWei(brick_balance, 'ether'));

        let _vault = new _web3.eth.Contract(Vault.abi, Vault.address);
        setVault(_vault);

        let b = await _vault.methods
          .balanceOf(window.ethereum.selectedAddress)
          .call();
        let e = await _vault.methods
          .earned(window.ethereum.selectedAddress)
          .call();
        let c = await _vault.methods
          .newDeposit(window.ethereum.selectedAddress)
          .call();
        let d = await _vault.methods.hodlDuration().call();

        setVaultBalance(_web3.utils.fromWei(b, 'ether'));
        setEarnings(_web3.utils.fromWei(e, 'ether'));

        setTime(parseInt(c) + parseInt(d));
        console.log(parseInt(c));
        console.log(parseInt(d));

        let _busd = new _web3.eth.Contract(BUSD.abi, BUSD.address);
        setBusd(_busd);
        let busd_balance = await _busd.methods
          .balanceOf(window.ethereum.selectedAddress)
          .call();
        setBusdBalance(_web3.utils.fromWei(busd_balance, 'ether'));
        setLoading(false);
      } else {
        alert('please install metamask');
        return;
      }
    } catch (e) {
      alert('Error:', e);
      return;
    }
  }

  async function buyToken(amount) {
    try {
      let a = await web3.utils.toWei(amount);
      let allowance = await busd.methods
        .allowance(window.ethereum.selectedAddress, ICO.address)
        .call();

      console.log(`allowance`, allowance);
      if (allowance === '0') {
        await busd.methods
          .approve(ICO.address, web3.utils.toWei('4850999393'))
          .send({ from: window.ethereum.selectedAddress, gasLimit: '210000' })
          .on('transactionHash', async () => {
            await ico.methods
              .buyTokens(window.ethereum.selectedAddress, a)
              .send({ from: window.ethereum.selectedAddress });
          })
          .on('error', async (e) => {
            console.log('Error', e);
            return;
          });
      } else {
        await ico.methods
          .buyTokens(window.ethereum.selectedAddress, a)
          .send({ from: window.ethereum.selectedAddress });
      }
    } catch (e) {
      console.log(e.message);
      return;
    }
  }
  async function depositToVault(amount) {
    try {
      let a = await web3.utils.toWei(amount);
      let allowance = await token.methods
        .allowance(window.ethereum.selectedAddress, Vault.address)
        .call();
      if (allowance === '0') {
        await token.methods
          .approve(Vault.address, web3.utils.toWei('100004'))
          .send({ from: window.ethereum.selectedAddress, gasLimit: '210000' })
          .on('transactionHash', async () => {
            await vault.methods.stake(a).send({
              from: window.ethereum.selectedAddress,
              gasLimit: '210000',
            });
          })
          .on('error', async (e) => {
            console.log('Error', e);
            return;
          });
      } else {
        await vault.methods
          .stake(a)
          .send({ from: window.ethereum.selectedAddress, gasLimit: '210000' });
      }
    } catch (e) {
      console.log(e.message);
      return;
    }
  }

  async function withdraw(amount) {
    try {
      let a = await web3.utils.toWei(amount);
      await vault.methods
        .withdraw(a)
        .send({ from: window.ethereum.selectedAddress, gasLimit: '210000' })
        .on('error', async (e) => {
          console.log('Error', e);
          return;
        });
    } catch (e) {
      console.log(e.message);
      return;
    }
  }

  async function getReward() {
    try {
      await vault.methods
        .getReward()
        .send({ from: window.ethereum.selectedAddress, gasLimit: '210000' })
        .on('error', async (e) => {
          console.log('Error', e);
          return;
        });
    } catch (e) {
      console.log(e.message);
      return;
    }
  }

  return (
    <>
      {!loading ? (
        <main className={` ${darkMode && 'dark-mode'}`}>
          <button
            type='button'
            className='btn btn-primary fixed-top top-50 end-0 icon-size-small rounded-right-full'
            onClick={() => setDarkMode(!darkMode)}
          >
            <img
              className='h-100 w-100 d-block'
              src={`/assets/${darkMode ? 'moon' : 'sun'}.png`}
              alt='dark-mode'
            />
          </button>
          <NavbarPrimary
            darkMode={darkMode}
            connectWallet={connectWallet}
            address={address}
            buyToken={buyToken}
          />
          <RoutesPrimary
            brickBalance={brickBalance}
            busdBalance={busdBalance}
            buyToken={buyToken}
            depositToVault={depositToVault}
            withdraw={withdraw}
            getReward={getReward}
            vaultBalance={vaultBalance}
            earnings={earnings}
            time={time}
          />
          <FooterPrimary darkMode={darkMode} />
        </main>
      ) : (
        <h1
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        >
          Loading...
        </h1>
      )}
    </>
  );
}

export default App;
