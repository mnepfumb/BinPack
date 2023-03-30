(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[87],{754:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a(5),r=a(1),o=a(67),c=a(11),i=a(33),l=a(46),u=a(13),j=a(707),d=a(300),b=a(251),m=a(247),p=a(672),h=a(496),O=a(697),g=a(245),x=a(174),f=a(41),v=a(332),w=a(65),C=a(21),y=a(289),S=a(120),q=a(2),k=Object(s.a)(j.a)((function(){return{}})),P=Object(s.a)(v.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),A=window.localStorage.getItem("accessToken"),N=function(){var e=Object(r.useState)({date:new Date}),t=Object(u.a)(e,2),a=t[0],s=t[1],o=Object(r.useState)(!1),j=Object(u.a)(o,2),N=j[0],T=j[1],_=Object(r.useState)([]),E=Object(u.a)(_,2),I=E[0],L=E[1],M=Object(r.useState)(null),B=Object(u.a)(M,2),H=B[0],V=B[1],z=N&&0===I.length,D=Object(C.f)();Object(r.useEffect)((function(){var e=!0;if(z)return Object(l.a)(Object(i.a)().mark((function t(){var a,n;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("/hospital",{headers:{"Content-Type":"application/json"}});case 2:a=t.sent,n=a.data.hospitals,console.log(n),e&&(console.log(n),L(n));case 6:case"end":return t.stop()}}),t)})))(),function(){e=!1}}),[z,I]),Object(r.useEffect)((function(){N||L([])}),[N]);var F=function(){var e=Object(l.a)(Object(i.a)().mark((function e(t){var a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.target.role.value),console.log(H.name),console.log(H.hospital_id),console.log(t.target.userstatus.value),e.prev=4,console.log("accessToken: "+A),e.next=8,w.a.post("/users",{name:t.target.username.value,surname:t.target.surname.value,role:t.target.role.value,password:t.target.password.value,company:H.name,company_id:H.hospital_id,is_active:t.target.userstatus.value,phone:t.target.mobile.value,email:t.target.email.value,created_date:new Date,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(A)}});case 8:a=e.sent,"success"===a.data.status&&D("/service_provider/user"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log("error: "+e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),R=function(e){e.persist(),s(Object(c.a)(Object(c.a)({},a),{},Object(n.a)({},e.target.name,e.target.value)))},J=a.username,U=a.mobile,W=a.surname,G=a.password,K=a.confirmPassword,Q=a.email,X=a.role,Y=a.isActive;return Object(q.jsx)("div",{children:Object(q.jsxs)(v.ValidatorForm,{onSubmit:F,onError:function(){return null},children:[Object(q.jsxs)(d.a,{container:!0,spacing:6,children:[Object(q.jsxs)(d.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(q.jsx)(P,{type:"text",name:"username",label:"Name",onChange:R,value:J||"",validators:["required","minStringLength:1","maxStringLength: 100"],errorMessages:["this field is required","this field requires 100 characters","this field requires 100 characters"]}),Object(q.jsx)(P,{type:"email",name:"email",label:"Email",value:Q||"",onChange:R,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),Object(q.jsx)(P,{name:"password",type:"password",label:"Password",value:G||"",onChange:R}),Object(q.jsx)(k,{open:N,options:I,loading:z,onChange:function(e,t){console.log("newValue"),console.log(t),V(t)},id:"Hospital",onOpen:function(){return T(!0)},onClose:function(){return T(!1)},getOptionLabel:function(e){return e.name},isOptionEqualToValue:function(e,t){return e.name===t.name},renderInput:function(e){return Object(q.jsx)(P,Object(c.a)(Object(c.a)({},e),{},{fullWidth:!0,variant:"outlined",label:"Choose Hospital",InputProps:Object(c.a)(Object(c.a)({},e.InputProps),{},{endAdornment:Object(q.jsxs)(r.Fragment,{children:[z?Object(q.jsx)(b.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}}),Object(q.jsx)(S.a,{children:Object(q.jsxs)(m.a,{component:"fieldset",className:"formControl",children:[Object(q.jsx)(y.a,{component:"legend",children:"Would you like this user to be active"}),Object(q.jsxs)(p.a,{value:Y,name:"userstatus",className:"userstatus","aria-label":"User Status",onChange:R,children:[Object(q.jsx)(h.a,{value:!0,control:Object(q.jsx)(O.a,{}),label:"Active"}),Object(q.jsx)(h.a,{value:!1,control:Object(q.jsx)(O.a,{}),label:"None Active"})]})]})})]}),Object(q.jsxs)(d.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(q.jsx)(P,{type:"text",name:"surname",label:"Surname",onChange:R,value:W||"",validators:["required","minStringLength:1","maxStringLength: 100"],errorMessages:["this field is required","this field requires 100 characters","this field requires 100 characters"]}),Object(q.jsx)(P,{type:"text",name:"mobile",value:U||"",label:"Mobile Number",onChange:R,validators:["required"],errorMessages:["this field is required"]}),Object(q.jsx)(P,{type:"password",name:"confirmPassword",onChange:R,label:"Confirm Password",value:K||""}),Object(q.jsx)(S.a,{children:Object(q.jsxs)(m.a,{component:"fieldset",className:"formControl",children:[Object(q.jsx)(y.a,{component:"legend",children:"Role"}),Object(q.jsxs)(p.a,{value:X,name:"role",className:"Role","aria-label":"Role",onChange:R,children:[Object(q.jsx)(h.a,{value:"hospitals admin",control:Object(q.jsx)(O.a,{}),label:"Hospital Admin"}),Object(q.jsx)(h.a,{value:"hospitals staff",control:Object(q.jsx)(O.a,{}),label:"Hospital Staff"})]})]})})]})]}),Object(q.jsxs)(g.a,{color:"primary",variant:"contained",type:"submit",children:[Object(q.jsx)(x.a,{children:"send"}),Object(q.jsx)(f.i,{sx:{pl:1,textTransform:"capitalize"},children:"Submit"})]})]})})},T=Object(s.a)("div")((function(e){var t=e.theme;return Object(n.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})}));t.default=function(){return Object(q.jsx)(r.Fragment,{children:Object(q.jsx)(T,{className:"hospitals-add-user-form",children:Object(q.jsx)(o.k,{title:"Add User",children:Object(q.jsx)(N,{})})})})}}}]);