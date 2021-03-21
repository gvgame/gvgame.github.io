webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _theme_theme_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/theme-provider */ \"./src/theme/theme-provider.js\");\n/* harmony import */ var _theme_theme_provider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_theme_provider__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Drawer */ \"./node_modules/@material-ui/core/esm/Drawer/index.js\");\n/* harmony import */ var _nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar */ \"./src/components/nav-bar/nav-bar.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\n\nvar _jsxFileName = \"/opt/projects/personal-website/src/components/app.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Container = function Container(props) {\n  _s();\n\n  var _useTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__[\"useTheme\"])(),\n      palette = _useTheme.palette;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      color: palette.text.primary,\n      background: palette.background[\"default\"],\n      height: \"100%\"\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Container, \"KSZZ7uh0OZO6dgta9vGWhMa24zw=\", false, function () {\n  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__[\"useTheme\"]];\n});\n\n_c = Container;\n\nvar App = function App(props) {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navOpen = _useState[0],\n      setNavOpen = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: \"Hello\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_theme_theme_provider__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          anchor: \"left\",\n          open: navOpen,\n          onClose: function onClose() {\n            return setNavOpen(false);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: \"Nav menu\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          title: props.title,\n          onMenuOpen: function onMenuOpen() {\n            return setNavOpen(true);\n          },\n          navBarLeftRef: function navBarLeftRef(el) {\n            return setNavBarLeftRef(el);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            overflow: \"auto\",\n            width: \"100%\",\n            height: \"calc(100% - 50px)\"\n          },\n          children: props.children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(App, \"YGneQoONAXyKf8WW6+F1a9gYRoM=\");\n\n_c2 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXBwLmpzPzQwNzQiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwicHJvcHMiLCJ1c2VUaGVtZSIsInBhbGV0dGUiLCJjb2xvciIsInRleHQiLCJwcmltYXJ5IiwiYmFja2dyb3VuZCIsImhlaWdodCIsImNoaWxkcmVuIiwiQXBwIiwidXNlU3RhdGUiLCJuYXZPcGVuIiwic2V0TmF2T3BlbiIsInRpdGxlIiwiZWwiLCJzZXROYXZCYXJMZWZ0UmVmIiwib3ZlcmZsb3ciLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDUEMseUVBQVEsRUFERDtBQUFBLE1BQ25CQyxPQURtQixhQUNuQkEsT0FEbUI7O0FBRTNCLHNCQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRUQsT0FBTyxDQUFDRSxJQUFSLENBQWFDLE9BRGY7QUFFTEMsZ0JBQVUsRUFBRUosT0FBTyxDQUFDSSxVQUFSLFdBRlA7QUFHTEMsWUFBTSxFQUFFO0FBSEgsS0FEVDtBQUFBLGNBT0dQLEtBQUssQ0FBQ1E7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQWJEOztHQUFNVCxTO1VBQ2dCRSxpRTs7O0tBRGhCRixTOztBQWVOLElBQU1VLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNULEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNTVSxzREFBUSxDQUFDLEtBQUQsQ0FEakI7QUFBQSxNQUNkQyxPQURjO0FBQUEsTUFDTEMsVUFESzs7QUFFckIsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLG1FQUFEO0FBQUEsNkJBQ0UscUVBQUMsU0FBRDtBQUFBLGdDQUNFLHFFQUFDLGdFQUFEO0FBQ0UsZ0JBQU0sRUFBQyxNQURUO0FBRUUsY0FBSSxFQUFFRCxPQUZSO0FBR0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNQyxVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLFdBSFg7QUFBQSxpQ0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFRRSxxRUFBQyx3REFBRDtBQUNFLGVBQUssRUFBRVosS0FBSyxDQUFDYSxLQURmO0FBRUUsb0JBQVUsRUFBRTtBQUFBLG1CQUFNRCxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLFdBRmQ7QUFHRSx1QkFBYSxFQUFFLHVCQUFDRSxFQUFEO0FBQUEsbUJBQVFDLGdCQUFnQixDQUFDRCxFQUFELENBQXhCO0FBQUE7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixlQWFFO0FBQ0UsZUFBSyxFQUFFO0FBQ0xFLG9CQUFRLEVBQUUsTUFETDtBQUVMQyxpQkFBSyxFQUFFLE1BRkY7QUFHTFYsa0JBQU0sRUFBRTtBQUhILFdBRFQ7QUFBQSxvQkFPR1AsS0FBSyxDQUFDUTtBQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBaENEOztJQUFNQyxHOztNQUFBQSxHO0FBa0NTQSxrRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCIuLi90aGVtZS90aGVtZS1wcm92aWRlclwiO1xuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL25hdi1iYXIvbmF2LWJhclwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHBhbGV0dGUgfSA9IHVzZVRoZW1lKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgY29sb3I6IHBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgQXBwID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtuYXZPcGVuLCBzZXROYXZPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZD5IZWxsbzwvSGVhZD5cbiAgICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgIGFuY2hvcj1cImxlZnRcIlxuICAgICAgICAgICAgb3Blbj17bmF2T3Blbn1cbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE5hdk9wZW4oZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+TmF2IG1lbnU8L2Rpdj5cbiAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICA8TmF2QmFyXG4gICAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICBvbk1lbnVPcGVuPXsoKSA9PiBzZXROYXZPcGVuKHRydWUpfVxuICAgICAgICAgICAgbmF2QmFyTGVmdFJlZj17KGVsKSA9PiBzZXROYXZCYXJMZWZ0UmVmKGVsKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gNTBweClcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/app.js\n");

/***/ })

})