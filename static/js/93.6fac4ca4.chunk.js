(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[93],{757:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(4),s=a(1),i=a(66),c=a(10),o=a(32),l=a(45),u=a(12),j=a(709),d=a(299),b=a(250),m=a(246),p=a(671),h=a(488),O=a(698),x=a(244),f=a(173),v=a(40),g=a(332),w=a(64),C=a(20),y=a(288),S=a(119),q=a(2),k=Object(r.a)(j.a)((function(){return{}})),P=Object(r.a)(g.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),A=window.localStorage.getItem("accessToken"),N=function(){var e=Object(s.useState)({date:new Date}),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(s.useState)(!1),j=Object(u.a)(i,2),N=j[0],E=j[1],T=Object(s.useState)([]),_=Object(u.a)(T,2),I=_[0],L=_[1],M=Object(s.useState)(null),B=Object(u.a)(M,2),H=B[0],z=B[1],D=N&&0===I.length,F=Object(C.f)();Object(s.useEffect)((function(){var e=!0;if(D)return Object(l.a)(Object(o.a)().mark((function t(){var a,n;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("/hospital",{headers:{"Content-Type":"application/json"}});case 2:a=t.sent,n=a.data.hospitals,e&&L(n);case 5:case"end":return t.stop()}}),t)})))(),function(){e=!1}}),[D,I]),Object(s.useEffect)((function(){N||L([])}),[N]);var R=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){var a;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("/users",{name:t.target.username.value,surname:t.target.surname.value,role:t.target.role.value,password:t.target.password.value,company:H.name,company_id:H.hospital_id,is_active:t.target.userstatus.value,phone:t.target.mobile.value,email:t.target.email.value,created_date:new Date,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(A)}});case 3:a=e.sent,"success"===a.data.status&&F("/service_provider/user"),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),V=function(e){e.persist(),r(Object(c.a)(Object(c.a)({},a),{},Object(n.a)({},e.target.name,e.target.value)))},J=a.username,U=a.mobile,W=a.surname,G=a.password,K=a.confirmPassword,Q=a.email,X=a.role,Y=a.isActive;return Object(q.jsx)("div",{children:Object(q.jsxs)(g.ValidatorForm,{onSubmit:R,onError:function(){return null},children:[Object(q.jsxs)(d.a,{container:!0,spacing:6,children:[Object(q.jsxs)(d.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(q.jsx)(P,{type:"text",name:"username",label:"Name",onChange:V,value:J||"",validators:["required","minStringLength:1","maxStringLength: 100"],errorMessages:["this field is required","this field requires 100 characters","this field requires 100 characters"]}),Object(q.jsx)(P,{type:"email",name:"email",label:"Email",value:Q||"",onChange:V,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),Object(q.jsx)(P,{name:"password",type:"password",label:"Password",value:G||"",onChange:V}),Object(q.jsx)(k,{open:N,options:I,loading:D,onChange:function(e,t){z(t)},id:"Hospital",onOpen:function(){return E(!0)},onClose:function(){return E(!1)},getOptionLabel:function(e){return e.name},isOptionEqualToValue:function(e,t){return e.name===t.name},renderInput:function(e){return Object(q.jsx)(P,Object(c.a)(Object(c.a)({},e),{},{fullWidth:!0,variant:"outlined",label:"Choose Hospital",InputProps:Object(c.a)(Object(c.a)({},e.InputProps),{},{endAdornment:Object(q.jsxs)(s.Fragment,{children:[D?Object(q.jsx)(b.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}}),Object(q.jsx)(S.a,{children:Object(q.jsxs)(m.a,{component:"fieldset",className:"formControl",children:[Object(q.jsx)(y.a,{component:"legend",children:"Would you like this user to be active"}),Object(q.jsxs)(p.a,{value:Y,name:"userstatus",className:"userstatus","aria-label":"User Status",onChange:V,children:[Object(q.jsx)(h.a,{value:!0,control:Object(q.jsx)(O.a,{}),label:"Active"}),Object(q.jsx)(h.a,{value:!1,control:Object(q.jsx)(O.a,{}),label:"None Active"})]})]})})]}),Object(q.jsxs)(d.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(q.jsx)(P,{type:"text",name:"surname",label:"Surname",onChange:V,value:W||"",validators:["required","minStringLength:1","maxStringLength: 100"],errorMessages:["this field is required","this field requires 100 characters","this field requires 100 characters"]}),Object(q.jsx)(P,{type:"text",name:"mobile",value:U||"",label:"Mobile Number",onChange:V,validators:["required"],errorMessages:["this field is required"]}),Object(q.jsx)(P,{type:"password",name:"confirmPassword",onChange:V,label:"Confirm Password",value:K||""}),Object(q.jsx)(S.a,{children:Object(q.jsxs)(m.a,{component:"fieldset",className:"formControl",children:[Object(q.jsx)(y.a,{component:"legend",children:"Role"}),Object(q.jsxs)(p.a,{value:X,name:"role",className:"Role","aria-label":"Role",onChange:V,children:[Object(q.jsx)(h.a,{value:"hospitals admin",control:Object(q.jsx)(O.a,{}),label:"Hospital Admin"}),Object(q.jsx)(h.a,{value:"hospitals staff",control:Object(q.jsx)(O.a,{}),label:"Hospital Staff"})]})]})})]})]}),Object(q.jsxs)(x.a,{color:"primary",variant:"contained",type:"submit",children:[Object(q.jsx)(f.a,{children:"send"}),Object(q.jsx)(v.i,{sx:{pl:1,textTransform:"capitalize"},children:"Submit"})]})]})})},E=Object(r.a)("div")((function(e){var t=e.theme;return Object(n.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})}));t.default=function(){return Object(q.jsx)(s.Fragment,{children:Object(q.jsx)(E,{className:"hospitals-add-user-form",children:Object(q.jsx)(i.k,{title:"Add User",children:Object(q.jsx)(N,{})})})})}}}]);