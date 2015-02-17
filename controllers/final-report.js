'use strict';

/**
 * Controller that renders our about page.
 */
function teamreport (request, response) {
  var contextData = {};
  response.render('final-report.html', contextData);
}

module.exports = {
  teamreport: teamreport
};