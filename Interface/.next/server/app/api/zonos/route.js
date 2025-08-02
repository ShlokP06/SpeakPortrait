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
exports.id = "app/api/zonos/route";
exports.ids = ["app/api/zonos/route"];
exports.modules = {

/***/ "(rsc)/./app/api/zonos/route.js":
/*!********************************!*\
  !*** ./app/api/zonos/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _gradio_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gradio/client */ \"(rsc)/./node_modules/@gradio/client/dist/index.js\");\n\n\nasync function POST(req) {\n    try {\n        let e1, e2, e3, e4, e5, e6, e7, e8;\n        let unconditional_keys = [];\n        const formData = await req.formData();\n        const text = formData.get(\"text\");\n        const speakerAudio = formData.get(\"speaker_audio\");\n        const rawKeys = formData.get(\"unconditional_keys\");\n        unconditional_keys = rawKeys ? JSON.parse(rawKeys) : [];\n        console.log(unconditional_keys);\n        const emotional_keys = formData.get(\"emotionalKeys\") || JSON.stringify({});\n        if (emotional_keys) {\n            ({ e1, e2, e3, e4, e5, e6, e7, e8 } = JSON.parse(emotional_keys));\n        }\n        console.log(e1, e2, e3, e4, e5, e6, e7, e8);\n        const client = await _gradio_client__WEBPACK_IMPORTED_MODULE_1__.Client.connect(process.env.ZONOS_URL);\n        let speakerFile = null;\n        if (speakerAudio && typeof speakerAudio.arrayBuffer === \"function\") {\n            speakerFile = await (0,_gradio_client__WEBPACK_IMPORTED_MODULE_1__.handle_file)(speakerAudio, speakerAudio.name);\n        }\n        const result = await client.predict(\"/generate_audio\", {\n            model_choice: \"Zyphra/Zonos-v0.1-transformer\",\n            text: text,\n            language: \"en-us\",\n            speaker_audio: speakerFile,\n            prefix_audio: null,\n            e1: e1 ?? 0.0,\n            e2: e2 ?? 0.0,\n            e3: e3 ?? 0.0,\n            e4: e4 ?? 0.0,\n            e5: e5 ?? 0.0,\n            e6: e6 ?? 0.0,\n            e7: e7 ?? 0.0,\n            e8: e8 ?? 0.0,\n            vq_single: 0.78,\n            fmax: 24000,\n            pitch_std: 45,\n            speaking_rate: 15,\n            dnsmos_ovrl: 4,\n            speaker_noised: false,\n            cfg_scale: 2,\n            top_p: 0,\n            top_k: 0,\n            min_p: 0,\n            linear: 0.5,\n            confidence: 0.4,\n            quadratic: 0,\n            seed: 420,\n            randomize_seed: true,\n            unconditional_keys: unconditional_keys\n        });\n        const audioUrl = result.data?.[0]?.url;\n        // const audio = result.data;\n        if (!audioUrl) throw new Error(\"No audio URL returned from Gradio model.\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            audioUrl\n        });\n    // return NextResponse({ audio });\n    } catch (error) {\n        console.error(\"TTS generation error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3pvbm9zL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNVO0FBRTlDLGVBQWVHLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLElBQUlDLElBQUdDLElBQUdDLElBQUdDLElBQUdDLElBQUdDLElBQUdDLElBQUdDO1FBQ3pCLElBQUlDLHFCQUFxQixFQUFFO1FBQzNCLE1BQU1DLFdBQVcsTUFBTVYsSUFBSVUsUUFBUTtRQUNuQyxNQUFNQyxPQUFPRCxTQUFTRSxHQUFHLENBQUM7UUFDMUIsTUFBTUMsZUFBZUgsU0FBU0UsR0FBRyxDQUFDO1FBQ2xDLE1BQU1FLFVBQVVKLFNBQVNFLEdBQUcsQ0FBQztRQUM3QkgscUJBQXFCSyxVQUFVQyxLQUFLQyxLQUFLLENBQUNGLFdBQVcsRUFBRTtRQUN2REcsUUFBUUMsR0FBRyxDQUFDVDtRQUNaLE1BQU1VLGlCQUFpQlQsU0FBU0UsR0FBRyxDQUFDLG9CQUFvQkcsS0FBS0ssU0FBUyxDQUFDLENBQUM7UUFDeEUsSUFBR0QsZ0JBQWU7WUFDZixHQUFDbEIsRUFBRSxFQUFDQyxFQUFFLEVBQUNDLEVBQUUsRUFBQ0MsRUFBRSxFQUFDQyxFQUFFLEVBQUNDLEVBQUUsRUFBQ0MsRUFBRSxFQUFDQyxFQUFFLEVBQUMsR0FBR08sS0FBS0MsS0FBSyxDQUFDRyxlQUFjO1FBQ3hEO1FBQ0FGLFFBQVFDLEdBQUcsQ0FBQ2pCLElBQUdDLElBQUdDLElBQUdDLElBQUdDLElBQUdDLElBQUdDLElBQUdDO1FBQ2pDLE1BQU1hLFNBQVMsTUFBTXhCLGtEQUFNQSxDQUFDeUIsT0FBTyxDQUFDO1FBRXBDLElBQUlDLGNBQWM7UUFDbEIsSUFBSVYsZ0JBQWdCLE9BQU9BLGFBQWFXLFdBQVcsS0FBSyxZQUFZO1lBQ2xFRCxjQUFjLE1BQU16QiwyREFBV0EsQ0FBQ2UsY0FBY0EsYUFBYVksSUFBSTtRQUNqRTtRQUVBLE1BQU1DLFNBQVMsTUFBTUwsT0FBT00sT0FBTyxDQUFDLG1CQUFtQjtZQUNyREMsY0FBYztZQUNkakIsTUFBTUE7WUFDTmtCLFVBQVU7WUFDVkMsZUFBZVA7WUFDZlEsY0FBYztZQUNkOUIsSUFBSUEsTUFBTTtZQUNWQyxJQUFJQSxNQUFNO1lBQ1ZDLElBQUlBLE1BQU07WUFDVkMsSUFBSUEsTUFBTTtZQUNWQyxJQUFJQSxNQUFNO1lBQ1ZDLElBQUlBLE1BQU07WUFDVkMsSUFBSUEsTUFBTTtZQUNWQyxJQUFJQSxNQUFNO1lBQ1Z3QixXQUFXO1lBQ1hDLE1BQU07WUFDTkMsV0FBVztZQUNYQyxlQUFlO1lBQ2ZDLGFBQWE7WUFDYkMsZ0JBQWdCO1lBQ2hCQyxXQUFXO1lBQ1hDLE9BQU87WUFDUEMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsWUFBWTtZQUNaQyxXQUFXO1lBQ1hDLE1BQU07WUFDTkMsZ0JBQWdCO1lBQ2hCckMsb0JBQW9CQTtRQUN0QjtRQUVBLE1BQU1zQyxXQUFXckIsT0FBT3NCLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRUM7UUFDbkMsNkJBQTZCO1FBQzdCLElBQUksQ0FBQ0YsVUFBVSxNQUFNLElBQUlHLE1BQU07UUFFL0IsT0FBT3RELHFEQUFZQSxDQUFDdUQsSUFBSSxDQUFDO1lBQUVKO1FBQVM7SUFDcEMsa0NBQWtDO0lBRXBDLEVBQUUsT0FBT0ssT0FBTztRQUNkbkMsUUFBUW1DLEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3ZDLE9BQU94RCxxREFBWUEsQ0FBQ3VELElBQUksQ0FBQztZQUFFQyxPQUFPQSxNQUFNQyxPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDbkU7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxTaGxva1xcQ29sbGVnZVxcZGl0dG8tdGFsa2luZ2hlYWRcXEludGVyZmFjZVxcYXBwXFxhcGlcXHpvbm9zXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgQ2xpZW50LCBoYW5kbGVfZmlsZSB9IGZyb20gXCJAZ3JhZGlvL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBlMSxlMixlMyxlNCxlNSxlNixlNyxlODtcclxuICAgIGxldCB1bmNvbmRpdGlvbmFsX2tleXMgPSBbXTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxLmZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZm9ybURhdGEuZ2V0KFwidGV4dFwiKTtcclxuICAgIGNvbnN0IHNwZWFrZXJBdWRpbyA9IGZvcm1EYXRhLmdldChcInNwZWFrZXJfYXVkaW9cIik7XHJcbiAgICBjb25zdCByYXdLZXlzID0gZm9ybURhdGEuZ2V0KFwidW5jb25kaXRpb25hbF9rZXlzXCIpO1xyXG4gICAgdW5jb25kaXRpb25hbF9rZXlzID0gcmF3S2V5cyA/IEpTT04ucGFyc2UocmF3S2V5cykgOiBbXTtcclxuICAgIGNvbnNvbGUubG9nKHVuY29uZGl0aW9uYWxfa2V5cyk7XHJcbiAgICBjb25zdCBlbW90aW9uYWxfa2V5cyA9IGZvcm1EYXRhLmdldChcImVtb3Rpb25hbEtleXNcIikgfHwgSlNPTi5zdHJpbmdpZnkoe30pO1xyXG4gICAgaWYoZW1vdGlvbmFsX2tleXMpe1xyXG4gICAgICAoe2UxLGUyLGUzLGU0LGU1LGU2LGU3LGU4fSA9IEpTT04ucGFyc2UoZW1vdGlvbmFsX2tleXMpKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGUxLGUyLGUzLGU0LGU1LGU2LGU3LGU4KTtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IENsaWVudC5jb25uZWN0KFwiaHR0cDovLzEyNy4wLjAuMTo3ODYwL1wiKTtcclxuXHJcbiAgICBsZXQgc3BlYWtlckZpbGUgPSBudWxsO1xyXG4gICAgaWYgKHNwZWFrZXJBdWRpbyAmJiB0eXBlb2Ygc3BlYWtlckF1ZGlvLmFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgc3BlYWtlckZpbGUgPSBhd2FpdCBoYW5kbGVfZmlsZShzcGVha2VyQXVkaW8sIHNwZWFrZXJBdWRpby5uYW1lKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50LnByZWRpY3QoXCIvZ2VuZXJhdGVfYXVkaW9cIiwge1xyXG4gICAgICBtb2RlbF9jaG9pY2U6IFwiWnlwaHJhL1pvbm9zLXYwLjEtdHJhbnNmb3JtZXJcIixcclxuICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgbGFuZ3VhZ2U6IFwiZW4tdXNcIixcclxuICAgICAgc3BlYWtlcl9hdWRpbzogc3BlYWtlckZpbGUsXHJcbiAgICAgIHByZWZpeF9hdWRpbzogbnVsbCxcclxuICAgICAgZTE6IGUxID8/IDAuMCxcclxuICAgICAgZTI6IGUyID8/IDAuMCxcclxuICAgICAgZTM6IGUzID8/IDAuMCxcclxuICAgICAgZTQ6IGU0ID8/IDAuMCxcclxuICAgICAgZTU6IGU1ID8/IDAuMCxcclxuICAgICAgZTY6IGU2ID8/IDAuMCxcclxuICAgICAgZTc6IGU3ID8/IDAuMCxcclxuICAgICAgZTg6IGU4ID8/IDAuMCxcclxuICAgICAgdnFfc2luZ2xlOiAwLjc4LFxyXG4gICAgICBmbWF4OiAyNDAwMCxcclxuICAgICAgcGl0Y2hfc3RkOiA0NSxcclxuICAgICAgc3BlYWtpbmdfcmF0ZTogMTUsXHJcbiAgICAgIGRuc21vc19vdnJsOiA0LFxyXG4gICAgICBzcGVha2VyX25vaXNlZDogZmFsc2UsXHJcbiAgICAgIGNmZ19zY2FsZTogMiwgIFxyXG4gICAgICB0b3BfcDogMCxcclxuICAgICAgdG9wX2s6IDAsXHJcbiAgICAgIG1pbl9wOiAwLFxyXG4gICAgICBsaW5lYXI6IDAuNSxcclxuICAgICAgY29uZmlkZW5jZTogMC40LFxyXG4gICAgICBxdWFkcmF0aWM6IDAsXHJcbiAgICAgIHNlZWQ6IDQyMCxcclxuICAgICAgcmFuZG9taXplX3NlZWQ6IHRydWUsXHJcbiAgICAgIHVuY29uZGl0aW9uYWxfa2V5czogdW5jb25kaXRpb25hbF9rZXlzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYXVkaW9VcmwgPSByZXN1bHQuZGF0YT8uWzBdPy51cmw7XHJcbiAgICAvLyBjb25zdCBhdWRpbyA9IHJlc3VsdC5kYXRhO1xyXG4gICAgaWYgKCFhdWRpb1VybCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gYXVkaW8gVVJMIHJldHVybmVkIGZyb20gR3JhZGlvIG1vZGVsLlwiKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBhdWRpb1VybCB9KTtcclxuICAgIC8vIHJldHVybiBOZXh0UmVzcG9uc2UoeyBhdWRpbyB9KTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJUVFMgZ2VuZXJhdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIkNsaWVudCIsImhhbmRsZV9maWxlIiwiUE9TVCIsInJlcSIsImUxIiwiZTIiLCJlMyIsImU0IiwiZTUiLCJlNiIsImU3IiwiZTgiLCJ1bmNvbmRpdGlvbmFsX2tleXMiLCJmb3JtRGF0YSIsInRleHQiLCJnZXQiLCJzcGVha2VyQXVkaW8iLCJyYXdLZXlzIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImVtb3Rpb25hbF9rZXlzIiwic3RyaW5naWZ5IiwiY2xpZW50IiwiY29ubmVjdCIsInNwZWFrZXJGaWxlIiwiYXJyYXlCdWZmZXIiLCJuYW1lIiwicmVzdWx0IiwicHJlZGljdCIsIm1vZGVsX2Nob2ljZSIsImxhbmd1YWdlIiwic3BlYWtlcl9hdWRpbyIsInByZWZpeF9hdWRpbyIsInZxX3NpbmdsZSIsImZtYXgiLCJwaXRjaF9zdGQiLCJzcGVha2luZ19yYXRlIiwiZG5zbW9zX292cmwiLCJzcGVha2VyX25vaXNlZCIsImNmZ19zY2FsZSIsInRvcF9wIiwidG9wX2siLCJtaW5fcCIsImxpbmVhciIsImNvbmZpZGVuY2UiLCJxdWFkcmF0aWMiLCJzZWVkIiwicmFuZG9taXplX3NlZWQiLCJhdWRpb1VybCIsImRhdGEiLCJ1cmwiLCJFcnJvciIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/zonos/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fzonos%2Froute&page=%2Fapi%2Fzonos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fzonos%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fzonos%2Froute&page=%2Fapi%2Fzonos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fzonos%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Shlok_College_ditto_talkinghead_Interface_app_api_zonos_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/zonos/route.js */ \"(rsc)/./app/api/zonos/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"export\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/zonos/route\",\n        pathname: \"/api/zonos\",\n        filename: \"route\",\n        bundlePath: \"app/api/zonos/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Shlok\\\\College\\\\ditto-talkinghead\\\\Interface\\\\app\\\\api\\\\zonos\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Shlok_College_ditto_talkinghead_Interface_app_api_zonos_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ6b25vcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGem9ub3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ6b25vcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNTaGxvayU1Q0NvbGxlZ2UlNUNkaXR0by10YWxraW5naGVhZCU1Q0ludGVyZmFjZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDU2hsb2slNUNDb2xsZWdlJTVDZGl0dG8tdGFsa2luZ2hlYWQlNUNJbnRlcmZhY2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9ZXhwb3J0JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2tDO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxTaGxva1xcXFxDb2xsZWdlXFxcXGRpdHRvLXRhbGtpbmdoZWFkXFxcXEludGVyZmFjZVxcXFxhcHBcXFxcYXBpXFxcXHpvbm9zXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcImV4cG9ydFwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS96b25vcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3pvbm9zXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS96b25vcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXFNobG9rXFxcXENvbGxlZ2VcXFxcZGl0dG8tdGFsa2luZ2hlYWRcXFxcSW50ZXJmYWNlXFxcXGFwcFxcXFxhcGlcXFxcem9ub3NcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fzonos%2Froute&page=%2Fapi%2Fzonos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fzonos%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

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

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@gradio"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fzonos%2Froute&page=%2Fapi%2Fzonos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fzonos%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CCollege%5Cditto-talkinghead%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();