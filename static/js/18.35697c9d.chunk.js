(this["webpackJsonpmedical-store-management"]=this["webpackJsonpmedical-store-management"]||[]).push([[18],{147:function(e,t,a){"use strict";a.r(t);var n=a(57),r=a(19),c=a(20),u=a(22),i=a(21),s=a(74),o=a(0),p=a.n(o),l=a(118),f=a(119),d=a(120),m=a(121),h=a(103),v=a(104),b=a(101),g=(a(68),a(90)),y=(a(72),a(18)),E=a(89),w=a(77),O=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).handleChange=function(e,t){c.setState((function(a){return{formData:Object(s.a)(Object(s.a)({},a.formData),{},Object(n.a)({},e,t.value))}}),(function(){c.props.dispatch(w.c(t.value)).then((function(e){e.data._id===t.value&&(c.setState({rowData:e.data}),c.props.medicineId(e.data._id),c.props.stock(e.data.purchaseRate))}))}))},c.state={categories:c.props.categories,packages:c.props.packages,rowData:[],medicine:c.props.medicine,formData:{},data:[],userdata:c.props.userInfo},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("purchaseQuantity",this.props),this.props.dispatch(E.a()),this.props.dispatch(E.d()),this.props.dispatch(w.b()).then((function(t){var a=t.data.filter((function(t){if(t.userId===e.state.userdata._id)return t}));e.setState({data:a})}))}},{key:"render",value:function(){var e=this,t=this.state.categories&&this.state.categories.filter((function(t){return t.value===e.state.rowData.categoryId})),a=t&&t.map((function(e){return e.label})),n=this.state.packages&&this.state.packages.filter((function(t){return t.value===e.state.rowData.packageId})),r=n&&n.map((function(e){return e.label})),c=this.state.data&&this.state.data.map((function(e){return{label:e.productName,value:e._id}}));return p.a.createElement(l.a,null,p.a.createElement(f.a,{sm:"12"},p.a.createElement(d.a,null,p.a.createElement(m.a,null,p.a.createElement(f.a,{sm:"12"},p.a.createElement(l.a,null,p.a.createElement(f.a,{md:"4",sm:"12"},p.a.createElement(h.a,null,p.a.createElement(v.a,{for:"name"},"Product Name"),p.a.createElement(g.a,{options:c,isClearable:!1,className:"React",classNamePrefix:"select",id:"medicineId",name:"medicineId",maxMenuHeight:200,onChange:function(t){return e.handleChange("medicineId",t)}}))),p.a.createElement(f.a,{md:"4",sm:"12"},p.a.createElement(h.a,null,p.a.createElement(v.a,{for:"name"},"Category Name"),p.a.createElement(b.a,{disabled:!0,type:"text",id:"categoryId",name:"categoryId",placeholder:"category Name",value:a}))),p.a.createElement(f.a,{md:"4",sm:"12"},p.a.createElement(h.a,null,p.a.createElement(v.a,{for:"name"},"Unit"),p.a.createElement(b.a,{disabled:!0,type:"text",id:"packageId",name:"packageId",placeholder:"Unit",value:r}))),p.a.createElement(f.a,{md:"4",sm:"12"},p.a.createElement(h.a,null,p.a.createElement(v.a,{for:"name"},"Current Stock"),p.a.createElement(b.a,{disabled:!0,type:"text",id:"quantity",name:"quantity",placeholder:"quantity",value:this.state.rowData&&this.state.rowData.quantity?this.state.rowData.quantity:""}))),p.a.createElement(f.a,{md:"4",sm:"12"},p.a.createElement(h.a,null,p.a.createElement(v.a,{for:"name"},"Purchase Rate"),p.a.createElement(b.a,{disabled:!0,type:"text",id:"purchaseRate",name:"purchaseRate",placeholder:"Purchase Rate",value:this.state.rowData&&this.state.rowData.purchaseRate?this.state.rowData.purchaseRate:""}))),p.a.createElement(f.a,{md:"4",sm:"12"},p.a.createElement(h.a,null,p.a.createElement(v.a,{for:"name"},"MRP Rate"),p.a.createElement(b.a,{disabled:!0,type:"text",id:"MRPRate",name:"MRPRate",placeholder:"MRP Rate",value:this.state.rowData&&this.state.rowData.MRPRate?this.state.rowData.MRPRate:""}))),p.a.createElement(f.a,{md:"4",sm:"12"},p.a.createElement(h.a,null,p.a.createElement(v.a,{for:"name"},"Sale Rate"),p.a.createElement(b.a,{disabled:!0,type:"text",id:"saleRate",name:"saleRate",placeholder:"Sale Rate",value:this.state.rowData&&this.state.rowData.saleRate?this.state.rowData.saleRate:""})))))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a={};if(e.categories&&e.categories.length&&e.categories!==t.categories){var n=e.categories.map((function(e){return{label:e.categotyName,value:e._id}}));Object.assign(a,{categories:n})}if(e.packages&&e.packages.length&&e.packages!==t.packages){var r=e.packages.map((function(e){return{label:e.packageName,value:e._id}}));Object.assign(a,{packages:r})}if(e.medicine&&e.medicine.length&&e.medicine!==t.medicine){var c=e.medicine.map((function(e){return{label:e.productName,value:e._id}}));Object.assign(a,{medicine:c})}return 0!==Object.keys(a).length?a:null}}]),a}(p.a.Component);t.default=Object(y.b)((function(e){return{userInfo:e.auth.login.userInfo,medicine:e.global.medicine,categories:e.global.categories,packages:e.global.packages}}))(O)},50:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))},51:function(e,t,a){"use strict";var n=a(87),r=a.n(n);a(88).config();var c=r.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/msm-admin",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://fast-bastion-32942.herokuapp.com/api/"});t.a=c},56:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},67:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(56);function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){Object(n.a)(e,t,a[t])}))}return e}},68:function(e,t,a){},77:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return p})),a.d(t,"e",(function(){return l}));var n=a(52),r=a.n(n),c=a(53),u=a(51),i=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("create/medicine",e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},s=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/medicine");case 2:return(a=e.sent)&&t({type:"GET_MEDICINE",payload:a.data}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},o=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/test/data");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("/get/medicine/".concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},l=function(e,t){return function(){var a=Object(c.a)(r.a.mark((function a(n){var c,i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={medicineId:t._id,saleQuantity:t.saleQuantity,quantity:t.quantity,totalNoOfItem:t.totalNoOfItem,price:t.price},a.next=3,u.a.put("edit/medicine/".concat(e),c);case 3:return i=a.sent,a.abrupt("return",i);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return o})),a.d(t,"g",(function(){return p})),a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return f})),a.d(t,"c",(function(){return d}));var n=a(52),r=a.n(n),c=a(53),u=a(51),i=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/category");case 2:return(a=e.sent)&&t({type:"CATEGORY",payload:a.data}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},s=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/package");case 2:return(a=e.sent)&&t({type:"PACKAGE",payload:a.data}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},o=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/packageType");case 2:return(a=e.sent)&&t({type:"PACKAGETYPE",payload:a.data}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/rack");case 2:return(a=e.sent)&&t({type:"RACK",payload:a.data}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/companies");case 2:return(a=e.sent)&&t({type:"COMPANIES",payload:a.data}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/payment");case 2:return(a=e.sent)&&t({type:"PAYMENTS",payload:a.data}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/customer");case 2:return(a=e.sent)&&t({type:"CUSTOMERS",payload:a.data}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=18.35697c9d.chunk.js.map