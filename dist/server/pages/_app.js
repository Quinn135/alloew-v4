"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 16:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(290);
;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        style: {
            'backgroundColor': '#100c24'
        },
        className: "text-white min-h-screen",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Alloew.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "../apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "../favicon-32x32.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "../favicon-16x16.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "manifest",
                        href: "../site.webmanifest"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "flex flex-wrap w-full bg-gray-900 justify-center sticky top-0 shadow-2xl items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "btn-menu btn",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaHome, {
                                size: "32"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/games",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "btn-menu btn",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGamepad, {
                                size: "32"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/store",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "btn-menu btn",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaStoreAlt, {
                                size: "32"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/other",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "btn-menu btn",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaAlignLeft, {
                                size: "32"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(16)));
module.exports = __webpack_exports__;

})();