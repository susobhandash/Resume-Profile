"use strict";
(self["webpackChunksusobhan_profile"] = self["webpackChunksusobhan_profile"] || []).push([["main"],{

/***/ 305:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2587);
/* harmony import */ var _components_pages_about_me_page_about_me_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/about-me-page/about-me-page.component */ 1191);
/* harmony import */ var _components_pages_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/projects-page/projects-page.component */ 5955);
/* harmony import */ var _components_pages_skills_page_skills_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/skills-page/skills-page.component */ 2463);
/* harmony import */ var _components_pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/contact-page/contact-page.component */ 2054);
/* harmony import */ var _components_generic_toggle_theme_toggle_theme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/generic/toggle-theme/toggle-theme.component */ 6337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4590);








const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _components_pages_about_me_page_about_me_page_component__WEBPACK_IMPORTED_MODULE_0__.AboutMePageComponent
}, {
  path: 'projects',
  component: _components_pages_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsPageComponent
}, {
  path: 'skills',
  component: _components_pages_skills_page_skills_page_component__WEBPACK_IMPORTED_MODULE_2__.SkillsPageComponent
}, {
  path: 'contact',
  component: _components_pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_3__.ContactPageComponent
}, {
  path: 'theme',
  component: _components_generic_toggle_theme_toggle_theme_component__WEBPACK_IMPORTED_MODULE_4__.ToggleThemeComponent
}, {
  path: '**',
  redirectTo: 'home',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 4338:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4590);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-device-detector */ 7142);
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/global.service */ 1358);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 3141);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2587);
/* harmony import */ var _components_generic_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/generic/nav-bar/nav-bar.component */ 7574);







function AppComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Susobhan Dash");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Principal Engineer, UI ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "eProductivity Software");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "app-nav-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeIdxChange", function AppComponent_ng_container_1_Template_app_nav_bar_activeIdxChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.activeIdx = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx_r0.navBarItems)("orientation", "vertical")("activeIdx", ctx_r0.activeIdx);
  }
}
function AppComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14)(5, "app-nav-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeIdxChange", function AppComponent_ng_container_2_Template_app_nav_bar_activeIdxChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.activeIdx = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx_r1.navBarItems)("orientation", "horizontal")("activeIdx", ctx_r1.activeIdx);
  }
}
class AppComponent {
  onOrientationChange(event) {
    setTimeout(() => {
      let orientation = event.target.orientation === 90 ? 'landscape' : 'portrait';
      this.checkDeviceType(orientation);
    }, 250);
  }
  onResize(event) {
    setTimeout(() => {
      this.setHeight();
    }, 250);
  }
  constructor(deviceService, globalService) {
    this.deviceService = deviceService;
    this.globalService = globalService;
    this.title = 'Susobhan Dash Resume';
    this.name = 'Susobhan';
    this.navBarItems = [{
      label: 'About Me',
      icon: 'fas fa-user',
      link: '/home'
    }, {
      label: 'Projects',
      icon: 'fas fa-code-fork',
      link: '/projects'
    }, {
      label: 'Skills',
      icon: 'fas fa-list-check',
      link: '/skills'
    }, {
      label: 'Contact',
      icon: 'fas fa-phone',
      link: '/contact'
    }, {
      label: 'Theme',
      icon: 'fas fa-palette',
      link: '/theme'
    }];
    this.activeIdx = 0;
    this.deviceInfo = null;
    this.checkDeviceType(null);
  }
  checkDeviceType(orientation = null) {
    if (!orientation) {
      this.deviceInfo = this.deviceService.getDeviceInfo();
      this.globalService.deviceOrientation = this.deviceInfo.orientation;
      // remove this code for production
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isDevMode)()) {
        this.globalService.deviceType = this.globalService.deviceOrientation == 'portrait' ? 'mobile' : 'tablet';
      }
    } else {
      this.globalService.deviceOrientation = orientation;
    }
    setTimeout(() => {
      this.setHeight();
    });
    // const isMobile = this.deviceService.isMobile();
    // const isTablet = this.deviceService.isTablet();
    // const isDesktopDevice = this.deviceService.isDesktop();
  }

  setHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("orientationchange", function AppComponent_orientationchange_HostBindingHandler($event) {
          return ctx.onOrientationChange($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("resize", function AppComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    decls: 3,
    vars: 2,
    consts: [[1, "container", "p-md", "d-f"], [4, "ngIf"], [1, "page-content"], [1, "left-section", "p-md", "pt-lg", "pb-lg"], [1, "side-panel", "center"], [1, "profile-picture", "circle", "mb-md"], [1, "mb-sm"], [1, "fw-400", "mb-sm", "text-primary", "gothic"], ["href", "https://epssw.com", "target", "_blank"], [1, "mt-lg"], [3, "model", "orientation", "activeIdx", "activeIdxChange"], [1, "detail-panel", "pl-md"], [1, "page-content", "mobile-view"], [1, "o-auto", "w-100"], [1, "bottom-nav"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 16, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_ng_container_2_Template, 6, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalService.deviceOrientation === "landscape");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalService.deviceOrientation === "portrait");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _components_generic_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9827:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 3216);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3120);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 305);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 4338);
/* harmony import */ var _components_generic_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/generic/nav-bar/nav-bar.component */ 7574);
/* harmony import */ var _components_generic_expand_collapse_expand_collapse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/generic/expand-collapse/expand-collapse.component */ 3030);
/* harmony import */ var _components_generic_toggle_theme_toggle_theme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/generic/toggle-theme/toggle-theme.component */ 6337);
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/global.service */ 1358);
/* harmony import */ var _components_pages_about_me_page_about_me_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/about-me-page/about-me-page.component */ 1191);
/* harmony import */ var _components_pages_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/projects-page/projects-page.component */ 5955);
/* harmony import */ var _components_pages_skills_page_skills_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/skills-page/skills-page.component */ 2463);
/* harmony import */ var _components_pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/contact-page/contact-page.component */ 2054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4590);




// Generic Components



// Generic Services

// Pages





class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    providers: [_services_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_generic_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__.NavBarComponent, _components_generic_expand_collapse_expand_collapse_component__WEBPACK_IMPORTED_MODULE_3__.ExpandCollapseComponent, _components_pages_about_me_page_about_me_page_component__WEBPACK_IMPORTED_MODULE_6__.AboutMePageComponent, _components_pages_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_7__.ProjectsPageComponent, _components_pages_skills_page_skills_page_component__WEBPACK_IMPORTED_MODULE_8__.SkillsPageComponent, _components_pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__.ContactPageComponent, _components_generic_toggle_theme_toggle_theme_component__WEBPACK_IMPORTED_MODULE_4__.ToggleThemeComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 3030:
/*!*********************************************************************************!*\
  !*** ./src/app/components/generic/expand-collapse/expand-collapse.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpandCollapseComponent": () => (/* binding */ ExpandCollapseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4590);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 5992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3141);




const _c0 = ["collapsible"];
function ExpandCollapseComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.icon);
  }
}
const _c1 = function (a0) {
  return {
    rotate: a0
  };
};
function ExpandCollapseComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fas fa-chevron-down rotate-icon ", ctx_r1.styleClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r1.model));
  }
}
const _c2 = function (a0) {
  return {
    "pl-sm": a0
  };
};
function ExpandCollapseComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, !ctx_r2.showPlus));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.label, " ");
  }
}
const _c3 = function (a0, a1) {
  return {
    expanded: a0,
    collapsed: a1
  };
};
function ExpandCollapseComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("exapnd-collapse-icon ", ctx_r3.styleClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c3, ctx_r3.model, !ctx_r3.model));
  }
}
const _c4 = function (a0, a1) {
  return {
    "justify-between pr-s": a0,
    "b-b": a1
  };
};
const _c5 = function (a0) {
  return {
    collapsed: a0
  };
};
const _c6 = ["*"];
class ExpandCollapseComponent {
  set _model(md) {
    this.model = md ? md : false;
  }
  constructor(element) {
    this.element = element;
    this.label = '';
    this.styleClass = '';
    this.showPlus = false;
    this.icon = '';
    this.headerStyleClass = '';
    this.maxHeight = 300;
    this.model = true;
    this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  get grow() {
    return {
      value: this.model,
      params: {
        startHeight: this.startHeight
      }
    };
  }
  setStartHeight() {
    this.startHeight = !this.model && this.collapsible && this.collapsible.nativeElement ? this.collapsible.nativeElement.clientHeight : 0;
  }
  ngOnChanges() {
    this.setStartHeight();
  }
  change() {
    this.model = !this.model;
    this.modelChange.emit(this.model);
  }
  static #_ = this.ɵfac = function ExpandCollapseComponent_Factory(t) {
    return new (t || ExpandCollapseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExpandCollapseComponent,
    selectors: [["app-expand-collapse"]],
    viewQuery: function ExpandCollapseComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.collapsible = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function ExpandCollapseComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@grow", ctx.grow);
      }
    },
    inputs: {
      label: "label",
      styleClass: "styleClass",
      showPlus: "showPlus",
      icon: "icon",
      headerStyleClass: "headerStyleClass",
      maxHeight: "maxHeight",
      id: "id",
      _model: ["model", "_model"]
    },
    outputs: {
      modelChange: "modelChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c6,
    decls: 9,
    vars: 16,
    consts: [["href", "javascript:void[0]", 3, "ngClass", "click"], [1, "d-f", "a-c", "header"], ["class", "mr-sm", 3, "ngClass", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "collapsible", 3, "ngClass"], ["collapsible", ""], [1, "mr-sm", 3, "ngClass"], [3, "ngClass"]],
    template: function ExpandCollapseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpandCollapseComponent_Template_a_click_0_listener() {
          return ctx.change();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExpandCollapseComponent_span_2_Template, 1, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExpandCollapseComponent_span_3_Template, 1, 6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExpandCollapseComponent_span_4_Template, 2, 7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExpandCollapseComponent_ng_container_5_Template, 2, 7, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("expand-collapse-container d-f a-c secondary-color ", ctx.headerStyleClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c4, ctx.showPlus, ctx.model));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c5, !ctx.model))("@grow", !ctx.model ? "closed" : "opened");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".exapnd-collapse-icon[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(var(--baseFontSize) * 1.1);\n  width: calc(var(--baseFontSize) * 1.1);\n  color: var(--secondaryColor);\n  font-size: var(--baseFontSize);\n}\n.exapnd-collapse-icon[_ngcontent-%COMP%]::before, .exapnd-collapse-icon[_ngcontent-%COMP%]::after {\n  content: \"\\f068\";\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  transition: 0.3s linear 0s all;\n  font-family: \"Font Awesome 6 Free\";\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: var(--fa-display, inline-flex);\n  font-style: normal;\n  font-feature-settings: normal;\n  font-variant: normal;\n  line-height: var(--baseFontSize);\n  text-rendering: auto;\n  font-weight: 900;\n}\n.exapnd-collapse-icon.collapsed[_ngcontent-%COMP%]::after {\n  transform: rotate(-90deg);\n}\n\n.collapsible[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: calc(100% - 25px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmljL2V4cGFuZC1jb2xsYXBzZS9leHBhbmQtY29sbGFwc2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9Xb3JrJTIwU3VzdS9HSVQvUmVzdW1lLVByb2ZpbGUvc3JjL2FwcC9jb21wb25lbnRzL2dlbmVyaWMvZXhwYW5kLWNvbGxhcHNlL2V4cGFuZC1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7QUNMRjtBRE9FO0VBRUUsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNOSjtBRFNFO0VBQ0UseUJBQUE7QUNQSjs7QURXQTtFQUNFLGdCQUFBO0FDUkY7O0FEV0E7RUFDRSx3QkFBQTtBQ1JGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmV4cGFuZC1jb2xsYXBzZS1jb250YWluZXIge1xyXG4vLyAgICY6Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnlDb2xvcik7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4uZXhhcG5kLWNvbGxhcHNlLWljb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZUZvbnRTaXplKSAqIDEuMSk7XHJcbiAgd2lkdGg6IGNhbGModmFyKC0tYmFzZUZvbnRTaXplKSAqIDEuMSk7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcclxuICBmb250LXNpemU6IHZhcigtLWJhc2VGb250U2l6ZSk7XHJcblxyXG4gICY6OmJlZm9yZSxcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcZjA2OFwiO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGxpbmVhciAwcyBhbGw7XHJcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNiBGcmVlXCI7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICBkaXNwbGF5OiB2YXIoLS1mYS1kaXNwbGF5LCBpbmxpbmUtZmxleCk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcclxuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWJhc2VGb250U2l6ZSk7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG5cclxuICAmLmNvbGxhcHNlZDo6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5jb2xsYXBzaWJsZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xyXG59XHJcbiIsIi5leGFwbmQtY29sbGFwc2UtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2VGb250U2l6ZSkgKiAxLjEpO1xuICB3aWR0aDogY2FsYyh2YXIoLS1iYXNlRm9udFNpemUpICogMS4xKTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcbiAgZm9udC1zaXplOiB2YXIoLS1iYXNlRm9udFNpemUpO1xufVxuLmV4YXBuZC1jb2xsYXBzZS1pY29uOjpiZWZvcmUsIC5leGFwbmQtY29sbGFwc2UtaWNvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcZjA2OFwiO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGxpbmVhciAwcyBhbGw7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA2IEZyZWVcIjtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGRpc3BsYXk6IHZhcigtLWZhLWRpc3BsYXksIGlubGluZS1mbGV4KTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1iYXNlRm9udFNpemUpO1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5leGFwbmQtY29sbGFwc2UtaWNvbi5jb2xsYXBzZWQ6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cblxuLmNvbGxhcHNpYmxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlYWRlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('grow', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('closed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        height: '0',
        overflow: 'hidden',
        marginTop: 0
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('opened', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        height: '*',
        marginTop: '10px'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('closed <=> opened', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(0))])]
    }
  });
}

/***/ }),

/***/ 7574:
/*!*****************************************************************!*\
  !*** ./src/app/components/generic/nav-bar/nav-bar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3141);




function NavBarComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r3.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
  }
}
function NavBarComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarComponent_ng_container_0_div_2_Template, 4, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.model);
  }
}
function NavBarComponent_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r6.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.label);
  }
}
function NavBarComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarComponent_ng_container_1_div_2_Template, 4, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.model);
  }
}
class NavBarComponent {
  constructor(router) {
    this.router = router;
    this.orientation = 'vertical';
    this.activeIdx = 0;
    this.activeIdxChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  setActiveItem(item, idx) {
    if (item.link) {
      this.router.navigate([item.link]);
    }
    this.activeIdx = idx;
    this.activeIdxChange.emit(this.activeIdx);
  }
  static #_ = this.ɵfac = function NavBarComponent_Factory(t) {
    return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavBarComponent,
    selectors: [["app-nav-bar"]],
    inputs: {
      model: "model",
      orientation: "orientation",
      activeIdx: "activeIdx"
    },
    outputs: {
      activeIdxChange: "activeIdxChange"
    },
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [1, "br-20", "p-md", "pl-lg", "left", "nav-bar"], ["class", "nav-bar-item", "routerLinkActive", "active text-primary", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active text-primary", 1, "nav-bar-item", 3, "routerLink"], [3, "ngClass"], [1, "pl-sm"], [1, "d-f", "a-c", "p-sm", "justify-between", "nav-bar"], ["class", "nav-bar-item mob-nav-item", "routerLinkActive", "active text-primary", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active text-primary", 1, "nav-bar-item", "mob-nav-item", 3, "routerLink"]],
    template: function NavBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavBarComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_ng_container_1_Template, 3, 1, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orientation === "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orientation === "horizontal");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
    styles: [".nav-bar[_ngcontent-%COMP%] {\n  background: var(--primaryBg);\n  font-size: 14px;\n  color: var(--secondaryColor);\n}\n.nav-bar[_ngcontent-%COMP%]   .nav-bar-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  position: relative;\n  cursor: pointer;\n  transition: all linear 0.2s;\n}\n.nav-bar[_ngcontent-%COMP%]   .nav-bar-item.mob-nav-item[_ngcontent-%COMP%] {\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  font-size: 12px;\n  flex: 1 1 0;\n  color: var(--primaryColor);\n}\n.nav-bar[_ngcontent-%COMP%]   .nav-bar-item.mob-nav-item[_ngcontent-%COMP%]    > .pl-sm[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n.nav-bar[_ngcontent-%COMP%]   .nav-bar-item.mob-nav-item.active[_ngcontent-%COMP%] {\n  background-color: var(--primaryColor);\n  color: var(--primaryBg);\n  padding: 5px;\n  border-radius: 5px;\n}\n.nav-bar[_ngcontent-%COMP%]   .nav-bar-item.mob-nav-item.active[_ngcontent-%COMP%]::before {\n  content: none;\n}\n.nav-bar[_ngcontent-%COMP%]   .nav-bar-item[_ngcontent-%COMP%]:not(.mob-nav-item) {\n  font-size: 16px;\n}\n.nav-bar[_ngcontent-%COMP%]   .nav-bar-item[_ngcontent-%COMP%]:hover {\n  color: var(--primaryColor);\n}\n.nav-bar[_ngcontent-%COMP%]   .nav-bar-item[_ngcontent-%COMP%]    > .fas[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n}\n.nav-bar[_ngcontent-%COMP%]   .nav-bar-item.active[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.nav-bar[_ngcontent-%COMP%]   .nav-bar-item.active[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 20px;\n  top: 10px;\n  width: 4px;\n  left: calc(-2em + 4px);\n  border-radius: 2px;\n  background-color: var(--primaryColor);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmljL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL1dvcmslMjBTdXN1L0dJVC9SZXN1bWUtUHJvZmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvZ2VuZXJpYy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0RGO0FER0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNESjtBREdJO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ0ROO0FER007RUFDRSxpQkFBQTtBQ0RSO0FESU07RUFDRSxxQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFRTVCSixrQkY2QmtDO0FDRnRDO0FESVE7RUFDRSxhQUFBO0FDRlY7QURPSTtFQUNFLGVBQUE7QUNMTjtBRFFJO0VBQ0UsMEJBQUE7QUNOTjtBRFNJO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDUE47QURVSTtFQUNFLGdCQUFBO0FDUk47QURVTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFRTVESixrQkY2RGtDO0VBQzlCLHFDQUFBO0FDUlIiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvbWl4aW5zLnNjc3NcIjtcclxuXHJcbi5uYXYtYmFyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5QmcpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xyXG5cclxuICAubmF2LWJhci1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjJzO1xyXG5cclxuICAgICYubW9iLW5hdi1pdGVtIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmbGV4OiAxIDEgMDtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XHJcblxyXG4gICAgICA+IC5wbC1zbSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5QmcpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuYm9yZGVyLXJhZGl1cyg1cHgpO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgubW9iLW5hdi1pdGVtKSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgPiAuZmFzIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICBsZWZ0OiBjYWxjKC0yZW0gKyA0cHgpO1xyXG4gICAgICAgIEBpbmNsdWRlIG1peGlucy5ib3JkZXItcmFkaXVzKDJweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubmF2LWJhciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnlCZyk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcbn1cbi5uYXYtYmFyIC5uYXYtYmFyLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMnM7XG59XG4ubmF2LWJhciAubmF2LWJhci1pdGVtLm1vYi1uYXYtaXRlbSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxleDogMSAxIDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xufVxuLm5hdi1iYXIgLm5hdi1iYXItaXRlbS5tb2ItbmF2LWl0ZW0gPiAucGwtc20ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi5uYXYtYmFyIC5uYXYtYmFyLWl0ZW0ubW9iLW5hdi1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5QmcpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5uYXYtYmFyIC5uYXYtYmFyLWl0ZW0ubW9iLW5hdi1pdGVtLmFjdGl2ZTo6YmVmb3JlIHtcbiAgY29udGVudDogbm9uZTtcbn1cbi5uYXYtYmFyIC5uYXYtYmFyLWl0ZW06bm90KC5tb2ItbmF2LWl0ZW0pIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm5hdi1iYXIgLm5hdi1iYXItaXRlbTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xufVxuLm5hdi1iYXIgLm5hdi1iYXItaXRlbSA+IC5mYXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xufVxuLm5hdi1iYXIgLm5hdi1iYXItaXRlbS5hY3RpdmUge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLm5hdi1iYXIgLm5hdi1iYXItaXRlbS5hY3RpdmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjBweDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogNHB4O1xuICBsZWZ0OiBjYWxjKC0yZW0gKyA0cHgpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XG59IiwiLy8gTWl4aW5zXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6337:
/*!***************************************************************************!*\
  !*** ./src/app/components/generic/toggle-theme/toggle-theme.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleThemeComponent": () => (/* binding */ ToggleThemeComponent)
/* harmony export */ });
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/global.service */ 1358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3141);




const _c0 = function (a0) {
  return {
    active: a0
  };
};
function ToggleThemeComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToggleThemeComponent_span_7_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const mode_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r3.gs.activeThemeMode = mode_r2;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.themeModeToggled());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mode_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, mode_r2.value === ctx_r0.gs.activeThemeMode.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mode_r2.text);
  }
}
function ToggleThemeComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToggleThemeComponent_span_12_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const theme_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r6.gs.activeTheme = theme_r5;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.themeChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const theme_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, theme_r5.value === ctx_r1.gs.activeTheme.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](theme_r5.text);
  }
}
class ToggleThemeComponent {
  constructor(gs) {
    this.gs = gs;
    this.themeOptions = [{
      text: 'Blue',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeOptions.Blue
    }, {
      text: 'Dark Blue',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeOptions.DarkBlue
    }, {
      text: 'Indigo',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeOptions.Indigo
    }, {
      text: 'Aqua',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeOptions.Aqua
    }, {
      text: 'Green',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeOptions.Green
    }, {
      text: 'Dark Green',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeOptions.DarkGreen
    }, {
      text: 'Teal',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeOptions.Teal
    }, {
      text: 'Violet',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeOptions.Violet
    }, {
      text: 'Purple',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeOptions.Purple
    }, {
      text: 'Pink Red',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeOptions.PinkRed
    }, {
      text: 'Orange',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeOptions.Orange
    }, {
      text: 'Red',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeOptions.Red
    }, {
      text: 'Yellow Brown',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeOptions.YellowBrown
    }, {
      text: 'Brown',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeOptions.Brown
    }];
    this.themeModes = [{
      text: 'Light',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeModes.Light
    }, {
      text: 'Dark',
      value: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.ThemeModes.Dark
    }];
    this.gs.activeTheme = this.gs.activeTheme ? this.gs.activeTheme : this.themeOptions[11];
    this.gs.activeThemeMode = this.gs.activeThemeMode ? this.gs.activeThemeMode : this.themeModes[0];
  }
  themeChanged() {
    document.body.className = '';
    const className = this.gs.activeTheme.value + ' ' + this.gs.activeThemeMode.value;
    document.querySelector('body').className = className;
  }
  themeModeToggled() {
    document.body.className = '';
    const className = this.gs.activeTheme.value + ' ' + this.gs.activeThemeMode.value;
    document.querySelector('body').className = className;
  }
  static #_ = this.ɵfac = function ToggleThemeComponent_Factory(t) {
    return new (t || ToggleThemeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ToggleThemeComponent,
    selectors: [["app-toggle-theme"]],
    decls: 13,
    vars: 2,
    consts: [[1, "text-primary", "mb-sm"], [1, "scroll-section"], [1, "card", "bg-primary", "p-md", "mb-md"], [1, "mb-md"], [1, "d-i-b"], ["class", "tag c-p", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "card", "bg-primary", "p-md"], [1, "tag", "c-p", 3, "ngClass", "click"]],
    template: function ToggleThemeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Theme Modes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ToggleThemeComponent_span_7_Template, 2, 4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Theme Colors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ToggleThemeComponent_span_12_Template, 2, 4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.themeModes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.themeOptions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1191:
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/about-me-page/about-me-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutMePageComponent": () => (/* binding */ AboutMePageComponent)
/* harmony export */ });
/* harmony import */ var _assets_data_aboutMe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/data/aboutMe */ 5761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4590);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global.service */ 1358);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 3141);
/* harmony import */ var _generic_expand_collapse_expand_collapse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generic/expand-collapse/expand-collapse.component */ 3030);






const _c0 = function (a0) {
  return {
    "mt-0": a0
  };
};
function AboutMePageComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const idx_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, idx_r3 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2, " ");
  }
}
function AboutMePageComponent_div_9_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 16);
  }
  if (rf & 2) {
    const exp_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/", exp_r4.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
const _c1 = function (a0, a1) {
  return {
    "fd-col": a0,
    "justify-between a-c": a1
  };
};
function AboutMePageComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AboutMePageComponent_div_9_img_3_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const exp_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c1, ctx_r1.globalService.deviceOrientation === "portrait", ctx_r1.globalService.deviceOrientation === "landscape"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", exp_r4.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", exp_r4.companyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](exp_r4.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Position: ", exp_r4.position, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Skills: ", exp_r4.skills, "");
  }
}
class AboutMePageComponent {
  constructor(globalService) {
    this.globalService = globalService;
    this.aboutMe = _assets_data_aboutMe__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.experienceDetail = _assets_data_aboutMe__WEBPACK_IMPORTED_MODULE_0__.experienceDetail;
    this.aboutMeExpanded = true;
    this.experienceExpanded = false;
  }
  static #_ = this.ɵfac = function AboutMePageComponent_Factory(t) {
    return new (t || AboutMePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__.GlobalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AboutMePageComponent,
    selectors: [["app-about-me-page"]],
    decls: 10,
    vars: 10,
    consts: [[1, "text-primary", "mb-sm"], [1, "scroll-section"], [1, "ta-justify", "p-sm", "panel-enclosure", "mb-md"], [1, "d-block", "w-100", 3, "model", "showPlus", "headerStyleClass", "label", "modelChange"], ["class", "text-md mb-sm p-sm", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-sm"], ["class", "card p-md bg-primary mb-md", 4, "ngFor", "ngForOf"], [1, "text-md", "mb-sm", "p-sm", 3, "ngClass"], [1, "card", "p-md", "bg-primary", "mb-md"], [1, "d-f", "b-b-lt", "mb-sm", "pb-sm", 3, "ngClass"], [1, "d-f", "a-c"], ["class", "circle", 3, "src", 4, "ngIf"], [1, "pl-sm", "fw-500", "text-primary", "text-lg"], [1, "right", "fw-300"], [1, "mb-sm", "text-md", "fw-400"], [1, "mb-sm", "text-sm"], [1, "circle", 3, "src"]],
    template: function AboutMePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "app-expand-collapse", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("modelChange", function AboutMePageComponent_Template_app_expand_collapse_modelChange_4_listener($event) {
          return ctx.aboutMeExpanded = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AboutMePageComponent_p_5_Template, 2, 4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2)(7, "app-expand-collapse", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("modelChange", function AboutMePageComponent_Template_app_expand_collapse_modelChange_7_listener($event) {
          return ctx.experienceExpanded = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AboutMePageComponent_div_9_Template, 12, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx.aboutMeExpanded)("showPlus", true)("headerStyleClass", "project-sticky-header text-primary")("label", "Me in few lines");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.aboutMe);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx.experienceExpanded)("showPlus", true)("headerStyleClass", "project-sticky-header text-primary")("label", "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.experienceDetail);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _generic_expand_collapse_expand_collapse_component__WEBPACK_IMPORTED_MODULE_2__.ExpandCollapseComponent],
    styles: [".circle[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC1tZS1wYWdlL2Fib3V0LW1lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9Xb3JrJTIwU3VzdS9HSVQvUmVzdW1lLVByb2ZpbGUvc3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2Fib3V0LW1lLXBhZ2UvYWJvdXQtbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xlIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59IiwiLmNpcmNsZSB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2054:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/contact-page/contact-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageComponent": () => (/* binding */ ContactPageComponent)
/* harmony export */ });
/* harmony import */ var _assets_data_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/data/contact */ 9723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4590);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global.service */ 1358);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3141);




function ContactPageComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Susobhan Dash");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Principal Engineer, UI");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 9)(8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "eProductivity Software");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function ContactPageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r1.contactDetails == null ? null : ctx_r1.contactDetails.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.contactDetails == null ? null : ctx_r1.contactDetails.email);
  }
}
function ContactPageComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.contactDetails == null ? null : ctx_r2.contactDetails.phone);
  }
}
function ContactPageComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx_r3.contactDetails == null ? null : ctx_r3.contactDetails.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.contactDetails == null ? null : ctx_r3.contactDetails.twitter);
  }
}
function ContactPageComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx_r4.contactDetails == null ? null : ctx_r4.contactDetails.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.contactDetails == null ? null : ctx_r4.contactDetails.facebook);
  }
}
function ContactPageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx_r5.contactDetails == null ? null : ctx_r5.contactDetails.github, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.contactDetails == null ? null : ctx_r5.contactDetails.github);
  }
}
function ContactPageComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx_r6.contactDetails == null ? null : ctx_r6.contactDetails.bitbucket, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.contactDetails == null ? null : ctx_r6.contactDetails.bitbucket);
  }
}
function ContactPageComponent_div_10_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 29);
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "url(../../../../assets/images/" + item_r9.image + ")");
  }
}
function ContactPageComponent_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ContactPageComponent_div_10_ng_container_1_div_8_Template, 1, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", item_r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r9.image);
  }
}
function ContactPageComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactPageComponent_div_10_ng_container_1_Template, 9, 4, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.contactDetails.others);
  }
}
class ContactPageComponent {
  constructor(globalService) {
    this.globalService = globalService;
    this.contactDetails = _assets_data_contact__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
  static #_ = this.ɵfac = function ContactPageComponent_Factory(t) {
    return new (t || ContactPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_service__WEBPACK_IMPORTED_MODULE_1__.GlobalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ContactPageComponent,
    selectors: [["app-contact-page"]],
    decls: 11,
    vars: 8,
    consts: [[1, "text-primary", "mb-sm"], [1, "scroll-section"], [4, "ngIf"], ["class", "card p-md bg-primary mb-sm", 4, "ngIf"], ["class", "card p-md bg-primary mb-md", 4, "ngIf"], [1, "mb-md", "center", "pb-md", "b-b-lt"], [1, "profile-picture", "no-ov", "circle", "mb-md"], [1, "mb-sm", "poppins"], [1, "fw-500", "mb-sm", "text-primary", "gothic"], [1, "fw-400", "mb-sm", "text-primary", "gothic"], ["href", "https://epssw.com", "target", "_blank"], [1, "card", "p-md", "bg-primary", "mb-sm"], [1, "d-f", "a-c"], [1, "fa-solid", "fa-at", "text-primary"], [1, "pl-sm", 3, "href"], [1, "fa-solid", "fa-phone", "text-primary"], [1, "pl-sm"], [1, "fa-brands", "fa-twitter", "text-primary"], ["target", "_blank", 1, "pl-sm"], [1, "fa-brands", "fa-facebook", "text-primary"], [1, "fa-brands", "fa-github", "text-primary"], [1, "fa-brands", "fa-bitbucket", "text-primary"], [1, "card", "p-md", "bg-primary", "mb-md"], [4, "ngFor", "ngForOf"], [1, "card", "border-lt", "mb-md", "p-md", "d-f", "a-c", "justify-between"], [1, "d-b", "w-100"], [1, "mb-sm", "text-md"], ["target", "_blank"], ["class", "card preview border-lt", 3, "background-image", 4, "ngIf"], [1, "card", "preview", "border-lt"]],
    template: function ContactPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContactPageComponent_ng_container_3_Template, 10, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ContactPageComponent_div_4_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ContactPageComponent_div_5_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ContactPageComponent_div_6_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ContactPageComponent_div_7_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ContactPageComponent_div_8_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ContactPageComponent_div_9_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ContactPageComponent_div_10_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalService.deviceOrientation === "portrait");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactDetails == null ? null : ctx.contactDetails.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactDetails == null ? null : ctx.contactDetails.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactDetails == null ? null : ctx.contactDetails.twitter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactDetails == null ? null : ctx.contactDetails.facebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactDetails == null ? null : ctx.contactDetails.github);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactDetails == null ? null : ctx.contactDetails.bitbucket);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactDetails == null ? null : ctx.contactDetails.others);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    styles: [".preview[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0LXBhZ2UvY29udGFjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vV29yayUyMFN1c3UvR0lUL1Jlc3VtZS1Qcm9maWxlL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0LXBhZ2UvY29udGFjdC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbIi5wcmV2aWV3IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn0iLCIucHJldmlldyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5955:
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/projects-page/projects-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsPageComponent": () => (/* binding */ ProjectsPageComponent)
/* harmony export */ });
/* harmony import */ var _assets_data_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/data/projects */ 8124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3141);
/* harmony import */ var _generic_expand_collapse_expand_collapse_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generic/expand-collapse/expand-collapse.component */ 3030);




function ProjectsPageComponent_div_3_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Duration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.duration);
  }
}
function ProjectsPageComponent_div_3_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tech_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", tech_r7, ", ");
  }
}
function ProjectsPageComponent_div_3_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 12);
  }
  if (rf & 2) {
    const detail_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", detail_r8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function ProjectsPageComponent_div_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "a", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", item_r1.preview.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", item_r1.preview.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/", item_r1.preview.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "app-expand-collapse", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("modelChange", function ProjectsPageComponent_div_3_Template_app_expand_collapse_modelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const item_r1 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r1.expanded = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 5)(3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProjectsPageComponent_div_3_p_6_Template, 5, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 5)(8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Technology:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProjectsPageComponent_div_3_span_10_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 5)(12, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Responsibility:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProjectsPageComponent_div_3_li_16_Template, 1, 1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProjectsPageComponent_div_3_div_17_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", item_r1.expanded)("showPlus", true)("headerStyleClass", "project-sticky-header text-primary")("icon", item_r1.icon)("label", item_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.technology);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r1.responsibilty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.detail);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.preview);
  }
}
class ProjectsPageComponent {
  constructor() {
    this.projects = _assets_data_projects__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
  static #_ = this.ɵfac = function ProjectsPageComponent_Factory(t) {
    return new (t || ProjectsPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ProjectsPageComponent,
    selectors: [["app-projects-page"]],
    decls: 4,
    vars: 1,
    consts: [[1, "text-primary", "mb-sm"], [1, "scroll-section"], ["class", "ta-justify p-sm panel-enclosure mb-md", 4, "ngFor", "ngForOf"], [1, "ta-justify", "p-sm", "panel-enclosure", "mb-md"], [1, "d-block", "w-100", 3, "model", "showPlus", "headerStyleClass", "icon", "label", "modelChange"], [1, "mt-sm", "fw-200", "p-sm"], [1, "fw-400", "pr-sm"], ["class", "mt-sm fw-200 p-sm", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ml-0"], [3, "innerHTML", 4, "ngFor", "ngForOf"], ["class", "project-preview", 4, "ngIf"], [3, "innerHTML"], [1, "project-preview"], ["target", "_blank"], [1, "card", 3, "ngClass"], [3, "src"]],
    template: function ProjectsPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProjectsPageComponent_div_3_Template, 18, 11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projects);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _generic_expand_collapse_expand_collapse_component__WEBPACK_IMPORTED_MODULE_1__.ExpandCollapseComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2463:
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/skills-page/skills-page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsPageComponent": () => (/* binding */ SkillsPageComponent)
/* harmony export */ });
/* harmony import */ var _assets_data_skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/data/skills */ 2940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3141);
/* harmony import */ var _generic_expand_collapse_expand_collapse_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generic/expand-collapse/expand-collapse.component */ 3030);






function SkillsPageComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10)(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 12)(4, "div", 13)(5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13)(8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", skill_r3.proficiency + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", skill_r3.proficiency / 10, "/10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", skill_r3.experience / 6.5 * 100 + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", skill_r3.experience, " years");
  }
}
function SkillsPageComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10)(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 12)(4, "div", 13)(5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13)(8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", skill_r4.proficiency + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", skill_r4.proficiency / 10, "/10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", skill_r4.experience / 6.5 * 100 + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", skill_r4.experience, " years");
  }
}
function SkillsPageComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r5);
  }
}
class SkillsPageComponent {
  constructor() {
    this.techSkills = _assets_data_skills__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.libSkills = _assets_data_skills__WEBPACK_IMPORTED_MODULE_0__.libSkills;
    this.softSkills = _assets_data_skills__WEBPACK_IMPORTED_MODULE_0__.softSkills;
    this.programmingExpanded = true;
    this.libraryExpanded = true;
    this.softSkillsExpanded = true;
  }
  static #_ = this.ɵfac = function SkillsPageComponent_Factory(t) {
    return new (t || SkillsPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SkillsPageComponent,
    selectors: [["app-skills-page"]],
    decls: 15,
    vars: 18,
    consts: [[1, "text-primary", "mb-sm"], [1, "scroll-section"], [1, "ta-justify", "p-sm", "panel-enclosure", "mb-md"], [1, "d-block", "w-100", 3, "model", "showPlus", "headerStyleClass", "icon", "label", "modelChange"], [1, "progress-container"], ["class", "progress-items", 4, "ngFor", "ngForOf"], [1, "ta-justify", "mt-sm", "p-sm", "panel-enclosure", "mb-md"], [1, "progress-container", "d-flex"], [1, "pl-md", "d-i-b"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "progress-items"], [1, "progress-label"], [1, "progress-width-container"], [1, "progress-width"], [1, "text-value"], [1, "tag"]],
    template: function SkillsPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Skill Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "app-expand-collapse", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("modelChange", function SkillsPageComponent_Template_app_expand_collapse_modelChange_4_listener($event) {
          return ctx.programmingExpanded = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SkillsPageComponent_span_6_Template, 10, 7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "app-expand-collapse", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("modelChange", function SkillsPageComponent_Template_app_expand_collapse_modelChange_8_listener($event) {
          return ctx.libraryExpanded = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SkillsPageComponent_span_10_Template, 10, 7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6)(12, "app-expand-collapse", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("modelChange", function SkillsPageComponent_Template_app_expand_collapse_modelChange_12_listener($event) {
          return ctx.softSkillsExpanded = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SkillsPageComponent_span_14_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.programmingExpanded)("showPlus", true)("headerStyleClass", "project-sticky-header text-primary")("icon", "fa-solid fa-code")("label", "Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.techSkills);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.libraryExpanded)("showPlus", true)("headerStyleClass", "project-sticky-header text-primary")("icon", "fa-solid fa-suitcase")("label", "Libraries / Frameworks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.libSkills);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.softSkillsExpanded)("showPlus", true)("headerStyleClass", "project-sticky-header text-primary")("icon", "fa-solid fa-bars-progress")("label", "Soft Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.softSkills);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _generic_expand_collapse_expand_collapse_component__WEBPACK_IMPORTED_MODULE_1__.ExpandCollapseComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1358:
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalService": () => (/* binding */ GlobalService),
/* harmony export */   "ThemeModes": () => (/* binding */ ThemeModes),
/* harmony export */   "ThemeOptions": () => (/* binding */ ThemeOptions)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4590);

var ThemeOptions;
(function (ThemeOptions) {
  ThemeOptions["Red"] = "red";
  ThemeOptions["Aqua"] = "aqua";
  ThemeOptions["Blue"] = "blue";
  ThemeOptions["Green"] = "green";
  ThemeOptions["DarkGreen"] = "dark-green";
  ThemeOptions["Teal"] = "teal";
  ThemeOptions["Purple"] = "purple";
  ThemeOptions["Orange"] = "orange";
  ThemeOptions["Violet"] = "violet";
  ThemeOptions["PinkRed"] = "pink-red";
  ThemeOptions["YellowBrown"] = "yellow-brown";
  ThemeOptions["DarkBlue"] = "dark-blue";
  ThemeOptions["Brown"] = "brown";
  ThemeOptions["Indigo"] = "indigo";
})(ThemeOptions || (ThemeOptions = {}));
var ThemeModes;
(function (ThemeModes) {
  ThemeModes["Light"] = "light-mode";
  ThemeModes["Dark"] = "dark-mode";
})(ThemeModes || (ThemeModes = {}));
class GlobalService {
  static #_ = this.ɵfac = function GlobalService_Factory(t) {
    return new (t || GlobalService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: GlobalService,
    factory: GlobalService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5761:
/*!************************************!*\
  !*** ./src/assets/data/aboutMe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "experienceDetail": () => (/* binding */ experienceDetail)
/* harmony export */ });
const data = ['I am an UI Developer, with around 6.5 years of experience in various UI technologies like HTML, CSS, Javascript, jQuery, Typescript, OOJS, Angular  (7-13), React etc.', 'I prefer, myself to be recognized as a problem solver, rather than just a Developer. I try not to be restricted by technologies. I like following and am good at recognizing patterns, which helps me in getting into any new technology or framework pretty quickly. Over the time, in my current organization, there were times, when I was simultaneously working in multiple projects with different Tech stack. Context switching comes very naturally to me. When challenged, I give my all, to over come the challenge. I love to constantly refactor my code. When ever I learn a better way to do the thing, I have done in past, I push to refactor the code. I don\'t believe in the saying "Don\'t touch it if it\'s working".', 'I speak my mind. I come up clearly on my thoughts on a matter, and give the reasoning behind my thinking (mostly during Sprint Meetings). I love to understand workflows (rather than just coding whats given to me) and try to make them better from an end user experience point of view.', 'I have done my B.Sc. in IT & Management and my MBA in IT and Finance. During my initial days, I used to work as a Plant Manager for a PDW (Packaged Drinking Water) plant, for brand Aquasure (from Aquaguard - Eureka Forbes), managing around 40 people. But I always had a liking for IT, since my graduation days, which made me shift my career into development profile. Better late than never.'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);
const experienceDetail = [{
  companyName: 'ePS - eProductivitySoftware',
  duration: 'April 22 - Till Date',
  position: 'Principal Engineer',
  logo: 'logo-eps.jpg',
  skills: 'Layout Design · JavaScript Frameworks · Front-End Development · Communication · Technical Presentations · Web Technologies · Web Development · Styling · Responsive Web Design · SASS · Design Specifications · Application Architecture · CSS Flexbox · Angular Material · User Interface Design · TypeScript · HTML5 · Technical Architecture · Software Development · Code Review · Code Design · Analytical Skills · Angular'
}, {
  companyName: 'ePS - eProductivitySoftware',
  duration: 'Jan 22 - Apr 22',
  position: 'Senior Software Engineer',
  logo: 'logo-eps.jpg',
  skills: 'Layout Design · JavaScript Frameworks · Front-End Development · Communication · Web Technologies · Web Development · Styling · Responsive Web Design · SASS · Design Specifications · Application Architecture · CSS Flexbox · Angular Material · TypeScript · HTML5 · Software Development · Code Review · Code Design · Analytical Skills · Angular'
}, {
  companyName: 'efi - Electronics for Imaging',
  duration: 'April 18 - Jan 22',
  position: 'Senior Software Engineer',
  logo: 'logo-efi.jpg',
  skills: 'Layout Design · JavaScript Frameworks · Front-End Development · Communication · Web Technologies · Web Development · Styling · Responsive Web Design · SASS · Angular Material · TypeScript · HTML5 · Software Development · Code Review · Analytical Skills · Angular'
}, {
  companyName: 'efi - Electronics for Imaging',
  duration: 'June 17 - April 18',
  position: 'Software Engineer',
  logo: 'logo-efi.jpg',
  skills: 'Layout Design · JavaScript Frameworks · Front-End Development · Communication · Web Technologies · Web Development · Styling · Responsive Web Design · HTML5 · Software Development · Code Review · Analytical Skills · Angular'
}, {
  companyName: 'NichePro Technologies',
  duration: 'Oct 16 - June 17',
  position: 'Software Developer',
  logo: 'logo-nichepro.jpg',
  skills: 'Layout Design · Front-End Development · Communication · Web Technologies · Web Development · Styling · Responsive Web Design · HTML5 · Analytical Skills'
}];

/***/ }),

/***/ 9723:
/*!************************************!*\
  !*** ./src/assets/data/contact.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactDetails = {
  email: 'susobhan.dash@gmail.com',
  phone: '9035572352',
  twitter: '',
  facebook: 'https://www.facebook.com/susobhandash',
  github: 'https://www.github.com/susobhandash',
  bitbucket: '',
  others: [{
    label: 'NPM Package: ez-ng-lib',
    image: 'npm.png',
    url: 'https://www.npmjs.com/package/ez-ng-lib',
    description: 'Angular Components Library'
  }, {
    label: 'Other Proejcts',
    image: '',
    url: 'https://vercel.com/susobhandash/',
    description: 'Apps developed and deployed by me for various learnings'
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactDetails);

/***/ }),

/***/ 8124:
/*!*************************************!*\
  !*** ./src/assets/data/projects.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const data = [{
  label: 'Recent Project: RADIUS',
  icon: 'fa-solid fa-star',
  expanded: true,
  duration: 'Nov 2020 - Apr 2023',
  description: 'Packaging MIS Application for large scale customers',
  technology: ['Angular (10-13)', 'HTML', 'SCSS', 'PrimeNG', 'NG Material', 'ChartJS', 'ng2-PdfViewer'],
  responsibilty: 'Sole in-charge of UI Project for initial 3 years, later trained and managed team of 10 UI developers on same project',
  detail: ['Restructured whole UI codebase to match latest standards and utilize Angular provided features', 'Made around 100+ robust and dynamic reusable components', 'Landing Grid component (sort, filter, elastic filter, inline edit, pinning, reordering, resizing, saving state in view, column selection, compact and spacious mode, full screen mode, custom template on row expand insights panel, export records, pagination, custom template support in columns, datatype support for formatting in columns) being used at more than 120 places, Landing Card component at more than 30 places', 'Created a dynamic grouped grid with all base grid functionalities (all above mentioned functionalities) with basic div structure and custom CSS', 'Created multiple Functional Dashboards (Ample use of CSS Flex box and position:sticky), Customizable Home screen, Customize Theme component, Recently Accessed Menus, Fullscreen Directive etc.', 'Implemented our custom Chat component and Annotation Framework, Access Management Framework, Hint Tour, Customizable Keyboard Shortcuts, Trello line columns with draggable Cards etc which were picked up and used in other applications', 'Implemented form level data and operation restriction using Access Control and View Sharing framework,', 'Created helper wrapper components or components inline with PrimeNG components to provide missing features, ex ColorBox (Custom color code input), TreeView (pass custom template and control zoom and spacing), Swap List (swap items between lists, supports multi swapping), Quill Text Editor for Notes, Enjoyhint for Hint Tour, ng2-Pdfviewer for PDF viewer and E-mail component,', "Provided custom date and time formatting, apart from Localization, using Angular's localeService and custom pipes & directives, integrated ChartJS charts for analytics views,", 'Created patterns for ease of development in future modules', 'Created wrapper components around all PrimeNG components for ease of control and upgrading', 'Tree Shaking, Lazy Loading and moving reused code to base classes']
}, {
  label: 'Past Projects (1): VISION (PSV)',
  icon: 'fa-solid fa-clock',
  expanded: false,
  duration: 'Aug 2017 - Nov 2020',
  description: 'Printing MIS Application for entry level customers',
  technology: ['Angular (7-10)', 'HTML', 'SCSS', 'PrimeNG', 'NG Material', 'Kendo Angular'],
  responsibilty: 'Provide wireframes, develop reusable components, responsible for maintaining style of application',
  detail: ['Learnt Angular from scratch for this project.', 'Started contributing with providing wireframes, after creating new components.', 'Later started creating reusbale components, like Popups, Number & Date format pipes, etc', 'Took care of the styling of the whole application, as per the style guide, maintained proper SCSS structure, mixins etc', 'Was responsible for doing R&D when any new requirement came that was not present in the patterns, ex implementing new component, implementing new features like filter in tree component etc', 'Created few reusbale components, not present (either component or functionality we were looking for) in other UI Libraries at the time, created a NPM library out of same and hosted in npm <a target="_blank" href="https://www.npmjs.com/package/ez-ng-lib">(ez-ng-lib)</a>, Components such as Reorder List, Listbox, Round Progress, Progress bar, Custom Tabbar etc', 'Helped team mates share load by taking charge of their development requirements.', 'Helped in lazy loading modules, creating customizable Home screen, Custom Menu selection, etc']
}, {
  label: 'Personal Projects (1) : Covid Dashboard (React)',
  icon: 'fa-solid fa-user',
  expanded: false,
  description: 'Covid dashboard to learn React JS',
  technology: ['ReactJS', 'HTML', 'SCSS', 'ChartJS', 'MaterialUI - MUI'],
  responsibilty: 'Built this application to learn ReactJS',
  detail: ['Responsive Layout for mobile views supported', 'Provided quick navigation between states in the Detail page', 'Integrated ChartJS to display data (currently not working as APIs are not getting updated any more)'],
  preview: {
    url: 'https://covid-react-ten.vercel.app/',
    photo: 'covid-react',
    image: 'Covid-Angular.png'
  }
}, {
  label: 'Personal Projects (2) : Covid Dashboard (Angular)',
  icon: 'fa-solid fa-user',
  expanded: false,
  description: 'Covid dashboard using Angular',
  technology: ['Angular', 'HTML', 'SCSS', 'ChartJS', 'Angular Material'],
  responsibilty: 'Built this application using Angular with capcbility to switch between dark and light mode',
  detail: ['Provided theme switching capability', 'Responsive Layout for mobile views supported', 'Created custom bar graphs using SVGs to display various data', 'Created custom pie charts using SVGs to display various data for each disrict', 'Clicking on top case types, sorts District data based on same type', 'Collapsible sections to hide unwanted data', 'Easy switching of States from dropdown'],
  preview: {
    url: 'https://covid-angular.susobhandash.vercel.app/home',
    photo: 'covid-ng',
    image: 'Covid-React.png'
  }
}, {
  label: 'Personal Projects (3) : Health Detail Tracking (Angular)',
  icon: 'fa-solid fa-user',
  expanded: false,
  description: 'Health Details Tracking',
  technology: ['Angular', 'HTML', 'SCSS', 'CanvasJS', 'Angular Material', 'Firebase'],
  responsibilty: 'Built this application using Angular and firebase to keep track of Glucose levels.',
  detail: ['Provided theme switching capability', 'Responsive Layout for mobile views supported', 'Created this app to keep track of glucose levels using CGM and BGM machines', 'Can be used per user based on login', 'Idea is to bring in more health tracking modules', 'Fuure idea is to make it an Android app, using React Native maybe ?'],
  preview: {
    url: 'http://healthdetailstracking.web.app/',
    photo: 'health-ng',
    image: 'health.png'
  }
}, {
  label: 'Personal Projects (4) : Primeng Custom Theming',
  icon: 'fa-solid fa-user',
  expanded: false,
  description: 'Custom theming for PrimeNg components',
  technology: ['Angular', 'HTML', 'SCSS', 'PrimeNg'],
  responsibilty: 'Built this application using Angular with PrimeNg to style it components based on dynamic theming.',
  detail: ['Provided theme switching capability', 'Responsive Layout for mobile views supported', 'Created multple custom themes based on Google AI Search palettes', 'Can be toggled between Dark and Light mode of same color theme'],
  preview: {
    url: 'http://primeng-custom-themes.vercel.app',
    photo: 'primeng-theme-ng',
    image: 'primeng-theme.jpeg'
  }
}, {
  label: 'Personal Projects (5) : Angular Material Custom Theming',
  icon: 'fa-solid fa-user',
  expanded: false,
  description: 'Custom theming for Angular Material components',
  technology: ['Angular', 'HTML', 'SCSS', 'Angular Material'],
  responsibilty: 'Built this application using Angular with Angular Material to style it components based on dynamic theming.',
  detail: ['Provided theme switching capability', 'Responsive Layout for mobile views supported', 'Created multple custom themes based on Angular Material Color Palette Generator', 'Can be toggled between Dark and Light mode of same color theme'],
  preview: {
    url: 'http://angular-material-custom-theme.vercel.app',
    photo: 'material-theme-ng',
    image: 'material-theme.jpeg'
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ 2940:
/*!***********************************!*\
  !*** ./src/assets/data/skills.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "libSkills": () => (/* binding */ libSkills),
/* harmony export */   "softSkills": () => (/* binding */ softSkills)
/* harmony export */ });
const techSkills = [{
  name: 'HTML',
  experience: 6.5,
  proficiency: 90
}, {
  name: 'CSS',
  experience: 6.5,
  proficiency: 80
}, {
  name: 'JS',
  experience: 6.5,
  proficiency: 75
}, {
  name: 'Angular',
  experience: 5,
  proficiency: 80,
  versions: ['7', '8', '9', '10', '11', '12', '13', '14']
}, {
  name: 'ReactJS',
  experience: 1,
  proficiency: 30
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (techSkills);
const libSkills = [{
  name: 'OOJS',
  experience: 2.5,
  proficiency: 80
}, {
  name: 'Vanilla Typescript',
  experience: 1.5,
  proficiency: 70
}, {
  name: 'SCSS / LESS',
  experience: 3.5,
  proficiency: 80
}, {
  name: 'Angular Material',
  experience: 3.5,
  proficiency: 80
}, {
  name: 'PrimeNg',
  experience: 3.5,
  proficiency: 90
}, {
  name: 'Kendo Angular',
  experience: 2,
  proficiency: 70
}];
const softSkills = ['Agile', 'Sprint', 'JIRA', 'Confluence', 'Azure Devops', 'GIT', 'SVN', 'Bitbucket', 'Github Desktop', 'Sourcetree', 'TortoiseGit', 'Jenkins', 'VS Code', 'Visual Studio'];

/***/ }),

/***/ 2777:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 6493:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 3216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4590);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 9827);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2777);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6493)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map