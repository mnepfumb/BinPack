(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[60],{736:function(e,t,a){"use strict";a.r(t);var r=a(7),i=a(5),s=a(1),n=a(67),c=a(11),o=a(33),l=a(47),d=a(13),m=a(300),u=a(245),h=a(174),b=a(728),j=a(702),g=a(41),p=a(332),x=a(66),v=a(21),O=a(2),f=Object(i.a)(p.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),y=function(){var e=Object(v.e)();console.log(e.state.company);var t=Object(s.useState)({date:new Date}),a=Object(d.a)(t,2),i=a[0],n=a[1],y=Object(s.useState)(!1),q=Object(d.a)(y,2),S=q[0],w=q[1],C=Object(v.f)();function _(e,t){"clickaway"!==t&&w(!1)}var k=function(){var t=Object(l.a)(Object(o.a)().mark((function t(a){var r,i,s,n,c,l;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=window.localStorage.getItem("accessToken"),console.log("accessToken: "+r),i="/company/"+e.state.company._id,t.next=6,x.a.patch(i,{name:a.target.companyName.value,phone:a.target.mobile.value,email:a.target.email.value,address:a.target.address.value,registration_no:a.target.registration.value,tax_no:a.target.tax.value,client_id:"",created_date:e.state.company.created_date,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}});case 6:s=t.sent,n=s.data,c=n.status,l=n.companies,console.log("companies: "+l),"success"===c&&C("/netcare/admin/service-provider"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log("error: "+t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}(),L=function(e){e.persist(),n(Object(c.a)(Object(c.a)({},i),{},Object(r.a)({},e.target.name,e.target.value)))},N=i.companyName,M=void 0===N?e.state.company.name:N,T=i.mobile,D=void 0===T?e.state.company.phone:T,E=i.registration,z=void 0===E?e.state.company.registration_no:E,A=i.tax,B=void 0===A?e.state.company.tax_no:A,F=i.address,J=void 0===F?e.state.company.address:F,P=i.email,V=void 0===P?e.state.company.email:P;return Object(O.jsxs)("div",{children:[Object(O.jsxs)(p.ValidatorForm,{onSubmit:k,onError:function(){return null},children:[Object(O.jsxs)(m.a,{container:!0,spacing:6,children:[Object(O.jsxs)(m.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(O.jsx)(f,{type:"text",name:"companyName",label:"Company Name",onChange:L,value:M||"",validators:["required","minStringLength:1","maxStringLength: 100"],errorMessages:["this field is required","this field requires 100 characters","this field requires 100 characters"]}),Object(O.jsx)(f,{type:"email",name:"email",label:"Email",value:V||"",onChange:L,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),Object(O.jsx)(f,{type:"text",name:"address",label:"Address",onChange:L,value:J||"",errorMessages:["this field is required","this field requires 40 characters","this field requires 40 characters"],validators:["required","minStringLength:1","maxStringLength: 40"]})]}),Object(O.jsxs)(m.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(O.jsx)(f,{type:"text",name:"mobile",value:D||"",label:"Mobile Number",onChange:L,validators:["required"],errorMessages:["this field is required"]}),Object(O.jsx)(f,{type:"text",name:"registration",value:z||"",label:"Registration Number",onChange:L,validators:["required","minStringLength:1","maxStringLength: 20"],errorMessages:["this field is required","this field requires 20 characters","this field requires 20 characters"]}),Object(O.jsx)(f,{type:"text",name:"tax",value:B||"",label:"Tax Number",onChange:L,validators:["required","minStringLength:1","maxStringLength: 10"],errorMessages:["this field is required","this field requires 10 characters","this field requires 10 characters"]})]})]}),Object(O.jsxs)(u.a,{color:"primary",variant:"contained",type:"submit",children:[Object(O.jsx)(h.a,{children:"send"}),Object(O.jsx)(g.i,{sx:{pl:1,textTransform:"capitalize"},children:"Submit"})]})]}),Object(O.jsx)(b.a,{open:S,autoHideDuration:6e3,onClose:_,children:Object(O.jsx)(j.a,{onClose:_,severity:"success",sx:{width:"100%"},variant:"filled",children:"Service Provider details have been updated success!"})})]})},q=Object(i.a)("div")((function(e){var t=e.theme;return Object(r.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})}));t.default=function(){return Object(O.jsx)(s.Fragment,{children:Object(O.jsx)(q,{className:"service-provider-edit-form",children:Object(O.jsx)(n.l,{title:"Edit Service Provider Details",children:Object(O.jsx)(y,{})})})})}}}]);