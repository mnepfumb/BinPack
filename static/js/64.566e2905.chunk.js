(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[64],{738:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(5),s=a(1),i=a(67),o=a(11),c=a(33),l=a(46),u=a(13),j=a(707),b=a(251),d=a(300),m=a(247),O=a(672),p=a(496),h=a(697),v=a(245),x=a(174),g=a(41),f=a(332),S=a(65),C=a(289),y=a(120),q=a(21),w=a(2),k=Object(r.a)(j.a)((function(){return{}})),P=Object(r.a)(f.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),_=function(){var e=Object(q.e)(),t=Object(s.useState)({date:new Date}),a=Object(u.a)(t,2),r=a[0],i=a[1],j=Object(s.useState)(!1),_=Object(u.a)(j,2),A=_[0],I=_[1],E=Object(s.useState)([e.state.user.company]),N=Object(u.a)(E,2),T=N[0],L=N[1],V=Object(s.useState)([]),M=Object(u.a)(V,2),U=M[0],z=(M[1],Object(s.useState)(null)),B=Object(u.a)(z,2),D=B[0],F=B[1],H=Object(s.useState)(null),R=Object(u.a)(H,2),W=R[0],J=R[1],G=A&&0===T.length,K=Object(q.f)();Object(s.useEffect)((function(){var e=!0;if(G)return Object(l.a)(Object(c.a)().mark((function t(){var a,n;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.get("/hospital",{headers:{"Content-Type":"application/json"}});case 2:a=t.sent,n=a.data.hospitals,console.log(n),e&&(console.log(n),L(n));case 6:case"end":return t.stop()}}),t)})))(),function(){e=!1}}),[G,T]),Object(s.useEffect)((function(){A||L([])}),[A]);var Q=function(){var t=Object(l.a)(Object(c.a)().mark((function t(a){var n,r,s,i,o,l;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.user.is_active,a.target.userstatus.value&&(n=a.target.userstatus.value),r="",s="",void 0!==D?(r=D.name,s=D.hospital_id):null!==W&&(r=W.name,s=W.company_id),t.prev=5,i=window.localStorage.getItem("accessToken"),console.log("location.state.user._id: "+e.state.user._id),o="/users/"+e.state.user._id,console.log("url: "+o),t.next=12,S.a.patch(o,{name:a.target.username.value,surname:a.target.surname.value,role:a.target.role.value,company:r,company_id:s,is_active:n,phone:a.target.mobile.value,email:a.target.email.value,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i)}});case 12:l=t.sent,"success"===l.data.status&&K("/netcare/admin/user"),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(5),console.log("error: "+t.t0);case 20:case"end":return t.stop()}}),t,null,[[5,17]])})));return function(e){return t.apply(this,arguments)}}(),X=function(e,t){console.log("newValue"),console.log(t),F(t)},Y=function(e,t){console.log("newValue"),console.log(t),J(t)},Z=function(e){e.persist(),i(Object(o.a)(Object(o.a)({},r),{},Object(n.a)({},e.target.name,e.target.value)))},$=r.username,ee=void 0===$?e.state.user.name:$,te=r.mobile,ae=void 0===te?e.state.user.phone:te,ne=r.surname,re=void 0===ne?e.state.user.surname:ne,se=r.email,ie=void 0===se?e.state.user.email:se,oe=r.role,ce=void 0===oe?e.state.user.role:oe,le=r.isActive;return Object(w.jsx)("div",{children:Object(w.jsxs)(f.ValidatorForm,{onSubmit:Q,onError:function(){return null},children:[Object(w.jsxs)(d.a,{container:!0,spacing:6,children:[Object(w.jsxs)(d.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(w.jsx)(P,{type:"text",name:"username",label:"Name",onChange:Z,value:ee||"",validators:["required","minStringLength:1","maxStringLength: 100"],errorMessages:["this field is required","this field requires 100 characters","this field requires 100 characters"]}),Object(w.jsx)(P,{type:"email",name:"email",label:"Email",value:ie||"",onChange:Z,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),Object(w.jsx)(y.a,{children:Object(w.jsxs)(m.a,{component:"fieldset",className:"formControl",children:[Object(w.jsxs)(C.a,{component:"legend",children:["Would you like this user to be active: ",e.state.user.is_active.toString()]}),Object(w.jsxs)(O.a,{value:le,name:"userstatus",className:"userstatus","aria-label":"User Status",onChange:Z,children:[Object(w.jsx)(p.a,{value:!0,control:Object(w.jsx)(h.a,{}),label:"Active"}),Object(w.jsx)(p.a,{value:!1,control:Object(w.jsx)(h.a,{}),label:"None Active"})]})]})})]}),Object(w.jsxs)(d.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(w.jsx)(P,{type:"text",name:"surname",label:"Surname",onChange:Z,value:re||"",validators:["required","minStringLength:1","maxStringLength: 100"],errorMessages:["this field is required","this field requires 100 characters","this field requires 100 characters"]}),Object(w.jsx)(P,{type:"text",name:"mobile",value:ae||"",label:"Mobile Number",onChange:Z,validators:["required"],errorMessages:["this field is required"]}),Object(w.jsxs)(y.a,{children:[Object(w.jsxs)(m.a,{component:"fieldset",className:"formControl",children:[Object(w.jsx)(C.a,{component:"legend",children:"Role"}),Object(w.jsxs)(O.a,{value:ce,name:"role",className:"Role","aria-label":"Role",onChange:Z,children:[Object(w.jsx)(p.a,{value:"admin",control:Object(w.jsx)(h.a,{}),label:"Admin User"}),Object(w.jsx)(p.a,{value:"hospital",control:Object(w.jsx)(h.a,{}),label:"Hospital User"}),Object(w.jsx)(p.a,{value:"service provider",control:Object(w.jsx)(h.a,{}),label:"Service Provider User"}),Object(w.jsx)(p.a,{value:"driver",control:Object(w.jsx)(h.a,{}),label:"Driver"})]})]}),Object(w.jsx)(d.a,{children:function(e){return"hospital"===e?Object(w.jsx)(k,{open:A,options:T,loading:G,onChange:X,id:"Hospital",onOpen:function(){return I(!0)},onClose:function(){return I(!1)},getOptionLabel:function(e){return e.name},isOptionEqualToValue:function(e,t){return e.name===t.name},renderInput:function(e){return Object(w.jsx)(P,Object(o.a)(Object(o.a)({},e),{},{fullWidth:!0,variant:"outlined",label:"Choose Hospital",InputProps:Object(o.a)(Object(o.a)({},e.InputProps),{},{endAdornment:Object(w.jsxs)(s.Fragment,{children:[G?Object(w.jsx)(b.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}}):"service provider"===e||"driver"===e?Object(w.jsx)(k,{open:A,options:U,loading:G,onChange:Y,id:"company",onOpen:function(){return I(!0)},onClose:function(){return I(!1)},getOptionLabel:function(e){return e.name},isOptionEqualToValue:function(e,t){return e.name===t.name},renderInput:function(e){return Object(w.jsx)(P,Object(o.a)(Object(o.a)({},e),{},{fullWidth:!0,variant:"outlined",label:"Choose Service Provider",InputProps:Object(o.a)(Object(o.a)({},e.InputProps),{},{endAdornment:Object(w.jsxs)(s.Fragment,{children:[G?Object(w.jsx)(b.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}}):void 0}(ce)})]})]})]}),Object(w.jsxs)(v.a,{color:"primary",variant:"contained",type:"submit",children:[Object(w.jsx)(x.a,{children:"send"}),Object(w.jsx)(g.i,{sx:{pl:1,textTransform:"capitalize"},children:"Submit"})]})]})})},A=Object(r.a)("div")((function(e){var t=e.theme;return Object(n.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})}));t.default=function(){return Object(w.jsx)(s.Fragment,{children:Object(w.jsx)(A,{className:"hospital-edit-user-form",children:Object(w.jsx)(i.k,{title:"Edit User Details",children:Object(w.jsx)(_,{})})})})}}}]);