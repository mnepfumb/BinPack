(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[40],{390:function(e,t,a){"use strict";var n=a(15),r=a(11),i=(a(1),a(59)),c=a(346),o=a(2);t.a=function(e){var t=e.height,a=e.color,s=void 0===a?[]:a,l=Object(i.a)(),x={legend:{show:!0,itemGap:20,icon:"circle",bottom:0,textStyle:{color:l.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},xAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],yAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"Traffic Rate",type:"pie",radius:["45%","72.55%"],center:["50%","50%"],avoidLabelOverlap:!1,hoverOffset:5,stillShowZeroSum:!1,label:{normal:{show:!1,position:"center",textStyle:{color:l.palette.text.secondary,fontSize:13,fontFamily:"roboto"},formatter:"{a}"},emphasis:{show:!0,textStyle:{fontSize:"14",fontWeight:"normal"},formatter:"{b} \n{c} ({d}%)"}},labelLine:{normal:{show:!1}},data:[{value:65,name:"Google"},{value:20,name:"Facebook"},{value:15,name:"Others"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return Object(o.jsx)(c.a,{style:{height:t},option:Object(r.a)(Object(r.a)({},x),{},{color:Object(n.a)(s)})})}},391:function(e,t,a){"use strict";var n=a(7),r=a(5),i=a(376),c=a(299),o=a(27),s=a(252),l=a(300),x=a(171),j=a(409),p=a(240),d=a(174),b=a(303),h=a(41),m=a(372),O=a(1),g=a(2),u=Object(r.a)(h.i)((function(e){var t=e.theme;return Object(n.a)({marginLeft:24,fontWeight:"500"},t.breakpoints.down("sm"),{marginLeft:4})})),f=Object(r.a)(i.a)((function(){return{marginLeft:0,boxShadow:"none",background:"#08ad6c !important",backgroundColor:"rgba(9, 182, 109, 1) !important"}})),y=Object(r.a)(i.a)((function(e){var t=e.theme;return{marginLeft:0,boxShadow:"none",color:"white !important",background:"".concat(t.palette.error.main," !important")}})),w=Object(r.a)(c.a)((function(){return{width:"32px !important",height:"32px !important"}}));t.a=function(){var e=Object(o.a)().palette.text.secondary;return[1,2,3,4].map((function(t){return Object(g.jsxs)(O.Fragment,{children:[Object(g.jsx)(s.a,{sx:{py:1,px:2},className:"project-card",children:Object(g.jsxs)(l.a,{container:!0,alignItems:"center",children:[Object(g.jsx)(l.a,{item:!0,md:5,xs:7,children:Object(g.jsxs)(x.a,{display:"flex",alignItems:"center",children:[Object(g.jsx)(j.a,{}),Object(g.jsx)(p.a,{smDown:!0,children:t%2===1?Object(g.jsx)(f,{size:"small",children:Object(g.jsx)(d.a,{children:"star_outline"})}):Object(g.jsx)(y,{size:"small",children:Object(g.jsx)(d.a,{children:"date_range"})})}),Object(g.jsxs)(u,{children:["Project ",t]})]})}),Object(g.jsx)(l.a,{item:!0,md:3,xs:4,children:Object(g.jsx)(x.a,{color:e,children:Object(m.a)((new Date).getTime(),"MM/dd/yyyy hh:mma")})}),Object(g.jsx)(p.a,{smDown:!0,children:Object(g.jsx)(l.a,{item:!0,xs:3,children:Object(g.jsxs)(x.a,{display:"flex",position:"relative",marginLeft:"-0.875rem !important",children:[Object(g.jsx)(w,{src:"/assets/images/face-4.jpg"}),Object(g.jsx)(w,{src:"/assets/images/face-4.jpg"}),Object(g.jsx)(w,{src:"/assets/images/face-4.jpg"}),Object(g.jsx)(w,{sx:{fontSize:"14px"},children:"+3"})]})})}),Object(g.jsx)(l.a,{item:!0,xs:1,children:Object(g.jsx)(x.a,{display:"flex",justifyContent:"flex-end",children:Object(g.jsx)(b.a,{children:Object(g.jsx)(d.a,{children:"more_vert"})})})})]})}),Object(g.jsx)(x.a,{py:1})]},t)}))}},392:function(e,t,a){"use strict";var n=a(7),r=a(5),i=a(252),c=a(171),o=a(300),s=a(174),l=a(41),x=a(2),j=Object(r.a)(i.a)((function(e){var t=e.theme;return Object(n.a)({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",padding:"24px !important",background:t.palette.background.paper},t.breakpoints.down("sm"),{padding:"16px !important"})})),p=Object(r.a)(c.a)((function(e){var t=e.theme;return{display:"flex",flexWrap:"wrap",alignItems:"center","& small":{color:t.palette.text.secondary},"& .icon":{opacity:.6,fontSize:"44px",color:t.palette.primary.main}}})),d=Object(r.a)("h6")((function(e){return{margin:0,marginTop:"4px",fontSize:"14px",fontWeight:"500",color:e.theme.palette.primary.main}}));t.a=function(){return Object(x.jsx)(o.a,{container:!0,spacing:3,sx:{mb:"24px"},children:[{name:"Transportation",amount:"3050 kg of CO2-eq/month"},{name:"Landfilling",amount:"$8500 kg of CO2-eq/month"},{name:"Composting",amount:"108.5 kg of CO2-eq/month"},{name:"Recycling",amount:"305 kg of CO2-eq/month"},{name:"Inceneration",amount:"8.5 kg of CO2-eq/month"},{name:"Open Burning",amount:"305 kg of CO2-eq/month"}].map((function(e,t){return Object(x.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(x.jsx)(j,{elevation:6,children:Object(x.jsxs)(p,{children:[Object(x.jsx)(s.a,{className:"icon",children:e.icon}),Object(x.jsxs)(c.a,{ml:"12px",children:[Object(x.jsx)(l.b,{children:e.name}),Object(x.jsx)(d,{children:e.amount})]})]})})},t)}))})}},393:function(e,t,a){"use strict";var n=a(5),r=a(376),i=a(27),c=a(226),o=a(300),s=a(252),l=a(174),x=a(2),j=Object(n.a)("div")((function(){return{display:"flex",flexWrap:"wrap",alignItems:"center"}})),p=Object(n.a)(r.a)((function(){return{width:"44px !important",height:"44px !important",boxShadow:"none !important"}})),d=Object(n.a)("h3")((function(e){return{margin:0,color:e.textcolor,fontWeight:"500",marginLeft:"12px"}})),b=Object(n.a)("h1")((function(e){return{margin:0,flexGrow:1,color:e.theme.palette.text.secondary}})),h=Object(n.a)("span")((function(e){return{fontSize:"13px",color:e.textcolor,marginLeft:"4px"}})),m=Object(n.a)("div")((function(){return{width:16,height:16,color:"#fff",display:"flex",overflow:"hidden",borderRadius:"300px ",justifyContent:"center","& .icon":{fontSize:"14px"}}}));t.a=function(){var e=Object(i.a)().palette,t=e.error.main,a=Object(c.e)(e.error.main,.85);return Object(x.jsxs)(o.a,{container:!0,spacing:3,sx:{mb:3},children:[Object(x.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(x.jsxs)(s.a,{elevation:3,sx:{p:2},children:[Object(x.jsxs)(j,{children:[Object(x.jsx)(p,{size:"medium",sx:{background:"rgba(9, 182, 109, 0.15)"},children:Object(x.jsx)(l.a,{sx:{color:"#08ad6c"},children:"trending_up"})}),Object(x.jsx)(d,{textcolor:"#08ad6c",children:"Active Users"})]}),Object(x.jsxs)(j,{sx:{pt:2},children:[Object(x.jsx)(b,{children:"10.8k"}),Object(x.jsx)(m,{sx:{background:"rgba(9, 182, 109, 0.15)"},children:Object(x.jsx)(l.a,{className:"icon",children:"expand_less"})}),Object(x.jsx)(h,{textcolor:"#08ad6c",children:"(+21%)"})]})]})}),Object(x.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(x.jsxs)(s.a,{elevation:3,sx:{p:2},children:[Object(x.jsxs)(j,{children:[Object(x.jsx)(p,{size:"medium",sx:{background:a,overflow:"hidden"},children:Object(x.jsx)(l.a,{sx:{color:t},children:"star_outline"})}),Object(x.jsx)(d,{textcolor:t,children:"Transactions"})]}),Object(x.jsxs)(j,{sx:{pt:2},children:[Object(x.jsx)(b,{children:"$2.8M"}),Object(x.jsx)(m,{sx:{background:a},children:Object(x.jsx)(l.a,{className:"icon",children:"expand_less"})}),Object(x.jsx)(h,{textcolor:t,children:"(+21%)"})]})]})})]})}},711:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(5),i=a(27),c=a(300),o=a(252),s=a(1),l=a(390),x=a(391),j=a(392),p=a(393),d=a(171),b=a(365),h=a(241),m=a(454),O=a(366),g=a(367),u=a(368),f=a(369),y=a(299),w=a(303),S=a(174),v=a(41),k=a(2),L=Object(r.a)(d.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),z=Object(r.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),W=Object(r.a)(b.a)((function(){return{minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}})),R=Object(r.a)("small")((function(e){return{width:50,height:15,color:"#fff",padding:"2px 8px",borderRadius:"4px",overflow:"hidden",background:e.bgcolor,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"}})),T=[{imgUrl:"/assets/images/products/headphone-2.jpg",name:"earphone",price:100,available:15},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"earphone",price:1500,available:30},{imgUrl:"/assets/images/products/iphone-2.jpg",name:"iPhone x",price:1900,available:35},{imgUrl:"/assets/images/products/iphone-1.jpg",name:"iPhone x",price:100,available:0},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"Head phone",price:1190,available:5}],A=function(){var e=Object(i.a)().palette,t=e.error.main,a=e.primary.main,n=e.secondary.main;return Object(k.jsxs)(o.a,{elevation:3,sx:{pt:"20px",mb:3},children:[Object(k.jsxs)(L,{children:[Object(k.jsx)(z,{children:"top selling products"}),Object(k.jsxs)(h.a,{size:"small",defaultValue:"this_month",children:[Object(k.jsx)(m.a,{value:"this_month",children:"This Month"}),Object(k.jsx)(m.a,{value:"last_month",children:"Last Month"})]})]}),Object(k.jsx)(d.a,{overflow:"auto",children:Object(k.jsxs)(W,{children:[Object(k.jsx)(O.a,{children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(u.a,{sx:{px:3},colSpan:4,children:"Name"}),Object(k.jsx)(u.a,{sx:{px:0},colSpan:2,children:"Revenue"}),Object(k.jsx)(u.a,{sx:{px:0},colSpan:2,children:"Stock Status"}),Object(k.jsx)(u.a,{sx:{px:0},colSpan:1,children:"Action"})]})}),Object(k.jsx)(f.a,{children:T.map((function(e,r){return Object(k.jsxs)(g.a,{hover:!0,children:[Object(k.jsx)(u.a,{colSpan:4,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(k.jsxs)(d.a,{display:"flex",alignItems:"center",children:[Object(k.jsx)(y.a,{src:e.imgUrl}),Object(k.jsx)(v.g,{sx:{m:0,ml:4},children:e.name})]})}),Object(k.jsxs)(u.a,{align:"left",colSpan:2,sx:{px:0,textTransform:"capitalize"},children:["$",e.price>999?(e.price/1e3).toFixed(1)+"k":e.price]}),Object(k.jsx)(u.a,{sx:{px:0},align:"left",colSpan:2,children:e.available?e.available<20?Object(k.jsxs)(R,{bgcolor:n,children:[e.available," available"]}):Object(k.jsx)(R,{bgcolor:a,children:"in stock"}):Object(k.jsx)(R,{bgcolor:t,children:"out of stock"})}),Object(k.jsx)(u.a,{sx:{px:0},colSpan:1,children:Object(k.jsx)(w.a,{children:Object(k.jsx)(S.a,{color:"primary",children:"edit"})})})]},r)}))})]})})]})},C=a(120),F=a(11),M=a(59),_=a(346),I=function(e){var t=e.height,a=(e.color,Object(M.a)()),n={grid:{top:"10%",bottom:"10%",right:"5%"},legend:{show:!1},color:["#223388","rgba(34, 51, 136, 0.8)"],barGap:0,barMaxWidth:"64px",dataset:{source:[["Month","Website","App"],["Jan",2200,1200],["Feb",800,500],["Mar",700,1350],["Apr",1500,1250],["May",2450,450],["June",1700,1250]]},xAxis:{type:"category",axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{fontSize:13,fontFamily:"roboto",color:a.palette.text.secondary}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:a.palette.text.secondary,opacity:.15}},axisLabel:{fontSize:13,fontFamily:"roboto",color:a.palette.text.secondary}},series:[{type:"bar"},{type:"bar"}]};return Object(k.jsx)(_.a,{style:{height:t},option:Object(F.a)({},n)})},B=function(e){var t=e.height,a=Object(M.a)().palette,n={grid:{left:"6%",bottom:"10%",right:"1%"},legend:{itemGap:20,icon:"circle",textStyle:{color:a.text.secondary,fontSize:13,fontFamily:"roboto"}},color:[a.error.light,a.primary.dark,a.primary.light,a.secondary.light],barMaxWidth:"10px",dataset:{source:[["Month","Website","App","Linux","Windows","Website","App","Linux","Windows"],["Jan",2200,1200,950,800,2200,1200,950,800],["Feb",800,500,1500,600,2200,1200,950,800],["Mar",700,1350,800,700,2200,1200,950,800],["Apr",1500,1250,950,900,2200,1200,950,800],["May",2450,450,950,500,2200,1200,950,800],["June",1700,1250,1500,800,2200,1200,950,800]]},xAxis:{type:"category",axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{color:a.text.secondary,fontSize:13,fontFamily:"roboto"}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:a.text.secondary,opacity:.15}},axisLabel:{color:a.text.secondary,fontSize:13,fontFamily:"roboto"}},series:[{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}}]};return Object(k.jsx)(_.a,{style:{height:t},option:n})},U=Object(r.a)("div")((function(e){var t=e.theme;return Object(n.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})})),q=Object(r.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}})),G=Object(r.a)("span")((function(e){return{fontSize:"0.875rem",color:e.theme.palette.text.secondary}})),J=Object(r.a)("h4")((function(e){return{fontSize:"1rem",fontWeight:"500",marginBottom:"16px",textTransform:"capitalize",color:e.theme.palette.text.secondary}}));t.default=function(){var e=Object(i.a)().palette,t=Object(i.a)();return Object(k.jsx)(s.Fragment,{children:Object(k.jsx)(U,{className:"admin-analytics",children:Object(k.jsxs)(c.a,{container:!0,spacing:3,children:[Object(k.jsxs)(c.a,{item:!0,lg:8,md:8,sm:12,xs:12,children:[Object(k.jsx)(C.a,{title:"Waste Status",sx:{mb:"24px"},children:Object(k.jsx)(I,{height:"400px",color:[t.palette.primary.dark,t.palette.primary.light]})}),Object(k.jsx)(C.a,{title:"Diverted Waste Types",children:Object(k.jsx)(B,{height:"400px",color:[t.palette.primary.dark,t.palette.primary.light]})}),Object(k.jsx)(C.a,{title:"ESG Reporting",children:Object(k.jsx)(j.a,{})}),Object(k.jsx)(A,{}),Object(k.jsx)(p.a,{}),Object(k.jsx)(J,{children:"Ongoing Projects"}),Object(k.jsx)(x.a,{})]}),Object(k.jsx)(c.a,{item:!0,lg:4,md:4,sm:12,xs:12,children:Object(k.jsxs)(o.a,{sx:{px:3,py:2,mb:3},children:[Object(k.jsx)(q,{children:"Traffic Sources"}),Object(k.jsx)(G,{children:"Last 30 days"}),Object(k.jsx)(l.a,{height:"300px",color:[e.primary.dark,e.primary.main,e.primary.light]})]})})]})})})}}}]);