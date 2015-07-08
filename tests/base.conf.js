/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

'use strict';

// #####################################################################################################################
// #CONFIGURATION#
var b2s = require('browserslist-saucelabs');

module.exports = {
    formatTaskName: function formatTaskName(browserName) {
        return [
            'Test', browserName, 'for',
            process.env.TRAVIS_REPO_SLUG,
            (process.env.TRAVIS_PULL_REQUEST ? 'pull request #' + process.env.TRAVIS_PULL_REQUEST : ''),
            'build #' + process.env.TRAVIS_BUILD_NUMBER
        ].join(' ');
    },

    // browsers are coming from the browserslist file
    sauceLabsBrowsers: b2s()
};
