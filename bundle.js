/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Oswald.ttf */ "./src/fonts/Oswald.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: Oswald;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

:root {
  font-family: Oswald, sans-serif;
  --soft-white: #F1FAEE;
  --orange: #FF9923;
  --red: #F25C54;
  --blue: #80BBDF;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0; 
  font-size: inherit;
  font-weight: normal;
  list-style-type: none;
  color: var(--soft-white);
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
}

#title, #round-message {
  text-align: center;
}

#game {
  height: clamp(500px, 100%, 600px);
  width: min(1000px, 100%);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  background-color: rgba(0,0,0,0.25);
  backdrop-filter: blur(2px);
}

#header {
  flex: 1 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#title {
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 0.25em;
}

#round-message{
  font-size: 1.25rem;
  margin-bottom: auto;
}

#grids {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.grid-container {
  flex: 0 1 400px;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.grid {
  flex: 1;
  aspect-ratio: 1 / 1;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(11, 1fr);
  gap: 0.25rem;
}

.label {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
}

.tile {
  border-radius: 0.25rem;
  border: 1px solid var(--soft-white);
  transition: all 250ms ease;
}

.ship, .highlight {
  border: 1px solid var(--orange);
}

.ship {
  background-color: var(--orange);
}

.miss {
  background-color: var(--blue);
  border: 1px solid var(--blue);
}

.hit {
  background-color: var(--red);
  border: 1px solid var(--red);
}

@media only screen and (max-width: 600px) {
  #game {
    height: 100%;
    border-radius: 0rem;
  }

  #header {
    flex: 0;
  }

  #title {
    font-size: 2.5rem;
  }

  #grids {
    flex-direction: column;
    flex: 1;
  }
  
  .grid-container {
    flex: 1;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,4CAA4B;AAC9B;;AAEA;EACE,+BAA+B;EAC/B,qBAAqB;EACrB,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yDAA8C;EAC9C,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;EACjC,wBAAwB;EACxB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,kCAAkC;EAClC,0BAA0B;AAC5B;;AAEA;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,OAAO;EACP,mBAAmB;EACnB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,mCAAmC;EACnC,0BAA0B;AAC5B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,6BAA6B;EAC7B,6BAA6B;AAC/B;;AAEA;EACE,4BAA4B;EAC5B,4BAA4B;AAC9B;;AAEA;EACE;IACE,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,OAAO;EACT;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,sBAAsB;IACtB,OAAO;EACT;;EAEA;IACE,OAAO;EACT;AACF","sourcesContent":["@font-face {\r\n  font-family: Oswald;\r\n  src: url(./fonts/Oswald.ttf);\r\n}\r\n\r\n:root {\r\n  font-family: Oswald, sans-serif;\r\n  --soft-white: #F1FAEE;\r\n  --orange: #FF9923;\r\n  --red: #F25C54;\r\n  --blue: #80BBDF;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0; \r\n  font-size: inherit;\r\n  font-weight: normal;\r\n  list-style-type: none;\r\n  color: var(--soft-white);\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-image: url(./images/background.jpg);\r\n  background-size: cover;\r\n}\r\n\r\n#title, #round-message {\r\n  text-align: center;\r\n}\r\n\r\n#game {\r\n  height: clamp(500px, 100%, 600px);\r\n  width: min(1000px, 100%);\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  border-radius: 1rem;\r\n  background-color: rgba(0,0,0,0.25);\r\n  backdrop-filter: blur(2px);\r\n}\r\n\r\n#header {\r\n  flex: 1 0 auto;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n#title {\r\n  font-size: 3.5rem;\r\n  font-weight: 900;\r\n  letter-spacing: 0.25em;\r\n}\r\n\r\n#round-message{\r\n  font-size: 1.25rem;\r\n  margin-bottom: auto;\r\n}\r\n\r\n#grids {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.grid-container {\r\n  flex: 0 1 400px;\r\n  aspect-ratio: 1 / 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.grid {\r\n  flex: 1;\r\n  aspect-ratio: 1 / 1;\r\n  display: grid;\r\n  grid-template-columns: repeat(11, 1fr);\r\n  grid-template-rows: repeat(11, 1fr);\r\n  gap: 0.25rem;\r\n}\r\n\r\n.label {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 1rem;\r\n}\r\n\r\n.tile {\r\n  border-radius: 0.25rem;\r\n  border: 1px solid var(--soft-white);\r\n  transition: all 250ms ease;\r\n}\r\n\r\n.ship, .highlight {\r\n  border: 1px solid var(--orange);\r\n}\r\n\r\n.ship {\r\n  background-color: var(--orange);\r\n}\r\n\r\n.miss {\r\n  background-color: var(--blue);\r\n  border: 1px solid var(--blue);\r\n}\r\n\r\n.hit {\r\n  background-color: var(--red);\r\n  border: 1px solid var(--red);\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  #game {\r\n    height: 100%;\r\n    border-radius: 0rem;\r\n  }\r\n\r\n  #header {\r\n    flex: 0;\r\n  }\r\n\r\n  #title {\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n  #grids {\r\n    flex-direction: column;\r\n    flex: 1;\r\n  }\r\n  \r\n  .grid-container {\r\n    flex: 1;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/AudioPlayer.js":
/*!************************************!*\
  !*** ./src/modules/AudioPlayer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer)
/* harmony export */ });
/* harmony import */ var _audio_plop_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../audio/plop.wav */ "./src/audio/plop.wav");
/* harmony import */ var _audio_hit_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audio/hit.wav */ "./src/audio/hit.wav");
/* harmony import */ var _audio_miss_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio/miss.wav */ "./src/audio/miss.wav");




class AudioPlayer {
  static play(type) {
    let audio;

    switch (type) {
      case ('plop'):
        audio = new Audio(_audio_plop_wav__WEBPACK_IMPORTED_MODULE_0__);
        break;
      case ('hit'):
        audio = new Audio(_audio_hit_wav__WEBPACK_IMPORTED_MODULE_1__);
        break;
      case ('miss'):
        audio = new Audio(_audio_miss_wav__WEBPACK_IMPORTED_MODULE_2__);
        break;
      default:
        audio = new Audio(_audio_plop_wav__WEBPACK_IMPORTED_MODULE_0__);
        break;
    }

    audio.play();
  }
}

/***/ }),

/***/ "./src/modules/Bot.js":
/*!****************************!*\
  !*** ./src/modules/Bot.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bot)
/* harmony export */ });
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ "./src/modules/Player.js");


class Bot extends _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super("Bot");
    this.mode = 'searching';
    this.attackQueue = [];
    this.shipEndpoints = [];
    this.shipOrientation = null;
  }

  #generateRandomDirection() {
    return (Math.round(Math.random()) === 0 ? 'horizontal' : 'vertical');
  }

  #generateRandomCoordinates() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y]
  }

  #generateCoordinates() {
    if (this.mode === 'searching') {
      return this.#generateRandomCoordinates();
    } else if (this.mode === 'found' || this.mode === 'target') {
      return this.attackQueue.pop();
    }
  }

  #setShipOrientation(row) {
    if (row != this.shipEndpoints[0][0]) {
      this.shipOrientation = 'vertical';
    } else {
      this.shipOrientation = 'horizontal';
    }
  }

  #updateShipEndpoints(row, col) {
    // Initial discovery of ship
    if (this.shipEndpoints.length === 0) {
      this.shipEndpoints.push([row, col], [row, col]);
    }

    // Subsequent endpoint updates
    if (this.shipOrientation === 'vertical') {
      const startRow = this.shipEndpoints[0][0];
      
      if (row < startRow) {
        this.shipEndpoints[0] = [row, col];
      } else {
        this.shipEndpoints[1] = [row, col];
      }
    } else {
      const startCol = this.shipEndpoints[0][1];

      if (col < startCol) {
        this.shipEndpoints[0] = [row, col];
      } else {
        this.shipEndpoints[1] = [row, col];
      }
    }
  }

  #targetNextEndpoint(row, col) {
    if (this.shipOrientation === 'vertical') {
      const startRow = this.shipEndpoints[0][0];

      if (row === startRow) {
        this.attackQueue.push([row - 1, col]);
      } else {
        this.attackQueue.push([row + 1 , col]);
      }
    } else {
      const startCol = this.shipEndpoints[0][1];

      if (col === startCol) { 
        this.attackQueue.push([row, col - 1]);
      } else { 
        this.attackQueue.push([row, col + 1]);
      }
    }
  }

  #targetEndpoints(row, col) {
    if (this.shipOrientation === 'vertical') {
      const startRow = this.shipEndpoints[0][0];
      const endRow = this.shipEndpoints[1][0];
      this.attackQueue.push([startRow - 1, col], [endRow + 1, col]);
    } else {
      const startCol = this.shipEndpoints[0][1];
      const endCol = this.shipEndpoints[1][1];
      this.attackQueue.push([row, startCol - 1], [row, endCol + 1]);
    }
  }

  /**
   * Determines which mode we are in and what tiles the Bot should target next
   * 
   * @param {} row 
   * @param {*} col 
   * @param {*} result 
   */
  receiveFeedback(row, col, result) {
    if (this.mode === 'searching' && result.message === 'Hit!') {
      this.mode = 'found';
      this.attackQueue.push([row + 1, col], [row, col + 1], [row - 1, col], [row, col - 1]);
      this.#updateShipEndpoints(row, col);
    } else if (this.mode === 'found' && result.message === 'Hit!') {
      this.mode = 'target';
      this.attackQueue = [];
      this.#setShipOrientation(row);
      this.#updateShipEndpoints(row, col);
      this.#targetEndpoints(row, col)
    } else if (this.mode === 'target') {
      if (result.message === 'Hit!') {
        this.#updateShipEndpoints(row, col);
        this.#targetNextEndpoint(row, col);
      }
    }

    if (this.attackQueue.length === 0) {
      this.mode = 'searching'
      this.shipEndpoints = [];
      this.shipOrientation = null;
    }
  }

  /**
   * Selects a tile
   * 
   * @returns a Promise that resolves to the selected tile
   */
  selectTileTo(action) {
    return new Promise((resolve) => {
      const response = {
        row: null,
        col: null,
      }

      let row, col;

      if (action === 'place') {
        response.direction = this.#generateRandomDirection();
        ([row, col] = this.#generateRandomCoordinates());
      } else if (action === 'attack') {
        ([row, col] = this.#generateCoordinates());
      }

      response.row = row;
      response.col = col;
      resolve(response);
    })
  }
}

/***/ }),

/***/ "./src/modules/Display.js":
/*!********************************!*\
  !*** ./src/modules/Display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ "./src/modules/Utils.js");


class Display {
  static usersGrid = document.querySelector('#users-grid');
  static opponentsGrid = document.querySelector('#opponents-grid');
  static roundMessage = document.querySelector('#round-message');
  static currentShip = null;
  static currentDirection = 'horizontal';

  /**
   * Renders two 10x10 grids for the game
   */
  static renderGrid() {
    [this.usersGrid, this.opponentsGrid].forEach((grid) => {
      for (let i = -1; i < 10; i++) {
        for (let j = -1; j < 10; j++) {
          const div = document.createElement('div');
          if (i === -1 && j >= 0) {
            div.classList.add('label');
            div.textContent = j + 1;
          } else if (i >= 0 && j === -1) {
            div.classList.add('label');
            div.textContent = String.fromCharCode(i + 65);
          } else if (i > -1 && j > -1) {
            div.classList.add('tile');
            div.dataset.row = i;
            div.dataset.col = j;
          }
          grid.appendChild(div);
        }
      }
    });
  }

  /**
   * Reveals all ships on the board
   * 
   * @param {GameBoard} board 
   */
  static renderShips(board) {
    for (let row = 0; row <= 9; row++) {
      for (let col = 0; col <= 9; col++) {
        if (board[row][col].hasShip) {
          const tile = this.usersGrid.querySelector(`[data-row="${row}"][data-col="${col}"]`);
          tile.classList.add('ship');
        }
      }
    }
  }

  /**
   * Hides all ships on the board
   */
  static hideShips() {
    const tiles = this.usersGrid.querySelectorAll('.ship');
    tiles.forEach(tile => tile.classList.remove('ship'));
  }

  /**
   * Displays the round message
   * 
   * @param {string} msg 
   */
  static renderMessage(msg) {
    this.roundMessage.textContent = msg;
  }

  /**
   * Updates the visual state of the tile depending on whether the shot was a hit
   * or a miss
   */
  static updateTile(yourTileState, opponentTileState, row, col) {
    const myTile = this.usersGrid.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (yourTileState.isShot) {
      if (yourTileState.hasShip) {
        myTile.classList.add('hit');
      } else {
        myTile.classList.add('miss');
      }
    }

    const opponentTile = this.opponentsGrid.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (opponentTileState.isShot) {
      if (opponentTileState.hasShip) {
        opponentTile.classList.add('hit');
      } else {
        opponentTile.classList.add('miss');
      }
    }
  }

  static #addHighlight(e) {
    const row = Number(e.target.dataset.row);
    const col = Number(e.target.dataset.col);
    
    if (_Utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isValidTile(row, col) && _Utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isValidLocation(row, col, Display.currentShip, Display.currentDirection)) {
      for (let i = 0; i < Display.currentShip.length; i++) {
        let tile;
        if (Display.currentDirection === 'vertical') {
          tile = Display.usersGrid.querySelector(`[data-row="${row + i}"][data-col="${col}"]`);
        } else {
          tile = Display.usersGrid.querySelector(`[data-row="${row}"][data-col="${col + i}"]`);
        }
  
        tile.classList.add('highlight');
      }
    }
  }

  static #removeHighlight() {
    const highlightedTiles = Display.usersGrid.querySelectorAll('.highlight');
    highlightedTiles.forEach(tile => tile.classList.remove('highlight'));
  }

  /**
   * Enables highlighting of tiles to indicate ship placement
   * 
   * @param {Ship} ship 
   * @param {string} direction 
   */
  static enableHighlight(ship, direction) {
    this.currentShip = ship;
    this.currentDirection = direction;
    this.usersGrid.addEventListener('mouseover', this.#addHighlight);
    this.usersGrid.addEventListener('mouseout', this.#removeHighlight);
  }

  /**
   * Disables hightlighting of tiles
   */
  static disableHighlight() {
    this.usersGrid.removeEventListener('mouseover', this.#addHighlight);
    this.usersGrid.removeEventListener('mouseout', this.#removeHighlight);
  }
}

/***/ }),

/***/ "./src/modules/GameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/GameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/modules/Ship.js");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils.js */ "./src/modules/Utils.js");



class GameBoard {
  constructor() {
    this.grid = Array.from(Array(10), () => {
      return new Array(10).fill().map(() => ({
        hasShip: null,
        isShot: false
      }))
    });

    this.fleet = {
      carrier: new _Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](5),
      battleship: new _Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](4),
      destroyer: new _Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](3),
      submarine: new _Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](3),
      patrol: new _Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](2),
    };
  }
  
  /**
   * Retrieves the ship
   * 
   * @param {string} shipName of the ship to retrieve
   * @returns {Ship} the Ship reference
   */
  getShip(shipName) {
    return this.fleet[shipName];
  }

  #isShipNearby(row, col) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (!_Utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isValidTile(row + i, col + j)) continue;
        if (this.grid[row + i][col + j].hasShip) return true;
      }
    }

    return false;
  }

  #isUnobstructed(row, col, ship, direction) {
    for (let i = 0; i < ship.length; i++) {
      if (direction === 'vertical') {
        if (this.#isShipNearby(row + i, col)) {
          return false;
        }
      } else {
        if (this.#isShipNearby(row, col + i)) {
          return false;
        }
      }
    }
    
    return true;
  }

  /**
   * Places the start of the ship at the provided tile (row, col).
   * 
   * @param {number} row of the tile to place the start of the ship
   * @param {number} col of the tile to place the start of the ship
   * @param {string} shipName of the ship to place
   * @param {string} direction 'vertical' or 'horizontal'
   * @returns {string} message indicating success or error
   */
  place(row, col, shipName, direction) {
    const response = {
      success: false,
      message: ''
    }
    
    const ship = this.getShip(shipName);

    if (!_Utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isValidTile(row, col)) {
      response.message = 'Invalid tile.';
    } else if (!_Utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isValidLocation(row, col, ship, direction)) {
      response.message = 'Ship does not fit at that location.';
    } else if (!this.#isUnobstructed(row, col, ship, direction)) {
      response.message = 'Placement is too close to another ship.';
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (direction === 'vertical') {
          this.grid[row + i][col].hasShip = ship;
        } else {
          this.grid[row][col + i].hasShip = ship;
        }
      }

      response.success = true;
      response.message = `Placed ${_Utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].capitalize(shipName)} at ${_Utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatCoordinates(row, col)}.`;
    }

    return response;
  }

  /**
   * Receives the attack on the board
   * 
   * @param {number} row of the attacked tile
   * @param {number} col of the attacked tile
   * @returns {string} message indicating success or error
   */
  receiveAttack(row, col) {
    const response = {
      success: false,
      message: ''
    }

    if (!_Utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isValidTile(row, col)) {
      response.message = 'Invalid tile.';
      return response;
    }
    
    const tile = this.grid[row][col];

    if (tile.isShot) {
      response.message = 'You have already shot this tile.';
    } else {
      tile.isShot = true;

      if (tile.hasShip) {
        tile.hasShip.hit();
        response.success = true;
        response.message = 'Hit!';
      } else {
        response.success = true;
        response.message = 'Miss!';
      }
    }

    return response;
  }

  /**
   * Checks if all ships on the board are sunk
   * 
   * @returns {boolean} true if all ships are sunk, else false
   */
  isAllSunk() {
    return Object.values(this.fleet).every((ship) => ship.isSunk());
  }
}

/***/ }),

/***/ "./src/modules/GameController.js":
/*!***************************************!*\
  !*** ./src/modules/GameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameController)
/* harmony export */ });
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ "./src/modules/Player.js");
/* harmony import */ var _Bot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bot.js */ "./src/modules/Bot.js");
/* harmony import */ var _Display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Display.js */ "./src/modules/Display.js");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils.js */ "./src/modules/Utils.js");
/* harmony import */ var _AudioPlayer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudioPlayer.js */ "./src/modules/AudioPlayer.js");






class GameController {
  constructor() {
    this.playerOne = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"]("User");
    this.playerTwo = new _Bot_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.currentPlayer = this.playerOne;
    this.opponent = this.playerTwo;
    this.winner = null;
    this.gameState = null;
  }

  /**
   * Starts the game
   */
  async start() {
    this.gameState = 'active';
    _Display_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderGrid();
    await this.playerTwo.placeFleet();
    _Display_js__WEBPACK_IMPORTED_MODULE_2__["default"].hideShips();
    await this.playerOne.placeFleet();
    this.#getNextMove();
  }

  #getNextMove() {
    _Display_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderMessage('Choose a tile to attack!');
    this.currentPlayer.selectTileTo('attack')
      .then((response) => this.playTurn(response.row, response.col));
  }

  #isGameOver() {
    return this.opponent.board.isAllSunk();
  }

  #setWinner() {
    this.winner = this.currentPlayer;
  }

  #endGame() {
    this.#setWinner();
    _Display_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderMessage(`Game over. ${this.winner.name} has prevailed!`);
  }

  #switchPlayer() {
    const temp = this.currentPlayer;
    this.currentPlayer = this.opponent;
    this.opponent = temp;
  }

  /**
   * Plays the turn with the provided move (row, col)
   * 
   * @param {number} row of selected tile
   * @param {number} col of selected tile
   * @returns {string|null} returns a string containing the error message if the 
   *                        move was invalid, otherwise advances to the next turn
   */
  async playTurn(row, col) {
    const result = this.opponent.board.receiveAttack(row, col);
    if (this.currentPlayer.name === 'Bot') this.currentPlayer.receiveFeedback(row, col, result);

    if (result.success) {
      _Display_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateTile(this.playerOne.board.grid[row][col], this.playerTwo.board.grid[row][col], row, col);
      _Display_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderMessage(`${this.currentPlayer.name} fired a shot at ${_Utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].formatCoordinates(row, col)}, it was a... ${result.message}`);
      
      if (result.message === 'Miss!') {
        this.#switchPlayer();
        _AudioPlayer_js__WEBPACK_IMPORTED_MODULE_4__["default"].play('miss');
      } else { 
        if (this.#isGameOver()) {
          this.#endGame();
          return;
        }
        _AudioPlayer_js__WEBPACK_IMPORTED_MODULE_4__["default"].play('hit');
      }
    } else {
      _Display_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderMessage(`${result.message} Please choose another tile.`);
    }

    await _Utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].delay(1000);
    this.#getNextMove();
  }
}

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _GameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard.js */ "./src/modules/GameBoard.js");
/* harmony import */ var _Display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display.js */ "./src/modules/Display.js");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils.js */ "./src/modules/Utils.js");
/* harmony import */ var _AudioPlayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AudioPlayer.js */ "./src/modules/AudioPlayer.js");





class Player {
  static ships = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrol'];

  constructor(name) {
    this.name = name;
    this.board = new _GameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  
  /**
   * Selects a tile
   * 
   * @returns a Promise that resolves to the selected tile
   */
  selectTileTo(action) {
    const grid = (action === 'place' ? 'users-grid' : 'opponents-grid');
    return new Promise((resolve) => {
      const response = {
        row: null,
        col: null,
      }
      
      if (action === 'place') {
        response.direction = _Display_js__WEBPACK_IMPORTED_MODULE_1__["default"].currentDirection;
        document.addEventListener('keydown', (e) => {
          if (e.key === 'r' || e.key === 'R') {
            response.direction = (response.direction === 'horizontal' ? 'vertical' : 'horizontal');
            _Display_js__WEBPACK_IMPORTED_MODULE_1__["default"].currentDirection = response.direction;
          }
        })
      }

      document.getElementById(grid).addEventListener('click', (e) => {
        response.row = Number(e.target.dataset.row);
        response.col = Number(e.target.dataset.col);
        resolve(response);
      }, { once: true });
    })
  }

  /**
   * Prompts the player to place their ships
   */
  async placeFleet() {
    for (const ship of Player.ships) {
      let result;
      _Display_js__WEBPACK_IMPORTED_MODULE_1__["default"].enableHighlight(this.board.getShip(ship), 'horizontal');
      _Display_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderMessage(`Please choose a location for your ${_Utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].capitalize(ship)}. Press 'r' to rotate.`);

      do {
        const response = await this.selectTileTo('place');
        const { row, col, direction } = response;
        result = this.board.place(row, col, ship, direction);

        if (!result.success) {
          _Display_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderMessage(result.message);
        }
      } while (!result.success)

      _Display_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderShips(this.board.grid);
      _AudioPlayer_js__WEBPACK_IMPORTED_MODULE_3__["default"].play('plop');
    }
    
    _Display_js__WEBPACK_IMPORTED_MODULE_1__["default"].disableHighlight(); 
  }

  /**
   * Randomly places ships on the board
   */
  placeRandom() {
    for (const ship of Player.ships) {
      let result;
      do {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);
        const direction = (Math.round(Math.random()) === 0 ? 'vertical' : 'horizontal');
        result = this.board.place(row, col, ship, direction);
      } while (!result.success)
    }
  }
}

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    if (length === undefined || length < 0 || length > 5) {
      throw new Error("Please provide a ship length between greater than 0 and less than 6.")
    }
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
  }

  /**
   * Hits the ship
   * 
   * @returns {null} if the ship is already sunken
   */
  hit() {
    if (this.isSunk()) {
      return;
    }
    
    this.hitCount += 1;
  }

  /**
   * Checks if the ship is sunk
   * 
   * @returns {boolean} true if the ship is sunk, else false
   */
  isSunk() {
    return this.hitCount === this.length;
  }
}

/***/ }),

/***/ "./src/modules/Utils.js":
/*!******************************!*\
  !*** ./src/modules/Utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utils)
/* harmony export */ });
class Utils {
  /**
   * Checks whether the tile is a valid tile (in bounds)
   * 
   * @param {number} row 
   * @param {number} col 
   * @returns true if valid, false if not
   */
  static isValidTile(row, col) {
    if (isNaN(row) || isNaN(col) || row < 0 || row > 9 || col < 0 || col > 9) {
      return false;
    }
    
    return true;
  }

  /**
   * Checks whether the tile is a valid location for a ship
   * 
   * @param {*} row 
   * @param {*} col 
   * @param {*} ship 
   * @param {*} direction 
   * @returns true if valid, false if not
   */
  static isValidLocation(row, col, ship, direction) {
    if (direction === 'vertical' && row + ship.length - 1 > 9
        || direction === 'horizontal' && col + ship.length - 1 > 9) {
      return false;              
    }

    return true;
  }

  /**
   * Formats the coordinates into Battleship format
   * 
   * @param {*} row 
   * @param {*} col 
   * @returns coordinates in Battleship format
   */
  static formatCoordinates(row, col) {
    return `${String.fromCharCode(row + 65)}${col + 1}`;
  }

  /**
   * Capitalizes the string
   * 
   * @param {string} string 
   * @returns capitalized string
   */
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * Delays execution
   * 
   * @param {number} ms 
   */
  static delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

/***/ }),

/***/ "./src/audio/hit.wav":
/*!***************************!*\
  !*** ./src/audio/hit.wav ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af2b2a25b389beea7dc4.wav";

/***/ }),

/***/ "./src/audio/miss.wav":
/*!****************************!*\
  !*** ./src/audio/miss.wav ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6df92d8c96ba9f38e73.wav";

/***/ }),

/***/ "./src/audio/plop.wav":
/*!****************************!*\
  !*** ./src/audio/plop.wav ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd315600a57976b7f95c.wav";

/***/ }),

/***/ "./src/fonts/Oswald.ttf":
/*!******************************!*\
  !*** ./src/fonts/Oswald.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cecd0da606d25b0905d.ttf";

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76a9d10caaa5cd88c4d1.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_GameController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/GameController.js */ "./src/modules/GameController.js");



const game = new _modules_GameController_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
game.start()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxjQUFjLDhCQUE4QixFQUFFLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNtQztBQUN4RDtBQUNBLGlCQUFpQixrRUFBYztBQUMvQixZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvQXVkaW9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0JvdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvRGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9HYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvUGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9TaGlwLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9VdGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvT3N3YWxkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IE9zd2FsZDtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIGZvbnQtZmFtaWx5OiBPc3dhbGQsIHNhbnMtc2VyaWY7XHJcbiAgLS1zb2Z0LXdoaXRlOiAjRjFGQUVFO1xyXG4gIC0tb3JhbmdlOiAjRkY5OTIzO1xyXG4gIC0tcmVkOiAjRjI1QzU0O1xyXG4gIC0tYmx1ZTogIzgwQkJERjtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDsgXHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1zb2Z0LXdoaXRlKTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiN0aXRsZSwgI3JvdW5kLW1lc3NhZ2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2dhbWUge1xyXG4gIGhlaWdodDogY2xhbXAoNTAwcHgsIDEwMCUsIDYwMHB4KTtcclxuICB3aWR0aDogbWluKDEwMDBweCwgMTAwJSk7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMjUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICBmbGV4OiAxIDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xyXG59XHJcblxyXG4jcm91bmQtbWVzc2FnZXtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuI2dyaWRzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gIGZsZXg6IDAgMSA0MDBweDtcclxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgZmxleDogMTtcclxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XHJcbiAgZ2FwOiAwLjI1cmVtO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi50aWxlIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNvZnQtd2hpdGUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xyXG59XHJcblxyXG4uc2hpcCwgLmhpZ2hsaWdodCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb3JhbmdlKTtcclxufVxyXG5cclxuLnNoaXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XHJcbn1cclxuXHJcbi5taXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxuLmhpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgI2dhbWUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHJlbTtcclxuICB9XHJcblxyXG4gICNoZWFkZXIge1xyXG4gICAgZmxleDogMDtcclxuICB9XHJcblxyXG4gICN0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICB9XHJcblxyXG4gICNncmlkcyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlEQUE4QztFQUM5QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsT0FBTztFQUNUOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLE9BQU87RUFDVDs7RUFFQTtJQUNFLE9BQU87RUFDVDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IE9zd2FsZDtcXHJcXG4gIHNyYzogdXJsKC4vZm9udHMvT3N3YWxkLnR0Zik7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBPc3dhbGQsIHNhbnMtc2VyaWY7XFxyXFxuICAtLXNvZnQtd2hpdGU6ICNGMUZBRUU7XFxyXFxuICAtLW9yYW5nZTogI0ZGOTkyMztcXHJcXG4gIC0tcmVkOiAjRjI1QzU0O1xcclxcbiAgLS1ibHVlOiAjODBCQkRGO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwOyBcXHJcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tc29mdC13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvYmFja2dyb3VuZC5qcGcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlLCAjcm91bmQtbWVzc2FnZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNnYW1lIHtcXHJcXG4gIGhlaWdodDogY2xhbXAoNTAwcHgsIDEwMCUsIDYwMHB4KTtcXHJcXG4gIHdpZHRoOiBtaW4oMTAwMHB4LCAxMDAlKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMjUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgZmxleDogMSAwIGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcm91bmQtbWVzc2FnZXtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNncmlkcyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiAwIDEgNDAwcHg7XFxyXFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXHJcXG4gIGdhcDogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50aWxlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zb2Z0LXdoaXRlKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCwgLmhpZ2hsaWdodCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAjZ2FtZSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNoZWFkZXIge1xcclxcbiAgICBmbGV4OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZ3JpZHMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZ3JpZC1jb250YWluZXIge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwbG9wU3JjIGZyb20gXCIuLi9hdWRpby9wbG9wLndhdlwiO1xyXG5pbXBvcnQgaGl0U3JjIGZyb20gJy4uL2F1ZGlvL2hpdC53YXYnXHJcbmltcG9ydCBtaXNzU3JjIGZyb20gJy4uL2F1ZGlvL21pc3Mud2F2J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9QbGF5ZXIge1xyXG4gIHN0YXRpYyBwbGF5KHR5cGUpIHtcclxuICAgIGxldCBhdWRpbztcclxuXHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAoJ3Bsb3AnKTpcclxuICAgICAgICBhdWRpbyA9IG5ldyBBdWRpbyhwbG9wU3JjKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAoJ2hpdCcpOlxyXG4gICAgICAgIGF1ZGlvID0gbmV3IEF1ZGlvKGhpdFNyYyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdtaXNzJyk6XHJcbiAgICAgICAgYXVkaW8gPSBuZXcgQXVkaW8obWlzc1NyYyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYXVkaW8gPSBuZXcgQXVkaW8ocGxvcFNyYyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgYXVkaW8ucGxheSgpO1xyXG4gIH1cclxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3QgZXh0ZW5kcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJCb3RcIik7XHJcbiAgICB0aGlzLm1vZGUgPSAnc2VhcmNoaW5nJztcclxuICAgIHRoaXMuYXR0YWNrUXVldWUgPSBbXTtcclxuICAgIHRoaXMuc2hpcEVuZHBvaW50cyA9IFtdO1xyXG4gICAgdGhpcy5zaGlwT3JpZW50YXRpb24gPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgI2dlbmVyYXRlUmFuZG9tRGlyZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID09PSAwID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJyk7XHJcbiAgfVxyXG5cclxuICAjZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcygpIHtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgcmV0dXJuIFt4LCB5XVxyXG4gIH1cclxuXHJcbiAgI2dlbmVyYXRlQ29vcmRpbmF0ZXMoKSB7XHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnc2VhcmNoaW5nJykge1xyXG4gICAgICByZXR1cm4gdGhpcy4jZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdmb3VuZCcgfHwgdGhpcy5tb2RlID09PSAndGFyZ2V0Jykge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRhY2tRdWV1ZS5wb3AoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNzZXRTaGlwT3JpZW50YXRpb24ocm93KSB7XHJcbiAgICBpZiAocm93ICE9IHRoaXMuc2hpcEVuZHBvaW50c1swXVswXSkge1xyXG4gICAgICB0aGlzLnNoaXBPcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNoaXBPcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICN1cGRhdGVTaGlwRW5kcG9pbnRzKHJvdywgY29sKSB7XHJcbiAgICAvLyBJbml0aWFsIGRpc2NvdmVyeSBvZiBzaGlwXHJcbiAgICBpZiAodGhpcy5zaGlwRW5kcG9pbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNoaXBFbmRwb2ludHMucHVzaChbcm93LCBjb2xdLCBbcm93LCBjb2xdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdWJzZXF1ZW50IGVuZHBvaW50IHVwZGF0ZXNcclxuICAgIGlmICh0aGlzLnNoaXBPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICBjb25zdCBzdGFydFJvdyA9IHRoaXMuc2hpcEVuZHBvaW50c1swXVswXTtcclxuICAgICAgXHJcbiAgICAgIGlmIChyb3cgPCBzdGFydFJvdykge1xyXG4gICAgICAgIHRoaXMuc2hpcEVuZHBvaW50c1swXSA9IFtyb3csIGNvbF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zaGlwRW5kcG9pbnRzWzFdID0gW3JvdywgY29sXTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgc3RhcnRDb2wgPSB0aGlzLnNoaXBFbmRwb2ludHNbMF1bMV07XHJcblxyXG4gICAgICBpZiAoY29sIDwgc3RhcnRDb2wpIHtcclxuICAgICAgICB0aGlzLnNoaXBFbmRwb2ludHNbMF0gPSBbcm93LCBjb2xdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2hpcEVuZHBvaW50c1sxXSA9IFtyb3csIGNvbF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICN0YXJnZXROZXh0RW5kcG9pbnQocm93LCBjb2wpIHtcclxuICAgIGlmICh0aGlzLnNoaXBPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICBjb25zdCBzdGFydFJvdyA9IHRoaXMuc2hpcEVuZHBvaW50c1swXVswXTtcclxuXHJcbiAgICAgIGlmIChyb3cgPT09IHN0YXJ0Um93KSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tRdWV1ZS5wdXNoKFtyb3cgLSAxLCBjb2xdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmF0dGFja1F1ZXVlLnB1c2goW3JvdyArIDEgLCBjb2xdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgc3RhcnRDb2wgPSB0aGlzLnNoaXBFbmRwb2ludHNbMF1bMV07XHJcblxyXG4gICAgICBpZiAoY29sID09PSBzdGFydENvbCkgeyBcclxuICAgICAgICB0aGlzLmF0dGFja1F1ZXVlLnB1c2goW3JvdywgY29sIC0gMV0pO1xyXG4gICAgICB9IGVsc2UgeyBcclxuICAgICAgICB0aGlzLmF0dGFja1F1ZXVlLnB1c2goW3JvdywgY29sICsgMV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjdGFyZ2V0RW5kcG9pbnRzKHJvdywgY29sKSB7XHJcbiAgICBpZiAodGhpcy5zaGlwT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgY29uc3Qgc3RhcnRSb3cgPSB0aGlzLnNoaXBFbmRwb2ludHNbMF1bMF07XHJcbiAgICAgIGNvbnN0IGVuZFJvdyA9IHRoaXMuc2hpcEVuZHBvaW50c1sxXVswXTtcclxuICAgICAgdGhpcy5hdHRhY2tRdWV1ZS5wdXNoKFtzdGFydFJvdyAtIDEsIGNvbF0sIFtlbmRSb3cgKyAxLCBjb2xdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0Q29sID0gdGhpcy5zaGlwRW5kcG9pbnRzWzBdWzFdO1xyXG4gICAgICBjb25zdCBlbmRDb2wgPSB0aGlzLnNoaXBFbmRwb2ludHNbMV1bMV07XHJcbiAgICAgIHRoaXMuYXR0YWNrUXVldWUucHVzaChbcm93LCBzdGFydENvbCAtIDFdLCBbcm93LCBlbmRDb2wgKyAxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIHdoaWNoIG1vZGUgd2UgYXJlIGluIGFuZCB3aGF0IHRpbGVzIHRoZSBCb3Qgc2hvdWxkIHRhcmdldCBuZXh0XHJcbiAgICogXHJcbiAgICogQHBhcmFtIHt9IHJvdyBcclxuICAgKiBAcGFyYW0geyp9IGNvbCBcclxuICAgKiBAcGFyYW0geyp9IHJlc3VsdCBcclxuICAgKi9cclxuICByZWNlaXZlRmVlZGJhY2socm93LCBjb2wsIHJlc3VsdCkge1xyXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ3NlYXJjaGluZycgJiYgcmVzdWx0Lm1lc3NhZ2UgPT09ICdIaXQhJykge1xyXG4gICAgICB0aGlzLm1vZGUgPSAnZm91bmQnO1xyXG4gICAgICB0aGlzLmF0dGFja1F1ZXVlLnB1c2goW3JvdyArIDEsIGNvbF0sIFtyb3csIGNvbCArIDFdLCBbcm93IC0gMSwgY29sXSwgW3JvdywgY29sIC0gMV0pO1xyXG4gICAgICB0aGlzLiN1cGRhdGVTaGlwRW5kcG9pbnRzKHJvdywgY29sKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnZm91bmQnICYmIHJlc3VsdC5tZXNzYWdlID09PSAnSGl0IScpIHtcclxuICAgICAgdGhpcy5tb2RlID0gJ3RhcmdldCc7XHJcbiAgICAgIHRoaXMuYXR0YWNrUXVldWUgPSBbXTtcclxuICAgICAgdGhpcy4jc2V0U2hpcE9yaWVudGF0aW9uKHJvdyk7XHJcbiAgICAgIHRoaXMuI3VwZGF0ZVNoaXBFbmRwb2ludHMocm93LCBjb2wpO1xyXG4gICAgICB0aGlzLiN0YXJnZXRFbmRwb2ludHMocm93LCBjb2wpXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3RhcmdldCcpIHtcclxuICAgICAgaWYgKHJlc3VsdC5tZXNzYWdlID09PSAnSGl0IScpIHtcclxuICAgICAgICB0aGlzLiN1cGRhdGVTaGlwRW5kcG9pbnRzKHJvdywgY29sKTtcclxuICAgICAgICB0aGlzLiN0YXJnZXROZXh0RW5kcG9pbnQocm93LCBjb2wpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYXR0YWNrUXVldWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMubW9kZSA9ICdzZWFyY2hpbmcnXHJcbiAgICAgIHRoaXMuc2hpcEVuZHBvaW50cyA9IFtdO1xyXG4gICAgICB0aGlzLnNoaXBPcmllbnRhdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZWxlY3RzIGEgdGlsZVxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBzZWxlY3RlZCB0aWxlXHJcbiAgICovXHJcbiAgc2VsZWN0VGlsZVRvKGFjdGlvbikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xyXG4gICAgICAgIHJvdzogbnVsbCxcclxuICAgICAgICBjb2w6IG51bGwsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCByb3csIGNvbDtcclxuXHJcbiAgICAgIGlmIChhY3Rpb24gPT09ICdwbGFjZScpIHtcclxuICAgICAgICByZXNwb25zZS5kaXJlY3Rpb24gPSB0aGlzLiNnZW5lcmF0ZVJhbmRvbURpcmVjdGlvbigpO1xyXG4gICAgICAgIChbcm93LCBjb2xdID0gdGhpcy4jZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcygpKTtcclxuICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdhdHRhY2snKSB7XHJcbiAgICAgICAgKFtyb3csIGNvbF0gPSB0aGlzLiNnZW5lcmF0ZUNvb3JkaW5hdGVzKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXNwb25zZS5yb3cgPSByb3c7XHJcbiAgICAgIHJlc3BvbnNlLmNvbCA9IGNvbDtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICB9KVxyXG4gIH1cclxufSIsImltcG9ydCBVdGlscyBmcm9tICcuL1V0aWxzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXkge1xyXG4gIHN0YXRpYyB1c2Vyc0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcnMtZ3JpZCcpO1xyXG4gIHN0YXRpYyBvcHBvbmVudHNHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wcG9uZW50cy1ncmlkJyk7XHJcbiAgc3RhdGljIHJvdW5kTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3VuZC1tZXNzYWdlJyk7XHJcbiAgc3RhdGljIGN1cnJlbnRTaGlwID0gbnVsbDtcclxuICBzdGF0aWMgY3VycmVudERpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcclxuXHJcbiAgLyoqXHJcbiAgICogUmVuZGVycyB0d28gMTB4MTAgZ3JpZHMgZm9yIHRoZSBnYW1lXHJcbiAgICovXHJcbiAgc3RhdGljIHJlbmRlckdyaWQoKSB7XHJcbiAgICBbdGhpcy51c2Vyc0dyaWQsIHRoaXMub3Bwb25lbnRzR3JpZF0uZm9yRWFjaCgoZ3JpZCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gLTE7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IC0xOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICBpZiAoaSA9PT0gLTEgJiYgaiA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBqICsgMTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaSA+PSAwICYmIGogPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyA2NSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGkgPiAtMSAmJiBqID4gLTEpIHtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcclxuICAgICAgICAgICAgZGl2LmRhdGFzZXQucm93ID0gaTtcclxuICAgICAgICAgICAgZGl2LmRhdGFzZXQuY29sID0gajtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV2ZWFscyBhbGwgc2hpcHMgb24gdGhlIGJvYXJkXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtHYW1lQm9hcmR9IGJvYXJkIFxyXG4gICAqL1xyXG4gIHN0YXRpYyByZW5kZXJTaGlwcyhib2FyZCkge1xyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDw9IDk7IHJvdysrKSB7XHJcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8PSA5OyBjb2wrKykge1xyXG4gICAgICAgIGlmIChib2FyZFtyb3ddW2NvbF0uaGFzU2hpcCkge1xyXG4gICAgICAgICAgY29uc3QgdGlsZSA9IHRoaXMudXNlcnNHcmlkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWApO1xyXG4gICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIaWRlcyBhbGwgc2hpcHMgb24gdGhlIGJvYXJkXHJcbiAgICovXHJcbiAgc3RhdGljIGhpZGVTaGlwcygpIHtcclxuICAgIGNvbnN0IHRpbGVzID0gdGhpcy51c2Vyc0dyaWQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcclxuICAgIHRpbGVzLmZvckVhY2godGlsZSA9PiB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5cyB0aGUgcm91bmQgbWVzc2FnZVxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgXHJcbiAgICovXHJcbiAgc3RhdGljIHJlbmRlck1lc3NhZ2UobXNnKSB7XHJcbiAgICB0aGlzLnJvdW5kTWVzc2FnZS50ZXh0Q29udGVudCA9IG1zZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIHZpc3VhbCBzdGF0ZSBvZiB0aGUgdGlsZSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgc2hvdCB3YXMgYSBoaXRcclxuICAgKiBvciBhIG1pc3NcclxuICAgKi9cclxuICBzdGF0aWMgdXBkYXRlVGlsZSh5b3VyVGlsZVN0YXRlLCBvcHBvbmVudFRpbGVTdGF0ZSwgcm93LCBjb2wpIHtcclxuICAgIGNvbnN0IG15VGlsZSA9IHRoaXMudXNlcnNHcmlkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWApO1xyXG4gICAgaWYgKHlvdXJUaWxlU3RhdGUuaXNTaG90KSB7XHJcbiAgICAgIGlmICh5b3VyVGlsZVN0YXRlLmhhc1NoaXApIHtcclxuICAgICAgICBteVRpbGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXlUaWxlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wcG9uZW50VGlsZSA9IHRoaXMub3Bwb25lbnRzR3JpZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gKTtcclxuICAgIGlmIChvcHBvbmVudFRpbGVTdGF0ZS5pc1Nob3QpIHtcclxuICAgICAgaWYgKG9wcG9uZW50VGlsZVN0YXRlLmhhc1NoaXApIHtcclxuICAgICAgICBvcHBvbmVudFRpbGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3Bwb25lbnRUaWxlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljICNhZGRIaWdobGlnaHQoZSkge1xyXG4gICAgY29uc3Qgcm93ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQucm93KTtcclxuICAgIGNvbnN0IGNvbCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmNvbCk7XHJcbiAgICBcclxuICAgIGlmIChVdGlscy5pc1ZhbGlkVGlsZShyb3csIGNvbCkgJiYgVXRpbHMuaXNWYWxpZExvY2F0aW9uKHJvdywgY29sLCBEaXNwbGF5LmN1cnJlbnRTaGlwLCBEaXNwbGF5LmN1cnJlbnREaXJlY3Rpb24pKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRGlzcGxheS5jdXJyZW50U2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCB0aWxlO1xyXG4gICAgICAgIGlmIChEaXNwbGF5LmN1cnJlbnREaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgIHRpbGUgPSBEaXNwbGF5LnVzZXJzR3JpZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3JvdyArIGl9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRpbGUgPSBEaXNwbGF5LnVzZXJzR3JpZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbCArIGl9XCJdYCk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyAjcmVtb3ZlSGlnaGxpZ2h0KCkge1xyXG4gICAgY29uc3QgaGlnaGxpZ2h0ZWRUaWxlcyA9IERpc3BsYXkudXNlcnNHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWdobGlnaHQnKTtcclxuICAgIGhpZ2hsaWdodGVkVGlsZXMuZm9yRWFjaCh0aWxlID0+IHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0JykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlcyBoaWdobGlnaHRpbmcgb2YgdGlsZXMgdG8gaW5kaWNhdGUgc2hpcCBwbGFjZW1lbnRcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge1NoaXB9IHNoaXAgXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiBcclxuICAgKi9cclxuICBzdGF0aWMgZW5hYmxlSGlnaGxpZ2h0KHNoaXAsIGRpcmVjdGlvbikge1xyXG4gICAgdGhpcy5jdXJyZW50U2hpcCA9IHNoaXA7XHJcbiAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB0aGlzLnVzZXJzR3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLiNhZGRIaWdobGlnaHQpO1xyXG4gICAgdGhpcy51c2Vyc0dyaWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLiNyZW1vdmVIaWdobGlnaHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzYWJsZXMgaGlnaHRsaWdodGluZyBvZiB0aWxlc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBkaXNhYmxlSGlnaGxpZ2h0KCkge1xyXG4gICAgdGhpcy51c2Vyc0dyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy4jYWRkSGlnaGxpZ2h0KTtcclxuICAgIHRoaXMudXNlcnNHcmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy4jcmVtb3ZlSGlnaGxpZ2h0KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwLmpzXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlscy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZ3JpZCA9IEFycmF5LmZyb20oQXJyYXkoMTApLCAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgQXJyYXkoMTApLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICAgICAgICBoYXNTaGlwOiBudWxsLFxyXG4gICAgICAgIGlzU2hvdDogZmFsc2VcclxuICAgICAgfSkpXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmZsZWV0ID0ge1xyXG4gICAgICBjYXJyaWVyOiBuZXcgU2hpcCg1KSxcclxuICAgICAgYmF0dGxlc2hpcDogbmV3IFNoaXAoNCksXHJcbiAgICAgIGRlc3Ryb3llcjogbmV3IFNoaXAoMyksXHJcbiAgICAgIHN1Ym1hcmluZTogbmV3IFNoaXAoMyksXHJcbiAgICAgIHBhdHJvbDogbmV3IFNoaXAoMiksXHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBSZXRyaWV2ZXMgdGhlIHNoaXBcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2hpcE5hbWUgb2YgdGhlIHNoaXAgdG8gcmV0cmlldmVcclxuICAgKiBAcmV0dXJucyB7U2hpcH0gdGhlIFNoaXAgcmVmZXJlbmNlXHJcbiAgICovXHJcbiAgZ2V0U2hpcChzaGlwTmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmxlZXRbc2hpcE5hbWVdO1xyXG4gIH1cclxuXHJcbiAgI2lzU2hpcE5lYXJieShyb3csIGNvbCkge1xyXG4gICAgZm9yIChsZXQgaSA9IC0xOyBpIDw9IDE7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPD0gMTsgaisrKSB7XHJcbiAgICAgICAgaWYgKCFVdGlscy5pc1ZhbGlkVGlsZShyb3cgKyBpLCBjb2wgKyBqKSkgY29udGludWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFtyb3cgKyBpXVtjb2wgKyBqXS5oYXNTaGlwKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gICNpc1Vub2JzdHJ1Y3RlZChyb3csIGNvbCwgc2hpcCwgZGlyZWN0aW9uKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgIGlmICh0aGlzLiNpc1NoaXBOZWFyYnkocm93ICsgaSwgY29sKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy4jaXNTaGlwTmVhcmJ5KHJvdywgY29sICsgaSkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQbGFjZXMgdGhlIHN0YXJ0IG9mIHRoZSBzaGlwIGF0IHRoZSBwcm92aWRlZCB0aWxlIChyb3csIGNvbCkuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyBvZiB0aGUgdGlsZSB0byBwbGFjZSB0aGUgc3RhcnQgb2YgdGhlIHNoaXBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sIG9mIHRoZSB0aWxlIHRvIHBsYWNlIHRoZSBzdGFydCBvZiB0aGUgc2hpcFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzaGlwTmFtZSBvZiB0aGUgc2hpcCB0byBwbGFjZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJlY3Rpb24gJ3ZlcnRpY2FsJyBvciAnaG9yaXpvbnRhbCdcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBtZXNzYWdlIGluZGljYXRpbmcgc3VjY2VzcyBvciBlcnJvclxyXG4gICAqL1xyXG4gIHBsYWNlKHJvdywgY29sLCBzaGlwTmFtZSwgZGlyZWN0aW9uKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmdldFNoaXAoc2hpcE5hbWUpO1xyXG5cclxuICAgIGlmICghVXRpbHMuaXNWYWxpZFRpbGUocm93LCBjb2wpKSB7XHJcbiAgICAgIHJlc3BvbnNlLm1lc3NhZ2UgPSAnSW52YWxpZCB0aWxlLic7XHJcbiAgICB9IGVsc2UgaWYgKCFVdGlscy5pc1ZhbGlkTG9jYXRpb24ocm93LCBjb2wsIHNoaXAsIGRpcmVjdGlvbikpIHtcclxuICAgICAgcmVzcG9uc2UubWVzc2FnZSA9ICdTaGlwIGRvZXMgbm90IGZpdCBhdCB0aGF0IGxvY2F0aW9uLic7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLiNpc1Vub2JzdHJ1Y3RlZChyb3csIGNvbCwgc2hpcCwgZGlyZWN0aW9uKSkge1xyXG4gICAgICByZXNwb25zZS5tZXNzYWdlID0gJ1BsYWNlbWVudCBpcyB0b28gY2xvc2UgdG8gYW5vdGhlciBzaGlwLic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICB0aGlzLmdyaWRbcm93ICsgaV1bY29sXS5oYXNTaGlwID0gc2hpcDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5ncmlkW3Jvd11bY29sICsgaV0uaGFzU2hpcCA9IHNoaXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXNwb25zZS5zdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgcmVzcG9uc2UubWVzc2FnZSA9IGBQbGFjZWQgJHtVdGlscy5jYXBpdGFsaXplKHNoaXBOYW1lKX0gYXQgJHtVdGlscy5mb3JtYXRDb29yZGluYXRlcyhyb3csIGNvbCl9LmA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVjZWl2ZXMgdGhlIGF0dGFjayBvbiB0aGUgYm9hcmRcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IG9mIHRoZSBhdHRhY2tlZCB0aWxlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCBvZiB0aGUgYXR0YWNrZWQgdGlsZVxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IG1lc3NhZ2UgaW5kaWNhdGluZyBzdWNjZXNzIG9yIGVycm9yXHJcbiAgICovXHJcbiAgcmVjZWl2ZUF0dGFjayhyb3csIGNvbCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghVXRpbHMuaXNWYWxpZFRpbGUocm93LCBjb2wpKSB7XHJcbiAgICAgIHJlc3BvbnNlLm1lc3NhZ2UgPSAnSW52YWxpZCB0aWxlLic7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgdGlsZSA9IHRoaXMuZ3JpZFtyb3ddW2NvbF07XHJcblxyXG4gICAgaWYgKHRpbGUuaXNTaG90KSB7XHJcbiAgICAgIHJlc3BvbnNlLm1lc3NhZ2UgPSAnWW91IGhhdmUgYWxyZWFkeSBzaG90IHRoaXMgdGlsZS4nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGlsZS5pc1Nob3QgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKHRpbGUuaGFzU2hpcCkge1xyXG4gICAgICAgIHRpbGUuaGFzU2hpcC5oaXQoKTtcclxuICAgICAgICByZXNwb25zZS5zdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICByZXNwb25zZS5tZXNzYWdlID0gJ0hpdCEnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3BvbnNlLnN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgIHJlc3BvbnNlLm1lc3NhZ2UgPSAnTWlzcyEnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFsbCBzaGlwcyBvbiB0aGUgYm9hcmQgYXJlIHN1bmtcclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBhbGwgc2hpcHMgYXJlIHN1bmssIGVsc2UgZmFsc2VcclxuICAgKi9cclxuICBpc0FsbFN1bmsoKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmZsZWV0KS5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcydcclxuaW1wb3J0IEJvdCBmcm9tICcuL0JvdC5qcyc7XHJcbmltcG9ydCBEaXNwbGF5IGZyb20gJy4vRGlzcGxheS5qcyc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuL1V0aWxzLmpzJztcclxuaW1wb3J0IEF1ZGlvUGxheWVyIGZyb20gJy4vQXVkaW9QbGF5ZXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wbGF5ZXJPbmUgPSBuZXcgUGxheWVyKFwiVXNlclwiKTtcclxuICAgIHRoaXMucGxheWVyVHdvID0gbmV3IEJvdCgpO1xyXG4gICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJPbmU7XHJcbiAgICB0aGlzLm9wcG9uZW50ID0gdGhpcy5wbGF5ZXJUd287XHJcbiAgICB0aGlzLndpbm5lciA9IG51bGw7XHJcbiAgICB0aGlzLmdhbWVTdGF0ZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgdGhlIGdhbWVcclxuICAgKi9cclxuICBhc3luYyBzdGFydCgpIHtcclxuICAgIHRoaXMuZ2FtZVN0YXRlID0gJ2FjdGl2ZSc7XHJcbiAgICBEaXNwbGF5LnJlbmRlckdyaWQoKTtcclxuICAgIGF3YWl0IHRoaXMucGxheWVyVHdvLnBsYWNlRmxlZXQoKTtcclxuICAgIERpc3BsYXkuaGlkZVNoaXBzKCk7XHJcbiAgICBhd2FpdCB0aGlzLnBsYXllck9uZS5wbGFjZUZsZWV0KCk7XHJcbiAgICB0aGlzLiNnZXROZXh0TW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgI2dldE5leHRNb3ZlKCkge1xyXG4gICAgRGlzcGxheS5yZW5kZXJNZXNzYWdlKCdDaG9vc2UgYSB0aWxlIHRvIGF0dGFjayEnKTtcclxuICAgIHRoaXMuY3VycmVudFBsYXllci5zZWxlY3RUaWxlVG8oJ2F0dGFjaycpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gdGhpcy5wbGF5VHVybihyZXNwb25zZS5yb3csIHJlc3BvbnNlLmNvbCkpO1xyXG4gIH1cclxuXHJcbiAgI2lzR2FtZU92ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHBvbmVudC5ib2FyZC5pc0FsbFN1bmsoKTtcclxuICB9XHJcblxyXG4gICNzZXRXaW5uZXIoKSB7XHJcbiAgICB0aGlzLndpbm5lciA9IHRoaXMuY3VycmVudFBsYXllcjtcclxuICB9XHJcblxyXG4gICNlbmRHYW1lKCkge1xyXG4gICAgdGhpcy4jc2V0V2lubmVyKCk7XHJcbiAgICBEaXNwbGF5LnJlbmRlck1lc3NhZ2UoYEdhbWUgb3Zlci4gJHt0aGlzLndpbm5lci5uYW1lfSBoYXMgcHJldmFpbGVkIWApO1xyXG4gIH1cclxuXHJcbiAgI3N3aXRjaFBsYXllcigpIHtcclxuICAgIGNvbnN0IHRlbXAgPSB0aGlzLmN1cnJlbnRQbGF5ZXI7XHJcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLm9wcG9uZW50O1xyXG4gICAgdGhpcy5vcHBvbmVudCA9IHRlbXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQbGF5cyB0aGUgdHVybiB3aXRoIHRoZSBwcm92aWRlZCBtb3ZlIChyb3csIGNvbClcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IG9mIHNlbGVjdGVkIHRpbGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sIG9mIHNlbGVjdGVkIHRpbGVcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IHJldHVybnMgYSBzdHJpbmcgY29udGFpbmluZyB0aGUgZXJyb3IgbWVzc2FnZSBpZiB0aGUgXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICBtb3ZlIHdhcyBpbnZhbGlkLCBvdGhlcndpc2UgYWR2YW5jZXMgdG8gdGhlIG5leHQgdHVyblxyXG4gICAqL1xyXG4gIGFzeW5jIHBsYXlUdXJuKHJvdywgY29sKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLm9wcG9uZW50LmJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFBsYXllci5uYW1lID09PSAnQm90JykgdGhpcy5jdXJyZW50UGxheWVyLnJlY2VpdmVGZWVkYmFjayhyb3csIGNvbCwgcmVzdWx0KTtcclxuXHJcbiAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgRGlzcGxheS51cGRhdGVUaWxlKHRoaXMucGxheWVyT25lLmJvYXJkLmdyaWRbcm93XVtjb2xdLCB0aGlzLnBsYXllclR3by5ib2FyZC5ncmlkW3Jvd11bY29sXSwgcm93LCBjb2wpO1xyXG4gICAgICBEaXNwbGF5LnJlbmRlck1lc3NhZ2UoYCR7dGhpcy5jdXJyZW50UGxheWVyLm5hbWV9IGZpcmVkIGEgc2hvdCBhdCAke1V0aWxzLmZvcm1hdENvb3JkaW5hdGVzKHJvdywgY29sKX0sIGl0IHdhcyBhLi4uICR7cmVzdWx0Lm1lc3NhZ2V9YCk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAocmVzdWx0Lm1lc3NhZ2UgPT09ICdNaXNzIScpIHtcclxuICAgICAgICB0aGlzLiNzd2l0Y2hQbGF5ZXIoKTtcclxuICAgICAgICBBdWRpb1BsYXllci5wbGF5KCdtaXNzJyk7XHJcbiAgICAgIH0gZWxzZSB7IFxyXG4gICAgICAgIGlmICh0aGlzLiNpc0dhbWVPdmVyKCkpIHtcclxuICAgICAgICAgIHRoaXMuI2VuZEdhbWUoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQXVkaW9QbGF5ZXIucGxheSgnaGl0Jyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIERpc3BsYXkucmVuZGVyTWVzc2FnZShgJHtyZXN1bHQubWVzc2FnZX0gUGxlYXNlIGNob29zZSBhbm90aGVyIHRpbGUuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgVXRpbHMuZGVsYXkoMTAwMCk7XHJcbiAgICB0aGlzLiNnZXROZXh0TW92ZSgpO1xyXG4gIH1cclxufSIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vR2FtZUJvYXJkLmpzXCI7XHJcbmltcG9ydCBEaXNwbGF5IGZyb20gXCIuL0Rpc3BsYXkuanNcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzLmpzXCI7XHJcbmltcG9ydCBBdWRpb1BsYXllciBmcm9tIFwiLi9BdWRpb1BsYXllci5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuICBzdGF0aWMgc2hpcHMgPSBbJ2NhcnJpZXInLCAnYmF0dGxlc2hpcCcsICdkZXN0cm95ZXInLCAnc3VibWFyaW5lJywgJ3BhdHJvbCddO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0cyBhIHRpbGVcclxuICAgKiBcclxuICAgKiBAcmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgc2VsZWN0ZWQgdGlsZVxyXG4gICAqL1xyXG4gIHNlbGVjdFRpbGVUbyhhY3Rpb24pIHtcclxuICAgIGNvbnN0IGdyaWQgPSAoYWN0aW9uID09PSAncGxhY2UnID8gJ3VzZXJzLWdyaWQnIDogJ29wcG9uZW50cy1ncmlkJyk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XHJcbiAgICAgICAgcm93OiBudWxsLFxyXG4gICAgICAgIGNvbDogbnVsbCxcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGFjdGlvbiA9PT0gJ3BsYWNlJykge1xyXG4gICAgICAgIHJlc3BvbnNlLmRpcmVjdGlvbiA9IERpc3BsYXkuY3VycmVudERpcmVjdGlvbjtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgICAgIGlmIChlLmtleSA9PT0gJ3InIHx8IGUua2V5ID09PSAnUicpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuZGlyZWN0aW9uID0gKHJlc3BvbnNlLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgICAgIERpc3BsYXkuY3VycmVudERpcmVjdGlvbiA9IHJlc3BvbnNlLmRpcmVjdGlvbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChncmlkKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgcmVzcG9uc2Uucm93ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQucm93KTtcclxuICAgICAgICByZXNwb25zZS5jb2wgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5jb2wpO1xyXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJvbXB0cyB0aGUgcGxheWVyIHRvIHBsYWNlIHRoZWlyIHNoaXBzXHJcbiAgICovXHJcbiAgYXN5bmMgcGxhY2VGbGVldCgpIHtcclxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBQbGF5ZXIuc2hpcHMpIHtcclxuICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgRGlzcGxheS5lbmFibGVIaWdobGlnaHQodGhpcy5ib2FyZC5nZXRTaGlwKHNoaXApLCAnaG9yaXpvbnRhbCcpO1xyXG4gICAgICBEaXNwbGF5LnJlbmRlck1lc3NhZ2UoYFBsZWFzZSBjaG9vc2UgYSBsb2NhdGlvbiBmb3IgeW91ciAke1V0aWxzLmNhcGl0YWxpemUoc2hpcCl9LiBQcmVzcyAncicgdG8gcm90YXRlLmApO1xyXG5cclxuICAgICAgZG8ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZWxlY3RUaWxlVG8oJ3BsYWNlJyk7XHJcbiAgICAgICAgY29uc3QgeyByb3csIGNvbCwgZGlyZWN0aW9uIH0gPSByZXNwb25zZTtcclxuICAgICAgICByZXN1bHQgPSB0aGlzLmJvYXJkLnBsYWNlKHJvdywgY29sLCBzaGlwLCBkaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBEaXNwbGF5LnJlbmRlck1lc3NhZ2UocmVzdWx0Lm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSB3aGlsZSAoIXJlc3VsdC5zdWNjZXNzKVxyXG5cclxuICAgICAgRGlzcGxheS5yZW5kZXJTaGlwcyh0aGlzLmJvYXJkLmdyaWQpO1xyXG4gICAgICBBdWRpb1BsYXllci5wbGF5KCdwbG9wJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIERpc3BsYXkuZGlzYWJsZUhpZ2hsaWdodCgpOyBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJhbmRvbWx5IHBsYWNlcyBzaGlwcyBvbiB0aGUgYm9hcmRcclxuICAgKi9cclxuICBwbGFjZVJhbmRvbSgpIHtcclxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBQbGF5ZXIuc2hpcHMpIHtcclxuICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgZG8ge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkgPT09IDAgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnKTtcclxuICAgICAgICByZXN1bHQgPSB0aGlzLmJvYXJkLnBsYWNlKHJvdywgY29sLCBzaGlwLCBkaXJlY3Rpb24pO1xyXG4gICAgICB9IHdoaWxlICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICB9XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XHJcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XHJcbiAgICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoIDwgMCB8fCBsZW5ndGggPiA1KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIGEgc2hpcCBsZW5ndGggYmV0d2VlbiBncmVhdGVyIHRoYW4gMCBhbmQgbGVzcyB0aGFuIDYuXCIpXHJcbiAgICB9XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIHRoaXMuaGl0Q291bnQgPSAwO1xyXG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIaXRzIHRoZSBzaGlwXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge251bGx9IGlmIHRoZSBzaGlwIGlzIGFscmVhZHkgc3Vua2VuXHJcbiAgICovXHJcbiAgaGl0KCkge1xyXG4gICAgaWYgKHRoaXMuaXNTdW5rKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmhpdENvdW50ICs9IDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIHNoaXAgaXMgc3Vua1xyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBzaGlwIGlzIHN1bmssIGVsc2UgZmFsc2VcclxuICAgKi9cclxuICBpc1N1bmsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oaXRDb3VudCA9PT0gdGhpcy5sZW5ndGg7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSB0aWxlIGlzIGEgdmFsaWQgdGlsZSAoaW4gYm91bmRzKVxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCBcclxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHZhbGlkLCBmYWxzZSBpZiBub3RcclxuICAgKi9cclxuICBzdGF0aWMgaXNWYWxpZFRpbGUocm93LCBjb2wpIHtcclxuICAgIGlmIChpc05hTihyb3cpIHx8IGlzTmFOKGNvbCkgfHwgcm93IDwgMCB8fCByb3cgPiA5IHx8IGNvbCA8IDAgfHwgY29sID4gOSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHRpbGUgaXMgYSB2YWxpZCBsb2NhdGlvbiBmb3IgYSBzaGlwXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHsqfSByb3cgXHJcbiAgICogQHBhcmFtIHsqfSBjb2wgXHJcbiAgICogQHBhcmFtIHsqfSBzaGlwIFxyXG4gICAqIEBwYXJhbSB7Kn0gZGlyZWN0aW9uIFxyXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdmFsaWQsIGZhbHNlIGlmIG5vdFxyXG4gICAqL1xyXG4gIHN0YXRpYyBpc1ZhbGlkTG9jYXRpb24ocm93LCBjb2wsIHNoaXAsIGRpcmVjdGlvbikge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiByb3cgKyBzaGlwLmxlbmd0aCAtIDEgPiA5XHJcbiAgICAgICAgfHwgZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgY29sICsgc2hpcC5sZW5ndGggLSAxID4gOSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7ICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcm1hdHMgdGhlIGNvb3JkaW5hdGVzIGludG8gQmF0dGxlc2hpcCBmb3JtYXRcclxuICAgKiBcclxuICAgKiBAcGFyYW0geyp9IHJvdyBcclxuICAgKiBAcGFyYW0geyp9IGNvbCBcclxuICAgKiBAcmV0dXJucyBjb29yZGluYXRlcyBpbiBCYXR0bGVzaGlwIGZvcm1hdFxyXG4gICAqL1xyXG4gIHN0YXRpYyBmb3JtYXRDb29yZGluYXRlcyhyb3csIGNvbCkge1xyXG4gICAgcmV0dXJuIGAke1N0cmluZy5mcm9tQ2hhckNvZGUocm93ICsgNjUpfSR7Y29sICsgMX1gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FwaXRhbGl6ZXMgdGhlIHN0cmluZ1xyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgXHJcbiAgICogQHJldHVybnMgY2FwaXRhbGl6ZWQgc3RyaW5nXHJcbiAgICovXHJcbiAgc3RhdGljIGNhcGl0YWxpemUoc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsYXlzIGV4ZWN1dGlvblxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtcyBcclxuICAgKi9cclxuICBzdGF0aWMgZGVsYXkobXMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvR2FtZUNvbnRyb2xsZXIuanMnXHJcblxyXG5jb25zdCBnYW1lID0gbmV3IEdhbWVDb250cm9sbGVyKCk7XHJcbmdhbWUuc3RhcnQoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==