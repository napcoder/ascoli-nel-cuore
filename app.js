#!/bin/env node
/**
 * Module dependencies.
 */
var express  = require('express');
var http     = require('http');
var path     = require('path');
var fs       = require('fs');
var routes   = require('./routes');
var champ    = require('./routes/championships');
var partials = require('./routes/partials');

/**
 *  Define the sample application.
 */
var SampleApp = function() {

	//  Scope.
    var self = this;


    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_INTERNAL_IP || process.env.OPENSHIFT_NODEJS_IP;
        self.port      = process.env.OPENSHIFT_INTERNAL_PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        }
    };

    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };


    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };


    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
    self.initializeServer = function() {
        self.app = express();

        // all environments
		//self.app.set('port', process.env.PORT || 3000);
		self.app.set('views', path.join(__dirname, 'views'));
		self.app.set('view engine', 'jade');
		self.app.use(express.favicon(path.join(__dirname, 'public/img/favicon.ico')));
		self.app.use(express.logger('dev'));
		self.app.use(express.json());
		self.app.use(express.urlencoded());
		self.app.use(express.methodOverride());
		self.app.use(self.app.router);
		self.app.use(express.static(path.join(__dirname, 'public')));

		// development only
		if ('development' == self.app.get('env')) {
			self.app.use(express.errorHandler());
		}

		// ROUTES
        self.app.get('/', routes.index);
		self.app.get('/health', routes.health);
		self.app.get('/env', routes.env);
		self.app.get('/championships', champ.list);
		self.app.get('/championships/:year', champ.year);
		self.app.get('/example', champ.example);

        // ROUTES PARTIALS for AngularJs
        self.app.get('/partials/home.html', partials.home);
        self.app.get('/partials/api.html', partials.api);
        self.app.get('/partials/partial1.html', partials.partial1);
	};
	
	/**
     *  Initializes the sample application.
     */
    self.initialize = function() {
        self.setupVariables();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };

    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function() {
        //  Start the app on the specific interface (and port).
        http.createServer(self.app).listen(self.port, self.ipaddress, function() {
            console.log('%s: Express server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
        });
    };
}; /*  Sample Application.  */

/**
 *  main():  Main code.
 */
var zapp = new SampleApp();
zapp.initialize();
zapp.start();