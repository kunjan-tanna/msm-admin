(this["webpackJsonpmedical-store-management"]=this["webpackJsonpmedical-store-management"]||[]).push([[11],{142:function(e,a,t){e.exports=t.p+"static/media/login.fd58a052.png"},171:function(e,a,t){"use strict";t.r(a);var n=t(62),c=t(71),l=t(19),r=t(20),s=t(23),o=t(22),m=t(0),i=t.n(m),u=t(21),p=t(143),d=t(144),f=t(145),E=t(146),b=t(147),O=t(148),g=t(149),h=t(150),T=t(151),N=t(152),I=t(179),v=t(124),y=t(53),S=t(18),j=t(172),_=t(173),w=t(57),x=(t(56),t(54)),D=t(142),k=t.n(D),P=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).handleInput=function(e){e.persist(),r.setState((function(a){return{formData:Object(c.a)(Object(c.a)({},a.formData),{},Object(n.a)({},e.target.name,e.target.value))}}))},r.handleFormSubmit=function(){console.log("FORMDATA===",r.state.formData),r.props.dispatch(Object(y.a)(r.state.formData))},r.state={formData:{}},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(p.a,{className:"m-0 justify-content-center"},i.a.createElement(d.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center pt-4"},i.a.createElement(f.a,null,i.a.createElement(p.a,{className:"m-0"},i.a.createElement(d.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center"},i.a.createElement("img",{src:k.a,alt:"fgImg"})),i.a.createElement(d.a,{lg:"6",md:"12",className:"p-0"},i.a.createElement(f.a,{className:"rounded-0 mb-0 px-2"},i.a.createElement(E.a,{className:"pb-1"},i.a.createElement(b.a,null,i.a.createElement("h4",{className:"mb-0"},"Login"))),i.a.createElement("p",{className:"px-2 ml-4 pt-2"},"Welcome back, please login to your account."),i.a.createElement(O.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement(g.a,{onSubmit:function(a){a.preventDefault(),e.handleFormSubmit()}},i.a.createElement(p.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement(h.a,null,i.a.createElement(T.a,null,i.a.createElement(j.a,{size:15})," Email"),i.a.createElement(N.a,{type:"email",placeholder:"Email",name:"email",onChange:this.handleInput}))),i.a.createElement(d.a,{sm:"12"},i.a.createElement(h.a,null,i.a.createElement(T.a,null,i.a.createElement(_.a,{size:15})," Password"),i.a.createElement(N.a,{type:"password",placeholder:"Password",name:"password",onChange:this.handleInput})),i.a.createElement(h.a,{className:"d-flex justify-content-between align-items-center"},i.a.createElement(I.a,{className:"pt-1 ml-2",type:"checkbox",name:"donotcall",id:"donotcall",label:"Remember me"}),i.a.createElement("div",{className:"float-right"},i.a.createElement(S.b,{to:"/forgotpassword",exact:!0,className:"nav-link"},"Forgot Password?"))),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(v.a,{color:"primary",outline:!0,onClick:function(){x.a.push("/register")}},"Register"),i.a.createElement(v.a,{color:"primary",type:"submit"},"Login")),i.a.createElement(w.a,null))))))))))))}}]),t}(i.a.Component);a.default=Object(u.b)((function(e){return{}}))(P)},52:function(e,a,t){"use strict";var n=t(58),c=t.n(n);t(59).config();var l=c.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/msm-admin",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"http://localhost:8000/api/"});a.a=l},53:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return s}));var n=t(54),c=t(52),l=t(57),r=(t(56),function(e){return function(a){c.a.post("/signin",{email:e.email,password:e.password}).then((function(e){var t=e.data.user;t?(a({type:"LOGIN_WITH_JWT",payload:{userInfo:t,accessToken:e.data.token}}),l.b.success("Login Successfully",{position:l.b.POSITION.BOTTOM_RIGHT}),setTimeout((function(){n.a.push("/")}),2e3)):l.b.success("User email doesn't exist",{position:l.b.POSITION.BOTTOM_RIGHT})})).catch((function(e){l.b.error("User email doesn't exist",{position:l.b.POSITION.BOTTOM_RIGHT})}))}}),s=function(){return function(e){e({type:"LOGOUT"}),n.a.push("/login")}}}}]);
//# sourceMappingURL=11.de35b770.chunk.js.map