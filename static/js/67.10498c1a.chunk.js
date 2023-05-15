(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[67],{716:function(e,t,a){"use strict";a.r(t);var o=a(6),i=a(4),r=a(26),s=a(299),l=a(251),n=a(1),c=a(119),h=a(14),m=a(10),p=a(58),b=a(342),x=a(2),y=function(e){var t=e.height,a=e.color,o=void 0===a?[]:a,i=Object(p.a)(),r={grid:{top:"10%",bottom:"10%",left:"5%",right:"5%"},legend:{itemGap:20,icon:"circle",textStyle:{color:i.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},tooltip:{show:!0,trigger:"item",formatter:"{a} <br/>{b}: {c}kg "},xAxis:{type:"category",data:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{fontSize:14,fontFamily:"roboto",color:i.palette.text.secondary}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:i.palette.text.secondary,opacity:.15}},axisLabel:{color:i.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},series:[{data:[30,40,20,50,40],type:"line",stack:"This year",name:"This year",smooth:!0,symbolSize:4,lineStyle:{width:4}},{data:[20,50,15,50,30,70,95,20,50,15,50,130],type:"line",stack:"Last year",name:"Last year",smooth:!0,symbolSize:4,lineStyle:{width:4}}]};return Object(x.jsx)(b.a,{style:{height:t},option:Object(m.a)(Object(m.a)({},r),{},{color:Object(h.a)(o)})})},d=function(e){var t=e.height,a=e.color,o=void 0===a?[]:a,i=Object(p.a)(),r={legend:{show:!0,itemGap:20,icon:"circle",bottom:0,textStyle:{color:i.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},tooltip:{show:!0,trigger:"item",formatter:"{a} <br/>{b}: {c}kg ({d}%)"},xAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],yAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"Department",type:"pie",radius:["45%","72.55%"],center:["50%","50%"],avoidLabelOverlap:!1,hoverOffset:5,stillShowZeroSum:!1,label:{normal:{show:!1,position:"center",textStyle:{color:i.palette.text.secondary,fontSize:13,fontFamily:"roboto"},formatter:"{a}"},emphasis:{show:!0,textStyle:{fontSize:"14",fontWeight:"bold"},formatter:"{b}: {c}kg "}},labelLine:{normal:{show:!1}},data:[{value:10,name:"Cardiology"},{value:14,name:"Critical Care"},{value:10,name:"Intensive Care Unit"},{value:30,name:"Nephrology"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return Object(x.jsx)(b.a,{style:{height:t},option:Object(m.a)(Object(m.a)({},r),{},{color:Object(h.a)(o)})})},j=function(e){var t=e.height,a=e.color,o=void 0===a?[]:a,i=Object(p.a)(),r={legend:{show:!0,itemGap:20,icon:"circle",bottom:0,textStyle:{color:i.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},tooltip:{show:!0,trigger:"item",formatter:"{a} <br/>{b}: {c}kg ({d}%)"},xAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],yAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"Hospital",type:"pie",radius:["45%","72.55%"],center:["50%","50%"],avoidLabelOverlap:!1,hoverOffset:5,stillShowZeroSum:!1,label:{normal:{show:!1,position:"center",textStyle:{color:i.palette.text.secondary,fontSize:13,fontFamily:"roboto"},formatter:"{a}"},emphasis:{show:!0,textStyle:{fontSize:"14",fontWeight:"bold"},formatter:"{b}: {c}kg "}},labelLine:{normal:{show:!1}},data:[{value:10,name:"Green Falls"},{value:14,name:"Blue Falls"},{value:10,name:"Red Falls"},{value:30,name:"Purple Falls"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return Object(x.jsx)(b.a,{style:{height:t},option:Object(m.a)(Object(m.a)({},r),{},{color:Object(h.a)(o)})})},f=Object(i.a)("div")((function(e){var t=e.theme;return Object(o.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})})),g=Object(i.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}})),O=Object(i.a)("span")((function(e){return{fontSize:"0.875rem",color:e.theme.palette.text.secondary}}));t.default=function(){var e=Object(r.a)().palette,t=Object(r.a)();return Object(x.jsx)(n.Fragment,{children:Object(x.jsxs)(f,{className:"smart-bins-analytics",children:[Object(x.jsx)(c.a,{title:"Smart-Bins",sx:{mb:"24px"},children:Object(x.jsx)(y,{height:"350px",color:[t.palette.primary.main,t.palette.primary.light]})}),Object(x.jsxs)(s.a,{container:!0,spacing:3,children:[Object(x.jsx)(s.a,{item:!0,lg:6,md:8,sm:12,xs:12,children:Object(x.jsx)(c.a,{sx:{mb:"24px"},children:Object(x.jsxs)(l.a,{sx:{px:3,py:2,mb:3},children:[Object(x.jsx)(g,{children:"Departments"}),Object(x.jsx)(O,{children:"Last 30 days"}),Object(x.jsx)(d,{height:"300px",color:[e.primary.dark,e.primary.main,e.primary.light,"gray"]})]})})}),Object(x.jsx)(s.a,{item:!0,lg:6,md:8,sm:12,xs:12,children:Object(x.jsx)(c.a,{sx:{mb:"24px"},children:Object(x.jsxs)(l.a,{sx:{px:3,py:2,mb:3},children:[Object(x.jsx)(g,{children:"Hospital"}),Object(x.jsx)(O,{children:"Last 30 days"}),Object(x.jsx)(j,{height:"300px",color:[e.primary.dark,e.primary.main,e.primary.light,"gray"]})]})})})]})]})})}}}]);