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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _gradio_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gradio/client */ \"(rsc)/./node_modules/@gradio/client/dist/index.js\");\n\n\nasync function POST(req) {\n    try {\n        const zonosUrl = process.env.ZONOS_TTS_URL;\n        let e1, e2, e3, e4, e5, e6, e7, e8;\n        let unconditional_keys = [];\n        const formData = await req.formData();\n        const text = formData.get(\"text\");\n        const speakerAudio = formData.get(\"speaker_audio\");\n        const rawKeys = formData.get(\"unconditional_keys\");\n        unconditional_keys = rawKeys ? JSON.parse(rawKeys) : [];\n        console.log(unconditional_keys);\n        const emotional_keys = formData.get(\"emotionalKeys\") || JSON.stringify({});\n        if (emotional_keys) {\n            ({ e1, e2, e3, e4, e5, e6, e7, e8 } = JSON.parse(emotional_keys));\n        }\n        console.log(e1, e2, e3, e4, e5, e6, e7, e8);\n        const client = await _gradio_client__WEBPACK_IMPORTED_MODULE_1__.Client.connect(zonosUrl);\n        let speakerFile = null;\n        if (speakerAudio && typeof speakerAudio.arrayBuffer === \"function\") {\n            speakerFile = await (0,_gradio_client__WEBPACK_IMPORTED_MODULE_1__.handle_file)(speakerAudio, speakerAudio.name);\n        }\n        const result = await client.predict(\"/generate_audio\", {\n            model_choice: \"Zyphra/Zonos-v0.1-transformer\",\n            text: text,\n            language: \"en-us\",\n            speaker_audio: speakerFile,\n            prefix_audio: null,\n            e1: e1 ?? 0.0,\n            e2: e2 ?? 0.0,\n            e3: e3 ?? 0.0,\n            e4: e4 ?? 0.0,\n            e5: e5 ?? 0.0,\n            e6: e6 ?? 0.0,\n            e7: e7 ?? 0.0,\n            e8: e8 ?? 0.0,\n            vq_single: 0.78,\n            fmax: 24000,\n            pitch_std: 45,\n            speaking_rate: 15,\n            dnsmos_ovrl: 4,\n            speaker_noised: false,\n            cfg_scale: 2,\n            top_p: 0,\n            top_k: 0,\n            min_p: 0,\n            linear: 0.5,\n            confidence: 0.4,\n            quadratic: 0,\n            seed: 420,\n            randomize_seed: true,\n            unconditional_keys: unconditional_keys\n        });\n        const audioUrl = result.data?.[0]?.url;\n        // const audio = result.data;\n        if (!audioUrl) throw new Error(\"No audio URL returned from Gradio model.\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            audioUrl\n        });\n    // return NextResponse({ audio });\n    } catch (error) {\n        console.error(\"TTS generation error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3pvbm9zL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNVO0FBRTlDLGVBQWVHLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU1DLFdBQVdDLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUMxQyxJQUFJQyxJQUFHQyxJQUFHQyxJQUFHQyxJQUFHQyxJQUFHQyxJQUFHQyxJQUFHQztRQUN6QixJQUFJQyxxQkFBcUIsRUFBRTtRQUMzQixNQUFNQyxXQUFXLE1BQU1kLElBQUljLFFBQVE7UUFDbkMsTUFBTUMsT0FBT0QsU0FBU0UsR0FBRyxDQUFDO1FBQzFCLE1BQU1DLGVBQWVILFNBQVNFLEdBQUcsQ0FBQztRQUNsQyxNQUFNRSxVQUFVSixTQUFTRSxHQUFHLENBQUM7UUFDN0JILHFCQUFxQkssVUFBVUMsS0FBS0MsS0FBSyxDQUFDRixXQUFXLEVBQUU7UUFDdkRHLFFBQVFDLEdBQUcsQ0FBQ1Q7UUFDWixNQUFNVSxpQkFBaUJULFNBQVNFLEdBQUcsQ0FBQyxvQkFBb0JHLEtBQUtLLFNBQVMsQ0FBQyxDQUFDO1FBQ3hFLElBQUdELGdCQUFlO1lBQ2YsR0FBQ2xCLEVBQUUsRUFBQ0MsRUFBRSxFQUFDQyxFQUFFLEVBQUNDLEVBQUUsRUFBQ0MsRUFBRSxFQUFDQyxFQUFFLEVBQUNDLEVBQUUsRUFBQ0MsRUFBRSxFQUFDLEdBQUdPLEtBQUtDLEtBQUssQ0FBQ0csZUFBYztRQUN4RDtRQUNBRixRQUFRQyxHQUFHLENBQUNqQixJQUFHQyxJQUFHQyxJQUFHQyxJQUFHQyxJQUFHQyxJQUFHQyxJQUFHQztRQUNqQyxNQUFNYSxTQUFTLE1BQU01QixrREFBTUEsQ0FBQzZCLE9BQU8sQ0FBQ3pCO1FBRXBDLElBQUkwQixjQUFjO1FBQ2xCLElBQUlWLGdCQUFnQixPQUFPQSxhQUFhVyxXQUFXLEtBQUssWUFBWTtZQUNsRUQsY0FBYyxNQUFNN0IsMkRBQVdBLENBQUNtQixjQUFjQSxhQUFhWSxJQUFJO1FBQ2pFO1FBRUEsTUFBTUMsU0FBUyxNQUFNTCxPQUFPTSxPQUFPLENBQUMsbUJBQW1CO1lBQ3JEQyxjQUFjO1lBQ2RqQixNQUFNQTtZQUNOa0IsVUFBVTtZQUNWQyxlQUFlUDtZQUNmUSxjQUFjO1lBQ2Q5QixJQUFJQSxNQUFNO1lBQ1ZDLElBQUlBLE1BQU07WUFDVkMsSUFBSUEsTUFBTTtZQUNWQyxJQUFJQSxNQUFNO1lBQ1ZDLElBQUlBLE1BQU07WUFDVkMsSUFBSUEsTUFBTTtZQUNWQyxJQUFJQSxNQUFNO1lBQ1ZDLElBQUlBLE1BQU07WUFDVndCLFdBQVc7WUFDWEMsTUFBTTtZQUNOQyxXQUFXO1lBQ1hDLGVBQWU7WUFDZkMsYUFBYTtZQUNiQyxnQkFBZ0I7WUFDaEJDLFdBQVc7WUFDWEMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxZQUFZO1lBQ1pDLFdBQVc7WUFDWEMsTUFBTTtZQUNOQyxnQkFBZ0I7WUFDaEJyQyxvQkFBb0JBO1FBQ3RCO1FBRUEsTUFBTXNDLFdBQVdyQixPQUFPc0IsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFQztRQUNuQyw2QkFBNkI7UUFDN0IsSUFBSSxDQUFDRixVQUFVLE1BQU0sSUFBSUcsTUFBTTtRQUUvQixPQUFPMUQscURBQVlBLENBQUMyRCxJQUFJLENBQUM7WUFBRUo7UUFBUztJQUNwQyxrQ0FBa0M7SUFFcEMsRUFBRSxPQUFPSyxPQUFPO1FBQ2RuQyxRQUFRbUMsS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBTzVELHFEQUFZQSxDQUFDMkQsSUFBSSxDQUFDO1lBQUVDLE9BQU9BLE1BQU1DLE9BQU87UUFBQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNuRTtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFNobG9rXFxTcGVha3BvcnRyYWl0XFxJbnRlcmZhY2VcXGFwcFxcYXBpXFx6b25vc1xccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IENsaWVudCwgaGFuZGxlX2ZpbGUgfSBmcm9tIFwiQGdyYWRpby9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB6b25vc1VybCA9IHByb2Nlc3MuZW52LlpPTk9TX1RUU19VUkw7XHJcbiAgICBsZXQgZTEsZTIsZTMsZTQsZTUsZTYsZTcsZTg7XHJcbiAgICBsZXQgdW5jb25kaXRpb25hbF9rZXlzID0gW107XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpO1xyXG4gICAgY29uc3QgdGV4dCA9IGZvcm1EYXRhLmdldChcInRleHRcIik7XHJcbiAgICBjb25zdCBzcGVha2VyQXVkaW8gPSBmb3JtRGF0YS5nZXQoXCJzcGVha2VyX2F1ZGlvXCIpO1xyXG4gICAgY29uc3QgcmF3S2V5cyA9IGZvcm1EYXRhLmdldChcInVuY29uZGl0aW9uYWxfa2V5c1wiKTtcclxuICAgIHVuY29uZGl0aW9uYWxfa2V5cyA9IHJhd0tleXMgPyBKU09OLnBhcnNlKHJhd0tleXMpIDogW107XHJcbiAgICBjb25zb2xlLmxvZyh1bmNvbmRpdGlvbmFsX2tleXMpO1xyXG4gICAgY29uc3QgZW1vdGlvbmFsX2tleXMgPSBmb3JtRGF0YS5nZXQoXCJlbW90aW9uYWxLZXlzXCIpIHx8IEpTT04uc3RyaW5naWZ5KHt9KTtcclxuICAgIGlmKGVtb3Rpb25hbF9rZXlzKXtcclxuICAgICAgKHtlMSxlMixlMyxlNCxlNSxlNixlNyxlOH0gPSBKU09OLnBhcnNlKGVtb3Rpb25hbF9rZXlzKSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhlMSxlMixlMyxlNCxlNSxlNixlNyxlOCk7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBDbGllbnQuY29ubmVjdCh6b25vc1VybCk7XHJcblxyXG4gICAgbGV0IHNwZWFrZXJGaWxlID0gbnVsbDtcclxuICAgIGlmIChzcGVha2VyQXVkaW8gJiYgdHlwZW9mIHNwZWFrZXJBdWRpby5hcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIHNwZWFrZXJGaWxlID0gYXdhaXQgaGFuZGxlX2ZpbGUoc3BlYWtlckF1ZGlvLCBzcGVha2VyQXVkaW8ubmFtZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5wcmVkaWN0KFwiL2dlbmVyYXRlX2F1ZGlvXCIsIHtcclxuICAgICAgbW9kZWxfY2hvaWNlOiBcIlp5cGhyYS9ab25vcy12MC4xLXRyYW5zZm9ybWVyXCIsXHJcbiAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgIGxhbmd1YWdlOiBcImVuLXVzXCIsXHJcbiAgICAgIHNwZWFrZXJfYXVkaW86IHNwZWFrZXJGaWxlLFxyXG4gICAgICBwcmVmaXhfYXVkaW86IG51bGwsXHJcbiAgICAgIGUxOiBlMSA/PyAwLjAsXHJcbiAgICAgIGUyOiBlMiA/PyAwLjAsXHJcbiAgICAgIGUzOiBlMyA/PyAwLjAsXHJcbiAgICAgIGU0OiBlNCA/PyAwLjAsXHJcbiAgICAgIGU1OiBlNSA/PyAwLjAsXHJcbiAgICAgIGU2OiBlNiA/PyAwLjAsXHJcbiAgICAgIGU3OiBlNyA/PyAwLjAsXHJcbiAgICAgIGU4OiBlOCA/PyAwLjAsXHJcbiAgICAgIHZxX3NpbmdsZTogMC43OCxcclxuICAgICAgZm1heDogMjQwMDAsXHJcbiAgICAgIHBpdGNoX3N0ZDogNDUsXHJcbiAgICAgIHNwZWFraW5nX3JhdGU6IDE1LFxyXG4gICAgICBkbnNtb3Nfb3ZybDogNCxcclxuICAgICAgc3BlYWtlcl9ub2lzZWQ6IGZhbHNlLFxyXG4gICAgICBjZmdfc2NhbGU6IDIsICBcclxuICAgICAgdG9wX3A6IDAsXHJcbiAgICAgIHRvcF9rOiAwLFxyXG4gICAgICBtaW5fcDogMCxcclxuICAgICAgbGluZWFyOiAwLjUsXHJcbiAgICAgIGNvbmZpZGVuY2U6IDAuNCxcclxuICAgICAgcXVhZHJhdGljOiAwLFxyXG4gICAgICBzZWVkOiA0MjAsXHJcbiAgICAgIHJhbmRvbWl6ZV9zZWVkOiB0cnVlLFxyXG4gICAgICB1bmNvbmRpdGlvbmFsX2tleXM6IHVuY29uZGl0aW9uYWxfa2V5cyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGF1ZGlvVXJsID0gcmVzdWx0LmRhdGE/LlswXT8udXJsO1xyXG4gICAgLy8gY29uc3QgYXVkaW8gPSByZXN1bHQuZGF0YTtcclxuICAgIGlmICghYXVkaW9VcmwpIHRocm93IG5ldyBFcnJvcihcIk5vIGF1ZGlvIFVSTCByZXR1cm5lZCBmcm9tIEdyYWRpbyBtb2RlbC5cIik7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgYXVkaW9VcmwgfSk7XHJcbiAgICAvLyByZXR1cm4gTmV4dFJlc3BvbnNlKHsgYXVkaW8gfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiVFRTIGdlbmVyYXRpb24gZXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIkNsaWVudCIsImhhbmRsZV9maWxlIiwiUE9TVCIsInJlcSIsInpvbm9zVXJsIiwicHJvY2VzcyIsImVudiIsIlpPTk9TX1RUU19VUkwiLCJlMSIsImUyIiwiZTMiLCJlNCIsImU1IiwiZTYiLCJlNyIsImU4IiwidW5jb25kaXRpb25hbF9rZXlzIiwiZm9ybURhdGEiLCJ0ZXh0IiwiZ2V0Iiwic3BlYWtlckF1ZGlvIiwicmF3S2V5cyIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJlbW90aW9uYWxfa2V5cyIsInN0cmluZ2lmeSIsImNsaWVudCIsImNvbm5lY3QiLCJzcGVha2VyRmlsZSIsImFycmF5QnVmZmVyIiwibmFtZSIsInJlc3VsdCIsInByZWRpY3QiLCJtb2RlbF9jaG9pY2UiLCJsYW5ndWFnZSIsInNwZWFrZXJfYXVkaW8iLCJwcmVmaXhfYXVkaW8iLCJ2cV9zaW5nbGUiLCJmbWF4IiwicGl0Y2hfc3RkIiwic3BlYWtpbmdfcmF0ZSIsImRuc21vc19vdnJsIiwic3BlYWtlcl9ub2lzZWQiLCJjZmdfc2NhbGUiLCJ0b3BfcCIsInRvcF9rIiwibWluX3AiLCJsaW5lYXIiLCJjb25maWRlbmNlIiwicXVhZHJhdGljIiwic2VlZCIsInJhbmRvbWl6ZV9zZWVkIiwiYXVkaW9VcmwiLCJkYXRhIiwidXJsIiwiRXJyb3IiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/zonos/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fzonos%2Froute&page=%2Fapi%2Fzonos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fzonos%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CSpeakportrait%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CSpeakportrait%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fzonos%2Froute&page=%2Fapi%2Fzonos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fzonos%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CSpeakportrait%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CSpeakportrait%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Shlok_Speakportrait_Interface_app_api_zonos_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/zonos/route.js */ \"(rsc)/./app/api/zonos/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"export\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/zonos/route\",\n        pathname: \"/api/zonos\",\n        filename: \"route\",\n        bundlePath: \"app/api/zonos/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Shlok\\\\Speakportrait\\\\Interface\\\\app\\\\api\\\\zonos\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Shlok_Speakportrait_Interface_app_api_zonos_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ6b25vcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGem9ub3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ6b25vcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNTaGxvayU1Q1NwZWFrcG9ydHJhaXQlNUNJbnRlcmZhY2UlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1NobG9rJTVDU3BlYWtwb3J0cmFpdCU1Q0ludGVyZmFjZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1leHBvcnQmcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDcUI7QUFDbEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFNobG9rXFxcXFNwZWFrcG9ydHJhaXRcXFxcSW50ZXJmYWNlXFxcXGFwcFxcXFxhcGlcXFxcem9ub3NcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiZXhwb3J0XCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3pvbm9zL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvem9ub3NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3pvbm9zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcU2hsb2tcXFxcU3BlYWtwb3J0cmFpdFxcXFxJbnRlcmZhY2VcXFxcYXBwXFxcXGFwaVxcXFx6b25vc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fzonos%2Froute&page=%2Fapi%2Fzonos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fzonos%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CSpeakportrait%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CSpeakportrait%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@gradio"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fzonos%2Froute&page=%2Fapi%2Fzonos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fzonos%2Froute.js&appDir=C%3A%5CUsers%5CShlok%5CSpeakportrait%5CInterface%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CShlok%5CSpeakportrait%5CInterface&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();