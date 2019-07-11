'use strict';

 // Constant values - change as per your needs
const namespace = "sample1";
const transactionType = "Trade";
const bnUtil = require('./bnconnectionutil');

function executeTxn(trade) {
    bnUtil.connect(txn, trade);
};
  
function txn(error, trade){

    // Check for error
    if(error){
        console.log(error);
        process.exit(1);
    }

    // 2. Get the Business Network Definition
    let bnDef =  bnUtil.connection.getBusinessNetwork();
    console.log("2. Received Definition from Runtime: ",
                  bnDef.getName(),"  ",bnDef.getVersion());

    // 3. Get the factory
    let factory = bnDef.getFactory();
    
    let options = {
        generate: false,
        includeOptionalFields: false
    }

    let transactionId = "SomeNewTxnId";
    let transaction = factory.newTransaction(namespace,transactionType,transactionId,options);

    try {
        // 5. Set up the properties of the transaction object
        transaction.setPropertyValue('tradeId', '' + trade.tradeid);
        transaction.setPropertyValue('brokerId', trade.brokerid);
        transaction.setPropertyValue('tickerId', trade.tickerid);
        transaction.setPropertyValue('amount' , trade.amount);

      } catch(err) {
        bnUtil.disconnect();
        console.error(err)
    }

    // 6. Submit the transaction
    return bnUtil.connection.submitTransaction(transaction).then(()=>{
        console.log("6. Transaction Submitted/Processed Successfully!!")
        bnUtil.disconnect();
    }).catch((error)=>{
        console.log(error);

        bnUtil.disconnect();
    });
};

module.exports = {
    txn : txn,
    executeTxn : executeTxn
}
