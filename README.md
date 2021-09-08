# dConfess

This dApp is basically a confession platform where you can confess anonymously ,you can make multiple confessions.
As Valentine week was approaching we thought of creating some platform where one can pour out one's inner feelings without
getting revealed his/her identity.This dapp uses salient feature of blockchain anonymity .

## Challenges we ran into

while making this dapp we came across many challenges like while integrating blockchain with dynamic front-end ,clubbing
blockchain responses with JSX.While transacting with metamask we came across rpc errors.One of the major challenge was configuration with
the generated abi.

## Tech-stack

- Language :- Solidity
- Web3Provider : Metamask
- Local blockchain :- Ganache
- Run-time env :- Truffle-suite
- Framework :- ReactJs

These steps are for testing the inerface of this dApp you can deploy it on any test network other than Ganache.
We deploy using Matic network which make the transaction very fast which will became helpful in the case of a large College or University.

Here is what to do....

1. Clone the repository from Github ( link : https://github.com/Rishabh3321/dConfess_final )

2. Open mydapp folder

3. <npm install> (install all dependencies)

4. <truffle migrate --reset> (it will compile the contract and provide you the build files)

5. Now copy the content of mydapp/build/contract/dConfess.json to /mydapp/dConfess.json (transfer the ABI )

6. Install Metamask in your default browser.

7. Download Appimage of Ganache and run the Appimage after giving execution rights.

8. Some of the starting accounts of Ganache to Metamask using Private key and add Ganache_GUI network (port:7545)

9. Now run command < npm run dev > wait for a while then .

10. Enjoy expressing your feelings..

## Mentors

- [Hrishabh Sharma](https://github.com/Sharma-Hrishabh)
- [Ujjwal Kumar](https://github.com/Ujjwal0501)
