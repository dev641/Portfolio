/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/menu/menu.ts":
/*!*************************************!*\
  !*** ./src/components/menu/menu.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_menu_menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/menu/menu.json */ "./src/data/menu/menu.json");

const itemGenerator = (items) => {
    return Array.isArray(items)
        ? items
            .map((menu) => `<li class="nav-container__list-item" id="nav-container__list-item">
                <a href="#${menu.href}">${menu.name}</a>
              </li>`)
            .join("")
        : `
    <img src="#${items.href}" alt="${items.name}-logo" class="nav-logo__image" id="nav-logo__image">
    <h2 class="nav-logo__name" id="nav-logo__name">${items.name}</h2>
  `;
};
const themeGenerator = () => {
    return `
  <div class="nav-container__theme" id="nav-container__theme">
      <button class="nav-container__theme-btn" id="nav-container__theme-btn">
      <i class="fa-solid fa-circle-half-stroke fa-2xl" style="color: #3b3d40"></i>
    </button>
    </div>
  `;
};
const nav = () => {
    const navData = [..._data_menu_menu_json__WEBPACK_IMPORTED_MODULE_0__.menu];
    console.log(navData);
    const navbar = `
        <nav class="nav" id="nav">
          <div class="nav-logo" id="nav-logo">
          ${itemGenerator(_data_menu_menu_json__WEBPACK_IMPORTED_MODULE_0__.brand)}</div>
          <div class="nav-container" id="nav-container">
            <ul class="nav-container__list" id="nav-container__list">
              ${itemGenerator(_data_menu_menu_json__WEBPACK_IMPORTED_MODULE_0__.menu)}
            </ul>
            ${themeGenerator()}
          </div>
        </nav>
  `;
    return navbar;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);


/***/ }),

/***/ "./src/constant/constant.ts":
/*!**********************************!*\
  !*** ./src/constant/constant.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MENU_PATH: () => (/* binding */ MENU_PATH)
/* harmony export */ });
const data = "../data";
const MENU_PATH = `${data}/menu/menu.json`;


/***/ }),

/***/ "./src/model/enum.ts":
/*!***************************!*\
  !*** ./src/model/enum.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeEnum: () => (/* binding */ ThemeEnum)
/* harmony export */ });
var ThemeEnum;
(function (ThemeEnum) {
    ThemeEnum["dark"] = "dark";
    ThemeEnum["light"] = "light";
})(ThemeEnum || (ThemeEnum = {}));
(function (ThemeEnum) {
    function isValidTheme(value) {
        return value === ThemeEnum.dark || value === ThemeEnum.light;
    }
    ThemeEnum.isValidTheme = isValidTheme;
})(ThemeEnum || (ThemeEnum = {}));


/***/ }),

/***/ "./src/model/theme.ts":
/*!****************************!*\
  !*** ./src/model/theme.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_menu_menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/menu/menu.json */ "./src/data/menu/menu.json");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum */ "./src/model/enum.ts");
/* harmony import */ var _util_UpdateJsonFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/UpdateJsonFile */ "./src/util/UpdateJsonFile.ts");
/* harmony import */ var _constant_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant/constant */ "./src/constant/constant.ts");




class Theme {
    constructor() {
        debugger;
        this._theme = this.getTheme(_data_menu_menu_json__WEBPACK_IMPORTED_MODULE_0__.theme);
    }
    get currentTheme() {
        return this._theme;
    }
    getTheme(theme) {
        return _enum__WEBPACK_IMPORTED_MODULE_1__.ThemeEnum.light === theme ? _enum__WEBPACK_IMPORTED_MODULE_1__.ThemeEnum.light : _enum__WEBPACK_IMPORTED_MODULE_1__.ThemeEnum.dark;
    }
    changeTheme(theme) {
        if (_enum__WEBPACK_IMPORTED_MODULE_1__.ThemeEnum.isValidTheme(theme) && this._theme !== theme) {
            this._theme = this.getTheme(theme);
            _util_UpdateJsonFile__WEBPACK_IMPORTED_MODULE_2__["default"].updateFile(_constant_constant__WEBPACK_IMPORTED_MODULE_3__.MENU_PATH, "theme", this._theme);
        }
    }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new Theme();
        return this._instance;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme.getInstance());


/***/ }),

/***/ "./src/util/UpdateJsonFile.ts":
/*!************************************!*\
  !*** ./src/util/UpdateJsonFile.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

class UpdateJson {
    constructor() {
        this.updateFile = (path, Key, Value) => {
            const data = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path, "utf-8");
            const parsedData = JSON.parse(data);
            parsedData[Key] = Value;
            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path, JSON.stringify(parsedData));
        };
    }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new UpdateJson();
        return this._instance;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateJson.getInstance());


/***/ }),

/***/ "./src/data/menu/menu.json":
/*!*********************************!*\
  !*** ./src/data/menu/menu.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"brand":{"name":"Dev","href":""},"menu":[{"name":"Home","href":"home"},{"name":"Experience","href":"experience"},{"name":"Experience","href":"education"},{"name":"Resume","href":"resume"},{"name":"Portfolio","href":"portfolio"},{"name":"Contact","href":"contact"}],"theme":"dark"}');

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu/menu */ "./src/components/menu/menu.ts");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _model_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/theme */ "./src/model/theme.ts");



const header = document.getElementById("header");
header.insertAdjacentHTML("afterbegin", (0,_components_menu_menu__WEBPACK_IMPORTED_MODULE_0__["default"])());
_model_theme__WEBPACK_IMPORTED_MODULE_2__["default"].changeTheme("light");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDYjtBQUNNO0FBSWxDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFvQixDQUFDO0FBR3BFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsaUVBQUcsRUFBRSxDQUFDLENBQUM7QUFFL0Msb0RBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/MmZmNCIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LnRzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvY29uc3RhbnQvY29uc3RhbnQudHMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9tb2RlbC9lbnVtLnRzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvbW9kZWwvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy91dGlsL1VwZGF0ZUpzb25GaWxlLnRzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBicmFuZCwgbWVudSB9IGZyb20gXCIuLi8uLi9kYXRhL21lbnUvbWVudS5qc29uXCI7XG5pbXBvcnQgdHlwZSB7XG4gIE1lbnVJdGVtLFxuICBNZW51R2VuZXJhdG9yLFxuICBUaGVtZUdlbmVyYXRvcixcbn0gZnJvbSBcIi4uLy4uL3R5cGVzL21lbnUuZC50c1wiO1xuLy8gaW1wb3J0IFRoZW1lIGZyb20gXCIuLi8uLi9tb2RlbC90aGVtZVwiO1xuY29uc3QgaXRlbUdlbmVyYXRvcjogTWVudUdlbmVyYXRvciA9IChpdGVtcykgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShpdGVtcylcbiAgICA/IGl0ZW1zXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgKFxuICAgICAgICAgICAgbWVudTogTWVudUl0ZW1cbiAgICAgICAgICApID0+IGA8bGkgY2xhc3M9XCJuYXYtY29udGFpbmVyX19saXN0LWl0ZW1cIiBpZD1cIm5hdi1jb250YWluZXJfX2xpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjJHttZW51LmhyZWZ9XCI+JHttZW51Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L2xpPmBcbiAgICAgICAgKVxuICAgICAgICAuam9pbihcIlwiKVxuICAgIDogYFxuICAgIDxpbWcgc3JjPVwiIyR7aXRlbXMuaHJlZn1cIiBhbHQ9XCIke2l0ZW1zLm5hbWV9LWxvZ29cIiBjbGFzcz1cIm5hdi1sb2dvX19pbWFnZVwiIGlkPVwibmF2LWxvZ29fX2ltYWdlXCI+XG4gICAgPGgyIGNsYXNzPVwibmF2LWxvZ29fX25hbWVcIiBpZD1cIm5hdi1sb2dvX19uYW1lXCI+JHtpdGVtcy5uYW1lfTwvaDI+XG4gIGA7XG59O1xuXG5jb25zdCB0aGVtZUdlbmVyYXRvcjogVGhlbWVHZW5lcmF0b3IgPSAoKSA9PiB7XG4gIHJldHVybiBgXG4gIDxkaXYgY2xhc3M9XCJuYXYtY29udGFpbmVyX190aGVtZVwiIGlkPVwibmF2LWNvbnRhaW5lcl9fdGhlbWVcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtY29udGFpbmVyX190aGVtZS1idG5cIiBpZD1cIm5hdi1jb250YWluZXJfX3RoZW1lLWJ0blwiPlxuICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUtaGFsZi1zdHJva2UgZmEtMnhsXCIgc3R5bGU9XCJjb2xvcjogIzNiM2Q0MFwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYDtcbn07XG5jb25zdCBuYXYgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdkRhdGEgPSBbLi4ubWVudV07XG4gIGNvbnNvbGUubG9nKG5hdkRhdGEpO1xuICBjb25zdCBuYXZiYXIgPSBgXG4gICAgICAgIDxuYXYgY2xhc3M9XCJuYXZcIiBpZD1cIm5hdlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtbG9nb1wiIGlkPVwibmF2LWxvZ29cIj5cbiAgICAgICAgICAke2l0ZW1HZW5lcmF0b3IoYnJhbmQpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtY29udGFpbmVyXCIgaWQ9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYtY29udGFpbmVyX19saXN0XCIgaWQ9XCJuYXYtY29udGFpbmVyX19saXN0XCI+XG4gICAgICAgICAgICAgICR7aXRlbUdlbmVyYXRvcihtZW51KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAke3RoZW1lR2VuZXJhdG9yKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICBgO1xuICByZXR1cm4gbmF2YmFyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2O1xuIiwiY29uc3QgZGF0YSA9IFwiLi4vZGF0YVwiO1xuZXhwb3J0IGNvbnN0IE1FTlVfUEFUSCA9IGAke2RhdGF9L21lbnUvbWVudS5qc29uYDtcbiIsImV4cG9ydCBlbnVtIFRoZW1lRW51bSB7XG4gIGRhcmsgPSBcImRhcmtcIixcbiAgbGlnaHQgPSBcImxpZ2h0XCIsXG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgVGhlbWVFbnVtIHtcbiAgZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRUaGVtZSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBUaGVtZUVudW0uZGFyayB8fCB2YWx1ZSA9PT0gVGhlbWVFbnVtLmxpZ2h0O1xuICB9XG59XG4iLCIvLyBpbXBvcnQgeyBUaGVtZVR5cGUsIFRoZW1lRW51bSB9IGZyb20gXCIuLi90eXBlcy9tZW51XCI7XG5pbXBvcnQgdHlwZSB7IFRoZW1lVHlwZSB9IGZyb20gXCIuLi90eXBlcy9tZW51LmQudHNcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4uL2RhdGEvbWVudS9tZW51Lmpzb25cIjtcbmltcG9ydCB7IFRoZW1lRW51bSB9IGZyb20gXCIuL2VudW1cIjtcbmltcG9ydCBVcGRhdGVKc29uIGZyb20gXCIuLi91dGlsL1VwZGF0ZUpzb25GaWxlXCI7XG5pbXBvcnQgeyBNRU5VX1BBVEggfSBmcm9tIFwiLi4vY29uc3RhbnQvY29uc3RhbnRcIjtcbmNsYXNzIFRoZW1lIHtcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBUaGVtZTtcbiAgcHJpdmF0ZSBfdGhlbWU6IFRoZW1lVHlwZTtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICB0aGlzLl90aGVtZSA9IHRoaXMuZ2V0VGhlbWUodGhlbWUpO1xuICB9XG4gIGdldCBjdXJyZW50VGhlbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lO1xuICB9XG4gIHByaXZhdGUgZ2V0VGhlbWUodGhlbWU6IHN0cmluZyk6IFRoZW1lVHlwZSB7XG4gICAgcmV0dXJuIFRoZW1lRW51bS5saWdodCA9PT0gdGhlbWUgPyBUaGVtZUVudW0ubGlnaHQgOiBUaGVtZUVudW0uZGFyaztcbiAgfVxuICBjaGFuZ2VUaGVtZSh0aGVtZTogc3RyaW5nKSB7XG4gICAgaWYgKFRoZW1lRW51bS5pc1ZhbGlkVGhlbWUodGhlbWUpICYmIHRoaXMuX3RoZW1lICE9PSB0aGVtZSkge1xuICAgICAgdGhpcy5fdGhlbWUgPSB0aGlzLmdldFRoZW1lKHRoZW1lKTtcbiAgICAgIFVwZGF0ZUpzb24udXBkYXRlRmlsZShNRU5VX1BBVEgsIFwidGhlbWVcIiwgdGhpcy5fdGhlbWUpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFRoZW1lKCk7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lLmdldEluc3RhbmNlKCk7XG4iLCIvLyBpbXBvcnQgKiBhcyBCcm93c2VyRlMgZnJvbSAnYnJvd3NlcmZzJztcbi8vIGNvbnN0IGZzID0gQnJvd3NlckZTLkJGU1JlcXVpcmUoJ2ZzJyk7XG4vLyAvLyBCcm93c2VyRlMuaW5pdGlhbGl6ZShuZXcgQnJvd3NlckZTLkluTWVtb3J5RmlsZVN5c3RlbSgpKTtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgVXBkYXRlRmlsZVR5cGUgfSBmcm9tIFwiLi4vdHlwZXMvdXRpbFwiO1xuY2xhc3MgVXBkYXRlSnNvbiB7XG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVXBkYXRlSnNvbjtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBVcGRhdGVKc29uIHtcbiAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG4gICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVXBkYXRlSnNvbigpO1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuICB1cGRhdGVGaWxlOiBVcGRhdGVGaWxlVHlwZSA9IChwYXRoLCBLZXksIFZhbHVlKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLCBcInV0Zi04XCIpO1xuICAgIGNvbnN0IHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHBhcnNlZERhdGFbS2V5XSA9IFZhbHVlO1xuICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aCwgSlNPTi5zdHJpbmdpZnkocGFyc2VkRGF0YSkpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVKc29uLmdldEluc3RhbmNlKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBuYXYgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51L21lbnVcIjtcbmltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuL21vZGVsL3RoZW1lXCI7XG5cbi8vIGNvbnNvbGUubG9nKG5hdigpKTtcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikgYXMgSFRNTEJvZHlFbGVtZW50O1xuLy8gY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKSBhcyBIVE1MQm9keUVsZW1lbnQ7XG5cbmhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIG5hdigpKTtcbi8vIGhvbWUuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBuYXYoKSk7XG50aGVtZS5jaGFuZ2VUaGVtZShcImxpZ2h0XCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9