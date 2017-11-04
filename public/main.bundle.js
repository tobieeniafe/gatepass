webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa-angle-double-up {\r\n  padding: 10px 15px !important;\r\n  color: #fff;\r\n  border: 1px solid #ccc !important;\r\n  background:rgba(0,0,0,0.4) !important;\r\n  font-size:1.6em !important;\r\n  transition: all 0.5s;\r\n  border-radius: 50%;\r\n}\r\n\r\n.fa-angle-double-up:hover{\r\n  background:rgba(0,0,0,0.7);\r\n  box-shadow:2px 1px 2px 2px rgba(0,0,0,0.3);\r\n}\r\n\r\nfooter{\r\n  color: rgba(255,255,255,0.8) !important;\r\n}\r\n\r\na i{\r\n  color: rgba(255,255,255,0.8) !important;\r\n}\r\n\r\n.go-top {\r\n\tposition: fixed !important;\r\n\tright: -55px;\r\n\tbottom: 0;\r\n}\r\n  \r\n.go-top.show {\r\n\tright: 10px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n<app-nav></app-nav>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n<footer class=\"page-footer\">\r\n\t<div class=\"row col s12 m12\">\r\n\r\n\t  <div class=\"col s12 m1\"></div>\r\n\t  <div class=\"col s6 m3\">\r\n\t  \t<h6>Get The Apps</h6>\r\n\t  \t<div class=\"col s12 m12\">\r\n\t  \t\t<a href=\"https://itunes.apple.com/us/app/gatepass-oya-enter/id1299491874?mt=8&ign-mpt=uo%3D4\" target=\"_blank\">\r\n\t  \t\t\t<svg style=\"fill: rgba(255,255,255,0.8)\" height=\"44px\" width=\"131px\" x=\"0px\" y=\"0px\" viewBox=\"0 0 131 44\"><path d=\"M95.752,9.966l0.07,0.861h0.036c0.259-0.448,0.883-0.99,1.838-0.99c1.002,0,2.039,0.648,2.039,2.463v3.406 h-1.45v-3.242c0-0.825-0.307-1.45-1.096-1.45c-0.578,0-0.978,0.413-1.132,0.849c-0.047,0.118-0.07,0.295-0.07,0.46v3.383h-1.45 v-4.031c0-0.661-0.024-1.214-0.047-1.709H95.752z\"></path><rect x=\"74.588\" y=\"7.338\" width=\"1.449\" height=\"8.368\"></rect><path d=\"M54.52,7.573c0.495,0,0.802,0.342,0.813,0.79c0,0.424-0.318,0.778-0.825,0.778 c-0.484,0-0.801-0.354-0.801-0.778C53.707,7.916,54.036,7.573,54.52,7.573z\"></path><rect x=\"53.789\" y=\"9.966\" width=\"1.449\" height=\"5.74\"></rect><path d=\"M43.707,15.706H42.28l-2.133-5.74h1.568l0.93,2.911c0.165,0.507,0.283,0.967,0.389,1.438h0.036 c0.105-0.472,0.236-0.92,0.389-1.438l0.92-2.911h1.521L43.707,15.706z\"></path><rect x=\"57.515\" y=\"7.338\" width=\"1.449\" height=\"8.368\"></rect><path d=\"M82.795,33.559c-1.012,0.903-2.413,1.351-4.211,1.351c-1.666,0-2.999-0.322-4.005-0.961l0.575-2.063 c1.085,0.639,2.276,0.963,3.572,0.963c0.937,0,1.661-0.213,2.181-0.63c0.517-0.419,0.777-0.98,0.777-1.692 c0-0.618-0.214-1.146-0.64-1.576c-0.432-0.428-1.137-0.822-2.132-1.192c-2.703-1.006-4.057-2.482-4.057-4.422 c0-1.269,0.472-2.311,1.429-3.121c0.955-0.808,2.22-1.214,3.797-1.214c1.405,0,2.575,0.246,3.509,0.732l-0.625,2.018 c-0.871-0.472-1.861-0.712-2.965-0.712c-0.873,0-1.558,0.222-2.05,0.639c-0.411,0.388-0.618,0.854-0.618,1.403 c0,0.607,0.237,1.113,0.71,1.517c0.414,0.365,1.163,0.761,2.245,1.188c1.334,0.531,2.309,1.162,2.938,1.882 c0.625,0.718,0.94,1.611,0.94,2.679C84.165,31.665,83.705,32.738,82.795,33.559z\"></path><path d=\"M91.524,25.395h-2.733v5.417c0,1.374,0.485,2.056,1.449,2.056c0.443,0,0.807-0.033,1.099-0.108l0.07,1.876 c-0.49,0.183-1.131,0.276-1.926,0.276c-0.973,0-1.743-0.294-2.291-0.894c-0.555-0.593-0.829-1.596-0.829-3.002v-5.621h-1.626V23.54 h1.626V21.5l2.428-0.733v2.773h2.733V25.395z\"></path><path d=\"M104.242,9.966h0.813V8.893l1.427-0.401v1.474h1.378v1.084h-1.378v2.534c0,0.708,0.188,1.061,0.742,1.061 c0.259,0,0.401-0.012,0.566-0.059l0.024,1.096c-0.213,0.082-0.601,0.154-1.049,0.154c-0.542,0-0.979-0.177-1.25-0.472 c-0.318-0.33-0.46-0.861-0.46-1.615V11.05h-0.813V9.966z\"></path><path d=\"M110.598,25.718c-0.244-0.044-0.506-0.063-0.78-0.063c-0.871,0-1.542,0.329-2.017,0.984 c-0.414,0.582-0.619,1.306-0.619,2.199v5.847h-2.476v-7.639c0-1.277-0.022-2.447-0.066-3.505h2.155l0.092,2.133h0.068 c0.258-0.731,0.669-1.322,1.238-1.762c0.551-0.402,1.149-0.595,1.791-0.595c0.227,0,0.435,0.012,0.615,0.042V25.718z\"></path><path d=\"M110.974,12.264v3.442h-1.449V7.338h1.449v3.406h0.024c0.177-0.271,0.425-0.495,0.719-0.648 c0.295-0.166,0.636-0.26,1.002-0.26c0.978,0,2.004,0.648,2.004,2.487v3.383h-1.45v-3.229c0-0.825-0.307-1.462-1.108-1.462 c-0.566,0-0.967,0.378-1.131,0.814C110.986,11.958,110.974,12.111,110.974,12.264z\"></path><path d=\"M37.151,7.762H35.3l-2.547,7.944h1.497l0.684-2.251h2.511l0.718,2.251h1.567L37.151,7.762z M35.171,12.359 l0.612-1.957c0.13-0.472,0.26-1.025,0.377-1.485h0.025c0.118,0.459,0.247,1.001,0.401,1.485l0.624,1.957H35.171z\"></path><path d=\"M56.617,24.873c-0.884-1.042-1.978-1.558-3.293-1.558c-1.684,0-2.935,0.664-3.765,1.99h-0.043L49.38,23.54 h-2.178c0.063,1.252,0.095,2.47,0.095,3.662v12.001h2.475v-5.852c0.644,1.059,1.702,1.585,3.181,1.585 c1.366,0,2.514-0.489,3.434-1.464c1.033-1.103,1.548-2.595,1.548-4.496C57.934,27.282,57.493,25.911,56.617,24.873z M54.631,31.91 c-0.519,0.721-1.25,1.077-2.18,1.077c-0.794,0-1.44-0.281-1.936-0.834c-0.5-0.558-0.744-1.243-0.744-2.055v-1.855 c0-0.2,0.038-0.45,0.113-0.757c0.154-0.658,0.477-1.189,0.975-1.599c0.498-0.405,1.049-0.606,1.66-0.606 c0.903,0,1.62,0.374,2.158,1.104c0.49,0.701,0.731,1.597,0.731,2.679C55.408,30.245,55.151,31.192,54.631,31.91z\"></path><path d=\"M101.728,24.944c-0.994-1.09-2.307-1.628-3.949-1.628c-1.697,0-3.042,0.543-4.044,1.648 c-1.001,1.099-1.5,2.515-1.5,4.241c0,1.648,0.483,3.022,1.453,4.105c0.969,1.086,2.277,1.627,3.915,1.627 c1.693,0,3.053-0.564,4.08-1.693c0.978-1.104,1.464-2.505,1.464-4.222C103.147,27.357,102.673,25.992,101.728,24.944z M99.888,31.725c-0.532,0.906-1.276,1.351-2.218,1.351c-0.968,0-1.717-0.44-2.247-1.324c-0.448-0.731-0.668-1.605-0.668-2.63 c0-1.053,0.219-1.942,0.668-2.671c0.517-0.885,1.275-1.325,2.265-1.325c0.964,0,1.703,0.44,2.23,1.325 c0.441,0.729,0.662,1.608,0.662,2.628S100.35,30.986,99.888,31.725z\"></path><path d=\"M68.858,24.873c-0.879-1.042-1.976-1.558-3.291-1.558c-1.681,0-2.93,0.664-3.761,1.99h-0.043L61.62,23.54 h-2.173c0.06,1.252,0.092,2.47,0.092,3.662v12.001h2.477v-5.852c0.644,1.059,1.704,1.585,3.179,1.585 c1.369,0,2.512-0.489,3.435-1.464c1.033-1.103,1.548-2.595,1.548-4.496C70.177,27.282,69.739,25.911,68.858,24.873z M66.876,31.91 c-0.52,0.721-1.245,1.077-2.182,1.077c-0.791,0-1.438-0.281-1.934-0.834c-0.499-0.558-0.744-1.243-0.744-2.055v-1.855 c0-0.2,0.036-0.45,0.112-0.757c0.154-0.658,0.48-1.189,0.977-1.599c0.499-0.405,1.047-0.606,1.661-0.606 c0.901,0,1.62,0.374,2.159,1.104c0.488,0.701,0.734,1.597,0.734,2.679C67.658,30.245,67.397,31.192,66.876,31.91z\"></path><path d=\"M40.783,19.231h-3.076l-4.971,15.453h2.565l1.378-4.536h5.023l1.443,4.536h2.639L40.783,19.231z M37.113,28.243 l1.284-4.036c0.339-1.286,0.581-2.255,0.736-2.912h0.043c0.38,1.526,0.643,2.497,0.784,2.912l1.302,4.036H37.113z\"></path><path d=\"M121.284,28.587c0-1.391-0.331-2.562-0.986-3.513c-0.823-1.191-2.036-1.786-3.646-1.786 c-1.633,0-2.932,0.595-3.9,1.786c-0.915,1.121-1.376,2.516-1.376,4.201c0,1.711,0.497,3.075,1.482,4.091 c0.986,1.016,2.343,1.522,4.066,1.522c1.441,0,2.689-0.224,3.74-0.686l-0.39-1.722c-0.902,0.357-1.901,0.532-3.004,0.532 c-0.995,0-1.804-0.26-2.429-0.781c-0.69-0.58-1.05-1.418-1.079-2.517h7.43C121.252,29.402,121.284,29.027,121.284,28.587z M113.764,27.941c0.074-0.745,0.321-1.388,0.734-1.922c0.506-0.668,1.163-1.014,1.971-1.014c0.885,0,1.544,0.349,1.974,1.034 c0.335,0.538,0.492,1.17,0.479,1.901H113.764z\"></path><path d=\"M70.542,9.837c-0.861,0-1.486,0.365-1.839,0.919h-0.024V7.338h-1.449v6.753c0,0.59-0.024,1.226-0.047,1.615 h1.238l0.07-0.86h0.024c0.412,0.708,1.072,0.99,1.815,0.99c1.297,0,2.605-1.025,2.605-3.089 C72.946,11.003,71.945,9.837,70.542,9.837z M70,14.692c-0.624,0-1.131-0.425-1.284-1.013c-0.024-0.106-0.036-0.224-0.036-0.342 v-0.931c0-0.142,0.024-0.271,0.048-0.378c0.153-0.636,0.695-1.061,1.284-1.061c0.966,0,1.449,0.825,1.449,1.839 C71.461,13.973,70.908,14.692,70,14.692z\"></path><path d=\"M83.005,12.63c0-1.261-0.614-2.794-2.475-2.794c-1.839,0-2.805,1.497-2.805,3.089 c0,1.756,1.096,2.899,2.958,2.899c0.825,0,1.508-0.153,2.003-0.365l-0.212-0.991c-0.448,0.154-0.919,0.259-1.591,0.259 c-0.931,0-1.733-0.448-1.768-1.485h3.842C82.981,13.114,83.005,12.901,83.005,12.63z M79.115,12.229 c0.059-0.589,0.436-1.403,1.332-1.403c0.966,0,1.202,0.872,1.19,1.403H79.115z\"></path><path d=\"M90.221,9.837c-1.733,0-2.97,1.155-2.97,3.041c0,1.85,1.261,2.958,2.876,2.958c1.461,0,2.947-0.943,2.947-3.053 C93.074,11.039,91.93,9.837,90.221,9.837z M90.175,14.787c-0.873,0-1.427-0.837-1.427-1.945c0-0.955,0.412-1.956,1.438-1.956 c0.99,0,1.391,1.037,1.391,1.933C91.577,13.985,91,14.787,90.175,14.787z\"></path><path d=\"M65.708,14.327v-2.063c0-1.261-0.531-2.428-2.37-2.428c-0.907,0-1.65,0.247-2.074,0.507l0.283,0.943 c0.389-0.247,0.978-0.425,1.544-0.425c1.013,0,1.166,0.625,1.166,1.002v0.094c-2.122-0.012-3.406,0.731-3.406,2.169 c0,0.872,0.648,1.709,1.804,1.709c0.754,0,1.356-0.319,1.697-0.766h0.035l0.106,0.636h1.308 C65.731,15.353,65.708,14.846,65.708,14.327z M64.293,13.69c0,0.106,0,0.213-0.035,0.319c-0.141,0.413-0.554,0.79-1.144,0.79 c-0.459,0-0.825-0.26-0.825-0.825c0-0.872,0.978-1.084,2.003-1.072V13.69z\"></path><path d=\"M121.231,12.63c0-1.261-0.614-2.794-2.475-2.794c-1.839,0-2.805,1.497-2.805,3.089 c0,1.756,1.096,2.899,2.958,2.899c0.825,0,1.508-0.153,2.003-0.365l-0.212-0.991c-0.447,0.154-0.919,0.259-1.591,0.259 c-0.931,0-1.733-0.448-1.768-1.485h3.842C121.207,13.114,121.231,12.901,121.231,12.63z M117.341,12.229 c0.059-0.589,0.436-1.403,1.332-1.403c0.966,0,1.203,0.872,1.19,1.403H117.341z\"></path><path d=\"M51.547,14.327v-2.063c0-1.261-0.531-2.428-2.369-2.428c-0.908,0-1.651,0.247-2.075,0.507l0.283,0.943 c0.389-0.247,0.978-0.425,1.544-0.425c1.013,0,1.167,0.625,1.167,1.002v0.094c-2.122-0.012-3.406,0.731-3.406,2.169 c0,0.872,0.648,1.709,1.803,1.709c0.754,0,1.355-0.319,1.697-0.766h0.035l0.106,0.636h1.309 C51.57,15.353,51.547,14.846,51.547,14.327z M50.132,13.69c0,0.106,0,0.213-0.034,0.319c-0.142,0.413-0.555,0.79-1.144,0.79 c-0.46,0-0.825-0.26-0.825-0.825c0-0.872,0.978-1.084,2.003-1.072V13.69z\"></path><path d=\"M23.106,7.376H12.221c-1.4,0-2.542,1.138-2.542,2.537v24.19c0,1.4,1.141,2.534,2.542,2.534h10.886 c1.399,0,2.54-1.135,2.54-2.534V9.913C25.646,8.514,24.505,7.376,23.106,7.376z M16.4,9.947h2.524c0.165,0,0.3,0.135,0.3,0.302 c0,0.158-0.135,0.294-0.3,0.294H16.4c-0.16,0-0.298-0.136-0.298-0.294C16.102,10.082,16.24,9.947,16.4,9.947z M17.662,35.289 c-0.722,0-1.311-0.589-1.311-1.312c0-0.725,0.589-1.315,1.311-1.315c0.726,0,1.313,0.591,1.313,1.315 C18.974,34.7,18.387,35.289,17.662,35.289z M24.103,31.536h-12.88V12.487h12.88V31.536z\"></path></svg>\r\n\t  \t\t</a>\r\n\t  \t</div>\r\n\t  \t<div class=\"col s12 m12\">\r\n\t  \t\t<a href=\"https://play.google.com/store/apps/details?id=com.gatepassng.gatepass&hl=en\" target=\"_blank\">\r\n\t  \t\t\t<svg style=\"fill: rgba(255,255,255,0.8)\" height=\"44px\" width=\"139px\" x=\"0px\" y=\"0px\" viewBox=\"0 0 139 44\"><path d=\"M45.616,12.01h-0.952c0-0.131-0.09-0.502-0.271-1.112H43.02c-0.186,0.601-0.28,0.972-0.28,1.112h-0.895 c0-0.077,0.231-0.712,0.694-1.903c0.463-1.192,0.695-1.848,0.695-1.969h1.124c0,0.113,0.21,0.76,0.629,1.941 C45.406,11.259,45.616,11.903,45.616,12.01z M44.242,10.33c-0.339-1.023-0.509-1.576-0.509-1.66h-0.048 c0,0.077-0.175,0.63-0.526,1.66H44.242z\"></path><path d=\"M49.451,12.01h-0.735c0-0.081-0.273-0.51-0.818-1.288c-0.571-0.819-0.896-1.379-0.976-1.68h-0.048 c0.049,0.434,0.074,0.827,0.074,1.178c0,0.49,0.014,1.087,0.042,1.79H46.26c0.03-0.615,0.045-1.29,0.045-2.025 c0-0.724-0.015-1.339-0.045-1.847h0.883c0,0.105,0.245,0.524,0.735,1.258c0.521,0.779,0.821,1.308,0.898,1.585h0.045 c-0.048-0.442-0.071-0.839-0.071-1.19c0-0.537-0.014-1.088-0.042-1.654h0.744c-0.028,0.492-0.042,1.107-0.042,1.847 C49.409,10.731,49.423,11.406,49.451,12.01z\"></path><path d=\"M53.762,9.94c0,0.563-0.181,1.055-0.541,1.475c-0.361,0.42-0.867,0.631-1.517,0.631 c-0.293,0-0.698-0.012-1.213-0.036c0.026-0.599,0.039-1.274,0.039-2.025c0-0.722-0.013-1.337-0.039-1.847h0.52 c0.085,0,0.212-0.003,0.381-0.009c0.168-0.006,0.278-0.009,0.33-0.009c0.716,0,1.235,0.178,1.557,0.535 C53.601,9.012,53.762,9.441,53.762,9.94z M52.95,10.068c0-0.381-0.111-0.701-0.333-0.962c-0.222-0.261-0.561-0.391-1.017-0.391 c-0.085,0-0.202,0.009-0.351,0.027c0.02,0.397,0.03,0.811,0.03,1.243c0,0.474,0.01,0.944,0.03,1.41 c0.129,0.026,0.258,0.039,0.387,0.039c0.426,0,0.742-0.132,0.947-0.397C52.847,10.772,52.95,10.449,52.95,10.068z\"></path><path d=\"M57.737,12.01h-0.88c-0.23-0.702-0.407-1.135-0.529-1.3c-0.123-0.164-0.321-0.247-0.595-0.247 c-0.115,0-0.225,0.001-0.33,0.003c0,0.51,0.009,1.024,0.027,1.544h-0.827c0.026-0.599,0.039-1.274,0.039-2.025 c0-0.722-0.013-1.337-0.039-1.847h0.515c0.06,0,0.184-0.003,0.373-0.009c0.189-0.006,0.364-0.009,0.525-0.009 c0.91,0,1.365,0.311,1.365,0.934c0,0.494-0.26,0.838-0.779,1.032v0.045c0.2,0.056,0.376,0.212,0.526,0.468 C57.278,10.856,57.481,11.326,57.737,12.01z M56.621,9.274c0-0.394-0.254-0.592-0.761-0.592c-0.186,0-0.351,0.014-0.494,0.042 c0.022,0.307,0.033,0.708,0.033,1.202c0.109,0.004,0.201,0.006,0.277,0.006C56.306,9.932,56.621,9.713,56.621,9.274z\"></path><path d=\"M62,10.003c0,0.609-0.186,1.113-0.559,1.514c-0.373,0.401-0.834,0.601-1.383,0.601 c-0.523,0-0.962-0.184-1.315-0.552c-0.353-0.368-0.529-0.835-0.529-1.402c0-0.609,0.186-1.113,0.559-1.514 c0.373-0.4,0.834-0.601,1.383-0.601c0.523,0,0.962,0.184,1.315,0.55C61.823,8.966,62,9.434,62,10.003z M61.179,10.089 c0-0.414-0.106-0.75-0.318-1.008c-0.212-0.258-0.474-0.387-0.785-0.387c-0.29,0-0.535,0.13-0.738,0.39 c-0.202,0.26-0.303,0.588-0.303,0.984c0,0.412,0.107,0.748,0.32,1.007c0.213,0.259,0.474,0.388,0.784,0.388 c0.289,0,0.535-0.13,0.738-0.391C61.078,10.811,61.179,10.484,61.179,10.089z\"></path><path d=\"M63.682,12.01H62.84c0.026-0.615,0.039-1.29,0.039-2.025c0-0.724-0.013-1.339-0.039-1.847h0.842 c-0.026,0.5-0.039,1.115-0.039,1.847C63.643,10.733,63.656,11.408,63.682,12.01z\"></path><path d=\"M67.993,9.94c0,0.563-0.181,1.055-0.541,1.475c-0.361,0.42-0.867,0.631-1.517,0.631 c-0.294,0-0.698-0.012-1.213-0.036c0.026-0.599,0.039-1.274,0.039-2.025c0-0.722-0.013-1.337-0.039-1.847h0.52 c0.085,0,0.212-0.003,0.381-0.009s0.278-0.009,0.33-0.009c0.716,0,1.235,0.178,1.557,0.535C67.831,9.012,67.993,9.441,67.993,9.94z M67.181,10.068c0-0.381-0.111-0.701-0.333-0.962c-0.222-0.261-0.561-0.391-1.017-0.391c-0.085,0-0.202,0.009-0.351,0.027 c0.02,0.397,0.03,0.811,0.03,1.243c0,0.474,0.01,0.944,0.03,1.41c0.129,0.026,0.258,0.039,0.387,0.039 c0.426,0,0.742-0.132,0.947-0.397C67.078,10.772,67.181,10.449,67.181,10.068z\"></path><path d=\"M73.712,12.01H72.76c0-0.131-0.09-0.502-0.271-1.112h-1.374c-0.186,0.601-0.28,0.972-0.28,1.112H69.94 c0-0.077,0.231-0.712,0.694-1.903c0.463-1.192,0.694-1.848,0.694-1.969h1.124c0,0.113,0.21,0.76,0.629,1.941 C73.502,11.259,73.712,11.903,73.712,12.01z M72.337,10.33c-0.339-1.023-0.509-1.576-0.509-1.66h-0.048 c0,0.077-0.175,0.63-0.526,1.66H72.337z\"></path><path d=\"M77.181,9.152c0,0.474-0.176,0.824-0.528,1.05c-0.352,0.226-0.784,0.339-1.295,0.339 c-0.093,0-0.159-0.002-0.199-0.006c0,0.373,0.011,0.865,0.033,1.475h-0.836c0.026-0.573,0.039-1.248,0.039-2.025 c0-0.714-0.013-1.329-0.039-1.847h0.518c0.073,0,0.214-0.003,0.422-0.009s0.389-0.009,0.541-0.009c0.377,0,0.695,0.085,0.955,0.256 C77.051,8.547,77.181,8.805,77.181,9.152z M76.413,9.316c0-0.424-0.281-0.637-0.845-0.637c-0.141,0-0.29,0.015-0.446,0.045 c0.022,0.375,0.033,0.799,0.033,1.273c0.049,0.004,0.107,0.006,0.172,0.006C76.052,10.003,76.413,9.774,76.413,9.316z\"></path><path d=\"M80.748,9.152c0,0.474-0.176,0.824-0.528,1.05c-0.352,0.226-0.784,0.339-1.295,0.339 c-0.093,0-0.159-0.002-0.199-0.006c0,0.373,0.011,0.865,0.033,1.475h-0.836c0.026-0.573,0.039-1.248,0.039-2.025 c0-0.714-0.013-1.329-0.039-1.847h0.518c0.073,0,0.214-0.003,0.422-0.009s0.389-0.009,0.541-0.009c0.377,0,0.695,0.085,0.955,0.256 C80.618,8.547,80.748,8.805,80.748,9.152z M79.981,9.316c0-0.424-0.282-0.637-0.845-0.637c-0.141,0-0.29,0.015-0.446,0.045 c0.022,0.375,0.033,0.799,0.033,1.273c0.049,0.004,0.107,0.006,0.172,0.006C79.619,10.003,79.981,9.774,79.981,9.316z\"></path><path d=\"M86.58,10.003c0,0.609-0.186,1.113-0.559,1.514c-0.373,0.401-0.834,0.601-1.383,0.601 c-0.523,0-0.962-0.184-1.315-0.552c-0.353-0.368-0.529-0.835-0.529-1.402c0-0.609,0.186-1.113,0.559-1.514 c0.373-0.4,0.834-0.601,1.383-0.601c0.523,0,0.962,0.184,1.315,0.55C86.403,8.966,86.58,9.434,86.58,10.003z M85.759,10.089 c0-0.414-0.106-0.75-0.318-1.008c-0.212-0.258-0.474-0.387-0.785-0.387c-0.29,0-0.535,0.13-0.738,0.39 c-0.202,0.26-0.303,0.588-0.303,0.984c0,0.412,0.106,0.748,0.32,1.007c0.213,0.259,0.474,0.388,0.783,0.388 c0.29,0,0.535-0.13,0.738-0.391C85.658,10.811,85.759,10.484,85.759,10.089z\"></path><path d=\"M90.611,12.01h-0.735c0-0.081-0.273-0.51-0.818-1.288c-0.571-0.819-0.896-1.379-0.976-1.68h-0.048 c0.049,0.434,0.074,0.827,0.074,1.178c0,0.49,0.014,1.087,0.042,1.79H87.42c0.03-0.615,0.045-1.29,0.045-2.025 c0-0.724-0.015-1.339-0.045-1.847h0.883c0,0.105,0.245,0.524,0.735,1.258c0.522,0.779,0.821,1.308,0.898,1.585h0.045 c-0.048-0.442-0.071-0.839-0.071-1.19c0-0.537-0.014-1.088-0.042-1.654h0.744C90.583,8.63,90.57,9.246,90.57,9.985 C90.57,10.731,90.583,11.406,90.611,12.01z\"></path><path d=\"M55.525,24.417c0,1.922-0.57,3.454-1.71,4.593c-1.294,1.358-2.979,2.038-5.055,2.038 c-1.986,0-3.675-0.689-5.064-2.066c-1.391-1.377-2.085-3.085-2.085-5.122s0.694-3.744,2.085-5.122 c1.389-1.377,3.078-2.066,5.064-2.066c0.987,0,1.928,0.192,2.825,0.576c0.896,0.384,1.615,0.897,2.152,1.538l-1.211,1.211 c-0.91-1.089-2.166-1.634-3.767-1.634c-1.448,0-2.7,0.509-3.757,1.529c-1.057,1.018-1.586,2.342-1.586,3.968 c0,1.628,0.529,2.95,1.586,3.969c1.057,1.018,2.309,1.528,3.757,1.528c1.538,0,2.819-0.513,3.844-1.538 c0.666-0.667,1.05-1.596,1.153-2.787H48.76v-1.653h6.669C55.493,23.738,55.525,24.084,55.525,24.417z\"></path><path d=\"M57.62,22.447c0.91-0.955,2.069-1.432,3.479-1.432c1.409,0,2.568,0.477,3.479,1.432 c0.91,0.955,1.364,2.149,1.364,3.584c0,1.435-0.454,2.63-1.364,3.584c-0.91,0.955-2.07,1.432-3.479,1.432 c-1.41,0-2.569-0.477-3.479-1.432c-0.91-0.955-1.365-2.149-1.365-3.584C56.255,24.596,56.71,23.402,57.62,22.447z M58.937,28.501 c0.608,0.621,1.329,0.933,2.162,0.933c0.833,0,1.553-0.311,2.162-0.933c0.608-0.621,0.913-1.444,0.913-2.469 c0-1.025-0.305-1.848-0.913-2.47c-0.609-0.621-1.33-0.932-2.162-0.932c-0.834,0-1.554,0.31-2.162,0.932 c-0.609,0.622-0.913,1.445-0.913,2.47C58.024,27.057,58.327,27.88,58.937,28.501z\"></path><path d=\"M67.903,22.447c0.91-0.955,2.069-1.432,3.479-1.432c1.409,0,2.568,0.477,3.479,1.432 c0.91,0.955,1.364,2.149,1.364,3.584c0,1.435-0.454,2.63-1.364,3.584c-0.91,0.955-2.07,1.432-3.479,1.432 c-1.41,0-2.569-0.477-3.479-1.432c-0.91-0.955-1.365-2.149-1.365-3.584C66.538,24.596,66.993,23.402,67.903,22.447z M69.219,28.501 c0.608,0.621,1.329,0.933,2.162,0.933c0.833,0,1.553-0.311,2.162-0.933c0.608-0.621,0.913-1.444,0.913-2.469 c0-1.025-0.305-1.848-0.913-2.47c-0.609-0.621-1.33-0.932-2.162-0.932c-0.833,0-1.554,0.31-2.162,0.932 c-0.609,0.622-0.913,1.445-0.913,2.47C68.306,27.057,68.61,27.88,69.219,28.501z\"></path><path d=\"M81.453,35.199c-1.115,0-2.025-0.278-2.73-0.836c-0.705-0.558-1.211-1.195-1.518-1.913l1.615-0.672 c0.179,0.512,0.509,0.942,0.99,1.287c0.48,0.346,1.027,0.519,1.643,0.519c0.973,0,1.739-0.292,2.297-0.874 c0.558-0.583,0.836-1.374,0.836-2.373v-0.903h-0.077c-0.308,0.461-0.743,0.846-1.307,1.153c-0.564,0.308-1.199,0.462-1.903,0.462 c-1.217,0-2.268-0.481-3.152-1.442c-0.884-0.961-1.326-2.152-1.326-3.575c0-1.422,0.442-2.614,1.326-3.575 c0.884-0.96,1.935-1.441,3.152-1.441c0.704,0,1.339,0.154,1.903,0.461c0.563,0.308,0.999,0.692,1.307,1.154h0.077v-1.308h1.692 v8.937c0,1.615-0.468,2.841-1.403,3.681C83.939,34.779,82.798,35.199,81.453,35.199z M81.587,29.434 c0.833,0,1.541-0.308,2.124-0.923c0.583-0.615,0.874-1.442,0.874-2.479c0-1.038-0.291-1.864-0.874-2.479 c-0.583-0.616-1.291-0.923-2.124-0.923c-0.82,0-1.525,0.31-2.114,0.932c-0.589,0.622-0.884,1.445-0.884,2.47 c0,1.025,0.295,1.848,0.884,2.469C80.062,29.122,80.767,29.434,81.587,29.434z\"></path><path d=\"M89.716,30.74h-1.768V16.979h1.768V30.74z\"></path><path d=\"M95.559,31.048c-1.422,0-2.579-0.474-3.469-1.423c-0.891-0.947-1.336-2.146-1.336-3.593 c0-1.371,0.432-2.55,1.298-3.537c0.865-0.986,1.97-1.48,3.315-1.48c1.397,0,2.514,0.455,3.354,1.365 c0.839,0.91,1.259,2.127,1.259,3.652l-0.019,0.327h-7.438c0.051,0.948,0.368,1.698,0.951,2.248c0.583,0.551,1.265,0.827,2.047,0.827 c1.268,0,2.127-0.539,2.576-1.614l1.575,0.653c-0.307,0.73-0.814,1.343-1.518,1.836C97.449,30.801,96.584,31.048,95.559,31.048z M98.096,24.898c-0.038-0.539-0.286-1.051-0.74-1.538c-0.455-0.487-1.132-0.73-2.028-0.73c-0.653,0-1.22,0.205-1.701,0.615 c-0.481,0.41-0.811,0.961-0.99,1.653H98.096z\"></path><path d=\"M106.937,30.74h-1.769V16.979h4.69c1.166,0,2.175,0.388,3.027,1.163c0.852,0.776,1.278,1.753,1.278,2.931 c0,1.179-0.426,2.157-1.278,2.931c-0.852,0.775-1.861,1.163-3.027,1.163h-2.921V30.74z M106.937,23.476h2.96 c0.743,0,1.339-0.251,1.787-0.75c0.449-0.499,0.673-1.051,0.673-1.653c0-0.602-0.224-1.153-0.673-1.652 c-0.449-0.5-1.045-0.75-1.787-0.75h-2.96V23.476z\"></path><path d=\"M117.085,30.74h-1.768V16.979h1.768V30.74z\"></path><path d=\"M121.639,31.048c-1,0-1.836-0.289-2.508-0.865c-0.673-0.576-1.01-1.339-1.01-2.287 c0-1.025,0.397-1.829,1.192-2.412c0.794-0.583,1.774-0.874,2.94-0.874c1.038,0,1.89,0.192,2.556,0.576v-0.269 c0-0.692-0.237-1.246-0.711-1.662c-0.474-0.417-1.057-0.625-1.749-0.625c-0.513,0-0.978,0.122-1.393,0.365 c-0.417,0.243-0.702,0.576-0.856,0.999l-1.614-0.692c0.218-0.563,0.647-1.086,1.288-1.566c0.64-0.481,1.486-0.721,2.537-0.721 c1.204,0,2.203,0.353,2.998,1.057c0.794,0.705,1.191,1.698,1.191,2.979v5.689h-1.691v-1.307h-0.076 C124.029,30.509,122.997,31.048,121.639,31.048z M121.927,29.434c0.73,0,1.393-0.273,1.99-0.817 c0.596-0.544,0.893-1.188,0.893-1.931c-0.499-0.41-1.249-0.615-2.248-0.615c-0.859,0-1.506,0.186-1.941,0.557 c-0.436,0.372-0.653,0.807-0.653,1.307c0,0.461,0.198,0.826,0.596,1.096C120.96,29.298,121.415,29.434,121.927,29.434z\"></path><path d=\"M130.347,34.891h-1.826l2.191-4.747l-3.882-8.822h1.922l2.807,6.766h0.038l2.729-6.766h1.922L130.347,34.891z\"></path><path d=\"M8.629,23.626c0-4.395,0.002-8.791-0.002-13.186C8.627,9.9,8.732,9.408,9.114,9 C9.262,8.842,9.369,8.8,9.552,8.985c2.958,3.018,5.922,6.029,8.886,9.04c1.92,1.95,3.838,3.901,5.765,5.844 c0.187,0.188,0.203,0.287,0.005,0.484c-4.714,4.687-9.424,9.379-14.121,14.082c-0.287,0.287-0.488,0.257-0.764,0.045 c-0.503-0.387-0.696-0.906-0.696-1.523c0.001-2.603-0.004-5.207-0.005-7.81c-0.001-1.841,0-3.681,0-5.522 C8.624,23.626,8.627,23.626,8.629,23.626z\"></path><path d=\"M10.319,8.499c0.36-0.003,0.613,0.101,0.857,0.238c6.02,3.373,12.039,6.748,18.062,10.114 c0.277,0.155,0.271,0.241,0.057,0.451c-1.346,1.325-2.682,2.66-4.017,3.996c-0.144,0.144-0.232,0.228-0.425,0.031 c-4.789-4.884-9.586-9.762-14.381-14.641C10.434,8.648,10.401,8.599,10.319,8.499z\"></path><path d=\"M11.666,38.324c4.37-4.417,8.742-8.83,13.101-13.257c0.271-0.275,0.396-0.238,0.639,0.014 c1.107,1.153,2.231,2.291,3.36,3.423c0.199,0.199,0.215,0.281-0.054,0.428c-5.609,3.07-11.214,6.15-16.819,9.227 C11.8,38.21,11.714,38.293,11.666,38.324z\"></path><path d=\"M36.628,23.748c-0.019,0.495-0.253,0.843-0.606,1.104c-0.262,0.193-0.55,0.352-0.836,0.51 c-1.696,0.938-3.397,1.866-5.089,2.81c-0.228,0.127-0.364,0.122-0.553-0.074c-1.205-1.244-2.42-2.479-3.642-3.706 c-0.178-0.179-0.183-0.277,0-0.456c1.424-1.403,2.84-2.813,4.249-4.23c0.166-0.167,0.285-0.186,0.493-0.069 c1.675,0.949,3.358,1.885,5.038,2.827C36.201,22.756,36.605,23.133,36.628,23.748z\"></path></svg>\r\n\t  \t\t</a>\r\n\t  \t</div>\r\n\t  </div>\r\n\r\n\t  <div class=\"col s6 m3\">\r\n      \t<h6>Quick Links</h6>\r\n      \t<ul>\r\n      \t\t<li>Privacy</li>\r\n      \t\t<li>Support</li>\r\n      \t\t<li>FAQs</li>\r\n      \t\t<li>Terms &amp; Conditions</li>\r\n      \t</ul>\r\n      </div>\r\n\r\n      <div class=\"col s6 m3\">\r\n      \t<h6>Stay Updated</h6>\r\n      \t\t<a href=\"https://twitter.com/gatepassng/\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a> &nbsp; | &nbsp; <a href=\"https://www.instagram.com/gatepassng/\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\r\n      </div>\r\n\r\n      <div class=\"col s6 m2\">\r\n      \t<a pageScroll href=\"#topOfPage\" class=\"white-text go-top\"><i class=\"fa fa-angle-double-up\"></i></a>\r\n      </div>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"footer-copyright\" style=\"padding-left: 20px\">\r\n\t    With &nbsp;<span class=\"red-text\">❤</span>&nbsp; from tekinólojì 2017.\r\n    </div>\r\n\r\n</footer>\r\n<p style=\"display: none\">{{computerIsOnline | async}}</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].interval(1000).subscribe(function () {
            _this.computerIsOnline = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].merge(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(navigator.onLine), __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'online').map(function () { return true; }), __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(window, 'offline').map(function () {
                Materialize.toast("Seems you're offline", 3000, 'grey darken-3 white-text');
                //return false
            }));
            $(window).scroll(function () {
                if ($(this).scrollTop() > 550) {
                    $('.go-top').addClass('show');
                }
                else {
                    $('.go-top').removeClass('show');
                }
            });
        });
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_image_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_index_index_component__ = __webpack_require__("../../../../../src/app/components/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_organiser_events_events_component__ = __webpack_require__("../../../../../src/app/components/organiser/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_organiser_events_events_service__ = __webpack_require__("../../../../../src/app/components/organiser/events/events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_organiser_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/organiser/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_organiser_profile_profile_service__ = __webpack_require__("../../../../../src/app/components/organiser/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_validator_service__ = __webpack_require__("../../../../../src/app/services/validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_authguard_service__ = __webpack_require__("../../../../../src/app/services/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_routeguard_service__ = __webpack_require__("../../../../../src/app/services/routeguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_organiser_create_event_create_event_component__ = __webpack_require__("../../../../../src/app/components/organiser/create-event/create-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_organiser_create_event_create_event_service__ = __webpack_require__("../../../../../src/app/components/organiser/create-event/create-event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_10__components_index_index_component__["a" /* IndexComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_routeguard_service__["a" /* RouteGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_routeguard_service__["a" /* RouteGuard */]] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_13__components_organiser_events_events_component__["a" /* EventsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_authguard_service__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__components_organiser_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_authguard_service__["a" /* AuthGuard */]] },
    { path: 'create-event', component: __WEBPACK_IMPORTED_MODULE_22__components_organiser_create_event_create_event_component__["a" /* CreateEventComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_authguard_service__["a" /* AuthGuard */]] }
    //{ path: '**', component: LoginComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBQTeEyrwUuonblZu8k9cCxErVDCw7qn1k',
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_6_angular2_image_upload__["ImageUploadModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll__["a" /* Ng2PageScrollModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_organiser_events_events_component__["a" /* EventsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_organiser_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_organiser_create_event_create_event_component__["a" /* CreateEventComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__services_validator_service__["a" /* ValidatorService */], __WEBPACK_IMPORTED_MODULE_20__services_authguard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_23__components_organiser_create_event_create_event_service__["a" /* CreateEventService */], __WEBPACK_IMPORTED_MODULE_14__components_organiser_events_events_service__["a" /* EventsService */], __WEBPACK_IMPORTED_MODULE_21__services_routeguard_service__["a" /* RouteGuard */], __WEBPACK_IMPORTED_MODULE_16__components_organiser_profile_profile_service__["a" /* ProfileService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\r\n  min-height: 100vh !important;\r\n  background-color: #fafafa;\r\n}\r\n\r\nh1, h2, h3, h4, h5, p{\r\n  text-align: center;\r\n}\r\n\r\n*{\r\n  color: #24242e;\r\n}\r\n\r\ndiv{\r\n  margin: auto !important;\r\n  text-align: center;\r\n}\r\n\r\n.app{\r\n  width: 185px;\r\n  height: 60px;\r\n}\r\n\r\n.divThree{\r\n   height: 200px;\r\n }\r\n \r\n.fa{\r\n  font-size: inherit !important;\r\n}\r\n\r\n.features{\r\n  background-color: #ffffff;\r\n  box-shadow: 0 3px 12px -2px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.different .row{\r\n  padding-left: 80px !important;\r\n}\r\n\r\n.different .row .col{\r\n  padding: 0 !important;\r\n}\r\n\r\n.slider-box{\r\n   padding-top: 80px;\r\n}\r\n\r\n#particles{\r\n  width: 100%;\r\n  height: 80vh;\r\n  background-color: #24242e;\r\n  margin: auto;\r\n  position: relative;\r\n}\r\n\r\n.fill-particles{\r\n  width: 100%;\r\n  height: 70vh;\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/landing-background.png") + ");\r\n  background-size: cover;\r\n  background-position: 50% 50%;\r\n  background-repeat: no-repeat;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n.mobile-apps{\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n.fa-angle-double-down{\r\n  font-size: 40px !important;\r\n  color: #ffffff !important;\r\n}\r\n\r\n.center h5 a .fa{\r\n  font-size: 25px !important;\r\n}\r\n\r\n.getStarted{\r\n  color: #24242e !important;\r\n  background-color: rgba(255,255,255,0.5) !important;\r\n  border: 2px solid #24242e !important;\r\n  font-weight: bolder !important;\r\n  border-radius: 15px;\r\n}\r\n\r\n.getStarted:hover{\r\n  color: #ffffff !important;\r\n  background-color: #24242e !important;\r\n  opacity: 0.9;\r\n}\r\n\r\n.carousel.carousel-slider .carousel-item {\r\n    height: 240px;\r\n}\r\n\r\n/*tablets*/\r\n@media only screen and (max-width: 1030px) {\r\n    #particles-js{\r\n      height: 70vh !important;\r\n      width: 100vw !important;\r\n    }\r\n    .divThree{\r\n      height: 250px;\r\n    }\r\n    .different .row{\r\n      padding-left: 60px !important;\r\n    }\r\n}\r\n\r\n/*iphone plus*/\r\n@media only screen and (max-width: 450px) {\r\n  .app{\r\n    width: 120px;\r\n    height: 55px;\r\n  }\r\n  #particles-js{\r\n    width: 100vw !important;\r\n    height: 50vh !important;\r\n  }\r\n  .different .row{\r\n   padding-left: 0 !important;\r\n  }\r\n  .slider-box{\r\n   padding-top: 30px;\r\n  }\r\n}\r\n\r\n.features *{\r\n    transition: all 700ms ease;\r\n    -webkit-transition: all 700ms ease;\r\n    -ms-transition: all 700ms ease;\r\n    -o-transition: all 700ms ease;\r\n    -moz-transition: all 700ms ease; \r\n}\r\n\r\n.features .image{\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.features .image .overlay{\r\n    position: absolute;\r\n    left: 0px;\r\n    bottom: 100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #24242e;\r\n    opacity: 0.9;\r\n    transform: scale(0,0);\r\n    -webkit-transform: scale(0,0);\r\n    -o-transform: scale(0,0);\r\n    -moz-transform: scale(0,0);\r\n    -ms-transform: scale(0,0);\r\n}\r\n\r\n.features:hover .image .overlay{\r\n    bottom: 0%;\r\n    transform: scale(1,1);\r\n    -webkit-transform: scale(1,1);\r\n    -o-transform: scale(1,1);\r\n    -moz-transform: scale(1,1);\r\n    -ms-transform: scale(1,1);\r\n}\r\n\r\n.features:hover .image .overlay p {\r\n  color: #ffffff !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n\t<div id=\"particles\">\r\n\t\t<div class=\"fill-particles col s12 m12 wow fadeInRight\" data-wow-duration=\"1.5s\" data-wow-delay=\"1s\" data-wow-offset='0'></div>\r\n\t\t\r\n\t\t<div class=\"row mobile-apps\">\r\n\t\t\t<div class=\"col s12 m3\"></div>\r\n\t\t\t<div class=\"col s6 m3\">\r\n\t\t\t\t<a href=\"https://itunes.apple.com/us/app/gatepass-oya-enter/id1299491874?mt=8&ign-mpt=uo%3D4\" target=\"_blank\">\r\n\t\t\t\t\t<img src=\"{{appstore}}\" class=\"app wow slideInUp\" data-wow-duration=\"1.5s\" data-wow-delay=\"3s\" data-wow-offset='0'>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s6 m3\">\r\n\t\t\t\t<a href=\"https://play.google.com/store/apps/details?id=com.gatepassng.gatepass&hl=en\" target=\"_blank\">\r\n\t\t\t\t\t<img src=\"{{playstore}}\" class=\"app wow slideInUp\" data-wow-duration=\"1.5s\" data-wow-delay=\"3s\" data-wow-offset='0'>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s12 m3\"></div>\r\n\t\t\t<br><br>\r\n\t\t\t<div class=\"col s12 m12\">\r\n\t\t\t\t<a pageScroll href=\"#here\" class=\"white-text\"><i class=\"fa fa-angle-double-down animated infinite bounce\"></i></a>\r\n\t\t\t\t<br><br>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n\r\n\t<div class=\"row\" id=\"here\" style=\"padding-top: 40px\">\r\n\r\n\t  <div class=\"col s1 m1\"></div>\r\n\t  <div class=\"col s12 m9 row\">\r\n\t  \t<div class=\"col s12 m6 slider-box\">\r\n\t  \t\t<div class=\"carousel carousel-slider center\" data-indicators=\"true\">\r\n\t\t\t    <div class=\"carousel-item\" href=\"#one!\">\r\n\t\t\t        <h4>More reach, less stress. </h4>\r\n\t\t\t\t    <p>Amongst our thousands of app users, who needs to pay for ads? Oh wait, still you 😜. But guess what, it’s way less.\r\n\t\t\t\t    </p>\r\n\t\t\t    </div>\r\n\t\t\t    <div class=\"carousel-item\" href=\"#two!\">\r\n\t\t\t      <h4>Your event can totally be cooler.</h4>\r\n\t\t\t\t    <p>Your audience can now share &amp; save tickets offline. Plus who uses printed tickets anymore? 🤷🏾‍\r\n\t\t\t\t    </p>\r\n\t\t\t    </div>\r\n\t\t\t    <div class=\"carousel-item\" href=\"#three!\">\r\n\t\t\t      <h4>We’re obedient 🤗</h4>\r\n\t\t\t\t    <p>“Don’t find customers for your products, find products for your customers.” – Seth Godin.\r\n\t\t\t\t    </p>\r\n\t\t\t    </div>\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn white prev\"><i class=\"fa fa-chevron-left\"></i></button>\r\n\t\t\t<button class=\"btn white next\"><i class=\"fa fa-chevron-right\"></i></button>\r\n\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"col s12 m6\" style=\"position: relative;\">\r\n\t\t\t<img src=\"{{app}}\">\r\n\t\t</div>\r\n\r\n\t\t<hr>\r\n\t  </div>\r\n\t  <div class=\"col s12 m2\"></div>\r\n\r\n\t  \r\n\r\n\t</div>\r\n\r\n\t\r\n\t<div class=\"row different\">\r\n\t\t<h3>How it works</h3>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m2 features\">\r\n\t\t\t\t<div class=\"image\">\r\n\t\t\t\t\t<h4><i class=\"fa fa-sign-in\"></i></h4>\r\n\t\t\t\t\t<h5>Register</h5>\r\n\t\t\t\t\t<p>Here’s where we get to know you &amp; what you do. <br>We love to meet new people.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s12 m1\"></div>\r\n\t\t\t<div class=\"col s12 m2 features\">\r\n\t\t\t\t<div class=\"image\">\r\n\t\t\t\t\t<h4><i class=\"fa fa-calendar\"></i></h4>\r\n\t\t\t\t\t<h5>Create Event</h5>\r\n\t\t\t\t\t<p>When &amp; where's your event? <br>We’re great at saving the date.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s12 m1\"></div>\r\n\t\t\t<div class=\"col s12 m2 features\">\r\n\t\t\t\t<div class=\"image\">\r\n\t\t\t\t\t<h4><i class=\"fa fa-ticket\"></i></h4>\r\n\t\t\t\t\t<h5>Sell Tickets</h5>\r\n\t\t\t\t\t<p>What types of tickets are you selling? Payment? <br>We’d sort that out.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s12 m1\"></div>\r\n\t\t\t<div class=\"col s12 m2 features\">\r\n\t\t\t\t<div class=\"image\">\r\n\t\t\t\t\t<h4><i class=\"fa fa-line-chart\"></i></h4>\r\n\t\t\t\t\t<h5>View Sales</h5>\r\n\t\t\t\t\t<p>Monitor your ticket sales &amp; manage event capacity. <br>Yeah, we do that too.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<br>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m1\"></div>\r\n\t\t\t<div class=\"col s12 m2 features\">\r\n\t\t\t\t<div class=\"image\">\r\n\t\t\t\t\t<h4><i class=\"fa fa-clock-o\"></i></h4>\r\n\t\t\t\t\t<h5>After Event</h5>\r\n\t\t\t\t\t<p>When it's all said &amp; done...</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s12 m1\"></div>\r\n\t\t\t<div class=\"col s12 m2 features\">\r\n\t\t\t\t<div class=\"image\">\r\n\t\t\t\t\t<h4><i class=\"fa fa-money\"></i></h4>\r\n\t\t\t\t\t<h5>Cash Out</h5>\r\n\t\t\t\t\t<p>It's your money afterall.<br> Here you go.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s12 m1\"></div>\r\n\t\t\t<div class=\"col s12 m2 features\">\r\n\t\t\t\t<div class=\"image\">\r\n\t\t\t\t\t<h4><i class=\"fa fa-smile-o\"></i></h4>\r\n\t\t\t\t\t<h5>Happy Customer</h5>\r\n\t\t\t\t\t<p>It's been a pleasure doing business with you.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"divThree row\">\r\n\t    <br><br><br><br><br>\r\n\t    <div class=\"col s12 m12\">\r\n\t    \t<h5>Are you an event organizer?</h5>\r\n\t    \t<a routerLink='/login'><button type=\"button\" name=\"button\" class=\"btn-large getStarted waves-effect waves-light\">Get Started</button></a>\r\n\t    </div>\r\n\t</div>\r\n\t<div class=\"row col s12 m12 center\" style=\"height: 200px; padding-top: 30px\">\r\n\t    <h5>\r\n\t    \t<span class=\"col s12 m3\"></span>\r\n\t    \t<span class=\"col s12 m3\">Not an organizer? &nbsp;Get the app</span>\r\n\t\t    <span class=\"col s12 m2\">\r\n\t\t    \t<a target=\"_blank\" href=\"https://itunes.apple.com/us/app/gatepass-oya-enter/id1299491874?mt=8&ign-mpt=uo%3D4\" class=\"btn-floating btn-large waves-effect waves-light\"><i class=\"fa fa-apple\"></i></a>\r\n\t\t    \t<a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.gatepassng.gatepass&hl=en\" class=\"btn-floating btn-large waves-effect waves-light\"><i class=\"fa fa-android\"></i></a>\r\n\t\t    </span>\r\n\t\t    <span class=\"col s12 m4\"></span>\r\n\t\t</h5>\r\n\t</div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var IndexComponent = (function () {
    function IndexComponent(pageScrollService, document) {
        this.pageScrollService = pageScrollService;
        this.document = document;
        this.title = 'GatePassNG';
        this.sliderImages = ['assets/img/app-1.jpg', 'assets/img/app-2.jpg', 'assets/img/app-3.jpg'];
        this.app = 'assets/img/app.gif';
        this.appstore = 'assets/img/appstore.png';
        this.playstore = 'assets/img/playstore.png';
        $(document).ready(function () {
            $('.carousel.carousel-slider').carousel({
                fullWidth: true,
                duration: 300
            });
            $(".next").click(function () {
                $('.carousel').carousel('next');
            });
            $(".prev").click(function () {
                $('.carousel').carousel('prev');
            });
            particlesJS.load('particles', 'assets/particles.json', function () {
                //console.log('good to go');
            });
            new WOW().init();
            __WEBPACK_IMPORTED_MODULE_3_ng2_page_scroll__["b" /* PageScrollConfig */].defaultDuration = 1200;
        });
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(6000).subscribe(function () {
            $('.carousel').carousel('next');
            $('.slider').slider('next');
        });
    }
    return IndexComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], IndexComponent.prototype, "container", void 0);
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'index',
        template: __webpack_require__("../../../../../src/app/components/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/index/index.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["DOCUMENT"])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_page_scroll__["c" /* PageScrollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_page_scroll__["c" /* PageScrollService */]) === "function" && _b || Object, Object])
], IndexComponent);

var _a, _b;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loginBody{\r\n  height: 600px;\r\n  width: 100%;\r\n  padding-top: 65px;\r\n  -webkit-filter: contrast(100%); /* Safari 6.0 - 9.0 */\r\n  filter: contrast(100%);\r\n  z-index: -500;\r\n}\r\n\r\n\r\n.form{\r\n  background-color: #fff;\r\n  height: 387px;\r\n  margin: auto;\r\n  margin-top: 450px;\r\n  margin-bottom: 100px;\r\n  padding-top: 30px;\r\n  /*margin-left: 33%;*/\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.transparent{\r\n  background-color: rgba(64, 64, 64, 0.5) !important;\r\n  height: 300px;\r\n  color: #ffffff;\r\n}\r\n\r\n.transparent-btn{\r\n  background-color: rgba(255, 255, 255, 0.1) !important;\r\n  border: 1px solid #fff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.small{\r\n  display: none;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n  loginBody{\r\n    height: inherit;\r\n    padding-top: 65px;\r\n  }\r\n\r\n  .form{\r\n    background-color: #fff;\r\n    height: 350px;\r\n    margin: auto;\r\n    margin-top: 450px;\r\n    margin-bottom: 100px;\r\n    /*margin-left: 33%;*/\r\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n    margin: auto;\r\n  }\r\n\r\n  .transparent{\r\n    display: none;\r\n  }\r\n\r\n  .small{\r\n    display: block;\r\n  }\r\n}\r\n\r\n.col, .row{\r\n  margin: auto !important;\r\n  -webkit-box-align: center !important;\r\n      -ms-flex-align: center !important;\r\n          align-items: center !important;\r\n  text-align: center !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loginBody\" id='loginBody' [ngStyle]=\"{'background-image': 'url(' + image + ')'}\">\r\n  <div class=\"row\">\r\n    <div class=\"col m2 s1\"></div>\r\n    <div class=\"form col m4 s10 row\" align=\"center\">\r\n    \t<form (submit)=\"onLoginSubmit()\" class=\"row\" id=\"form\" novalidate=\"\">\r\n    \t\t<h4>Login</h4>\r\n            <div class=\"input-field col s12\">\r\n              <input placeholder=\"E-mail\" id=\"email\" type=\"email\" class=\"validate\" name=\"email\" [(ngModel)]=\"email\">\r\n            </div>\r\n            <div class=\"input-field col s12\">\r\n              <input placeholder='Password' id=\"password\" type=\"password\" class=\"validate\" name=\"password\" [(ngModel)]=\"password\">\r\n            </div>\r\n            <button type=\"submit\" name=\"button\" class=\"btn waves-effect waves-light\" [disabled]='isDisabled'>Login</button>\r\n            <div class=\"progress\" *ngIf='isDisabled'>\r\n                <div class=\"indeterminate\"></div>\r\n            </div>\r\n            <h5 class=\"small\">Don't have an account? <a routerLink='/register'>Register</a></h5>\r\n    \t</form>\r\n    </div>\r\n    <br><br><br><br>\r\n    <div class=\"col m4 s1 transparent\">\r\n      <div class=\"right\" align='right'>\r\n        <h4>Don't have an <br> account?</h4>\r\n        <a routerLink='/register'><button style=\"background-color: #25252E !important\" type=\"button\" name=\"button\" class=\"transparent-btn btn\">Register</button></a>\r\n        <p>Read the terms and conditions for this platform <br><a routerLink='/#'>here</a> </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col m2 s1\"></div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, _auth) {
        this.router = router;
        this._auth = _auth;
        this.image = 'assets/img/7.jpg';
        this.title = 'Login Page';
        this.isDisabled = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.isDisabled = true;
        var user = {
            email: this.email,
            password: this.password
        };
        this._auth.loginUser(user).subscribe(function (data) {
            if (data.status == false) {
                Materialize.toast('Invalid email or password', 3000, 'red white-text');
                _this.isDisabled = false;
            }
            else if (data.status == true) {
                Materialize.toast('Login successful', 3000, 'green white-text');
                localStorage.setItem('token', data.token);
                _this.isDisabled = false;
                _this.router.navigate(['/events']);
            }
            else {
                _this.isDisabled = false;
                _this.router.navigate(['/login']);
            }
        }, function (err) { return Materialize.toast("Something's not right", 1500, 'red white-text'); }, function () { return console.log(); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\r\n  min-width: 100% !important;\r\n  min-height: 100% !important;\r\n}\r\n\r\ndiv .container a img{\r\n  width: 210px !important;\r\n  height: 55px !important;\r\n\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n  div .container a img{\r\n    width: 150px !important;\r\n    height: 50px !important;\r\n\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n  <nav class=\"white\" role=\"navigation\" id=\"topOfPage\">\r\n    <div class=\"nav-wrapper container\">\r\n      <a id=\"logo-container\" routerLink='/index' class=\"brand-logo\"><!-- <img src=\"{{logo}}\"> --><h4 style=\"font-weight: bold;\">Gatepass</h4></a>\r\n      <ul class=\"right hide-on-med-and-down\">\r\n        <li><a *ngIf=\"!_auth.loggedIn()\" routerLink='/register' routerLinkActive='active'>Get Started</a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/events' routerLinkActive='active'>Events</a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/create-event' routerLinkActive='active'>Create Event</a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/profile' routerLinkActive='active'>Profile</a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" (click)='logOut()'>Logout</a></li>\r\n      </ul>\r\n\r\n      <ul id=\"nav-mobile\" class=\"side-nav\">\r\n        <li><a *ngIf=\"!_auth.loggedIn()\" routerLink='/register' routerLinkActive='active'>Get Started <i class=\"fa fa-sign-in\"></i></a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/events' routerLinkActive='active'>Events <i class=\"fa fa-ticket\"></i></a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/create-event' routerLinkActive='active'>Create Event <i class=\"fa fa-calendar\"></i></a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" routerLink='/profile' routerLinkActive='active'>Profile <i class=\"fa fa-user\"></i></a></li>\r\n        <li><a *ngIf=\"_auth.loggedIn()\" (click)='logOut()'>Logout <i class=\"fa fa-power-off\"></i></a></li>\r\n      </ul>\r\n      <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse white-text\"><i class=\"fa fa-bars primary-base-text\"></i></a>\r\n    </div>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = (function () {
    function NavComponent(_auth, router) {
        this._auth = _auth;
        this.router = router;
        this.logo = 'assets/img/logo.png';
        this.loggedIn$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.loggedIn);
        //console.log(this._auth.loggedIn())
        (function ($) {
            $(function () {
                $('.button-collapse').sideNav({
                    closeOnClick: true,
                    draggable: true
                });
            });
        })(jQuery);
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent.prototype.setLoggedIn = function (value) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
    };
    NavComponent.prototype.logOut = function () {
        //console.log('logged out');
        Materialize.toast('Logout successful', 5000, 'green white-text');
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        this.setLoggedIn(false);
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _b || Object])
], NavComponent);

var _a, _b;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/create-event/create-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\r\n  min-height: 100vh;\r\n  padding-bottom: 70px;\r\n}\r\n\r\nagm-map {\r\n  height: 100vh;\r\n}\r\n\r\n/deep/ image-upload label.upload.button {\r\n  background-color: #24242e;\r\n  text-transform: lowercase;\r\n  font-weight: normal;\r\n  padding: 6px;\r\n  border-radius: 3px;\r\n  font-family: 'Lato';\r\n}\r\n\r\n/deep/ image-upload label.clear span{\r\n  text-transform: lowercase;\r\n  font-weight: normal;\r\n  background-color: #d32f2f;\r\n}\r\n\r\n/deep/ image-upload label.clear.button{\r\n  background-color: #d32f2f;\r\n  border-radius: 3px;\r\n  padding: 6px;\r\n}\r\n\r\n/deep/ image-upload div.image-container.hr-inline-group{\r\n  background-color: #f8f8f8;\r\n}\r\n\r\n.col, .row{\r\n  margin: auto !important;\r\n  -webkit-box-align: center !important;\r\n      -ms-flex-align: center !important;\r\n          align-items: center !important;\r\n  text-align: center !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/organiser/create-event/create-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row body\">\r\n  <div class=\"col m12 s12 center-align\">\r\n    <h5>Create Event</h5>\r\n    <p style=\"font-weight: bold;\">Please note that all fields are required</p>\r\n    <br>\r\n  </div>\r\n\r\n<!-- form starts here -->\r\n  <div class=\"col m8 s12\">\r\n    <form class=\"col s12\" (submit)=\"createEvent(eventDate.value, eventTime.value)\" class=\"row\" id=\"form\" novalidate=\"\">\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12 m6\">\r\n          <input placeholder=\"Event Name\" id=\"event_name\" type=\"text\" class=\"validate\" name=\"event_name\" [(ngModel)]=\"event_name\">\r\n        </div>\r\n        <div class=\"input-field col s12 m6\">\r\n          <input placeholder='Event Location' id=\"event_location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"validate\" name=\"event_location\" [(ngModel)]=\"event_location\" #search [formControl]=\"searchControl\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12 m6\">\r\n          <input id=\"event_date\" placeholder='Date' type=\"text\" class=\"datepicker\" #eventDate name=\"event_date\" [(ngModel)]=\"event_date\">\r\n        </div>\r\n        <div class=\"input-field col s12 m6\">\r\n          <input id=\"event_time\" placeholder=\"Time\" type=\"text\" class=\"timepicker\" #eventTime name=\"event_time\" [(ngModel)]=\"event_time\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\"><br>\r\n        <div class=\"input-field col s12 m6\">\r\n          <input placeholder=\"Contact Number\" id=\"contact\" type=\"text\" class=\"validate\"  name=\"contact\" [(ngModel)]=\"contact\">\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n      <h5 class=\"center-align\">Ticket Details</h5><br>\r\n\r\n      <form [formGroup]=\"ticketForm\" novalidate>\r\n          <div formArrayName=\"tickets\" class=\"row\">\r\n              <div *ngFor=\"let ticket of ticketForm.controls.tickets.controls; let i=index\" class=\"row\">\r\n                  <div class=\"col m7 s12\" [formGroupName]=\"i\">\r\n                    <div class=\"col m5 s12\">\r\n                        <input type=\"text\" formControlName=\"ticketName\" placeholder=\"e.g. Regular, VIP\">\r\n                    </div>\r\n                    <div class=\"col m4 s6\">\r\n                        <input type=\"number\" formControlName=\"ticketPrice\" placeholder='Ticket Price &#8358;'>\r\n                    </div>\r\n                    <div class=\"col m3 s6\">\r\n                      <input type=\"number\" formControlName=\"ticketLimit\" placeholder=\"Quantity\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col m3 s8\">\r\n                    <image-upload  [max]=\"1\" *ngIf=\"ticketForm.controls.tickets.controls[i].controls.ticketLimit.valid\" [url]=\"'https://gatepassng.herokuapp.com/api/v1/image'\"  [headers]=\"[{header: 'Authorization', value: 'Client-ID aab3505f42b5d63'}]\"\r\n                    buttonCaption=\"Ticket Image\"  dropBoxMessage=\"Drop image here\"  (onFileUploadFinish)=\"ticketImageUpload($event, i)\" [extensions]=\"['jpeg','png','jpg']\"></image-upload>\r\n                  </div>\r\n                  <div class=\"col m2 s2\">\r\n                    <br>\r\n                      <a class=\"primary-base-text\" *ngIf=\"ticketForm.controls.tickets.controls.length > 1\" (click)=\"removeTicket(i)\"><i class=\"fa fa-trash\"></i></a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col\">\r\n              <a style=\"float: left\" (click)=\"addTicket()\"><h6>Add another ticket <i class=\"fa fa-plus\"></i></h6></a>\r\n          </div>\r\n      </form>\r\n\r\n\r\n\r\n      <br><br>\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m12\">\r\n          <h5 align='center'>Event Design Image</h5>\r\n          <image-upload  [max]=\"1\"  [url]=\"'https://gatepassng.herokuapp.com/api/v1/image'\"  [headers]=\"[{header: 'Authorization', value: 'Client-ID aab3505f42b5d63'}]\"\r\n          buttonCaption=\"Event Image\"  dropBoxMessage=\"Drop image here\"  (onFileUploadFinish)=\"eventImageUpload($event)\" [extensions]=\"['jpeg','png','jpg']\" #eventImg></image-upload>\r\n        </div>\r\n      </div>\r\n      <br><br>\r\n      <div class=\"row\" align=center>\r\n        <button type=\"submit\" name=\"button\" class=\"btn\" [disabled]='isDisabled'>Create Event</button>\r\n      </div>\r\n      <br><br>\r\n    </form>\r\n  </div>\r\n  <!-- form ends here -->\r\n\r\n\r\n<!-- map here -->\r\n  <div class=\"col m4 s12\">\r\n    <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]='17' [minZoom]='15'>\r\n      <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n    </agm-map>\r\n  </div>\r\n\r\n</div>\r\n<!-- map ends here -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/organiser/create-event/create-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_event_service__ = __webpack_require__("../../../../../src/app/components/organiser/create-event/create-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateEventComponent = (function () {
    function CreateEventComponent(createEventService, router, _http, mapsAPILoader, ngZone, _fb) {
        this.createEventService = createEventService;
        this.router = router;
        this._http = _http;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this._fb = _fb;
        this.mapTitle = 'google map';
        this.tables = [];
        this.ticketImage = true;
        this.eventImage = true;
        this.isDisabled = this.ticketImage || this.eventImage;
        this.ticketPrices = [];
    }
    CreateEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                //console.log(position.coords);
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            });
        }
        this.ticketForm = this._fb.group({
            tickets: this._fb.array([
                this.initTicket(),
            ])
        });
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {});
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry == undefined || place.geometry == null) {
                        return;
                    }
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.formatted_address = place.name + ", " + place.formatted_address;
                    //console.log(`${place.name}, ${place.formatted_address}`);
                });
            });
        });
    };
    CreateEventComponent.prototype.initTicket = function () {
        return this._fb.group({
            ticketName: [''],
            ticketPrice: [''],
            ticketLimit: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    CreateEventComponent.prototype.addTicket = function () {
        var control = this.ticketForm.controls['tickets'];
        control.push(this.initTicket());
    };
    CreateEventComponent.prototype.removeTicket = function (i) {
        var control = this.ticketForm.controls['tickets'];
        control.removeAt(i);
    };
    CreateEventComponent.prototype.ticketImageUpload = function (event, i) {
        var _this = this;
        var resp = event.serverResponse._body;
        var j = JSON.parse(resp);
        var data = {
            "image_url": j.image_url,
            "price": this.ticketForm.value.tickets[i].ticketPrice,
            "title": this.ticketForm.value.tickets[i].ticketName,
            "limit": this.ticketForm.value.tickets[i].ticketLimit
        };
        //console.log(data)
        this.ticketPrices.push(data.price);
        this.quicky(data).subscribe(function (resp) {
            if (resp.status) {
                _this.tables.push(resp.table._id.$oid);
                //console.log(this.tables);
                _this.ticketImage = false;
                _this.isDisabled = _this.ticketImage || _this.eventImage;
            }
        });
    };
    CreateEventComponent.prototype.quicky = function (data) {
        var header = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
        header.append('Authorization', localStorage.getItem('token'));
        return this._http.post("https://gatepassng.herokuapp.com/api/v1/table", data, { headers: header }).map(function (res) { return res.json(); });
    };
    CreateEventComponent.prototype.eventImageUpload = function (event) {
        var resp = event.serverResponse._body;
        var j = JSON.parse(resp);
        this.image_url = j.image_url;
        //console.log(this.image_url);
        this.eventImage = false;
        this.isDisabled = this.ticketImage || this.eventImage;
    };
    CreateEventComponent.prototype.getMinValue = function (array) {
        return Math.min.apply(Math, array);
    };
    CreateEventComponent.prototype.createEvent = function (d, t) {
        var _this = this;
        this.isDisabled = true;
        this.base_price = this.getMinValue(this.ticketPrices);
        if (this.formatted_address == null || this.formatted_address == undefined) {
            this.event_location = this.event_location;
        }
        else {
            this.event_location = this.formatted_address;
        }
        var event = {
            coord: [this.latitude, this.longitude],
            date: d,
            image_url: this.image_url,
            location: this.event_location,
            name: this.event_name,
            price: this.base_price,
            table: this.tables,
            time: t,
            contact: this.contact
        };
        this.createEventService.postEvent(event).subscribe(function (data) {
            if (data.status == false) {
                Materialize.toast('Error occured while creating event', 3000, 'red white-text');
                _this.isDisabled = false;
                //console.log(data);
            }
            else if (data.status == true) {
                //console.log(data);
                Materialize.toast('Event created', 3000, 'green white-text');
                _this.router.navigate(['/events']);
            }
        }, function (err) { return Materialize.toast("Something's not right", 1500, 'red white-text'); }, function () { return console.log(); } //console.log('Request Completed') event
        );
    };
    return CreateEventComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], CreateEventComponent.prototype, "searchElementRef", void 0);
CreateEventComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'create-event',
        template: __webpack_require__("../../../../../src/app/components/organiser/create-event/create-event.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/organiser/create-event/create-event.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__create_event_service__["a" /* CreateEventService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__create_event_service__["a" /* CreateEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__create_event_service__["a" /* CreateEventService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object])
], CreateEventComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=create-event.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/create-event/create-event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateEventService = (function () {
    function CreateEventService(_http) {
        this._http = _http;
        this.http = _http;
        this.token = localStorage.getItem('token');
        (function ($) {
            $(function () {
                $('.datepicker').pickadate({
                    format: 'dd/mm/yyyy',
                    formatSubmit: 'dd/mm/yyyy',
                    selectMonths: true,
                    selectYears: 10,
                    today: 'Today',
                    clear: 'Clear',
                    close: 'Ok',
                    closeOnSelect: false // Close upon selecting a date,
                });
                $('.timepicker').pickatime({
                    default: 'now',
                    fromnow: 0,
                    twelvehour: true,
                    donetext: 'OK',
                    cleartext: 'Clear',
                    canceltext: 'Cancel',
                    autoclose: false,
                    ampmclickable: true,
                    aftershow: function () { } //Function for after opening timepicker
                });
            });
        })(jQuery);
    }
    CreateEventService.prototype.postEvent = function (event) {
        //console.log(event);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.http.post('https://gatepassng.herokuapp.com/api/v1/events', event, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    return CreateEventService;
}());
CreateEventService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CreateEventService);

var _a;
//# sourceMappingURL=create-event.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/events/events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\r\n  min-height: 80vh !important;\r\n  padding: 70px;\r\n}\r\n\r\n#checkoutModal, #otpModal{\r\n  width: 370px !important;\r\n  min-height: 370px;\r\n}\r\n\r\n#addBankModal {\r\n  height: 400px;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n  .body{\r\n    min-height: 85vh !important;\r\n    padding: 5px;\r\n  }\r\n}\r\n\r\n.col, .row{\r\n  margin: auto !important;\r\n  -webkit-box-align: center !important;\r\n      -ms-flex-align: center !important;\r\n          align-items: center !important;\r\n  text-align: center !important;\r\n}\r\n\r\n#ticketDetailsModal{\r\n  min-height: 200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/organiser/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n\r\n  <table class=\"highlight\">\r\n        <thead>\r\n          <tr>\r\n              <th data-field=\"#\"></th>\r\n              <th data-field=\"name\">Name</th>\r\n              <th data-field=\"location\">Location</th>\r\n              <th data-field=\"date\">Date</th>\r\n              <th data-field=\"purchase\">Ticket Sales</th>\r\n              <th data-field=\"status\">Status</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody *ngIf='events'>\r\n            <tr *ngIf='noEvent'><td colspan=\"6\">\r\n              <h4 align='center'>Oops.. you have no events at this time ☹</h4>\r\n              <a routerLink='/create-event' align='center'><u><h5>Create one now</h5></u></a>\r\n            </td></tr>\r\n            <tr *ngFor=\"let event of events; let i = index\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{event.name}}</td>\r\n              <td>{{event.location}}</td>\r\n              <td>{{event.date}}</td>\r\n              <td>{{event.sold}}  <a href=\"#ticketDetailsModal\" class=\"modal-trigger green-text\" (click)='passTicketDetails(event)'>View Details</a></td>\r\n\r\n              <td *ngIf='!event.disabled'>\r\n                <div class=\"switch\">\r\n                    <label>Off<input type=\"checkbox\" [checked]=\"event.is_online\" (change)='changeStatus(event)' value=\"{{event.is_online}}\"  [disabled]='loading'><span class=\"lever\"></span>On</label>\r\n                </div>\r\n              </td>\r\n              <td class=\"red-text\" *ngIf='event.disabled'>\r\n                <a class=\"waves-effect waves-light btn modal-trigger white-text\" href='#checkoutModal' (click)='passTotalPurchased(event)'>Checkout</a>\r\n              </td>\r\n            </tr>\r\n        </tbody>\r\n  </table>\r\n\r\n  <br><br><br>\r\n  <div *ngIf='preloader' align='center'>\r\n    <h5>Loading events</h5>\r\n    <div class=\"preloader-wrapper small active\">\r\n      <div class=\"spinner-layer\">\r\n        <div class=\"circle-clipper left\">\r\n          <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n          <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n          <div class=\"circle\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n    <!-- Checkout Modal -->\r\n    <div id=\"checkoutModal\" class=\"modal\">\r\n      <div class=\"modal-content\">\r\n        <h4 align='center' class=\"green-text\">&#8358;{{checkoutValue}}</h4>\r\n        <h5 align='center' class=\"grey-text\">Your banks</h5>\r\n        <p></p>\r\n        <div *ngIf='!noBank'>\r\n          <hr>\r\n          <span *ngFor='let bank of myBanks; let i = index'>\r\n            <input class=\"with-gap\" id='{{i}}' type=\"radio\" name=\"banks\" [value]='bank.recepient_code' (change)=\"radioSelectChange(bank)\">\r\n            <label for=\"{{i}}\">{{bank.bank_name}} {{bank.account_number}}</label>\r\n            <hr>\r\n          </span>\r\n          <div class=\"col\">\r\n            <a class=\"waves-effect waves-light btn white-text\" (click)='getPayed()'>Get Payed</a>\r\n          </div>\r\n        </div>\r\n\r\n          <div class=\"col\">\r\n            <a class=\"modal-trigger\" href=\"#addBankModal\"><h5 class=\"grey-text\">Add a new bank</h5></a>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <!-- Checkout Modal End -->\r\n\r\n    <!-- OTP Modal -->\r\n    <div id=\"otpModal\" class=\"modal row\" align=\"center\">\r\n      <div class=\"col m1 s1\"></div>\r\n      <div class=\"modal-content col m10 s10\">\r\n        <h4 align='center' class=\"grey-text\">OTP</h4>\r\n        <p class=\"grey-text\">An OTP code has been sent to your registered phone number</p>\r\n          <input class=\"\" type=\"text\" placeholder=\"OTP code\" [(ngModel)]='otp'>\r\n          <button type=\"button\" name=\"button\" class=\"btn waves-effect waves-light\" (click)='sendOTP()' [disabled]='processingPayment'>Proceed</button>\r\n      </div>\r\n      <div class=\"col m1 s1\"></div>\r\n    </div>\r\n    <!-- OTP Modal End -->\r\n\r\n    <!-- Ticket Details Modal -->\r\n    <div id=\"ticketDetailsModal\" class=\"modal row\" align=\"center\">\r\n      <h4>Ticket Details</h4>\r\n      <ul>\r\n        <li *ngFor=\"let t of eventTicketDetails\"><h5>{{t}}</h5></li>\r\n      </ul>\r\n    </div>\r\n    <!-- Ticket Details Modal End -->\r\n\r\n    <!-- Add Bank Modal -->\r\n    <div id=\"addBankModal\" class=\"modal row\" align=\"center\">\r\n      <div class=\"col m1 s1\"></div>\r\n      <div class=\"modal-content col m10 s10\">\r\n        <h4 align='center' class=\"grey-text\">Add New Bank</h4>\r\n          <div class=\"input-field col s12\">\r\n            <select #selectedBank>\r\n              <option *ngFor='let bank of allBanks' [value]='bank.code'> {{bank.name}} </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"input-field col s12\">\r\n            <input class=\"\" type=\"text\" placeholder=\"Account Number\" [(ngModel)]='accountNumber'>\r\n          </div>\r\n          <button type=\"button\" name=\"button\" class=\"btn waves-effect waves-light\" (click)='addBank(selectedBank.value)' [disabled]='addingBank'>Add Bank</button>\r\n          <br><br>\r\n          <div class=\"preloader-wrapper small active\" *ngIf='addingBank'>\r\n            <div class=\"spinner-layer\">\r\n              <div class=\"circle-clipper left\">\r\n                <div class=\"circle\"></div>\r\n              </div><div class=\"gap-patch\">\r\n                <div class=\"circle\"></div>\r\n              </div><div class=\"circle-clipper right\">\r\n                <div class=\"circle\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col m1 s1\"></div>\r\n    </div>\r\n    <!-- Add Bank Modal End -->\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/organiser/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_service__ = __webpack_require__("../../../../../src/app/components/organiser/events/events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsComponent = (function () {
    function EventsComponent(eventsService, router, http) {
        this.eventsService = eventsService;
        this.router = router;
        this.http = http;
        this.noEvent = false;
        this.preloader = true;
        this.event_id = [];
        this.event_status = [];
        this.loading = false;
        this.allBanks = [
            { name: "Access Bank", slug: "access-bank", code: "044", longcode: "044150149", gateway: "emandate", pay_with_bank: true, active: true, is_deleted: null, id: 1, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Citibank Nigeria", slug: "citibank-nigeria", code: "023", longcode: "023150005", gateway: "", pay_with_bank: false, active: true, is_deleted: null, id: 2, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Diamond Bank", slug: "diamond-bank", code: "063", longcode: "063150162", gateway: "emandate", pay_with_bank: true, active: true, is_deleted: null, id: 3, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Ecobank Nigeria", slug: "ecobank-nigeria", code: "050", longcode: "050150010", gateway: "", pay_with_bank: false, active: true, is_deleted: null, id: 4, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Enterprise Bank", slug: "enterprise-bank", code: "084", longcode: "084150015", gateway: "", pay_with_bank: false, active: true, is_deleted: null, id: 5, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Fidelity Bank", slug: "fidelity-bank", code: "070", longcode: "070150003", gateway: "emandate", pay_with_bank: true, active: true, is_deleted: null, id: 6, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "First Bank of Nigeria", slug: "first-bank-of-nigeria", code: "011", longcode: "011151003", gateway: "etz", pay_with_bank: false, active: true, is_deleted: null, id: 7, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "First City Monument Bank", slug: "first-city-monument-bank", code: "214", longcode: "214150018", gateway: "emandate", pay_with_bank: true, active: true, is_deleted: null, id: 8, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Guaranty Trust Bank", slug: "guaranty-trust-bank", code: "058", longcode: "058152036", gateway: "ibank", pay_with_bank: true, active: true, is_deleted: null, id: 9, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Heritage Bank", slug: "heritage-bank", code: "030", longcode: "030159992", gateway: "etz", pay_with_bank: false, active: true, is_deleted: null, id: 10, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Keystone Bank", slug: "keystone-bank", code: "082", longcode: "082150017", gateway: "", pay_with_bank: false, active: true, is_deleted: null, id: 11, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "MainStreet Bank", slug: "mainstreet-bank", code: "014", longcode: "014150331", gateway: "", pay_with_bank: false, active: true, is_deleted: null, id: 12, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Skye Bank", slug: "skye-bank", code: "076", longcode: "076151006", gateway: "etz", pay_with_bank: false, active: true, is_deleted: null, id: 13, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Stanbic IBTC Bank", slug: "stanbic-ibtc-bank", code: "221", longcode: "221159522", gateway: "etz", pay_with_bank: false, active: true, is_deleted: null, id: 14, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Standard Chartered Bank", slug: "standard-chartered-bank", code: "068", longcode: "068150015", gateway: "", pay_with_bank: false, active: true, is_deleted: null, id: 15, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Sterling Bank", slug: "sterling-bank", code: "232", longcode: "232150016", gateway: "", pay_with_bank: false, active: true, is_deleted: null, id: 16, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Union Bank of Nigeria", slug: "union-bank-of-nigeria", code: "032", longcode: "032080474", gateway: "etz", pay_with_bank: false, active: true, is_deleted: null, id: 17, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "United Bank For Africa", slug: "united-bank-for-africa", code: "033", longcode: "033153513", gateway: "etz", pay_with_bank: false, active: true, is_deleted: null, id: 18, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Unity Bank", slug: "unity-bank", code: "215", longcode: "215154097", gateway: "etz", pay_with_bank: false, active: true, is_deleted: null, id: 19, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Wema Bank", slug: "wema-bank", code: "035", longcode: "035150103", gateway: "emandate", pay_with_bank: false, active: true, is_deleted: null, id: 20, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Zenith Bank", slug: "zenith-bank", code: "057", longcode: "057150013", gateway: "emandate", pay_with_bank: true, active: true, is_deleted: null, id: 21, createdAt: "2016-07-14T10:04:29.000Z", updatedAt: "2016-07-14T10:04:29.000Z" },
            { name: "Jaiz Bank", slug: "jaiz-bank", code: "301", longcode: "301080020", gateway: null, pay_with_bank: false, active: true, is_deleted: null, id: 22, createdAt: "2016-10-10T17:26:29.000Z", updatedAt: "2016-10-10T17:26:29.000Z" },
            { name: "Suntrust Bank", slug: "suntrust-bank", code: "100", longcode: "", gateway: null, pay_with_bank: false, active: true, is_deleted: null, id: 23, createdAt: "2016-10-10T17:26:29.000Z", updatedAt: "2016-10-10T17:26:29.000Z" },
            { name: "Providus Bank", slug: "providus-bank", code: "101", longcode: "", gateway: null, pay_with_bank: false, active: true, is_deleted: null, id: 25, createdAt: "2017-03-27T16:09:29.000Z", updatedAt: "2017-03-27T16:09:29.000Z" },
            { name: "Parallex Bank", slug: "parallex-bank", code: "526", longcode: "", gateway: null, pay_with_bank: false, active: true, is_deleted: null, id: 26, createdAt: "2017-03-31T13:54:29.000Z", updatedAt: "2017-03-31T13:54:29.000Z" }
        ];
        this.addingBank = false;
        this.noBank = false;
        this.processingPayment = false;
        this.viewEvents();
        this.loadBanks();
        this.token = localStorage.getItem('token');
        $(document).ready(function () {
            $('select').material_select();
            $('.modal').modal({
                // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
                dismissible: true,
                opacity: .5,
                inDuration: 300,
                outDuration: 200,
                startingTop: '4%',
                endingTop: '10%',
                ready: function () { },
                complete: function () { } // Callback for Modal close
            });
        });
    }
    EventsComponent.prototype.ngOnInit = function () { };
    EventsComponent.prototype.viewEvents = function () {
        var _this = this;
        this.eventsService.getEvent().subscribe(function (data) {
            _this.events = data;
            _this.preloader = false;
            if (_this.events.length == 0) {
                _this.noEvent = true;
            }
        }, function (err) { return Materialize.toast("Something's not right", 1500, 'red white-text'); }, function () { return console.log(); } //this.events
        );
    };
    EventsComponent.prototype.changeStatus = function (e) {
        var _this = this;
        this.loading = true;
        if (e.is_online == true) {
            this.message = { "is_online": false };
        }
        else if (e.is_online == false) {
            this.message = { "is_online": true };
        }
        this.eventsService.updateStatus(e._id.$oid, this.message).subscribe(function (data) {
            //console.log(data);
            if (data.status == true) {
                Materialize.toast("Event " + e.name + "'s status updated", 3000, 'green white-text');
                _this.loading = false;
            }
            else {
                Materialize.toast("Error updating " + e.name + "'s status", 3000, 'red white-text');
                _this.loading = false;
            }
        });
    };
    EventsComponent.prototype.loadBanks = function () {
        var _this = this;
        this.eventsService.getBanks().subscribe(function (data) {
            _this.myBanks = data;
            if (_this.myBanks.length == 0) {
                _this.noBank = true;
            }
            //console.log(data);
        }, function (err) { return Materialize.toast("Something's not right", 1500, 'red white-text'); }, function () { return console.log(); });
    };
    EventsComponent.prototype.addBank = function (c) {
        var _this = this;
        var details = {
            account_number: this.accountNumber,
            bank_code: c
        };
        this.addingBank = true;
        this.eventsService.addBank(details).subscribe(function (data) {
            if (data.status == true) {
                Materialize.toast('Bank added', 3000, 'green white-text');
                _this.loadBanks();
                _this.addingBank = false;
                $('#addBankModal').modal('close');
            }
            else if (data.status == false) {
                Materialize.toast('Unable to add bank', 3000, 'red white-text');
                _this.addingBank = false;
            }
            //console.log(data)
        }, function (err) { return Materialize.toast("Something's not right", 1500, 'red white-text'); }, function () { return console.log(); });
    };
    EventsComponent.prototype.radioSelectChange = function (b) {
        this.transferBankCode = b.recipient_code;
    };
    EventsComponent.prototype.getPayed = function () {
        var _this = this;
        $('#checkoutModal').modal('close');
        $('#otpModal').modal('open');
        var message = {
            amount: this.checkoutValue,
            recipient_code: this.transferBankCode
        };
        this.eventsService.getPayed(message).subscribe(function (data) {
            //console.log(data)
            _this.transferCode = data.transfer_code;
        }, function (err) { return Materialize.toast("Something's not right", 1500, 'red white-text'); }, function () { return console.log(); });
    };
    EventsComponent.prototype.passTotalPurchased = function (e) {
        this.checkoutValue = e.total_purchase;
    };
    EventsComponent.prototype.passTicketDetails = function (e) {
        var saveInto = [];
        function showObject(obj) {
            for (var p in obj) {
                if (obj.hasOwnProperty(p)) {
                    saveInto.push(p + " - " + obj[p].reduce(function (sum, value) { return sum + value; }, 0) + " ticket(s) sold");
                }
            }
        }
        showObject(e.purchased);
        this.eventTicketDetails = saveInto;
        //console.log(this.eventTicketDetails)
    };
    EventsComponent.prototype.sendOTP = function () {
        var _this = this;
        this.processingPayment = true;
        var message = {
            otp: this.otp,
            transfer_code: this.transferCode
        };
        this.eventsService.sendOTP(message).subscribe(function (data) {
            if (data.status == true) {
                Materialize.toast(data.message, 3000, 'green white-text');
                _this.processingPayment = false;
                $('#otpModal').modal('close');
            }
            else if (data.status == false) {
                Materialize.toast('Error occured', 3000, 'red white-text');
                _this.processingPayment = false;
            }
            //console.log(data)
        }, function (err) { return Materialize.toast('Error occured', 3000, 'red white-text'); }, function () { return console.log(); });
    };
    return EventsComponent;
}());
EventsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'events',
        template: __webpack_require__("../../../../../src/app/components/organiser/events/events.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/organiser/events/events.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__events_service__["a" /* EventsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _c || Object])
], EventsComponent);

var _a, _b, _c;
//# sourceMappingURL=events.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/events/events.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsService = (function () {
    function EventsService(_http) {
        this._http = _http;
        this.http = _http;
        this.token = localStorage.getItem('token');
    }
    EventsService.prototype.getEvent = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.http.get('https://gatepassng.herokuapp.com/api/v1/events', { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    EventsService.prototype.updateStatus = function (id, message) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.http.put("https://gatepassng.herokuapp.com/api/v1/event/online/" + id, message, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    EventsService.prototype.getBanks = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.http.get('https://gatepassng.herokuapp.com/api/v1/organiser/bank', { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    EventsService.prototype.addBank = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.http.post('https://gatepassng.herokuapp.com/api/v1/organiser/bank', details, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    EventsService.prototype.getPayed = function (message) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.http.post('https://gatepassng.herokuapp.com/api/v1/organiser/transfer', message, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    EventsService.prototype.sendOTP = function (message) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.http.post('https://gatepassng.herokuapp.com/api/v1/organiser/finalize_transfer', message, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    return EventsService;
}());
EventsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], EventsService);

var _a;
//# sourceMappingURL=events.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\r\n  min-height: 80vh !important;\r\n  padding: 70px;\r\n}\r\n\r\nlabel{\r\n\tfloat: left;\r\n}\r\n\r\n.col, .row{\r\n  margin: auto !important;\r\n  -webkit-box-align: center !important;\r\n      -ms-flex-align: center !important;\r\n          align-items: center !important;\r\n  text-align: center !important;\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n   .body{\r\n\t  padding: 0;\r\n\t}\r\n}\r\n\r\n.avatar{\r\n\tborder-radius: 15px;\r\n\tbackground-color: #24242e;\r\n\tpadding: 35px;\r\n\tcolor: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/organiser/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body row\">\n\t<div class=\"row col s12 m4\">\n\t\t<div class=\"col s12 m12 avatar\">\n\t\t\t<img src=\"{{avatar}}\" class=\"circle\" style=\"width: 100px; height: 100px\">\n\t\t\t<br>\n\t\t\t<h4>{{user.fullname}}</h4>\n\t\t\t<p>{{user.email}}</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row col s12 m8\">\n\t\t<h4 class=\"center-align\">Update Account Details</h4>\n\t\t<div class=\"col s12 m12\">\n\t\t\t<label>Fullname</label>\n\t\t\t<input type=\"text\" [ngModel]=\"user.fullname\" #fn>\n\t\t</div>\n\t\t<div class=\"col s12 m12\">\n\t\t\t<label>Phone number</label>\n\t\t\t<input type=\"text\" [ngModel]=\"user.phone\" #pn>\n\t\t</div>\n\t\t<div class=\"col s12 m12\">\n\t\t\t<label>Email</label>\n\t\t\t<input type=\"text\" [ngModel]=\"user.email\" #e>\n\t\t</div>\n\t\t<div class=\"col s12 m12\">\n\t\t\t<label>Current password</label>\n\t\t\t<input type=\"password\" [ngModel]=\"user.currentPassword\" #cp>\n\t\t</div>\n\t\t<div class=\"col s12 m12\">\n\t\t\t<label>New password</label>\n\t\t\t<input type=\"password\" [ngModel]=\"user.newPassword\" #np>\n\t\t</div>\n\t\t<div class=\"col s12 m12 center-align\">\n\t\t\t<button type=\"button\" class=\"btn\" (click)='updateUser(fn.value, pn.value, e.value, cp.value, np.value)' [disabled]='isDisabled'>Update Account</button>\n\t\t</div>\n\t\t\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/organiser/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("../../../../../src/app/components/organiser/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(profileService, router, http) {
        this.profileService = profileService;
        this.router = router;
        this.http = http;
        this.avatar = 'assets/img/avatar.jpg';
        this.user = {};
        this.isDisabled = false;
        this.getUser();
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.profileService.getUser().subscribe(function (data) {
            _this.user = data.organiser;
            if (data.status == true) {
                _this.avatar = 'https://image.devidentify.com/' + _this.user.email;
            }
            else {
                Materialize.toast("Something's not right", 1500, 'red white-text');
            }
        }, function (err) { return Materialize.toast("Something's not right", 1500, 'red white-text'); }, function () { return console.log(); });
    };
    ProfileComponent.prototype.updateUser = function (fn, pn, e, cp, np) {
        var _this = this;
        this.isDisabled = true;
        var userDetails = {
            fullname: fn,
            email: e,
            phone: pn,
            currentPassword: cp,
            newPassword: np
        };
        //console.log(userDetails)
        this.profileService.updateUser(userDetails).subscribe(function (data) {
            if (data.status == true) {
                Materialize.toast("User updated", 1500, 'green white-text');
                _this.isDisabled = false;
            }
            else {
                Materialize.toast("Error occured", 1500, 'red white-text');
                _this.isDisabled = false;
            }
        }, function (err) { return Materialize.toast("Something's not right", 1500, 'red white-text'); }, function () { return console.log(); });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/organiser/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/organiser/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/organiser/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = (function () {
    function ProfileService(_http) {
        this._http = _http;
        this.http = _http;
        this.token = localStorage.getItem('token');
    }
    ProfileService.prototype.getUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.http.get('https://gatepassng.herokuapp.com/api/v1/organiser', { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ProfileService.prototype.updateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.http.put('https://gatepassng.herokuapp.com/api/v1/organiser', user, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#registerBody{\r\n  height: 600px;\r\n  width: 100%;\r\n  padding-top: 65px;\r\n  -webkit-filter: contrast(100%); /* Safari 6.0 - 9.0 */\r\n  filter: contrast(100%);\r\n  z-index: -500;\r\n}\r\n\r\n\r\n.form{\r\n  background-color: #fff;\r\n  height: 470px;\r\n  margin: auto;\r\n  margin-top: 450px;\r\n  margin-bottom: 100px;\r\n  /*padding-top: 30px;*/\r\n  /*margin-right: 33%;*/\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.transparent{\r\n  background-color: rgba(64, 64, 64, 0.5) !important;\r\n  height: 300px;\r\n  color: #ffffff;\r\n}\r\n\r\n.transparent-btn{\r\n  background-color: rgba(255, 255, 255, 0.1) !important;\r\n  border: 1px solid #fff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.small{\r\n  display: none;\r\n}\r\n\r\n@media only screen and (max-width: 1050px) {\r\n  .registerBody{\r\n    height: inherit;\r\n    padding-top: 65px;\r\n  }\r\n\r\n  .form{\r\n    background-color: #fff;\r\n    height: 470px;\r\n    margin: auto;\r\n    margin-top: 450px;\r\n    margin-bottom: 100px;\r\n    /*margin-right: 33%;*/\r\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n  }\r\n\r\n  .transparent{\r\n    display: none;\r\n  }\r\n\r\n  .small{\r\n    display: block;\r\n  }\r\n\r\n}\r\n\r\n.col, .row{\r\n  margin: auto !important;\r\n  -webkit-box-align: center !important;\r\n      -ms-flex-align: center !important;\r\n          align-items: center !important;\r\n  text-align: center !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"registerBody\" id='registerBody' [ngStyle]=\"{'background-image': 'url(' + image + ')'}\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col m2 s1\"></div>\r\n    <div class=\"col m4 transparent\">\r\n      <div align='left'>\r\n        <h4>Already have an <br> account?</h4>\r\n        <a routerLink='/login'><button style=\"background-color: #25252E !important\" type=\"button\" name=\"button\" class=\"transparent-btn btn\">Login</button></a>\r\n        <p>Read the terms and conditions for this platform <br><a routerLink='/#'>here</a> </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"form col m4 s10 row\" align=\"center\">\r\n    \t<form class=\"row\" id=\"form\" (submit)=\"onRegisterSubmit()\" novalidate=\"\">\r\n    \t\t<h4>Register</h4>\r\n            <div class=\"input-field col s12\">\r\n              <input [(ngModel)]=\"fullname\"  placeholder=\"Fullname\" id=\"fullname\" type=\"text\" class=\"validate\" name=\"fullname\">\r\n            </div>\r\n            <div class=\"input-field col s12\">\r\n              <input [(ngModel)]=\"username\"  placeholder=\"Username\" id=\"username\" type=\"text\" class=\"validate\" name=\"username\">\r\n            </div>\r\n            <div class=\"input-field col s12\">\r\n              <input [(ngModel)]=\"phone\"  placeholder=\"Phone\" id=\"phone\" type=\"text\" class=\"validate\" name=\"phone\">\r\n            </div>\r\n            <div class=\"input-field col s12\">\r\n              <input [(ngModel)]=\"email\"  placeholder=\"E-mail\" id=\"email\" type=\"email\" class=\"validate\" name=\"email\">\r\n            </div>\r\n            <div class=\"input-field col s12\">\r\n              <input [(ngModel)]=\"password\"  placeholder='Password' id=\"password\" type=\"password\" class=\"validate\" name=\"password\">\r\n            </div>\r\n            <button type=\"submit\" name=\"button\" class=\"btn waves-effect waves-light\" [disabled]='isDisabled'>Register</button>\r\n            <div class=\"progress\" *ngIf='isDisabled'>\r\n                <div class=\"indeterminate\"></div>\r\n            </div>\r\n\r\n            <h5 class=\"small\">Already have an account? <a routerLink='/login'>Login</a></h5>\r\n    \t</form>\r\n    </div>\r\n    <div class=\"col m2 s1\"></div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validator_service__ = __webpack_require__("../../../../../src/app/services/validator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(_auth, _validateService, _router) {
        this._auth = _auth;
        this._validateService = _validateService;
        this._router = _router;
        this.image = 'assets/img/7.jpg';
        this.title = 'Register Page';
        this.responseStatus = [];
        this.isDisabled = false;
        this.location = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.isDisabled = true;
        var user = {
            fullname: this.fullname,
            username: this.username,
            phone: this.username,
            password: this.password,
            email: this.email
        };
        //console.log(user)
        if (!this._validateService.ValidateRegister(user)) {
            //Show flash or something
            console.log("err");
            return false;
        }
        //validate email
        if (!this._validateService.ValidateEmail(user.email)) {
            //Flash flash flash flash
            console.log("err");
            return false;
        }
        this._auth.registerUser(user).subscribe(function (data) {
            if (data.status == false) {
                Materialize.toast(data.message + 's', 3000, 'red white-text');
                _this.isDisabled = false;
            }
            else if (data.status == true) {
                Materialize.toast('Registration successful', 3000, 'green white-text');
                localStorage.setItem('token', data.token);
                //console.log(localStorage.setItem('token', data.token));
                _this._router.navigate(['/events']);
                _this.isDisabled = false;
            }
            else {
                _this._router.navigate(['/register']);
                _this.isDisabled = false;
            }
        }, function (err) { return Materialize.toast("Something's not right", 1500, 'red white-text'); }, function () { return console.log(); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_validator_service__["a" /* ValidatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validator_service__["a" /* ValidatorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
    }
    AuthService.prototype.registerUser = function (user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        return this._http.post('https://gatepassng.herokuapp.com/api/v1/organiser/register', user, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loginUser = function (user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        return this._http.post('https://gatepassng.herokuapp.com/api/v1/organiser/login', user, { headers: header })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._auth.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=authguard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/routeguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteGuard = (function () {
    function RouteGuard(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    RouteGuard.prototype.canActivate = function () {
        if (this._auth.loggedIn()) {
            this._router.navigate(['/events']);
        }
        return true;
    };
    return RouteGuard;
}());
RouteGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object])
], RouteGuard);

var _a, _b;
//# sourceMappingURL=routeguard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidatorService = (function () {
    function ValidatorService() {
    }
    ValidatorService.prototype.ValidateRegister = function (user) {
        if (user.fullname == undefined || user.email == undefined || user.password == undefined || user.phone == undefined || user.username == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidatorService.prototype.ValidateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidatorService;
}());
ValidatorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidatorService);

//# sourceMappingURL=validator.service.js.map

/***/ }),

/***/ "../../../../../src/assets/img/landing-background.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "landing-background.f192bcbdb03120631a78.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map