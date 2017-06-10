var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var http = require('http');
var request = require('request');


/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  // using fs...
  // read text from file
  // convert text into a list, delimited by line feeds
  // give list to callback
  fs.readFile(exports.paths.list, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    var dataArr = data.split('\n');
    callback(dataArr);
  });
};

exports.isUrlInList = function(url, callback) {
  // read list of urls
  // compare each url in list with input url
  // if found
  //  return true
  // else
  //  return false
  exports.readListOfUrls(function(dataArr) {
    callback(dataArr.indexOf(url) >= 0);
  });
};

exports.addUrlToList = function(url, callback) {
  // using fs..
  // if url is not in list 
  //   append line feed character to end of url
  //   write url to list
  fs.appendFile(exports.paths.list, url + '\n', function (err) {
    if (err) {
      throw err;
    }
    callback();
  });
};

exports.isUrlArchived = function(url, callback) {
  // using fs...
  // read file names in archived dir
    // make comparison with passed in url
    // send true or false to callback
  fs.access(exports.paths.archivedSites + '/' + url, 
    // from node docs:  
    // option that says nothing about permissions
    // just tells us if it exists
    fs.constants.F_OK, (err) => {
      err ? callback(false) : callback(true);
    });
};

exports.downloadUrls = function(urls) {
  // iterate over list of urls
  // for each ...
  //   get the corresponding url from the web....
  //      in form of text string, save into local variable
  //   create fileName with name of current url in archive folder
  //   write corresponsponding text to that file
  urls.forEach(function(url) {
    request('http://' + url, function (error, response, body) {
      fs.writeFile(exports.paths.archivedSites + '/' + url, body);
    });
  });
  
  
};
