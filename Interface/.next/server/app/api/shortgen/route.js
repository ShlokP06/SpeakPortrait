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
exports.id = "app/api/shortgen/route";
exports.ids = ["app/api/shortgen/route"];
exports.modules = {

/***/ "(rsc)/./app/api/shortgen/route.js":
/*!***********************************!*\
  !*** ./app/api/shortgen/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function POST(req) {\n    try {\n        const { prompt } = await req.json();\n        if (!prompt) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'No prompt provided'\n            }, {\n                status: 400\n            });\n        }\n        const HF_API_KEY = process.env.HF_API_KEY;\n        const response = await fetch(\"https://router.huggingface.co/v1/chat/completions\", {\n            method: \"POST\",\n            headers: {\n                Authorization: `Bearer ${HF_API_KEY}`,\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                messages: [\n                    {\n                        role: \"system\",\n                        content: \"Reply in only atmost two sentence. Use 20 words or fewer. Do not elaborate. Do not repeat. Do not add any extra information.\"\n                    },\n                    {\n                        role: \"user\",\n                        content: prompt\n                    }\n                ],\n                model: \"Qwen/Qwen3-Coder-480B-A35B-Instruct:novita\"\n            })\n        });\n        const result = await response.json();\n        const output = result?.choices?.[0]?.message?.content || \"No output received\";\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            output\n        });\n    } catch (err) {\n        console.error(\"Shortgen API error:\", err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to generate text\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Nob3J0Z2VuL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRXBDLGVBQWVDLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUcsTUFBTUQsSUFBSUUsSUFBSTtRQUVqQyxJQUFJLENBQUNELFFBQVE7WUFDWCxPQUFPSCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXFCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUMxRTtRQUVBLE1BQU1DLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0YsVUFBVTtRQUV6QyxNQUFNRyxXQUFXLE1BQU1DLE1BQU0scURBQXFEO1lBQ2hGQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1BDLGVBQWUsQ0FBQyxPQUFPLEVBQUVQLFlBQVk7Z0JBQ3JDLGdCQUFnQjtZQUNsQjtZQUNBUSxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CQyxVQUFVO29CQUNSO3dCQUNFQyxNQUFNO3dCQUNOQyxTQUFTO29CQUNYO29CQUNBO3dCQUNFRCxNQUFNO3dCQUNOQyxTQUFTakI7b0JBQ1g7aUJBQ0Q7Z0JBQ0RrQixPQUFPO1lBQ1Q7UUFDRjtRQUVBLE1BQU1DLFNBQVMsTUFBTVosU0FBU04sSUFBSTtRQUVsQyxNQUFNbUIsU0FDSkQsUUFBUUUsU0FBUyxDQUFDLEVBQUUsRUFBRUMsU0FBU0wsV0FBVztRQUU1QyxPQUFPcEIscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFbUI7UUFBTztJQUNwQyxFQUFFLE9BQU9HLEtBQUs7UUFDWkMsUUFBUXRCLEtBQUssQ0FBQyx1QkFBdUJxQjtRQUNyQyxPQUFPMUIscURBQVlBLENBQUNJLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUEwQixHQUNuQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxTaGxva1xcQ29sbGVnZVxcZGl0dG8tdGFsa2luZ2hlYWRcXEludGVyZmFjZVxcYXBwXFxhcGlcXHNob3J0Z2VuXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwcm9tcHQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFwcm9tcHQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdObyBwcm9tcHQgcHJvdmlkZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSEZfQVBJX0tFWSA9IHByb2Nlc3MuZW52LkhGX0FQSV9LRVk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcm91dGVyLmh1Z2dpbmdmYWNlLmNvL3YxL2NoYXQvY29tcGxldGlvbnNcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke0hGX0FQSV9LRVl9YCxcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIG1lc3NhZ2VzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvbGU6IFwic3lzdGVtXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVwbHkgaW4gb25seSBhdG1vc3QgdHdvIHNlbnRlbmNlLiBVc2UgMjAgd29yZHMgb3IgZmV3ZXIuIERvIG5vdCBlbGFib3JhdGUuIERvIG5vdCByZXBlYXQuIERvIG5vdCBhZGQgYW55IGV4dHJhIGluZm9ybWF0aW9uLlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByb2xlOiBcInVzZXJcIixcclxuICAgICAgICAgICAgY29udGVudDogcHJvbXB0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG1vZGVsOiBcIlF3ZW4vUXdlbjMtQ29kZXItNDgwQi1BMzVCLUluc3RydWN0Om5vdml0YVwiLFxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBvdXRwdXQgPVxyXG4gICAgICByZXN1bHQ/LmNob2ljZXM/LlswXT8ubWVzc2FnZT8uY29udGVudCB8fCBcIk5vIG91dHB1dCByZWNlaXZlZFwiO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG91dHB1dCB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTaG9ydGdlbiBBUEkgZXJyb3I6XCIsIGVycik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGdlbmVyYXRlIHRleHRcIiB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxIiwicHJvbXB0IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiSEZfQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJtb2RlbCIsInJlc3VsdCIsIm91dHB1dCIsImNob2ljZXMiLCJtZXNzYWdlIiwiZXJyIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/shortgen/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fshortgen%2Froute&page=%2Fapi%2Fshortgen%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fshortgen%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fshortgen%2Froute&page=%2Fapi%2Fshortgen%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fshortgen%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Shlok_College_ditto_talkinghead_Interface_app_api_shortgen_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/shortgen/route.js */ \"(rsc)/./app/api/shortgen/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"export\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/shortgen/route\",\n        pathname: \"/api/shortgen\",\n        filename: \"route\",\n        bundlePath: \"app/api/shortgen/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Shlok\\\\College\\\\ditto-talkinghead\\\\Interface\\\\app\\\\api\\\\shortgen\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Shlok_College_ditto_talkinghead_Interface_app_api_shortgen_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzaG9ydGdlbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc2hvcnRnZW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzaG9ydGdlbiUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNTaGxvayU1Q0NvbGxlZ2UlNUNkaXR0by10YWxraW5naGVhZCU1Q0ludGVyZmFjZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDU2hsb2slNUNDb2xsZWdlJTVDZGl0dG8tdGFsa2luZ2hlYWQlNUNJbnRlcmZhY2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9ZXhwb3J0JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3FDO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxTaGxva1xcXFxDb2xsZWdlXFxcXGRpdHRvLXRhbGtpbmdoZWFkXFxcXEludGVyZmFjZVxcXFxhcHBcXFxcYXBpXFxcXHNob3J0Z2VuXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcImV4cG9ydFwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zaG9ydGdlbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Nob3J0Z2VuXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zaG9ydGdlbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXFNobG9rXFxcXENvbGxlZ2VcXFxcZGl0dG8tdGFsa2luZ2hlYWRcXFxcSW50ZXJmYWNlXFxcXGFwcFxcXFxhcGlcXFxcc2hvcnRnZW5cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fshortgen%2Froute&page=%2Fapi%2Fshortgen%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fshortgen%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fshortgen%2Froute&page=%2Fapi%2Fshortgen%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fshortgen%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();