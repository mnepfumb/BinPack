(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[46],{354:function(e,t,a){"use strict";a(1);var r=a(2);t.a=function(e){var t=e.bgcolor,a=e.progress,i={height:e.height,width:"100%",backgroundColor:"whitesmoke",borderRadius:40,margin:50},n={height:"100%",width:"".concat(a,"%"),backgroundColor:t,borderRadius:40,textAlign:"right"};return Object(r.jsx)("div",{style:i,children:Object(r.jsx)("div",{style:n,children:Object(r.jsx)("span",{style:{padding:10,color:"black",fontWeight:900},children:"".concat(a,"%")})})})}},379:function(e,t,a){"use strict";var r=a(7),i=a(6),n=a(4),o=a(1),s=a(8),c=a(78),l=a(298),d=a(12),u=a(14),b=a(49),h=a(58);function p(e){return Object(b.a)("MuiFab",e)}var j=Object(h.a)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),m=a(5),x=a(2),g=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],f=Object(m.a)(l.a,{name:"MuiFab",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat(Object(d.a)(a.size))],"inherit"===a.color&&t.colorInherit,t[Object(d.a)(a.size)],t[a.color]]}})((function(e){var t,a,i,o=e.theme,s=e.ownerState;return Object(n.a)({},o.typography.button,(t={minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.text.primary:null==(a=(i=o.palette).getContrastText)?void 0:a.call(i,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"}},Object(r.a)(t,"&.".concat(j.focusVisible),{boxShadow:(o.vars||o).shadows[6]}),Object(r.a)(t,"&.".concat(j.disabled),{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}),t),"small"===s.size&&{width:40,height:40},"medium"===s.size&&{width:48,height:48},"extended"===s.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===s.variant&&"small"===s.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===s.variant&&"medium"===s.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===s.color&&{color:"inherit"})}),(function(e){var t=e.theme,a=e.ownerState;return Object(n.a)({},"inherit"!==a.color&&"default"!==a.color&&null!=(t.vars||t).palette[a.color]&&{color:(t.vars||t).palette[a.color].contrastText,backgroundColor:(t.vars||t).palette[a.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[a.color].main}}})})),v=o.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiFab"}),r=a.children,o=a.className,l=a.color,b=void 0===l?"default":l,h=a.component,j=void 0===h?"button":h,m=a.disabled,v=void 0!==m&&m,O=a.disableFocusRipple,w=void 0!==O&&O,y=a.focusVisibleClassName,k=a.size,z=void 0===k?"large":k,C=a.variant,R=void 0===C?"circular":C,S=Object(i.a)(a,g),N=Object(n.a)({},a,{color:b,component:j,disabled:v,disableFocusRipple:w,size:z,variant:R}),T=function(e){var t=e.color,a=e.variant,r=e.classes,i=e.size,n={root:["root",a,"size".concat(Object(d.a)(i)),"inherit"===t?"colorInherit":t]};return Object(c.a)(n,p,r)}(N);return Object(x.jsx)(f,Object(n.a)({className:Object(s.a)(T.root,o),component:j,disabled:v,focusRipple:!w,focusVisibleClassName:Object(s.a)(T.focusVisible,y),ownerState:N,ref:t},S,{children:r}))}));t.a=v},743:function(e,t,a){"use strict";a.r(t);var r=a(7),i=a(5),n=a(171),o=a(379),s=a(174),c=a(1),l=a(33),d=a(46),u=a(13),b=a(252),h=a(300),p=a(288),j=a(41),m=a(37),x=a(354),g=a(65),f=a(129),v=a(2),O=Object(i.a)(b.a)((function(e){var t=e.theme;return Object(r.a)({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",padding:"24px !important",background:t.palette.background.paper},t.breakpoints.down("sm"),{padding:"16px !important"})})),w=Object(i.a)(n.a)((function(e){var t=e.theme;return{display:"flex",flexWrap:"wrap",alignItems:"center","& small":{color:t.palette.text.secondary},"& .icon":{opacity:.6,fontSize:"44px",color:t.palette.primary.main}}})),y=Object(i.a)("h6")((function(e){return{margin:0,marginTop:"4px",fontSize:"14px",fontWeight:"500",color:e.theme.palette.primary.main}})),k=Object(i.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}})),z=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(f.a)().user;Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(Object(l.a)().mark((function e(){var t,a,n,o,s,c,d,u,b,h,p;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("accessToken"),e.prev=1,a="/users/".concat(i.id),e.next=5,g.a.get(a,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 5:if(n=e.sent,o=n.data,s=o.status,c=o.users,"success"!==s){e.next=19;break}return e.prev=8,d="/requisition/hospital?hospitalId="+c.company_id,e.next=12,g.a.get(d,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 12:u=e.sent,b=u.data,h=b.status,p=b.requisitions,"success"===h&&r(p),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(8);case 19:e.next=23;break;case 21:e.prev=21,e.t1=e.catch(1);case 23:case"end":return e.stop()}}),e,null,[[1,21],[8,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[i.id]);return Object(v.jsx)(h.a,{container:!0,sx:{mb:"24px",mt:2},sm:12,style:{gap:15},children:a.map((function(e,t){return Object(v.jsx)(h.a,{requisition:!0,xs:12,md:3,children:Object(v.jsx)(m.b,{state:{requisition:e},to:{pathname:"/netcare/hospital/view-requisitions-details",state:e},children:Object(v.jsxs)(O,{elevation:6,children:[Object(v.jsxs)(w,{children:[Object(v.jsx)(h.a,{item:!0,lg:9,md:8,sm:12,xs:12,sx:{mt:2},children:Object(v.jsx)(k,{children:e.requision_id})}),Object(v.jsx)(h.a,{item:!0,md:2,sm:12,xs:12,sx:{mt:2},children:(a=e.created_date,Math.round((Date.parse(new Date)-Date.parse(a))/864e5)>7?Object(v.jsx)(s.a,{className:"icon",style:{color:"#FF3D57"},children:"new_releases"}):Object(v.jsx)(s.a,{className:"icon",style:{color:"#08ad6c"},children:"offline_pin"}))}),Object(v.jsx)(p.a,{sx:{my:3}}),Object(v.jsxs)(n.a,{ml:"-5px",children:[Object(v.jsxs)(j.f,{children:["To: ",Object(v.jsx)("small",{children:e.serviceProviderName})]}),Object(v.jsxs)(j.f,{children:["WasteType: ",Object(v.jsx)("small",{children:e.wasteType})]}),Object(v.jsxs)(j.f,{children:["Requestor: ",Object(v.jsx)("small",{children:e.hospitalName})]}),Object(v.jsxs)(j.f,{children:["Colletion Date: ",Object(v.jsx)("small",{children:e.collection_Date})]}),Object(v.jsxs)(y,{children:["Status: ",e.status]})]})]}),Object(v.jsx)(n.a,{sx:{display:"flex",alignItems:"center",width:"100%",flexDirection:"column",marginTop:-3,marginBottom:-7},children:Object(v.jsx)(x.a,{bgcolor:"orange",progress:e.percentage.toString(),height:20})})]})})},t);var a}))})},C=a(120),R=a(21),S=Object(i.a)("div")((function(e){var t=e.theme;return Object(r.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})})),N=Object(i.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}})),T=Object(i.a)(n.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}}));t.default=function(){var e=Object(R.f)();return Object(v.jsx)(c.Fragment,{children:Object(v.jsx)(S,{className:"active-requisitions",children:Object(v.jsxs)(C.a,{children:[Object(v.jsxs)(T,{children:[Object(v.jsx)(N,{children:"Active Requisitions"}),Object(v.jsx)(o.a,{color:"primary","aria-label":"Add",className:"button",onClick:function(){return e("/netcare/hospital/add-requisitions")},children:Object(v.jsx)(s.a,{children:"add"})})]}),Object(v.jsx)(z,{})]})})})}}}]);