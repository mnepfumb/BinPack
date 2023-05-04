(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[90],{755:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n(5),r=n(171),c=n(245),s=n(300),o=n(41),u=n(1),l=n(120),d=n(11),j=n(33),p=n(46),b=n(13),f=n(709),O=n(252),x=n(288),m=n(251),h=n(174),v=n(332),g=n(65),y=n(2),w=Object(i.a)(f.a)((function(){return{}})),k=Object(i.a)(v.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),q=Object(i.a)(O.a)((function(e){var t=e.theme;return Object(a.a)({marginBottom:"24px",padding:"24px !important"},t.breakpoints.down("sm"),{paddingLeft:"16px !important"})})),S=Object(i.a)(r.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),_=Object(i.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),I=window.localStorage.getItem("accessToken"),A=[{label:"Awaiting Acceptance"},{label:"Assigned to Driver"},{label:"Waste Collected"},{label:"En Route to Sorting"},{label:"En Route to Landfill"},{label:"En Route to Scrapyard/Recycling Deport"},{label:"Sorting Facility"},{label:"Handed Over"},{label:"Waste Disposed"}],C=function(e){var t=e.requisition,n=Object(u.useState)(!1),a=Object(b.a)(n,2),i=a[0],s=a[1],l=Object(u.useState)([]),f=Object(b.a)(l,2),O=f[0],C=(f[1],i&&0===O.length),T=Object(u.useState)([]),z=Object(b.a)(T,2),B=z[0],E=z[1],R=Object(u.useState)(null),D=Object(b.a)(R,2),P=D[0],L=D[1],V=Object(u.useState)(null),W=Object(b.a)(V,2),F=W[0],J=W[1],M=Object(u.useState)(null),H=Object(b.a)(M,2),N=H[0],G=H[1];Object(u.useEffect)((function(){var e=[];if(C)return Object(p.a)(Object(j.a)().mark((function n(){var a,i,r,c,s;return Object(j.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a="/users/userfield?company_id="+t.serviceProviderId,n.next=4,g.a.get(a,{headers:{"Content-Type":"application/json"}});case 4:i=n.sent,r=i.data,c=r.status,s=r.users,"success"===c&&s.forEach((function(t){"driver"===t.role&&e.push({id:t._id,name:t.name+" "+t.surname})})),E(e),n.next=12;break;case 10:n.prev=10,n.t0=n.catch(0);case 12:case"end":return n.stop()}}),n,null,[[0,10]])})))(),function(){}}),[C,B,t.serviceProviderId]),Object(u.useEffect)((function(){var e=function(){var e=Object(p.a)(Object(j.a)().mark((function e(){var n,a,i,r,c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="/manifest/requisionId?requisition_id="+t.requision_id,e.next=4,g.a.get(n,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(I)}});case 4:a=e.sent,i=a.data,r=i.status,c=i.manifests,"success"===r&&L(c[0]),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e(),i||E([])}),[P._id,i,t.requision_id]);var K=function(){var e=Object(p.a)(Object(j.a)().mark((function e(){var n,a,i;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.patch("/manifest/"+P._id,{driver_id:F.id,status:N.label,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(I)}});case 3:n=e.sent,n.data.status,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:return e.prev=10,a="/requisition/"+t._id,e.next=14,g.a.patch(a,{driver_id:F.id,status:N.label,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(I)}});case 14:i=e.sent,i.data.status,e.next=21;break;case 19:e.prev=19,e.t1=e.catch(10);case 21:case"end":return e.stop()}}),e,null,[[0,8],[10,19]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)(q,{children:Object(y.jsxs)(v.ValidatorForm,{onSubmit:K,onError:function(){return null},children:[Object(y.jsxs)(S,{children:[Object(y.jsx)(_,{children:"Assign Driver"}),function(e){if(null!==e.driver_id||""!==e.driver_id)return Object(y.jsx)("small",{children:"A driver has already been assigned to this task."})}(t)]}),Object(y.jsx)(x.a,{sx:{my:3}}),Object(y.jsx)(r.a,{ml:"-5px",children:Object(y.jsx)(w,{value:N,options:A,onChange:function(e,t){t&&t.inputValue?G({label:t.inputValue}):G(t)},getOptionLabel:function(e){return e.label},renderInput:function(e){return Object(y.jsx)(k,Object(d.a)(Object(d.a)({},e),{},{label:"Manifest Status",variant:"outlined"}))}})}),Object(y.jsx)(r.a,{ml:"-5px",children:Object(y.jsx)(w,{open:i,options:B,loading:C,onChange:function(e,t){J(t)},id:"driver",onOpen:function(){return s(!0)},onClose:function(){return s(!1)},getOptionLabel:function(e){return e.name},isOptionEqualToValue:function(e,t){return e.name===t.name},renderInput:function(e){return Object(y.jsx)(k,Object(d.a)(Object(d.a)({},e),{},{fullWidth:!0,variant:"outlined",label:"Driver",InputProps:Object(d.a)(Object(d.a)({},e.InputProps),{},{endAdornment:Object(y.jsxs)(u.Fragment,{children:[C?Object(y.jsx)(m.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}),Object(y.jsxs)(c.a,{color:"primary",variant:"contained",type:"submit",children:[Object(y.jsx)(h.a,{children:"send"}),Object(y.jsx)(o.i,{sx:{pl:1,textTransform:"capitalize"},children:"Submit"})]})]})})},T=n(466),z=n(497),B=n(21),E=Object(i.a)(r.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),R=Object(i.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),D=Object(i.a)("div")((function(e){var t=e.theme;return Object(a.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})}));t.default=function(){var e=Object(B.e)(),t=Object(B.f)();return Object(y.jsx)(u.Fragment,{children:Object(y.jsx)(D,{className:"admin-analytics",children:Object(y.jsxs)(l.a,{children:[Object(y.jsxs)(E,{children:[Object(y.jsx)(R,{children:"Requisition Information"}),Object(y.jsx)(r.a,{ml:"-5px",style:{textAlign:"right"},children:Object(y.jsx)(c.a,{color:"primary",variant:"contained",onClick:function(){return t(-1)},children:Object(y.jsx)(o.i,{sx:{pl:1,textTransform:"capitalize"},children:"Back"})})})]}),Object(y.jsxs)(s.a,{container:!0,spacing:3,children:[Object(y.jsx)(s.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(y.jsx)(T.a,{requisition:e.state.requisition})}),Object(y.jsx)(s.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:function(e){if(e.acceptRequisitions)return Object(y.jsx)(C,{requisition:e})}(e.state.requisition)})]}),function(e){if(e.createManifest)return Object(y.jsx)(z.a,{requisition:e})}(e.state.requisition)]})})})}}}]);