// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	var stream;
	__weex_define__('@weex-temp/x', function (__weex_require__) {
	    stream = __weex_require__('@weex-module/stream');
	});

	var modal;
	__weex_define__('@weex-temp/x', function (__weex_require__) {
	    modal = __weex_require__('@weex-module/modal');
	});

	var apiURL = {
	    baseXbUrl: 'https://api.github.com'
	};

	function requestGet(url, callback) {
	    requestGetWithBody(url, null, callback);
	}

	function requestGetWithBody(url, body, callback) {

	    stream.fetch({
	        method: 'GET',
	        url: apiURL.baseXbUrl + url,
	        type: 'json',
	        body: body
	    }, function (ret) {
	        var resultObj = ret;
	        if (typeof resultObj == 'string') {
	            resultObj = JSON.parse(resultObj);
	        }
	        var serverResultData = resultObj.data;
	        if (typeof serverResultData == 'string') {
	            serverResultData = JSON.parse(serverResultData);
	        }
	        callback(serverResultData);
	    }, function (progress) {});
	}

	function requestPost(url, callback) {
	    requestPostWithBody(url, null, callback);
	}

	function requestPostWithBody(url, body, callback) {

	    stream.fetch({
	        method: 'POST',
	        url: apiURL.baseXbUrl + url,
	        type: 'json',
	        body: body
	    }, function (ret) {
	        var resultObj = ret;
	        nativeLog('resultObj  = ' + ret);
	        if (typeof resultObj == 'string') {
	            resultObj = JSON.parse(resultObj);
	        }
	        var serverResultData = resultObj.data;
	        if (typeof serverResultData == 'string') {
	            serverResultData = JSON.parse(serverResultData);
	        }
	        callback(serverResultData);
	    }, function (progress) {});
	}

	function requestUserRank(language, location, page, callback) {
	    var GET_URL_JSONP;
	    if (language === 'All language') {
	        GET_URL_JSONP = 'https://api.github.com/search/users?sort=followers&page=' + page + '&q=location:' + location;
	    } else {
	        GET_URL_JSONP = 'https://api.github.com/search/users?sort=followers&page=' + page + '&q=language:' + language;
	        if (location !== 'World') {
	            GET_URL_JSONP = GET_URL_JSONP + '%20location:' + location;
	        }
	    }

	    stream.fetch({
	        method: 'GET',
	        url: GET_URL_JSONP,
	        type: 'jsonp'
	    }, function (ret) {
	        if (!ret.ok) {} else {}
	        callback(ret.data.items);
	    }, function (response) {
	        console.log('get in progress:' + response.length);
	    });
	}

	function requestUserDetail(login, callback) {
	    var GET_URL_JSONP = 'https://api.github.com/users/' + login;

	    stream.fetch({
	        method: 'GET',
	        url: GET_URL_JSONP,
	        type: 'jsonp'
	    }, function (ret) {
	        if (!ret.ok) {} else {}

	        callback(ret.data);
	    }, function (response) {});
	}

	function requestRepRank(language, page, callback) {

	    var GET_URL_JSONP = 'https://api.github.com/search/repositories?sort=stars&order=desc&page=' + page + '&q=language:' + language;

	    stream.fetch({
	        method: 'GET',
	        url: GET_URL_JSONP,
	        type: 'json'
	    }, function (ret) {
	        if (!ret.ok) {} else {}
	        callback(ret.data.items);
	    }, function (response) {
	        console.log('get in progress:' + response.length);
	    });
	}

	exports.requestGet = requestGet;
	exports.requestGetWithBody = requestGetWithBody;
	exports.requestPost = requestPost;
	exports.requestPostWithBody = requestPostWithBody;
	exports.requestUserRank = requestUserRank;
	exports.requestUserDetail = requestUserDetail;
	exports.requestRepRank = requestRepRank;

/***/ })
/******/ ]);