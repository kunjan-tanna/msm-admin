(this["webpackJsonpmedical-store-management"]=this["webpackJsonpmedical-store-management"]||[]).push([[8],{169:function(e,a,t){"use strict";t.r(a);var n=t(19),c=t(20),r=t(23),l=t(22),s=t(0),i=t.n(s),o=t(55),m=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(o.a,null),i.a.createElement("h4",null,"You're AddPurchase."),";")}}]),t}(i.a.Component);a.default=m},52:function(e,a,t){"use strict";var n=t(58),c=t.n(n);t(59).config();var r=c.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/msm-admin",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"http://localhost:8000/api/"});a.a=r},53:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return s}));var n=t(54),c=t(52),r=t(57),l=(t(56),function(e){return function(a){c.a.post("/signin",{email:e.email,password:e.password}).then((function(e){var t=e.data.user;t?(a({type:"LOGIN_WITH_JWT",payload:{userInfo:t,accessToken:e.data.token}}),r.b.success("Login Successfully",{position:r.b.POSITION.BOTTOM_RIGHT}),setTimeout((function(){n.a.push("/")}),2e3)):r.b.success("User email doesn't exist",{position:r.b.POSITION.BOTTOM_RIGHT})})).catch((function(e){r.b.error("User email doesn't exist",{position:r.b.POSITION.BOTTOM_RIGHT})}))}}),s=function(){return function(e){e({type:"LOGOUT"}),n.a.push("/login")}}},55:function(e,a,t){"use strict";var n=t(66),c=t(0),r=t.n(c),l=t(18),s=t(9),i=t(159),o=t(160),m=t(161),u=t(162),d=t(163),E=t(164),v=t(176),b=t(177),p=t(178),f=t(165),O=t(166),g=t(167),h=t(53),T=t(21);a.a=Object(T.b)((function(e){return{userInfo:e.auth.login.userInfo}}),{logout:h.b})(Object(s.g)((function(e){var a=Object(c.useState)(!1),t=Object(n.a)(a,2),s=t[0],h=t[1];return r.a.createElement("div",null,r.a.createElement(i.a,{color:"light",light:!0,expand:"md"},r.a.createElement(o.a,{onClick:function(){return h(!s)}}),r.a.createElement(m.a,{isOpen:s,navbar:!0},r.a.createElement(u.a,{className:"mr-auto",navbar:!0},r.a.createElement(d.a,null,r.a.createElement(E.a,{tag:l.b,to:"/",activeClassName:"active",exact:!0},"Dashboard")),r.a.createElement(v.a,{nav:!0,inNavbar:!0},r.a.createElement(b.a,{nav:!0,caret:!0},"Medicine"),r.a.createElement(p.a,{left:!0},r.a.createElement(f.a,{tag:l.b,to:"/add/medicine",activeClassName:"active"},"Add Medicine"))),r.a.createElement(v.a,{nav:!0,inNavbar:!0},r.a.createElement(b.a,{nav:!0,caret:!0},"Transaction"),r.a.createElement(p.a,{left:!0},r.a.createElement(f.a,{tag:l.b,to:"/add/purchase",activeClassName:"active"},"Purchase"),r.a.createElement(f.a,{tag:l.b,to:"/add/sale",activeClassName:"active"},"Sale"))),r.a.createElement(v.a,{nav:!0,inNavbar:!0},r.a.createElement(b.a,{nav:!0,caret:!0},"Search"),r.a.createElement(p.a,{left:!0},r.a.createElement(f.a,{tag:l.b,to:"/show/sale",activeClassName:"active"},"Customer Sales Details"),r.a.createElement(f.a,{tag:l.b,to:"/show/purchase",activeClassName:"active"},"Supplier Sales Details"))),r.a.createElement(d.a,null,r.a.createElement(E.a,{tag:l.b,to:"/show/medicine",activeClassName:"active"},"Current Stock"))),r.a.createElement(v.a,null,r.a.createElement(b.a,{tag:"a","data-toggle":"dropdown",className:"nav-link dropdown-user-link"},r.a.createElement("div",{className:"user-nav d-sm-flex d-none"},r.a.createElement("span",null,"Owner of : ",r.a.createElement("strong",null,"ABC Medical")),"\xa0",r.a.createElement("span",null,"Username : ",r.a.createElement("strong",null,"John Doe")))),r.a.createElement(p.a,{right:!0},r.a.createElement(f.a,{tag:"a",href:"#"},r.a.createElement(O.a,{size:14,className:"mr-50"}),"\xa0",r.a.createElement("span",{className:"align-middle"},"Edit Profile")),r.a.createElement(f.a,{onClick:function(a){return e.logout(),void e.history.push("/login")}},r.a.createElement(g.a,{size:14,className:"mr-50"}),"\xa0",r.a.createElement("span",{className:"align-bottom"},"logout")))))))})))}}]);
//# sourceMappingURL=8.69ab2ded.chunk.js.map