(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[63],{737:function(e,t,a){"use strict";a.r(t);var r=a(7),i=a(5),s=a(1),n=a(67),c=a(11),l=a(33),d=a(46),o=a(13),u=a(727),m=a(700),h=a(300),b=a(245),j=a(174),g=a(41),x=a(332),p=a(65),v=a(21),O=a(2),f=Object(i.a)(x.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),q=function(){var e=Object(s.useState)({date:new Date}),t=Object(o.a)(e,2),a=t[0],i=t[1],n=Object(s.useState)(!1),q=Object(o.a)(n,2),y=q[0],S=q[1],w=Object(v.f)();function k(e,t){"clickaway"!==t&&S(!1)}var C=function(){var e=Object(d.a)(Object(l.a)().mark((function e(t){var a,r;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=window.localStorage.getItem("accessToken"),e.next=4,p.a.post("/company",{name:t.target.companyName.value,phone:t.target.mobile.value,email:t.target.email.value,address:t.target.address.value,registration_no:t.target.registration.value,tax_no:t.target.tax.value,client_id:"",created_date:new Date,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 4:r=e.sent,"success"===r.data.status&&(S(!0),w("/netcare/admin/service-provider")),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),L=function(e){e.persist(),i(Object(c.a)(Object(c.a)({},a),{},Object(r.a)({},e.target.name,e.target.value)))},N=a.companyName,M=a.mobile,T=a.registration,_=a.tax,B=a.address,D=a.email;return Object(O.jsxs)("div",{children:[Object(O.jsx)(u.a,{open:y,autoHideDuration:6e3,onClose:k,children:Object(O.jsx)(m.a,{onClose:k,severity:"success",sx:{width:"100%"},variant:"filled",children:"Service Provider has been added success!"})}),Object(O.jsxs)(x.ValidatorForm,{onSubmit:C,onError:function(){return null},children:[Object(O.jsxs)(h.a,{container:!0,spacing:6,children:[Object(O.jsxs)(h.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(O.jsx)(f,{type:"text",name:"companyName",label:"Company Name",onChange:L,value:N||"",validators:["required","minStringLength:1","maxStringLength: 100"],errorMessages:["this field is required","this field requires 100 characters","this field requires 100 characters"]}),Object(O.jsx)(f,{type:"email",name:"email",label:"Email",value:D||"",onChange:L,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),Object(O.jsx)(f,{type:"text",name:"address",label:"Address",onChange:L,value:B||"",errorMessages:["this field is required","this field requires 40 characters","this field requires 40 characters"],validators:["required","minStringLength:1","maxStringLength: 40"]})]}),Object(O.jsxs)(h.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(O.jsx)(f,{type:"text",name:"mobile",value:M||"",label:"Mobile Number",onChange:L,validators:["required"],errorMessages:["this field is required"]}),Object(O.jsx)(f,{type:"text",name:"registration",value:T||"",label:"Registration Number",onChange:L,validators:["required","minStringLength:1","maxStringLength: 20"],errorMessages:["this field is required","this field requires 20 characters","this field requires 20 characters"]}),Object(O.jsx)(f,{type:"text",name:"tax",value:_||"",label:"Tax Number",onChange:L,validators:["required","minStringLength:1","maxStringLength: 10"],errorMessages:["this field is required","this field requires 10 characters","this field requires 10 characters"]})]})]}),Object(O.jsxs)(b.a,{color:"primary",variant:"contained",type:"submit",children:[Object(O.jsx)(j.a,{children:"send"}),Object(O.jsx)(g.i,{sx:{pl:1,textTransform:"capitalize"},children:"Submit"})]})]})]})},y=Object(i.a)("div")((function(e){var t=e.theme;return Object(r.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})}));t.default=function(){return Object(O.jsx)(s.Fragment,{children:Object(O.jsx)(y,{className:"service-provider-add-form",children:Object(O.jsx)(n.k,{title:"Add Service Provider",children:Object(O.jsx)(q,{})})})})}}}]);