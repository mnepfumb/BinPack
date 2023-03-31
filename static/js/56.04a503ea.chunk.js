(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[56],{692:function(e,t,a){"use strict";a.r(t);var r=a(7),i=a(5),o=a(27),n=a(300),s=a(252),c=a(1),l=a(15),x=a(11),p=a(13),m=a(59),d=a(340),b=a(2),h=function(e){var t=e.height,a=e.color,r=void 0===a?[]:a,i=Object(m.a)(),o=Object(c.useState)(0),n=Object(p.a)(o,2),s=n[0],h=n[1],j=Object(c.useState)(0),g=Object(p.a)(j,2),y=g[0],O=g[1];Object(c.useEffect)((function(){h(50),O(100-s)}),[s]);var f={legend:{show:!0,itemGap:80,icon:"circle",bottom:0,textStyle:{color:i.palette.text.secondary,fontSize:14,fontFamily:"roboto",fontWeight:"bold"}},tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},xAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],yAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"Task Rate",type:"pie",radius:["45%","72.55%"],center:["50%","50%"],avoidLabelOverlap:!1,hoverOffset:5,stillShowZeroSum:!1,label:{normal:{show:!1,position:"center",textStyle:{color:i.palette.text.secondary,fontSize:13,fontFamily:"roboto"},formatter:"{a}"},emphasis:{show:!0,textStyle:{fontSize:"14",fontWeight:"bold"},formatter:"{b}: {c}% "}},labelLine:{normal:{show:!1}},data:[{value:s,name:"Open"},{value:y,name:"Completed"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return Object(b.jsx)(d.a,{style:{height:t},option:Object(x.a)(Object(x.a)({},f),{},{color:Object(l.a)(r)})})},j=a(373),g=a(299),y=a(171),O=a(240),f=a(303),u=a(174),w=a(41),S=a(372),v=Object(i.a)(w.i)((function(e){var t=e.theme;return Object(r.a)({marginLeft:24,fontWeight:"500"},t.breakpoints.down("sm"),{marginLeft:4})})),k=Object(i.a)(j.a)((function(e){return{marginLeft:0,boxShadow:"none",background:"#08ad6c !important",backgroundColor:"".concat(e," !important")}})),W=(Object(i.a)(j.a)((function(e){var t=e.theme;return{marginLeft:0,boxShadow:"none",color:"white !important",background:"".concat(t.palette.error.main," !important")}})),Object(i.a)(g.a)((function(){return{width:"32px !important",height:"32px !important"}}))),F=[{name:"Covid Waste",weekly:100,monthly:15,color:"#C0C0C0"},{name:"General Waste",weekly:100,monthly:15,color:"#808000"},{name:"Hazardous Waste",weekly:100,monthly:15,color:"#008000"},{name:"Metal Waste",weekly:100,monthly:15,color:"#00FFFF"},{name:"Paper Waste",weekly:100,monthly:15,color:"#008080"},{name:"Plastic Waste",weekly:100,monthly:15,color:"#000080"},{name:"Refuse Waste",weekly:100,monthly:15,color:"#FF00FF"},{name:"Healthcare Risk Waste",weekly:100,monthly:15,color:"#0000FF"},{name:"Other",weekly:100,monthly:15,color:"#800080"}],L=function(){var e=Object(o.a)().palette.text.secondary;return F.map((function(t){return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)(s.a,{sx:{py:1,px:2},className:"project-card",children:Object(b.jsxs)(n.a,{container:!0,alignItems:"center",children:[Object(b.jsx)(n.a,{item:!0,md:5,xs:7,children:Object(b.jsxs)(y.a,{display:"flex",alignItems:"center",children:[Object(b.jsx)(k,{color:t.color}),Object(b.jsxs)(v,{children:["Project ",t.name]})]})}),Object(b.jsx)(n.a,{item:!0,md:3,xs:4,children:Object(b.jsx)(y.a,{color:e,children:Object(S.a)((new Date).getTime(),"MM/dd/yyyy hh:mma")})}),Object(b.jsx)(O.a,{smDown:!0,children:Object(b.jsx)(n.a,{item:!0,xs:3,children:Object(b.jsxs)(y.a,{display:"flex",position:"relative",marginLeft:"-0.875rem !important",children:[Object(b.jsx)(W,{src:"/assets/images/face-4.jpg"}),Object(b.jsx)(W,{src:"/assets/images/face-4.jpg"}),Object(b.jsx)(W,{src:"/assets/images/face-4.jpg"}),Object(b.jsx)(W,{sx:{fontSize:"14px"},children:"+3"})]})})}),Object(b.jsx)(n.a,{item:!0,xs:1,children:Object(b.jsx)(y.a,{display:"flex",justifyContent:"flex-end",children:Object(b.jsx)(f.a,{children:Object(b.jsx)(u.a,{children:"more_vert"})})})})]})}),Object(b.jsx)(y.a,{py:1})]},t)}))},z=Object(i.a)(s.a)((function(e){var t=e.theme;return Object(r.a)({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",padding:"24px !important",background:t.palette.background.paper},t.breakpoints.down("sm"),{padding:"16px !important"})})),R=Object(i.a)(y.a)((function(e){var t=e.theme;return{display:"flex",flexWrap:"wrap",alignItems:"center","& small":{color:t.palette.text.secondary},"& .icon":{opacity:.6,fontSize:"44px",color:t.palette.primary.main}}})),C=Object(i.a)("h6")((function(e){return{margin:0,marginTop:"4px",fontSize:"14px",fontWeight:"500",color:e.theme.palette.primary.main}})),T=function(){return Object(b.jsx)(n.a,{container:!0,spacing:3,sx:{mb:"24px"},children:[{name:"Transportation",amount:"3050 kg of CO2-eq/month"},{name:"Landfilling",amount:"$8500 kg of CO2-eq/month"},{name:"Composting",amount:"108.5 kg of CO2-eq/month"},{name:"Recycling",amount:"305 kg of CO2-eq/month"},{name:"Inceneration",amount:"8.5 kg of CO2-eq/month"},{name:"Open Burning",amount:"305 kg of CO2-eq/month"}].map((function(e,t){return Object(b.jsx)(n.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(z,{elevation:6,children:Object(b.jsxs)(R,{children:[Object(b.jsx)(u.a,{className:"icon",children:e.icon}),Object(b.jsxs)(y.a,{ml:"12px",children:[Object(b.jsx)(w.b,{children:e.name}),Object(b.jsx)(C,{children:e.amount})]})]})})},t)}))})},M=a(226),P=Object(i.a)("div")((function(){return{display:"flex",flexWrap:"wrap",alignItems:"center"}})),A=Object(i.a)(j.a)((function(){return{width:"44px !important",height:"44px !important",boxShadow:"none !important"}})),G=Object(i.a)("h3")((function(e){return{margin:0,color:e.textcolor,fontWeight:"500",marginLeft:"12px"}})),U=Object(i.a)("h1")((function(e){return{margin:0,flexGrow:1,color:e.theme.palette.text.secondary}})),B=function(){var e=Object(o.a)().palette,t=e.error.main,a=Object(M.e)(e.error.main,.85);return Object(b.jsxs)(n.a,{container:!0,spacing:3,sx:{mb:3},children:[Object(b.jsx)(n.a,{item:!0,xs:12,md:6,children:Object(b.jsxs)(s.a,{elevation:3,sx:{p:2},children:[Object(b.jsxs)(P,{children:[Object(b.jsx)(A,{size:"medium",sx:{background:"rgba(9, 182, 109, 0.15)"},children:Object(b.jsx)(u.a,{sx:{color:"#08ad6c"},children:"trending_up"})}),Object(b.jsx)(G,{textcolor:"#08ad6c",children:"Active Users"})]}),Object(b.jsx)(P,{sx:{pt:2},children:Object(b.jsx)(U,{children:"10.8k"})})]})}),Object(b.jsx)(n.a,{item:!0,xs:12,md:6,children:Object(b.jsxs)(s.a,{elevation:3,sx:{p:2},children:[Object(b.jsxs)(P,{children:[Object(b.jsx)(A,{size:"medium",sx:{background:a,overflow:"hidden"},children:Object(b.jsx)(u.a,{sx:{color:t},children:"star_outline"})}),Object(b.jsx)(G,{textcolor:t,children:"Total Users"})]}),Object(b.jsx)(P,{sx:{pt:2},children:Object(b.jsx)(U,{children:"$2.8M"})})]})})]})},H=a(362),I=a(363),q=a(364),J=a(365),N=a(366),_=Object(i.a)(y.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),D=Object(i.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),$=Object(i.a)(H.a)((function(){return{minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}})),E=(Object(i.a)("small")((function(e){return{width:50,height:15,color:"#fff",padding:"2px 8px",borderRadius:"4px",overflow:"hidden",background:e.bgcolor,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"}})),[{imgUrl:"/assets/images/products/headphone-2.jpg",name:"Covid Waste",price:100,available:15},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"General Waste",price:1500,available:30},{imgUrl:"/assets/images/products/iphone-2.jpg",name:"Hazardous Waste",price:1900,available:35},{imgUrl:"/assets/images/products/iphone-1.jpg",name:"Metal Waste",price:100,available:0},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"Paper Waste",price:1190,available:5},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"Plastic Waste",price:1500,available:30},{imgUrl:"/assets/images/products/iphone-2.jpg",name:"Refuse Waste",price:1900,available:35},{imgUrl:"/assets/images/products/iphone-1.jpg",name:"Healthcare Risk Waste",price:100,available:0},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"Other",price:1190,available:5}]),X=function(){var e=Object(o.a)().palette;e.error.main,e.primary.main,e.secondary.main;return Object(b.jsxs)(s.a,{elevation:3,sx:{pt:"20px",mb:3},children:[Object(b.jsx)(_,{children:Object(b.jsx)(D,{children:"Waste (kg) Generation "})}),Object(b.jsx)(y.a,{overflow:"auto",children:Object(b.jsxs)($,{children:[Object(b.jsx)(I.a,{children:Object(b.jsxs)(q.a,{children:[Object(b.jsx)(J.a,{sx:{px:3},colSpan:4,children:"Waste Category"}),Object(b.jsx)(J.a,{sx:{px:0},colSpan:2,children:"Waste Mass(kg/PM)"})]})}),Object(b.jsx)(N.a,{children:E.map((function(e,t){return Object(b.jsxs)(q.a,{hover:!0,children:[Object(b.jsx)(J.a,{colSpan:4,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(b.jsx)(y.a,{display:"flex",alignItems:"center",children:Object(b.jsx)(w.g,{sx:{m:0,ml:4},children:e.name})})}),Object(b.jsxs)(J.a,{align:"left",colSpan:2,sx:{px:0,textTransform:"capitalize"},children:["$",e.price>999?(e.price/1e3).toFixed(1):e.price]})]},t)}))})]})})]})},Z=a(120),K=function(e){var t=e.height,a=Object(m.a)().palette,r={grid:{left:"6%",bottom:"10%",right:"1%"},legend:{itemGap:20,icon:"circle",textStyle:{color:a.text.secondary,fontSize:13,fontFamily:"roboto"}},color:[a.error.light,a.primary.dark,a.primary.light,a.secondary.light],barMaxWidth:"10px",dataset:{source:[["Month","Website","App","Linux","Windows","Website","App","Linux","Windows"],["Jan",2200,1200,950,800,2200,1200,950,800],["Feb",800,500,1500,600,2200,1200,950,800],["Mar",700,1350,800,700,2200,1200,950,800],["Apr",1500,1250,950,900,2200,1200,950,800],["May",2450,450,950,500,2200,1200,950,800],["June",1700,1250,1500,800,2200,1200,950,800]]},xAxis:{type:"category",axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{color:a.text.secondary,fontSize:13,fontFamily:"roboto"}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:a.text.secondary,opacity:.15}},axisLabel:{color:a.text.secondary,fontSize:13,fontFamily:"roboto"}},series:[{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}}]};return Object(b.jsx)(d.a,{style:{height:t},option:r})},Q=a(84),V={grid:{top:16,left:36,right:16,bottom:32},legend:{},tooltip:{show:!0,trigger:"axis",axisPointer:{type:"cross",lineStyle:{opacity:0}},crossStyle:{color:"#000"}},series:[{areaStyle:{},smooth:!0,lineStyle:{width:2,color:"#fff"}}],xAxis:{show:!0,type:"category",showGrid:!1,boundaryGap:!1,axisLabel:{color:"#ccc",margin:20},axisLine:{show:!1},axisTick:{show:!1}},yAxis:{type:"value",min:10,max:60,axisLabel:{color:"#ccc",margin:20,fontSize:13,fontFamily:"roboto"},splitLine:{show:!0,lineStyle:{color:"rgba(255, 255, 255, .1)"}},axisLine:{show:!1},axisTick:{show:!1}},color:[{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255,255,255,0.3)"},{offset:1,color:"rgba(255,255,255,0)"}],global:!1}]},Y=function(e){var t=e.height,a=e.option;return Object(b.jsx)(d.a,{style:{height:t},option:Object(Q.merge)({},V,a)})},ee=function(e){var t=e.height,a=e.colors,r=void 0===a?[]:a,i=Object(m.a)().palette,o={grid:{left:"6%",bottom:"10%",right:"1%"},legend:{itemGap:70,icon:"circle",textStyle:{color:i.text.secondary,fontSize:13,fontFamily:"roboto"}},color:Object(l.a)(r),barMaxWidth:"10px",dataset:{source:[["Month","Covid","General","Hazardous","Metal","Paper","Plastic","Refuse","Healthcare","Other"],["Jan",2200,1200,950,800,2200,1200,950,800],["Feb",800,500,1500,600,2200,1200,950,800],["Mar",700,1350,800,700,2200,1200,950,800],["Apr",1500,1250,950,900,2200,1200,950,800],["May",2450,450,950,500,2200,1200,950,800],["June",1700,1250,1500,800,2200,1200,950,800]]},xAxis:{type:"category",axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{color:i.text.secondary,fontSize:13,fontFamily:"roboto"}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:i.text.secondary,opacity:.15}},axisLabel:{color:i.text.secondary,fontSize:13,fontFamily:"roboto"}},series:[{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}},{type:"bar",itemStyle:{borderRadius:[10,10,0,0]}}]};return Object(b.jsx)(d.a,{style:{height:t},option:o})},te=function(e){var t=e.height,a=e.color,r=void 0===a?[]:a,i={legend:{show:!0,itemGap:50,icon:"circle",bottom:0,textStyle:{fontSize:9,fontFamily:"roboto",fontWeight:"bold"}},tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},xAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],yAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"Task Rate",type:"pie",radius:["45%","72.55%"],center:["50%","50%"],avoidLabelOverlap:!1,hoverOffset:5,stillShowZeroSum:!1,label:{normal:{show:!1,position:"center",textStyle:{color:Object(m.a)().palette.text.secondary,fontSize:13,fontFamily:"roboto"},formatter:"{a}"},emphasis:{show:!0,textStyle:{fontSize:"14",fontWeight:"bold"},formatter:"{b}: {c}% "}},labelLine:{normal:{show:!1}},data:[{value:10,name:"Covid"},{value:14,name:"General"},{value:10,name:"Hazardous"},{value:30,name:"Metal"},{value:5,name:"Paper"},{value:90,name:"Plastic"},{value:8,name:"Refuse"},{value:20,name:"Healthcare"},{value:21,name:"Other"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return Object(b.jsx)(d.a,{style:{height:t},option:Object(x.a)(Object(x.a)({},i),{},{color:Object(l.a)(r)})})},ae=(Object(i.a)(y.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),Object(i.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),Object(i.a)(H.a)((function(){return{minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}}))),re=(Object(i.a)("small")((function(e){return{width:50,height:15,color:"#fff",padding:"2px 8px",borderRadius:"4px",overflow:"hidden",background:e.bgcolor,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"}})),[{name:"Covid Waste",weekly:100,monthly:15,color:"#C0C0C0"},{name:"General Waste",weekly:100,monthly:15,color:"#808000"},{name:"Hazardous Waste",weekly:100,monthly:15,color:"#008000"},{name:"Metal Waste",weekly:100,monthly:15,color:"#00FFFF"},{name:"Paper Waste",weekly:100,monthly:15,color:"#008080"},{name:"Plastic Waste",weekly:100,monthly:15,color:"#000080"},{name:"Refuse Waste",weekly:100,monthly:15,color:"#FF00FF"},{name:"Healthcare Risk Waste",weekly:100,monthly:15,color:"#0000FF"},{name:"Other",weekly:100,monthly:15,color:"#800080"}]),ie=function(){var e=Object(o.a)().palette;e.error.main,e.primary.main,e.secondary.main;return Object(b.jsx)(s.a,{elevation:3,sx:{pt:"20px",mb:3},children:Object(b.jsx)(y.a,{overflow:"auto",children:Object(b.jsxs)(ae,{children:[Object(b.jsx)(I.a,{children:Object(b.jsxs)(q.a,{children:[Object(b.jsx)(J.a,{sx:{px:0},colSpan:0}),Object(b.jsx)(J.a,{sx:{px:0},colSpan:3,children:"Waste Category"}),Object(b.jsx)(J.a,{sx:{px:0},colSpan:2,children:"Weekly Waste Mass(kg/PM)"}),Object(b.jsx)(J.a,{sx:{px:0},colSpan:2,children:"Monthly Waste Mass(kg/PM)"})]})}),Object(b.jsx)(N.a,{children:re.map((function(e,t){return Object(b.jsxs)(q.a,{hover:!0,children:[Object(b.jsx)(J.a,{colSpan:0,align:"center",sx:{px:0,textTransform:"capitalize"},children:Object(b.jsx)(u.a,{className:"icon",style:{color:"".concat(e.color)},children:"brightness_1"})}),Object(b.jsx)(J.a,{colSpan:3,align:"left",sx:{px:0,textTransform:"capitalize"},children:e.name}),Object(b.jsx)(J.a,{align:"center",colSpan:2,sx:{px:0,textTransform:"capitalize"},children:e.weekly}),Object(b.jsx)(J.a,{align:"center",colSpan:2,sx:{px:0,textTransform:"capitalize"},children:e.monthly})]},t)}))})]})})})},oe=Object(i.a)("div")((function(e){var t=e.theme;return Object(r.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})})),ne=Object(i.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}})),se=Object(i.a)("span")((function(e){return{fontSize:"0.875rem",color:e.theme.palette.text.secondary}})),ce=Object(i.a)("h4")((function(e){return{fontSize:"1rem",fontWeight:"500",marginBottom:"16px",textTransform:"capitalize",color:e.theme.palette.text.secondary}}));t.default=function(){var e=Object(o.a)().palette,t=Object(o.a)(),a="#800080",r="#FF00FF",i="#000080",l="#0000FF",x="#008080",p="#00FFFF",m="#008000",d="#808000",j="#C0C0C0";return Object(b.jsx)(c.Fragment,{children:Object(b.jsxs)(oe,{className:"admin-analytics",children:[Object(b.jsxs)(Z.a,{title:"Waste Categories",sx:{mb:"24px"},children:[Object(b.jsx)(Z.a,{sx:{mb:"24px"},children:Object(b.jsx)(ee,{height:"450px",colors:[j,d,m,p,x,i,r,l,a]})}),Object(b.jsxs)(n.a,{container:!0,spacing:3,children:[Object(b.jsx)(n.a,{item:!0,lg:6,md:8,sm:12,xs:12,children:Object(b.jsx)(Z.a,{sx:{mb:"24px"},children:Object(b.jsx)(ie,{})})}),Object(b.jsx)(n.a,{item:!0,lg:6,md:8,sm:12,xs:12,children:Object(b.jsx)(Z.a,{sx:{mb:"24px"},children:Object(b.jsxs)(s.a,{sx:{px:3,py:2,mb:3},children:[Object(b.jsx)(ne,{children:"Tasks"}),Object(b.jsx)(se,{children:"Last 30 days"}),Object(b.jsx)(te,{height:"400px",color:[j,d,m,p,x,i,r,l,a]})]})})})]})]}),Object(b.jsx)(Z.a,{title:"Waste Status",sx:{mb:"24px"},children:Object(b.jsx)(Z.a,{title:"Diverted Waste Types",children:Object(b.jsx)(K,{height:"400px",color:[t.palette.primary.dark,t.palette.primary.light]})})}),Object(b.jsxs)(n.a,{container:!0,spacing:3,children:[Object(b.jsxs)(n.a,{item:!0,lg:8,md:8,sm:12,xs:12,children:[Object(b.jsx)(Y,{}),Object(b.jsx)(Z.a,{title:"ESG Reporting",children:Object(b.jsx)(T,{})}),Object(b.jsx)(X,{}),Object(b.jsx)(ce,{children:"Ongoing Projects"}),Object(b.jsx)(L,{})]}),Object(b.jsxs)(n.a,{item:!0,lg:4,md:4,sm:12,xs:12,children:[Object(b.jsxs)(s.a,{sx:{px:3,py:2,mb:3},children:[Object(b.jsx)(ne,{children:"Tasks"}),Object(b.jsx)(se,{children:"Last 30 days"}),Object(b.jsx)(h,{height:"300px",color:[e.primary.dark,e.primary.main,e.primary.light]})]}),Object(b.jsx)(B,{})]})]})]})})}}}]);