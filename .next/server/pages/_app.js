module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// CONCATENATED MODULE: ./src/theme/colors.js
const black = "rgba(0, 0, 0, 1)";
const white = "rgba(255,255,255,1)";
const error = "#DB3400";
const warning = "#FFBF00";
const info = "#838383";
const success = "#7DBF00";
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/theme/theme.js


const theme = {
  palette: {
    common: {
      black: black,
      white: white
    },
    error: {
      light: error,
      main: error,
      dark: error,
      contrastText: white
    },
    warning: {
      light: warning,
      main: warning,
      dark: warning,
      contrastText: white
    },
    info: {
      light: info,
      main: info,
      dark: info,
      contrastText: white
    },
    success: {
      light: success,
      main: success,
      dark: success,
      contrastText: white
    },
    navbar: {
      background: "rgba(71, 90, 102, 1)",
      text: "rgba(255,255,255,1.0)"
    },
    background: {
      paper: "rgba(36, 53, 64, 1)",
      default: "rgba(11, 24, 33, 1)",
      contrast: "rgba(216,216,216,1.0)"
    },
    primary: {
      light: "rgba(15, 54, 87, 1)",
      main: "rgba(0, 169, 175, 1)",
      dark: "rgba(71, 90, 102, 1)",
      contrastText: "rgba(11, 24, 33, 1)"
    },
    secondary: {
      light: "rgba(229, 229, 229, 1)",
      main: "rgba(0, 169, 175, 1)",
      dark: "rgba(58, 74, 84, 1)",
      contrastText: "rgba(255,255,255,1.0)"
    },
    divider: "rgba(58,74,84,1.0)",
    text: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(255, 255, 255, 1)",
      disabled: "rgba(133, 133, 133, 1)",
      hint: "rgba(137, 137, 137, 1)"
    },
    action: {
      active: "rgba(255, 255, 255, 1)",
      disabled: "rgba(11, 24, 33, 1)",
      disabledBackground: "rgba(71, 90, 102, 1)"
    }
  },
  overrides: {
    MuiInput: {
      underline: {
        borderBottom: "1px solid rgba(216,216,216,1.0)",
        "&$focused": {
          borderBottom: "1px solid rgba(0, 169, 175, 1)"
        }
      }
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: "rgba(216,216,216,1.0)"
      }
    },
    MuiButton: {
      outlined: {
        borderColor: "rgba(216,216,216,1.0)"
      }
    },
    MuiSwitch: {
      track: {
        backgroundColor: "rgba(255,255,255,1.0)"
      }
    }
  },
  spacing: 4
};
/* harmony default export */ var theme_theme = (Object(styles_["createMuiTheme"])(theme));
// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// CONCATENATED MODULE: ./src/theme/theme-provider.js







const ThemeProvider = ({
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_["MuiThemeProvider"], {
    theme: theme_theme,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CssBaseline_default.a, {}), children]
  });
};

/* harmony default export */ var theme_provider = (ThemeProvider);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__("Q01v");

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__("4D1s");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// CONCATENATED MODULE: ./src/components/nav-bar/nav-bar-divider.js


const StyledDivider = Object(styles_["withStyles"])(theme => ({
  root: {
    backgroundColor: theme.palette.common.black,
    width: 2
  }
}))(Divider_default.a);
/* harmony default export */ var nav_bar_divider = (StyledDivider);
// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__("ZkBw");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// CONCATENATED MODULE: ./src/components/nav-bar/nav-bar-button.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const StyledButton = Object(styles_["withStyles"])(() => ({
  root: {
    height: "100%",
    textTransform: "none",
    color: "inherit"
  }
}))(IconButton_default.a);

const NavBarButton = props => {
  const {
    Icon,
    onClick,
    label,
    labelTypographyProps = {}
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(StyledButton, {
    color: "inherit",
    onClick: onClick,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon, {}), label && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Box_default.a, {
      m: 1,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, _objectSpread(_objectSpread({}, labelTypographyProps), {}, {
        children: label
      }))
    })]
  });
};

/* harmony default export */ var nav_bar_button = (NavBarButton);
// CONCATENATED MODULE: ./src/components/nav-bar/nav-bar.js











const StyledAppBar = Object(styles_["withStyles"])(theme => ({
  root: {
    color: theme.palette.navbar.text,
    backgroundColor: theme.palette.navbar.background,
    height: "50px",
    width: "100%"
  }
}))(AppBar_default.a);

const NavBar = props => {
  const {
    title = "",
    onMenuOpen
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledAppBar, {
    style: {
      position: "static"
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Toolbar_default.a, {
      style: {
        minHeight: 0
      },
      disableGutters: true,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(nav_bar_button, {
        Icon: Menu_default.a,
        onClick: onMenuOpen
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Box_default.a, {
        height: "100%",
        mr: 3,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(nav_bar_divider, {
          orientation: "vertical"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
        variant: "h6",
        noWrap: true,
        style: {
          fontWeight: "bold"
        },
        children: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          flexGrow: 1,
          height: "100%"
        },
        ref: props.navBarLeftRef
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(nav_bar_divider, {
        orientation: "vertical"
      })]
    })
  });
};

/* harmony default export */ var nav_bar = (NavBar);
// CONCATENATED MODULE: ./src/components/app.js









const Container = props => {
  const {
    palette
  } = Object(styles_["useTheme"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      color: palette.text.primary,
      background: palette.background.default,
      height: "100%"
    },
    children: props.children
  });
};

const App = props => {
  const {
    0: navOpen,
    1: setNavOpen
  } = Object(external_react_["useState"])(false);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "gvgame"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(theme_provider, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(nav_bar, {
          title: props.title,
          onMenuOpen: () => setNavOpen(true)
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            overflow: "auto",
            width: "100%",
            height: "calc(100% - 50px)"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: "Website Under Construction"
          })
        })]
      })
    })]
  });
};

/* harmony default export */ var components_app = (App);
// CONCATENATED MODULE: ./src/pages/_app.js





class _app_MyApp extends app_default.a {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_app, {
      title: "Welcome to gvga.me"
    });
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });