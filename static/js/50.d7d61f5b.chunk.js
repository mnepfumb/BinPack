(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[50],{354:function(e,t,n){"use strict";n(1);var i=n(2);t.a=function(e){var t=e.bgcolor,n=e.progress,a={height:e.height,width:"100%",backgroundColor:"whitesmoke",borderRadius:40,margin:50},r={height:"100%",width:"".concat(n,"%"),backgroundColor:t,borderRadius:40,textAlign:"right"};return Object(i.jsx)("div",{style:a,children:Object(i.jsx)("div",{style:r,children:Object(i.jsx)("span",{style:{padding:10,color:"black",fontWeight:900},children:"".concat(n,"%")})})})}},744:function(e,t,n){"use strict";n.r(t);var i=n(7),a=n(5),r=n(171),c=n(1),s=n(33),o=n(46),l=n(13),d=n(252),j=n(174),p=n(300),u=n(288),h=n(41),m=n(37),b=n(354),x=n(65),f=n(129),g=n(2),O=Object(a.a)(d.a)((function(e){var t=e.theme;return Object(i.a)({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",padding:"24px !important",background:t.palette.background.paper},t.breakpoints.down("sm"),{padding:"16px !important"})})),v=Object(a.a)(r.a)((function(e){var t=e.theme;return{display:"flex",flexWrap:"wrap",alignItems:"center","& small":{color:t.palette.text.secondary},"& .icon":{opacity:.6,fontSize:"44px",color:t.palette.primary.main}}})),y=Object(a.a)("h6")((function(e){return{margin:0,marginTop:"4px",fontSize:"14px",fontWeight:"500",color:e.theme.palette.primary.main}})),w=Object(a.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}})),k=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(f.a)().user;Object(c.useEffect)((function(){var e=[],t=function(){var t=Object(o.a)(Object(s.a)().mark((function t(){var n,r,c,o,l,d;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=window.localStorage.getItem("accessToken"),r="/requisition/hospital?driver_id="+a.id,t.next=5,x.a.get(r,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 5:c=t.sent,o=c.data,l=o.status,d=o.requisitions,"success"===l&&(d.forEach((function(t){"Waste Disposed"===t.status&&e.push({requisition:t})})),i(e)),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();t()}),[a.id]);return Object(g.jsx)(p.a,{container:!0,sx:{mb:"24px",mt:2},sm:12,style:{gap:15},children:n.map((function(e,t){return Object(g.jsx)(p.a,{requisition:!0,xs:12,md:3,children:Object(g.jsx)(m.b,{state:{requisition:e},to:{pathname:"/netcare/service_provider/view-completed-requisitions-details",state:e},children:Object(g.jsxs)(O,{elevation:6,children:[Object(g.jsxs)(v,{children:[Object(g.jsx)(p.a,{item:!0,lg:9,md:8,sm:12,xs:12,sx:{mt:2},children:Object(g.jsx)(w,{children:e.requision_id})}),Object(g.jsx)(p.a,{item:!0,md:2,sm:12,xs:12,sx:{mt:2},children:(n=e.created_date,Math.round((Date.parse(new Date)-Date.parse(n))/864e5)>7?Object(g.jsx)(j.a,{className:"icon",style:{color:"#FF3D57"},children:"new_releases"}):Object(g.jsx)(j.a,{className:"icon",style:{color:"#08ad6c"},children:"offline_pin"}))}),Object(g.jsx)(u.a,{sx:{my:3}}),Object(g.jsxs)(r.a,{ml:"-5px",children:[Object(g.jsxs)(h.f,{children:["To: ",Object(g.jsx)("small",{children:e.serviceProviderName})]}),Object(g.jsxs)(h.f,{children:["WasteType: ",Object(g.jsx)("small",{children:e.wasteType})]}),Object(g.jsxs)(h.f,{children:["Requestor: ",Object(g.jsx)("small",{children:e.hospitalName})]}),Object(g.jsxs)(h.f,{children:["Colletion Date: ",Object(g.jsx)("small",{children:e.collection_Date})]}),Object(g.jsxs)(y,{children:["Status: ",e.status]})]})]}),Object(g.jsx)(r.a,{sx:{display:"flex",alignItems:"center",width:"100%",flexDirection:"column",marginTop:-3,marginBottom:-7},children:Object(g.jsx)(b.a,{bgcolor:"orange",progress:e.percentage.toString(),height:20})})]})})},t);var n}))})},q=n(120),T=Object(a.a)("div")((function(e){var t=e.theme;return Object(i.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})})),D=Object(a.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}})),S=Object(a.a)(r.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}}));t.default=function(){return Object(g.jsx)(c.Fragment,{children:Object(g.jsx)(T,{className:"active-requisitions",children:Object(g.jsxs)(q.a,{children:[Object(g.jsx)(S,{children:Object(g.jsx)(D,{children:"Completed Requisitions"})}),Object(g.jsx)(k,{})]})})})}}}]);