(window["webpackJsonpcra-boilerplate"]=window["webpackJsonpcra-boilerplate"]||[]).push([[1],{12:function(e,a,t){"use strict";var r=t(48),n=t(49),l=t(50),o=t.n(l),s=t(13),m=new(function(){function e(){var a=this;Object(r.a)(this,e),this.setAxiosInterceptors=function(e){var t=e.onLogout;s.a.interceptors.response.use((function(e){return e}),(function(e){return e.response&&401===e.response.status&&(a.setSession(null),t&&t()),Promise.reject(e)}))},this.loginWithEmailAndPassword=function(e,t){return new Promise((function(r,n){s.a.post("/rest-auth/login/",{email:e,password:t}).then((function(e){console.log(e),e.data.key?(a.setSession(e.data.key),r(e.data.key)):n()})).catch((function(e){n(e)}))}))},this.loginInWithToken=function(){return new Promise((function(e,t){s.a.get("/api/users/from_token?token=".concat(a.getAccessToken())).then((function(t){e(a.getAccessToken())})).catch((function(t){e(a.getAccessToken())}))}))},this.logout=function(){a.setSession(null)},this.userRegister=function(e,a){return new Promise((function(a,t){s.a.post("/rest-auth/add_user/",e).then((function(e){a()})).catch((function(e){t(e)}))}))},this.setSession=function(e){e?(localStorage.setItem("accessToken",e),s.a.defaults.headers.common.Authorization="Bearer ".concat(e)):(localStorage.removeItem("accessToken"),delete s.a.defaults.headers.common.Authorization)},this.getAccessToken=function(){return localStorage.getItem("accessToken")},this.isValidToken=function(e){if(!e)return!1;var a=o()(e),t=Date.now()/1e3;return a.exp>t},this.isAuthenticated=function(){return!!a.getAccessToken()}}return Object(n.a)(e,[{key:"handleAuthentication",value:function(){var e=this.getAccessToken();e&&this.setSession(e)}}]),e}());a.a=m},13:function(e,a,t){"use strict";var r=t(47),n=t.n(r),l=t(24),o=n.a.create({baseURL:l.a});a.a=o},17:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"c",(function(){return c})),t.d(a,"d",(function(){return d})),t.d(a,"b",(function(){return i}));var r=t(7),n=t.n(r),l=t(16),o=(t(13),t(12)),s=t(2);function m(e,a){return function(){var t=Object(l.a)(n.a.mark((function t(r){var l;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:s.b}),t.next=4,o.a.loginWithEmailAndPassword(e,a);case 4:l=t.sent,r({type:s.c,payload:{user:l}}),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(0),r({type:s.a}),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}function c(e){return function(){var a=Object(l.a)(n.a.mark((function a(t){var r;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:s.b}),a.next=4,o.a.userRegister(e);case 4:r=a.sent,t({type:s.c,payload:{user:r}}),a.next=12;break;case 8:throw a.prev=8,a.t0=a.catch(0),t({type:s.a}),a.t0;case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}function d(e){return function(a){return a({type:s.e,payload:{user:e}})}}function i(){return function(){var e=Object(l.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.a.logout(),a({type:s.d});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}},18:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(51),o=t.n(l);a.a=function(e){return n.a.createElement("div",{className:"logo-brand d-flex align-items-center flex-column"},n.a.createElement("img",Object.assign({alt:"Logo",src:o.a},e)),n.a.createElement("p",{className:"mb-0 text-black logo-lg"},n.a.createElement("strong",null,"Tour Academy")))}},2:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){return l})),t.d(a,"e",(function(){return o})),t.d(a,"d",(function(){return s})),t.d(a,"f",(function(){return m}));var r="@account/login-request",n="@account/login-success",l="@account/login-failure",o="@account/silent-login",s="@account/logout",m="@account/update-profile"},24:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return n}));var r="http://localhost:8000",n=!1},51:function(e,a,t){e.exports=t.p+"static/media/logo.4b158008.png"},54:function(e,a,t){e.exports=t(84)},83:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(22),o=t(4),s=t(10),m=t(44),c=t(45),d=t(46),i=t(15),p=t(2),u={user:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case p.b:return Object(i.a)(e,(function(e){e.user=null}));case p.c:var t=a.payload.user;return Object(i.a)(e,(function(e){e.user=t}));case p.a:return Object(i.a)(e,(function(){}));case p.d:return Object(i.a)(e,(function(e){e.user=null}));case p.e:var r=a.payload.user;return Object(i.a)(e,(function(e){e.user=r}));case p.f:var n=a.payload.user;return Object(i.a)(e,(function(e){e.user=n}));default:return e}},f=Object(s.combineReducers)({auth:h}),E=t(24),w=Object(d.createLogger)();var N=t(21),g=t(9),v=t(17),b=t(18),y=function(){var e=Object(N.g)();Object(o.c)(),Object(o.d)((function(e){return e.auth}));Object(r.useEffect)((function(){}),[e.pathname]);return n.a.createElement("div",{className:"navbar-custom"},n.a.createElement("div",{className:"container-fluid d-flex align-items-center h-100"},n.a.createElement("div",{className:"logo-box"},n.a.createElement("a",{href:"index.html",className:"logo text-center"},n.a.createElement("span",{className:"logo-sm"},n.a.createElement(b.a,{width:"60"})),n.a.createElement("span",{className:"logo-lg"},n.a.createElement(b.a,{width:"120"})))),n.a.createElement("ul",{className:"list-unstyled topnav-menu topnav-menu-left m-0"},n.a.createElement("li",null,n.a.createElement("button",{className:"button-menu-mobile waves-effect waves-light"},n.a.createElement("i",{className:"fe-menu"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"navbar-toggle nav-link","data-toggle":"collapse","data-target":"#topnav-menu-content"},n.a.createElement("div",{className:"lines"},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null))))),n.a.createElement("div",{className:"top-nav d-flex align-items-end h-100",style:{flex:1}},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("nav",{className:"navbar navbar-light navbar-expand-lg topnav-menu p-0"},n.a.createElement("div",{className:"collapse navbar-collapse",id:"topnav-menu-content"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle arrow-none",href:"#",id:"topnav-dashboard",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Tours"),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-dashboard"},n.a.createElement("a",{href:"index.html",className:"dropdown-item"},"Dashboard 1"),n.a.createElement("a",{href:"dashboard-2.html",className:"dropdown-item"},"Dashboard 2"),n.a.createElement("a",{href:"dashboard-3.html",className:"dropdown-item"},"Dashboard 3"),n.a.createElement("a",{href:"dashboard-4.html",className:"dropdown-item"},"Dashboard 4"))),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle arrow-none",href:"#",id:"topnav-apps",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Services"),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-apps"},n.a.createElement("a",{href:"apps-calendar.html",className:"dropdown-item"},n.a.createElement("i",{className:"fe-calendar mr-1"})," Calendar"),n.a.createElement("a",{href:"apps-chat.html",className:"dropdown-item"},n.a.createElement("i",{className:"fe-message-square mr-1"})," Chat"),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-ecommerce",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fe-shopping-cart mr-1"})," Ecommerce ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-ecommerce"},n.a.createElement("a",{href:"ecommerce-dashboard.html",className:"dropdown-item"},"Dashboard"),n.a.createElement("a",{href:"ecommerce-products.html",className:"dropdown-item"},"Products"),n.a.createElement("a",{href:"ecommerce-product-detail.html",className:"dropdown-item"},"Product Detail"),n.a.createElement("a",{href:"ecommerce-product-edit.html",className:"dropdown-item"},"Add Product"),n.a.createElement("a",{href:"ecommerce-customers.html",className:"dropdown-item"},"Customers"),n.a.createElement("a",{href:"ecommerce-orders.html",className:"dropdown-item"},"Orders"),n.a.createElement("a",{href:"ecommerce-order-detail.html",className:"dropdown-item"},"Order Detail"),n.a.createElement("a",{href:"ecommerce-sellers.html",className:"dropdown-item"},"Sellers"),n.a.createElement("a",{href:"ecommerce-cart.html",className:"dropdown-item"},"Shopping Cart"),n.a.createElement("a",{href:"ecommerce-checkout.html",className:"dropdown-item"},"Checkout"))),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-email",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fe-mail mr-1"})," Email ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-email"},n.a.createElement("a",{href:"email-inbox.html",className:"dropdown-item"},"Inbox"),n.a.createElement("a",{href:"email-read.html",className:"dropdown-item"},"Read Email"),n.a.createElement("a",{href:"email-compose.html",className:"dropdown-item"},"Compose Email"),n.a.createElement("a",{href:"email-templates.html",className:"dropdown-item"},"Email Templates"))),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-crm",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fe-users mr-1"})," CRM ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-crm"},n.a.createElement("a",{href:"crm-dashboard.html",className:"dropdown-item"},"Dashboard"),n.a.createElement("a",{href:"crm-contacts.html",className:"dropdown-item"},"Contacts"),n.a.createElement("a",{href:"crm-opportunities.html",className:"dropdown-item"},"Opportunities"),n.a.createElement("a",{href:"crm-leads.html",className:"dropdown-item"},"Leads"),n.a.createElement("a",{href:"crm-customers.html",className:"dropdown-item"},"Customers"))),n.a.createElement("a",{href:"apps-social-feed.html",className:"dropdown-item"},n.a.createElement("i",{className:"fe-rss mr-1"})," Social Feed"),n.a.createElement("a",{href:"apps-companies.html",className:"dropdown-item"},n.a.createElement("i",{className:"fe-activity mr-1"})," Companies"),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-project",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fe-briefcase mr-1"})," Projects ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-project"},n.a.createElement("a",{href:"project-list.html",className:"dropdown-item"},"List"),n.a.createElement("a",{href:"project-detail.html",className:"dropdown-item"},"Detail"),n.a.createElement("a",{href:"project-create.html",className:"dropdown-item"},"Create Project"))),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-task",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fe-clipboard mr-1"})," Tasks ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-task"},n.a.createElement("a",{href:"task-list.html",className:"dropdown-item"},"List"),n.a.createElement("a",{href:"task-details.html",className:"dropdown-item"},"Details"),n.a.createElement("a",{href:"task-kanban-board.html",className:"dropdown-item"},"Kanban Board"))),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-contact",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fe-book mr-1"})," Contacts ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-contact"},n.a.createElement("a",{href:"contacts-list.html",className:"dropdown-item"},"Members List"),n.a.createElement("a",{href:"contacts-profile.html",className:"dropdown-item"},"Profile"))),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-tickets",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fe-aperture mr-1"})," Tickets ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-tickets"},n.a.createElement("a",{href:"tickets-list.html",className:"dropdown-item"},"List"),n.a.createElement("a",{href:"tickets-detail.html",className:"dropdown-item"},"Detail"))),n.a.createElement("a",{href:"apps-file-manager.html",className:"dropdown-item"},n.a.createElement("i",{className:"fe-folder-plus mr-1"})," File Manager"))),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle arrow-none",href:"#",id:"topnav-ui",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Armenia"),n.a.createElement("div",{className:"dropdown-menu mega-dropdown-menu dropdown-mega-menu-xl","aria-labelledby":"topnav-ui"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",null,n.a.createElement("a",{href:"ui-buttons.html",className:"dropdown-item"},"Buttons"),n.a.createElement("a",{href:"ui-cards.html",className:"dropdown-item"},"Cards"),n.a.createElement("a",{href:"ui-avatars.html",className:"dropdown-item"},"Avatars"),n.a.createElement("a",{href:"ui-portlets.html",className:"dropdown-item"},"Portlets"),n.a.createElement("a",{href:"ui-tabs-accordions.html",className:"dropdown-item"},"Tabs & Accordions"),n.a.createElement("a",{href:"ui-modals.html",className:"dropdown-item"},"Modals"),n.a.createElement("a",{href:"ui-progress.html",className:"dropdown-item"},"Progress"))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",null,n.a.createElement("a",{href:"ui-notifications.html",className:"dropdown-item"},"Notifications"),n.a.createElement("a",{href:"ui-spinners.html",className:"dropdown-item"},"Spinners"),n.a.createElement("a",{href:"ui-images.html",className:"dropdown-item"},"Images"),n.a.createElement("a",{href:"ui-carousel.html",className:"dropdown-item"},"Carousel"),n.a.createElement("a",{href:"ui-list-group.html",className:"dropdown-item"},"List Group"),n.a.createElement("a",{href:"ui-video.html",className:"dropdown-item"},"Embed Video"))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",null,n.a.createElement("a",{href:"ui-dropdowns.html",className:"dropdown-item"},"Dropdowns"),n.a.createElement("a",{href:"ui-ribbons.html",className:"dropdown-item"},"Ribbons"),n.a.createElement("a",{href:"ui-tooltips-popovers.html",className:"dropdown-item"},"Tooltips & Popovers"),n.a.createElement("a",{href:"ui-general.html",className:"dropdown-item"},"General UI"),n.a.createElement("a",{href:"ui-typography.html",className:"dropdown-item"},"Typography"),n.a.createElement("a",{href:"ui-grid.html",className:"dropdown-item"},"Grid")))))),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle arrow-none",href:"#",id:"topnav-components",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"About us"),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-components"},n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-extendedui",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fe-pocket mr-1"})," Extended UI ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-extendedui"},n.a.createElement("a",{href:"extended-nestable.html",className:"dropdown-item"},"Nestable List"),n.a.createElement("a",{href:"extended-range-slider.html",className:"dropdown-item"},"Range Slider"),n.a.createElement("a",{href:"extended-dragula.html",className:"dropdown-item"},"Dragula"),n.a.createElement("a",{href:"extended-animation.html",className:"dropdown-item"},"Animation"),n.a.createElement("a",{href:"extended-sweet-alert.html",className:"dropdown-item"},"Sweet Alert"),n.a.createElement("a",{href:"extended-tour.html",className:"dropdown-item"},"Tour Page"),n.a.createElement("a",{href:"extended-scrollspy.html",className:"dropdown-item"},"Scrollspy"),n.a.createElement("a",{href:"extended-loading-buttons.html",className:"dropdown-item"},"Loading Buttons"))),n.a.createElement("a",{href:"widgets.html",className:"dropdown-item"},n.a.createElement("i",{className:"fe-gift mr-1"})," Widgets"),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-form",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fe-bookmark mr-1"})," Forms ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-form"},n.a.createElement("a",{href:"forms-elements.html",className:"dropdown-item"},"General Elements"),n.a.createElement("a",{href:"forms-advanced.html",className:"dropdown-item"},"Advanced"),n.a.createElement("a",{href:"forms-validation.html",className:"dropdown-item"},"Validation"),n.a.createElement("a",{href:"forms-pickers.html",className:"dropdown-item"},"Pickers"),n.a.createElement("a",{href:"forms-wizard.html",className:"dropdown-item"},"Wizard"),n.a.createElement("a",{href:"forms-masks.html",className:"dropdown-item"},"Masks"),n.a.createElement("a",{href:"forms-summernote.html",className:"dropdown-item"},"Summernote"),n.a.createElement("a",{href:"forms-quilljs.html",className:"dropdown-item"},"Quilljs Editor"),n.a.createElement("a",{href:"forms-file-uploads.html",className:"dropdown-item"},"File Uploads"),n.a.createElement("a",{href:"forms-x-editable.html",className:"dropdown-item"},"X Editable"),n.a.createElement("a",{href:"forms-image-crop.html",className:"dropdown-item"},"Image Crop"))),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-charts",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fe-bar-chart-2 mr-1"})," Charts ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-charts"},n.a.createElement("a",{href:"charts-apex.html",className:"dropdown-item"},"Apex Charts"),n.a.createElement("a",{href:"charts-flot.html",className:"dropdown-item"},"Flot Charts"),n.a.createElement("a",{href:"charts-morris.html",className:"dropdown-item"},"Morris Charts"),n.a.createElement("a",{href:"charts-chartjs.html",className:"dropdown-item"},"Chartjs Charts"),n.a.createElement("a",{href:"charts-peity.html",className:"dropdown-item"},"Peity Charts"),n.a.createElement("a",{href:"charts-chartist.html",className:"dropdown-item"},"Chartist Charts"),n.a.createElement("a",{href:"charts-c3.html",className:"dropdown-item"},"C3 Charts"),n.a.createElement("a",{href:"charts-sparklines.html",className:"dropdown-item"},"Sparklines Charts"),n.a.createElement("a",{href:"charts-knob.html",className:"dropdown-item"},"Jquery Knob Charts"))),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-table",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fe-grid mr-1"})," Tables ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-table"},n.a.createElement("a",{href:"tables-basic.html",className:"dropdown-item"},"Basic Tables"),n.a.createElement("a",{href:"tables-datatables.html",className:"dropdown-item"},"Data Tables"),n.a.createElement("a",{href:"tables-editable.html",className:"dropdown-item"},"Editable Tables"),n.a.createElement("a",{href:"tables-responsive.html",className:"dropdown-item"},"Responsive Tables"),n.a.createElement("a",{href:"tables-footables.html",className:"dropdown-item"},"FooTable"),n.a.createElement("a",{href:"tables-bootstrap.html",className:"dropdown-item"},"Bootstrap Tables"),n.a.createElement("a",{href:"tables-tablesaw.html",className:"dropdown-item"},"Tablesaw Tables"),n.a.createElement("a",{href:"tables-jsgrid.html",className:"dropdown-item"},"JsGrid Tables"))),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-icons",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fe-cpu mr-1"})," Icons ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-icons"},n.a.createElement("a",{href:"icons-two-tone.html",className:"dropdown-item"},"Two Tone Icons"),n.a.createElement("a",{href:"icons-feather.html",className:"dropdown-item"},"Feather Icons"),n.a.createElement("a",{href:"icons-mdi.html",className:"dropdown-item"},"Material Design Icons"),n.a.createElement("a",{href:"icons-dripicons.html",className:"dropdown-item"},"Dripicons"),n.a.createElement("a",{href:"icons-font-awesome.html",className:"dropdown-item"},"Font Awesome 5"),n.a.createElement("a",{href:"icons-themify.html",className:"dropdown-item"},"Themify"),n.a.createElement("a",{href:"icons-simple-line.html",className:"dropdown-item"},"Simple Line"),n.a.createElement("a",{href:"icons-weather.html",className:"dropdown-item"},"Weather"))),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-map",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fe-map mr-1"})," Maps ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-map"},n.a.createElement("a",{href:"maps-google.html",className:"dropdown-item"},"Google Maps"),n.a.createElement("a",{href:"maps-vector.html",className:"dropdown-item"},"Vector Maps"),n.a.createElement("a",{href:"maps-mapael.html",className:"dropdown-item"},"Mapael Maps"))))),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle arrow-none",href:"#",id:"topnav-pages",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Tour finder"),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-pages"},n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-auth",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Auth Style 1 ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-auth"},n.a.createElement("a",{href:"auth-login.html",className:"dropdown-item"},"Log In"),n.a.createElement("a",{href:"auth-register.html",className:"dropdown-item"},"Register"),n.a.createElement("a",{href:"auth-signin-signup.html",className:"dropdown-item"},"Signin - Signup"),n.a.createElement("a",{href:"auth-recoverpw.html",className:"dropdown-item"},"Recover Password"),n.a.createElement("a",{href:"auth-lock-screen.html",className:"dropdown-item"},"Lock Screen"),n.a.createElement("a",{href:"auth-logout.html",className:"dropdown-item"},"Logout"),n.a.createElement("a",{href:"auth-confirm-mail.html",className:"dropdown-item"},"Confirm Mail"))),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-auth2",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Auth Style 2 ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-auth2"},n.a.createElement("a",{href:"auth-login-2.html",className:"dropdown-item"},"Log In 2"),n.a.createElement("a",{href:"auth-register-2.html",className:"dropdown-item"},"Register 2"),n.a.createElement("a",{href:"auth-signin-signup-2.html",className:"dropdown-item"},"Signin - Signup 2"),n.a.createElement("a",{href:"auth-recoverpw-2.html",className:"dropdown-item"},"Recover Password 2"),n.a.createElement("a",{href:"auth-lock-screen-2.html",className:"dropdown-item"},"Lock Screen 2"),n.a.createElement("a",{href:"auth-logout-2.html",className:"dropdown-item"},"Logout 2"),n.a.createElement("a",{href:"auth-confirm-mail-2.html",className:"dropdown-item"},"Confirm Mail 2"))),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-error",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Errors ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-error"},n.a.createElement("a",{href:"pages-404.html",className:"dropdown-item"},"Error 404"),n.a.createElement("a",{href:"pages-404-two.html",className:"dropdown-item"},"Error 404 Two"),n.a.createElement("a",{href:"pages-404-alt.html",className:"dropdown-item"},"Error 404-alt"),n.a.createElement("a",{href:"pages-500.html",className:"dropdown-item"},"Error 500"),n.a.createElement("a",{href:"pages-500-two.html",className:"dropdown-item"},"Error 500 Two"))),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdown-item dropdown-toggle arrow-none",href:"#",id:"topnav-utility",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Utility ",n.a.createElement("div",{className:"arrow-down"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"topnav-utility"},n.a.createElement("a",{href:"pages-starter.html",className:"dropdown-item"},"Starter"),n.a.createElement("a",{href:"pages-timeline.html",className:"dropdown-item"},"Timeline"),n.a.createElement("a",{href:"pages-sitemap.html",className:"dropdown-item"},"Sitemap"),n.a.createElement("a",{href:"pages-invoice.html",className:"dropdown-item"},"Invoice"),n.a.createElement("a",{href:"pages-faqs.html",className:"dropdown-item"},"FAQs"),n.a.createElement("a",{href:"pages-search-results.html",className:"dropdown-item"},"Search Results"),n.a.createElement("a",{href:"pages-pricing.html",className:"dropdown-item"},"Pricing"),n.a.createElement("a",{href:"pages-maintenance.html",className:"dropdown-item"},"Maintenance"),n.a.createElement("a",{href:"pages-coming-soon.html",className:"dropdown-item"},"Coming Soon"),n.a.createElement("a",{href:"pages-gallery.html",className:"dropdown-item"},"Gallery")))))))))),n.a.createElement("ul",{className:"list-unstyled topnav-menu mb-0 d-flex align-items-end h-100"},n.a.createElement("li",{className:"dropdown d-none d-lg-inline-block"},n.a.createElement("a",{className:"nav-link dropdown-toggle arrow-none waves-effect waves-light","data-toggle":"fullscreen",href:"#"},"Eng")),n.a.createElement("li",{className:"dropdown d-none d-lg-inline-block"},n.a.createElement("a",{className:"nav-link dropdown-toggle arrow-none waves-effect waves-light","data-toggle":"fullscreen",href:"#"},"USD")),n.a.createElement("li",{className:"d-none d-lg-block ml-3"},n.a.createElement("form",{className:"app-search"},n.a.createElement("div",{className:"app-search-box dropdown"},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"search",className:"form-control",placeholder:"Search...",id:"top-search"}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn",type:"submit"},n.a.createElement("i",{className:"fe-search"}))))))),n.a.createElement("li",{className:"dropdown d-inline-block d-lg-none"},n.a.createElement("a",{className:"nav-link dropdown-toggle arrow-none waves-effect waves-light","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"false","aria-expanded":"false"},n.a.createElement("i",{className:"fe-search noti-icon"})),n.a.createElement("div",{className:"dropdown-menu dropdown-lg dropdown-menu-right p-0"},n.a.createElement("form",{className:"p-3"},n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search ...","aria-label":"Recipient's username"}))))),n.a.createElement("div",{className:"clearfix"})))},x=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"container fluid"},n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"footer-menu"},n.a.createElement("div",{className:"menu-title"},n.a.createElement("b",null,"Tours")),n.a.createElement("ul",null,n.a.createElement("li",null,"Classic tours"),n.a.createElement("li",null,"Tours with guarantee departures"),n.a.createElement("li",null,"Regional tours"),n.a.createElement("li",null,"Active tours"),n.a.createElement("li",null,"One day tours"),n.a.createElement("li",null,"Themed tours"))),n.a.createElement("div",{className:"footer-menu"},n.a.createElement("div",{className:"menu-title"},n.a.createElement("b",null,"Tours")),n.a.createElement("ul",null,n.a.createElement("li",null,"Classic tours"),n.a.createElement("li",null,"Tours with guarantee departures"),n.a.createElement("li",null,"Regional tours"),n.a.createElement("li",null,"Active tours"),n.a.createElement("li",null,"One day tours"),n.a.createElement("li",null,"Themed tours"))),n.a.createElement("div",{className:"footer-menu"},n.a.createElement("div",{className:"menu-title"},n.a.createElement("b",null,"Tours")),n.a.createElement("ul",null,n.a.createElement("li",null,"Classic tours"),n.a.createElement("li",null,"Tours with guarantee departures"),n.a.createElement("li",null,"Regional tours"),n.a.createElement("li",null,"Active tours"),n.a.createElement("li",null,"One day tours"),n.a.createElement("li",null,"Themed tours"))),n.a.createElement("div",{className:"footer-menu"},n.a.createElement("b",null,"Tours"),n.a.createElement("ul",null,n.a.createElement("li",null,"Classic tours"),n.a.createElement("li",null,"Tours with guarantee departures"),n.a.createElement("li",null,"Regional tours"),n.a.createElement("li",null,"Active tours"),n.a.createElement("li",null,"One day tours"),n.a.createElement("li",null,"Themed tours"))),n.a.createElement("div",{className:"footer-menu"},"Tours",n.a.createElement("ul",null,n.a.createElement("li",null,"Classic tours"),n.a.createElement("li",null,"Tours with guarantee departures"),n.a.createElement("li",null,"Regional tours"),n.a.createElement("li",null,"Active tours"),n.a.createElement("li",null,"One day tours"),n.a.createElement("li",null,"Themed tours"))))))},k=function(e){var a=e.children;return n.a.createElement("div",{id:"wrapper"},n.a.createElement(y,null),n.a.createElement("div",{className:"content-page p-0"},n.a.createElement("div",{className:"content"},a)),n.a.createElement(x,null))},T=t(30),j=t.n(T),O=t(26),S=t.n(O);var C=function(){return Object(r.useEffect)((function(){return j.a.start(),function(){j.a.done()}}),[]),n.a.createElement(n.a.Fragment,null)};var A=function(e){var a=e.children;return Object(o.d)((function(e){return e.auth})).user?n.a.createElement(N.a,{to:"/app/home"}):a},P=[{exact:!0,path:"/",layout:k,component:Object(r.lazy)((function(){return Promise.all([t.e(4),t.e(5)]).then(t.bind(null,327))}))},{exact:!0,guard:A,path:"/login",component:Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,328))}))},{exact:!0,guard:A,path:"/register",component:Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,329))}))},{path:"/app",layout:k,routes:[{exact:!0,path:"/app",component:function(){return n.a.createElement(N.a,{to:"/app/home"})}},{exact:!0,path:"/app/home",component:Object(r.lazy)((function(){return t.e(8).then(t.bind(null,330))}))}]}],I=function e(a){return a?n.a.createElement(r.Suspense,{fallback:n.a.createElement(C,null)},n.a.createElement(N.d,null,a.map((function(a,t){var l=a.guard||r.Fragment,o=a.layout||r.Fragment,s=a.component;return n.a.createElement(N.b,{key:t,path:a.path,exact:a.exact,render:function(t){return n.a.createElement(l,null,n.a.createElement(o,null,a.routes?e(a.routes):n.a.createElement(s,t)))}})})))):null};var L=function(){return I(P)},R=t(7),D=t.n(R),M=t(16),F=t(32);var z=function(){return n.a.createElement("div",{className:"splash"},n.a.createElement(b.a,{width:"150",className:"mb-3"}),n.a.createElement(S.a,{type:"cylon",color:"#6658dd",height:150,width:50}))},W=t(12);var B=function(e){var a=e.children,t=Object(o.c)(),l=Object(r.useState)(!0),s=Object(F.a)(l,2),m=s[0],c=s[1];return Object(r.useEffect)((function(){(function(){var e=Object(M.a)(D.a.mark((function e(){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W.a.setAxiosInterceptors({onLogout:function(){return t(Object(v.b)())}}),W.a.handleAuthentication(),!W.a.isAuthenticated()){e.next=8;break}return e.next=5,W.a.loginInWithToken();case 5:return a=e.sent,e.next=8,t(Object(v.d)(a));case 8:c(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),m?n.a.createElement(z,null):a};var G=function(){var e=Object(N.g)();return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e.pathname]),null},U=Object(g.a)(),q=function(){return n.a.createElement(N.c,{history:U},n.a.createElement(B,null,n.a.createElement(G,null),n.a.createElement(L,null)))},J=(t(82),t(83),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=[m.a];E.b&&a.push(w);var t=[Object(c.composeWithDevTools)(s.applyMiddleware.apply(void 0,a))],r=s.compose.apply(void 0,t);return Object(s.createStore)(f,e,r)}());Object(l.render)(n.a.createElement(o.a,{store:J},n.a.createElement(q,null)),document.getElementById("root"))}},[[54,2,3]]]);
//# sourceMappingURL=main.e4d75a0d.chunk.js.map