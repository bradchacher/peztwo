function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <flash-messages></flash-messages>\n</div>\n<app-home></app-home>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFormFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>form works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <!--HEADER SECTION-->\n  <header id=\"home-section\">\n    <div class=\"dark-overlay\">\n      <div class=\"home-inner\">\n        <div class=\"container\">\n          <div class=\"row\">\n\n            <div class=\"col-lg-12 col-md-8 col-sm-6 col-xs-4\">\n              <div class=\"form-wrapper\">\n                <div class=\"card\">\n                  <div class=\"container\">\n                    <form #formForm=\"ngForm\" (ngSubmit)=\"onSubmit(formForm)\">\n                    <div class=\"row\">\n                      <div class=\"col-lg-6 login-form\">\n\n                          <div class=\"pgone\">\n                          <h4 class=\"text-center mt-2 text-success\">SME Loan Form</h4>\n                          <div class=\"row\">\n                            <div class=\"col col-lg-6 col-md-6 col-sm-4\">\n                              <div class=\"form-group\">\n                                <label for=\"firstName\" class=\"text-success\">First Name</label>\n                                <input\n                                type=\"text\"\n                                class=\"form-control\"\n                                name=\"firstName\"\n                                #formFirstName=\"ngModel\"\n                                placeholder=\"John\"\n                                [ngClass]=\"{'is-invalid' : formFirstName.errors && formFirstName.touched}\"\n                                [(ngModel)]=\"form.firstName\"\n                                minlength=\"2\"\n                                required\n                                >\n                                <div [hidden]=\"!formFirstName.errors?.required\" class=\"invalid-feedback\">\n                                  First name required\n                                </div>\n                              </div>\n                            </div>\n\n                            <div class=\"col col-lg-6 col-md-6 col-sm-4\">\n                              <div class=\"form-group\">\n                                <label for=\"lastName\">Last Name</label>\n                                <input\n                                type=\"text\"\n                                class=\"form-control\"\n                                placeholder=\"Doe\"\n                                name=\"lastName\"\n                                #formLastName=\"ngModel\"\n                                [ngClass]=\"{'is-invalid' : formLastName?.errors && formLastName?.touched}\"\n                                [(ngModel)]=\"form.lastName\"\n                                required\n                                >\n                                <div [hidden]=\"!formLastName.errors?.required\" class=\"invalid-feedback\">\n                                  Last name required\n                                </div>\n\n                              </div>\n                           </div>\n                          </div>\n                         <div class=\"form-group\">\n                           <label for=\"id_number\" class=\"text-success\">ID Number</label>\n                           <input\n                           type=\"text\"\n                           class=\"form-control\"\n                           placeholder=\"12345677\"\n                           name=\"nationalId\"\n                           #formNationalId=\"ngModel\"\n                           [ngClass]=\"{'is-invalid' : formNationalId?.errors && formNationalId?.touched}\"\n                           [(ngModel)]=\"form.nationalId\"\n                           required\n                           >\n                           <div [hidden]=\"!formNationalId.errors?.required\" class=\"invalid-feedback\">\n                            ID required\n                          </div>\n                         </div>\n\n\n                         <div class=\"form-group\">\n                           <label for=\"email\" class=\"text-success\">Email:</label>\n                           <input\n                           type=\"email\"\n                           class=\"form-control\"\n                           placeholder=\"abc@gmail.com\"\n                           name=\"email\"\n                           #formEmail=\"ngModel\"\n                           [ngClass]=\"{'is-invalid' : formEmail.errors && formEmail.touched}\"\n                           [(ngModel)]=\"form.email\"\n                           pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n                            required\n                            >\n                            <div [hidden]=\"!formEmail.errors?.required\" class=\"invalid-feedback\">\n                              Email required\n                            </div>\n\n                            <div [hidden]=\"!formEmail.errors?.pattern\" class=\"invalid-feedback\">\n                                Email is not valid\n                              </div>\n                         </div>\n\n\n                          </div>\n\n                      </div>\n                      <div class=\"col-lg-6 bg-success right-div pt-4 text-white\">\n\n                        <div id=\"pgthree\" >\n                          <div class=\"row\">\n                            <div class=\"col col-lg-6 col-md-6 col-sm-4\">\n                              <div class=\"form-group\">\n                                <label for=\"phone\" class=\"text-white\">Phone Number:</label>\n                                <input\n                                type=\"text\"\n                                class=\"form-control\"\n                                name=\"phone\"\n                                placeholder=\"0799999999\"\n                                #formPhone=\"ngModel\"\n                                [ngClass]=\"{'is-invalid' : formPhone.errors && formPhone.touched}\"\n                                [(ngModel)]=\"form.phone\"\n                                minlength=\"10\"\n                                required\n                                >\n                                <div [hidden]=\"!formPhone.errors?.required\" class=\"invalid-feedback\">\n                                  Phone is required\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"col col-lg-6 col-md-6 col-sm-4\">\n                              <div class=\"form-group\">\n                                <label for=\"kra_pin\" class=\"text-white\">KRA Pin:</label>\n                                <input\n                                type=\"text\"\n                                class=\"form-control\"\n                                placeholder=\"A00565GYUYGJH\"\n                                name=\"kraPin\"\n                                #formKRA=\"ngModel\"\n                                [ngClass]=\"{'is-invalid' : formKRA?.errors && formKRA?.touched}\"\n                                [(ngModel)]=\"form.kraPin\"\n                                required\n                                >\n                                <div [hidden]=\"!formKRA.errors?.required\" class=\"invalid-feedback\">\n                                  KRA pin required\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n\n                         <div class=\"row\">\n                          <div class=\"col col-lg-6 col-md-6 col-xs-2\">\n                            <div class=\"form-group\">\n                              <label for=\"company_name\" class=\"text-white\">Company Name</label>\n                              <input\n                              type=\"text\"\n                              class=\"form-control\"\n                              placeholder=\"ABC Limited\"\n                              name=\"companyName\"\n                              #formCname=\"ngModel\"\n                              [ngClass]=\"{'is-invalid' : formCname?.errors && formCname?.touched}\"\n                              [(ngModel)]=\"form.companyName\"\n                              required\n                            >\n                            <div [hidden]=\"!formCname.errors?.required\" class=\"invalid-feedback\">\n                              Company name required\n                            </div>\n\n                            </div>\n                          </div>\n\n                           <div class=\"col col-lg-6 col-md-6 col-xs-2\">\n                            <div class=\"form-group\">\n                              <label for=\"location\" class=\"text-white\">Location</label>\n                              <input\n                              type=\"text\"\n                              class=\"form-control\"\n                              placeholder=\"Nairobi\"\n                              name=\"companyLocation\"\n                              #formClocation=\"ngModel\"\n                              [ngClass]=\"{'is-invalid' : formClocation?.errors && formClocation?.touched}\"\n                              [(ngModel)]=\"form.companyLocation\"\n                              required\n                              >\n                              <div [hidden]=\"!formClocation.errors?.required\" class=\"invalid-feedback\">\n                                Location required\n                              </div>\n                            </div>\n                           </div>\n\n\n                         </div>\n\n                         <div class=\"form-group\">\n                           <label for=\"revenue\" class=\"text-white\">Revenue:</label>\n                           <input\n                           type=\"text\"\n                           class=\"form-control\"\n                           placeholder=\"sh 845786 p/a\"\n                           name=\"companyRevenue\"\n                           #formCrevenue=\"ngModel\"\n                           [ngClass]=\"{'is-invalid' : formCrevenue?.errors && formCrevenue?.touched}\"\n                           [(ngModel)]=\"form.companyRevenue\"\n                           required\n                           >\n                           <div [hidden]=\"!formCrevenue.errors?.required\" class=\"invalid-feedback\">\n                            Revenue required\n                          </div>\n                         </div>\n\n                          <input type=\"submit\" value=\"SUBMIT\" class=\"btn btn-success btn-block\">\n\n                        </div>\n\n\n                      </div>\n\n                     <!-- n -->\n                    </div>\n                  </form>\n\n\n\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n        </div>\n\n\n      </div>\n    </div>\n  </header>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'pezeshatwo';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_form_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/form/form.component */
    "./src/app/components/form/form.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_form_form_component__WEBPACK_IMPORTED_MODULE_10__["FormComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase, 'pezesha-form'), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesModule"].forRoot()],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/form/form.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/form/form.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFormFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/form/form.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/form/form.component.ts ***!
    \***************************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppComponentsFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FormComponent =
    /*#__PURE__*/
    function () {
      function FormComponent() {
        _classCallCheck(this, FormComponent);
      }

      _createClass(FormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormComponent;
    }();

    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form.component.scss */
      "./src/app/components/form/form.component.scss")).default]
    })], FormComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/home/home.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\n.alert p {\n  margin: 0;\n  padding: 0;\n}\n#home-section {\n  background: url('home.jpg') no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  min-height: 820px;\n  color: #fff;\n}\n#home-section .dark-overlay {\n  height: 95vh;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100%;\n}\n#home-section .home-inner {\n  padding-top: 150px;\n}\n#home-section .card-form {\n  opacity: 0.8;\n}\n#home-section .fa {\n  color: #008ed6;\n  background: #fff;\n  padding: 4px;\n  border-radius: 5px;\n  font-size: 30px;\n}\n#home-section .form-wrapper {\n  margin-top: auto;\n  margin-left: auto;\n  height: auto;\n}\n#home-section .card {\n  height: 400px;\n}\n#home-section .login-form {\n  padding-top: 10px;\n}\n#home-section .btn {\n  border-radius: 30px;\n}\n#home-section .right-div {\n  height: 400px;\n}\n#home-section .register-btn {\n  border: 1px solid #fff;\n}\n#home-section .alert p {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvcmVicmEvRGVza3RvcC9leHAvcGV6dHdvL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBTUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0pGO0FEUUE7RUFDRSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNMRjtBRFFFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBbkJXO0VBb0JYLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNOSjtBRFNFO0VBQ0Usa0JBQUE7QUNQSjtBRFVFO0VBQ0UsWUFBQTtBQ1JKO0FEV0U7RUFDRSxjQXJDVztFQXNDWCxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBdkNPO0FDOEJYO0FEWUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1ZKO0FEWUU7RUFDRSxhQUFBO0FDVko7QURZRTtFQUNFLGlCQUFBO0FDVko7QURZRTtFQUNFLG1CQUFBO0FDVko7QURZRTtFQUNFLGFBQUE7QUNWSjtBRFlFO0VBQ0Usc0JBQUE7QUNWSjtBRFlFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuJGJnLWNvbG9yOiMzMzM7XG4kZm9udC1jb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XG4kcHJpbWFyeS1jb2xvcjojMDA4ZWQ2O1xuJGRhcmstb3ZlcmxheTogcmdiYSgwLDAsMCwwLjcpO1xuJGljb24tc2l6ZTozMHB4O1xuLmFsZXJ0IHAge1xuICBtYXJnaW46MDtcbiAgcGFkZGluZzogMDtcbn1cblxuXG4jaG9tZS1zZWN0aW9ue1xuICBiYWNrZ3JvdW5kOnVybCgnLi4vLi4vLi4vaW1nL2hvbWUuanBnJykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtcbiAgbWluLWhlaWdodDo4MjBweDtcbiAgY29sb3I6ICNmZmY7XG5cblxuICAuZGFyay1vdmVybGF5e1xuICAgIGhlaWdodDogOTV2aDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6JGRhcmstb3ZlcmxheTtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmhvbWUtaW5uZXJ7XG4gICAgcGFkZGluZy10b3A6MTUwcHg7XG4gIH1cblxuICAuY2FyZC1mb3Jte1xuICAgIG9wYWNpdHk6MC44O1xuICB9XG5cbiAgLmZhe1xuICAgIGNvbG9yOiRwcmltYXJ5LWNvbG9yO1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICBwYWRkaW5nOjRweDtcbiAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICBmb250LXNpemU6JGljb24tc2l6ZTtcbiAgfVxuXG4gIC5mb3JtLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5jYXJkIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG4gIC5sb2dpbi1mb3Jte1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG4gIC5idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cbiAgLnJpZ2h0LWRpdntcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG4gIC5yZWdpc3Rlci1idG57XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgfVxuICAuYWxlcnQgcCB7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLmFsZXJ0IHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNob21lLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9pbWcvaG9tZS5qcGdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBtaW4taGVpZ2h0OiA4MjBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4jaG9tZS1zZWN0aW9uIC5kYXJrLW92ZXJsYXkge1xuICBoZWlnaHQ6IDk1dmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuI2hvbWUtc2VjdGlvbiAuaG9tZS1pbm5lciB7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbn1cbiNob21lLXNlY3Rpb24gLmNhcmQtZm9ybSB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbiNob21lLXNlY3Rpb24gLmZhIHtcbiAgY29sb3I6ICMwMDhlZDY7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4jaG9tZS1zZWN0aW9uIC5mb3JtLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuI2hvbWUtc2VjdGlvbiAuY2FyZCB7XG4gIGhlaWdodDogNDAwcHg7XG59XG4jaG9tZS1zZWN0aW9uIC5sb2dpbi1mb3JtIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4jaG9tZS1zZWN0aW9uIC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuI2hvbWUtc2VjdGlvbiAucmlnaHQtZGl2IHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbiNob21lLXNlY3Rpb24gLnJlZ2lzdGVyLWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG4jaG9tZS1zZWN0aW9uIC5hbGVydCBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/home.service */
    "./src/app/services/home.service.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      //isWorking: boolean = false;
      function HomeComponent(homeService, flashMessage, router) {
        _classCallCheck(this, HomeComponent);

        this.homeService = homeService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.form = {
          firstName: '',
          lastName: '',
          email: '',
          nationalId: '',
          phone: '',
          kraPin: '',
          companyName: '',
          companyLocation: '',
          companyRevenue: 0
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.homeService.getForms().subscribe(function (forms) {
            return console.log(forms);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(_ref) {
          var value = _ref.value,
              valid = _ref.valid;

          if (!valid) {
            this.flashMessage.show('Please Fill out the form correctly', {
              cssClass: 'alert-danger',
              timeout: 4000
            });
          } else {
            //Add new client
            this.homeService.newClient(value); //Show message

            this.flashMessage.show('New Application Submitted', {
              cssClass: 'alert-success',
              timeout: 4000
            }); //redirect to form again

            this.router.navigate(['/']);
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]
      }, {
        type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/components/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/services/home.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/home.service.ts ***!
    \******************************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppServicesHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var HomeService =
    /*#__PURE__*/
    function () {
      function HomeService(afs) {
        _classCallCheck(this, HomeService);

        this.afs = afs;
        this.formsCollection = this.afs.collection('forms', function (ref) {
          return ref.orderBy('lastName', 'asc');
        });
      }

      _createClass(HomeService, [{
        key: "getForms",
        value: function getForms() {
          this.forms = this.formsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
              var data = action.payload.doc.data();
              data.id = action.payload.doc.id;
              return data;
            });
          }));
          return this.forms;
        }
      }, {
        key: "newClient",
        value: function newClient(form) {
          this.formsCollection.add(form);
        }
      }]);

      return HomeService;
    }();

    HomeService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HomeService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyCaY6TcurbBNV7YekMG4nwKHkIeuK8b6R4",
        authDomain: "pezesha-form.firebaseapp.com",
        databaseURL: "https://pezesha-form.firebaseio.com",
        projectId: "pezesha-form",
        storageBucket: "pezesha-form.appspot.com",
        messagingSenderId: "877839696774",
        appId: "1:877839696774:web:b1a1f87d7a6f7fd0126207",
        measurementId: "G-C5PMQ65MXE"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/corebra/Desktop/exp/peztwo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map