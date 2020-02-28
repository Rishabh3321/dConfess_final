These steps sre for testing the inerface of this dApp you can deploy it on any test network other than Ganache.
We deploy using Matic network which make the transaction very fast which will became helpful in the case of a large College or University.

Here is what to do....

1. Clone the repository from Github          ( link : https://github.com/Rishabh3321/dConfess_final ) 


2. Open mydapp folder 


3. <npm install>                             (install all dependencies)


4. <truffle migrate --reset>                 (it will compile the contract and provide you the build files)


5. Now copy the content of mydapp/build/contract/dConfess.json to /mydapp/dConfess.json  (transfer the ABI )


6. Install Metamask in your default browser.


7. Download Appimage of Ganache and run the Appimage after giving execution rights.


8. Some of the starting accounts of Ganache to Metamask using Private key and add Ganache_GUI network (port:7545)


9. Now run command  < npm run dev >  wait for a while then .

10. Enjoy expressing your feelings..