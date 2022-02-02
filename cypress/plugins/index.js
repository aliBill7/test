/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  module.exports = (on, config) => {
    // on('before:browser:launch', (browser = {}, args) => {
    //   const ext_path = require('path').join( __dirname, '..', 'extensions', 'ignoreXFrameHeaders', '1.1_0' );
  
    //   args = require('cypress-log-to-output').browserLaunchHandler(browser, args);
  
    //   if (browser.name === 'chrome') {
    //     args.push('--load-extension=' + ext_path);
    //     args.push('--disable-gpu');
    //     args.push('--auth-server-whitelist=_');
    //     return args;
    //   }
    // });

    on('task', {
    
      log(message) {
        var cDate = new Date(); 
        console.log('\t @ ' + (cDate.getHours()).toString() + ':'
         + cDate.getMinutes().toString()+ ':' + cDate.getSeconds().toString()+'s' + ' >>>>>> ' + message)
        return null
      }

    });

  };


   // or, if there is already a before:browser:launch handler, use .browserLaunchHandler inside of it
   // @see https://github.com/flotwig/cypress-log-to-output/issues/5
  
