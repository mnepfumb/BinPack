(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[49],{352:function(e,t,a){"use strict";a(1);var r=a(2);t.a=e=>{let{bgcolor:t,progress:a,height:i}=e;const s={height:i,width:"100%",backgroundColor:"whitesmoke",borderRadius:40,margin:50},o={height:"100%",width:"".concat(a,"%"),backgroundColor:t,textAlign:"left",alignItems:"center"};return Object(r.jsx)("div",{style:s,children:Object(r.jsx)("div",{style:o,children:Object(r.jsx)("span",{style:{color:"black",fontWeight:900,textAlign:"center"},children:"".concat(a,"%")})})})}},369:function(e,t,a){"use strict";var r=a(4),i=a(3),s=a(1),o=a(7),n=a(95),c=a(326),l=a(8),d=a(10),h=a(67),b=a(59);function p(e){return Object(b.a)("MuiFab",e)}var u=Object(h.a)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),m=a(5),j=a(80),x=a(2);const g=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],O=Object(m.a)(c.a,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>Object(j.a)(e)||"classes"===e,overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t["size".concat(Object(l.a)(a.size))],"inherit"===a.color&&t.colorInherit,t[Object(l.a)(a.size)],t[a.color]]}})((e=>{let{theme:t,ownerState:a}=e;var r,s;return Object(i.a)({},t.typography.button,{minHeight:36,transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(t.vars||t).zIndex.fab,boxShadow:(t.vars||t).shadows[6],"&:active":{boxShadow:(t.vars||t).shadows[12]},color:t.vars?t.vars.palette.text.primary:null==(r=(s=t.palette).getContrastText)?void 0:r.call(s,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],"&:hover":{backgroundColor:(t.vars||t).palette.grey.A100,"@media (hover: none)":{backgroundColor:(t.vars||t).palette.grey[300]},textDecoration:"none"},["&.".concat(u.focusVisible)]:{boxShadow:(t.vars||t).shadows[6]}},"small"===a.size&&{width:40,height:40},"medium"===a.size&&{width:48,height:48},"extended"===a.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===a.variant&&"small"===a.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===a.variant&&"medium"===a.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===a.color&&{color:"inherit"})}),(e=>{let{theme:t,ownerState:a}=e;return Object(i.a)({},"inherit"!==a.color&&"default"!==a.color&&null!=(t.vars||t).palette[a.color]&&{color:(t.vars||t).palette[a.color].contrastText,backgroundColor:(t.vars||t).palette[a.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[a.color].main}}})}),(e=>{let{theme:t}=e;return{["&.".concat(u.disabled)]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}}})),v=s.forwardRef((function(e,t){const a=Object(d.a)({props:e,name:"MuiFab"}),{children:s,className:c,color:h="default",component:b="button",disabled:u=!1,disableFocusRipple:m=!1,focusVisibleClassName:j,size:v="large",variant:f="circular"}=a,w=Object(r.a)(a,g),y=Object(i.a)({},a,{color:h,component:b,disabled:u,disableFocusRipple:m,size:v,variant:f}),z=(e=>{const{color:t,variant:a,classes:r,size:s}=e,o={root:["root",a,"size".concat(Object(l.a)(s)),"inherit"===t?"colorInherit":t]},c=Object(n.a)(o,p,r);return Object(i.a)({},r,c)})(y);return Object(x.jsx)(O,Object(i.a)({className:Object(o.a)(z.root,c),component:b,disabled:u,focusRipple:!m,focusVisibleClassName:Object(o.a)(z.focusVisible,j),ownerState:y,ref:t},w,{classes:z,children:s}))}));t.a=v},739:function(e,t,a){"use strict";a.r(t);var r=a(5),i=a(196),s=a(369),o=a(194),n=a(1),c=a(273),l=a(331),d=a(318),h=a(40),b=a(36),p=a(352),u=a(69),m=a(139),j=a(2);const x=Object(r.a)(c.a)((e=>{let{theme:t}=e;return{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",padding:"24px !important",background:t.palette.background.paper,[t.breakpoints.down("sm")]:{padding:"16px !important"}}})),g=Object(r.a)(i.a)((e=>{let{theme:t}=e;return{display:"flex",flexWrap:"wrap",alignItems:"center","& small":{color:t.palette.text.secondary},"& .icon":{opacity:.6,fontSize:"44px",color:t.palette.primary.main}}})),O=Object(r.a)("h6")((e=>{let{theme:t}=e;return{margin:0,marginTop:"4px",fontSize:"14px",fontWeight:"500",color:t.palette.primary.main}})),v=Object(r.a)("span")((()=>({fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"})));var f=()=>{const[e,t]=Object(n.useState)([]);let{user:a}=Object(m.a)();Object(n.useEffect)((()=>{(async()=>{const e=window.localStorage.getItem("accessToken");try{var r="/users/".concat(a.id);const o=await u.a.get(r,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}),{status:n,users:c}=o.data;if("success"===n)try{var i="/requisition/hospital?hospitalId="+c.company_id;const a=await u.a.get(i,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}),{status:r,requisitions:s}=a.data;"success"===r&&t(s)}catch(s){}}catch(s){}})()}),[a.id]);return Object(j.jsx)(l.a,{container:!0,sx:{mb:"24px",mt:2},sm:12,style:{gap:15},children:e.map(((e,t)=>{return Object(j.jsx)(l.a,{requisition:!0,xs:12,md:3,children:Object(j.jsx)(b.b,{state:{requisition:e},to:{pathname:"/netcare/hospital/view-requisitions-details",state:e},children:Object(j.jsxs)(x,{elevation:6,children:[Object(j.jsxs)(g,{children:[Object(j.jsx)(l.a,{item:!0,lg:9,md:8,sm:12,xs:12,sx:{mt:2},children:Object(j.jsx)(v,{children:e.requision_id})}),Object(j.jsx)(l.a,{item:!0,md:2,sm:12,xs:12,sx:{mt:2},children:(a=e.created_date,Math.round((Date.parse(new Date)-Date.parse(a))/864e5)>7?Object(j.jsx)(o.a,{className:"icon",style:{color:"#FF3D57"},children:"new_releases"}):Object(j.jsx)(o.a,{className:"icon",style:{color:"#08ad6c"},children:"offline_pin"}))}),Object(j.jsx)(d.a,{sx:{my:3}}),Object(j.jsxs)(i.a,{ml:"-5px",children:[Object(j.jsxs)(h.f,{children:["To: ",Object(j.jsx)("small",{children:e.serviceProviderName})]}),Object(j.jsxs)(h.f,{children:["WasteType: ",Object(j.jsx)("small",{children:e.wasteType})]}),Object(j.jsxs)(h.f,{children:["Requestor: ",Object(j.jsx)("small",{children:e.hospitalName})]}),Object(j.jsxs)(h.f,{children:["Colletion Date: ",Object(j.jsx)("small",{children:e.collection_Date})]}),Object(j.jsxs)(O,{children:["Status: ",e.status]})]})]}),Object(j.jsx)(i.a,{sx:{display:"flex",alignItems:"center",width:"100%",flexDirection:"column",marginTop:-3,marginBottom:-7},children:Object(j.jsx)(p.a,{bgcolor:"orange",progress:e.percentage.toString(),height:20})})]})})},t);var a}))})},w=a(133),y=a(9);const z=Object(r.a)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"}}})),k=Object(r.a)("span")((()=>({fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}))),C=Object(r.a)(i.a)((()=>({display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"})));t.default=()=>{const e=Object(y.o)();return Object(j.jsx)(n.Fragment,{children:Object(j.jsx)(z,{className:"active-requisitions",children:Object(j.jsxs)(w.a,{children:[Object(j.jsxs)(C,{children:[Object(j.jsx)(k,{children:"Active Requisitions"}),Object(j.jsx)(s.a,{color:"primary","aria-label":"Add",className:"button",onClick:()=>e("/netcare/hospital/add-requisitions"),children:Object(j.jsx)(o.a,{children:"add"})})]}),Object(j.jsx)(f,{})]})})})}}}]);