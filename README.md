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

## Development Setup

These steps are for testing the inerface of this dApp you can deploy it on any test network other than Ganache.
We deploy using Matic network which make the transaction very fast which will became helpful in the case of a large College or University.

Here is what to do....

1. Clone the repository from Github ( link : https://github.com/Rishabh3321/dConfess_final )

2. `npm install` (install all dependencies)

3. Install Metamask in your default browser

4. Configre `.secret.json` file for development purpose and select ganche rpc on Metamask.

5. `truffle migrate --reset` (it will compile the contract deploy and provide you the build files)

6. Now run command `npm run start` wait for a while then, you will see the dApp in your browser.

7. Enjoy expressing your feelings..

## Mentors

- [Hrishabh Sharma](https://github.com/Sharma-Hrishabh)
- [Ujjwal Kumar](https://github.com/Ujjwal0501)
