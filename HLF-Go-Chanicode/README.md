#############################################
# Setup Instructions: network/setup/README.md
#############################################



1. Initialize the Dev invironment
> dev-init.sh   -flag  -flag

To get help
> dev-init.sh -h

2. Explorer
- Start with the environment use the -e flag
> dev-init.sh -e
> exp-stop.sh

- At a later time
> exp-start.sh
> exp-stop.sh

3. Environment scripts
- Set the org context
>  .   set-env.sh    acme | budget
- To check current environment
> show-env.sh

4. Chaincode operations
- Set the chaincode environment
> set-chain-env.sh  -flag ..  -flag ..
- To check current chaincode parameters
> set-chain-env.sh   

5. Unit testing



# VBOX Mount issue
sudo service vboxadd-service stop
sudo date -s "2010-10-01 10:25:00"

Vendor package management
==========================

External package dependency
https://hyperledger-fabric.readthedocs.io/en/release-1.4/chaincode4ade.html?highlight=govendor


https://larry-price.com/blog/2018/04/26/quick-start-to-vendor-go-dependencies-with-govendor/
go get -u github.com/kardianos/govendor

someone faced this issue

Instantiate complains that it cannot assign the var to vendor/.. same package ...

to fix=>
govendor init
govendor add +external
govendor add github.com/hyperledger/fabric/core/chaincode/shim
govendor add github.com/hyperledger/fabric/protos/peer
govendor add github.com/hyperledger/fabric/protos/peer

