(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[63],{741:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(5),s=a(1),i=a(67),c=a(11),o=a(33),l=a(47),u=a(13),j=a(710),b=a(251),d=a(300),m=a(247),O=a(674),p=a(501),h=a(700),v=a(245),x=a(174),g=a(41),f=a(332),S=a(66),C=a(289),q=a(120),w=a(21),y=a(2),_=Object(r.a)(j.a)((function(){return{}})),A=Object(r.a)(f.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),I=function(){var e=Object(w.e)(),t=Object(s.useState)({date:new Date}),a=Object(u.a)(t,2),r=a[0],i=a[1],j=Object(s.useState)(!1),I=Object(u.a)(j,2),k=I[0],E=I[1],N=Object(s.useState)([e.state.user.company]),P=Object(u.a)(N,2),L=P[0],T=P[1],V=Object(s.useState)([]),M=Object(u.a)(V,2),U=M[0],z=(M[1],Object(s.useState)(null)),D=Object(u.a)(z,2),F=D[0],H=D[1],R=Object(s.useState)(null),W=Object(u.a)(R,2),B=W[0],J=W[1],G=k&&0===L.length,K=Object(w.f)();Object(s.useEffect)((function(){var e=!0;if(G)return Object(l.a)(Object(o.a)().mark((function t(){var a,n;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.get("/hospital");case 2:a=t.sent,n=a.data.hospitals,console.log(n),e&&(console.log(n),T(n));case 6:case"end":return t.stop()}}),t)})))(),function(){e=!1}}),[G,L]),Object(s.useEffect)((function(){k||T([])}),[k]);var Q=function(){var t=Object(l.a)(Object(o.a)().mark((function t(a){var n,r,s,i,c,l;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.user.is_active,a.target.userstatus.value&&(n=a.target.userstatus.value),r="",s="",void 0!==F?(r=F.name,s=F.hospital_id):null!==B&&(r=B.name,s=B.company_id),t.prev=5,i=window.localStorage.getItem("accessToken"),console.log("location.state.user._id: "+e.state.user._id),c="/users/"+e.state.user._id,console.log("url: "+c),t.next=12,S.a.patch(c,{name:a.target.username.value,surname:a.target.surname.value,role:a.target.role.value,company:r,company_id:s,is_active:n,phone:a.target.mobile.value,email:a.target.email.value,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i)}});case 12:l=t.sent,"success"===l.data.status&&K("/netcare/admin/user"),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(5),console.log("error: "+t.t0);case 20:case"end":return t.stop()}}),t,null,[[5,17]])})));return function(e){return t.apply(this,arguments)}}(),X=function(e,t){console.log("newValue"),console.log(t),H(t)},Y=function(e,t){console.log("newValue"),console.log(t),J(t)},Z=function(e){e.persist(),i(Object(c.a)(Object(c.a)({},r),{},Object(n.a)({},e.target.name,e.target.value)))},$=r.username,ee=void 0===$?e.state.user.name:$,te=r.mobile,ae=void 0===te?e.state.user.phone:te,ne=r.surname,re=void 0===ne?e.state.user.surname:ne,se=r.email,ie=void 0===se?e.state.user.email:se,ce=r.role,oe=void 0===ce?e.state.user.role:ce,le=r.isActive;return Object(y.jsx)("div",{children:Object(y.jsxs)(f.ValidatorForm,{onSubmit:Q,onError:function(){return null},children:[Object(y.jsxs)(d.a,{container:!0,spacing:6,children:[Object(y.jsxs)(d.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(y.jsx)(A,{type:"text",name:"username",label:"Name",onChange:Z,value:ee||"",validators:["required","minStringLength:1","maxStringLength: 100"],errorMessages:["this field is required","this field requires 100 characters","this field requires 100 characters"]}),Object(y.jsx)(A,{type:"email",name:"email",label:"Email",value:ie||"",onChange:Z,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),Object(y.jsx)(q.a,{children:Object(y.jsxs)(m.a,{component:"fieldset",className:"formControl",children:[Object(y.jsxs)(C.a,{component:"legend",children:["Would you like this user to be active: ",e.state.user.is_active.toString()]}),Object(y.jsxs)(O.a,{value:le,name:"userstatus",className:"userstatus","aria-label":"User Status",onChange:Z,children:[Object(y.jsx)(p.a,{value:!0,control:Object(y.jsx)(h.a,{}),label:"Active"}),Object(y.jsx)(p.a,{value:!1,control:Object(y.jsx)(h.a,{}),label:"None Active"})]})]})})]}),Object(y.jsxs)(d.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(y.jsx)(A,{type:"text",name:"surname",label:"Surname",onChange:Z,value:re||"",validators:["required","minStringLength:1","maxStringLength: 100"],errorMessages:["this field is required","this field requires 100 characters","this field requires 100 characters"]}),Object(y.jsx)(A,{type:"text",name:"mobile",value:ae||"",label:"Mobile Number",onChange:Z,validators:["required"],errorMessages:["this field is required"]}),Object(y.jsxs)(q.a,{children:[Object(y.jsxs)(m.a,{component:"fieldset",className:"formControl",children:[Object(y.jsx)(C.a,{component:"legend",children:"Role"}),Object(y.jsxs)(O.a,{value:oe,name:"role",className:"Role","aria-label":"Role",onChange:Z,children:[Object(y.jsx)(p.a,{value:"admin",control:Object(y.jsx)(h.a,{}),label:"Admin User"}),Object(y.jsx)(p.a,{value:"hospital",control:Object(y.jsx)(h.a,{}),label:"Hospital User"}),Object(y.jsx)(p.a,{value:"service provider",control:Object(y.jsx)(h.a,{}),label:"Service Provider User"}),Object(y.jsx)(p.a,{value:"driver",control:Object(y.jsx)(h.a,{}),label:"Driver"})]})]}),Object(y.jsx)(d.a,{children:function(e){return"hospital"===e?Object(y.jsx)(_,{open:k,options:L,loading:G,onChange:X,id:"Hospital",onOpen:function(){return E(!0)},onClose:function(){return E(!1)},getOptionLabel:function(e){return e.name},isOptionEqualToValue:function(e,t){return e.name===t.name},renderInput:function(e){return Object(y.jsx)(A,Object(c.a)(Object(c.a)({},e),{},{fullWidth:!0,variant:"outlined",label:"Choose Hospital",InputProps:Object(c.a)(Object(c.a)({},e.InputProps),{},{endAdornment:Object(y.jsxs)(s.Fragment,{children:[G?Object(y.jsx)(b.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}}):"service provider"===e||"driver"===e?Object(y.jsx)(_,{open:k,options:U,loading:G,onChange:Y,id:"company",onOpen:function(){return E(!0)},onClose:function(){return E(!1)},getOptionLabel:function(e){return e.name},isOptionEqualToValue:function(e,t){return e.name===t.name},renderInput:function(e){return Object(y.jsx)(A,Object(c.a)(Object(c.a)({},e),{},{fullWidth:!0,variant:"outlined",label:"Choose Service Provider",InputProps:Object(c.a)(Object(c.a)({},e.InputProps),{},{endAdornment:Object(y.jsxs)(s.Fragment,{children:[G?Object(y.jsx)(b.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}}):void 0}(oe)})]})]})]}),Object(y.jsxs)(v.a,{color:"primary",variant:"contained",type:"submit",children:[Object(y.jsx)(x.a,{children:"send"}),Object(y.jsx)(g.i,{sx:{pl:1,textTransform:"capitalize"},children:"Submit"})]})]})})},k=Object(r.a)("div")((function(e){var t=e.theme;return Object(n.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})}));t.default=function(){return Object(y.jsx)(s.Fragment,{children:Object(y.jsx)(k,{className:"hospital-edit-user-form",children:Object(y.jsx)(i.l,{title:"Edit User Details",children:Object(y.jsx)(I,{})})})})}}}]);