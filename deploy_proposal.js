
//
//
//
// Modify the vars below to customize to your proposal
//
//
//
console.log("Deploying DAO Proposal - SampleOfferWithoutReward.sol")

// Current USD/ETH rate for conversion
var _ETHUSD = 12;

// Your destination wallet - should be a multi-sig contract
var _contractor = "0xef3ca436bdcc5e116103e99ecb905dc9abedd61f";

// The "client" of this proposal, theDAO address
var _TheDAO = "0xbb9bc244d798123fde783fcc1c72d3bb8c189413";

// Submit the proposal text and put the IPFS ref here
var _IPFSHashOfTheProposalDocument = "";

// Total Funding Request in USD and converted to Wei for the proposal contract
var _totalCostsUSD = 30000;
var _totalCosts = web3.toWei(_totalCostsUSD / _ETHUSD);

// Payment on day 1 for initial costs, in USD and converted to Wei for the proposal contract
var _oneTimeCostsUSD = 3000;
var _oneTimeCosts = web3.toWei(_oneTimeCostsUSD / _ETHUSD);

// Payable per day, in USD and converted to Wei for the proposal contract
var _minDailyWithdrawLimitUSD = 300;
var _minDailyWithdrawLimit = web3.toWei(_minDailyWithdrawLimitUSD / _ETHUSD);
//
//
// Don't change anything below here
//
//

// Proposal sourced from https://github.com/slockit/DAO/blob/master/SampleOfferWithoutReward.sol
// Compiled with $ solc --optimize --abi --bin -o ./build/ SampleOfferWithoutReward.sol 

var Proposal_abi = [{"constant":true,"inputs":[],"name":"minDailyWithdrawLimit","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"client","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_contractor","type":"address"},{"name":"_client","type":"address"},{"name":"_IPFSHashOfTheProposalDocument","type":"bytes32"},{"name":"_totalCosts","type":"uint256"},{"name":"_oneTimeCosts","type":"uint256"},{"name":"_minDailyWithdrawLimit","type":"uint256"}],"name":"SampleOffer","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"sign","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"paidOut","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newClient","type":"address"}],"name":"updateClientAddress","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"returnRemainingEther","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getDailyPayment","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"dailyWithdrawLimit","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalCosts","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"originalClient","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"dateOfSignature","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_dailyWithdrawLimit","type":"uint256"}],"name":"setDailyWithdrawLimit","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"IPFSHashOfTheProposalDocument","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[],"name":"oneTimeCosts","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"isContractValid","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"contractor","outputs":[{"name":"","type":"address"}],"type":"function"}]
var Proposal_code = "606060405261044b806100126000396000f3606060405236156100cf5760e060020a60003504630b6ca20a81146100d7578063109e94cf146100e05780631f5338e3146100f25780632ca15122146101525780635c76ca2d1461018e5780637416cd32146101975780637648c929146101b85780639b29cb23146101d6578063ace687eb146101f7578063b8bc0ed414610200578063cda5f5d514610209578063d46985f41461021b578063d7d9e76e14610224578063db2e434414610245578063dd9bc8811461024e578063f87a3fb514610257578063fbfd20451461026b575b610150610002565b61027f60055481565b610289600854600160a060020a031681565b6003805473ffffffffffffffffffffffffffffffffffffffff19908116600480359190911790925560098054821660243590811790915560088054909216179055604435905560643560005560843560015560a43560058190556002555b005b610150600954600160a060020a039081163390911614158061017657506000543414155b806101845750600754600014155b1561029c57610002565b61027f60065481565b61015060043560085433600160a060020a0390811691161461031857610002565b61015060085433600160a060020a0390811691161461032657610002565b61015060035460009033600160a060020a039081169116146103c757610002565b61027f60025481565b61027f60005481565b610289600954600160a060020a031681565b61027f60075481565b61015060043560085433600160a060020a0390811691161461042f57610002565b61027f60045481565b61027f60015481565b61027f60095460ff60a060020a9091041681565b610289600354600160a060020a031681565b565b6060908152602090f35b600160a060020a03166060908152602090f35b600354600154600160a060020a0390911690600090606082818181858883f1935050505015156102cb57610002565b426007556009805474ff0000000000000000000000000000000000000000191660a060020a179055565b6008805473ffffffffffffffffffffffffffffffffffffffff1916821790555b50565b60003411156102f557610002565b6009547f82bf6464000000000000000000000000000000000000000000000000000000006060908152600160a060020a0391909116906382bf6464906064906020906004816000876161da5a03f1156100025750506040518051600160a060020a03908116925030163190600081818185876185025a03f1925050501561027d576009805474ff000000000000000000000000000000000000000019169055565b50600754600254600654620151804293909303830192909204020330600160a060020a031631811115610401575030600160a060020a0316315b600354600160a060020a0316600082606082818181858883f193505050501561031557600680548201905550565b600034111561043d57610002565b60055481106103155760025556";

var ProposalContract = web3.eth.contract(Proposal_abi);

// Unlock a wallet to pay for the creation of the proposal contract
personal.unlockAccount(eth.accounts[2]);

var DAOProposal = ProposalContract.new(
    _contractor,
    _TheDAO,
    _IPFSHashOfTheProposalDocument,
    _totalCosts,
    _oneTimeCosts,
    _minDailyWithdrawLimit,
    {from:_contractor, data:Proposal_code, gas: 4000000}, function(e, ProposalContract){
  if(!e) {
    
    if(!ProposalContract.address) {
      console.log("Contract transaction send: TransactionHash: " + ProposalContract.transactionHash + " waiting to be mined...");

    } else {
      console.log("Contract mined! Address: " + ProposalContract.address);
      console.log(ProposalContract);
    }

  }
  else {
    console.log("Contract deployment error: " + e)
    console.log(ProposalContract);

  }
});