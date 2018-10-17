var Web3 = require("web3")

var web3;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.WebsocketProvider("http://127.0.0.1:8546"));
}
        
var contractAbi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "key",
				"type": "string"
			},
			{
				"name": "value",
				"type": "string"
			}
		],
		"name": "setvalue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "key",
				"type": "string"
			}
		],
		"name": "getvalue",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "action",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "key",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "string"
			}
		],
		"name": "orderlog",
		"type": "event"
	}
];

var contractaAddress = "0x31bd7af45b90811f23fa748fbf1940dc8b3d9dcb";
        
MyContract = new web3.eth.Contract(contractAbi, contractaAddress);
		//console.log(MyContract.events.orderlog);
        
var myEvent = MyContract.events.orderlog({
	filter:{},
	fromBlock: 0
}, function(error, event){})
	.on('data', function(event){
	console.log(event); // same results as the optional callback above
})
	.on('changed', function(event){
		    // remove event from local database
	})	
    .on('error', console.error);
    

/*
    MyContract.getPastEvents('allEvents', {
        filter: {},
        fromBlock: 0,
        toBlock: 'latest'
    }, function(error, events){ console.log(events); })
    .then(function(events){
        console.log(events) // same results as the optional callback above
    });
*/
