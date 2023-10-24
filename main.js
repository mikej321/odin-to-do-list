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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./AlegreyaSCRegular.ttf */ "./src/AlegreyaSCRegular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./AlegreyaSCMedium.ttf */ "./src/AlegreyaSCMedium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./AlegreyaSCBold.ttf */ "./src/AlegreyaSCBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./Quicksand.ttf */ "./src/Quicksand.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Default Styling */

@font-face {
    font-family: 'Alegreya Regular';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Medium';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Bold';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'Quicksand Normal';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Quicksand Bold';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    font-weight: 700;
    font-style: normal;
}

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
    font-family: 'Quicksand Normal';
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

/*  */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Default Styling */\n\n@font-face {\n    font-family: 'Alegreya Regular';\n    src: url('./AlegreyaSCRegular.ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Alegreya Medium';\n    src: url('./AlegreyaSCMedium.ttf');\n    font-weight: 500;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Alegreya Bold';\n    src: url('./AlegreyaSCBold.ttf');\n    font-weight: 700;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Quicksand Normal';\n    src: url('./Quicksand.ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Quicksand Bold';\n    src: url('./Quicksand.ttf');\n    font-weight: 700;\n    font-style: normal;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    scroll-behavior: smooth;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    font-size: 1.6rem;\n    font-family: 'Quicksand Normal';\n}\n\n.content {\n    display: flex;\n    justify-content: center;\n    \n}\n\nmain {\n    position: relative;\n    display: grid;\n    width: 100%;\n    max-width: 375px;\n    border-radius: 8px;\n    grid-template-rows: 4rem 1fr;\n    grid-template-areas: \"nav\"\n                         \"content\"\n                         \"panes\";\n    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);\n}\n\n.navbar {\n    grid-area: nav;\n    display: flex;\n    justify-content: space-between;\n    padding-inline: 1rem;\n    align-items: center;\n    background: gray;\n}\n\n.navbar h2 {\n    font-size: 1.8rem;\n}\n\n.icons {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 15rem;\n    justify-content: space-around;\n}\n\ni {\n    cursor: pointer;\n}\n\na {\n    font-size: 1.2rem;\n    text-decoration: none;\n    color: black;\n}\n\n.toDoContent {\n    position: absolute;\n    left: 0;\n    top: 0;\n    grid-area: content;\n    display: flex;\n    flex-direction: column;\n    gap: 10rem;\n    padding: 4rem 2rem;\n    background: skyblue;\n    width: 100%;\n    transform: translate(0, -1100px);\n    z-index: 1;\n}\n\n.arrow {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 0;\n    right: 0;\n    top: 50px;\n    margin: 0 auto;\n    border-top: 25px solid red;\n    border-left: 25px solid transparent;\n    border-right: 25px solid transparent;\n    cursor: pointer;\n    transition: border-top 0.1s ease-in-out,\n                rotate 0.4s ease-in-out;\n            }\n            \n.arrow:hover {\n    border-top: 25px solid green;\n    rotate: 180deg;\n}\n            \n            \n.topSection,\n.middleSection,\n.finalSection {\n    display: flex;\n    align-items: center;\n}\n\n.topSection {\n    gap: 3rem;\n    margin-top: 5rem;\n}\n\n\n.topSection h1 {\n    font-size: 1.7rem;\n}\n\n.middleSection {\n    gap: 2rem;\n}\n\n.middleSection p {\n    line-height: 3rem;\n}\n\n.middleSection p,\n.finalSection p {\n    font-size: 1.4rem;\n}\n\n.finalSection {\n    display: flex;\n}\n\n.finalSection label {\n    font-size: 1.5rem;\n}\n\n\n.inputContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2rem;\n    width: 100%;\n    align-items: center;\n}\n\n.datetime-wrapper {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n\n.datetime-wrapper input {\n    padding: 1rem;\n    border-radius: 8px;\n    width: 100%;\n    max-width: 30rem;\n    border: none;\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);\n    font-size: 1.6rem;\n}\n\n\n.complete {\n    align-self: center;\n    width: 100%;\n    max-width: 10rem;\n    height: 5rem;\n    background-color: green;\n    border: none;\n    border-radius: 8px;\n    color: white;\n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n}\n\n.complete:hover {\n    font-weight: bold;\n    scale: 1.1;\n}\n\n.edit {\n    width: 100%;\n    max-width: 5rem;\n    height: 3rem;\n    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);\n    transition: scale 0.2s ease-in-out;\n    cursor: pointer;\n}\n\n.edit:hover {\n    scale: 1.1;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);\n}\n\n.toDoPanes {\n    grid-area: panes;\n    display: grid;\n    justify-content: center;\n}\n\n.project {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 2rem;\n    margin: 2rem;\n    padding: 2rem;\n    width: 100%;\n    max-width: 34rem;\n    border-radius: 6px;\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);\n    /* transform: translate(0, -25px);\n    opacity: 0; */\n    cursor: pointer;\n    transition: background-color 0.25s linear;\n}\n\n.project:hover {\n    background-color: lightseagreen;\n    color: white;\n}\n\n.projectInfo {\n    flex-basis: 50%;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    pointer-events: none;\n}\n\n.timeContainer {\n    flex-basis: 20%;\n    pointer-events: none;\n}\n\n.projectInfo h3 {\n    font-size: 1.6rem;\n}\n\n.projectInfo p {\n    font-size: 1.2rem;\n}\n\n.timeContainer p {\n\n    font-size: 1.2rem;\n}\n\n.buttonContainer {\n    flex-basis: 30%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.5rem;\n}\n\n.deletePane {\n    width: 7rem;\n    height: 3rem;\n    transition: all 0.2s ease-in-out;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n}\n\n.deletePane:hover {\n    background-color: red;\n    color: white;\n    scale: 1.1;\n    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);\n}\n\n.deletePane i {\n    pointer-events: none;\n}\n\n\n\n.expand {\n    cursor: pointer;\n    width: 7rem;\n    height: 3rem;\n    border-radius: 6px;\n    border: none;\n    transition: all 0.2s ease-in-out;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n}\n\n.expand:hover {\n    background-color: greenyellow;\n    scale: 1.1;\n    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);\n}\n\n\n\n\n\n@media screen and (min-width: 600px) {\n    \n    main {\n        display: grid;\n        width: 100%;\n        max-width: 1440px;\n        grid-template-columns: 14rem 1fr;\n        grid-template-rows: 7rem 1fr;\n        grid-template-areas: \"nav nav\"\n        \"content content\"\n        \"panes panes\";\n        transition: grid-template-columns 0.5s ease-in-out;\n    }\n    \n    .project {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 2rem;\n        \n    }\n\n    .projectInfo {\n        align-items: center;\n        text-align: center;\n    }\n    \n\n\n    /* change projects transition to focus on main page instead of sidebar */\n    \n    .navbar {\n        grid-area: nav;\n        display: flex;\n        justify-content: space-between;\n        padding-inline: 1rem;\n        align-items: center;\n        background: gray;\n    }\n    \n    .icons {\n        display: flex;\n        align-items: center;\n        width: 100%;\n        max-width: 25rem;\n        justify-content: space-around;\n    }\n    \n    .toDoContent {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100vh;\n        grid-area: content;\n        background: skyblue;\n        display: flex;\n        flex-direction: column;\n        padding: 10rem 5rem;\n        gap: 5rem;\n    }\n    \n    .topSection {\n    \n    }\n    \n    .middleSection {\n        \n    }\n    \n    .finalSection {\n    \n    }\n    \n    .topSection,\n    .middleSection,\n    .finalSection {\n        display: flex;\n        gap: 3rem;\n        align-items: center;\n    }\n    \n    .middleSection,\n    .finalSection {\n        margin-left: 5rem;\n    }\n\n    .finalSection label {\n\n    }\n\n    .inputContainer {\n        flex-direction: row;\n        justify-content: flex-start;\n        gap: 5rem;\n    }\n\n    .datetime-wrapper {\n        max-width: 30rem;\n    }\n\n    .datetime-wrapper input {\n\n    }\n    \n    .edit {\n        width: 100%;\n        max-width: 7rem;\n        height: 3rem;\n    }\n\n    .editTimer {\n\n    }\n\n    .toDoPanes {\n        grid-template-columns: repeat(4, minmax(150px, 335px));\n        gap: 2rem;\n        justify-items: center;\n    }\n\n}\n\n/*  */"],"sourceRoot":""}]);
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
            const localArr = JSON.parse(localStorage.getItem('projects'));
            localArr.splice(deleteEvent.parentElement.parentElement.id, 1);
            localStorage.setItem('projects', JSON.stringify(localArr));
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

_set__WEBPACK_IMPORTED_MODULE_1__.complete.addEventListener('click', (event) => {
    try {
        event.preventDefault();
        if (timerValue.value === '') {
            throw new Error('Please enter a date');
            return;
        } else {
            createProject();
        }
    } catch(error) {
        console.log(error);
    }
});

 





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





/***/ }),

/***/ "./src/AlegreyaSCBold.ttf":
/*!********************************!*\
  !*** ./src/AlegreyaSCBold.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f220b52f43e80d3c03f.ttf";

/***/ }),

/***/ "./src/AlegreyaSCMedium.ttf":
/*!**********************************!*\
  !*** ./src/AlegreyaSCMedium.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f7ae3d8836802392539.ttf";

/***/ }),

/***/ "./src/AlegreyaSCRegular.ttf":
/*!***********************************!*\
  !*** ./src/AlegreyaSCRegular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "761091f774afb47e7c21.ttf";

/***/ }),

/***/ "./src/Quicksand.ttf":
/*!***************************!*\
  !*** ./src/Quicksand.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b964ff93d9cb23e7f4c0.ttf";

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








if (JSON.parse(localStorage.getItem('projects')).length > 0) {
    window.onload = (0,_modules_edit__WEBPACK_IMPORTED_MODULE_3__.retrieveProjects)();
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw0Q0FBNEMseUhBQXlDO0FBQ3JGLDRDQUE0QyxxSEFBdUM7QUFDbkYsNENBQTRDLDJHQUFrQztBQUM5RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGFBQWEsd0ZBQXdGLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9B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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFcUI7QUFDdUM7QUFDMkI7QUFDOEI7QUFDekU7QUFDRTs7QUFFOUM7QUFDQSxvQkFBb0IsK0RBQWdCO0FBQ3BDOztBQUVBO0FBQ0Esc0RBQU87QUFDUCx5REFBVTs7O0FBR1Ysb0RBQVUsMkJBQTJCLHFEQUFXO0FBQ2hELGtEQUFRLDJCQUEyQixzREFBWTtBQUMvQywrQ0FBSywyQkFBMkIsc0RBQVk7QUFDNUMsb0RBQVMsMkJBQTJCLG9EQUFTO0FBQzdDLHNEQUFXLDJCQUEyQixzREFBVztBQUNqRCx5REFBUTtBQUNSLDJEQUFVLENBQUMsa0RBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbm90aWZpY2F0aW9uLm1wMyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9iZWF0LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NoYW5nZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZWRpdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zZXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdHJ1bmNhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQWxlZ3JleWFTQ1JlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9BbGVncmV5YVNDTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vQWxlZ3JleWFTQ0JvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9RdWlja3NhbmQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBEZWZhdWx0IFN0eWxpbmcgKi9cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBSZWd1bGFyJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBNZWRpdW0nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhIEJvbGQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCBOb3JtYWwnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCBCb2xkJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQgTm9ybWFsJztcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG59XG5cbm1haW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJuYXZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJwYW5lc1wiO1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLm5hdmJhciB7XG4gICAgZ3JpZC1hcmVhOiBuYXY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xufVxuXG4ubmF2YmFyIGgyIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4udG9Eb0NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTByZW07XG4gICAgcGFkZGluZzogNHJlbSAycmVtO1xuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTExMDBweCk7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmFycm93IHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci10b3A6IDI1cHggc29saWQgcmVkO1xuICAgIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLXRvcCAwLjFzIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgIHJvdGF0ZSAwLjRzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4uYXJyb3c6aG92ZXIge1xuICAgIGJvcmRlci10b3A6IDI1cHggc29saWQgZ3JlZW47XG4gICAgcm90YXRlOiAxODBkZWc7XG59XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuLnRvcFNlY3Rpb24sXG4ubWlkZGxlU2VjdGlvbixcbi5maW5hbFNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvcFNlY3Rpb24ge1xuICAgIGdhcDogM3JlbTtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xufVxuXG5cbi50b3BTZWN0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbn1cblxuLm1pZGRsZVNlY3Rpb24ge1xuICAgIGdhcDogMnJlbTtcbn1cblxuLm1pZGRsZVNlY3Rpb24gcCB7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG59XG5cbi5taWRkbGVTZWN0aW9uIHAsXG4uZmluYWxTZWN0aW9uIHAge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uZmluYWxTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmluYWxTZWN0aW9uIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuXG4uaW5wdXRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRhdGV0aW1lLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kYXRldGltZS13cmFwcGVyIGlucHV0IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cblxuLmNvbXBsZXRlIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tcGxldGU6aG92ZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHNjYWxlOiAxLjE7XG59XG5cbi5lZGl0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDVyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVkaXQ6aG92ZXIge1xuICAgIHNjYWxlOiAxLjE7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4udG9Eb1BhbmVzIHtcbiAgICBncmlkLWFyZWE6IHBhbmVzO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNXB4KTtcbiAgICBvcGFjaXR5OiAwOyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGxpbmVhcjtcbn1cblxuLnByb2plY3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvamVjdEluZm8ge1xuICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udGltZUNvbnRhaW5lciB7XG4gICAgZmxleC1iYXNpczogMjAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ucHJvamVjdEluZm8gaDMge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4ucHJvamVjdEluZm8gcCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi50aW1lQ29udGFpbmVyIHAge1xuXG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5idXR0b25Db250YWluZXIge1xuICAgIGZsZXgtYmFzaXM6IDMwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEuNXJlbTtcbn1cblxuLmRlbGV0ZVBhbmUge1xuICAgIHdpZHRoOiA3cmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uZGVsZXRlUGFuZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBzY2FsZTogMS4xO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuLmRlbGV0ZVBhbmUgaSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cblxuXG4uZXhwYW5kIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDdyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmV4cGFuZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG4gICAgc2NhbGU6IDEuMTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cblxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICBcbiAgICBtYWluIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTQ0MHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE0cmVtIDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3cmVtIDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJuYXYgbmF2XCJcbiAgICAgICAgXCJjb250ZW50IGNvbnRlbnRcIlxuICAgICAgICBcInBhbmVzIHBhbmVzXCI7XG4gICAgICAgIHRyYW5zaXRpb246IGdyaWQtdGVtcGxhdGUtY29sdW1ucyAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgICBcbiAgICAucHJvamVjdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMnJlbTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLnByb2plY3RJbmZvIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcblxuXG4gICAgLyogY2hhbmdlIHByb2plY3RzIHRyYW5zaXRpb24gdG8gZm9jdXMgb24gbWFpbiBwYWdlIGluc3RlYWQgb2Ygc2lkZWJhciAqL1xuICAgIFxuICAgIC5uYXZiYXIge1xuICAgICAgICBncmlkLWFyZWE6IG5hdjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICB9XG4gICAgXG4gICAgLmljb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMjVyZW07XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbiAgICBcbiAgICAudG9Eb0NvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIGdyaWQtYXJlYTogY29udGVudDtcbiAgICAgICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMTByZW0gNXJlbTtcbiAgICAgICAgZ2FwOiA1cmVtO1xuICAgIH1cbiAgICBcbiAgICAudG9wU2VjdGlvbiB7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIC5taWRkbGVTZWN0aW9uIHtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC5maW5hbFNlY3Rpb24ge1xuICAgIFxuICAgIH1cbiAgICBcbiAgICAudG9wU2VjdGlvbixcbiAgICAubWlkZGxlU2VjdGlvbixcbiAgICAuZmluYWxTZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAzcmVtO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAubWlkZGxlU2VjdGlvbixcbiAgICAuZmluYWxTZWN0aW9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVyZW07XG4gICAgfVxuXG4gICAgLmZpbmFsU2VjdGlvbiBsYWJlbCB7XG5cbiAgICB9XG5cbiAgICAuaW5wdXRDb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGdhcDogNXJlbTtcbiAgICB9XG5cbiAgICAuZGF0ZXRpbWUtd3JhcHBlciB7XG4gICAgICAgIG1heC13aWR0aDogMzByZW07XG4gICAgfVxuXG4gICAgLmRhdGV0aW1lLXdyYXBwZXIgaW5wdXQge1xuXG4gICAgfVxuICAgIFxuICAgIC5lZGl0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogN3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgIH1cblxuICAgIC5lZGl0VGltZXIge1xuXG4gICAgfVxuXG4gICAgLnRvRG9QYW5lcyB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgxNTBweCwgMzM1cHgpKTtcbiAgICAgICAgZ2FwOiAycmVtO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG59XG5cbi8qICAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQkFBb0I7O0FBRXBCO0lBQ0ksK0JBQStCO0lBQy9CLDRDQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDRDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDRDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDRDQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDRDQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxzQkFBc0I7QUFDMUI7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akM7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLE1BQU07UUFDTixXQUFXO1FBQ1gsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUztJQUNiOztJQUVBOztJQUVBOztJQUVBOztJQUVBOztJQUVBOztJQUVBOztJQUVBOzs7UUFHSSxhQUFhO1FBQ2IsU0FBUztRQUNULG1CQUFtQjtJQUN2Qjs7SUFFQTs7UUFFSSxpQkFBaUI7SUFDckI7O0lBRUE7O0lBRUE7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTs7SUFFQTs7SUFFQTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YsWUFBWTtJQUNoQjs7SUFFQTs7SUFFQTs7SUFFQTtRQUNJLHNEQUFzRDtRQUN0RCxTQUFTO1FBQ1QscUJBQXFCO0lBQ3pCOztBQUVKOztBQUVBLEtBQUtcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRGVmYXVsdCBTdHlsaW5nICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgUmVndWxhcic7XFxuICAgIHNyYzogdXJsKCcuL0FsZWdyZXlhU0NSZWd1bGFyLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhIE1lZGl1bSc7XFxuICAgIHNyYzogdXJsKCcuL0FsZWdyZXlhU0NNZWRpdW0udHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgQm9sZCc7XFxuICAgIHNyYzogdXJsKCcuL0FsZWdyZXlhU0NCb2xkLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCBOb3JtYWwnO1xcbiAgICBzcmM6IHVybCgnLi9RdWlja3NhbmQudHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kIEJvbGQnO1xcbiAgICBzcmM6IHVybCgnLi9RdWlja3NhbmQudHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQgTm9ybWFsJztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbm1haW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDM3NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJuYXZcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJjb250ZW50XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwicGFuZXNcXFwiO1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXG59XFxuXFxuLm5hdmJhciBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uaWNvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbmkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmEge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50b0RvQ29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTByZW07XFxuICAgIHBhZGRpbmc6IDRyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMTAwcHgpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCByZWQ7XFxuICAgIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLXRvcCAwLjFzIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgICByb3RhdGUgMC40cyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuLmFycm93OmhvdmVyIHtcXG4gICAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCBncmVlbjtcXG4gICAgcm90YXRlOiAxODBkZWc7XFxufVxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbi50b3BTZWN0aW9uLFxcbi5taWRkbGVTZWN0aW9uLFxcbi5maW5hbFNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9wU2VjdGlvbiB7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuXFxuXFxuLnRvcFNlY3Rpb24gaDEge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLm1pZGRsZVNlY3Rpb24ge1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5taWRkbGVTZWN0aW9uIHAge1xcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXG59XFxuXFxuLm1pZGRsZVNlY3Rpb24gcCxcXG4uZmluYWxTZWN0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLmZpbmFsU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5maW5hbFNlY3Rpb24gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuXFxuLmlucHV0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXRldGltZS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZXRpbWUtd3JhcHBlciBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMzByZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuXFxuLmNvbXBsZXRlIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlOmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHNjYWxlOiAxLjE7XFxufVxcblxcbi5lZGl0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIHRyYW5zaXRpb246IHNjYWxlIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVkaXQ6aG92ZXIge1xcbiAgICBzY2FsZTogMS4xO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi50b0RvUGFuZXMge1xcbiAgICBncmlkLWFyZWE6IHBhbmVzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMzRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjVweCk7XFxuICAgIG9wYWNpdHk6IDA7ICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBsaW5lYXI7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdEluZm8ge1xcbiAgICBmbGV4LWJhc2lzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50aW1lQ29udGFpbmVyIHtcXG4gICAgZmxleC1iYXNpczogMjAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnByb2plY3RJbmZvIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5wcm9qZWN0SW5mbyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50aW1lQ29udGFpbmVyIHAge1xcblxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGZsZXgtYmFzaXM6IDMwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5kZWxldGVQYW5lIHtcXG4gICAgd2lkdGg6IDdyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5kZWxldGVQYW5lOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHNjYWxlOiAxLjE7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxuLmRlbGV0ZVBhbmUgaSB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5cXG5cXG4uZXhwYW5kIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogN3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5leHBhbmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG4gICAgc2NhbGU6IDEuMTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICBcXG4gICAgbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTRyZW0gMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3cmVtIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJuYXYgbmF2XFxcIlxcbiAgICAgICAgXFxcImNvbnRlbnQgY29udGVudFxcXCJcXG4gICAgICAgIFxcXCJwYW5lcyBwYW5lc1xcXCI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLWNvbHVtbnMgMC41cyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnByb2plY3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RJbmZvIHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgXFxuXFxuXFxuICAgIC8qIGNoYW5nZSBwcm9qZWN0cyB0cmFuc2l0aW9uIHRvIGZvY3VzIG9uIG1haW4gcGFnZSBpbnN0ZWFkIG9mIHNpZGViYXIgKi9cXG4gICAgXFxuICAgIC5uYXZiYXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmljb25zIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIH1cXG4gICAgXFxuICAgIC50b0RvQ29udGVudCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbiAgICAgICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcGFkZGluZzogMTByZW0gNXJlbTtcXG4gICAgICAgIGdhcDogNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRvcFNlY3Rpb24ge1xcbiAgICBcXG4gICAgfVxcbiAgICBcXG4gICAgLm1pZGRsZVNlY3Rpb24ge1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgXFxuICAgIC5maW5hbFNlY3Rpb24ge1xcbiAgICBcXG4gICAgfVxcbiAgICBcXG4gICAgLnRvcFNlY3Rpb24sXFxuICAgIC5taWRkbGVTZWN0aW9uLFxcbiAgICAuZmluYWxTZWN0aW9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDNyZW07XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWlkZGxlU2VjdGlvbixcXG4gICAgLmZpbmFsU2VjdGlvbiB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNXJlbTtcXG4gICAgfVxcblxcbiAgICAuZmluYWxTZWN0aW9uIGxhYmVsIHtcXG5cXG4gICAgfVxcblxcbiAgICAuaW5wdXRDb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGdhcDogNXJlbTtcXG4gICAgfVxcblxcbiAgICAuZGF0ZXRpbWUtd3JhcHBlciB7XFxuICAgICAgICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgICB9XFxuXFxuICAgIC5kYXRldGltZS13cmFwcGVyIGlucHV0IHtcXG5cXG4gICAgfVxcbiAgICBcXG4gICAgLmVkaXQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDdyZW07XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgIH1cXG5cXG4gICAgLmVkaXRUaW1lciB7XFxuXFxuICAgIH1cXG5cXG4gICAgLnRvRG9QYW5lcyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMTUwcHgsIDMzNXB4KSk7XFxuICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG59XFxuXFxuLyogICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY4YmFjZGZkYmY2ZjdlMzRmY2Q2Nzk3YjBhMWFjYTc0Lm1wM1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5cbmNvbnN0IGFkZEJlYXQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChldmVudCkgPT4ge1xuICAgIGxldCBpY29uRXZlbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGljb25FdmVudC50YWdOYW1lID09PSAnSScgJiYgaWNvbkV2ZW50LmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kJykpIHtcbiAgICAgIGljb25FdmVudC5jbGFzc0xpc3QuYWRkKCdmYS1iZWF0Jyk7XG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChldmVudCkgPT4ge1xuICAgIGxldCBpY29uRXZlbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGljb25FdmVudC50YWdOYW1lID09PSAnSScgJiYgaWNvbkV2ZW50LmNsYXNzTGlzdC5jb250YWlucygnZmEtcGx1cycpKSB7XG4gICAgICBpY29uRXZlbnQuY2xhc3NMaXN0LmFkZCgnZmEtYmVhdCcpO1xuICAgIH0gXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgbGV0IGljb25FdmVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoaWNvbkV2ZW50LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlUGFuZScpKSB7XG4gICAgICBpY29uRXZlbnQuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdmYS1iZWF0Jyk7XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCByZW1vdmVCZWF0ID0gKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChldmVudCkgPT4ge1xuICAgIGxldCBpY29uRXZlbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGljb25FdmVudC50YWdOYW1lID09PSAnSScgJiYgaWNvbkV2ZW50LmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kJykpIHtcbiAgICAgIGljb25FdmVudC5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iZWF0Jyk7XG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGV2ZW50KSA9PiB7XG4gICAgbGV0IGljb25FdmVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoaWNvbkV2ZW50LnRhZ05hbWUgPT09ICdJJyAmJiBpY29uRXZlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1wbHVzJykpIHtcbiAgICAgIGljb25FdmVudC5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iZWF0Jyk7XG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGV2ZW50KSA9PiB7XG4gICAgbGV0IGljb25FdmVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoaWNvbkV2ZW50LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlUGFuZScpKSB7XG4gICAgICBpY29uRXZlbnQuZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iZWF0Jyk7XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgeyBhZGRCZWF0LCByZW1vdmVCZWF0IH07XG4iLCJpbXBvcnQgeyBjb21wbGV0ZSwgc2xpZGVJblBhZ2UsIHNsaWRlT3V0UGFnZSB9IGZyb20gJy4vc2V0JztcbmltcG9ydCB7IHByb2plY3RzLCB0b0RvQXJyLCB0aXRsZSwgY3JlYXRpb25Db250ZW50LCBwYW5lcywgZWxlbWVudHMsIGNyZWF0ZVByb2plY3QsIHRpbWVyVmFsdWUsIG5vdGlmeSwgcGxheU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgeyB0cnVuY2F0ZVRleHQgfSBmcm9tICcuL3RydW5jYXRlJztcblxuXG5mdW5jdGlvbiBlZGl0UGFuZSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBsZXQgdGFyRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRhckVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0JykpIHtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9Eb0Fyclt0YXJFbGVtZW50LmlkXS50aXRsZTtcbiAgICAgICAgICAgIGNyZWF0aW9uQ29udGVudC50ZXh0Q29udGVudCA9IHRvRG9BcnJbdGFyRWxlbWVudC5pZF0uY29udGVudDtcbiAgICAgICAgICAgIHRpbWVyVmFsdWUudmFsdWUgPSBuZXcgRGF0ZSh0b0RvQXJyW3RhckVsZW1lbnQuaWRdLnRpbWVyLmdldFRpbWUoKSAtIHRvRG9BcnJbdGFyRWxlbWVudC5pZF0udGltZXIuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIHNsaWRlSW5QYWdlKCk7XG4gICAgICAgICAgICBjb21wbGV0ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVByb2plY3QpO1xuICAgICAgICAgICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBjaGFuZ2VQYW5lKCkge1xuICAgICAgICAgICAgICAgIHRvRG9BcnJbdGFyRWxlbWVudC5pZF0udGl0bGUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB0b0RvQXJyW3RhckVsZW1lbnQuaWRdLmNvbnRlbnQgPSBjcmVhdGlvbkNvbnRlbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgdG9Eb0Fyclt0YXJFbGVtZW50LmlkXS50aW1lciA9IG5ldyBEYXRlKHRpbWVyVmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIHNsaWRlT3V0UGFnZSgpO1xuICAgICAgICAgICAgICAgIHJld3JpdGVUb1BhZ2UodG9Eb0Fycik7XG4gICAgICAgICAgICAgICAgcmV2ZXJzZUVkaXRQYWdlKCk7XG4gICAgICAgICAgICAgICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVBhbmUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuXG5sZXQgbmV3RWxlbWVudHM7XG5cbmZ1bmN0aW9uIHJldmVyc2VFZGl0UGFnZShkYXRlKSB7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGUgb2YgY2xpY2tlZCB0byBkbyBpdGVtJztcbiAgICBjcmVhdGlvbkNvbnRlbnQudGV4dENvbnRlbnQgPSAnTm90ZXMgdGhhdCB3aWxsIGFwcGVhciB3aGVuIGNyZWF0aW5nIHRvIGRvIGl0ZW0nO1xuICAgIFxufVxuXG5mdW5jdGlvbiByZXdyaXRlVG9QYWdlKGFycikge1xuICAgIHdoaWxlIChwYW5lcy5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhbmVzLnJlbW92ZUNoaWxkKHBhbmVzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9BcnIubGVuZ3RoOyBpKyspIHsgICAgIFxuICAgICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoYHByb2plY3Qke2kgKyAxfWApO1xuICAgICAgICBuZXdEaXYuaWQgPSBpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LmFkZCgncHJvamVjdEluZm8nKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGFycltpXS50aXRsZTtcbiAgICAgICAgdHJ1bmNhdGVUZXh0KHByb2plY3RUaXRsZSwgcHJvamVjdFRpdGxlLnRleHRDb250ZW50LCAxNik7XG4gICAgICAgIHByb2plY3RJbmZvLmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3RDb250ZW50LnRleHRDb250ZW50ID0gYXJyW2ldLmNvbnRlbnQ7XG4gICAgICAgIHRydW5jYXRlVGV4dChwcm9qZWN0Q29udGVudCwgcHJvamVjdENvbnRlbnQudGV4dENvbnRlbnQsIDE2KTtcbiAgICAgICAgcHJvamVjdEluZm8uYXBwZW5kKHByb2plY3RDb250ZW50KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aW1lQ29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aW1lclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpbWVyUC5jbGFzc0xpc3QuYWRkKCd0aW1lclAnKTtcbiAgICAgICAgdGltZUNvbnRhaW5lci5hcHBlbmQodGltZXJQKTtcblxuICAgICAgICBmdW5jdGlvbiBuZXdDb3VudGRvd24oKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXREYXRlID0gdG9Eb0FycltpXS50aW1lci5nZXRUaW1lKCk7XG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGxldCBsZWZ0b3ZlclRpbWUgPSBNYXRoLmFicyh0YXJnZXREYXRlIC0gdG9kYXkpIC8gMTAwMDtcblxuICAgICAgICAgICAgICAgIGlmIChsZWZ0b3ZlclRpbWUgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lclAudGV4dENvbnRlbnQgPSAnVGltZVxcJ3MgdXAnO1xuICAgICAgICAgICAgICAgICAgICBwbGF5Tm90aWZpY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IobGVmdG92ZXJUaW1lIC8gNjAgLyA2MCAvIDI0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGxlZnRvdmVyVGltZSAvIDYwIC8gNjAgJSAyNCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKGxlZnRvdmVyVGltZSAvIDYwICUgNjApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihsZWZ0b3ZlclRpbWUgJSA2MCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGltZXJQLnRleHRDb250ZW50ID0gYCR7ZGF5c31kICR7aG91cnN9aCAke21pbnV0ZXN9bSAke3NlY29uZHN9c2A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NvdW50ZG93bigpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlUGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQYW5lLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVBhbmUnKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChkZWxldGVQYW5lKTtcblxuICAgICAgICBjb25zdCBtaW51c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtbWludXMnKTtcbiAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtbWQnKTtcbiAgICAgICAgZGVsZXRlUGFuZS5hcHBlbmQobWludXNCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGV4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG4gICAgICAgIGV4cGFuZC50ZXh0Q29udGVudCA9ICdFeHBhbmQnO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGV4cGFuZCk7XG4gICAgICAgIFxuICAgICAgICBuZXdEaXYuYXBwZW5kKHByb2plY3RJbmZvKTtcbiAgICAgICAgbmV3RGl2LmFwcGVuZCh0aW1lQ29udGFpbmVyKTtcbiAgICAgICAgbmV3RGl2LmFwcGVuZChidXR0b25Db250YWluZXIpO1xuICAgICAgICBwYW5lcy5hcHBlbmQobmV3RGl2KTtcbiAgICAgICAgXG4gICAgICAgIG5ld0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTsgIFxuICAgICAgICBleHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5ld0Rpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBhcnJbaV0udGl0bGU7XG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRlbnQudGV4dENvbnRlbnQgPSBhcnJbaV0uY29udGVudDtcbiAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICBleHBhbmQudGV4dENvbnRlbnQgPSAnQ29udHJhY3QnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnVuY2F0ZVRleHQocHJvamVjdFRpdGxlLCBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQsIDE2KTtcbiAgICAgICAgICAgICAgICB0cnVuY2F0ZVRleHQocHJvamVjdENvbnRlbnQsIHByb2plY3RDb250ZW50LnRleHRDb250ZW50LCAxNik7XG4gICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XG4gICAgICAgICAgICAgICAgZXhwYW5kLnRleHRDb250ZW50ID0gJ0V4cGFuZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBvcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1hdGlvbiA9IC0yNTtcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcGFjaXR5IDwgMSAmJiB0cmFuc2Zvcm1hdGlvbiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSA9IG9wYWNpdHkgKyAuMjA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uID0gdHJhbnNmb3JtYXRpb24gKyA1O1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDAsICR7dHJhbnNmb3JtYXRpb259cHgpYDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDE1KVxuICAgICAgICB9LCAzMDApXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgXG4gICAgXG4gICAgZXhwb3J0IHsgZWRpdFBhbmUsIHJld3JpdGVUb1BhZ2UgfTsiLCJpbXBvcnQgeyB0b0RvQXJyIH0gZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IHsgcmV3cml0ZVRvUGFnZSB9IGZyb20gXCIuL2NoYW5nZVwiO1xuXG5mdW5jdGlvbiBkZWxldGVUb0RvKGFycikge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8qIFByb2dyYW0gdGhlIGRlbGV0ZSBidXR0b24gYnkgdGllaW5nIGl0IHRvIHRoZSBpZCAjIG9mIHRoZSBjbGljayBldmVudC5cbiAgICAgICAgVGllIGl0IHRvIHRoZSBwYXJlbnQgb2YgdGhlIGNsaWNrIGV2ZW50LCBvciBncmFuZHBhcmVudCwgZGVwZW5kaW5nIG9uIHdoZXJlIGl0IHNpdHNcbiAgICAgICAgaW4gdGhlIERPTS4gKi9cbiAgICAgICAgbGV0IGRlbGV0ZUV2ZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoZGVsZXRlRXZlbnQudGFnTmFtZSA9PT0gJ0JVVFRPTicgJiYgZGVsZXRlRXZlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVQYW5lJykpIHtcbiAgICAgICAgICAgIGFyci5zcGxpY2UoZGVsZXRlRXZlbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgICAgICAgICBsb2NhbEFyci5zcGxpY2UoZGVsZXRlRXZlbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkLCAxKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGxvY2FsQXJyKSk7XG4gICAgICAgICAgICByZXdyaXRlVG9QYWdlKHRvRG9BcnIpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IHsgZGVsZXRlVG9EbyB9OyIsImNvbnN0IHRvcFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wU2VjdGlvbicpO1xuY29uc3QgbWlkZGxlU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWRkbGVTZWN0aW9uJyk7XG5jb25zdCBmaW5hbFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmluYWxTZWN0aW9uJyk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BTZWN0aW9uID4gaDEnKTtcbmNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0VGl0bGUnKTtcbmNvbnN0IGNyZWF0aW9uQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWRkbGVTZWN0aW9uID4gcCcpO1xuY29uc3QgZWRpdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdENvbnRlbnQnKTtcbmNvbnN0IHRpbWVyVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0VGltZXInKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG5jb25zdCBwYW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvUGFuZXMnKTtcbmxldCBlbGVtZW50cztcbmxldCBuZXdQcm9qZWN0O1xuXG5pbXBvcnQgbm90aWZpY2F0aW9uIGZyb20gJy4uL25vdGlmaWNhdGlvbi5tcDMnO1xuaW1wb3J0IHsgY29tcGxldGUgfSBmcm9tICcuL3NldCc7XG5pbXBvcnQgeyB0cnVuY2F0ZVRleHQgfSBmcm9tICcuL3RydW5jYXRlJztcblxuLy8gY2hhbmdlIHRoZSBsZWFybiBtb3JlIHRhYiB0byBFRElUXG5cbi8qIGFsbG93IHRoZSBlZGl0IHRvIHB1bGwgZG93biBhIGxpc3QgdGhhdCwgd2hlbiBvbmUgaXMgc2VsZWN0ZWQsXG5wdWxscyBiYWNrIGRvd24gdGhlIGVkaXQgcGFnZSB0byBjaGFuZ2UgdGhlIGluZm8gKi9cblxuXG5sZXQgdG9Eb0FyciA9IFtdO1xuXG5cbmNsYXNzIFByb2plY3RzIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgY29udGVudCwgdGltZXIpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLFxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLnRpbWVyID0gdGltZXI7XG4gICAgfVxuXG4gICAgd3JpdGVUb1BhZ2UoKSB7XG5cbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gdG9Eb0Fyci5sZW5ndGggLSAxOyBpIDwgdG9Eb0Fyci5sZW5ndGg7IGkrKykgeyAgICAgXG4gICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoYHByb2plY3Qke2kgKyAxfWApO1xuICAgICAgICAgICAgbmV3RGl2LmlkID0gaTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJbmZvJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0b0RvQXJyW2ldLnRpdGxlO1xuICAgICAgICAgICAgdHJ1bmNhdGVUZXh0KHByb2plY3RUaXRsZSwgcHJvamVjdFRpdGxlLnRleHRDb250ZW50LCAxNik7XG4gICAgICAgICAgICBwcm9qZWN0SW5mby5hcHBlbmQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGVudC50ZXh0Q29udGVudCA9IHRvRG9BcnJbaV0uY29udGVudDtcbiAgICAgICAgICAgIHRydW5jYXRlVGV4dChwcm9qZWN0Q29udGVudCwgcHJvamVjdENvbnRlbnQudGV4dENvbnRlbnQsIDE2KTtcbiAgICAgICAgICAgIHByb2plY3RJbmZvLmFwcGVuZChwcm9qZWN0Q29udGVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGltZUNvbnRhaW5lcicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB0aW1lciBzdHVmZlxuXG4gICAgICAgICAgICBjb25zdCB0aW1lclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0aW1lclAuY2xhc3NMaXN0LmFkZCgndGltZXJQJyk7XG4gICAgICAgICAgICB0aW1lQ29udGFpbmVyLmFwcGVuZCh0aW1lclApO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3VudGRvd25UaW1lcigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXREYXRlID0gdG9Eb0FycltpXS50aW1lci5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0b3ZlclRpbWUgPSAodGFyZ2V0RGF0ZSAtIHRvZGF5KSAvIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAobGVmdG92ZXJUaW1lIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyUC50ZXh0Q29udGVudCA9ICdUaW1lXFwncyB1cCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5Tm90aWZpY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IobGVmdG92ZXJUaW1lIC8gNjAgLyA2MCAvIDI0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihsZWZ0b3ZlclRpbWUgLyA2MCAvIDYwICUgMjQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IobGVmdG92ZXJUaW1lIC8gNjAgJSA2MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihsZWZ0b3ZlclRpbWUgJSA2MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyUC50ZXh0Q29udGVudCA9IGAke2RheXN9ZCAke2hvdXJzfWggJHttaW51dGVzfW0gJHtzZWNvbmRzfXNgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY291bnRkb3duVGltZXIoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVBhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVBhbmUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlUGFuZScpO1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChkZWxldGVQYW5lKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbWludXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICBtaW51c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xuICAgICAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtbWludXMnKTtcbiAgICAgICAgICAgIG1pbnVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLW1kJyk7XG4gICAgICAgICAgICBkZWxldGVQYW5lLmFwcGVuZChtaW51c0J1dHRvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZXhwYW5kLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpO1xuICAgICAgICAgICAgZXhwYW5kLnRleHRDb250ZW50ID0gJ0V4cGFuZCc7XG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGV4cGFuZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5ld0Rpdi5hcHBlbmQocHJvamVjdEluZm8pO1xuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZCh0aW1lQ29udGFpbmVyKTtcbiAgICAgICAgICAgIG5ld0Rpdi5hcHBlbmQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHBhbmVzLmFwcGVuZChuZXdEaXYpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7ICAgXG4gICAgICAgICAgICBleHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRvRG9BcnJbaV0udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250ZW50LnRleHRDb250ZW50ID0gdG9Eb0FycltpXS5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kLnRleHRDb250ZW50ID0gJ0NvbnRyYWN0JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cnVuY2F0ZVRleHQocHJvamVjdFRpdGxlLCBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQsIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgdHJ1bmNhdGVUZXh0KHByb2plY3RDb250ZW50LCBwcm9qZWN0Q29udGVudC50ZXh0Q29udGVudCwgMTYpO1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kLnRleHRDb250ZW50ID0gJ0V4cGFuZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgb3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBsZXQgdHJhbnNmb3JtYXRpb24gPSAtMjU7XG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3BhY2l0eSA8IDEgJiYgdHJhbnNmb3JtYXRpb24gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgPSBvcGFjaXR5ICsgLjIwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbiA9IHRyYW5zZm9ybWF0aW9uICsgNTtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwLCAke3RyYW5zZm9ybWF0aW9ufXB4KWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxNSlcbiAgICAgICAgfSwgMzAwKVxuICAgIH1cbiAgICBcbiAgICBcbn1cblxubGV0IG5vdGlmeSA9IG5ldyBBdWRpbyhub3RpZmljYXRpb24pO1xuXG5mdW5jdGlvbiBwbGF5Tm90aWZpY2F0aW9uKCkge1xuICAgIG5vdGlmeS5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvY3VzVGl0bGUoKSB7XG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aXRsZS5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICAgICAgICAgICAgdGl0bGUuYmx1cigpO1xuICAgICAgICAgICAgZ3JhYlRleHRUaXRsZSgpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9jdXNDb250ZW50KCkge1xuICAgIGNyZWF0aW9uQ29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjcmVhdGlvbkNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgICAgIGNyZWF0aW9uQ29udGVudC5ibHVyKCk7XG4gICAgICAgICAgICBncmFiVGV4dENvbnRlbnQoKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuXG5mdW5jdGlvbiB0aXRsZUVkaXQoKSB7XG4gICAgdGl0bGUudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlLmlubmVyVGV4dDtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG4gICAgdGV4dC5zZXRCYXNlQW5kRXh0ZW50KHRpdGxlLmZpcnN0Q2hpbGQsIDAsIHRpdGxlLmxhc3RDaGlsZCwgdGl0bGUudGV4dENvbnRlbnQubGVuZ3RoKTtcbiAgICByZW1vdmVGb2N1c1RpdGxlKCk7XG4gICAgY29tcGxldGVUaXRsZUVkaXQoKTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVUaXRsZUVkaXQoKSB7XG4gICAgZWRpdFRpdGxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGl0bGVFZGl0KTtcbiAgICBlZGl0VGl0bGUudGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBlZGl0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBncmFiVGV4dFRpdGxlKTtcbn1cblxuXG5mdW5jdGlvbiBncmFiVGV4dFRpdGxlKCkge1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGUuaW5uZXJUZXh0O1xuICAgIHRpdGxlLnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgIGVkaXRUaXRsZS50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICBlZGl0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aXRsZUVkaXQpO1xufVxuXG5mdW5jdGlvbiBjb250ZW50RWRpdCgpIHtcbiAgICBjcmVhdGlvbkNvbnRlbnQudG9nZ2xlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICBjcmVhdGlvbkNvbnRlbnQudGV4dENvbnRlbnQgPSBjcmVhdGlvbkNvbnRlbnQuaW5uZXJUZXh0O1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgICB0ZXh0LnNldEJhc2VBbmRFeHRlbnQoY3JlYXRpb25Db250ZW50LmZpcnN0Q2hpbGQsIDAsIGNyZWF0aW9uQ29udGVudC5sYXN0Q2hpbGQsIGNyZWF0aW9uQ29udGVudC50ZXh0Q29udGVudC5sZW5ndGgpO1xuICAgIHJlbW92ZUZvY3VzQ29udGVudChjcmVhdGlvbkNvbnRlbnQpO1xuICAgIGNvbXBsZXRlQ29udGVudEVkaXQoKTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVDb250ZW50RWRpdCgpIHtcbiAgICBlZGl0Q29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRlbnRFZGl0KTtcbiAgICBlZGl0Q29udGVudC50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGVkaXRDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ3JhYlRleHRDb250ZW50KTtcbn1cblxuZnVuY3Rpb24gZ3JhYlRleHRDb250ZW50KCkge1xuICAgIGNyZWF0aW9uQ29udGVudC50ZXh0Q29udGVudCA9IGNyZWF0aW9uQ29udGVudC5pbm5lclRleHQ7XG4gICAgY3JlYXRpb25Db250ZW50LnRvZ2dsZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgIGVkaXRDb250ZW50LnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIGVkaXRDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udGVudEVkaXQpO1xufVxuXG4vLyB0aW1lciBlZGl0IGZ1bmN0aW9uXG5cbmZ1bmN0aW9uIGFkZFRvU3RvcmFnZShhcnIpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVQcm9qZWN0cygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdXNlckFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgICAgICBjb25zb2xlLnRhYmxlKHVzZXJBcnJbMF0sIHVzZXJBcnJbMV0pO1xuICAgICAgICB3cml0ZVJldHJpZXZhbERhdGEodXNlckFycilcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5sZXQgbmV3RGl2O1xuXG5mdW5jdGlvbiB3cml0ZVJldHJpZXZhbERhdGEoYXJyKSB7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgICAgIFxuICAgICAgICAgICAgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoYHByb2plY3Qke2kgKyAxfWApO1xuICAgICAgICAgICAgbmV3RGl2LmlkID0gaTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJbmZvJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBhcnJbaV0udGl0bGU7XG4gICAgICAgICAgICB0cnVuY2F0ZVRleHQocHJvamVjdFRpdGxlLCBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQsIDE2KTtcbiAgICAgICAgICAgIHByb2plY3RJbmZvLmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHByb2plY3RDb250ZW50LnRleHRDb250ZW50ID0gYXJyW2ldLmNvbnRlbnQ7XG4gICAgICAgICAgICB0cnVuY2F0ZVRleHQocHJvamVjdENvbnRlbnQsIHByb2plY3RDb250ZW50LnRleHRDb250ZW50LCAxNik7XG4gICAgICAgICAgICBwcm9qZWN0SW5mby5hcHBlbmQocHJvamVjdENvbnRlbnQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0aW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RpbWVDb250YWluZXInKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gdGltZXIgc3R1ZmZcblxuICAgICAgICAgICAgY29uc3QgdGltZXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdGltZXJQLmNsYXNzTGlzdC5hZGQoJ3RpbWVyUCcpO1xuICAgICAgICAgICAgdGltZUNvbnRhaW5lci5hcHBlbmQodGltZXJQKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gY291bnRkb3duVGltZXIoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKGFycltpXS50aW1lcikuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0b3ZlclRpbWUgPSAodGFyZ2V0RGF0ZSAtIHRvZGF5KSAvIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAobGVmdG92ZXJUaW1lIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyUC50ZXh0Q29udGVudCA9ICdUaW1lXFwncyB1cCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5Tm90aWZpY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IobGVmdG92ZXJUaW1lIC8gNjAgLyA2MCAvIDI0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihsZWZ0b3ZlclRpbWUgLyA2MCAvIDYwICUgMjQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IobGVmdG92ZXJUaW1lIC8gNjAgJSA2MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihsZWZ0b3ZlclRpbWUgJSA2MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyUC50ZXh0Q29udGVudCA9IGAke2RheXN9ZCAke2hvdXJzfWggJHttaW51dGVzfW0gJHtzZWNvbmRzfXNgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY291bnRkb3duVGltZXIoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVBhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVBhbmUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlUGFuZScpO1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChkZWxldGVQYW5lKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbWludXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICBtaW51c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xuICAgICAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtbWludXMnKTtcbiAgICAgICAgICAgIG1pbnVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLW1kJyk7XG4gICAgICAgICAgICBkZWxldGVQYW5lLmFwcGVuZChtaW51c0J1dHRvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZXhwYW5kLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpO1xuICAgICAgICAgICAgZXhwYW5kLnRleHRDb250ZW50ID0gJ0V4cGFuZCc7XG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGV4cGFuZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5ld0Rpdi5hcHBlbmQocHJvamVjdEluZm8pO1xuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZCh0aW1lQ29udGFpbmVyKTtcbiAgICAgICAgICAgIG5ld0Rpdi5hcHBlbmQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHBhbmVzLmFwcGVuZChuZXdEaXYpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7ICAgXG4gICAgICAgICAgICBleHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGFycltpXS50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbnRlbnQudGV4dENvbnRlbnQgPSBhcnJbaV0uY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZC50ZXh0Q29udGVudCA9ICdDb250cmFjdCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ1bmNhdGVUZXh0KHByb2plY3RUaXRsZSwgcHJvamVjdFRpdGxlLnRleHRDb250ZW50LCAxNik7XG4gICAgICAgICAgICAgICAgICAgIHRydW5jYXRlVGV4dChwcm9qZWN0Q29udGVudCwgcHJvamVjdENvbnRlbnQudGV4dENvbnRlbnQsIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZC50ZXh0Q29udGVudCA9ICdFeHBhbmQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybWF0aW9uID0gLTI1O1xuICAgICAgICAgICAgbGV0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wYWNpdHkgPCAxICYmIHRyYW5zZm9ybWF0aW9uIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ID0gb3BhY2l0eSArIC4yMDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb24gPSB0cmFuc2Zvcm1hdGlvbiArIDU7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMCwgJHt0cmFuc2Zvcm1hdGlvbn1weClgO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTUpXG4gICAgICAgIH0sIDMwMClcbn1cblxuXG5cblxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlIG9mIGNsaWNrZWQgdG8gZG8gaXRlbSc7XG4gICAgY3JlYXRpb25Db250ZW50LnRleHRDb250ZW50ID0gJ05vdGVzIHRoYXQgd2lsbCBhcHBlYXIgd2hlbiBjcmVhdGluZyB0byBkbyBpdGVtJztcbiAgICB0aW1lclZhbHVlLnZhbHVlID0gJyc7XG59XG5cbi8vIHN0YXJ0IGhlcmUgd2l0aCBjcmVhdGluZyBhIHRpbWVyIGRhdGUgb2JqZWN0IGluIHRoaXMgY3JlYXRlUHJvamVjdCBmdW5jdGlvblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCB0aW1lckRhdGUgPSBuZXcgRGF0ZSh0aW1lclZhbHVlLnZhbHVlKTtcbiAgICBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3RzKHRpdGxlLnRleHRDb250ZW50LCBjcmVhdGlvbkNvbnRlbnQudGV4dENvbnRlbnQsIHRpbWVyRGF0ZSk7XG4gICAgdG9Eb0Fyci5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGFkZFRvU3RvcmFnZSh0b0RvQXJyKTtcbiAgICBjb25zb2xlLmxvZyh0b0RvQXJyKTtcbiAgICBuZXdQcm9qZWN0LndyaXRlVG9QYWdlKCk7XG4gICAgcmVzZXRGb3JtKCk7XG59XG5cbmNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRpbWVyVmFsdWUudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBlbnRlciBhIGRhdGUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QoKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn0pO1xuXG4gXG5cbmV4cG9ydCB7IHRpdGxlRWRpdCwgY29udGVudEVkaXQsIGNyZWF0ZVByb2plY3QsIGVkaXRUaXRsZSwgZWRpdENvbnRlbnQsIHByb2plY3RzLCB0b0RvQXJyLCB0aXRsZSwgY3JlYXRpb25Db250ZW50LCBwYW5lcywgZWxlbWVudHMsIHRpbWVyVmFsdWUsIG5vdGlmeSwgcGxheU5vdGlmaWNhdGlvbiwgcmV0cmlldmVQcm9qZWN0cyB9XG5cbiIsImNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0VGltZXInKTtcbmNvbnN0IGVkaXRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRDb250ZW50Jyk7XG5jb25zdCBwbHVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb25zID4gaTpmaXJzdC1jaGlsZCcpO1xuY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGUnKTtcbmNvbnN0IGFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93Jyk7XG5cbmxldCB0cmFuc2Zvcm1hdGlvbiA9IC0xMTAwO1xuXG4vKiBDaGFuZ2Ugc2xpZGVJbiBhbmQgc2xpZGVPdXQgcGFnZSB0byBiZSBhIGZvcm0gdGhhdCBmYWRlcyBpbiBpbnN0ZWFkIG9mIGFuIGVudGlyZVxucGFnZSB0aGF0IHNsaWRlcyBkb3duIGFuZCB1cCAqL1xuXG5mdW5jdGlvbiBzbGlkZUluUGFnZSgpIHtcbiAgICBjb25zdCB0b0RvQ29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvQ29udGVudCcpO1xuICAgIGxldCBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAodHJhbnNmb3JtYXRpb24gPCAwKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbiA9IHRyYW5zZm9ybWF0aW9uICsgMTA7XG4gICAgICAgICAgICB0b0RvQ29udGVudEJveC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDAsICR7dHJhbnNmb3JtYXRpb259cHgpYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgIH1cbiAgICB9LCAwLjUpXG59XG5cbmZ1bmN0aW9uIHNsaWRlT3V0UGFnZSgpIHtcbiAgICBjb25zdCB0b0RvQ29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvQ29udGVudCcpO1xuICAgIGxldCBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAodHJhbnNmb3JtYXRpb24gPiAtMTEwMCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtYXRpb24gPSB0cmFuc2Zvcm1hdGlvbiAtIDEwO1xuICAgICAgICAgICAgdG9Eb0NvbnRlbnRCb3guc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwLCAke3RyYW5zZm9ybWF0aW9ufXB4KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICB9XG4gICAgfSwgMC41KVxufVxuXG5leHBvcnQgeyBwbHVzQnV0dG9uLCBjb21wbGV0ZSwgYXJyb3csIHNsaWRlSW5QYWdlLCBzbGlkZU91dFBhZ2UgfTsiLCJcbmZ1bmN0aW9uIHRydW5jYXRlVGV4dChlbGUsIHN0ciwgbnVtKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPD0gbnVtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGUuaW5uZXJUZXh0ID0gc3RyLnNsaWNlKDAsIG51bSkgKyAnLi4uLic7XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHsgdHJ1bmNhdGVUZXh0fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIENoYW5nZSB0aGUgJ25vdGlmaWNhdGlvbiB0aW1lcicgcCBlbGVtZW50IHRvIGFuIGlucHV0OmRhdGV0aW1lLWxvY2FsIGVsZW1lbnRcblxuLyogR2V0IHJpZCBvZiBhbGwgb2YgdGhlIGxvZ2ljIGRlYWxpbmcgd2l0aCB0aGUgbm90aWZpY2F0aW9uIHRpbWVyIGVsZW1lbnQgYW5kIGhhdmVcbml0IHJlcGxhY2VkIHdpdGggbG9naWMgdGhhdCBkZWFscyB3aXRoIHRoZSBpbnB1dC4gVGhlIGNvbXBsZXRlIGJ1dHRvbiB3aWxsIHN1Ym1pdCB0aGUgXG5kYXRhIHRoYXQgSSBuZWVkIGZvciBpdC4gVXNlIENUUkwgKyBGIHRvIGZpbmQgYWxsIG9mIHRoZSBsb2dpYyB0aGF0IGRlYWxzIHdpdGggJ3RpbWVyJ1xuICovXG5cbi8vIGxlYXJuIG1vcmUgYWJvdXQgZGF0ZS1mbnMgdG9tb3Jyb3cgYXMgd2VsbFxuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGljb25zLCBhZGRCZWF0LCByZW1vdmVCZWF0IH0gZnJvbSAnLi9tb2R1bGVzL2JlYXQnO1xuaW1wb3J0IHsgcGx1c0J1dHRvbiwgYXJyb3csIHNsaWRlT3V0UGFnZSwgY29tcGxldGUsIHNsaWRlSW5QYWdlIH0gZnJvbSAnLi9tb2R1bGVzL3NldCc7XG5pbXBvcnQgeyB0b0RvQXJyLCB0aXRsZUVkaXQsIGVkaXRUaXRsZSwgY29udGVudEVkaXQsIGVkaXRDb250ZW50LCBwcm9qZWN0cywgcmV0cmlldmVQcm9qZWN0cyB9IGZyb20gJy4vbW9kdWxlcy9lZGl0JztcbmltcG9ydCB7IGVkaXRQYW5lIH0gZnJvbSAnLi9tb2R1bGVzL2NoYW5nZSc7XG5pbXBvcnQgeyBkZWxldGVUb0RvIH0gZnJvbSAnLi9tb2R1bGVzL2RlbGV0ZSc7XG5cbmlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKS5sZW5ndGggPiAwKSB7XG4gICAgd2luZG93Lm9ubG9hZCA9IHJldHJpZXZlUHJvamVjdHMoKTtcbn1cblxuLy8gbG9naWMgZm9yIHB1bHNpbmcgdGhlIGljb25zIGluIHRoZSBuYXZiYXJcbmFkZEJlYXQoKTtcbnJlbW92ZUJlYXQoKTtcblxuXG5wbHVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2xpZGVJblBhZ2UpO1xuY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzbGlkZU91dFBhZ2UpO1xuYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzbGlkZU91dFBhZ2UpO1xuZWRpdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGl0bGVFZGl0KTtcbmVkaXRDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udGVudEVkaXQpO1xuZWRpdFBhbmUoKTtcbmRlbGV0ZVRvRG8odG9Eb0Fycik7XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==