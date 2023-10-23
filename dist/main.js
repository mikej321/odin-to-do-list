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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Default Styling */

*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
}

.content {
    display: flex;
    justify-content: center;
    
}

main {
    position: relative;
    display: grid;
    width: 100%;
    max-width: 375px;
    border-radius: 8px;
    grid-template-rows: 4rem 1fr;
    grid-template-areas: "nav"
                         "content"
                         "panes";
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);
}

.navbar {
    grid-area: nav;
    display: flex;
    justify-content: space-between;
    padding-inline: 1rem;
    align-items: center;
    background: gray;
}

.navbar h2 {
    font-size: 1.8rem;
}

.icons {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 15rem;
    justify-content: space-around;
}

i {
    cursor: pointer;
}

a {
    font-size: 1.2rem;
    text-decoration: none;
    color: black;
}

.toDoContent {
    position: absolute;
    left: 0;
    top: 0;
    grid-area: content;
    display: flex;
    flex-direction: column;
    gap: 10rem;
    padding: 4rem 2rem;
    background: skyblue;
    width: 100%;
    transform: translate(0, -1100px);
    z-index: 1;
}

.arrow {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 0;
    right: 0;
    top: 50px;
    margin: 0 auto;
    border-top: 25px solid red;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    cursor: pointer;
    transition: border-top 0.1s ease-in-out,
                rotate 0.4s ease-in-out;
            }
            
.arrow:hover {
    border-top: 25px solid green;
    rotate: 180deg;
}
            
            
.topSection,
.middleSection,
.finalSection {
    display: flex;
    align-items: center;
}

.topSection {
    gap: 3rem;
    margin-top: 5rem;
}


.topSection h1 {
    font-size: 1.7rem;
}

.middleSection {
    gap: 2rem;
}

.middleSection p {
    line-height: 3rem;
}

.middleSection p,
.finalSection p {
    font-size: 1.4rem;
}

.finalSection {
    display: flex;
}

.finalSection label {
    font-size: 1.5rem;
}


.inputContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    align-items: center;
}

.datetime-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
}

.datetime-wrapper input {
    padding: 1rem;
    border-radius: 8px;
    width: 100%;
    max-width: 30rem;
    border: none;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
    font-size: 1.6rem;
}


.complete {
    align-self: center;
    width: 100%;
    max-width: 10rem;
    height: 5rem;
    background-color: green;
    border: none;
    border-radius: 8px;
    color: white;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

.complete:hover {
    font-weight: bold;
    scale: 1.1;
}

.edit {
    width: 100%;
    max-width: 5rem;
    height: 3rem;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    transition: scale 0.2s ease-in-out;
    cursor: pointer;
}

.edit:hover {
    scale: 1.1;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
}

.toDoPanes {
    grid-area: panes;
    display: grid;
    justify-content: center;
}

.project {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    margin: 2rem;
    padding: 2rem;
    width: 100%;
    max-width: 34rem;
    border-radius: 6px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    /* transform: translate(0, -25px);
    opacity: 0; */
    cursor: pointer;
    transition: background-color 0.25s linear;
}

.project:hover {
    background-color: lightseagreen;
    color: white;
}

.projectInfo {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    pointer-events: none;
}

.timeContainer {
    flex-basis: 20%;
    pointer-events: none;
}

.projectInfo h3 {
    font-size: 1.6rem;
}

.projectInfo p {
    font-size: 1.2rem;
}

.timeContainer p {

    font-size: 1.2rem;
}

.buttonContainer {
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.deletePane {
    width: 7rem;
    height: 3rem;
    transition: all 0.2s ease-in-out;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}

.deletePane:hover {
    background-color: red;
    color: white;
    scale: 1.1;
    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);
}

.deletePane i {
    pointer-events: none;
}



.expand {
    cursor: pointer;
    width: 7rem;
    height: 3rem;
    border-radius: 6px;
    border: none;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}

.expand:hover {
    background-color: greenyellow;
    scale: 1.1;
    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);
}





@media screen and (min-width: 600px) {
    
    main {
        display: grid;
        width: 100%;
        max-width: 1440px;
        grid-template-columns: 14rem 1fr;
        grid-template-rows: 7rem 1fr;
        grid-template-areas: "nav nav"
        "content content"
        "panes panes";
        transition: grid-template-columns 0.5s ease-in-out;
    }
    
    .project {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        
    }

    .projectInfo {
        align-items: center;
        text-align: center;
    }
    


    /* change projects transition to focus on main page instead of sidebar */
    
    .navbar {
        grid-area: nav;
        display: flex;
        justify-content: space-between;
        padding-inline: 1rem;
        align-items: center;
        background: gray;
    }
    
    .icons {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 25rem;
        justify-content: space-around;
    }
    
    .toDoContent {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        grid-area: content;
        background: skyblue;
        display: flex;
        flex-direction: column;
        padding: 10rem 5rem;
        gap: 5rem;
    }
    
    .topSection {
    
    }
    
    .middleSection {
        
    }
    
    .finalSection {
    
    }
    
    .topSection,
    .middleSection,
    .finalSection {
        display: flex;
        gap: 3rem;
        align-items: center;
    }
    
    .middleSection,
    .finalSection {
        margin-left: 5rem;
    }

    .finalSection label {

    }

    .inputContainer {
        flex-direction: row;
        justify-content: flex-start;
        gap: 5rem;
    }

    .datetime-wrapper {
        max-width: 30rem;
    }

    .datetime-wrapper input {

    }
    
    .edit {
        width: 100%;
        max-width: 7rem;
        height: 3rem;
    }

    .editTimer {

    }

    .toDoPanes {
        grid-template-columns: repeat(4, minmax(150px, 335px));
        gap: 2rem;
        justify-items: center;
    }

}

/*  */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Default Styling */\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    scroll-behavior: smooth;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    font-size: 1.6rem;\n}\n\n.content {\n    display: flex;\n    justify-content: center;\n    \n}\n\nmain {\n    position: relative;\n    display: grid;\n    width: 100%;\n    max-width: 375px;\n    border-radius: 8px;\n    grid-template-rows: 4rem 1fr;\n    grid-template-areas: \"nav\"\n                         \"content\"\n                         \"panes\";\n    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);\n}\n\n.navbar {\n    grid-area: nav;\n    display: flex;\n    justify-content: space-between;\n    padding-inline: 1rem;\n    align-items: center;\n    background: gray;\n}\n\n.navbar h2 {\n    font-size: 1.8rem;\n}\n\n.icons {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 15rem;\n    justify-content: space-around;\n}\n\ni {\n    cursor: pointer;\n}\n\na {\n    font-size: 1.2rem;\n    text-decoration: none;\n    color: black;\n}\n\n.toDoContent {\n    position: absolute;\n    left: 0;\n    top: 0;\n    grid-area: content;\n    display: flex;\n    flex-direction: column;\n    gap: 10rem;\n    padding: 4rem 2rem;\n    background: skyblue;\n    width: 100%;\n    transform: translate(0, -1100px);\n    z-index: 1;\n}\n\n.arrow {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 0;\n    right: 0;\n    top: 50px;\n    margin: 0 auto;\n    border-top: 25px solid red;\n    border-left: 25px solid transparent;\n    border-right: 25px solid transparent;\n    cursor: pointer;\n    transition: border-top 0.1s ease-in-out,\n                rotate 0.4s ease-in-out;\n            }\n            \n.arrow:hover {\n    border-top: 25px solid green;\n    rotate: 180deg;\n}\n            \n            \n.topSection,\n.middleSection,\n.finalSection {\n    display: flex;\n    align-items: center;\n}\n\n.topSection {\n    gap: 3rem;\n    margin-top: 5rem;\n}\n\n\n.topSection h1 {\n    font-size: 1.7rem;\n}\n\n.middleSection {\n    gap: 2rem;\n}\n\n.middleSection p {\n    line-height: 3rem;\n}\n\n.middleSection p,\n.finalSection p {\n    font-size: 1.4rem;\n}\n\n.finalSection {\n    display: flex;\n}\n\n.finalSection label {\n    font-size: 1.5rem;\n}\n\n\n.inputContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2rem;\n    width: 100%;\n    align-items: center;\n}\n\n.datetime-wrapper {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n\n.datetime-wrapper input {\n    padding: 1rem;\n    border-radius: 8px;\n    width: 100%;\n    max-width: 30rem;\n    border: none;\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n    font-size: 1.6rem;\n}\n\n\n.complete {\n    align-self: center;\n    width: 100%;\n    max-width: 10rem;\n    height: 5rem;\n    background-color: green;\n    border: none;\n    border-radius: 8px;\n    color: white;\n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n}\n\n.complete:hover {\n    font-weight: bold;\n    scale: 1.1;\n}\n\n.edit {\n    width: 100%;\n    max-width: 5rem;\n    height: 3rem;\n    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);\n    transition: scale 0.2s ease-in-out;\n    cursor: pointer;\n}\n\n.edit:hover {\n    scale: 1.1;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);\n}\n\n.toDoPanes {\n    grid-area: panes;\n    display: grid;\n    justify-content: center;\n}\n\n.project {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 2rem;\n    margin: 2rem;\n    padding: 2rem;\n    width: 100%;\n    max-width: 34rem;\n    border-radius: 6px;\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);\n    /* transform: translate(0, -25px);\n    opacity: 0; */\n    cursor: pointer;\n    transition: background-color 0.25s linear;\n}\n\n.project:hover {\n    background-color: lightseagreen;\n    color: white;\n}\n\n.projectInfo {\n    flex-basis: 50%;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    pointer-events: none;\n}\n\n.timeContainer {\n    flex-basis: 20%;\n    pointer-events: none;\n}\n\n.projectInfo h3 {\n    font-size: 1.6rem;\n}\n\n.projectInfo p {\n    font-size: 1.2rem;\n}\n\n.timeContainer p {\n\n    font-size: 1.2rem;\n}\n\n.buttonContainer {\n    flex-basis: 30%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.5rem;\n}\n\n.deletePane {\n    width: 7rem;\n    height: 3rem;\n    transition: all 0.2s ease-in-out;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n}\n\n.deletePane:hover {\n    background-color: red;\n    color: white;\n    scale: 1.1;\n    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);\n}\n\n.deletePane i {\n    pointer-events: none;\n}\n\n\n\n.expand {\n    cursor: pointer;\n    width: 7rem;\n    height: 3rem;\n    border-radius: 6px;\n    border: none;\n    transition: all 0.2s ease-in-out;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n}\n\n.expand:hover {\n    background-color: greenyellow;\n    scale: 1.1;\n    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);\n}\n\n\n\n\n\n@media screen and (min-width: 600px) {\n    \n    main {\n        display: grid;\n        width: 100%;\n        max-width: 1440px;\n        grid-template-columns: 14rem 1fr;\n        grid-template-rows: 7rem 1fr;\n        grid-template-areas: \"nav nav\"\n        \"content content\"\n        \"panes panes\";\n        transition: grid-template-columns 0.5s ease-in-out;\n    }\n    \n    .project {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 2rem;\n        \n    }\n\n    .projectInfo {\n        align-items: center;\n        text-align: center;\n    }\n    \n\n\n    /* change projects transition to focus on main page instead of sidebar */\n    \n    .navbar {\n        grid-area: nav;\n        display: flex;\n        justify-content: space-between;\n        padding-inline: 1rem;\n        align-items: center;\n        background: gray;\n    }\n    \n    .icons {\n        display: flex;\n        align-items: center;\n        width: 100%;\n        max-width: 25rem;\n        justify-content: space-around;\n    }\n    \n    .toDoContent {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100vh;\n        grid-area: content;\n        background: skyblue;\n        display: flex;\n        flex-direction: column;\n        padding: 10rem 5rem;\n        gap: 5rem;\n    }\n    \n    .topSection {\n    \n    }\n    \n    .middleSection {\n        \n    }\n    \n    .finalSection {\n    \n    }\n    \n    .topSection,\n    .middleSection,\n    .finalSection {\n        display: flex;\n        gap: 3rem;\n        align-items: center;\n    }\n    \n    .middleSection,\n    .finalSection {\n        margin-left: 5rem;\n    }\n\n    .finalSection label {\n\n    }\n\n    .inputContainer {\n        flex-direction: row;\n        justify-content: flex-start;\n        gap: 5rem;\n    }\n\n    .datetime-wrapper {\n        max-width: 30rem;\n    }\n\n    .datetime-wrapper input {\n\n    }\n    \n    .edit {\n        width: 100%;\n        max-width: 7rem;\n        height: 3rem;\n    }\n\n    .editTimer {\n\n    }\n\n    .toDoPanes {\n        grid-template-columns: repeat(4, minmax(150px, 335px));\n        gap: 2rem;\n        justify-items: center;\n    }\n\n}\n\n/*  */"],"sourceRoot":""}]);
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

/***/ "./src/notification.mp3":
/*!******************************!*\
  !*** ./src/notification.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "68bacdfdbf6f7e34fcd6797b0a1aca74.mp3");

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

/***/ "./src/modules/beat.js":
/*!*****************************!*\
  !*** ./src/modules/beat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBeat: () => (/* binding */ addBeat),
/* harmony export */   removeBeat: () => (/* binding */ removeBeat)
/* harmony export */ });


const addBeat = () => {
  document.addEventListener('mouseover', (event) => {
    let iconEvent = event.target;
    if (iconEvent.tagName === 'I' && iconEvent.classList.contains('expand')) {
      iconEvent.classList.add('fa-beat');
    }
  })

  document.addEventListener('mouseover', (event) => {
    let iconEvent = event.target;
    if (iconEvent.tagName === 'I' && iconEvent.classList.contains('fa-plus')) {
      iconEvent.classList.add('fa-beat');
    } 
  })

  document.addEventListener('mouseover', (event) => {
    let iconEvent = event.target;
    if (iconEvent.classList.contains('deletePane')) {
      iconEvent.firstChild.classList.add('fa-beat');
    }
  })
}

const removeBeat = () => {
  document.addEventListener('mouseout', (event) => {
    let iconEvent = event.target;
    if (iconEvent.tagName === 'I' && iconEvent.classList.contains('expand')) {
      iconEvent.classList.remove('fa-beat');
    }
  })

  document.addEventListener('mouseout', (event) => {
    let iconEvent = event.target;
    if (iconEvent.tagName === 'I' && iconEvent.classList.contains('fa-plus')) {
      iconEvent.classList.remove('fa-beat');
    }
  })

  document.addEventListener('mouseout', (event) => {
    let iconEvent = event.target;
    if (iconEvent.classList.contains('deletePane')) {
      iconEvent.firstChild.classList.remove('fa-beat');
    }
  })
}




/***/ }),

/***/ "./src/modules/change.js":
/*!*******************************!*\
  !*** ./src/modules/change.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editPane: () => (/* binding */ editPane),
/* harmony export */   rewriteToPage: () => (/* binding */ rewriteToPage)
/* harmony export */ });
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set */ "./src/modules/set.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/modules/edit.js");
/* harmony import */ var _truncate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./truncate */ "./src/modules/truncate.js");





function editPane() {
    document.addEventListener('click', (event) => {
        let tarElement = event.target;
        if (tarElement.classList.contains('project')) {
            _edit__WEBPACK_IMPORTED_MODULE_1__.title.textContent = _edit__WEBPACK_IMPORTED_MODULE_1__.toDoArr[tarElement.id].title;
            _edit__WEBPACK_IMPORTED_MODULE_1__.creationContent.textContent = _edit__WEBPACK_IMPORTED_MODULE_1__.toDoArr[tarElement.id].content;
            _edit__WEBPACK_IMPORTED_MODULE_1__.timerValue.value = new Date(_edit__WEBPACK_IMPORTED_MODULE_1__.toDoArr[tarElement.id].timer.getTime() - _edit__WEBPACK_IMPORTED_MODULE_1__.toDoArr[tarElement.id].timer.getTimezoneOffset() * 60000).toISOString().slice(0, -1);
            (0,_set__WEBPACK_IMPORTED_MODULE_0__.slideInPage)();
            _set__WEBPACK_IMPORTED_MODULE_0__.complete.removeEventListener('click', _edit__WEBPACK_IMPORTED_MODULE_1__.createProject);
            _set__WEBPACK_IMPORTED_MODULE_0__.complete.addEventListener('click', function changePane() {
                _edit__WEBPACK_IMPORTED_MODULE_1__.toDoArr[tarElement.id].title = _edit__WEBPACK_IMPORTED_MODULE_1__.title.textContent;
                _edit__WEBPACK_IMPORTED_MODULE_1__.toDoArr[tarElement.id].content = _edit__WEBPACK_IMPORTED_MODULE_1__.creationContent.textContent;
                _edit__WEBPACK_IMPORTED_MODULE_1__.toDoArr[tarElement.id].timer = new Date(_edit__WEBPACK_IMPORTED_MODULE_1__.timerValue.value);
                (0,_set__WEBPACK_IMPORTED_MODULE_0__.slideOutPage)();
                rewriteToPage(_edit__WEBPACK_IMPORTED_MODULE_1__.toDoArr);
                reverseEditPage();
                _set__WEBPACK_IMPORTED_MODULE_0__.complete.addEventListener('click', _edit__WEBPACK_IMPORTED_MODULE_1__.createProject);
                _set__WEBPACK_IMPORTED_MODULE_0__.complete.removeEventListener('click', changePane);
            })
        }
    })
}



let newElements;

function reverseEditPage(date) {
    _edit__WEBPACK_IMPORTED_MODULE_1__.title.textContent = 'Title of clicked to do item';
    _edit__WEBPACK_IMPORTED_MODULE_1__.creationContent.textContent = 'Notes that will appear when creating to do item';
    
}

function rewriteToPage(arr) {
    while (_edit__WEBPACK_IMPORTED_MODULE_1__.panes.firstChild) {
        _edit__WEBPACK_IMPORTED_MODULE_1__.panes.removeChild(_edit__WEBPACK_IMPORTED_MODULE_1__.panes.firstChild);
    }
    
    
    for (let i = 0; i < _edit__WEBPACK_IMPORTED_MODULE_1__.toDoArr.length; i++) {     
        const newDiv = document.createElement('div');
        newDiv.classList.add('project');
        newDiv.classList.add(`project${i + 1}`);
        newDiv.id = i;
        
        const projectInfo = document.createElement('div');
        projectInfo.classList.add('projectInfo');
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = arr[i].title;
        (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectTitle, projectTitle.textContent, 16);
        projectInfo.append(projectTitle);
        
        const projectContent = document.createElement('p');
        projectContent.textContent = arr[i].content;
        (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectContent, projectContent.textContent, 16);
        projectInfo.append(projectContent);
        
        const timeContainer = document.createElement('div');
        timeContainer.classList.add('timeContainer');
        
        const timerP = document.createElement('p');
        timerP.classList.add('timerP');
        timeContainer.append(timerP);

        function newCountdown() {
            const targetDate = _edit__WEBPACK_IMPORTED_MODULE_1__.toDoArr[i].timer.getTime();
            let intervalID = setInterval(() => {
                const today = new Date().getTime();
                let leftoverTime = Math.abs(targetDate - today) / 1000;

                if (leftoverTime <= 0) {
                    timerP.textContent = 'Time\'s up';
                    (0,_edit__WEBPACK_IMPORTED_MODULE_1__.playNotification)();
                    clearInterval(intervalID);
                } else {
                    const days = Math.floor(leftoverTime / 60 / 60 / 24);
                    const hours = Math.floor(leftoverTime / 60 / 60 % 24);
                    const minutes = Math.floor(leftoverTime / 60 % 60);
                    const seconds = Math.floor(leftoverTime % 60);

                    timerP.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                }
            }, 1000)
        }

        newCountdown();

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttonContainer');

        const deletePane = document.createElement('button');
        deletePane.classList.add('deletePane');
        buttonContainer.append(deletePane);

        const minusButton = document.createElement('i');
        minusButton.classList.add('fa-solid');
        minusButton.classList.add('fa-minus');
        minusButton.classList.add('fa-md');
        deletePane.append(minusButton);

        const expand = document.createElement('button');
        expand.classList.add('expand');
        expand.textContent = 'Expand';
        buttonContainer.append(expand);
        
        newDiv.append(projectInfo);
        newDiv.append(timeContainer);
        newDiv.append(buttonContainer);
        _edit__WEBPACK_IMPORTED_MODULE_1__.panes.append(newDiv);
        
        newElements = document.querySelectorAll('.project');  
        expand.addEventListener('click', () => {
            if (!newDiv.classList.contains('expanded')) {
                projectTitle.textContent = arr[i].title;
                projectContent.textContent = arr[i].content;
                newDiv.classList.add('expanded');
                expand.textContent = 'Contract';
            } else {
                (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectTitle, projectTitle.textContent, 16);
                (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectContent, projectContent.textContent, 16);
                newDiv.classList.remove('expanded');
                expand.textContent = 'Expand';
            }
        }) 
        setTimeout(() => {
            let opacity = 0;
            let transformation = -25;
            let intervalID = setInterval(() => {
                if (opacity < 1 && transformation < 0) {
                    opacity = opacity + .20;
                    transformation = transformation + 5;
                    newDiv.style.opacity = opacity;
                    newDiv.style.transform = `translate(0, ${transformation}px)`;
                } else {
                    clearInterval(intervalID);
                }
            }, 15)
        }, 300)
        }
        
    }

    
    
    
    

/***/ }),

/***/ "./src/modules/delete.js":
/*!*******************************!*\
  !*** ./src/modules/delete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteToDo: () => (/* binding */ deleteToDo)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/modules/edit.js");
/* harmony import */ var _change__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change */ "./src/modules/change.js");



function deleteToDo(arr) {
    document.addEventListener('click', (event) => {
        /* Program the delete button by tieing it to the id # of the click event.
        Tie it to the parent of the click event, or grandparent, depending on where it sits
        in the DOM. */
        let deleteEvent = event.target;
        if (deleteEvent.tagName === 'BUTTON' && deleteEvent.classList.contains('deletePane')) {
            arr.splice(deleteEvent.parentElement.parentElement.id, 1);
            (0,_change__WEBPACK_IMPORTED_MODULE_1__.rewriteToPage)(_edit__WEBPACK_IMPORTED_MODULE_0__.toDoArr);
        }
    })
}



/***/ }),

/***/ "./src/modules/edit.js":
/*!*****************************!*\
  !*** ./src/modules/edit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentEdit: () => (/* binding */ contentEdit),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   creationContent: () => (/* binding */ creationContent),
/* harmony export */   editContent: () => (/* binding */ editContent),
/* harmony export */   editTitle: () => (/* binding */ editTitle),
/* harmony export */   elements: () => (/* binding */ elements),
/* harmony export */   notify: () => (/* binding */ notify),
/* harmony export */   panes: () => (/* binding */ panes),
/* harmony export */   playNotification: () => (/* binding */ playNotification),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   retrieveProjects: () => (/* binding */ retrieveProjects),
/* harmony export */   timerValue: () => (/* binding */ timerValue),
/* harmony export */   title: () => (/* binding */ title),
/* harmony export */   titleEdit: () => (/* binding */ titleEdit),
/* harmony export */   toDoArr: () => (/* binding */ toDoArr)
/* harmony export */ });
/* harmony import */ var _notification_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../notification.mp3 */ "./src/notification.mp3");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set */ "./src/modules/set.js");
/* harmony import */ var _truncate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./truncate */ "./src/modules/truncate.js");
const topSection = document.querySelector('.topSection');
const middleSection = document.querySelector('.middleSection');
const finalSection = document.querySelector('.finalSection');
const title = document.querySelector('.topSection > h1');
const editTitle = document.querySelector('.editTitle');
const creationContent = document.querySelector('.middleSection > p');
const editContent = document.querySelector('.editContent');
const timerValue = document.querySelector('#setTimer');
const main = document.querySelector('main');
const projects = document.querySelectorAll('.project');
const panes = document.querySelector('.toDoPanes');
let elements;
let newProject;





// change the learn more tab to EDIT

/* allow the edit to pull down a list that, when one is selected,
pulls back down the edit page to change the info */


let toDoArr = [];


class Projects {
    constructor(title, content, timer) {
        this.title = title,
        this.content = content;
        this.timer = timer;
    }

    writeToPage() {

        const newDiv = document.createElement('div');
        
        for (let i = toDoArr.length - 1; i < toDoArr.length; i++) {     
            newDiv.classList.add('project');
            newDiv.classList.add(`project${i + 1}`);
            newDiv.id = i;

            const projectInfo = document.createElement('div');
            projectInfo.classList.add('projectInfo');
            
            const projectTitle = document.createElement('h3');
            projectTitle.textContent = toDoArr[i].title;
            (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectTitle, projectTitle.textContent, 16);
            projectInfo.append(projectTitle);
            
            const projectContent = document.createElement('p');
            projectContent.textContent = toDoArr[i].content;
            (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectContent, projectContent.textContent, 16);
            projectInfo.append(projectContent);
            
            const timeContainer = document.createElement('div');
            timeContainer.classList.add('timeContainer');
            
            // timer stuff

            const timerP = document.createElement('p');
            timerP.classList.add('timerP');
            timeContainer.append(timerP);

            function countdownTimer() {
                const targetDate = toDoArr[i].timer.getTime();
                let intervalID = setInterval(() => {
                    const today = new Date().getTime();
                    let leftoverTime = (targetDate - today) / 1000;
                    
                    if (leftoverTime <= 0) {
                        timerP.textContent = 'Time\'s up';
                        playNotification();
                        clearInterval(intervalID);
                    } else {
                        const days = Math.floor(leftoverTime / 60 / 60 / 24);
                        const hours = Math.floor(leftoverTime / 60 / 60 % 24);
                        const minutes = Math.floor(leftoverTime / 60 % 60);
                        const seconds = Math.floor(leftoverTime % 60);
                        
                        timerP.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                    }
                }, 1000)
                
            }
            
            countdownTimer();
            
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('buttonContainer');
            
            const deletePane = document.createElement('button');
            deletePane.classList.add('deletePane');
            buttonContainer.append(deletePane);
            
            const minusButton = document.createElement('i');
            minusButton.classList.add('fa-solid');
            minusButton.classList.add('fa-minus');
            minusButton.classList.add('fa-md');
            deletePane.append(minusButton);
            
            const expand = document.createElement('button');
            expand.classList.add('expand');
            expand.textContent = 'Expand';
            buttonContainer.append(expand);
            
            newDiv.append(projectInfo);
            newDiv.append(timeContainer);
            newDiv.append(buttonContainer);
            panes.append(newDiv);
            
            elements = document.querySelectorAll('.project');   
            expand.addEventListener('click', () => {
                if (!newDiv.classList.contains('expanded')) {
                    projectTitle.textContent = toDoArr[i].title;
                    projectContent.textContent = toDoArr[i].content;
                    newDiv.classList.add('expanded');
                    expand.textContent = 'Contract';
                } else {
                    (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectTitle, projectTitle.textContent, 16);
                    (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectContent, projectContent.textContent, 16);
                    newDiv.classList.remove('expanded');
                    expand.textContent = 'Expand';
                }
            }
            );
        }
        
        setTimeout(() => {
            let opacity = 0;
            let transformation = -25;
            let intervalID = setInterval(() => {
                if (opacity < 1 && transformation < 0) {
                    opacity = opacity + .20;
                    transformation = transformation + 5;
                    newDiv.style.opacity = opacity;
                    newDiv.style.transform = `translate(0, ${transformation}px)`;
                } else {
                    clearInterval(intervalID);
                }
            }, 15)
        }, 300)
    }
    
    
}

let notify = new Audio(_notification_mp3__WEBPACK_IMPORTED_MODULE_0__["default"]);

function playNotification() {
    notify.play();
}

function removeFocusTitle() {
    title.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            
            event.preventDefault();
            title.removeAttribute('contenteditable');
            title.blur();
            grabTextTitle();
        }
    })
}

function removeFocusContent() {
    creationContent.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            creationContent.removeAttribute('contenteditable');
            creationContent.blur();
            grabTextContent();
        }
    })
}



function titleEdit() {
    title.toggleAttribute('contenteditable', true);
    title.textContent = title.innerText;
    const text = document.getSelection();
    text.setBaseAndExtent(title.firstChild, 0, title.lastChild, title.textContent.length);
    removeFocusTitle();
    completeTitleEdit();
}

function completeTitleEdit() {
    editTitle.removeEventListener('click', titleEdit);
    editTitle.textContent = 'Add';
    editTitle.addEventListener('click', grabTextTitle);
}


function grabTextTitle() {
    title.textContent = title.innerText;
    title.toggleAttribute('contenteditable', false);
    editTitle.textContent = 'Edit';
    editTitle.addEventListener('click', titleEdit);
}

function contentEdit() {
    creationContent.toggleAttribute('contenteditable', true);
    creationContent.textContent = creationContent.innerText;
    const text = document.getSelection();
    text.setBaseAndExtent(creationContent.firstChild, 0, creationContent.lastChild, creationContent.textContent.length);
    removeFocusContent(creationContent);
    completeContentEdit();
}

function completeContentEdit() {
    editContent.removeEventListener('click', contentEdit);
    editContent.textContent = 'Add';
    editContent.addEventListener('click', grabTextContent);
}

function grabTextContent() {
    creationContent.textContent = creationContent.innerText;
    creationContent.toggleAttribute('contenteditable', false);
    editContent.textContent = 'Edit';
    editContent.addEventListener('click', contentEdit);
}

// timer edit function

function addToStorage(arr) {
    localStorage.setItem('projects', JSON.stringify(arr));
}

function retrieveProjects() {
    if (localStorage.getItem('projects') !== null) {
        const userArr = JSON.parse(localStorage.getItem('projects'));
        console.table(userArr[0], userArr[1]);
        writeRetrievalData(userArr)
    } else {
        return;
    }
}

let newDiv;

function writeRetrievalData(arr) {
    
    for (let i = 0; i < arr.length; i++) {     
            newDiv = document.createElement('div');
            newDiv.classList.add('project');
            newDiv.classList.add(`project${i + 1}`);
            newDiv.id = i;

            const projectInfo = document.createElement('div');
            projectInfo.classList.add('projectInfo');
            
            const projectTitle = document.createElement('h3');
            projectTitle.textContent = arr[i].title;
            (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectTitle, projectTitle.textContent, 16);
            projectInfo.append(projectTitle);
            
            const projectContent = document.createElement('p');
            projectContent.textContent = arr[i].content;
            (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectContent, projectContent.textContent, 16);
            projectInfo.append(projectContent);
            
            const timeContainer = document.createElement('div');
            timeContainer.classList.add('timeContainer');
            
            // timer stuff

            const timerP = document.createElement('p');
            timerP.classList.add('timerP');
            timeContainer.append(timerP);
            
            function countdownTimer() {
                const targetDate = new Date(arr[i].timer).getTime()
                let intervalID = setInterval(() => {
                    const today = new Date().getTime();
                    let leftoverTime = (targetDate - today) / 1000;
                    
                    if (leftoverTime <= 0) {
                        timerP.textContent = 'Time\'s up';
                        playNotification();
                        clearInterval(intervalID);
                    } else {
                        const days = Math.floor(leftoverTime / 60 / 60 / 24);
                        const hours = Math.floor(leftoverTime / 60 / 60 % 24);
                        const minutes = Math.floor(leftoverTime / 60 % 60);
                        const seconds = Math.floor(leftoverTime % 60);
                        
                        timerP.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                    }
                }, 1000)
                
            }
            
            countdownTimer();
            
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('buttonContainer');
            
            const deletePane = document.createElement('button');
            deletePane.classList.add('deletePane');
            buttonContainer.append(deletePane);
            
            const minusButton = document.createElement('i');
            minusButton.classList.add('fa-solid');
            minusButton.classList.add('fa-minus');
            minusButton.classList.add('fa-md');
            deletePane.append(minusButton);
            
            const expand = document.createElement('button');
            expand.classList.add('expand');
            expand.textContent = 'Expand';
            buttonContainer.append(expand);
            
            newDiv.append(projectInfo);
            newDiv.append(timeContainer);
            newDiv.append(buttonContainer);
            panes.append(newDiv);
            
            elements = document.querySelectorAll('.project');   
            expand.addEventListener('click', () => {
                if (!newDiv.classList.contains('expanded')) {
                    projectTitle.textContent = arr[i].title;
                    projectContent.textContent = arr[i].content;
                    newDiv.classList.add('expanded');
                    expand.textContent = 'Contract';
                } else {
                    (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectTitle, projectTitle.textContent, 16);
                    (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectContent, projectContent.textContent, 16);
                    newDiv.classList.remove('expanded');
                    expand.textContent = 'Expand';
                }
            }
            );
        }
        
        setTimeout(() => {
            let opacity = 0;
            let transformation = -25;
            let intervalID = setInterval(() => {
                if (opacity < 1 && transformation < 0) {
                    opacity = opacity + .20;
                    transformation = transformation + 5;
                    newDiv.style.opacity = opacity;
                    newDiv.style.transform = `translate(0, ${transformation}px)`;
                } else {
                    clearInterval(intervalID);
                }
            }, 15)
        }, 300)
}




function resetForm() {
    title.textContent = 'Title of clicked to do item';
    creationContent.textContent = 'Notes that will appear when creating to do item';
    timerValue.value = '';
}

// start here with creating a timer date object in this createProject function
function createProject() {
    const timerDate = new Date(timerValue.value);
    newProject = new Projects(title.textContent, creationContent.textContent, timerDate);
    toDoArr.push(newProject);
    addToStorage(toDoArr);
    console.log(toDoArr);
    newProject.writeToPage();
    resetForm();
}

_set__WEBPACK_IMPORTED_MODULE_1__.complete.addEventListener('click', createProject);

 





/***/ }),

/***/ "./src/modules/set.js":
/*!****************************!*\
  !*** ./src/modules/set.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrow: () => (/* binding */ arrow),
/* harmony export */   complete: () => (/* binding */ complete),
/* harmony export */   plusButton: () => (/* binding */ plusButton),
/* harmony export */   slideInPage: () => (/* binding */ slideInPage),
/* harmony export */   slideOutPage: () => (/* binding */ slideOutPage)
/* harmony export */ });
const editTitle = document.querySelector('.editTimer');
const editContent = document.querySelector('.editContent');
const plusButton = document.querySelector('.icons > i:first-child');
const complete = document.querySelector('.complete');
const arrow = document.querySelector('.arrow');

let transformation = -1100;

/* Change slideIn and slideOut page to be a form that fades in instead of an entire
page that slides down and up */

function slideInPage() {
    const toDoContentBox = document.querySelector('.toDoContent');
    let intervalID = setInterval(() => {
        if (transformation < 0) {
            transformation = transformation + 10;
            toDoContentBox.style.transform = `translate(0, ${transformation}px)`;
        } else {
            clearInterval(intervalID);
        }
    }, 0.5)
}

function slideOutPage() {
    const toDoContentBox = document.querySelector('.toDoContent');
    let intervalID = setInterval(() => {
        if (transformation > -1100) {
            transformation = transformation - 10;
            toDoContentBox.style.transform = `translate(0, ${transformation}px)`;
        } else {
            clearInterval(intervalID);
        }
    }, 0.5)
}



/***/ }),

/***/ "./src/modules/truncate.js":
/*!*********************************!*\
  !*** ./src/modules/truncate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   truncateText: () => (/* binding */ truncateText)
/* harmony export */ });

function truncateText(ele, str, num) {
    if (str.length <= num) {
        return;
    } else {
        ele.innerText = str.slice(0, num) + '....';
    }
}





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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/* harmony import */ var _modules_beat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/beat */ "./src/modules/beat.js");
/* harmony import */ var _modules_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/set */ "./src/modules/set.js");
/* harmony import */ var _modules_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/edit */ "./src/modules/edit.js");
/* harmony import */ var _modules_change__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/change */ "./src/modules/change.js");
/* harmony import */ var _modules_delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/delete */ "./src/modules/delete.js");
// Change the 'notification timer' p element to an input:datetime-local element

/* Get rid of all of the logic dealing with the notification timer element and have
it replaced with logic that deals with the input. The complete button will submit the 
data that I need for it. Use CTRL + F to find all of the logic that deals with 'timer'
 */

// learn more about date-fns tomorrow as well








window.onload = (0,_modules_edit__WEBPACK_IMPORTED_MODULE_3__.retrieveProjects)();

// logic for pulsing the icons in the navbar
(0,_modules_beat__WEBPACK_IMPORTED_MODULE_1__.addBeat)();
(0,_modules_beat__WEBPACK_IMPORTED_MODULE_1__.removeBeat)();


_modules_set__WEBPACK_IMPORTED_MODULE_2__.plusButton.addEventListener('click', _modules_set__WEBPACK_IMPORTED_MODULE_2__.slideInPage);
_modules_set__WEBPACK_IMPORTED_MODULE_2__.complete.addEventListener('click', _modules_set__WEBPACK_IMPORTED_MODULE_2__.slideOutPage);
_modules_set__WEBPACK_IMPORTED_MODULE_2__.arrow.addEventListener('click', _modules_set__WEBPACK_IMPORTED_MODULE_2__.slideOutPage);
_modules_edit__WEBPACK_IMPORTED_MODULE_3__.editTitle.addEventListener('click', _modules_edit__WEBPACK_IMPORTED_MODULE_3__.titleEdit);
_modules_edit__WEBPACK_IMPORTED_MODULE_3__.editContent.addEventListener('click', _modules_edit__WEBPACK_IMPORTED_MODULE_3__.contentEdit);
(0,_modules_change__WEBPACK_IMPORTED_MODULE_4__.editPane)();
(0,_modules_delete__WEBPACK_IMPORTED_MODULE_5__.deleteToDo)(_modules_edit__WEBPACK_IMPORTED_MODULE_3__.toDoArr);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxhQUFhLHdGQUF3RixRQUFRLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLFFBQVEsT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsU0FBUyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sT0FBTyxVQUFVLFVBQVUsWUFBWSxPQUFP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O1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFcUI7QUFDdUM7QUFDMkI7QUFDOEI7QUFDekU7QUFDRTs7QUFFOUMsZ0JBQWdCLCtEQUFnQjs7QUFFaEM7QUFDQSxzREFBTztBQUNQLHlEQUFVOzs7QUFHVixvREFBVSwyQkFBMkIscURBQVc7QUFDaEQsa0RBQVEsMkJBQTJCLHNEQUFZO0FBQy9DLCtDQUFLLDJCQUEyQixzREFBWTtBQUM1QyxvREFBUywyQkFBMkIsb0RBQVM7QUFDN0Msc0RBQVcsMkJBQTJCLHNEQUFXO0FBQ2pELHlEQUFRO0FBQ1IsMkRBQVUsQ0FBQyxrREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbm90aWZpY2F0aW9uLm1wMyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9iZWF0LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NoYW5nZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZWRpdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zZXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdHJ1bmNhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogRGVmYXVsdCBTdHlsaW5nICovXG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbn1cblxubWFpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm5hdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcInBhbmVzXCI7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ubmF2YmFyIHtcbiAgICBncmlkLWFyZWE6IG5hdjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG59XG5cbi5uYXZiYXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4uaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG5pIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmEge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi50b0RvQ29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGdyaWQtYXJlYTogY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHJlbTtcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTEwMHB4KTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uYXJyb3cge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCByZWQ7XG4gICAgYm9yZGVyLWxlZnQ6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItdG9wIDAuMXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgcm90YXRlIDAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbi5hcnJvdzpob3ZlciB7XG4gICAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCBncmVlbjtcbiAgICByb3RhdGU6IDE4MGRlZztcbn1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4udG9wU2VjdGlvbixcbi5taWRkbGVTZWN0aW9uLFxuLmZpbmFsU2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9wU2VjdGlvbiB7XG4gICAgZ2FwOiAzcmVtO1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG59XG5cblxuLnRvcFNlY3Rpb24gaDEge1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4ubWlkZGxlU2VjdGlvbiB7XG4gICAgZ2FwOiAycmVtO1xufVxuXG4ubWlkZGxlU2VjdGlvbiBwIHtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbn1cblxuLm1pZGRsZVNlY3Rpb24gcCxcbi5maW5hbFNlY3Rpb24gcCB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5maW5hbFNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5maW5hbFNlY3Rpb24gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5cbi5pbnB1dENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF0ZXRpbWUtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRhdGV0aW1lLXdyYXBwZXIgaW5wdXQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuXG4uY29tcGxldGUge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb21wbGV0ZTpob3ZlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgc2NhbGU6IDEuMTtcbn1cblxuLmVkaXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHRyYW5zaXRpb246IHNjYWxlIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZWRpdDpob3ZlciB7XG4gICAgc2NhbGU6IDEuMTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi50b0RvUGFuZXMge1xuICAgIGdyaWQtYXJlYTogcGFuZXM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgICBtYXJnaW46IDJyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM0cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1cHgpO1xuICAgIG9wYWNpdHk6IDA7ICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgbGluZWFyO1xufVxuXG4ucHJvamVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0SW5mbyB7XG4gICAgZmxleC1iYXNpczogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50aW1lQ29udGFpbmVyIHtcbiAgICBmbGV4LWJhc2lzOiAyMCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5wcm9qZWN0SW5mbyBoMyB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5wcm9qZWN0SW5mbyBwIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnRpbWVDb250YWluZXIgcCB7XG5cbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmJ1dHRvbkNvbnRhaW5lciB7XG4gICAgZmxleC1iYXNpczogMzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMS41cmVtO1xufVxuXG4uZGVsZXRlUGFuZSB7XG4gICAgd2lkdGg6IDdyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5kZWxldGVQYW5lOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHNjYWxlOiAxLjE7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuXG4uZGVsZXRlUGFuZSBpIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuXG5cbi5leHBhbmQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogN3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uZXhwYW5kOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbiAgICBzY2FsZTogMS4xO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuXG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIFxuICAgIG1haW4ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTRyZW0gMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDdyZW0gMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm5hdiBuYXZcIlxuICAgICAgICBcImNvbnRlbnQgY29udGVudFwiXG4gICAgICAgIFwicGFuZXMgcGFuZXNcIjtcbiAgICAgICAgdHJhbnNpdGlvbjogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIFxuICAgIC5wcm9qZWN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAycmVtO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAucHJvamVjdEluZm8ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuXG5cbiAgICAvKiBjaGFuZ2UgcHJvamVjdHMgdHJhbnNpdGlvbiB0byBmb2N1cyBvbiBtYWluIHBhZ2UgaW5zdGVhZCBvZiBzaWRlYmFyICovXG4gICAgXG4gICAgLm5hdmJhciB7XG4gICAgICAgIGdyaWQtYXJlYTogbmF2O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xuICAgIH1cbiAgICBcbiAgICAuaWNvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAyNXJlbTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuICAgIFxuICAgIC50b0RvQ29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgZ3JpZC1hcmVhOiBjb250ZW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nOiAxMHJlbSA1cmVtO1xuICAgICAgICBnYXA6IDVyZW07XG4gICAgfVxuICAgIFxuICAgIC50b3BTZWN0aW9uIHtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgLm1pZGRsZVNlY3Rpb24ge1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLmZpbmFsU2VjdGlvbiB7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIC50b3BTZWN0aW9uLFxuICAgIC5taWRkbGVTZWN0aW9uLFxuICAgIC5maW5hbFNlY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDNyZW07XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5taWRkbGVTZWN0aW9uLFxuICAgIC5maW5hbFNlY3Rpb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNXJlbTtcbiAgICB9XG5cbiAgICAuZmluYWxTZWN0aW9uIGxhYmVsIHtcblxuICAgIH1cblxuICAgIC5pbnB1dENvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgZ2FwOiA1cmVtO1xuICAgIH1cblxuICAgIC5kYXRldGltZS13cmFwcGVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICB9XG5cbiAgICAuZGF0ZXRpbWUtd3JhcHBlciBpbnB1dCB7XG5cbiAgICB9XG4gICAgXG4gICAgLmVkaXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA3cmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgfVxuXG4gICAgLmVkaXRUaW1lciB7XG5cbiAgICB9XG5cbiAgICAudG9Eb1BhbmVzIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDE1MHB4LCAzMzVweCkpO1xuICAgICAgICBnYXA6IDJyZW07XG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbn1cblxuLyogICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG9CQUFvQjs7QUFFcEI7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1Qjs7Z0NBRTRCO0lBQzVCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysa0JBQWtC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QztRQUNoQyw0QkFBNEI7UUFDNUI7O3FCQUVhO1FBQ2Isa0RBQWtEO0lBQ3REOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUzs7SUFFYjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7Ozs7SUFJQSx3RUFBd0U7O0lBRXhFO1FBQ0ksY0FBYztRQUNkLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxNQUFNO1FBQ04sV0FBVztRQUNYLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFNBQVM7SUFDYjs7SUFFQTs7SUFFQTs7SUFFQTs7SUFFQTs7SUFFQTs7SUFFQTs7SUFFQTs7O1FBR0ksYUFBYTtRQUNiLFNBQVM7UUFDVCxtQkFBbUI7SUFDdkI7O0lBRUE7O1FBRUksaUJBQWlCO0lBQ3JCOztJQUVBOztJQUVBOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLDJCQUEyQjtRQUMzQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7O0lBRUE7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7O0lBRUE7O0lBRUE7UUFDSSxzREFBc0Q7UUFDdEQsU0FBUztRQUNULHFCQUFxQjtJQUN6Qjs7QUFFSjs7QUFFQSxLQUFLXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIERlZmF1bHQgU3R5bGluZyAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG5tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzNzVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibmF2XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiY29udGVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcInBhbmVzXFxcIjtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxufVxcblxcbi5uYXZiYXIgaDIge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG5pIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5hIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udG9Eb0NvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcmVtO1xcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTEwMHB4KTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmFycm93IHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogNTBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJvcmRlci10b3A6IDI1cHggc29saWQgcmVkO1xcbiAgICBib3JkZXItbGVmdDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci10b3AgMC4xcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgICAgcm90YXRlIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbi5hcnJvdzpob3ZlciB7XFxuICAgIGJvcmRlci10b3A6IDI1cHggc29saWQgZ3JlZW47XFxuICAgIHJvdGF0ZTogMTgwZGVnO1xcbn1cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBcXG4udG9wU2VjdGlvbixcXG4ubWlkZGxlU2VjdGlvbixcXG4uZmluYWxTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvcFNlY3Rpb24ge1xcbiAgICBnYXA6IDNyZW07XFxuICAgIG1hcmdpbi10b3A6IDVyZW07XFxufVxcblxcblxcbi50b3BTZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi5taWRkbGVTZWN0aW9uIHtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4ubWlkZGxlU2VjdGlvbiBwIHtcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxufVxcblxcbi5taWRkbGVTZWN0aW9uIHAsXFxuLmZpbmFsU2VjdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5maW5hbFNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmluYWxTZWN0aW9uIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcblxcbi5pbnB1dENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZXRpbWUtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRhdGV0aW1lLXdyYXBwZXIgaW5wdXQge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcblxcbi5jb21wbGV0ZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTByZW07XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZTpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBzY2FsZTogMS4xO1xcbn1cXG5cXG4uZWRpdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDVyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lZGl0OmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4udG9Eb1BhbmVzIHtcXG4gICAgZ3JpZC1hcmVhOiBwYW5lcztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1cHgpO1xcbiAgICBvcGFjaXR5OiAwOyAqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgbGluZWFyO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3RJbmZvIHtcXG4gICAgZmxleC1iYXNpczogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udGltZUNvbnRhaW5lciB7XFxuICAgIGZsZXgtYmFzaXM6IDIwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0SW5mbyBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4ucHJvamVjdEluZm8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udGltZUNvbnRhaW5lciBwIHtcXG5cXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5idXR0b25Db250YWluZXIge1xcbiAgICBmbGV4LWJhc2lzOiAzMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uZGVsZXRlUGFuZSB7XFxuICAgIHdpZHRoOiA3cmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4uZGVsZXRlUGFuZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBzY2FsZTogMS4xO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxufVxcblxcbi5kZWxldGVQYW5lIGkge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuXFxuXFxuLmV4cGFuZCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDdyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4uZXhwYW5kOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuICAgIHNjYWxlOiAxLjE7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gICAgXFxuICAgIG1haW4ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE0cmVtIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogN3JlbSAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibmF2IG5hdlxcXCJcXG4gICAgICAgIFxcXCJjb250ZW50IGNvbnRlbnRcXFwiXFxuICAgICAgICBcXFwicGFuZXMgcGFuZXNcXFwiO1xcbiAgICAgICAgdHJhbnNpdGlvbjogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG4gICAgXFxuICAgIC5wcm9qZWN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0SW5mbyB7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcblxcblxcbiAgICAvKiBjaGFuZ2UgcHJvamVjdHMgdHJhbnNpdGlvbiB0byBmb2N1cyBvbiBtYWluIHBhZ2UgaW5zdGVhZCBvZiBzaWRlYmFyICovXFxuICAgIFxcbiAgICAubmF2YmFyIHtcXG4gICAgICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XFxuICAgIH1cXG4gICAgXFxuICAgIC5pY29ucyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNXJlbTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB9XFxuICAgIFxcbiAgICAudG9Eb0NvbnRlbnQge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHBhZGRpbmc6IDEwcmVtIDVyZW07XFxuICAgICAgICBnYXA6IDVyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC50b3BTZWN0aW9uIHtcXG4gICAgXFxuICAgIH1cXG4gICAgXFxuICAgIC5taWRkbGVTZWN0aW9uIHtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIFxcbiAgICAuZmluYWxTZWN0aW9uIHtcXG4gICAgXFxuICAgIH1cXG4gICAgXFxuICAgIC50b3BTZWN0aW9uLFxcbiAgICAubWlkZGxlU2VjdGlvbixcXG4gICAgLmZpbmFsU2VjdGlvbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAzcmVtO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1pZGRsZVNlY3Rpb24sXFxuICAgIC5maW5hbFNlY3Rpb24ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVyZW07XFxuICAgIH1cXG5cXG4gICAgLmZpbmFsU2VjdGlvbiBsYWJlbCB7XFxuXFxuICAgIH1cXG5cXG4gICAgLmlucHV0Q29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBnYXA6IDVyZW07XFxuICAgIH1cXG5cXG4gICAgLmRhdGV0aW1lLXdyYXBwZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMHJlbTtcXG4gICAgfVxcblxcbiAgICAuZGF0ZXRpbWUtd3JhcHBlciBpbnB1dCB7XFxuXFxuICAgIH1cXG4gICAgXFxuICAgIC5lZGl0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA3cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB9XFxuXFxuICAgIC5lZGl0VGltZXIge1xcblxcbiAgICB9XFxuXFxuICAgIC50b0RvUGFuZXMge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDE1MHB4LCAzMzVweCkpO1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxufVxcblxcbi8qICAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY4YmFjZGZkYmY2ZjdlMzRmY2Q2Nzk3YjBhMWFjYTc0Lm1wM1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5cbmNvbnN0IGFkZEJlYXQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChldmVudCkgPT4ge1xuICAgIGxldCBpY29uRXZlbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGljb25FdmVudC50YWdOYW1lID09PSAnSScgJiYgaWNvbkV2ZW50LmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kJykpIHtcbiAgICAgIGljb25FdmVudC5jbGFzc0xpc3QuYWRkKCdmYS1iZWF0Jyk7XG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChldmVudCkgPT4ge1xuICAgIGxldCBpY29uRXZlbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGljb25FdmVudC50YWdOYW1lID09PSAnSScgJiYgaWNvbkV2ZW50LmNsYXNzTGlzdC5jb250YWlucygnZmEtcGx1cycpKSB7XG4gICAgICBpY29uRXZlbnQuY2xhc3NMaXN0LmFkZCgnZmEtYmVhdCcpO1xuICAgIH0gXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgbGV0IGljb25FdmVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoaWNvbkV2ZW50LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlUGFuZScpKSB7XG4gICAgICBpY29uRXZlbnQuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdmYS1iZWF0Jyk7XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCByZW1vdmVCZWF0ID0gKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChldmVudCkgPT4ge1xuICAgIGxldCBpY29uRXZlbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGljb25FdmVudC50YWdOYW1lID09PSAnSScgJiYgaWNvbkV2ZW50LmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kJykpIHtcbiAgICAgIGljb25FdmVudC5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iZWF0Jyk7XG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGV2ZW50KSA9PiB7XG4gICAgbGV0IGljb25FdmVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoaWNvbkV2ZW50LnRhZ05hbWUgPT09ICdJJyAmJiBpY29uRXZlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1wbHVzJykpIHtcbiAgICAgIGljb25FdmVudC5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iZWF0Jyk7XG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGV2ZW50KSA9PiB7XG4gICAgbGV0IGljb25FdmVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoaWNvbkV2ZW50LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlUGFuZScpKSB7XG4gICAgICBpY29uRXZlbnQuZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iZWF0Jyk7XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgeyBhZGRCZWF0LCByZW1vdmVCZWF0IH07XG4iLCJpbXBvcnQgeyBjb21wbGV0ZSwgc2xpZGVJblBhZ2UsIHNsaWRlT3V0UGFnZSB9IGZyb20gJy4vc2V0JztcbmltcG9ydCB7IHByb2plY3RzLCB0b0RvQXJyLCB0aXRsZSwgY3JlYXRpb25Db250ZW50LCBwYW5lcywgZWxlbWVudHMsIGNyZWF0ZVByb2plY3QsIHRpbWVyVmFsdWUsIG5vdGlmeSwgcGxheU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgeyB0cnVuY2F0ZVRleHQgfSBmcm9tICcuL3RydW5jYXRlJztcblxuXG5mdW5jdGlvbiBlZGl0UGFuZSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBsZXQgdGFyRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRhckVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0JykpIHtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9Eb0Fyclt0YXJFbGVtZW50LmlkXS50aXRsZTtcbiAgICAgICAgICAgIGNyZWF0aW9uQ29udGVudC50ZXh0Q29udGVudCA9IHRvRG9BcnJbdGFyRWxlbWVudC5pZF0uY29udGVudDtcbiAgICAgICAgICAgIHRpbWVyVmFsdWUudmFsdWUgPSBuZXcgRGF0ZSh0b0RvQXJyW3RhckVsZW1lbnQuaWRdLnRpbWVyLmdldFRpbWUoKSAtIHRvRG9BcnJbdGFyRWxlbWVudC5pZF0udGltZXIuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIHNsaWRlSW5QYWdlKCk7XG4gICAgICAgICAgICBjb21wbGV0ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVByb2plY3QpO1xuICAgICAgICAgICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBjaGFuZ2VQYW5lKCkge1xuICAgICAgICAgICAgICAgIHRvRG9BcnJbdGFyRWxlbWVudC5pZF0udGl0bGUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB0b0RvQXJyW3RhckVsZW1lbnQuaWRdLmNvbnRlbnQgPSBjcmVhdGlvbkNvbnRlbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgdG9Eb0Fyclt0YXJFbGVtZW50LmlkXS50aW1lciA9IG5ldyBEYXRlKHRpbWVyVmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIHNsaWRlT3V0UGFnZSgpO1xuICAgICAgICAgICAgICAgIHJld3JpdGVUb1BhZ2UodG9Eb0Fycik7XG4gICAgICAgICAgICAgICAgcmV2ZXJzZUVkaXRQYWdlKCk7XG4gICAgICAgICAgICAgICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVBhbmUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuXG5sZXQgbmV3RWxlbWVudHM7XG5cbmZ1bmN0aW9uIHJldmVyc2VFZGl0UGFnZShkYXRlKSB7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGUgb2YgY2xpY2tlZCB0byBkbyBpdGVtJztcbiAgICBjcmVhdGlvbkNvbnRlbnQudGV4dENvbnRlbnQgPSAnTm90ZXMgdGhhdCB3aWxsIGFwcGVhciB3aGVuIGNyZWF0aW5nIHRvIGRvIGl0ZW0nO1xuICAgIFxufVxuXG5mdW5jdGlvbiByZXdyaXRlVG9QYWdlKGFycikge1xuICAgIHdoaWxlIChwYW5lcy5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhbmVzLnJlbW92ZUNoaWxkKHBhbmVzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9BcnIubGVuZ3RoOyBpKyspIHsgICAgIFxuICAgICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoYHByb2plY3Qke2kgKyAxfWApO1xuICAgICAgICBuZXdEaXYuaWQgPSBpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LmFkZCgncHJvamVjdEluZm8nKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGFycltpXS50aXRsZTtcbiAgICAgICAgdHJ1bmNhdGVUZXh0KHByb2plY3RUaXRsZSwgcHJvamVjdFRpdGxlLnRleHRDb250ZW50LCAxNik7XG4gICAgICAgIHByb2plY3RJbmZvLmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3RDb250ZW50LnRleHRDb250ZW50ID0gYXJyW2ldLmNvbnRlbnQ7XG4gICAgICAgIHRydW5jYXRlVGV4dChwcm9qZWN0Q29udGVudCwgcHJvamVjdENvbnRlbnQudGV4dENvbnRlbnQsIDE2KTtcbiAgICAgICAgcHJvamVjdEluZm8uYXBwZW5kKHByb2plY3RDb250ZW50KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aW1lQ29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aW1lclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpbWVyUC5jbGFzc0xpc3QuYWRkKCd0aW1lclAnKTtcbiAgICAgICAgdGltZUNvbnRhaW5lci5hcHBlbmQodGltZXJQKTtcblxuICAgICAgICBmdW5jdGlvbiBuZXdDb3VudGRvd24oKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXREYXRlID0gdG9Eb0FycltpXS50aW1lci5nZXRUaW1lKCk7XG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGxldCBsZWZ0b3ZlclRpbWUgPSBNYXRoLmFicyh0YXJnZXREYXRlIC0gdG9kYXkpIC8gMTAwMDtcblxuICAgICAgICAgICAgICAgIGlmIChsZWZ0b3ZlclRpbWUgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lclAudGV4dENvbnRlbnQgPSAnVGltZVxcJ3MgdXAnO1xuICAgICAgICAgICAgICAgICAgICBwbGF5Tm90aWZpY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IobGVmdG92ZXJUaW1lIC8gNjAgLyA2MCAvIDI0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGxlZnRvdmVyVGltZSAvIDYwIC8gNjAgJSAyNCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKGxlZnRvdmVyVGltZSAvIDYwICUgNjApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihsZWZ0b3ZlclRpbWUgJSA2MCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGltZXJQLnRleHRDb250ZW50ID0gYCR7ZGF5c31kICR7aG91cnN9aCAke21pbnV0ZXN9bSAke3NlY29uZHN9c2A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NvdW50ZG93bigpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlUGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQYW5lLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVBhbmUnKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChkZWxldGVQYW5lKTtcblxuICAgICAgICBjb25zdCBtaW51c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtbWludXMnKTtcbiAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtbWQnKTtcbiAgICAgICAgZGVsZXRlUGFuZS5hcHBlbmQobWludXNCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGV4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG4gICAgICAgIGV4cGFuZC50ZXh0Q29udGVudCA9ICdFeHBhbmQnO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGV4cGFuZCk7XG4gICAgICAgIFxuICAgICAgICBuZXdEaXYuYXBwZW5kKHByb2plY3RJbmZvKTtcbiAgICAgICAgbmV3RGl2LmFwcGVuZCh0aW1lQ29udGFpbmVyKTtcbiAgICAgICAgbmV3RGl2LmFwcGVuZChidXR0b25Db250YWluZXIpO1xuICAgICAgICBwYW5lcy5hcHBlbmQobmV3RGl2KTtcbiAgICAgICAgXG4gICAgICAgIG5ld0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTsgIFxuICAgICAgICBleHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5ld0Rpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBhcnJbaV0udGl0bGU7XG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRlbnQudGV4dENvbnRlbnQgPSBhcnJbaV0uY29udGVudDtcbiAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICBleHBhbmQudGV4dENvbnRlbnQgPSAnQ29udHJhY3QnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnVuY2F0ZVRleHQocHJvamVjdFRpdGxlLCBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQsIDE2KTtcbiAgICAgICAgICAgICAgICB0cnVuY2F0ZVRleHQocHJvamVjdENvbnRlbnQsIHByb2plY3RDb250ZW50LnRleHRDb250ZW50LCAxNik7XG4gICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XG4gICAgICAgICAgICAgICAgZXhwYW5kLnRleHRDb250ZW50ID0gJ0V4cGFuZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBvcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1hdGlvbiA9IC0yNTtcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcGFjaXR5IDwgMSAmJiB0cmFuc2Zvcm1hdGlvbiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSA9IG9wYWNpdHkgKyAuMjA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uID0gdHJhbnNmb3JtYXRpb24gKyA1O1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDAsICR7dHJhbnNmb3JtYXRpb259cHgpYDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDE1KVxuICAgICAgICB9LCAzMDApXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgXG4gICAgXG4gICAgZXhwb3J0IHsgZWRpdFBhbmUsIHJld3JpdGVUb1BhZ2UgfTsiLCJpbXBvcnQgeyB0b0RvQXJyIH0gZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IHsgcmV3cml0ZVRvUGFnZSB9IGZyb20gXCIuL2NoYW5nZVwiO1xuXG5mdW5jdGlvbiBkZWxldGVUb0RvKGFycikge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8qIFByb2dyYW0gdGhlIGRlbGV0ZSBidXR0b24gYnkgdGllaW5nIGl0IHRvIHRoZSBpZCAjIG9mIHRoZSBjbGljayBldmVudC5cbiAgICAgICAgVGllIGl0IHRvIHRoZSBwYXJlbnQgb2YgdGhlIGNsaWNrIGV2ZW50LCBvciBncmFuZHBhcmVudCwgZGVwZW5kaW5nIG9uIHdoZXJlIGl0IHNpdHNcbiAgICAgICAgaW4gdGhlIERPTS4gKi9cbiAgICAgICAgbGV0IGRlbGV0ZUV2ZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoZGVsZXRlRXZlbnQudGFnTmFtZSA9PT0gJ0JVVFRPTicgJiYgZGVsZXRlRXZlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVQYW5lJykpIHtcbiAgICAgICAgICAgIGFyci5zcGxpY2UoZGVsZXRlRXZlbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkLCAxKTtcbiAgICAgICAgICAgIHJld3JpdGVUb1BhZ2UodG9Eb0Fycik7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgeyBkZWxldGVUb0RvIH07IiwiY29uc3QgdG9wU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BTZWN0aW9uJyk7XG5jb25zdCBtaWRkbGVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZGRsZVNlY3Rpb24nKTtcbmNvbnN0IGZpbmFsU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maW5hbFNlY3Rpb24nKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcFNlY3Rpb24gPiBoMScpO1xuY29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRUaXRsZScpO1xuY29uc3QgY3JlYXRpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZGRsZVNlY3Rpb24gPiBwJyk7XG5jb25zdCBlZGl0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Q29udGVudCcpO1xuY29uc3QgdGltZXJWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXRUaW1lcicpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbmNvbnN0IHBhbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9QYW5lcycpO1xubGV0IGVsZW1lbnRzO1xubGV0IG5ld1Byb2plY3Q7XG5cbmltcG9ydCBub3RpZmljYXRpb24gZnJvbSAnLi4vbm90aWZpY2F0aW9uLm1wMyc7XG5pbXBvcnQgeyBjb21wbGV0ZSB9IGZyb20gJy4vc2V0JztcbmltcG9ydCB7IHRydW5jYXRlVGV4dCB9IGZyb20gJy4vdHJ1bmNhdGUnO1xuXG4vLyBjaGFuZ2UgdGhlIGxlYXJuIG1vcmUgdGFiIHRvIEVESVRcblxuLyogYWxsb3cgdGhlIGVkaXQgdG8gcHVsbCBkb3duIGEgbGlzdCB0aGF0LCB3aGVuIG9uZSBpcyBzZWxlY3RlZCxcbnB1bGxzIGJhY2sgZG93biB0aGUgZWRpdCBwYWdlIHRvIGNoYW5nZSB0aGUgaW5mbyAqL1xuXG5cbmxldCB0b0RvQXJyID0gW107XG5cblxuY2xhc3MgUHJvamVjdHMge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBjb250ZW50LCB0aW1lcikge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGUsXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMudGltZXIgPSB0aW1lcjtcbiAgICB9XG5cbiAgICB3cml0ZVRvUGFnZSgpIHtcblxuICAgICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSB0b0RvQXJyLmxlbmd0aCAtIDE7IGkgPCB0b0RvQXJyLmxlbmd0aDsgaSsrKSB7ICAgICBcbiAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChgcHJvamVjdCR7aSArIDF9YCk7XG4gICAgICAgICAgICBuZXdEaXYuaWQgPSBpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LmFkZCgncHJvamVjdEluZm8nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRvRG9BcnJbaV0udGl0bGU7XG4gICAgICAgICAgICB0cnVuY2F0ZVRleHQocHJvamVjdFRpdGxlLCBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQsIDE2KTtcbiAgICAgICAgICAgIHByb2plY3RJbmZvLmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHByb2plY3RDb250ZW50LnRleHRDb250ZW50ID0gdG9Eb0FycltpXS5jb250ZW50O1xuICAgICAgICAgICAgdHJ1bmNhdGVUZXh0KHByb2plY3RDb250ZW50LCBwcm9qZWN0Q29udGVudC50ZXh0Q29udGVudCwgMTYpO1xuICAgICAgICAgICAgcHJvamVjdEluZm8uYXBwZW5kKHByb2plY3RDb250ZW50KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGltZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aW1lQ29udGFpbmVyJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHRpbWVyIHN0dWZmXG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHRpbWVyUC5jbGFzc0xpc3QuYWRkKCd0aW1lclAnKTtcbiAgICAgICAgICAgIHRpbWVDb250YWluZXIuYXBwZW5kKHRpbWVyUCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50ZG93blRpbWVyKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldERhdGUgPSB0b0RvQXJyW2ldLnRpbWVyLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRvdmVyVGltZSA9ICh0YXJnZXREYXRlIC0gdG9kYXkpIC8gMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0b3ZlclRpbWUgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXJQLnRleHRDb250ZW50ID0gJ1RpbWVcXCdzIHVwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlOb3RpZmljYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihsZWZ0b3ZlclRpbWUgLyA2MCAvIDYwIC8gMjQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGxlZnRvdmVyVGltZSAvIDYwIC8gNjAgJSAyNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihsZWZ0b3ZlclRpbWUgLyA2MCAlIDYwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKGxlZnRvdmVyVGltZSAlIDYwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXJQLnRleHRDb250ZW50ID0gYCR7ZGF5c31kICR7aG91cnN9aCAke21pbnV0ZXN9bSAke3NlY29uZHN9c2A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb3VudGRvd25UaW1lcigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXInKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGVsZXRlUGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlUGFuZS5jbGFzc0xpc3QuYWRkKCdkZWxldGVQYW5lJyk7XG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGRlbGV0ZVBhbmUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtaW51c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIG1pbnVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgICAgICAgICBtaW51c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1taW51cycpO1xuICAgICAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtbWQnKTtcbiAgICAgICAgICAgIGRlbGV0ZVBhbmUuYXBwZW5kKG1pbnVzQnV0dG9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG4gICAgICAgICAgICBleHBhbmQudGV4dENvbnRlbnQgPSAnRXhwYW5kJztcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZXhwYW5kKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZChwcm9qZWN0SW5mbyk7XG4gICAgICAgICAgICBuZXdEaXYuYXBwZW5kKHRpbWVDb250YWluZXIpO1xuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZChidXR0b25Db250YWluZXIpO1xuICAgICAgICAgICAgcGFuZXMuYXBwZW5kKG5ld0Rpdik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTsgICBcbiAgICAgICAgICAgIGV4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW5ld0Rpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdG9Eb0FycltpXS50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRlbnQudGV4dENvbnRlbnQgPSB0b0RvQXJyW2ldLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBleHBhbmQudGV4dENvbnRlbnQgPSAnQ29udHJhY3QnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRydW5jYXRlVGV4dChwcm9qZWN0VGl0bGUsIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCwgMTYpO1xuICAgICAgICAgICAgICAgICAgICB0cnVuY2F0ZVRleHQocHJvamVjdENvbnRlbnQsIHByb2plY3RDb250ZW50LnRleHRDb250ZW50LCAxNik7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBleHBhbmQudGV4dENvbnRlbnQgPSAnRXhwYW5kJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBvcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1hdGlvbiA9IC0yNTtcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcGFjaXR5IDwgMSAmJiB0cmFuc2Zvcm1hdGlvbiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSA9IG9wYWNpdHkgKyAuMjA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uID0gdHJhbnNmb3JtYXRpb24gKyA1O1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDAsICR7dHJhbnNmb3JtYXRpb259cHgpYDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDE1KVxuICAgICAgICB9LCAzMDApXG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5sZXQgbm90aWZ5ID0gbmV3IEF1ZGlvKG5vdGlmaWNhdGlvbik7XG5cbmZ1bmN0aW9uIHBsYXlOb3RpZmljYXRpb24oKSB7XG4gICAgbm90aWZ5LnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9jdXNUaXRsZSgpIHtcbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRpdGxlLnJlbW92ZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XG4gICAgICAgICAgICB0aXRsZS5ibHVyKCk7XG4gICAgICAgICAgICBncmFiVGV4dFRpdGxlKCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZW1vdmVGb2N1c0NvbnRlbnQoKSB7XG4gICAgY3JlYXRpb25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNyZWF0aW9uQ29udGVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAgICAgY3JlYXRpb25Db250ZW50LmJsdXIoKTtcbiAgICAgICAgICAgIGdyYWJUZXh0Q29udGVudCgpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG5cbmZ1bmN0aW9uIHRpdGxlRWRpdCgpIHtcbiAgICB0aXRsZS50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRydWUpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGUuaW5uZXJUZXh0O1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgICB0ZXh0LnNldEJhc2VBbmRFeHRlbnQodGl0bGUuZmlyc3RDaGlsZCwgMCwgdGl0bGUubGFzdENoaWxkLCB0aXRsZS50ZXh0Q29udGVudC5sZW5ndGgpO1xuICAgIHJlbW92ZUZvY3VzVGl0bGUoKTtcbiAgICBjb21wbGV0ZVRpdGxlRWRpdCgpO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVRpdGxlRWRpdCgpIHtcbiAgICBlZGl0VGl0bGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aXRsZUVkaXQpO1xuICAgIGVkaXRUaXRsZS50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGVkaXRUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdyYWJUZXh0VGl0bGUpO1xufVxuXG5cbmZ1bmN0aW9uIGdyYWJUZXh0VGl0bGUoKSB7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZS5pbm5lclRleHQ7XG4gICAgdGl0bGUudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBmYWxzZSk7XG4gICAgZWRpdFRpdGxlLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIGVkaXRUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRpdGxlRWRpdCk7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRFZGl0KCkge1xuICAgIGNyZWF0aW9uQ29udGVudC50b2dnbGVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRydWUpO1xuICAgIGNyZWF0aW9uQ29udGVudC50ZXh0Q29udGVudCA9IGNyZWF0aW9uQ29udGVudC5pbm5lclRleHQ7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuICAgIHRleHQuc2V0QmFzZUFuZEV4dGVudChjcmVhdGlvbkNvbnRlbnQuZmlyc3RDaGlsZCwgMCwgY3JlYXRpb25Db250ZW50Lmxhc3RDaGlsZCwgY3JlYXRpb25Db250ZW50LnRleHRDb250ZW50Lmxlbmd0aCk7XG4gICAgcmVtb3ZlRm9jdXNDb250ZW50KGNyZWF0aW9uQ29udGVudCk7XG4gICAgY29tcGxldGVDb250ZW50RWRpdCgpO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZUNvbnRlbnRFZGl0KCkge1xuICAgIGVkaXRDb250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udGVudEVkaXQpO1xuICAgIGVkaXRDb250ZW50LnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgZWRpdENvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBncmFiVGV4dENvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBncmFiVGV4dENvbnRlbnQoKSB7XG4gICAgY3JlYXRpb25Db250ZW50LnRleHRDb250ZW50ID0gY3JlYXRpb25Db250ZW50LmlubmVyVGV4dDtcbiAgICBjcmVhdGlvbkNvbnRlbnQudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBmYWxzZSk7XG4gICAgZWRpdENvbnRlbnQudGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgZWRpdENvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250ZW50RWRpdCk7XG59XG5cbi8vIHRpbWVyIGVkaXQgZnVuY3Rpb25cblxuZnVuY3Rpb24gYWRkVG9TdG9yYWdlKGFycikge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFycikpO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVByb2plY3RzKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB1c2VyQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgICAgIGNvbnNvbGUudGFibGUodXNlckFyclswXSwgdXNlckFyclsxXSk7XG4gICAgICAgIHdyaXRlUmV0cmlldmFsRGF0YSh1c2VyQXJyKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbmxldCBuZXdEaXY7XG5cbmZ1bmN0aW9uIHdyaXRlUmV0cmlldmFsRGF0YShhcnIpIHtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyAgICAgXG4gICAgICAgICAgICBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChgcHJvamVjdCR7aSArIDF9YCk7XG4gICAgICAgICAgICBuZXdEaXYuaWQgPSBpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LmFkZCgncHJvamVjdEluZm8nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGFycltpXS50aXRsZTtcbiAgICAgICAgICAgIHRydW5jYXRlVGV4dChwcm9qZWN0VGl0bGUsIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCwgMTYpO1xuICAgICAgICAgICAgcHJvamVjdEluZm8uYXBwZW5kKHByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRlbnQudGV4dENvbnRlbnQgPSBhcnJbaV0uY29udGVudDtcbiAgICAgICAgICAgIHRydW5jYXRlVGV4dChwcm9qZWN0Q29udGVudCwgcHJvamVjdENvbnRlbnQudGV4dENvbnRlbnQsIDE2KTtcbiAgICAgICAgICAgIHByb2plY3RJbmZvLmFwcGVuZChwcm9qZWN0Q29udGVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGltZUNvbnRhaW5lcicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB0aW1lciBzdHVmZlxuXG4gICAgICAgICAgICBjb25zdCB0aW1lclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0aW1lclAuY2xhc3NMaXN0LmFkZCgndGltZXJQJyk7XG4gICAgICAgICAgICB0aW1lQ29udGFpbmVyLmFwcGVuZCh0aW1lclApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3VudGRvd25UaW1lcigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXREYXRlID0gbmV3IERhdGUoYXJyW2ldLnRpbWVyKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRvdmVyVGltZSA9ICh0YXJnZXREYXRlIC0gdG9kYXkpIC8gMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0b3ZlclRpbWUgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXJQLnRleHRDb250ZW50ID0gJ1RpbWVcXCdzIHVwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlOb3RpZmljYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihsZWZ0b3ZlclRpbWUgLyA2MCAvIDYwIC8gMjQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGxlZnRvdmVyVGltZSAvIDYwIC8gNjAgJSAyNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihsZWZ0b3ZlclRpbWUgLyA2MCAlIDYwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKGxlZnRvdmVyVGltZSAlIDYwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXJQLnRleHRDb250ZW50ID0gYCR7ZGF5c31kICR7aG91cnN9aCAke21pbnV0ZXN9bSAke3NlY29uZHN9c2A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb3VudGRvd25UaW1lcigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXInKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGVsZXRlUGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlUGFuZS5jbGFzc0xpc3QuYWRkKCdkZWxldGVQYW5lJyk7XG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGRlbGV0ZVBhbmUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtaW51c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIG1pbnVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgICAgICAgICBtaW51c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1taW51cycpO1xuICAgICAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtbWQnKTtcbiAgICAgICAgICAgIGRlbGV0ZVBhbmUuYXBwZW5kKG1pbnVzQnV0dG9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG4gICAgICAgICAgICBleHBhbmQudGV4dENvbnRlbnQgPSAnRXhwYW5kJztcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZXhwYW5kKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZChwcm9qZWN0SW5mbyk7XG4gICAgICAgICAgICBuZXdEaXYuYXBwZW5kKHRpbWVDb250YWluZXIpO1xuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZChidXR0b25Db250YWluZXIpO1xuICAgICAgICAgICAgcGFuZXMuYXBwZW5kKG5ld0Rpdik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTsgICBcbiAgICAgICAgICAgIGV4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW5ld0Rpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYXJyW2ldLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGVudC50ZXh0Q29udGVudCA9IGFycltpXS5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kLnRleHRDb250ZW50ID0gJ0NvbnRyYWN0JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cnVuY2F0ZVRleHQocHJvamVjdFRpdGxlLCBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQsIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgdHJ1bmNhdGVUZXh0KHByb2plY3RDb250ZW50LCBwcm9qZWN0Q29udGVudC50ZXh0Q29udGVudCwgMTYpO1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kLnRleHRDb250ZW50ID0gJ0V4cGFuZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgb3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBsZXQgdHJhbnNmb3JtYXRpb24gPSAtMjU7XG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3BhY2l0eSA8IDEgJiYgdHJhbnNmb3JtYXRpb24gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgPSBvcGFjaXR5ICsgLjIwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbiA9IHRyYW5zZm9ybWF0aW9uICsgNTtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwLCAke3RyYW5zZm9ybWF0aW9ufXB4KWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxNSlcbiAgICAgICAgfSwgMzAwKVxufVxuXG5cblxuXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGUgb2YgY2xpY2tlZCB0byBkbyBpdGVtJztcbiAgICBjcmVhdGlvbkNvbnRlbnQudGV4dENvbnRlbnQgPSAnTm90ZXMgdGhhdCB3aWxsIGFwcGVhciB3aGVuIGNyZWF0aW5nIHRvIGRvIGl0ZW0nO1xuICAgIHRpbWVyVmFsdWUudmFsdWUgPSAnJztcbn1cblxuLy8gc3RhcnQgaGVyZSB3aXRoIGNyZWF0aW5nIGEgdGltZXIgZGF0ZSBvYmplY3QgaW4gdGhpcyBjcmVhdGVQcm9qZWN0IGZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IHRpbWVyRGF0ZSA9IG5ldyBEYXRlKHRpbWVyVmFsdWUudmFsdWUpO1xuICAgIG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdHModGl0bGUudGV4dENvbnRlbnQsIGNyZWF0aW9uQ29udGVudC50ZXh0Q29udGVudCwgdGltZXJEYXRlKTtcbiAgICB0b0RvQXJyLnB1c2gobmV3UHJvamVjdCk7XG4gICAgYWRkVG9TdG9yYWdlKHRvRG9BcnIpO1xuICAgIGNvbnNvbGUubG9nKHRvRG9BcnIpO1xuICAgIG5ld1Byb2plY3Qud3JpdGVUb1BhZ2UoKTtcbiAgICByZXNldEZvcm0oKTtcbn1cblxuY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0KTtcblxuIFxuXG5leHBvcnQgeyB0aXRsZUVkaXQsIGNvbnRlbnRFZGl0LCBjcmVhdGVQcm9qZWN0LCBlZGl0VGl0bGUsIGVkaXRDb250ZW50LCBwcm9qZWN0cywgdG9Eb0FyciwgdGl0bGUsIGNyZWF0aW9uQ29udGVudCwgcGFuZXMsIGVsZW1lbnRzLCB0aW1lclZhbHVlLCBub3RpZnksIHBsYXlOb3RpZmljYXRpb24sIHJldHJpZXZlUHJvamVjdHMgfVxuXG4iLCJjb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFRpbWVyJyk7XG5jb25zdCBlZGl0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Q29udGVudCcpO1xuY29uc3QgcGx1c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29ucyA+IGk6Zmlyc3QtY2hpbGQnKTtcbmNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlJyk7XG5jb25zdCBhcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdycpO1xuXG5sZXQgdHJhbnNmb3JtYXRpb24gPSAtMTEwMDtcblxuLyogQ2hhbmdlIHNsaWRlSW4gYW5kIHNsaWRlT3V0IHBhZ2UgdG8gYmUgYSBmb3JtIHRoYXQgZmFkZXMgaW4gaW5zdGVhZCBvZiBhbiBlbnRpcmVcbnBhZ2UgdGhhdCBzbGlkZXMgZG93biBhbmQgdXAgKi9cblxuZnVuY3Rpb24gc2xpZGVJblBhZ2UoKSB7XG4gICAgY29uc3QgdG9Eb0NvbnRlbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb0NvbnRlbnQnKTtcbiAgICBsZXQgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKHRyYW5zZm9ybWF0aW9uIDwgMCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtYXRpb24gPSB0cmFuc2Zvcm1hdGlvbiArIDEwO1xuICAgICAgICAgICAgdG9Eb0NvbnRlbnRCb3guc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwLCAke3RyYW5zZm9ybWF0aW9ufXB4KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICB9XG4gICAgfSwgMC41KVxufVxuXG5mdW5jdGlvbiBzbGlkZU91dFBhZ2UoKSB7XG4gICAgY29uc3QgdG9Eb0NvbnRlbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb0NvbnRlbnQnKTtcbiAgICBsZXQgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKHRyYW5zZm9ybWF0aW9uID4gLTExMDApIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uID0gdHJhbnNmb3JtYXRpb24gLSAxMDtcbiAgICAgICAgICAgIHRvRG9Db250ZW50Qm94LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMCwgJHt0cmFuc2Zvcm1hdGlvbn1weClgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgfVxuICAgIH0sIDAuNSlcbn1cblxuZXhwb3J0IHsgcGx1c0J1dHRvbiwgY29tcGxldGUsIGFycm93LCBzbGlkZUluUGFnZSwgc2xpZGVPdXRQYWdlIH07IiwiXG5mdW5jdGlvbiB0cnVuY2F0ZVRleHQoZWxlLCBzdHIsIG51bSkge1xuICAgIGlmIChzdHIubGVuZ3RoIDw9IG51bSkge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlLmlubmVyVGV4dCA9IHN0ci5zbGljZSgwLCBudW0pICsgJy4uLi4nO1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IHRydW5jYXRlVGV4dH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBDaGFuZ2UgdGhlICdub3RpZmljYXRpb24gdGltZXInIHAgZWxlbWVudCB0byBhbiBpbnB1dDpkYXRldGltZS1sb2NhbCBlbGVtZW50XG5cbi8qIEdldCByaWQgb2YgYWxsIG9mIHRoZSBsb2dpYyBkZWFsaW5nIHdpdGggdGhlIG5vdGlmaWNhdGlvbiB0aW1lciBlbGVtZW50IGFuZCBoYXZlXG5pdCByZXBsYWNlZCB3aXRoIGxvZ2ljIHRoYXQgZGVhbHMgd2l0aCB0aGUgaW5wdXQuIFRoZSBjb21wbGV0ZSBidXR0b24gd2lsbCBzdWJtaXQgdGhlIFxuZGF0YSB0aGF0IEkgbmVlZCBmb3IgaXQuIFVzZSBDVFJMICsgRiB0byBmaW5kIGFsbCBvZiB0aGUgbG9naWMgdGhhdCBkZWFscyB3aXRoICd0aW1lcidcbiAqL1xuXG4vLyBsZWFybiBtb3JlIGFib3V0IGRhdGUtZm5zIHRvbW9ycm93IGFzIHdlbGxcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBpY29ucywgYWRkQmVhdCwgcmVtb3ZlQmVhdCB9IGZyb20gJy4vbW9kdWxlcy9iZWF0JztcbmltcG9ydCB7IHBsdXNCdXR0b24sIGFycm93LCBzbGlkZU91dFBhZ2UsIGNvbXBsZXRlLCBzbGlkZUluUGFnZSB9IGZyb20gJy4vbW9kdWxlcy9zZXQnO1xuaW1wb3J0IHsgdG9Eb0FyciwgdGl0bGVFZGl0LCBlZGl0VGl0bGUsIGNvbnRlbnRFZGl0LCBlZGl0Q29udGVudCwgcHJvamVjdHMsIHJldHJpZXZlUHJvamVjdHMgfSBmcm9tICcuL21vZHVsZXMvZWRpdCc7XG5pbXBvcnQgeyBlZGl0UGFuZSB9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2UnO1xuaW1wb3J0IHsgZGVsZXRlVG9EbyB9IGZyb20gJy4vbW9kdWxlcy9kZWxldGUnO1xuXG53aW5kb3cub25sb2FkID0gcmV0cmlldmVQcm9qZWN0cygpO1xuXG4vLyBsb2dpYyBmb3IgcHVsc2luZyB0aGUgaWNvbnMgaW4gdGhlIG5hdmJhclxuYWRkQmVhdCgpO1xucmVtb3ZlQmVhdCgpO1xuXG5cbnBsdXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzbGlkZUluUGFnZSk7XG5jb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNsaWRlT3V0UGFnZSk7XG5hcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNsaWRlT3V0UGFnZSk7XG5lZGl0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aXRsZUVkaXQpO1xuZWRpdENvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250ZW50RWRpdCk7XG5lZGl0UGFuZSgpO1xuZGVsZXRlVG9Ebyh0b0RvQXJyKTtcblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9