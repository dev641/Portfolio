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

/***/ "./src/controller/HeaderController.ts":
/*!********************************************!*\
  !*** ./src/controller/HeaderController.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderController: () => (/* binding */ HeaderController)
/* harmony export */ });
class HeaderController {
    constructor(headerModel, headerView) {
        this.controlTheme = (theme) => {
            this.headerModel.changeTheme(theme);
            this.headerView.update(this.headerModel.Data);
        };
        this.headerModel = headerModel;
        this.headerView = headerView;
        this.headerView.changeTheme(this.controlTheme.bind(this));
    }
}


/***/ }),

/***/ "./src/model/HeaderModel.ts":
/*!**********************************!*\
  !*** ./src/model/HeaderModel.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderModel: () => (/* binding */ HeaderModel)
/* harmony export */ });
/* harmony import */ var _data_menu_menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/menu/menu.json */ "./src/data/menu/menu.json");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum */ "./src/model/enum.ts");


class HeaderModel {
    constructor() {
        this.brand = {};
        this.menu = [];
        this.changeTheme = (theme) => {
            if (this.theme !== theme) {
                this.theme = theme;
            }
        };
        this.brand = _data_menu_menu_json__WEBPACK_IMPORTED_MODULE_0__.brand;
        this.menu = _data_menu_menu_json__WEBPACK_IMPORTED_MODULE_0__.menu;
        this.theme = _enum__WEBPACK_IMPORTED_MODULE_1__.ThemeEnum.dark;
    }
    get Theme() {
        return this.theme;
    }
    get Brand() {
        return this.brand;
    }
    get Menu() {
        return this.menu;
    }
    get Data() {
        const brand = this.Brand;
        const menu = this.Menu;
        const theme = this.Theme;
        return {
            brand,
            menu,
            theme,
        };
    }
}


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
    ThemeEnum[ThemeEnum["dark"] = 0] = "dark";
    ThemeEnum[ThemeEnum["light"] = 1] = "light";
})(ThemeEnum || (ThemeEnum = {}));


/***/ }),

/***/ "./src/view/HeaderView.ts":
/*!********************************!*\
  !*** ./src/view/HeaderView.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderView: () => (/* binding */ HeaderView)
/* harmony export */ });
/* harmony import */ var _model_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/enum */ "./src/model/enum.ts");
/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu/menu */ "./src/view/components/menu/menu.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view/view.ts");



class HeaderView extends _view__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(data) {
        super("header");
        this.render = (data) => {
            const navBar = (0,_components_menu_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
            this.parentElement.insertAdjacentHTML("afterbegin", navBar);
        };
        this.update = (data) => {
            const themeClassGenerator = () => {
                return (className) => {
                    const prevTheme = this.themeElement.dataset.theme;
                    const classNameGenerator = (theme) => theme ? `${theme}-${className}` : "";
                    return {
                        current: classNameGenerator(curTheme),
                        prev: classNameGenerator(prevTheme),
                    };
                };
            };
            const curTheme = data.theme === _model_enum__WEBPACK_IMPORTED_MODULE_0__.ThemeEnum.dark ? "dark" : "light";
            const themeBtnClassGenerator = themeClassGenerator();
            const themeBackgroundGenerator = themeClassGenerator();
            const themeUpdator = (element, { current, prev }) => {
                element.classList.remove(prev);
                element.classList.add(current);
            };
            themeUpdator(this.themeElement, themeBtnClassGenerator("theme-btn"));
            themeUpdator(document.body, themeBackgroundGenerator("background"));
            this.themeElement.dataset.theme = curTheme;
        };
        this.changeTheme = (controlTheme) => {
            this.themeElement.addEventListener("click", (e) => {
                let target = e.target;
                target = target.closest(".nav-container__theme-btn");
                const newTheme = target.dataset.theme !== "dark" ? _model_enum__WEBPACK_IMPORTED_MODULE_0__.ThemeEnum.dark : _model_enum__WEBPACK_IMPORTED_MODULE_0__.ThemeEnum.light;
                controlTheme(newTheme);
            });
        };
        this.render(data);
        this.themeElement = document.getElementById("nav-container__theme-btn");
    }
}


/***/ }),

/***/ "./src/view/PortfolioView.ts":
/*!***********************************!*\
  !*** ./src/view/PortfolioView.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Portfolio),
/* harmony export */   header: () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _controller_HeaderController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/HeaderController */ "./src/controller/HeaderController.ts");
/* harmony import */ var _model_HeaderModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/HeaderModel */ "./src/model/HeaderModel.ts");
/* harmony import */ var _HeaderView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderView */ "./src/view/HeaderView.ts");



const header = () => {
    const model = new _model_HeaderModel__WEBPACK_IMPORTED_MODULE_1__.HeaderModel();
    const view = new _HeaderView__WEBPACK_IMPORTED_MODULE_2__.HeaderView(model.Data);
    return new _controller_HeaderController__WEBPACK_IMPORTED_MODULE_0__.HeaderController(model, view);
};
class Portfolio {
    constructor() {
        header();
    }
}


/***/ }),

/***/ "./src/view/components/menu/menu.ts":
/*!******************************************!*\
  !*** ./src/view/components/menu/menu.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../model/enum */ "./src/model/enum.ts");

const itemGenerator = (items) => {
    return Array.isArray(items)
        ? items
            .map((menu) => `<li class="nav-container__list-item" id="nav-container__list-item">
                <a href="#${menu.href}">${menu.name}</a>
              </li>`)
            .join("")
        :
            `<div class="nav-logo__image" id="nav-logo__image"><i class="fa-solid fa-user fa-2x" id="nav-logo__image-icon"></i></div>
    <h2 class="nav-logo__name" id="nav-logo__name">${items.name}</h2>
  `;
};
const themeGenerator = (theme) => {
    const Theme = theme === _model_enum__WEBPACK_IMPORTED_MODULE_0__.ThemeEnum.dark ? "dark" : "light";
    return `
  <div class="nav-container__theme"  id="nav-container__theme">
      <button class="nav-container__theme-btn dark-theme-btn" data-theme="${Theme}" id="nav-container__theme-btn">
      <i class="fa-solid fa-circle-half-stroke fa-2xl"></i>
    </button>
    </div>
  `;
};
const headerGenerator = ({ brand, menu, theme, }) => {
    const navbar = `
        <nav class="nav" id="nav">
          <div class="nav-logo" id="nav-logo">
            ${itemGenerator(brand)}
          </div>
          <div class="nav-container" id="nav-container">
            <ul class="nav-container__list" id="nav-container__list">
              ${itemGenerator(menu)}
            </ul>
            ${themeGenerator(theme)}
          </div>
        </nav>
  `;
    return navbar;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerGenerator);


/***/ }),

/***/ "./src/view/view.ts":
/*!**************************!*\
  !*** ./src/view/view.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
class View {
    constructor(parentElementId) {
        this.parentElement = document.getElementById(parentElementId);
    }
}


/***/ }),

/***/ "./src/data/menu/menu.json":
/*!*********************************!*\
  !*** ./src/data/menu/menu.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"brand":{"name":"Dev","href":"https://i0.wp.com/vssmn.org/wp-content/uploads/2018/12/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png?w=860&ssl=1"},"menu":[{"name":"Home","href":"home"},{"name":"Experience","href":"experience"},{"name":"Experience","href":"education"},{"name":"Resume","href":"resume"},{"name":"Portfolio","href":"portfolio"},{"name":"Contact","href":"contact"}],"theme":"dark"}');

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
/* harmony import */ var _view_PortfolioView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/PortfolioView */ "./src/view/PortfolioView.ts");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");


new _view_PortfolioView__WEBPACK_IMPORTED_MODULE_0__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONkM7QUFDakI7QUFDNUIsSUFBSSwyREFBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9jb250cm9sbGVyL0hlYWRlckNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy9tb2RlbC9IZWFkZXJNb2RlbC50cyIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL21vZGVsL2VudW0udHMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy92aWV3L0hlYWRlclZpZXcudHMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy92aWV3L1BvcnRmb2xpb1ZpZXcudHMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS8uL3NyYy92aWV3L2NvbXBvbmVudHMvbWVudS9tZW51LnRzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvLi9zcmMvdmlldy92aWV3LnRzIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpb3dlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW93ZWJzaXRlLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBDb250cm9sVGhlbWVUeXBlIH0gZnJvbSBcIi4vLi4vdHlwZXMvbWVudS5kXCI7XG5pbXBvcnQgeyBIZWFkZXJWaWV3IH0gZnJvbSBcIi4uL3ZpZXcvSGVhZGVyVmlld1wiO1xuaW1wb3J0IHsgSGVhZGVyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvSGVhZGVyTW9kZWxcIjtcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBoZWFkZXJNb2RlbDogSGVhZGVyTW9kZWw7XG4gIHByaXZhdGUgaGVhZGVyVmlldzogSGVhZGVyVmlldztcbiAgY29uc3RydWN0b3IoaGVhZGVyTW9kZWw6IEhlYWRlck1vZGVsLCBoZWFkZXJWaWV3OiBIZWFkZXJWaWV3KSB7XG4gICAgdGhpcy5oZWFkZXJNb2RlbCA9IGhlYWRlck1vZGVsO1xuICAgIHRoaXMuaGVhZGVyVmlldyA9IGhlYWRlclZpZXc7XG4gICAgdGhpcy5oZWFkZXJWaWV3LmNoYW5nZVRoZW1lKHRoaXMuY29udHJvbFRoZW1lLmJpbmQodGhpcykpO1xuICB9XG4gIGNvbnRyb2xUaGVtZTogQ29udHJvbFRoZW1lVHlwZSA9ICh0aGVtZSkgPT4ge1xuICAgIHRoaXMuaGVhZGVyTW9kZWwuY2hhbmdlVGhlbWUodGhlbWUpO1xuICAgIHRoaXMuaGVhZGVyVmlldy51cGRhdGUodGhpcy5oZWFkZXJNb2RlbC5EYXRhKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGJyYW5kLCBtZW51IH0gZnJvbSBcIi4uL2RhdGEvbWVudS9tZW51Lmpzb25cIjtcbmltcG9ydCB7IEl0ZW0sIFRoZW1lVHlwZSwgaGVhZGVyRGF0YSB9IGZyb20gXCIuLi90eXBlcy9tZW51XCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuL1RoZW1lTW9kZWxcIjtcbmltcG9ydCB7IFRoZW1lRW51bSB9IGZyb20gXCIuL2VudW1cIjtcblxuZXhwb3J0IGNsYXNzIEhlYWRlck1vZGVsIGltcGxlbWVudHMgVGhlbWUge1xuICBwcml2YXRlIGJyYW5kOiBJdGVtID0ge307XG4gIHByaXZhdGUgbWVudTogSXRlbVtdID0gW107XG4gIHByaXZhdGUgdGhlbWU6IFRoZW1lVHlwZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5icmFuZCA9IGJyYW5kO1xuICAgIHRoaXMubWVudSA9IG1lbnU7XG4gICAgdGhpcy50aGVtZSA9IFRoZW1lRW51bS5kYXJrO1xuICB9XG5cbiAgZ2V0IFRoZW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lO1xuICB9XG5cbiAgZ2V0IEJyYW5kKCkge1xuICAgIHJldHVybiB0aGlzLmJyYW5kO1xuICB9XG5cbiAgZ2V0IE1lbnUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVudTtcbiAgfVxuXG4gIGdldCBEYXRhKCk6IGhlYWRlckRhdGEge1xuICAgIGNvbnN0IGJyYW5kID0gdGhpcy5CcmFuZDtcbiAgICBjb25zdCBtZW51ID0gdGhpcy5NZW51O1xuICAgIGNvbnN0IHRoZW1lID0gdGhpcy5UaGVtZTtcbiAgICByZXR1cm4ge1xuICAgICAgYnJhbmQsXG4gICAgICBtZW51LFxuICAgICAgdGhlbWUsXG4gICAgfTtcbiAgfVxuICBjaGFuZ2VUaGVtZSA9ICh0aGVtZTogVGhlbWVUeXBlKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMudGhlbWUgIT09IHRoZW1lKSB7XG4gICAgICB0aGlzLnRoZW1lID0gdGhlbWU7XG4gICAgfVxuICB9O1xufVxuIiwiZXhwb3J0IGVudW0gVGhlbWVFbnVtIHtcbiAgZGFyayxcbiAgbGlnaHQsXG59XG4iLCJpbXBvcnQgeyBUaGVtZUVudW0gfSBmcm9tIFwiLi4vbW9kZWwvZW51bVwiO1xuaW1wb3J0IHsgQ29udHJvbFRoZW1lVHlwZSwgY2xhc3NMaXN0LCBoZWFkZXJEYXRhIH0gZnJvbSBcIi4uL3R5cGVzL21lbnVcIjtcbmltcG9ydCBuYXZHZW5lcmF0b3IgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51L21lbnVcIjtcbmltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIjtcbmV4cG9ydCBjbGFzcyBIZWFkZXJWaWV3IGV4dGVuZHMgVmlldzxIVE1MRGl2RWxlbWVudD4ge1xuICBwcml2YXRlIHRoZW1lRWxlbWVudDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGRhdGE6IGhlYWRlckRhdGEpIHtcbiAgICBzdXBlcihcImhlYWRlclwiKTtcbiAgICB0aGlzLnJlbmRlcihkYXRhKTtcbiAgICB0aGlzLnRoZW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJuYXYtY29udGFpbmVyX190aGVtZS1idG5cIlxuICAgICkhIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICB9XG5cbiAgcmVuZGVyID0gKGRhdGE6IGhlYWRlckRhdGEpID0+IHtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICBjb25zdCBuYXZCYXIgPSBuYXZHZW5lcmF0b3IoZGF0YSk7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgbmF2QmFyKTtcbiAgfTtcblxuICB1cGRhdGUgPSAoZGF0YTogaGVhZGVyRGF0YSkgPT4ge1xuICAgIGNvbnN0IHRoZW1lQ2xhc3NHZW5lcmF0b3I6ICgpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gY2xhc3NMaXN0ID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJldlRoZW1lID0gdGhpcy50aGVtZUVsZW1lbnQuZGF0YXNldC50aGVtZSE7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZUdlbmVyYXRvcjogKHRoZW1lOiBzdHJpbmcpID0+IHN0cmluZyA9ICh0aGVtZSkgPT5cbiAgICAgICAgICB0aGVtZSA/IGAke3RoZW1lfS0ke2NsYXNzTmFtZX1gIDogXCJcIjtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjdXJyZW50OiBjbGFzc05hbWVHZW5lcmF0b3IoY3VyVGhlbWUpLFxuICAgICAgICAgIHByZXY6IGNsYXNzTmFtZUdlbmVyYXRvcihwcmV2VGhlbWUpLFxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuICAgIGNvbnN0IGN1clRoZW1lID0gZGF0YS50aGVtZSA9PT0gVGhlbWVFbnVtLmRhcmsgPyBcImRhcmtcIiA6IFwibGlnaHRcIjtcbiAgICBjb25zdCB0aGVtZUJ0bkNsYXNzR2VuZXJhdG9yID0gdGhlbWVDbGFzc0dlbmVyYXRvcigpO1xuICAgIGNvbnN0IHRoZW1lQmFja2dyb3VuZEdlbmVyYXRvciA9IHRoZW1lQ2xhc3NHZW5lcmF0b3IoKTtcbiAgICBjb25zdCB0aGVtZVVwZGF0b3I6IChlbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhc3NMaXN0OiBjbGFzc0xpc3QpID0+IHZvaWQgPSAoXG4gICAgICBlbGVtZW50LFxuICAgICAgeyBjdXJyZW50LCBwcmV2IH1cbiAgICApID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShwcmV2KTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjdXJyZW50KTtcbiAgICB9O1xuXG4gICAgdGhlbWVVcGRhdG9yKHRoaXMudGhlbWVFbGVtZW50LCB0aGVtZUJ0bkNsYXNzR2VuZXJhdG9yKFwidGhlbWUtYnRuXCIpKTtcbiAgICB0aGVtZVVwZGF0b3IoZG9jdW1lbnQuYm9keSwgdGhlbWVCYWNrZ3JvdW5kR2VuZXJhdG9yKFwiYmFja2dyb3VuZFwiKSk7XG4gICAgdGhpcy50aGVtZUVsZW1lbnQuZGF0YXNldC50aGVtZSA9IGN1clRoZW1lO1xuICB9O1xuXG4gIGNoYW5nZVRoZW1lID0gKGNvbnRyb2xUaGVtZTogQ29udHJvbFRoZW1lVHlwZSkgPT4ge1xuICAgIHRoaXMudGhlbWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHRhcmdldCA9IHRhcmdldC5jbG9zZXN0KFwiLm5hdi1jb250YWluZXJfX3RoZW1lLWJ0blwiKSEgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgIGNvbnN0IG5ld1RoZW1lID1cbiAgICAgICAgdGFyZ2V0LmRhdGFzZXQudGhlbWUgIT09IFwiZGFya1wiID8gVGhlbWVFbnVtLmRhcmsgOiBUaGVtZUVudW0ubGlnaHQ7XG4gICAgICBjb250cm9sVGhlbWUobmV3VGhlbWUpO1xuICAgIH0pO1xuICB9O1xufVxuIiwiLy8gaW1wb3J0IHsgSGVhZGVyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvSGVhZGVyTW9kZWxcIjtcbmltcG9ydCB7IEhlYWRlckNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlci9IZWFkZXJDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBIZWFkZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9IZWFkZXJNb2RlbFwiO1xuaW1wb3J0IHsgSGVhZGVyVmlldyB9IGZyb20gXCIuL0hlYWRlclZpZXdcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IEhlYWRlck1vZGVsKCk7XG4gIGNvbnN0IHZpZXcgPSBuZXcgSGVhZGVyVmlldyhtb2RlbC5EYXRhKTtcbiAgcmV0dXJuIG5ldyBIZWFkZXJDb250cm9sbGVyKG1vZGVsLCB2aWV3KTtcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3J0Zm9saW8ge1xuICAvLyBwcml2YXRlIGhlYWRlcjogSGVhZGVyQ29udHJvbGxlcjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaGVhZGVyKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRoZW1lRW51bSB9IGZyb20gXCIuLy4uLy4uLy4uL21vZGVsL2VudW1cIjtcbmltcG9ydCB0eXBlIHtcbiAgaGVhZGVyRGF0YSxcbiAgaGVhZGVyR2VuZXJhdG9yLFxuICBJdGVtLFxuICBpdGVtR2VuZXJhdG9yLFxuICBUaGVtZUdlbmVyYXRvcixcbn0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL21lbnVcIjtcbmNvbnN0IGl0ZW1HZW5lcmF0b3I6IGl0ZW1HZW5lcmF0b3IgPSAoaXRlbXMpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaXRlbXMpXG4gICAgPyBpdGVtc1xuICAgICAgICAubWFwKFxuICAgICAgICAgIChcbiAgICAgICAgICAgIG1lbnU6IEl0ZW1cbiAgICAgICAgICApID0+IGA8bGkgY2xhc3M9XCJuYXYtY29udGFpbmVyX19saXN0LWl0ZW1cIiBpZD1cIm5hdi1jb250YWluZXJfX2xpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjJHttZW51LmhyZWZ9XCI+JHttZW51Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L2xpPmBcbiAgICAgICAgKVxuICAgICAgICAuam9pbihcIlwiKVxuICAgIDogLy8gYDxpbWcgc3JjPVwiJHtpdGVtcy5ocmVmfVwiIGFsdD1cIiR7aXRlbXMubmFtZX0tbG9nb1wiIGNsYXNzPVwibmF2LWxvZ29fX2ltYWdlXCIgaWQ9XCJuYXYtbG9nb19faW1hZ2VcIj5cbiAgICAgIGA8ZGl2IGNsYXNzPVwibmF2LWxvZ29fX2ltYWdlXCIgaWQ9XCJuYXYtbG9nb19faW1hZ2VcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXVzZXIgZmEtMnhcIiBpZD1cIm5hdi1sb2dvX19pbWFnZS1pY29uXCI+PC9pPjwvZGl2PlxuICAgIDxoMiBjbGFzcz1cIm5hdi1sb2dvX19uYW1lXCIgaWQ9XCJuYXYtbG9nb19fbmFtZVwiPiR7aXRlbXMubmFtZX08L2gyPlxuICBgO1xufTtcblxuY29uc3QgdGhlbWVHZW5lcmF0b3I6IFRoZW1lR2VuZXJhdG9yID0gKHRoZW1lKSA9PiB7XG4gIGNvbnN0IFRoZW1lID0gdGhlbWUgPT09IFRoZW1lRW51bS5kYXJrID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XG4gIHJldHVybiBgXG4gIDxkaXYgY2xhc3M9XCJuYXYtY29udGFpbmVyX190aGVtZVwiICBpZD1cIm5hdi1jb250YWluZXJfX3RoZW1lXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibmF2LWNvbnRhaW5lcl9fdGhlbWUtYnRuIGRhcmstdGhlbWUtYnRuXCIgZGF0YS10aGVtZT1cIiR7VGhlbWV9XCIgaWQ9XCJuYXYtY29udGFpbmVyX190aGVtZS1idG5cIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlLWhhbGYtc3Ryb2tlIGZhLTJ4bFwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYDtcbn07XG5jb25zdCBoZWFkZXJHZW5lcmF0b3I6IGhlYWRlckdlbmVyYXRvciA9ICh7XG4gIGJyYW5kLFxuICBtZW51LFxuICB0aGVtZSxcbn06IGhlYWRlckRhdGEpID0+IHtcbiAgY29uc3QgbmF2YmFyID0gYFxuICAgICAgICA8bmF2IGNsYXNzPVwibmF2XCIgaWQ9XCJuYXZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWxvZ29cIiBpZD1cIm5hdi1sb2dvXCI+XG4gICAgICAgICAgICAke2l0ZW1HZW5lcmF0b3IoYnJhbmQpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtY29udGFpbmVyXCIgaWQ9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYtY29udGFpbmVyX19saXN0XCIgaWQ9XCJuYXYtY29udGFpbmVyX19saXN0XCI+XG4gICAgICAgICAgICAgICR7aXRlbUdlbmVyYXRvcihtZW51KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAke3RoZW1lR2VuZXJhdG9yKHRoZW1lKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gIGA7XG4gIHJldHVybiBuYXZiYXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJHZW5lcmF0b3I7XG4iLCJpbXBvcnQgeyBoZWFkZXJEYXRhIH0gZnJvbSBcIi4uL3R5cGVzL21lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVmlldzxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IHtcbiAgcHJvdGVjdGVkIHBhcmVudEVsZW1lbnQ6IFQ7XG4gIGNvbnN0cnVjdG9yKHBhcmVudEVsZW1lbnRJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RWxlbWVudElkKSEgYXMgVDtcbiAgfVxuICBhYnN0cmFjdCByZW5kZXIoZGF0YTogaGVhZGVyRGF0YSk6IHZvaWQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQb3J0Zm9saW8gZnJvbSBcIi4vdmlldy9Qb3J0Zm9saW9WaWV3XCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9tYWluLnNjc3NcIjtcbm5ldyBQb3J0Zm9saW8oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==