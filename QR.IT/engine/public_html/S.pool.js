var Stratum = require('stratum-pool');

var pool = Stratum.createPool({
    "coin": {
    	"name": "Vertcoin",
    	"symbol": "VTC",
    	"algorithm": "scrypt-n",
    	"timeTable": {									// This defaults to Vertcoin's timetable if not used. It is required for scrypt-n coins that have modified their N-factor timetable to be different than Vertcoin's.
        	"2048": 1390959880,
        	"4096": 1438295269,
        	"8192": 1485630658,
        	"16384": 1532966047,
        	"32768": 1580301436,
        	"65536": 1627636825,
        	"131072": 1674972214,
        	"262144": 1722307603
    		}},
    "address": "VfR6nrrxuvAg9Rb4nYGH9NuZtYMrFgMr5q", 	// Address to where block rewards are given
    "blockRefreshInterval": 1000, 						// How often to poll RPC daemons for new blocks, in milliseconds
    "txRefreshInterval": 20000, 						// How many milliseconds should have passed before new block transactions will trigger a new job broadcast.
    "jobRebroadcastTimeout": 55,						// Some miner software is bugged and will consider the pool offline if it doesn't receive anything for around a minute, so every time we broadcast jobs, set a timeout to rebroadcast in this many seconds unless we find a new job. Set to zero or remove to disable this. 
    "connectionTimeout": 600, 							// Remove workers that haven't been in contact for this many seconds // Some attackers will create thousands of workers that use up all available socket connections, usually the workers are zombies and don't submit shares after connecting. This features detects those and disconnects them.
    "emitInvalidBlockHashes": false,					// Sometimes you want the block hashes even for shares that aren't block candidates.
    "shareVariancePercent": 10,							// We use proper maximum algorithm difficulties found in the coin daemon source code. Most miners/pools that deal with scrypt use a guesstimated one that is about 5.86% off from the actual one. So here we can set a tolerable threshold for if a share is slightly too low due to mining apps using incorrect max diffs and this pool using correct max diffs. 
    "banning": {										// If a worker is submitting a good deal of invalid shares we can temporarily ban them to reduce system/network load. Also useful to fight against flooding attacks.
        "enabled": true,
        "time": 600, 									// How many seconds to ban worker for
        "invalidPercent": 50, 							// What percent of invalid shares triggers ban
        "checkThreshold": 500, 							// Check invalid percent when this many shares have been submitted
        "purgeInterval": 300 							// Every this many seconds clear out the list of old bans
    	},
    "ports": {											// Each pool can have as many ports for your miners to connect to as you wish. Each port can be configured to use its own pool difficulty and variable difficulty settings. varDiff is optional and will only be used for the ports you configure it for.
        "9174": { 										// A port for your miners to connect to
            "diff": 32, 								// the pool difficulty for this port
            "varDiff": {								// Variable difficulty is a feature that will automatically adjust difficulty for individual miners based on their hashrate in order to lower networking overhead
                "minDiff": 8, 							// Minimum difficulty
                "maxDiff": 512, 						// Network difficulty will be used if it is lower than this
                "targetTime": 15, 						// Try to get 1 share per this many seconds
                "retargetTime": 90, 					// Check to see if we should retarget every this many seconds
                "variancePercent": 30 					// Allow time to very this % from target without retargeting
            	}}},
    "daemons": [{										// Main daemon instance// Recommended to have at least two daemon instances running in case one drops out-of-sync or offline. For redundancy, all instances will be polled for block/transaction updates and be used for submitting blocks. Creating a backup daemon involves spawning a daemon using the "-datadir=/backup" argument which creates a new daemon instance with it's own RPC config. For more info on this see: - https://en.bitcoin.it/wiki/Data_directory & https://en.bitcoin.it/wiki/Running_bitcoind 
		"host": "csvert.suroot.com",
        "port": 9174,
        "user": "VfR6nrrxuvAg9Rb4nYGH9NuZtYMrFgMr5q",
        "password": "precipitevolissimevolmente;;;:::"
        }],
    "p2p": {											// This allows the pool to connect to the daemon as a node peer to recieve block updates. It may be the most efficient way to get block updates (faster than polling, less intensive than blocknotify script). However its still under development (not yet working).
        "enabled": false,
        "host": "multics.suroot.com",
        "port": 5889,
        "magic": "0xfbc0b6dbL",							// Magic value is different for main/testnet and for each coin. It is found in the daemon source code as the pchMessageStart variable. For example, litecoin mainnet magic: http://git.io/Bi8YFw & for litecoin testnet magic: http://git.io/NXBYJA
        "protocolVersion": 1300,						// Found in src as the PROTOCOL_VERSION variable, for example: http://git.io/KjuCrw
    	}

}, function(ip, workerName, password, callback){
    console.log("Authorize " + workerName + ":" + password + "@" + ip);
    callback({
        error: null,
        authorized: true,
        disconnect: false
		});});

	// 'data' object contains:
    // 		job: 4, //stratum work job ID
    // 		ip: '71.33.19.37', //ip address of client
    // 		worker: 'matt.worker1', //stratum worker name
    // 		difficulty: 64, //stratum client difficulty
    // 		reward: 5000000000, //the number of satoshis received as payment for solving this block
    // 		height: 443795, //block height
    // 		networkDifficulty: 3349 //network difficulty for this block
    // AAK the block solution - set if block was found
    // 		blockHash: '110c0447171ad819dd181216d5d80f41e9218e25d833a2789cb8ba289a52eee4',
    // Exists if "emitInvalidBlockHashes" is set to true
    // 		blockHashInvalid: '110c0447171ad819dd181216d5d80f41e9218e25d833a2789cb8ba289a52eee4'
    // txHash is the coinbase transaction hash from the block
    // 		txHash: '41bb22d6cc409f9c0bae2c39cecd2b3e3e1be213754f23d12c5d6d2003d59b1d,
    // 		error: 'low share difficulty' //set if share is rejected for some reason

pool.on('share', function(isValidShare, isValidBlock, data){
    if		(isValidBlock)		{console.log('Block found');}
    else if	(isValidShare)		{console.log('Valid share submitted');}
    else if	(data.blockHash)	{console.log('We thought a block was found but it was rejected by the daemon');}
    else						{console.log('Invalid share submitted');}
    console.log('share data: ' + JSON.stringify(data));
	});
	// 'severity': can be 'debug', 'warning', 'error' //'logKey':   can be 'system' or 'client' indicating if the error was caused by our system or a stratum client

pool.on('log', function(severity, logKey, logText){
    console.log(severity + ': ' + '[' + logKey + '] ' + logText);
	});


pool.start();







