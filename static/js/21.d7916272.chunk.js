(this["webpackJsonpmedical-store-management"]=this["webpackJsonpmedical-store-management"]||[]).push([[21],{219:function(e,a,t){"use strict";t.r(a);var n=t(57),r=t(74),s=t(19),l=t(20),c=t(22),o=t(21),i=t(0),u=t.n(i),m=t(18),d=t(118),f=t(119),p=t(120),E=t(99),b=t(100),h=t(121),O=t(111),v=t(103),N=t(104),g=t(101),T=t(178),I=t(66),w=t(72),S=t(73),D=(t(68),t(85)),C=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).handleInput=function(e){e.persist(),l.setState((function(a){return{formData:Object(r.a)(Object(r.a)({},a.formData),{},Object(n.a)({},e.target.name,e.target.value))}}),(function(){return console.log(l.state.userData._id)}))},l.handleFormSubmit=function(){var e=l.state.userData._id;l.props.dispatch(I.b(e,l.state.formData)).then((function(e){console.log("Update DATAA",e),e.data?(S.b.success("Update Successfully",{position:S.b.POSITION.BOTTOM_RIGHT}),setTimeout((function(){w.a.push("/")}),3e3)):S.b.error("Update is not Successfully",{position:S.b.POSITION.BOTTOM_RIGHT})})).catch((function(e){S.b.error("Update is not Successfully",{position:S.b.POSITION.BOTTOM_RIGHT})}))},l.handleReset=function(){l.setState({formData:{}})},l.state={formData:{},userData:l.props.userInfo},console.log("PROPSSS---",l.props),l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.state.userData._id;this.props.dispatch(I.c(a)).then((function(a){console.log("BY Id",a),a&&e.setState({formData:a.data})}))}},{key:"render",value:function(){var e=this,a=this.state.formData;return console.log("ROWDATA",a),u.a.createElement(d.a,{className:"m-0"},u.a.createElement(f.a,{sm:"12",className:"pt-2"},u.a.createElement(D.a,null),u.a.createElement(p.a,{className:"rounded-0 mb-0 px-2"},u.a.createElement(E.a,{className:"pb-1"},u.a.createElement(b.a,null,u.a.createElement("h4",{className:"mb-0"},"Update Profile"))),u.a.createElement(h.a,null,u.a.createElement(f.a,{sm:"12"},u.a.createElement(O.a,{onSubmit:function(a){a.preventDefault(),e.handleFormSubmit()}},u.a.createElement(d.a,null,u.a.createElement(f.a,{md:"4",sm:"12"},u.a.createElement(v.a,null,u.a.createElement(N.a,null,"FirstName"),u.a.createElement(g.a,{type:"text",value:a&&a.firstName?a.firstName:"",placeholder:"First Name",name:"firstName",onChange:this.handleInput,required:!0}))),u.a.createElement(f.a,{md:"4",sm:"12"},u.a.createElement(v.a,{className:"form-label-group"},u.a.createElement(N.a,null,"Last Name"),u.a.createElement(g.a,{type:"text",value:a&&a.lastName?a.lastName:"",placeholder:"Last Name",name:"lastName",onChange:this.handleInput,required:!0}))),u.a.createElement(f.a,{md:"4",sm:"12"},u.a.createElement(v.a,{className:"form-label-group"},u.a.createElement(N.a,null,"Email"),u.a.createElement(g.a,{type:"email",value:a&&a.email?a.email:"",placeholder:"Email",name:"email",onChange:this.handleInput,required:!0}))),u.a.createElement(f.a,{md:"4",sm:"12"},u.a.createElement(v.a,{className:"form-label-group"},u.a.createElement(N.a,null,"OwnerOf"),u.a.createElement(g.a,{type:"text",value:a&&a.ownerOf?a.ownerOf:"",placeholder:"e.g ABC Medical",name:"ownerOf",onChange:this.handleInput,required:!0}))),u.a.createElement(f.a,{md:"4",sm:"12"},u.a.createElement(v.a,{className:"form-label-group"},u.a.createElement(N.a,null,"Address"),u.a.createElement(g.a,{type:"textarea",value:a&&a.address?a.address:"",placeholder:"Address",name:"address",onChange:this.handleInput}))),u.a.createElement(f.a,{md:"4",sm:"12"},u.a.createElement(v.a,{className:"form-label-group"},u.a.createElement(N.a,null,"Phone No"),u.a.createElement(g.a,{type:"Number",value:a&&a.mobile?a.mobile:"",placeholder:"Phone No.",name:"mobile",onChange:this.handleInput}))),u.a.createElement(f.a,{className:"d-flex justify-content-end flex-wrap mt-2",sm:"12"},u.a.createElement(T.a,{className:"mr-1",color:"primary",type:"submit"},"Update Profile"),u.a.createElement(S.a,null),u.a.createElement(T.a,{color:"primary",outline:!0,onClick:function(){return e.handleReset()},type:"button"},"Reset")))))))))}}]),t}(u.a.Component);a.default=Object(m.b)((function(e){return{userInfo:e.auth.login.userInfo}}))(C)},51:function(e,a,t){"use strict";var n=t(87),r=t.n(n);t(88).config();var s=r.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/msm-admin",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://fast-bastion-32942.herokuapp.com/api/"});a.a=s},66:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"c",(function(){return o})),t.d(a,"b",(function(){return i}));var n=t(52),r=t.n(n),s=t(53),l=t(51),c=function(e){return function(){var a=Object(s.a)(r.a.mark((function a(t){var n,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,ownerOf:e.ownerOf,address:e.address,mobile:e.mobile},a.next=3,l.a.post("create/users",n);case 3:return s=a.sent,a.abrupt("return",s);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},o=function(e){return function(){var a=Object(s.a)(r.a.mark((function a(t){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.get("/get/users/".concat(e));case 2:return n=a.sent,a.abrupt("return",n);case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},i=function(e,a){return function(){var t=Object(s.a)(r.a.mark((function t(n){var s,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={userId:a._id,firstName:a.firstName,lastName:a.lastName,email:a.email,ownerOf:a.ownerOf,address:a.address,mobile:a.mobile,status:a.status},console.log("ADD USER",a),t.next=4,l.a.put("/edit/users/".concat(e),s);case 4:return c=t.sent,t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},76:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return c}));var n=t(72),r=t(51),s=t(73),l=(t(68),function(e){return function(a){r.a.post("/signin",{email:e.email,password:e.password}).then((function(e){var t=e.data.user;t?(a({type:"LOGIN_WITH_JWT",payload:{userInfo:t,accessToken:e.data.token}}),s.b.success("Login Successfully",{position:s.b.POSITION.BOTTOM_RIGHT}),setTimeout((function(){n.a.push("/")}),2e3)):s.b.success("User email doesn't exist",{position:s.b.POSITION.BOTTOM_RIGHT})})).catch((function(e){s.b.error("User email doesn't exist",{position:s.b.POSITION.BOTTOM_RIGHT})}))}}),c=function(){return function(e){e({type:"LOGOUT"}),n.a.push("/login")}}},85:function(e,a,t){"use strict";var n=t(109),r=t(0),s=t.n(r),l=t(23),c=t(9),o=t(205),i=t(206),u=t(207),m=t(208),d=t(209),f=t(210),p=t(225),E=t(226),b=t(227),h=t(211),O=t(212),v=t(213),N=t(76),g=t(18),T=t(66);a.a=Object(g.b)((function(e){return{userInfo:e.auth.login.userInfo}}),(function(e){return{logout:function(){return e(Object(N.b)())},dispatch:e}}))(Object(c.g)((function(e){console.log("LOGOUT",e);var a=Object(r.useState)(!1),t=Object(n.a)(a,2),c=t[0],N=t[1],g=Object(r.useState)({rowData:[]}),I=Object(n.a)(g,2),w=I[0],S=I[1];return Object(r.useEffect)((function(){var a=e.userInfo._id;e.dispatch(T.c(a)).then((function(e){console.log("BY Id",e),e&&S({rowData:e.data})}))}),[]),s.a.createElement("div",null,s.a.createElement(o.a,{color:"light",light:!0,expand:"md"},s.a.createElement(i.a,{onClick:function(){return N(!c)}}),s.a.createElement(u.a,{isOpen:c,navbar:!0},s.a.createElement(m.a,{className:"mr-auto",navbar:!0},s.a.createElement(d.a,null,s.a.createElement(f.a,{tag:l.b,to:"/",activeClassName:"active",exact:!0},"Dashboard")),s.a.createElement(p.a,{nav:!0,inNavbar:!0},s.a.createElement(E.a,{nav:!0,caret:!0},"Medicine"),s.a.createElement(b.a,{left:"true"},s.a.createElement(h.a,{tag:l.b,to:"/add/medicine",activeClassName:"active"},"Add Medicine"))),s.a.createElement(p.a,{nav:!0,inNavbar:!0},s.a.createElement(E.a,{nav:!0,caret:!0},"Transaction"),s.a.createElement(b.a,{left:"true"},s.a.createElement(h.a,{tag:l.b,to:"/add/purchase",activeClassName:"active"},"Purchase"),s.a.createElement(h.a,{tag:l.b,to:"/add/sale",activeClassName:"active"},"Sale"))),s.a.createElement(p.a,{nav:!0,inNavbar:!0},s.a.createElement(E.a,{nav:!0,caret:!0},"Search"),s.a.createElement(b.a,{left:"true"},s.a.createElement(h.a,{tag:l.b,to:"/show/sale",activeClassName:"active"},"Customer Sales Details"),s.a.createElement(h.a,{tag:l.b,to:"/show/purchase",activeClassName:"active"},"Supplier Sales Details"))),s.a.createElement(d.a,null,s.a.createElement(f.a,{tag:l.b,to:"/show/medicine",activeClassName:"active"},"Current Stock"))),s.a.createElement(p.a,null,s.a.createElement(E.a,{tag:"a","data-toggle":"dropdown",className:"nav-link dropdown-user-link"},s.a.createElement("div",{className:"user-nav d-sm-flex d-none"},s.a.createElement("span",null,"Owner of :"," ",s.a.createElement("strong",null,s.a.createElement("i",null,w.rowData&&w.rowData.ownerOf?w.rowData.ownerOf:"loading..."))),"\xa0",console.log("DATTTAAA",w.rowData),s.a.createElement("span",null,"Username :"," ",s.a.createElement("strong",null,w.rowData&&w.rowData.lastName?w.rowData.lastName:"Loading...")))),s.a.createElement(b.a,{right:!0},s.a.createElement(h.a,{tag:l.b,to:"/edit/profile",activeClassName:"active"},s.a.createElement(O.a,{size:14,className:"mr-50"}),"\xa0",s.a.createElement("span",{className:"align-middle"},"Edit Profile")),s.a.createElement(h.a,{onClick:function(a){return e.logout(),void e.history.push("/login")}},s.a.createElement(v.a,{size:14,className:"mr-50"}),"\xa0",s.a.createElement("span",{className:"align-bottom"},"logout")))))))})))}}]);
//# sourceMappingURL=21.d7916272.chunk.js.map