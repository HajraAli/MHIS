/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	/* App Module */
	
	var cacheCleaner = angular.module('cacheCleaner', ['ui.bootstrap', 'ngRoute', 'ngCookies', 'ngSanitize', 'cacheCleanerDirectives', 'cacheCleanerControllers', 'cacheCleanerServices', 'cacheCleanerFilters', 'angularLocalStorage', 'pascalprecht.translate']).value('DHIS2URL', '../api').config(function ($translateProvider) {
	  $translateProvider.preferredLanguage('en');
	  $translateProvider.useSanitizeValueStrategy('escaped');
	  $translateProvider.useLoader('i18nLoader');
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* global angular */
	
	'use strict';
	
	/* Services */
	
	var cacheCleanerServices = angular.module('cacheCleanerServices', ['ngResource']);
	
	cacheCleanerServices.service('idbStorageService', function ($window, $q) {
	
	    var indexedDB = $window.indexedDB;
	
	    var db = null;
	
	    var open = function open(dbName) {
	        var deferred = $q.defer();
	
	        var request = indexedDB.open(dbName);
	
	        request.onsuccess = function (e) {
	            db = e.target.result;
	            deferred.resolve();
	        };
	
	        request.onerror = function () {
	            deferred.reject();
	        };
	
	        return deferred.promise;
	    };
	
	    var dbExists = function dbExists(dbName) {
	
	        var deferred = $q.defer();
	
	        var request = indexedDB.open(dbName);
	
	        var existed = true;
	
	        request.onsuccess = function (e) {
	            request.result.close();
	
	            if (!existed) {
	                indexedDB.deleteDatabase(dbName);
	            }
	
	            deferred.resolve(existed);
	        };
	
	        request.onerror = function () {
	            deferred.reject();
	        };
	
	        request.onupgradeneeded = function () {
	            existed = false;
	        };
	
	        return deferred.promise;
	    };
	
	    var getObjectStores = function getObjectStores(dbName) {
	
	        var deferred = $q.defer();
	
	        var request = indexedDB.open(dbName);
	
	        request.onsuccess = function (e) {
	            var db = e.target.result;
	            deferred.resolve(db.objectStoreNames);
	        };
	
	        request.onerror = function () {
	            deferred.reject();
	        };
	        return deferred.promise;
	    };
	
	    var deleteDb = function deleteDb(dbName) {
	
	        var deferred = $q.defer();
	
	        var request = indexedDB.deleteDatabase(dbName);
	
	        request.onsuccess = function (e) {
	            deferred.resolve(true);
	        };
	
	        request.onerror = function (e) {
	            console.log('Error in deleting db: ', e);
	            deferred.resolve(false);
	        };
	        return deferred.promise;
	    };
	
	    return {
	        open: open,
	        deleteDb: deleteDb,
	        dbExists: dbExists,
	        getObjectStores: getObjectStores
	    };
	})
	/* Modal service for user interaction */
	.service('ModalService', ['$modal', function ($modal) {
	
	    var modalDefaults = {
	        backdrop: true,
	        keyboard: true,
	        modalFade: true,
	        templateUrl: 'views/modal.html'
	    };
	
	    var modalOptions = {
	        closeButtonText: 'Close',
	        actionButtonText: 'OK',
	        headerText: 'Proceed?',
	        bodyText: 'Perform this action?'
	    };
	
	    this.showModal = function (customModalDefaults, customModalOptions) {
	        if (!customModalDefaults) customModalDefaults = {};
	        customModalDefaults.backdrop = 'static';
	        return this.show(customModalDefaults, customModalOptions);
	    };
	
	    this.show = function (customModalDefaults, customModalOptions) {
	        //Create temp objects to work with since we're in a singleton service
	        var tempModalDefaults = {};
	        var tempModalOptions = {};
	
	        //Map angular-ui modal custom defaults to modal defaults defined in service
	        angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);
	
	        //Map modal.html $scope custom properties to defaults defined in service
	        angular.extend(tempModalOptions, modalOptions, customModalOptions);
	
	        if (!tempModalDefaults.controller) {
	            tempModalDefaults.controller = ['$scope', '$modalInstance', function ($scope, $modalInstance) {
	                $scope.modalOptions = tempModalOptions;
	                $scope.modalOptions.ok = function (result) {
	                    $modalInstance.close(result);
	                };
	                $scope.modalOptions.close = function (result) {
	                    $modalInstance.dismiss('cancel');
	                };
	            }];
	        }
	
	        return $modal.open(tempModalDefaults).result;
	    };
	}])
	/* service for wrapping sessionStorage '*/
	.service('SessionStorageService', function ($window) {
	    return {
	        get: function get(key) {
	            return JSON.parse($window.sessionStorage.getItem(key));
	        },
	        set: function set(key, obj) {
	            $window.sessionStorage.setItem(key, JSON.stringify(obj));
	        },
	        clearAll: function clearAll() {
	            for (var key in $window.sessionStorage) {
	                $window.sessionStorage.removeItem(key);
	            }
	        }
	    };
	}).factory('i18nLoader', function ($q, $http, SessionStorageService, DHIS2URL) {
	
	    var getTranslationStrings = function getTranslationStrings(locale) {
	        var defaultUrl = 'i18n/i18n_app.properties';
	        var url = '';
	        if (locale === 'en' || !locale) {
	            url = defaultUrl;
	        } else {
	            url = 'i18n/i18n_app_' + locale + '.properties';
	        }
	
	        var tx = { locale: locale };
	
	        var promise = $http.get(url).then(function (response) {
	            tx = { locale: locale, keys: dhis2.util.parseJavaProperties(response.data) };
	            return tx;
	        }, function () {
	
	            var p = $http.get(defaultUrl).then(function (response) {
	                tx = { locale: locale, keys: dhis2.util.parseJavaProperties(response.data) };
	                return tx;
	            });
	            return p;
	        });
	        return promise;
	    };
	
	    var getLocale = function getLocale() {
	        var locale = 'en';
	
	        var promise = $http.get(DHIS2URL + '/me/profile.json').then(function (response) {
	            SessionStorageService.set('USER_PROFILE', response.data);
	            if (response.data && response.data.settings && response.data.settings.keyUiLocale) {
	                locale = response.data.settings.keyUiLocale;
	            }
	            return locale;
	        }, function () {
	            return locale;
	        });
	
	        return promise;
	    };
	    return function () {
	        var deferred = $q.defer(),
	            translations;
	        var userProfile = SessionStorageService.get('USER_PROFILE');
	        if (userProfile && userProfile.settings && userProfile.settings.keyUiLocale) {
	            getTranslationStrings(userProfile.settings.keyUiLocale).then(function (response) {
	                translations = response.keys;
	                deferred.resolve(translations);
	            });
	            return deferred.promise;
	        } else {
	            getLocale().then(function (locale) {
	                getTranslationStrings(locale).then(function (response) {
	                    translations = response.keys;
	                    deferred.resolve(translations);
	                });
	            });
	            return deferred.promise;
	        }
	    };
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	/* Directives */
	
	var cacheCleanerDirectives = angular.module('cacheCleanerDirectives', []);

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* global angular */
	
	'use strict';
	
	/* Controllers */
	
	var cacheCleanerControllers = angular.module('cacheCleanerControllers', [])
	
	//Controller for settings page
	.controller('MainController', function ($scope, storage, $window, idbStorageService, ModalService) {
	
	    $scope.afterClearing = false;
	
	    var getItemsToClear = function getItemsToClear() {
	
	        $scope.lsCacheExists = false;
	        $scope.ssCacheExists = false;
	        $scope.idCacheExists = false;
	
	        $scope.lsKeys = [];
	        $scope.dbKeys = [];
	        $scope.ssKeys = [];
	
	        var reservedStorageKeys = ['key', 'getItem', 'setItem', 'removeItem', 'clear', 'length'];
	
	        for (var key in $window.sessionStorage) {
	            if (reservedStorageKeys.indexOf(key) === -1) {
	                $scope.ssKeys.push({ id: key, remove: false });
	                $scope.ssCacheExists = true;
	            }
	        }
	
	        for (var key in $window.localStorage) {
	            if (reservedStorageKeys.indexOf(key) === -1) {
	                $scope.lsKeys.push({ id: key, remove: false });
	                $scope.lsCacheExists = true;
	            }
	        }
	
	        var idxDBs = ['dhis2ou', 'dhis2', 'dhis2tc', 'dhis2ec', 'dhis2de'];
	        angular.forEach(idxDBs, function (db) {
	            idbStorageService.dbExists(db).then(function (res) {
	                if (res) {
	                    $scope.dbKeys.push({ id: db, remove: false });
	                    $scope.idCacheExists = true;
	                }
	            });
	        });
	    };
	
	    getItemsToClear();
	
	    $scope.clearCache = function () {
	
	        var modalOptions = {
	            closeButtonText: 'cancel',
	            actionButtonText: 'proceed',
	            headerText: 'clearing_cache',
	            bodyText: 'proceed_cleaning'
	        };
	
	        ModalService.showModal({}, modalOptions).then(function () {
	
	            angular.forEach($scope.ssKeys, function (ssKey) {
	                if (ssKey.remove) {
	                    $window.sessionStorage.removeItem(ssKey.id);
	                    console.log('removed from session storage:  ', ssKey.id);
	                }
	            });
	
	            angular.forEach($scope.lsKeys, function (lsKey) {
	                if (lsKey.remove) {
	                    storage.remove(lsKey.id);
	                    console.log('removed from local storage:  ', lsKey.id);
	                }
	            });
	
	            angular.forEach($scope.dbKeys, function (dbKey) {
	                if (dbKey.remove) {
	                    idbStorageService.deleteDb(dbKey.id).then(function (res) {
	                        if (res) {
	                            console.log('removed from indexeddb:  ', dbKey.id);
	                        } else {
	                            console.log('failed to remove from indexeddb:  ', dbKey.id);
	                        }
	                    });
	                }
	            });
	            $scope.afterClearing = true;
	            getItemsToClear();
	        });
	    };
	
	    $scope.selectAll = function () {
	        angular.forEach($scope.ssKeys, function (ssKey) {
	            ssKey.remove = !ssKey.remove;
	        });
	
	        angular.forEach($scope.lsKeys, function (lsKey) {
	            lsKey.remove = !lsKey.remove;
	        });
	
	        angular.forEach($scope.dbKeys, function (dbKey) {
	            dbKey.remove = !dbKey.remove;
	        });
	    };
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	/* Filters */
	
	var cacheCleanerFilters = angular.module('cacheCleanerFilters', []);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, ".top-bar {\n    font-size: 16pt;\n    font-weight: normal;\n    color: #585D61;\n}\n\n.vertical-spacing{\n    margin-top: 20px;\n}\n\ntable\n{\n    font-size: 13px;\n    line-height: 24px;\n    table-layout: fixed;\n    margin-bottom: 10px;\n}\n\n.page {\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 100px;\n}\n\ntd:nth-child(2) {\n    width: 10%;\n    text-align: center;\n}\n\nhtml {\n    font-size: 14px;\n}", ""]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map