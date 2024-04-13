import { useState } from "react";
import { ethers } from "ethers";
 
function App() {
  let [account, setAccount] = useState("");
  let [price, setPrice] = useState("");
  let [myBalance, setMyBalance] = useState("");
  let [connected, setConnected] = useState(false);
 
  let { ethereum } = window;
  let contract = null;
 
  if (ethereum) {
    let abi = [
      "function balanceOf(address) view returns (uint256)",
      "function buy() payable",
    ]

    let address = "0x2a9CA3dC2Eb60487993300eb15099c3E1f1C69f4";
    let provider = new ethers.providers.Web3Provider(ethereum);
    let signer = provider.getSigner();
    contract = new ethers.Contract(address, abi, signer);
  }
 
  return (
    <div className="App">

      <h1>$LESSIE</h1>
      <h2>THE MEMECOIN OF XPRL EVM</h2>
 
      <button onClick={() => {
          if (contract && !connected) {
              ethereum.request({ method: 'eth_requestAccounts'})
                  .then(accounts => {
                      setAccount(accounts[0])
                      setPrice(ethers.utils.parseEther('1'))
                      setConnected(true)
                  })
          }
      }}>{!connected ? 'Connect wallet' : 'Connected' }</button>
 
      <form onSubmit={(e) => {
        e.preventDefault();
        if (contract && connected) {
          contract.buy({value: price})
        }
      }}>
          <input type="submit" value="Buy 1 $LESSIE" />
      </form>
 
      <button onClick={() => {
        if (contract && connected) {
          contract.balanceOf(account)
            .then(balance => {
               setMyBalance(ethers.utils.formatEther(balance));
            })
        }
      }}>Get your banana balance</button>

      <h3>{ myBalance ? "You have" : ""} {myBalance} { myBalance ? "bananas" : ""}</h3>
    </div>
  );
}
 
export default App;
