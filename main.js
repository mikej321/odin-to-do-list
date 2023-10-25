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

:root {
    --Sinopia: #C04E21;
    --Sienna: #7A3115;
    --Wheat: #E3D1A1;
    --Smoky-black: #201A09;
    --Anti-flash-white: #E9EBED;
    --Onyx: #373D43;
    --Vivid-sky-blue: #00D4F5;
    --Caribbean-current: #006A7A;
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
    background: var(--Sienna);
    color: var(--Anti-flash-white);
}

.navbar h2 {
    font-family: 'Alegreya Bold';
    letter-spacing: 2px;
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
    font-family: 'Alegreya Normal';
    text-decoration: none;
    color: var(--Anti-flash-white);
}

.toDoContent {
    position: absolute;
    top: calc(50px + -2vw);
    left: calc(50px + -2.4vw);
    grid-area: content;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 4rem 3rem;
    border-radius: 12px;
    box-shadow: 2px 5px 10px rgba(227, 209, 161, 0.4);
    background: var(--Onyx);
    color: var(--Anti-flash-white);
    width: 80%;
    opacity: 0;
    z-index: 0;
}



.topSection,
.middleSection {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}

.topSection input,
.middleSection input {
    border: none;
    box-shadow: 0 1px 5px rgba(233, 235, 237, 0.4);
}

label {
    font-size: 1.8rem;
    font-weight: bold;
    text-shadow: 0 6px 12px rgba(0, 0, 0, 1);
}

.topSection input::placeholder,
.middleSection input::placeholder {
    text-align: center;
}
            
#title,
#notes {
    width: 100%;
    max-width: 30rem;
    height: 4rem;
    border-radius: 8px;
    padding-inline: 1rem;
}

.finalSection {
    display: flex;
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
    box-shadow: 0px 1px 5px rgba(233, 235, 237, 0.4);
    font-size: 1.6rem;
}


.complete {
    align-self: center;
    width: 100%;
    max-width: 10rem;
    height: 5rem;
    background-color: var(--Sienna);
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
    box-shadow: 1px 1px 4px rgba(233, 235, 237, 0.3);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border: none;
    border-radius: 4px;
}

.edit:hover {
    scale: 1.1;
    background: var(--Caribbean-current);
    box-shadow: 1px 1px 4px rgba(233, 235, 237, 0.4);
    border-radius: 4px;
    color: var(--Anti-flash-white);
}

.toDoPanes {
    grid-area: panes;
    display: grid;
    justify-content: center;
    background: linear-gradient(175deg, var(--Anti-flash-white),
                                var(--Wheat));
}

.enlarged {
    height: 100vh;
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
    max-height: 22rem;
    border-radius: 6px;
    box-shadow: 2px 2px 7px rgba(32, 26, 9, 0.6);
    /* transform: translate(0, -25px);
    opacity: 0; */
    cursor: pointer;
    transition: background-color 0.25s linear;
    background: var(--Sinopia);
    color: var(--Anti-flash-white);
}

.project:hover {
    background-color: var(--Caribbean-current);
    color: white;
}

.dissapear {
    opacity: 0;
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
    font-family: 'Quicksand';
    font-weight: 600;
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
    box-shadow: 0 1px 2px rgba(233, 235, 237, 0.6);
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
    box-shadow: 0 1px 2px rgba(233, 235, 237, 0.6);
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
        grid-area: content;
        display: flex;
        flex-direction: column;
        padding: 10rem 5rem;
        gap: 5rem;
        top: calc(50px + 2vw);
        left: calc(50px + 4.5vw);
    }

    .toDoPanes {
        grid-template-columns: repeat(4, minmax(150px, 335px));
        gap: 2rem;
        justify-items: center;
    }

}

/*  */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Default Styling */\n\n@font-face {\n    font-family: 'Alegreya Regular';\n    src: url('./AlegreyaSCRegular.ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Alegreya Medium';\n    src: url('./AlegreyaSCMedium.ttf');\n    font-weight: 500;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Alegreya Bold';\n    src: url('./AlegreyaSCBold.ttf');\n    font-weight: 700;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Quicksand Normal';\n    src: url('./Quicksand.ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Quicksand Bold';\n    src: url('./Quicksand.ttf');\n    font-weight: 700;\n    font-style: normal;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    scroll-behavior: smooth;\n}\n\n:root {\n    --Sinopia: #C04E21;\n    --Sienna: #7A3115;\n    --Wheat: #E3D1A1;\n    --Smoky-black: #201A09;\n    --Anti-flash-white: #E9EBED;\n    --Onyx: #373D43;\n    --Vivid-sky-blue: #00D4F5;\n    --Caribbean-current: #006A7A;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    font-size: 1.6rem;\n    font-family: 'Quicksand Normal';\n}\n\n.content {\n    display: flex;\n    justify-content: center;\n    \n}\n\nmain {\n    position: relative;\n    display: grid;\n    width: 100%;\n    max-width: 375px;\n    border-radius: 8px;\n    grid-template-rows: 4rem 1fr;\n    grid-template-areas: \"nav\"\n                         \"content\"\n                         \"panes\";\n    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);\n}\n\n.navbar {\n    grid-area: nav;\n    display: flex;\n    justify-content: space-between;\n    padding-inline: 1rem;\n    align-items: center;\n    background: var(--Sienna);\n    color: var(--Anti-flash-white);\n}\n\n.navbar h2 {\n    font-family: 'Alegreya Bold';\n    letter-spacing: 2px;\n    font-size: 1.8rem;\n}\n\n.icons {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 15rem;\n    justify-content: space-around;\n}\n\ni {\n    cursor: pointer;\n}\n\na {\n    font-size: 1.2rem;\n    font-family: 'Alegreya Normal';\n    text-decoration: none;\n    color: var(--Anti-flash-white);\n}\n\n.toDoContent {\n    position: absolute;\n    top: calc(50px + -2vw);\n    left: calc(50px + -2.4vw);\n    grid-area: content;\n    display: flex;\n    flex-direction: column;\n    gap: 5rem;\n    padding: 4rem 3rem;\n    border-radius: 12px;\n    box-shadow: 2px 5px 10px rgba(227, 209, 161, 0.4);\n    background: var(--Onyx);\n    color: var(--Anti-flash-white);\n    width: 80%;\n    opacity: 0;\n    z-index: 0;\n}\n\n\n\n.topSection,\n.middleSection {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    align-items: center;\n}\n\n.topSection input,\n.middleSection input {\n    border: none;\n    box-shadow: 0 1px 5px rgba(233, 235, 237, 0.4);\n}\n\nlabel {\n    font-size: 1.8rem;\n    font-weight: bold;\n    text-shadow: 0 6px 12px rgba(0, 0, 0, 1);\n}\n\n.topSection input::placeholder,\n.middleSection input::placeholder {\n    text-align: center;\n}\n            \n#title,\n#notes {\n    width: 100%;\n    max-width: 30rem;\n    height: 4rem;\n    border-radius: 8px;\n    padding-inline: 1rem;\n}\n\n.finalSection {\n    display: flex;\n}\n\n.inputContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2rem;\n    width: 100%;\n    align-items: center;\n}\n\n.datetime-wrapper {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n\n.datetime-wrapper input {\n    padding: 1rem;\n    border-radius: 8px;\n    width: 100%;\n    max-width: 30rem;\n    border: none;\n    box-shadow: 0px 1px 5px rgba(233, 235, 237, 0.4);\n    font-size: 1.6rem;\n}\n\n\n.complete {\n    align-self: center;\n    width: 100%;\n    max-width: 10rem;\n    height: 5rem;\n    background-color: var(--Sienna);\n    border: none;\n    border-radius: 8px;\n    color: white;\n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n}\n\n.complete:hover {\n    font-weight: bold;\n    scale: 1.1;\n}\n\n.edit {\n    width: 100%;\n    max-width: 5rem;\n    height: 3rem;\n    box-shadow: 1px 1px 4px rgba(233, 235, 237, 0.3);\n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n    border: none;\n    border-radius: 4px;\n}\n\n.edit:hover {\n    scale: 1.1;\n    background: var(--Caribbean-current);\n    box-shadow: 1px 1px 4px rgba(233, 235, 237, 0.4);\n    border-radius: 4px;\n    color: var(--Anti-flash-white);\n}\n\n.toDoPanes {\n    grid-area: panes;\n    display: grid;\n    justify-content: center;\n    background: linear-gradient(175deg, var(--Anti-flash-white),\n                                var(--Wheat));\n}\n\n.enlarged {\n    height: 100vh;\n}\n\n.project {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 2rem;\n    margin: 2rem;\n    padding: 2rem;\n    width: 100%;\n    max-width: 34rem;\n    max-height: 22rem;\n    border-radius: 6px;\n    box-shadow: 2px 2px 7px rgba(32, 26, 9, 0.6);\n    /* transform: translate(0, -25px);\n    opacity: 0; */\n    cursor: pointer;\n    transition: background-color 0.25s linear;\n    background: var(--Sinopia);\n    color: var(--Anti-flash-white);\n}\n\n.project:hover {\n    background-color: var(--Caribbean-current);\n    color: white;\n}\n\n.dissapear {\n    opacity: 0;\n}\n\n.projectInfo {\n    flex-basis: 50%;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    pointer-events: none;\n}\n\n.timeContainer {\n    flex-basis: 20%;\n    pointer-events: none;\n}\n\n.projectInfo h3 {\n    font-family: 'Quicksand';\n    font-weight: 600;\n    font-size: 1.6rem;\n}\n\n.projectInfo p {\n    font-size: 1.2rem;\n}\n\n.timeContainer p {\n\n    font-size: 1.2rem;\n}\n\n.buttonContainer {\n    flex-basis: 30%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.5rem;\n}\n\n.deletePane {\n    width: 7rem;\n    height: 3rem;\n    transition: all 0.2s ease-in-out;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n    box-shadow: 0 1px 2px rgba(233, 235, 237, 0.6);\n}\n\n.deletePane:hover {\n    background-color: red;\n    color: white;\n    scale: 1.1;\n    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);\n}\n\n.deletePane i {\n    pointer-events: none;\n}\n\n\n\n.expand {\n    cursor: pointer;\n    width: 7rem;\n    height: 3rem;\n    border-radius: 6px;\n    border: none;\n    transition: all 0.2s ease-in-out;\n    box-shadow: 0 1px 2px rgba(233, 235, 237, 0.6);\n}\n\n.expand:hover {\n    background-color: greenyellow;\n    scale: 1.1;\n    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);\n}\n\n\n\n\n\n@media screen and (min-width: 600px) {\n    \n    main {\n        display: grid;\n        width: 100%;\n        max-width: 1440px;\n        grid-template-columns: 14rem 1fr;\n        grid-template-rows: 7rem 1fr;\n        grid-template-areas: \"nav nav\"\n        \"content content\"\n        \"panes panes\";\n        transition: grid-template-columns 0.5s ease-in-out;\n    }\n    \n    .project {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 2rem;\n        \n    }\n\n    .projectInfo {\n        align-items: center;\n        text-align: center;\n    }\n    \n\n\n    /* change projects transition to focus on main page instead of sidebar */\n    \n    .navbar {\n        grid-area: nav;\n        display: flex;\n        justify-content: space-between;\n        padding-inline: 1rem;\n        align-items: center;\n    }\n    \n    .icons {\n        display: flex;\n        align-items: center;\n        width: 100%;\n        max-width: 25rem;\n        justify-content: space-around;\n    }\n    \n    .toDoContent {\n        position: absolute;\n        grid-area: content;\n        display: flex;\n        flex-direction: column;\n        padding: 10rem 5rem;\n        gap: 5rem;\n        top: calc(50px + 2vw);\n        left: calc(50px + 4.5vw);\n    }\n\n    .toDoPanes {\n        grid-template-columns: repeat(4, minmax(150px, 335px));\n        gap: 2rem;\n        justify-items: center;\n    }\n\n}\n\n/*  */"],"sourceRoot":""}]);
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
/* harmony export */   panes: () => (/* reexport safe */ _edit__WEBPACK_IMPORTED_MODULE_1__.panes),
/* harmony export */   rewriteToPage: () => (/* binding */ rewriteToPage)
/* harmony export */ });
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set */ "./src/modules/set.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/modules/edit.js");
/* harmony import */ var _truncate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./truncate */ "./src/modules/truncate.js");




let newElements;

function rewriteToPage(arr) {
    while (_edit__WEBPACK_IMPORTED_MODULE_1__.panes.firstChild) {
        _edit__WEBPACK_IMPORTED_MODULE_1__.panes.removeChild(_edit__WEBPACK_IMPORTED_MODULE_1__.panes.firstChild);
    }
    
    for (let i = 0; i < arr.length; i++) {     
        const newDiv = document.createElement('div');
        newDiv.classList.add('project');
        newDiv.classList.add(`project${i + 1}`);
        newDiv.id = i;
        
        const projectInfo = document.createElement('div');
        projectInfo.classList.add('projectInfo');

        if (arr[i].title !== '') {
            const projectTitle = document.createElement('h3');
            projectTitle.textContent = arr[i].title;
            (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectTitle, projectTitle.textContent, 16);
            projectInfo.append(projectTitle);
        }
        
        if (arr[i].content !== '') {
            const projectContent = document.createElement('p');
            projectContent.textContent = arr[i].content;
            (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectContent, projectContent.textContent, 16);
            projectInfo.append(projectContent);
        }
        
        const timeContainer = document.createElement('div');
        timeContainer.classList.add('timeContainer');
        
        const timerP = document.createElement('p');
        timerP.classList.add('timerP');
        timeContainer.append(timerP);

        function newCountdown() {
            const targetDate = new Date(_edit__WEBPACK_IMPORTED_MODULE_1__.toDoArr[i].timer);
            let targetTime = targetDate.getTime();
            let intervalID = setInterval(() => {
                const today = new Date().getTime();
                let leftoverTime = Math.abs(targetTime - today) / 1000;

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



function deleteToDo() {
    document.addEventListener('click', (event) => {    
        let deleteEvent = event.target;
        if (deleteEvent.tagName === 'BUTTON' && deleteEvent.classList.contains('deletePane')) {
            _edit__WEBPACK_IMPORTED_MODULE_0__.toDoArr.splice(deleteEvent.parentElement.parentElement.id, 1);
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
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   creationContent: () => (/* binding */ creationContent),
/* harmony export */   elements: () => (/* binding */ elements),
/* harmony export */   notify: () => (/* binding */ notify),
/* harmony export */   panes: () => (/* binding */ panes),
/* harmony export */   playNotification: () => (/* binding */ playNotification),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   retrieveProjects: () => (/* binding */ retrieveProjects),
/* harmony export */   timerValue: () => (/* binding */ timerValue),
/* harmony export */   title: () => (/* binding */ title),
/* harmony export */   toDoArr: () => (/* binding */ toDoArr)
/* harmony export */ });
/* harmony import */ var _notification_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../notification.mp3 */ "./src/notification.mp3");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set */ "./src/modules/set.js");
/* harmony import */ var _truncate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./truncate */ "./src/modules/truncate.js");
const topSection = document.querySelector('.topSection');
const middleSection = document.querySelector('.middleSection');
const finalSection = document.querySelector('.finalSection');
const title = document.querySelector('#title');
const creationContent = document.querySelector('#notes');
const timerValue = document.querySelector('#setTimer');
const main = document.querySelector('main');
const projects = document.querySelectorAll('.project');
const panes = document.querySelector('.toDoPanes');
let elements;
let newProject;





let toDoArr = [];

window.onload = setToDoArr();

function setToDoArr() {
    if (toDoArr.length === 0 && JSON.parse(localStorage.getItem('projects')) !== null) {
        let mainArr = JSON.parse(localStorage.getItem('projects'));
        toDoArr = mainArr;
    } else if (toDoArr.length === 0 && JSON.parse(localStorage.getItem('projects')) === null) {
        return;
    }
}


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

            if (toDoArr[i].title !== '') {
                const projectTitle = document.createElement('h3');
                projectTitle.textContent = toDoArr[i].title;
                (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectTitle, projectTitle.textContent, 16);
                projectInfo.append(projectTitle);
            }
            
            if (toDoArr[i].content !== '') {
                console.log('I do not equal empty')
                const projectContent = document.createElement('p');
                projectContent.textContent = toDoArr[i].content;
                (0,_truncate__WEBPACK_IMPORTED_MODULE_2__.truncateText)(projectContent, projectContent.textContent, 16);
                projectInfo.append(projectContent);
            }
            
            const timeContainer = document.createElement('div');
            timeContainer.classList.add('timeContainer');
            
            // timer stuff

            const timerP = document.createElement('p');
            timerP.classList.add('timerP');
            timeContainer.append(timerP);

            function countdownTimer() {
                const targetDate = new Date(toDoArr[i].timer);
                let targetTime = targetDate.getTime();
                let intervalID = setInterval(() => {
                    const today = new Date().getTime();
                    let leftoverTime = (targetTime - today) / 1000;
                    
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

function addToStorage(arr) {
    localStorage.setItem('projects', JSON.stringify(arr));
}

function retrieveProjects() {
    if (localStorage.getItem('projects') !== null) {
        const userArr = JSON.parse(localStorage.getItem('projects'));
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
    title.value = '';
    creationContent.value = '';
    timerValue.value = '';
}


function createProject() {
    if (toDoArr.length === 0 && JSON.parse(localStorage.getItem('projects'))) {
        let mainArr = JSON.parse(localStorage.getItem('projects'));
        toDoArr = mainArr;
        const timerDate = new Date(timerValue.value);
        newProject = new Projects(title.value, creationContent.value, timerDate);
        toDoArr.push(newProject);
        addToStorage(toDoArr);
        newProject.writeToPage();
        resetForm();
    } else {
        const timerDate = new Date(timerValue.value);
        newProject = new Projects(title.value, creationContent.value, timerDate);
        toDoArr.push(newProject);
        addToStorage(toDoArr);
        newProject.writeToPage();
        resetForm();
    }
}

document.addEventListener('click', (event) => {
    let eventTar = event.target;
    if (eventTar.tagName === 'BUTTON' && eventTar.classList.contains('complete')) {
        try {
            console.log('I was clicked')
            if (timerValue.value === '') {
                throw new Error('Please enter a date');
                return;
            } else {
                createProject();
            }
        } catch(error) {
            alert(error);
        }
    }
})

 





/***/ }),

/***/ "./src/modules/set.js":
/*!****************************!*\
  !*** ./src/modules/set.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   complete: () => (/* binding */ complete),
/* harmony export */   fadeInPage: () => (/* binding */ fadeInPage),
/* harmony export */   fadeOutPage: () => (/* binding */ fadeOutPage),
/* harmony export */   plusButton: () => (/* binding */ plusButton)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/modules/edit.js");
const toDoContentBox = document.querySelector('.toDoContent');
const editTitle = document.querySelector('.editTimer');
const editContent = document.querySelector('.editContent');
const plusButton = document.querySelector('.icons > i:first-child');
const complete = document.querySelector('.complete');



let opacity = 0;

/* make the page 20% padded from the toDoPanes while having
toDoPanes enlarged while it's active */



function fadeInPage() {
    for (let i = 0; i < _edit__WEBPACK_IMPORTED_MODULE_0__.panes.children.length; i++) {
        _edit__WEBPACK_IMPORTED_MODULE_0__.panes.children[i].removeAttribute('style');
        _edit__WEBPACK_IMPORTED_MODULE_0__.panes.children[i].classList.add('dissapear');
    }
    let intervalID = setInterval(() => {
        if (opacity < 1) {
            opacity = opacity + .10;
            toDoContentBox.style.opacity = `${opacity}`;
            toDoContentBox.style.zIndex = '1';
            _edit__WEBPACK_IMPORTED_MODULE_0__.panes.classList.add('enlarged');
            
        } else {
            clearInterval(intervalID);
        }
    }, 25)
}

function fadeOutPage() {
    let intervalID = setInterval(() => {
        if (opacity > 0) {
            opacity = opacity - .10;
            toDoContentBox.style.opacity = `${opacity}`;
            toDoContentBox.style.zIndex = '0';
            _edit__WEBPACK_IMPORTED_MODULE_0__.panes.classList.remove('enlarged');
            for (let i = 0; i < _edit__WEBPACK_IMPORTED_MODULE_0__.panes.children.length; i++) {
                _edit__WEBPACK_IMPORTED_MODULE_0__.panes.children[i].classList.remove('dissapear');
            }
        } else {
            clearInterval(intervalID);
        }
    }, 25)
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
/* harmony import */ var _modules_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/delete */ "./src/modules/delete.js");








if (JSON.parse(localStorage.getItem('projects')) !== null && JSON.parse(localStorage.getItem('projects')).length > 0) {
    window.onload = (0,_modules_edit__WEBPACK_IMPORTED_MODULE_3__.retrieveProjects)();
}

// logic for pulsing the icons in the navbar
(0,_modules_beat__WEBPACK_IMPORTED_MODULE_1__.addBeat)();
(0,_modules_beat__WEBPACK_IMPORTED_MODULE_1__.removeBeat)();

_modules_set__WEBPACK_IMPORTED_MODULE_2__.plusButton.addEventListener('click', _modules_set__WEBPACK_IMPORTED_MODULE_2__.fadeInPage);
_modules_set__WEBPACK_IMPORTED_MODULE_2__.complete.addEventListener('click', _modules_set__WEBPACK_IMPORTED_MODULE_2__.fadeOutPage);
(0,_modules_delete__WEBPACK_IMPORTED_MODULE_4__.deleteToDo)();





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw0Q0FBNEMseUhBQXlDO0FBQ3JGLDRDQUE0QyxxSEFBdUM7QUFDbkYsNENBQTRDLDJHQUFrQztBQUM5RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxhQUFhLHdGQUF3RixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsUUFBUSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUss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VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDdUM7QUFDa0I7QUFDVDs7QUFFdkI7OztBQUc5QztBQUNBLG9CQUFvQiwrREFBZ0I7QUFDcEM7O0FBRUE7QUFDQSxzREFBTztBQUNQLHlEQUFVOztBQUVWLG9EQUFVLDJCQUEyQixvREFBVTtBQUMvQyxrREFBUSwyQkFBMkIscURBQVc7QUFDOUMsMkRBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbm90aWZpY2F0aW9uLm1wMyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9iZWF0LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NoYW5nZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZWRpdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zZXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdHJ1bmNhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQWxlZ3JleWFTQ1JlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9BbGVncmV5YVNDTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vQWxlZ3JleWFTQ0JvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9RdWlja3NhbmQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBEZWZhdWx0IFN0eWxpbmcgKi9cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBSZWd1bGFyJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBNZWRpdW0nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhIEJvbGQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCBOb3JtYWwnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCBCb2xkJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuOnJvb3Qge1xuICAgIC0tU2lub3BpYTogI0MwNEUyMTtcbiAgICAtLVNpZW5uYTogIzdBMzExNTtcbiAgICAtLVdoZWF0OiAjRTNEMUExO1xuICAgIC0tU21va3ktYmxhY2s6ICMyMDFBMDk7XG4gICAgLS1BbnRpLWZsYXNoLXdoaXRlOiAjRTlFQkVEO1xuICAgIC0tT255eDogIzM3M0Q0MztcbiAgICAtLVZpdmlkLXNreS1ibHVlOiAjMDBENEY1O1xuICAgIC0tQ2FyaWJiZWFuLWN1cnJlbnQ6ICMwMDZBN0E7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kIE5vcm1hbCc7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxufVxuXG5tYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM3NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibmF2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFuZXNcIjtcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5uYXZiYXIge1xuICAgIGdyaWQtYXJlYTogbmF2O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tU2llbm5hKTtcbiAgICBjb2xvcjogdmFyKC0tQW50aS1mbGFzaC13aGl0ZSk7XG59XG5cbi5uYXZiYXIgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgQm9sZCc7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhIE5vcm1hbCc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1BbnRpLWZsYXNoLXdoaXRlKTtcbn1cblxuLnRvRG9Db250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDUwcHggKyAtMnZ3KTtcbiAgICBsZWZ0OiBjYWxjKDUwcHggKyAtMi40dncpO1xuICAgIGdyaWQtYXJlYTogY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cmVtO1xuICAgIHBhZGRpbmc6IDRyZW0gM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IDJweCA1cHggMTBweCByZ2JhKDIyNywgMjA5LCAxNjEsIDAuNCk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tT255eCk7XG4gICAgY29sb3I6IHZhcigtLUFudGktZmxhc2gtd2hpdGUpO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiAwO1xufVxuXG5cblxuLnRvcFNlY3Rpb24sXG4ubWlkZGxlU2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9wU2VjdGlvbiBpbnB1dCxcbi5taWRkbGVTZWN0aW9uIGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMjMzLCAyMzUsIDIzNywgMC40KTtcbn1cblxubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMSk7XG59XG5cbi50b3BTZWN0aW9uIGlucHV0OjpwbGFjZWhvbGRlcixcbi5taWRkbGVTZWN0aW9uIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuICAgICAgICAgICAgXG4jdGl0bGUsXG4jbm90ZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcbn1cblxuLmZpbmFsU2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmlucHV0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYXRldGltZS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGF0ZXRpbWUtd3JhcHBlciBpbnB1dCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgyMzMsIDIzNSwgMjM3LCAwLjQpO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG5cbi5jb21wbGV0ZSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTByZW07XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVNpZW5uYSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tcGxldGU6aG92ZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHNjYWxlOiAxLjE7XG59XG5cbi5lZGl0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDVyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMjMzLCAyMzUsIDIzNywgMC4zKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmVkaXQ6aG92ZXIge1xuICAgIHNjYWxlOiAxLjE7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tQ2FyaWJiZWFuLWN1cnJlbnQpO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMjMzLCAyMzUsIDIzNywgMC40KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6IHZhcigtLUFudGktZmxhc2gtd2hpdGUpO1xufVxuXG4udG9Eb1BhbmVzIHtcbiAgICBncmlkLWFyZWE6IHBhbmVzO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3NWRlZywgdmFyKC0tQW50aS1mbGFzaC13aGl0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcigtLVdoZWF0KSk7XG59XG5cbi5lbmxhcmdlZCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgICBtYXJnaW46IDJyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM0cmVtO1xuICAgIG1heC1oZWlnaHQ6IDIycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDdweCByZ2JhKDMyLCAyNiwgOSwgMC42KTtcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjVweCk7XG4gICAgb3BhY2l0eTogMDsgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBsaW5lYXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tU2lub3BpYSk7XG4gICAgY29sb3I6IHZhcigtLUFudGktZmxhc2gtd2hpdGUpO1xufVxuXG4ucHJvamVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ2FyaWJiZWFuLWN1cnJlbnQpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRpc3NhcGVhciB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnByb2plY3RJbmZvIHtcbiAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnRpbWVDb250YWluZXIge1xuICAgIGZsZXgtYmFzaXM6IDIwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnByb2plY3RJbmZvIGgzIHtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCc7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLnByb2plY3RJbmZvIHAge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4udGltZUNvbnRhaW5lciBwIHtcblxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uYnV0dG9uQ29udGFpbmVyIHtcbiAgICBmbGV4LWJhc2lzOiAzMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxLjVyZW07XG59XG5cbi5kZWxldGVQYW5lIHtcbiAgICB3aWR0aDogN3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMjMzLCAyMzUsIDIzNywgMC42KTtcbn1cblxuLmRlbGV0ZVBhbmU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgc2NhbGU6IDEuMTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi5kZWxldGVQYW5lIGkge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5cblxuLmV4cGFuZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA3cmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDIzMywgMjM1LCAyMzcsIDAuNik7XG59XG5cbi5leHBhbmQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xuICAgIHNjYWxlOiAxLjE7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuXG5cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgXG4gICAgbWFpbiB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNHJlbSAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogN3JlbSAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibmF2IG5hdlwiXG4gICAgICAgIFwiY29udGVudCBjb250ZW50XCJcbiAgICAgICAgXCJwYW5lcyBwYW5lc1wiO1xuICAgICAgICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLWNvbHVtbnMgMC41cyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgXG4gICAgLnByb2plY3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDJyZW07XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5wcm9qZWN0SW5mbyB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgXG5cblxuICAgIC8qIGNoYW5nZSBwcm9qZWN0cyB0cmFuc2l0aW9uIHRvIGZvY3VzIG9uIG1haW4gcGFnZSBpbnN0ZWFkIG9mIHNpZGViYXIgKi9cbiAgICBcbiAgICAubmF2YmFyIHtcbiAgICAgICAgZ3JpZC1hcmVhOiBuYXY7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDI1cmVtO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG4gICAgXG4gICAgLnRvRG9Db250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6IDEwcmVtIDVyZW07XG4gICAgICAgIGdhcDogNXJlbTtcbiAgICAgICAgdG9wOiBjYWxjKDUwcHggKyAydncpO1xuICAgICAgICBsZWZ0OiBjYWxjKDUwcHggKyA0LjV2dyk7XG4gICAgfVxuXG4gICAgLnRvRG9QYW5lcyB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgxNTBweCwgMzM1cHgpKTtcbiAgICAgICAgZ2FwOiAycmVtO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG59XG5cbi8qICAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQkFBb0I7O0FBRXBCO0lBQ0ksK0JBQStCO0lBQy9CLDRDQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDRDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDRDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDRDQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDRDQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7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YUFBYTtRQUNiLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUztRQUNULHFCQUFxQjtRQUNyQix3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxzREFBc0Q7UUFDdEQsU0FBUztRQUNULHFCQUFxQjtJQUN6Qjs7QUFFSjs7QUFFQSxLQUFLXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIERlZmF1bHQgU3R5bGluZyAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhIFJlZ3VsYXInO1xcbiAgICBzcmM6IHVybCgnLi9BbGVncmV5YVNDUmVndWxhci50dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBNZWRpdW0nO1xcbiAgICBzcmM6IHVybCgnLi9BbGVncmV5YVNDTWVkaXVtLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhIEJvbGQnO1xcbiAgICBzcmM6IHVybCgnLi9BbGVncmV5YVNDQm9sZC50dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQgTm9ybWFsJztcXG4gICAgc3JjOiB1cmwoJy4vUXVpY2tzYW5kLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCBCb2xkJztcXG4gICAgc3JjOiB1cmwoJy4vUXVpY2tzYW5kLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1TaW5vcGlhOiAjQzA0RTIxO1xcbiAgICAtLVNpZW5uYTogIzdBMzExNTtcXG4gICAgLS1XaGVhdDogI0UzRDFBMTtcXG4gICAgLS1TbW9reS1ibGFjazogIzIwMUEwOTtcXG4gICAgLS1BbnRpLWZsYXNoLXdoaXRlOiAjRTlFQkVEO1xcbiAgICAtLU9ueXg6ICMzNzNENDM7XFxuICAgIC0tVml2aWQtc2t5LWJsdWU6ICMwMEQ0RjU7XFxuICAgIC0tQ2FyaWJiZWFuLWN1cnJlbnQ6ICMwMDZBN0E7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kIE5vcm1hbCc7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG5tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzNzVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibmF2XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiY29udGVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcInBhbmVzXFxcIjtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLVNpZW5uYSk7XFxuICAgIGNvbG9yOiB2YXIoLS1BbnRpLWZsYXNoLXdoaXRlKTtcXG59XFxuXFxuLm5hdmJhciBoMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgQm9sZCc7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uaWNvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbmkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmEge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBOb3JtYWwnO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1BbnRpLWZsYXNoLXdoaXRlKTtcXG59XFxuXFxuLnRvRG9Db250ZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGMoNTBweCArIC0ydncpO1xcbiAgICBsZWZ0OiBjYWxjKDUwcHggKyAtMi40dncpO1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXJlbTtcXG4gICAgcGFkZGluZzogNHJlbSAzcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDEwcHggcmdiYSgyMjcsIDIwOSwgMTYxLCAwLjQpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1Pbnl4KTtcXG4gICAgY29sb3I6IHZhcigtLUFudGktZmxhc2gtd2hpdGUpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG5cXG5cXG5cXG4udG9wU2VjdGlvbixcXG4ubWlkZGxlU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvcFNlY3Rpb24gaW5wdXQsXFxuLm1pZGRsZVNlY3Rpb24gaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDIzMywgMjM1LCAyMzcsIDAuNCk7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDEpO1xcbn1cXG5cXG4udG9wU2VjdGlvbiBpbnB1dDo6cGxhY2Vob2xkZXIsXFxuLm1pZGRsZVNlY3Rpb24gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4gICAgICAgICAgICBcXG4jdGl0bGUsXFxuI25vdGVzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMzByZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG59XFxuXFxuLmZpbmFsU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pbnB1dENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZXRpbWUtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRhdGV0aW1lLXdyYXBwZXIgaW5wdXQge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMjMzLCAyMzUsIDIzNywgMC40KTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcblxcbi5jb21wbGV0ZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTByZW07XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU2llbm5hKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlOmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHNjYWxlOiAxLjE7XFxufVxcblxcbi5lZGl0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDIzMywgMjM1LCAyMzcsIDAuMyk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uZWRpdDpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjE7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNhcmliYmVhbi1jdXJyZW50KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgyMzMsIDIzNSwgMjM3LCAwLjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1BbnRpLWZsYXNoLXdoaXRlKTtcXG59XFxuXFxuLnRvRG9QYW5lcyB7XFxuICAgIGdyaWQtYXJlYTogcGFuZXM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTc1ZGVnLCB2YXIoLS1BbnRpLWZsYXNoLXdoaXRlKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcigtLVdoZWF0KSk7XFxufVxcblxcbi5lbmxhcmdlZCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgICBtYXgtaGVpZ2h0OiAyMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDdweCByZ2JhKDMyLCAyNiwgOSwgMC42KTtcXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1cHgpO1xcbiAgICBvcGFjaXR5OiAwOyAqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgbGluZWFyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1TaW5vcGlhKTtcXG4gICAgY29sb3I6IHZhcigtLUFudGktZmxhc2gtd2hpdGUpO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNhcmliYmVhbi1jdXJyZW50KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGlzc2FwZWFyIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnByb2plY3RJbmZvIHtcXG4gICAgZmxleC1iYXNpczogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udGltZUNvbnRhaW5lciB7XFxuICAgIGZsZXgtYmFzaXM6IDIwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0SW5mbyBoMyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5wcm9qZWN0SW5mbyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50aW1lQ29udGFpbmVyIHAge1xcblxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGZsZXgtYmFzaXM6IDMwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5kZWxldGVQYW5lIHtcXG4gICAgd2lkdGg6IDdyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDIzMywgMjM1LCAyMzcsIDAuNik7XFxufVxcblxcbi5kZWxldGVQYW5lOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHNjYWxlOiAxLjE7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxuLmRlbGV0ZVBhbmUgaSB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5cXG5cXG4uZXhwYW5kIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogN3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDIzMywgMjM1LCAyMzcsIDAuNik7XFxufVxcblxcbi5leHBhbmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG4gICAgc2NhbGU6IDEuMTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICBcXG4gICAgbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTRyZW0gMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3cmVtIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJuYXYgbmF2XFxcIlxcbiAgICAgICAgXFxcImNvbnRlbnQgY29udGVudFxcXCJcXG4gICAgICAgIFxcXCJwYW5lcyBwYW5lc1xcXCI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLWNvbHVtbnMgMC41cyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnByb2plY3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RJbmZvIHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgXFxuXFxuXFxuICAgIC8qIGNoYW5nZSBwcm9qZWN0cyB0cmFuc2l0aW9uIHRvIGZvY3VzIG9uIG1haW4gcGFnZSBpbnN0ZWFkIG9mIHNpZGViYXIgKi9cXG4gICAgXFxuICAgIC5uYXZiYXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbiAgICAuaWNvbnMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogMjVyZW07XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRvRG9Db250ZW50IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcGFkZGluZzogMTByZW0gNXJlbTtcXG4gICAgICAgIGdhcDogNXJlbTtcXG4gICAgICAgIHRvcDogY2FsYyg1MHB4ICsgMnZ3KTtcXG4gICAgICAgIGxlZnQ6IGNhbGMoNTBweCArIDQuNXZ3KTtcXG4gICAgfVxcblxcbiAgICAudG9Eb1BhbmVzIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgxNTBweCwgMzM1cHgpKTtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbn1cXG5cXG4vKiAgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjhiYWNkZmRiZjZmN2UzNGZjZDY3OTdiMGExYWNhNzQubXAzXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcblxuY29uc3QgYWRkQmVhdCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgbGV0IGljb25FdmVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoaWNvbkV2ZW50LnRhZ05hbWUgPT09ICdJJyAmJiBpY29uRXZlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmQnKSkge1xuICAgICAgaWNvbkV2ZW50LmNsYXNzTGlzdC5hZGQoJ2ZhLWJlYXQnKTtcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgbGV0IGljb25FdmVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoaWNvbkV2ZW50LnRhZ05hbWUgPT09ICdJJyAmJiBpY29uRXZlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1wbHVzJykpIHtcbiAgICAgIGljb25FdmVudC5jbGFzc0xpc3QuYWRkKCdmYS1iZWF0Jyk7XG4gICAgfSBcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZXZlbnQpID0+IHtcbiAgICBsZXQgaWNvbkV2ZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChpY29uRXZlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVQYW5lJykpIHtcbiAgICAgIGljb25FdmVudC5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2ZhLWJlYXQnKTtcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IHJlbW92ZUJlYXQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGV2ZW50KSA9PiB7XG4gICAgbGV0IGljb25FdmVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoaWNvbkV2ZW50LnRhZ05hbWUgPT09ICdJJyAmJiBpY29uRXZlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmQnKSkge1xuICAgICAgaWNvbkV2ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJlYXQnKTtcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZXZlbnQpID0+IHtcbiAgICBsZXQgaWNvbkV2ZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChpY29uRXZlbnQudGFnTmFtZSA9PT0gJ0knICYmIGljb25FdmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXBsdXMnKSkge1xuICAgICAgaWNvbkV2ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJlYXQnKTtcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZXZlbnQpID0+IHtcbiAgICBsZXQgaWNvbkV2ZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChpY29uRXZlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVQYW5lJykpIHtcbiAgICAgIGljb25FdmVudC5maXJzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJlYXQnKTtcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCB7IGFkZEJlYXQsIHJlbW92ZUJlYXQgfTtcbiIsImltcG9ydCB7IGNvbXBsZXRlLCBzbGlkZUluUGFnZSwgc2xpZGVPdXRQYWdlIH0gZnJvbSAnLi9zZXQnO1xuaW1wb3J0IHsgcHJvamVjdHMsIHRvRG9BcnIsIHRpdGxlLCBjcmVhdGlvbkNvbnRlbnQsIHBhbmVzLCBlbGVtZW50cywgY3JlYXRlUHJvamVjdCwgdGltZXJWYWx1ZSwgbm90aWZ5LCBwbGF5Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi9lZGl0JztcbmltcG9ydCB7IHRydW5jYXRlVGV4dCB9IGZyb20gJy4vdHJ1bmNhdGUnO1xuXG5sZXQgbmV3RWxlbWVudHM7XG5cbmZ1bmN0aW9uIHJld3JpdGVUb1BhZ2UoYXJyKSB7XG4gICAgd2hpbGUgKHBhbmVzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFuZXMucmVtb3ZlQ2hpbGQocGFuZXMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7ICAgICBcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0JHtpICsgMX1gKTtcbiAgICAgICAgbmV3RGl2LmlkID0gaTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJbmZvJyk7XG5cbiAgICAgICAgaWYgKGFycltpXS50aXRsZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBhcnJbaV0udGl0bGU7XG4gICAgICAgICAgICB0cnVuY2F0ZVRleHQocHJvamVjdFRpdGxlLCBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQsIDE2KTtcbiAgICAgICAgICAgIHByb2plY3RJbmZvLmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoYXJyW2ldLmNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHByb2plY3RDb250ZW50LnRleHRDb250ZW50ID0gYXJyW2ldLmNvbnRlbnQ7XG4gICAgICAgICAgICB0cnVuY2F0ZVRleHQocHJvamVjdENvbnRlbnQsIHByb2plY3RDb250ZW50LnRleHRDb250ZW50LCAxNik7XG4gICAgICAgICAgICBwcm9qZWN0SW5mby5hcHBlbmQocHJvamVjdENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGltZUNvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGltZXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aW1lclAuY2xhc3NMaXN0LmFkZCgndGltZXJQJyk7XG4gICAgICAgIHRpbWVDb250YWluZXIuYXBwZW5kKHRpbWVyUCk7XG5cbiAgICAgICAgZnVuY3Rpb24gbmV3Q291bnRkb3duKCkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKHRvRG9BcnJbaV0udGltZXIpO1xuICAgICAgICAgICAgbGV0IHRhcmdldFRpbWUgPSB0YXJnZXREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgbGV0IGxlZnRvdmVyVGltZSA9IE1hdGguYWJzKHRhcmdldFRpbWUgLSB0b2RheSkgLyAxMDAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxlZnRvdmVyVGltZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVyUC50ZXh0Q29udGVudCA9ICdUaW1lXFwncyB1cCc7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlOb3RpZmljYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihsZWZ0b3ZlclRpbWUgLyA2MCAvIDYwIC8gMjQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IobGVmdG92ZXJUaW1lIC8gNjAgLyA2MCAlIDI0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IobGVmdG92ZXJUaW1lIC8gNjAgJSA2MCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKGxlZnRvdmVyVGltZSAlIDYwKTtcblxuICAgICAgICAgICAgICAgICAgICB0aW1lclAudGV4dENvbnRlbnQgPSBgJHtkYXlzfWQgJHtob3Vyc31oICR7bWludXRlc31tICR7c2Vjb25kc31zYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q291bnRkb3duKCk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXInKTtcblxuICAgICAgICBjb25zdCBkZWxldGVQYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVBhbmUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlUGFuZScpO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGRlbGV0ZVBhbmUpO1xuXG4gICAgICAgIGNvbnN0IG1pbnVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBtaW51c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xuICAgICAgICBtaW51c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1taW51cycpO1xuICAgICAgICBtaW51c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1tZCcpO1xuICAgICAgICBkZWxldGVQYW5lLmFwcGVuZChtaW51c0J1dHRvbik7XG5cbiAgICAgICAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgICAgICAgZXhwYW5kLnRleHRDb250ZW50ID0gJ0V4cGFuZCc7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZXhwYW5kKTtcbiAgICAgICAgXG4gICAgICAgIG5ld0Rpdi5hcHBlbmQocHJvamVjdEluZm8pO1xuICAgICAgICBuZXdEaXYuYXBwZW5kKHRpbWVDb250YWluZXIpO1xuICAgICAgICBuZXdEaXYuYXBwZW5kKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgIHBhbmVzLmFwcGVuZChuZXdEaXYpO1xuICAgICAgICBcbiAgICAgICAgbmV3RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpOyAgXG4gICAgICAgIGV4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghbmV3RGl2LmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGFycltpXS50aXRsZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGVudC50ZXh0Q29udGVudCA9IGFycltpXS5jb250ZW50O1xuICAgICAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xuICAgICAgICAgICAgICAgIGV4cGFuZC50ZXh0Q29udGVudCA9ICdDb250cmFjdCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRydW5jYXRlVGV4dChwcm9qZWN0VGl0bGUsIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCwgMTYpO1xuICAgICAgICAgICAgICAgIHRydW5jYXRlVGV4dChwcm9qZWN0Q29udGVudCwgcHJvamVjdENvbnRlbnQudGV4dENvbnRlbnQsIDE2KTtcbiAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICBleHBhbmQudGV4dENvbnRlbnQgPSAnRXhwYW5kJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybWF0aW9uID0gLTI1O1xuICAgICAgICAgICAgbGV0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wYWNpdHkgPCAxICYmIHRyYW5zZm9ybWF0aW9uIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ID0gb3BhY2l0eSArIC4yMDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb24gPSB0cmFuc2Zvcm1hdGlvbiArIDU7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMCwgJHt0cmFuc2Zvcm1hdGlvbn1weClgO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTUpXG4gICAgICAgIH0sIDMwMClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBcbiAgICBcbiAgICBcbiAgICBleHBvcnQgeyBwYW5lcywgcmV3cml0ZVRvUGFnZSB9OyIsImltcG9ydCB7IHRvRG9BcnIgfSBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgeyBwYW5lcywgcmV3cml0ZVRvUGFnZSB9IGZyb20gXCIuL2NoYW5nZVwiO1xuXG5mdW5jdGlvbiBkZWxldGVUb0RvKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7ICAgIFxuICAgICAgICBsZXQgZGVsZXRlRXZlbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmIChkZWxldGVFdmVudC50YWdOYW1lID09PSAnQlVUVE9OJyAmJiBkZWxldGVFdmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZVBhbmUnKSkge1xuICAgICAgICAgICAgdG9Eb0Fyci5zcGxpY2UoZGVsZXRlRXZlbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgICAgICAgICBsb2NhbEFyci5zcGxpY2UoZGVsZXRlRXZlbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkLCAxKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGxvY2FsQXJyKSk7XG4gICAgICAgICAgICByZXdyaXRlVG9QYWdlKHRvRG9BcnIpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IHsgZGVsZXRlVG9EbyB9OyIsImNvbnN0IHRvcFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wU2VjdGlvbicpO1xuY29uc3QgbWlkZGxlU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWRkbGVTZWN0aW9uJyk7XG5jb25zdCBmaW5hbFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmluYWxTZWN0aW9uJyk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuY29uc3QgY3JlYXRpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVzJyk7XG5jb25zdCB0aW1lclZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldFRpbWVyJyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuY29uc3QgcGFuZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb1BhbmVzJyk7XG5sZXQgZWxlbWVudHM7XG5sZXQgbmV3UHJvamVjdDtcblxuaW1wb3J0IG5vdGlmaWNhdGlvbiBmcm9tICcuLi9ub3RpZmljYXRpb24ubXAzJztcbmltcG9ydCB7IGNvbXBsZXRlIH0gZnJvbSAnLi9zZXQnO1xuaW1wb3J0IHsgdHJ1bmNhdGVUZXh0IH0gZnJvbSAnLi90cnVuY2F0ZSc7XG5cbmxldCB0b0RvQXJyID0gW107XG5cbndpbmRvdy5vbmxvYWQgPSBzZXRUb0RvQXJyKCk7XG5cbmZ1bmN0aW9uIHNldFRvRG9BcnIoKSB7XG4gICAgaWYgKHRvRG9BcnIubGVuZ3RoID09PSAwICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBtYWluQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgICAgIHRvRG9BcnIgPSBtYWluQXJyO1xuICAgIH0gZWxzZSBpZiAodG9Eb0Fyci5sZW5ndGggPT09IDAgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuXG5jbGFzcyBQcm9qZWN0cyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGNvbnRlbnQsIHRpbWVyKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy50aW1lciA9IHRpbWVyO1xuICAgIH1cblxuICAgIHdyaXRlVG9QYWdlKCkge1xuXG4gICAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IHRvRG9BcnIubGVuZ3RoIC0gMTsgaSA8IHRvRG9BcnIubGVuZ3RoOyBpKyspIHsgICAgIFxuICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0JHtpICsgMX1gKTtcbiAgICAgICAgICAgIG5ld0Rpdi5pZCA9IGk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0SW5mby5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SW5mbycpO1xuXG4gICAgICAgICAgICBpZiAodG9Eb0FycltpXS50aXRsZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRvRG9BcnJbaV0udGl0bGU7XG4gICAgICAgICAgICAgICAgdHJ1bmNhdGVUZXh0KHByb2plY3RUaXRsZSwgcHJvamVjdFRpdGxlLnRleHRDb250ZW50LCAxNik7XG4gICAgICAgICAgICAgICAgcHJvamVjdEluZm8uYXBwZW5kKHByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0b0RvQXJyW2ldLmNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0kgZG8gbm90IGVxdWFsIGVtcHR5JylcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGVudC50ZXh0Q29udGVudCA9IHRvRG9BcnJbaV0uY29udGVudDtcbiAgICAgICAgICAgICAgICB0cnVuY2F0ZVRleHQocHJvamVjdENvbnRlbnQsIHByb2plY3RDb250ZW50LnRleHRDb250ZW50LCAxNik7XG4gICAgICAgICAgICAgICAgcHJvamVjdEluZm8uYXBwZW5kKHByb2plY3RDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGltZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aW1lQ29udGFpbmVyJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHRpbWVyIHN0dWZmXG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHRpbWVyUC5jbGFzc0xpc3QuYWRkKCd0aW1lclAnKTtcbiAgICAgICAgICAgIHRpbWVDb250YWluZXIuYXBwZW5kKHRpbWVyUCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50ZG93blRpbWVyKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldERhdGUgPSBuZXcgRGF0ZSh0b0RvQXJyW2ldLnRpbWVyKTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0VGltZSA9IHRhcmdldERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdG92ZXJUaW1lID0gKHRhcmdldFRpbWUgLSB0b2RheSkgLyAxMDAwO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnRvdmVyVGltZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lclAudGV4dENvbnRlbnQgPSAnVGltZVxcJ3MgdXAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheU5vdGlmaWNhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGxlZnRvdmVyVGltZSAvIDYwIC8gNjAgLyAyNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IobGVmdG92ZXJUaW1lIC8gNjAgLyA2MCAlIDI0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKGxlZnRvdmVyVGltZSAvIDYwICUgNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IobGVmdG92ZXJUaW1lICUgNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lclAudGV4dENvbnRlbnQgPSBgJHtkYXlzfWQgJHtob3Vyc31oICR7bWludXRlc31tICR7c2Vjb25kc31zYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvdW50ZG93blRpbWVyKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lcicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkZWxldGVQYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVQYW5lLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVBhbmUnKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZGVsZXRlUGFuZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG1pbnVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICAgICAgICAgIG1pbnVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLW1pbnVzJyk7XG4gICAgICAgICAgICBtaW51c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1tZCcpO1xuICAgICAgICAgICAgZGVsZXRlUGFuZS5hcHBlbmQobWludXNCdXR0b24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgICAgICAgICAgIGV4cGFuZC50ZXh0Q29udGVudCA9ICdFeHBhbmQnO1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChleHBhbmQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBuZXdEaXYuYXBwZW5kKHByb2plY3RJbmZvKTtcbiAgICAgICAgICAgIG5ld0Rpdi5hcHBlbmQodGltZUNvbnRhaW5lcik7XG4gICAgICAgICAgICBuZXdEaXYuYXBwZW5kKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgICAgICBwYW5lcy5hcHBlbmQobmV3RGl2KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpOyAgIFxuICAgICAgICAgICAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbmV3RGl2LmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0b0RvQXJyW2ldLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGVudC50ZXh0Q29udGVudCA9IHRvRG9BcnJbaV0uY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZC50ZXh0Q29udGVudCA9ICdDb250cmFjdCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ1bmNhdGVUZXh0KHByb2plY3RUaXRsZSwgcHJvamVjdFRpdGxlLnRleHRDb250ZW50LCAxNik7XG4gICAgICAgICAgICAgICAgICAgIHRydW5jYXRlVGV4dChwcm9qZWN0Q29udGVudCwgcHJvamVjdENvbnRlbnQudGV4dENvbnRlbnQsIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZC50ZXh0Q29udGVudCA9ICdFeHBhbmQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybWF0aW9uID0gLTI1O1xuICAgICAgICAgICAgbGV0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wYWNpdHkgPCAxICYmIHRyYW5zZm9ybWF0aW9uIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ID0gb3BhY2l0eSArIC4yMDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb24gPSB0cmFuc2Zvcm1hdGlvbiArIDU7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGl2LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMCwgJHt0cmFuc2Zvcm1hdGlvbn1weClgO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTUpXG4gICAgICAgIH0sIDMwMClcbiAgICB9XG4gICAgXG4gICAgXG59XG5cbmxldCBub3RpZnkgPSBuZXcgQXVkaW8obm90aWZpY2F0aW9uKTtcblxuZnVuY3Rpb24gcGxheU5vdGlmaWNhdGlvbigpIHtcbiAgICBub3RpZnkucGxheSgpO1xufVxuXG5mdW5jdGlvbiBhZGRUb1N0b3JhZ2UoYXJyKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYXJyKSk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlUHJvamVjdHMoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHVzZXJBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICAgICAgd3JpdGVSZXRyaWV2YWxEYXRhKHVzZXJBcnIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxubGV0IG5ld0RpdjtcblxuZnVuY3Rpb24gd3JpdGVSZXRyaWV2YWxEYXRhKGFycikge1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7ICAgICBcbiAgICAgICAgICAgIG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0JHtpICsgMX1gKTtcbiAgICAgICAgICAgIG5ld0Rpdi5pZCA9IGk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0SW5mby5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SW5mbycpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYXJyW2ldLnRpdGxlO1xuICAgICAgICAgICAgdHJ1bmNhdGVUZXh0KHByb2plY3RUaXRsZSwgcHJvamVjdFRpdGxlLnRleHRDb250ZW50LCAxNik7XG4gICAgICAgICAgICBwcm9qZWN0SW5mby5hcHBlbmQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGVudC50ZXh0Q29udGVudCA9IGFycltpXS5jb250ZW50O1xuICAgICAgICAgICAgdHJ1bmNhdGVUZXh0KHByb2plY3RDb250ZW50LCBwcm9qZWN0Q29udGVudC50ZXh0Q29udGVudCwgMTYpO1xuICAgICAgICAgICAgcHJvamVjdEluZm8uYXBwZW5kKHByb2plY3RDb250ZW50KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGltZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aW1lQ29udGFpbmVyJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHRpbWVyIHN0dWZmXG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHRpbWVyUC5jbGFzc0xpc3QuYWRkKCd0aW1lclAnKTtcbiAgICAgICAgICAgIHRpbWVDb250YWluZXIuYXBwZW5kKHRpbWVyUCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50ZG93blRpbWVyKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldERhdGUgPSBuZXcgRGF0ZShhcnJbaV0udGltZXIpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdG92ZXJUaW1lID0gKHRhcmdldERhdGUgLSB0b2RheSkgLyAxMDAwO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnRvdmVyVGltZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lclAudGV4dENvbnRlbnQgPSAnVGltZVxcJ3MgdXAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheU5vdGlmaWNhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGxlZnRvdmVyVGltZSAvIDYwIC8gNjAgLyAyNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IobGVmdG92ZXJUaW1lIC8gNjAgLyA2MCAlIDI0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKGxlZnRvdmVyVGltZSAvIDYwICUgNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IobGVmdG92ZXJUaW1lICUgNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lclAudGV4dENvbnRlbnQgPSBgJHtkYXlzfWQgJHtob3Vyc31oICR7bWludXRlc31tICR7c2Vjb25kc31zYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvdW50ZG93blRpbWVyKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lcicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkZWxldGVQYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVQYW5lLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVBhbmUnKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZGVsZXRlUGFuZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG1pbnVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICAgICAgICAgIG1pbnVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLW1pbnVzJyk7XG4gICAgICAgICAgICBtaW51c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1tZCcpO1xuICAgICAgICAgICAgZGVsZXRlUGFuZS5hcHBlbmQobWludXNCdXR0b24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgICAgICAgICAgIGV4cGFuZC50ZXh0Q29udGVudCA9ICdFeHBhbmQnO1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChleHBhbmQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBuZXdEaXYuYXBwZW5kKHByb2plY3RJbmZvKTtcbiAgICAgICAgICAgIG5ld0Rpdi5hcHBlbmQodGltZUNvbnRhaW5lcik7XG4gICAgICAgICAgICBuZXdEaXYuYXBwZW5kKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgICAgICBwYW5lcy5hcHBlbmQobmV3RGl2KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpOyAgIFxuICAgICAgICAgICAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbmV3RGl2LmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBhcnJbaV0udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250ZW50LnRleHRDb250ZW50ID0gYXJyW2ldLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBleHBhbmQudGV4dENvbnRlbnQgPSAnQ29udHJhY3QnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRydW5jYXRlVGV4dChwcm9qZWN0VGl0bGUsIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCwgMTYpO1xuICAgICAgICAgICAgICAgICAgICB0cnVuY2F0ZVRleHQocHJvamVjdENvbnRlbnQsIHByb2plY3RDb250ZW50LnRleHRDb250ZW50LCAxNik7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBleHBhbmQudGV4dENvbnRlbnQgPSAnRXhwYW5kJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBvcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1hdGlvbiA9IC0yNTtcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcGFjaXR5IDwgMSAmJiB0cmFuc2Zvcm1hdGlvbiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSA9IG9wYWNpdHkgKyAuMjA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uID0gdHJhbnNmb3JtYXRpb24gKyA1O1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDAsICR7dHJhbnNmb3JtYXRpb259cHgpYDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDE1KVxuICAgICAgICB9LCAzMDApXG59XG5cblxuXG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgIGNyZWF0aW9uQ29udGVudC52YWx1ZSA9ICcnO1xuICAgIHRpbWVyVmFsdWUudmFsdWUgPSAnJztcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgIGlmICh0b0RvQXJyLmxlbmd0aCA9PT0gMCAmJiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSkge1xuICAgICAgICBsZXQgbWFpbkFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgICAgICB0b0RvQXJyID0gbWFpbkFycjtcbiAgICAgICAgY29uc3QgdGltZXJEYXRlID0gbmV3IERhdGUodGltZXJWYWx1ZS52YWx1ZSk7XG4gICAgICAgIG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdHModGl0bGUudmFsdWUsIGNyZWF0aW9uQ29udGVudC52YWx1ZSwgdGltZXJEYXRlKTtcbiAgICAgICAgdG9Eb0Fyci5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBhZGRUb1N0b3JhZ2UodG9Eb0Fycik7XG4gICAgICAgIG5ld1Byb2plY3Qud3JpdGVUb1BhZ2UoKTtcbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGltZXJEYXRlID0gbmV3IERhdGUodGltZXJWYWx1ZS52YWx1ZSk7XG4gICAgICAgIG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdHModGl0bGUudmFsdWUsIGNyZWF0aW9uQ29udGVudC52YWx1ZSwgdGltZXJEYXRlKTtcbiAgICAgICAgdG9Eb0Fyci5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBhZGRUb1N0b3JhZ2UodG9Eb0Fycik7XG4gICAgICAgIG5ld1Byb2plY3Qud3JpdGVUb1BhZ2UoKTtcbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGxldCBldmVudFRhciA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoZXZlbnRUYXIudGFnTmFtZSA9PT0gJ0JVVFRPTicgJiYgZXZlbnRUYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZScpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSSB3YXMgY2xpY2tlZCcpXG4gICAgICAgICAgICBpZiAodGltZXJWYWx1ZS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBlbnRlciBhIGRhdGUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufSlcblxuIFxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0cywgdG9Eb0FyciwgdGl0bGUsIGNyZWF0aW9uQ29udGVudCwgcGFuZXMsIGVsZW1lbnRzLCB0aW1lclZhbHVlLCBub3RpZnksIHBsYXlOb3RpZmljYXRpb24sIHJldHJpZXZlUHJvamVjdHMgfVxuXG4iLCJjb25zdCB0b0RvQ29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvQ29udGVudCcpO1xuY29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRUaW1lcicpO1xuY29uc3QgZWRpdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdENvbnRlbnQnKTtcbmNvbnN0IHBsdXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbnMgPiBpOmZpcnN0LWNoaWxkJyk7XG5jb25zdCBjb21wbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZScpO1xuXG5pbXBvcnQgeyBwYW5lcyB9IGZyb20gJy4vZWRpdCc7XG5cbmxldCBvcGFjaXR5ID0gMDtcblxuLyogbWFrZSB0aGUgcGFnZSAyMCUgcGFkZGVkIGZyb20gdGhlIHRvRG9QYW5lcyB3aGlsZSBoYXZpbmdcbnRvRG9QYW5lcyBlbmxhcmdlZCB3aGlsZSBpdCdzIGFjdGl2ZSAqL1xuXG5cblxuZnVuY3Rpb24gZmFkZUluUGFnZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhbmVzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBhbmVzLmNoaWxkcmVuW2ldLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgcGFuZXMuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgnZGlzc2FwZWFyJyk7XG4gICAgfVxuICAgIGxldCBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAob3BhY2l0eSA8IDEpIHtcbiAgICAgICAgICAgIG9wYWNpdHkgPSBvcGFjaXR5ICsgLjEwO1xuICAgICAgICAgICAgdG9Eb0NvbnRlbnRCb3guc3R5bGUub3BhY2l0eSA9IGAke29wYWNpdHl9YDtcbiAgICAgICAgICAgIHRvRG9Db250ZW50Qm94LnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICAgIHBhbmVzLmNsYXNzTGlzdC5hZGQoJ2VubGFyZ2VkJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgIH1cbiAgICB9LCAyNSlcbn1cblxuZnVuY3Rpb24gZmFkZU91dFBhZ2UoKSB7XG4gICAgbGV0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChvcGFjaXR5ID4gMCkge1xuICAgICAgICAgICAgb3BhY2l0eSA9IG9wYWNpdHkgLSAuMTA7XG4gICAgICAgICAgICB0b0RvQ29udGVudEJveC5zdHlsZS5vcGFjaXR5ID0gYCR7b3BhY2l0eX1gO1xuICAgICAgICAgICAgdG9Eb0NvbnRlbnRCb3guc3R5bGUuekluZGV4ID0gJzAnO1xuICAgICAgICAgICAgcGFuZXMuY2xhc3NMaXN0LnJlbW92ZSgnZW5sYXJnZWQnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFuZXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYW5lcy5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNzYXBlYXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgIH1cbiAgICB9LCAyNSlcbn1cblxuZXhwb3J0IHsgcGx1c0J1dHRvbiwgY29tcGxldGUsIGZhZGVJblBhZ2UsIGZhZGVPdXRQYWdlIH07IiwiZnVuY3Rpb24gdHJ1bmNhdGVUZXh0KGVsZSwgc3RyLCBudW0pIHtcbiAgICBpZiAoc3RyLmxlbmd0aCA8PSBudW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZS5pbm5lclRleHQgPSBzdHIuc2xpY2UoMCwgbnVtKSArICcuLi4uJztcbiAgICB9XG59XG5cblxuXG5leHBvcnQgeyB0cnVuY2F0ZVRleHR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBpY29ucywgYWRkQmVhdCwgcmVtb3ZlQmVhdCB9IGZyb20gJy4vbW9kdWxlcy9iZWF0JztcbmltcG9ydCB7IHBsdXNCdXR0b24sIGZhZGVPdXRQYWdlLCBjb21wbGV0ZSwgZmFkZUluUGFnZSB9IGZyb20gJy4vbW9kdWxlcy9zZXQnO1xuaW1wb3J0IHsgdG9Eb0FyciwgcHJvamVjdHMsIHJldHJpZXZlUHJvamVjdHMgfSBmcm9tICcuL21vZHVsZXMvZWRpdCc7XG5cbmltcG9ydCB7IGRlbGV0ZVRvRG8gfSBmcm9tICcuL21vZHVsZXMvZGVsZXRlJztcblxuXG5pZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgIT09IG51bGwgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkubGVuZ3RoID4gMCkge1xuICAgIHdpbmRvdy5vbmxvYWQgPSByZXRyaWV2ZVByb2plY3RzKCk7XG59XG5cbi8vIGxvZ2ljIGZvciBwdWxzaW5nIHRoZSBpY29ucyBpbiB0aGUgbmF2YmFyXG5hZGRCZWF0KCk7XG5yZW1vdmVCZWF0KCk7XG5cbnBsdXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmYWRlSW5QYWdlKTtcbmNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmFkZU91dFBhZ2UpO1xuZGVsZXRlVG9EbygpO1xuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=