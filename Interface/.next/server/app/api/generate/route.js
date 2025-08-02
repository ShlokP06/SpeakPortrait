/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/generate/route";
exports.ids = ["app/api/generate/route"];
exports.modules = {

/***/ "(rsc)/./app/api/generate/route.js":
/*!***********************************!*\
  !*** ./app/api/generate/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function POST(req) {\n    const formData = await req.formData();\n    const ngrokUrl = \"https://3dbca06eff98.ngrok-free.app/\" + '/generate';\n    const res = await fetch(ngrokUrl, {\n        method: 'POST',\n        body: formData,\n        headers: {\n            'ngrok-skip-browser-warning': 'false'\n        }\n    });\n    if (!res.ok) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to generate video'\n        }, {\n            status: 500\n        });\n    }\n    const blob = await res.blob();\n    const buffer = await blob.arrayBuffer();\n    const base64 = Buffer.from(buffer).toString('base64');\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        video_url: `data:video/mp4;base64,${base64}`\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dlbmVyYXRlL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdEO0FBRWpELGVBQWVFLEtBQUtDLEdBQUc7SUFDNUIsTUFBTUMsV0FBVyxNQUFNRCxJQUFJQyxRQUFRO0lBQ25DLE1BQU1DLFdBQVdDLHNDQUErQixHQUFHO0lBRW5ELE1BQU1HLE1BQU0sTUFBTUMsTUFBTUwsVUFBVTtRQUNoQ00sUUFBUTtRQUNSQyxNQUFNUjtRQUNOUyxTQUFTO1lBQ1AsOEJBQThCO1FBQ2hDO0lBQ0Y7SUFHQSxJQUFJLENBQUNKLElBQUlLLEVBQUUsRUFBRTtRQUNYLE9BQU9iLHFEQUFZQSxDQUFDYyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUEyQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNoRjtJQUVBLE1BQU1DLE9BQU8sTUFBTVQsSUFBSVMsSUFBSTtJQUMzQixNQUFNQyxTQUFTLE1BQU1ELEtBQUtFLFdBQVc7SUFDckMsTUFBTUMsU0FBU0MsT0FBT0MsSUFBSSxDQUFDSixRQUFRSyxRQUFRLENBQUM7SUFFNUMsT0FBT3ZCLHFEQUFZQSxDQUFDYyxJQUFJLENBQUM7UUFDdkJVLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRUosUUFBUTtJQUM5QztBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFNobG9rXFxDb2xsZWdlXFxkaXR0by10YWxraW5naGVhZFxcSW50ZXJmYWNlXFxhcHBcXGFwaVxcZ2VuZXJhdGVcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpO1xyXG4gIGNvbnN0IG5ncm9rVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCArICcvZ2VuZXJhdGUnO1xyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChuZ3Jva1VybCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ25ncm9rLXNraXAtYnJvd3Nlci13YXJuaW5nJzogJ2ZhbHNlJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gZ2VuZXJhdGUgdmlkZW8nIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBibG9iID0gYXdhaXQgcmVzLmJsb2IoKTtcclxuICBjb25zdCBidWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7XHJcbiAgY29uc3QgYmFzZTY0ID0gQnVmZmVyLmZyb20oYnVmZmVyKS50b1N0cmluZygnYmFzZTY0Jyk7XHJcblxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICB2aWRlb191cmw6IGBkYXRhOnZpZGVvL21wNDtiYXNlNjQsJHtiYXNlNjR9YCxcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlcXVlc3QiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxIiwiZm9ybURhdGEiLCJuZ3Jva1VybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsIm9rIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiYmxvYiIsImJ1ZmZlciIsImFycmF5QnVmZmVyIiwiYmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwidmlkZW9fdXJsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/generate/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Shlok_College_ditto_talkinghead_Interface_app_api_generate_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/generate/route.js */ \"(rsc)/./app/api/generate/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"export\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/generate/route\",\n        pathname: \"/api/generate\",\n        filename: \"route\",\n        bundlePath: \"app/api/generate/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Shlok\\\\College\\\\ditto-talkinghead\\\\Interface\\\\app\\\\api\\\\generate\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Shlok_College_ditto_talkinghead_Interface_app_api_generate_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZW5lcmF0ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2VuZXJhdGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnZW5lcmF0ZSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNTaGxvayU1Q0NvbGxlZ2UlNUNkaXR0by10YWxraW5naGVhZCU1Q0ludGVyZmFjZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDU2hsb2slNUNDb2xsZWdlJTVDZGl0dG8tdGFsa2luZ2hlYWQlNUNJbnRlcmZhY2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9ZXhwb3J0JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3FDO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxTaGxva1xcXFxDb2xsZWdlXFxcXGRpdHRvLXRhbGtpbmdoZWFkXFxcXEludGVyZmFjZVxcXFxhcHBcXFxcYXBpXFxcXGdlbmVyYXRlXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcImV4cG9ydFwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nZW5lcmF0ZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dlbmVyYXRlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9nZW5lcmF0ZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXFNobG9rXFxcXENvbGxlZ2VcXFxcZGl0dG8tdGFsa2luZ2hlYWRcXFxcSW50ZXJmYWNlXFxcXGFwcFxcXFxhcGlcXFxcZ2VuZXJhdGVcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();