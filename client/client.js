const bnfactory = require('./bnfactory');

main();

function main(error) {
    var trade = {tradeid:'1', tickerid:'AAPL', brokerid:'Fidelity', amount:100};
    console.log('Here')
    try {
        bnfactory.executeTxn(trade);
    } catch(err) {
        console.error(err);
    }
}
