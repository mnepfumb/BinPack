(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[49],{354:function(e,t,n){"use strict";n(1);var i=n(2);t.a=function(e){var t=e.bgcolor,n=e.progress,r={height:e.height,width:"100%",backgroundColor:"whitesmoke",borderRadius:40,margin:50},a={height:"100%",width:"".concat(n,"%"),backgroundColor:t,borderRadius:40,textAlign:"right"};return Object(i.jsx)("div",{style:r,children:Object(i.jsx)("div",{style:a,children:Object(i.jsx)("span",{style:{padding:10,color:"black",fontWeight:900},children:"".concat(n,"%")})})})}},741:function(e,t,n){"use strict";n.r(t);var i=n(7),r=n(5),a=n(171),s=n(1),c=n(33),o=n(46),l=n(13),d=n(252),j=n(174),p=n(300),u=n(288),m=n(41),h=n(37),b=n(354),x=n(65),g=n(129),f=n(2),O=Object(r.a)(d.a)((function(e){var t=e.theme;return Object(i.a)({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",padding:"24px !important",background:t.palette.background.paper},t.breakpoints.down("sm"),{padding:"16px !important"})})),v=Object(r.a)(a.a)((function(e){var t=e.theme;return{display:"flex",flexWrap:"wrap",alignItems:"center","& small":{color:t.palette.text.secondary},"& .icon":{opacity:.6,fontSize:"44px",color:t.palette.primary.main}}})),y=Object(r.a)("h6")((function(e){return{margin:0,marginTop:"4px",fontSize:"14px",fontWeight:"500",color:e.theme.palette.primary.main}})),w=Object(r.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}})),k=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(g.a)().user;Object(s.useEffect)((function(){var e=[],t=function(){var t=Object(o.a)(Object(c.a)().mark((function t(){var n,a,s,o,l,d;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=window.localStorage.getItem("accessToken"),console.log("user.email: "+r.id),a="/requisition/hospital?driver_id="+r.id,t.next=6,x.a.get(a,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 6:s=t.sent,o=s.data,l=o.status,d=o.requisitions,console.log("requisitions: "+d),"success"===l&&(d.forEach((function(t){console.log("user.role: "+t.status),"Waste Disposed"===t.status&&(console.log("user: "+t.name),e.push({requisition:t}))})),i(e)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log("error: "+t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();t()}),[r.id]);return Object(f.jsx)(p.a,{container:!0,sx:{mb:"24px",mt:2},sm:12,style:{gap:15},children:n.map((function(e,t){return Object(f.jsx)(p.a,{requisition:!0,xs:12,md:3,children:Object(f.jsx)(h.b,{state:{requisition:e},to:{pathname:"/netcare/service_provider/view-completed-requisitions-details",state:e},children:Object(f.jsxs)(O,{elevation:6,children:[Object(f.jsxs)(v,{children:[Object(f.jsx)(p.a,{item:!0,lg:9,md:8,sm:12,xs:12,sx:{mt:2},children:Object(f.jsx)(w,{children:e.requision_id})}),Object(f.jsx)(p.a,{item:!0,md:2,sm:12,xs:12,sx:{mt:2},children:(n=e.created_date,Math.round((Date.parse(new Date)-Date.parse(n))/864e5)>7?Object(f.jsx)(j.a,{className:"icon",style:{color:"#FF3D57"},children:"new_releases"}):Object(f.jsx)(j.a,{className:"icon",style:{color:"#08ad6c"},children:"offline_pin"}))}),Object(f.jsx)(u.a,{sx:{my:3}}),Object(f.jsxs)(a.a,{ml:"-5px",children:[Object(f.jsxs)(m.f,{children:["To: ",Object(f.jsx)("small",{children:e.serviceProviderName})]}),Object(f.jsxs)(m.f,{children:["WasteType: ",Object(f.jsx)("small",{children:e.wasteType})]}),Object(f.jsxs)(m.f,{children:["Requestor: ",Object(f.jsx)("small",{children:e.hospitalName})]}),Object(f.jsxs)(m.f,{children:["Colletion Date: ",Object(f.jsx)("small",{children:e.collection_Date})]}),Object(f.jsxs)(y,{children:["Status: ",e.status]})]})]}),Object(f.jsx)(a.a,{sx:{display:"flex",alignItems:"center",width:"100%",flexDirection:"column",marginTop:-3,marginBottom:-7},children:Object(f.jsx)(b.a,{bgcolor:"orange",progress:e.percentage.toString(),height:20})})]})})},t);var n}))})},q=n(120),T=Object(r.a)("div")((function(e){var t=e.theme;return Object(i.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})})),D=Object(r.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}})),S=Object(r.a)(a.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}}));t.default=function(){return Object(f.jsx)(s.Fragment,{children:Object(f.jsx)(T,{className:"active-requisitions",children:Object(f.jsxs)(q.a,{children:[Object(f.jsx)(S,{children:Object(f.jsx)(D,{children:"Completed Requisitions"})}),Object(f.jsx)(k,{})]})})})}}}]);