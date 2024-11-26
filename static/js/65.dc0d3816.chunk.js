(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[65],{742:function(e,t,a){"use strict";a.r(t);var i=a(7),r=a(5),s=a(1),n=a(67),l=a(11),c=a(33),o=a(46),d=a(13),h=a(300),u=a(245),m=a(174),b=a(730),j=a(700),p=a(41),g=a(338),x=a(65),v=a(21),O=a(2),f=Object(r.a)(g.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),q=function(){var e=Object(v.e)(),t=Object(s.useState)({date:new Date}),a=Object(d.a)(t,2),r=a[0],n=a[1],q=Object(s.useState)(!1),S=Object(d.a)(q,2),w=S[0],y=S[1],k=Object(v.f)();function C(e,t){"clickaway"!==t&&y(!1)}var _=function(){var t=Object(o.a)(Object(c.a)().mark((function t(a){var i,r,s;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i=window.localStorage.getItem("accessToken"),r="/hospital/"+e.state.hospital._id,t.next=5,x.a.patch(r,{name:a.target.hospitalName.value,phone:a.target.mobile.value,email:a.target.email.value,address:a.target.address.value,registration_no:a.target.registration.value,tax_no:a.target.tax.value,client_id:"",created_date:e.state.hospital.created_date,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i)}});case 5:s=t.sent,"success"===s.data.status&&k("/netcare/admin/hospital"),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),L=function(e){e.persist(),n(Object(l.a)(Object(l.a)({},r),{},Object(i.a)({},e.target.name,e.target.value)))},N=r.hospitalName,M=void 0===N?e.state.hospital.name:N,T=r.mobile,B=void 0===T?e.state.hospital.phone:T,D=r.registration,E=void 0===D?e.state.hospital.registration_no:D,H=r.tax,z=void 0===H?e.state.hospital.tax_no:H,A=r.address,F=void 0===A?e.state.hospital.address:A,J=r.email,P=void 0===J?e.state.hospital.email:J;return Object(O.jsxs)("div",{children:[Object(O.jsxs)(g.ValidatorForm,{onSubmit:_,onError:function(){return null},children:[Object(O.jsxs)(h.a,{container:!0,spacing:6,children:[Object(O.jsxs)(h.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(O.jsx)(f,{type:"text",name:"hospitalName",label:"Hospital Name",onChange:L,value:M||"",validators:["required","minStringLength:1","maxStringLength: 100"],errorMessages:["this field is required","this field requires 100 characters","this field requires 100 characters"]}),Object(O.jsx)(f,{type:"email",name:"email",label:"Email",value:P||"",onChange:L,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),Object(O.jsx)(f,{type:"text",name:"address",label:"Address",onChange:L,value:F||"",errorMessages:["this field is required","this field requires 40 characters","this field requires 40 characters"],validators:["required","minStringLength:1","maxStringLength: 40"]})]}),Object(O.jsxs)(h.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(O.jsx)(f,{type:"text",name:"mobile",value:B||"",label:"Mobile Number",onChange:L,validators:["required"],errorMessages:["this field is required"]}),Object(O.jsx)(f,{type:"text",name:"registration",value:E||"",label:"Registration Number",onChange:L,validators:["required","minStringLength:1","maxStringLength: 20"],errorMessages:["this field is required","this field requires 20 characters","this field requires 20 characters"]}),Object(O.jsx)(f,{type:"text",name:"tax",value:z||"",label:"Tax Number",onChange:L,validators:["required","minStringLength:1","maxStringLength: 10"],errorMessages:["this field is required","this field requires 10 characters","this field requires 10 characters"]})]})]}),Object(O.jsxs)(u.a,{color:"primary",variant:"contained",type:"submit",children:[Object(O.jsx)(m.a,{children:"send"}),Object(O.jsx)(p.i,{sx:{pl:1,textTransform:"capitalize"},children:"Submit"})]})]}),Object(O.jsx)(b.a,{open:w,autoHideDuration:6e3,onClose:C,children:Object(O.jsx)(j.a,{onClose:C,severity:"success",sx:{width:"100%"},variant:"filled",children:"Hospital details have been updated success!"})})]})},S=Object(r.a)("div")((function(e){var t=e.theme;return Object(i.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})}));t.default=function(){return Object(O.jsx)(s.Fragment,{children:Object(O.jsx)(S,{className:"hospital-edit-form",children:Object(O.jsx)(n.k,{title:"Edit Hospital Details",children:Object(O.jsx)(q,{})})})})}}}]);