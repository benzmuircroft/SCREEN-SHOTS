var daemon = require("daemonize2").setup({
    main: "N.qrit.js",
    name: "qrit",
    /*pidfile: "/var/run/sampleapp.pid",*/
    silent: false
});



daemon
    .on("starting", function(){
        console.log("Starting daemon...");
    })
    .on("started", function(pid){
        console.log("Daemon started. PID: " + pid);
    })
    .on("stopping", function(){
        console.log("Stopping daemon...");
    })
    .on("stopped", function(pid){
        console.log("Daemon stopped.");
    })
    .on("running", function(pid){
        console.log("Daemon already running. PID: " + pid);
    })
    .on("notrunning", function(){
        console.log("Daemon is not running");
    })
    .on("error", function(err){
        console.log("Daemon failed to start:  " + err.message);
        reboot();
    });
    



function reboot(){
    var pid = daemon.status();
    if (!pid){
    console.log("restarting.");
    daemon.start();
    }else{console.log("running.");}}reboot();
    
    
    
    
    
    
    
    
    