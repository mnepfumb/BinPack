(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[68],{739:function(e,t,a){"use strict";a.r(t);var r=a(7),i=a(5),s=a(1),n=a(67),c=a(11),o=a(33),d=a(46),l=a(13),u=a(300),m=a(245),h=a(174),b=a(730),j=a(700),p=a(41),g=a(338),v=a(65),x=a(21),O=a(2),f=Object(i.a)(g.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),y=function(){var e=Object(x.e)(),t=Object(s.useState)({date:new Date}),a=Object(l.a)(t,2),i=a[0],n=a[1],y=Object(s.useState)(!1),q=Object(l.a)(y,2),S=q[0],w=q[1],k=Object(x.f)();function C(e,t){"clickaway"!==t&&w(!1)}var _=function(){var t=Object(d.a)(Object(o.a)().mark((function t(a){var r,i,s;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=window.localStorage.getItem("accessToken"),i="/company/"+e.state.company._id,t.next=5,v.a.patch(i,{name:a.target.companyName.value,phone:a.target.mobile.value,email:a.target.email.value,address:a.target.address.value,registration_no:a.target.registration.value,tax_no:a.target.tax.value,client_id:"",created_date:e.state.company.created_date,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}});case 5:s=t.sent,"success"===s.data.status&&k("/netcare/admin/service-provider"),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),L=function(e){e.persist(),n(Object(c.a)(Object(c.a)({},i),{},Object(r.a)({},e.target.name,e.target.value)))},N=i.companyName,M=void 0===N?e.state.company.name:N,T=i.mobile,B=void 0===T?e.state.company.phone:T,D=i.registration,E=void 0===D?e.state.company.registration_no:D,P=i.tax,z=void 0===P?e.state.company.tax_no:P,A=i.address,F=void 0===A?e.state.company.address:A,J=i.email,V=void 0===J?e.state.company.email:J;return Object(O.jsxs)("div",{children:[Object(O.jsxs)(g.ValidatorForm,{onSubmit:_,onError:function(){return null},children:[Object(O.jsxs)(u.a,{container:!0,spacing:6,children:[Object(O.jsxs)(u.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(O.jsx)(f,{type:"text",name:"companyName",label:"Company Name",onChange:L,value:M||"",validators:["required","minStringLength:1","maxStringLength: 100"],errorMessages:["this field is required","this field requires 100 characters","this field requires 100 characters"]}),Object(O.jsx)(f,{type:"email",name:"email",label:"Email",value:V||"",onChange:L,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),Object(O.jsx)(f,{type:"text",name:"address",label:"Address",onChange:L,value:F||"",errorMessages:["this field is required","this field requires 40 characters","this field requires 40 characters"],validators:["required","minStringLength:1","maxStringLength: 40"]})]}),Object(O.jsxs)(u.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(O.jsx)(f,{type:"text",name:"mobile",value:B||"",label:"Mobile Number",onChange:L,validators:["required"],errorMessages:["this field is required"]}),Object(O.jsx)(f,{type:"text",name:"registration",value:E||"",label:"Registration Number",onChange:L,validators:["required","minStringLength:1","maxStringLength: 20"],errorMessages:["this field is required","this field requires 20 characters","this field requires 20 characters"]}),Object(O.jsx)(f,{type:"text",name:"tax",value:z||"",label:"Tax Number",onChange:L,validators:["required","minStringLength:1","maxStringLength: 10"],errorMessages:["this field is required","this field requires 10 characters","this field requires 10 characters"]})]})]}),Object(O.jsxs)(m.a,{color:"primary",variant:"contained",type:"submit",children:[Object(O.jsx)(h.a,{children:"send"}),Object(O.jsx)(p.i,{sx:{pl:1,textTransform:"capitalize"},children:"Submit"})]})]}),Object(O.jsx)(b.a,{open:S,autoHideDuration:6e3,onClose:C,children:Object(O.jsx)(j.a,{onClose:C,severity:"success",sx:{width:"100%"},variant:"filled",children:"Service Provider details have been updated success!"})})]})},q=Object(i.a)("div")((function(e){var t=e.theme;return Object(r.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})}));t.default=function(){return Object(O.jsx)(s.Fragment,{children:Object(O.jsx)(q,{className:"service-provider-edit-form",children:Object(O.jsx)(n.k,{title:"Edit Service Provider Details",children:Object(O.jsx)(y,{})})})})}}}]);