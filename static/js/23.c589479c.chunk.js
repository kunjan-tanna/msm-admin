(this["webpackJsonpmedical-store-management"]=this["webpackJsonpmedical-store-management"]||[]).push([[23],{228:function(e,a,t){"use strict";t.r(a);var n=t(61),r=t(67),s=t(19),l=t(20),c=t(22),u=t(21),o=t(0),m=t.n(o),i=t(18),p=t(85),d=t(86),f=t(78),h=t(75),b=t(76),E=t(79),O=t(92),N=t(111),g=t(112),v=t(103),w=t(179),I=t(57),y=t(58),T=t(60),S=(t(59),function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).handleInput=function(e){e.persist(),l.setState((function(a){return{formData:Object(r.a)(Object(r.a)({},a.formData),{},Object(n.a)({},e.target.name,e.target.value))}}))},l.handleFormSubmit=function(){l.props.dispatch(Object(I.a)(l.state.formData)).then((function(e){e.data?(T.b.success("Register Successfully",{position:T.b.POSITION.BOTTOM_RIGHT}),setTimeout((function(){y.a.push("/login")}),3e3)):T.b.error("Register is not Successfully",{position:T.b.POSITION.BOTTOM_RIGHT})})).catch((function(e){T.b.error("Register is not Successfully",{position:T.b.POSITION.BOTTOM_RIGHT})}))},l.handleReset=function(){l.setState({formData:{}})},l.state={counter:0,formData:{}},l}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(p.a,{className:"m-0"},m.a.createElement(d.a,{sm:"12",className:" pt-2"},m.a.createElement(f.a,{className:"rounded-0 mb-0 px-2"},m.a.createElement(h.a,{className:"pb-1"},m.a.createElement(b.a,null,m.a.createElement("h4",{className:"mb-0"},"Register"))),m.a.createElement(E.a,null,m.a.createElement(d.a,{sm:"12"},m.a.createElement(O.a,{onSubmit:function(a){a.preventDefault(),e.handleFormSubmit()}},m.a.createElement(p.a,null,m.a.createElement(d.a,{sm:"12"},m.a.createElement(N.a,null,m.a.createElement(g.a,null,"FirstName"),m.a.createElement(v.a,{type:"text",placeholder:"First Name",name:"firstName",onChange:this.handleInput,required:!0}))),m.a.createElement(d.a,{sm:"12"},m.a.createElement(N.a,{className:"form-label-group"},m.a.createElement(g.a,null,"Last Name"),m.a.createElement(v.a,{type:"text",placeholder:"Last Name",name:"lastName",onChange:this.handleInput,required:!0})),m.a.createElement(N.a,{className:"form-label-group"},m.a.createElement(g.a,null,"Email"),m.a.createElement(v.a,{type:"email",placeholder:"Email",name:"email",onChange:this.handleInput,required:!0})),m.a.createElement(N.a,{className:"form-label-group"},m.a.createElement(g.a,null,"Password"),m.a.createElement(v.a,{type:"password",placeholder:"Password",name:"password",onChange:this.handleInput,required:!0})),m.a.createElement(N.a,{className:"form-label-group"},m.a.createElement(g.a,null,"OwnerOf"),m.a.createElement(v.a,{type:"text",placeholder:"e.g ABC Medical",name:"ownerOf",onChange:this.handleInput,required:!0})),m.a.createElement(N.a,{className:"form-label-group"},m.a.createElement(g.a,null,"Address"),m.a.createElement(v.a,{type:"textarea",placeholder:"Address",name:"address",onChange:this.handleInput})),m.a.createElement(N.a,{className:"form-label-group"},m.a.createElement(g.a,null,"Phone No"),m.a.createElement(v.a,{type:"Number",placeholder:"Phone No.",name:"mobile",onChange:this.handleInput})),m.a.createElement(d.a,{className:"d-flex justify-content-end flex-wrap mt-2",sm:"12"},m.a.createElement(w.a,{className:"mr-1",color:"primary",type:"submit"},"Register"),m.a.createElement(T.a,null),m.a.createElement(w.a,{color:"primary",outline:!0,onClick:function(){return e.handleReset()},type:"button"},"Reset"))))))))))}}]),t}(m.a.Component));a.default=Object(i.b)(null,(function(e){return{dispatch:e}}))(S)},52:function(e,a,t){"use strict";var n=t(68),r=t.n(n);t(69).config();var s=r.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/msm-admin",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://fast-bastion-32942.herokuapp.com/api/"});a.a=s},57:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"c",(function(){return u})),t.d(a,"b",(function(){return o}));var n=t(53),r=t.n(n),s=t(54),l=t(52),c=function(e){return function(){var a=Object(s.a)(r.a.mark((function a(t){var n,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,ownerOf:e.ownerOf,address:e.address,mobile:e.mobile},a.next=3,l.a.post("create/users",n);case 3:return s=a.sent,a.abrupt("return",s);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},u=function(e){return function(){var a=Object(s.a)(r.a.mark((function a(t){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.get("/get/users/".concat(e));case 2:return n=a.sent,a.abrupt("return",n);case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},o=function(e,a){return function(){var t=Object(s.a)(r.a.mark((function t(n){var s,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={userId:a._id,firstName:a.firstName,lastName:a.lastName,email:a.email,ownerOf:a.ownerOf,address:a.address,mobile:a.mobile,status:a.status},t.next=3,l.a.put("/edit/users/".concat(e),s);case 3:return c=t.sent,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=23.c589479c.chunk.js.map