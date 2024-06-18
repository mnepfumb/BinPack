(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[44],{383:function(e,t,a){"use strict";a(1);var i=a(62),r=a(346),n=a(2);t.a=e=>{let{height:t,color:a=[]}=e;const c=Object(i.a)(),s={legend:{show:!0,itemGap:20,icon:"circle",bottom:0,textStyle:{color:c.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},xAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],yAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"Traffic Rate",type:"pie",radius:["45%","72.55%"],center:["50%","50%"],avoidLabelOverlap:!1,hoverOffset:5,stillShowZeroSum:!1,label:{normal:{show:!1,position:"center",textStyle:{color:c.palette.text.secondary,fontSize:13,fontFamily:"roboto"},formatter:"{a}"},emphasis:{show:!0,textStyle:{fontSize:"14",fontWeight:"normal"},formatter:"{b} \n{c} ({d}%)"}},labelLine:{normal:{show:!1}},data:[{value:65,name:"Google"},{value:20,name:"Facebook"},{value:15,name:"Others"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return Object(n.jsx)(r.a,{style:{height:t},option:{...s,color:[...a]}})}},384:function(e,t,a){"use strict";var i=a(5),r=a(369),n=a(329),c=a(29),s=a(273),o=a(331),l=a(196),x=a(393),j=a(262),p=a(194),d=a(333),b=a(40),h=a(681),m=a(1),O=a(2);const g=Object(i.a)(b.i)((e=>{let{theme:t}=e;return{marginLeft:24,fontWeight:"500",[t.breakpoints.down("sm")]:{marginLeft:4}}})),f=Object(i.a)(r.a)((()=>({marginLeft:0,boxShadow:"none",background:"#08ad6c !important",backgroundColor:"rgba(9, 182, 109, 1) !important"}))),y=Object(i.a)(r.a)((e=>{let{theme:t}=e;return{marginLeft:0,boxShadow:"none",color:"white !important",background:"".concat(t.palette.error.main," !important")}})),u=Object(i.a)(n.a)((()=>({width:"32px !important",height:"32px !important"})));t.a=()=>{const{palette:e}=Object(c.a)(),t=e.text.secondary;return[1,2,3,4].map((e=>Object(O.jsxs)(m.Fragment,{children:[Object(O.jsx)(s.a,{sx:{py:1,px:2},className:"project-card",children:Object(O.jsxs)(o.a,{container:!0,alignItems:"center",children:[Object(O.jsx)(o.a,{item:!0,md:5,xs:7,children:Object(O.jsxs)(l.a,{display:"flex",alignItems:"center",children:[Object(O.jsx)(x.a,{}),Object(O.jsx)(j.a,{smDown:!0,children:e%2===1?Object(O.jsx)(f,{size:"small",children:Object(O.jsx)(p.a,{children:"star_outline"})}):Object(O.jsx)(y,{size:"small",children:Object(O.jsx)(p.a,{children:"date_range"})})}),Object(O.jsxs)(g,{children:["Project ",e]})]})}),Object(O.jsx)(o.a,{item:!0,md:3,xs:4,children:Object(O.jsx)(l.a,{color:t,children:Object(h.a)((new Date).getTime(),"MM/dd/yyyy hh:mma")})}),Object(O.jsx)(j.a,{smDown:!0,children:Object(O.jsx)(o.a,{item:!0,xs:3,children:Object(O.jsxs)(l.a,{display:"flex",position:"relative",marginLeft:"-0.875rem !important",children:[Object(O.jsx)(u,{src:"/BinPack/assets/images/face-4.jpg"}),Object(O.jsx)(u,{src:"/BinPack/assets/images/face-4.jpg"}),Object(O.jsx)(u,{src:"/BinPack/assets/images/face-4.jpg"}),Object(O.jsx)(u,{sx:{fontSize:"14px"},children:"+3"})]})})}),Object(O.jsx)(o.a,{item:!0,xs:1,children:Object(O.jsx)(l.a,{display:"flex",justifyContent:"flex-end",children:Object(O.jsx)(d.a,{children:Object(O.jsx)(p.a,{children:"more_vert"})})})})]})}),Object(O.jsx)(l.a,{py:1})]},e)))}},385:function(e,t,a){"use strict";var i=a(5),r=a(273),n=a(196),c=a(331),s=a(194),o=a(40),l=a(2);const x=Object(i.a)(r.a)((e=>{let{theme:t}=e;return{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",padding:"24px !important",background:t.palette.background.paper,[t.breakpoints.down("sm")]:{padding:"16px !important"}}})),j=Object(i.a)(n.a)((e=>{let{theme:t}=e;return{display:"flex",flexWrap:"wrap",alignItems:"center","& small":{color:t.palette.text.secondary},"& .icon":{opacity:.6,fontSize:"44px",color:t.palette.primary.main}}})),p=Object(i.a)("h6")((e=>{let{theme:t}=e;return{margin:0,marginTop:"4px",fontSize:"14px",fontWeight:"500",color:t.palette.primary.main}}));t.a=()=>Object(l.jsx)(c.a,{container:!0,spacing:3,sx:{mb:"24px"},children:[{name:"Transportation",amount:"3050 kg of CO2-eq/month"},{name:"Landfilling",amount:"$8500 kg of CO2-eq/month"},{name:"Composting",amount:"108.5 kg of CO2-eq/month"},{name:"Recycling",amount:"305 kg of CO2-eq/month"},{name:"Inceneration",amount:"8.5 kg of CO2-eq/month"},{name:"Open Burning",amount:"305 kg of CO2-eq/month"}].map(((e,t)=>Object(l.jsx)(c.a,{item:!0,xs:12,md:6,children:Object(l.jsx)(x,{elevation:6,children:Object(l.jsxs)(j,{children:[Object(l.jsx)(s.a,{className:"icon",children:e.icon}),Object(l.jsxs)(n.a,{ml:"12px",children:[Object(l.jsx)(o.b,{children:e.name}),Object(l.jsx)(p,{children:e.amount})]})]})})},t)))})},386:function(e,t,a){"use strict";var i=a(5),r=a(369),n=a(29),c=a(488),s=a(331),o=a(273),l=a(194),x=a(2);const j=Object(i.a)("div")((()=>({display:"flex",flexWrap:"wrap",alignItems:"center"}))),p=Object(i.a)(r.a)((()=>({width:"44px !important",height:"44px !important",boxShadow:"none !important"}))),d=Object(i.a)("h3")((e=>{let{textcolor:t}=e;return{margin:0,color:t,fontWeight:"500",marginLeft:"12px"}})),b=Object(i.a)("h1")((e=>{let{theme:t}=e;return{margin:0,flexGrow:1,color:t.palette.text.secondary}})),h=Object(i.a)("span")((e=>{let{textcolor:t}=e;return{fontSize:"13px",color:t,marginLeft:"4px"}})),m=Object(i.a)("div")((()=>({width:16,height:16,color:"#fff",display:"flex",overflow:"hidden",borderRadius:"300px ",justifyContent:"center","& .icon":{fontSize:"14px"}})));t.a=()=>{const{palette:e}=Object(n.a)(),t=e.error.main,a=Object(c.b)(e.error.main,.85);return Object(x.jsxs)(s.a,{container:!0,spacing:3,sx:{mb:3},children:[Object(x.jsx)(s.a,{item:!0,xs:12,md:6,children:Object(x.jsxs)(o.a,{elevation:3,sx:{p:2},children:[Object(x.jsxs)(j,{children:[Object(x.jsx)(p,{size:"medium",sx:{background:"rgba(9, 182, 109, 0.15)"},children:Object(x.jsx)(l.a,{sx:{color:"#08ad6c"},children:"trending_up"})}),Object(x.jsx)(d,{textcolor:"#08ad6c",children:"Active Users"})]}),Object(x.jsxs)(j,{sx:{pt:2},children:[Object(x.jsx)(b,{children:"10.8k"}),Object(x.jsx)(m,{sx:{background:"rgba(9, 182, 109, 0.15)"},children:Object(x.jsx)(l.a,{className:"icon",children:"expand_less"})}),Object(x.jsx)(h,{textcolor:"#08ad6c",children:"(+21%)"})]})]})}),Object(x.jsx)(s.a,{item:!0,xs:12,md:6,children:Object(x.jsxs)(o.a,{elevation:3,sx:{p:2},children:[Object(x.jsxs)(j,{children:[Object(x.jsx)(p,{size:"medium",sx:{background:a,overflow:"hidden"},children:Object(x.jsx)(l.a,{sx:{color:t},children:"star_outline"})}),Object(x.jsx)(d,{textcolor:t,children:"Total Users"})]}),Object(x.jsxs)(j,{sx:{pt:2},children:[Object(x.jsx)(b,{children:"$2.8M"}),Object(x.jsx)(m,{sx:{background:a},children:Object(x.jsx)(l.a,{className:"icon",children:"expand_less"})}),Object(x.jsx)(h,{textcolor:t,children:"(+21%)"})]})]})})]})}},701:function(e,t,a){"use strict";a.r(t);var i=a(5),r=a(29),n=a(331),c=a(273),s=a(1),o=a(383),l=a(384),x=a(385),j=a(386),p=a(196),d=a(356),b=a(263),h=a(430),m=a(357),O=a(358),g=a(359),f=a(360),y=a(329),u=a(333),w=a(194),S=a(40),k=a(2);const v=Object(i.a)(p.a)((()=>({display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}))),L=Object(i.a)("span")((()=>({fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}))),z=Object(i.a)(d.a)((()=>({minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}))),W=Object(i.a)("small")((e=>{let{bgcolor:t}=e;return{width:50,height:15,color:"#fff",padding:"2px 8px",borderRadius:"4px",overflow:"hidden",background:t,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"}})),R=[{imgUrl:"/BinPack/assets/images/products/headphone-2.jpg",name:"earphone",price:100,available:15},{imgUrl:"/BinPack/assets/images/products/headphone-3.jpg",name:"earphone",price:1500,available:30},{imgUrl:"/BinPack/assets/images/products/iphone-2.jpg",name:"iPhone x",price:1900,available:35},{imgUrl:"/BinPack/assets/images/products/iphone-1.jpg",name:"iPhone x",price:100,available:0},{imgUrl:"/BinPack/assets/images/products/headphone-3.jpg",name:"Head phone",price:1190,available:5}];var T=()=>{const{palette:e}=Object(r.a)(),t=e.error.main,a=e.primary.main,i=e.secondary.main;return Object(k.jsxs)(c.a,{elevation:3,sx:{pt:"20px",mb:3},children:[Object(k.jsxs)(v,{children:[Object(k.jsx)(L,{children:"top selling products"}),Object(k.jsxs)(b.a,{size:"small",defaultValue:"this_month",children:[Object(k.jsx)(h.a,{value:"this_month",children:"This Month"}),Object(k.jsx)(h.a,{value:"last_month",children:"Last Month"})]})]}),Object(k.jsx)(p.a,{overflow:"auto",children:Object(k.jsxs)(z,{children:[Object(k.jsx)(m.a,{children:Object(k.jsxs)(O.a,{children:[Object(k.jsx)(g.a,{sx:{px:3},colSpan:4,children:"Name"}),Object(k.jsx)(g.a,{sx:{px:0},colSpan:2,children:"Revenue"}),Object(k.jsx)(g.a,{sx:{px:0},colSpan:2,children:"Stock Status"}),Object(k.jsx)(g.a,{sx:{px:0},colSpan:1,children:"Action"})]})}),Object(k.jsx)(f.a,{children:R.map(((e,r)=>Object(k.jsxs)(O.a,{hover:!0,children:[Object(k.jsx)(g.a,{colSpan:4,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(k.jsxs)(p.a,{display:"flex",alignItems:"center",children:[Object(k.jsx)(y.a,{src:e.imgUrl}),Object(k.jsx)(S.g,{sx:{m:0,ml:4},children:e.name})]})}),Object(k.jsxs)(g.a,{align:"left",colSpan:2,sx:{px:0,textTransform:"capitalize"},children:["$",e.price>999?(e.price/1e3).toFixed(1)+"k":e.price]}),Object(k.jsx)(g.a,{sx:{px:0},align:"left",colSpan:2,children:e.available?e.available<20?Object(k.jsxs)(W,{bgcolor:i,children:[e.available," available"]}):Object(k.jsx)(W,{bgcolor:a,children:"in stock"}):Object(k.jsx)(W,{bgcolor:t,children:"out of stock"})}),Object(k.jsx)(g.a,{sx:{px:0},colSpan:1,children:Object(k.jsx)(u.a,{children:Object(k.jsx)(w.a,{color:"primary",children:"edit"})})})]},r)))})]})})]})},B=a(133),P=a(62),A=a(346);var C=e=>{let{height:t,color:a=[]}=e;const i=Object(P.a)(),r={grid:{top:"10%",bottom:"10%",right:"5%"},legend:{show:!1},color:["#223388","rgba(34, 51, 136, 0.8)"],barGap:0,barMaxWidth:"64px",dataset:{source:[["Month","Website","App"],["Jan",2200,1200],["Feb",800,500],["Mar",700,1350],["Apr",1500,1250],["May",2450,450],["June",1700,1250]]},xAxis:{type:"category",axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{fontSize:13,fontFamily:"roboto",color:i.palette.text.secondary}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:i.palette.text.secondary,opacity:.15}},axisLabel:{fontSize:13,fontFamily:"roboto",color:i.palette.text.secondary}},series:[{type:"bar"},{type:"bar"}]};return Object(k.jsx)(A.a,{style:{height:t},option:{...r}})};var F=e=>{let{height:t}=e;const{palette:a}=Object(P.a)(),i={grid:{left:"6%",bottom:"10%",right:"1%"},legend:{itemGap:20,icon:"circle",textStyle:{color:a.text.secondary,fontSize:13,fontFamily:"roboto"}},color:[a.error.light,a.primary.dark,a.primary.light,a.secondary.light],barMaxWidth:"10px",dataset:{source:[["Month","Website","App","Linux","Windows","Website","App","Linux","Windows"],["Jan",2200,1200,950,800,2200,1200,950,800],["Feb",800,500,1500,600,2200,1200,950,800],["Mar",700,1350,800,700,2200,1200,950,800],["Apr",1500,1250,950,900,2200,1200,950,800],["May",2450,450,950,500,2200,1200,950,800],["June",1700,1250,1500,800,2200,1200,950,800]]},xAxis:{type:"category",axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{color:a.text.secondary,fontSize:13,fontFamily:"roboto"}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:a.text.secondary,opacity:.15}},axisLabel:{color:a.text.secondary,fontSize:13,fontFamily:"roboto"}},series:[{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}}]};return Object(k.jsx)(A.a,{style:{height:t},option:i})};const M=Object(i.a)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"}}})),_=Object(i.a)("span")((()=>({fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}))),I=Object(i.a)("span")((e=>{let{theme:t}=e;return{fontSize:"0.875rem",color:t.palette.text.secondary}})),U=Object(i.a)("h4")((e=>{let{theme:t}=e;return{fontSize:"1rem",fontWeight:"500",marginBottom:"16px",textTransform:"capitalize",color:t.palette.text.secondary}}));t.default=()=>{const{palette:e}=Object(r.a)(),t=Object(r.a)();return Object(k.jsx)(s.Fragment,{children:Object(k.jsx)(M,{className:"admin-analytics",children:Object(k.jsxs)(n.a,{container:!0,spacing:3,children:[Object(k.jsxs)(n.a,{item:!0,lg:8,md:8,sm:12,xs:12,children:[Object(k.jsx)(B.a,{title:"Waste Status",sx:{mb:"24px"},children:Object(k.jsx)(C,{height:"400px",color:[t.palette.primary.dark,t.palette.primary.light]})}),Object(k.jsx)(B.a,{title:"Diverted Waste Types",children:Object(k.jsx)(F,{height:"400px",color:[t.palette.primary.dark,t.palette.primary.light]})}),Object(k.jsx)(B.a,{title:"ESG Reporting",children:Object(k.jsx)(x.a,{})}),Object(k.jsx)(T,{}),Object(k.jsx)(j.a,{}),Object(k.jsx)(U,{children:"Ongoing Projects"}),Object(k.jsx)(l.a,{})]}),Object(k.jsx)(n.a,{item:!0,lg:4,md:4,sm:12,xs:12,children:Object(k.jsxs)(c.a,{sx:{px:3,py:2,mb:3},children:[Object(k.jsx)(_,{children:"Traffic Sources"}),Object(k.jsx)(I,{children:"Last 30 days"}),Object(k.jsx)(o.a,{height:"300px",color:[e.primary.dark,e.primary.main,e.primary.light]})]})})]})})})}}}]);