var path = require('canonical-path');
var log = require('winston');

var currentVersion;
var contentsFolder;
module.exports = {
  name: 'index-page',
  runAfter: ['adding-extra-docs'],
  runBefore: ['extra-docs-added'],
  description: 'Create documentation index page',
  init: function(config) {
    currentVersion = config.get('currentVersion');
    contentsFolder = config.get('rendering.contentsFolder');
  },
  process: function(docs) {
    docs.push({
      docType: 'index-page',
      id: 'index-page',
      currentVersion: currentVersion,
      template: 'index.template.html',
      outputPath: contentsFolder + '/index.md'
    });
  }
};
