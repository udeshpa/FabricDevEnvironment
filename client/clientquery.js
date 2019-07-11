'use strict';
/**
 * Tested with Composer 0.20.5
 * 
 * Pre-Requisites
 * 1. Launch Fabric - Deploy Aircraft v8
 * 2. Poupulate the flight data ... use utility or REST Server
 * 
 * Demostrates the use Client module : query & buildQuery
 * 1. Create the Client Connection
 * 2. Execute a Named Query using Client Module : query()
 * 3. Create a Dynamic Query using Client Module : buildQuery()
 * 4. Execute the Query
 */

const bnUtil = require('./bnconnectionutil');

// #1 Connect to the tiw1
bnUtil.cardName='admin@sample1';
bnUtil.connect(main);

function main(error){
    // for clarity sake - ignored the error

    // #2 Execute the named query : AllTrades

    return bnUtil.connection.query('AllTrades').then((results)=>{

        console.log('Received trade count:', results.length)

        var   statement = 'SELECT  sample1.Broker WHERE (brokerId == _$id\)';
        
        // #3 Build the query object
        return bnUtil.connection.buildQuery(statement);

    }).then((qry)=>{

        // #4 Execute the query
        return bnUtil.connection.query(qry,{id:'Fidelity'});
    }).then((result)=>{
        console.log('Received trade for broker count:', result.length);
        if(result.length > 0) console.log(result[0].tradeId);
        bnUtil.connection.disconnect();
    }).catch((error)=>{
        console.log(error);
        bnUtil.connection.disconnect();
    });
}