/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'yo-ember',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    firebase: {
    apiKey: 'AIzaSyADHwnU3O-7oJWZWy3bGJun2sfa5uSbMi4',
    authDomain: 'yo-ember-6f8f9.firebaseapp.com',
    databaseURL: 'https://yo-ember-6f8f9.firebaseio.com',
    storageBucket: 'yo-ember-6f8f9.appspot.com',
    messagingSenderId: "547033235722"
  },    

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };


  


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;

	
};
