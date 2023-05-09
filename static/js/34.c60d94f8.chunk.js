(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[34],{308:function(e,t,a){"use strict";var r=a(1),o=r.createContext();t.a=o},314:function(e,t,a){"use strict";var r=a(1),o=r.createContext();t.a=o},361:function(e,t,a){"use strict";var r=a(5),o=a(3),c=a(1),n=a(7),s=a(77),i=a(314),l=a(13),d=a(4),b=a(48),p=a(57);function j(e){return Object(b.a)("MuiTable",e)}Object(p.a)("MuiTable",["root","stickyHeader"]);var u=a(2),h=["className","component","padding","size","stickyHeader"],x=Object(d.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(o.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(o.a)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),m="table",O=c.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTable"}),d=a.className,b=a.component,p=void 0===b?m:b,O=a.padding,g=void 0===O?"normal":O,f=a.size,y=void 0===f?"medium":f,v=a.stickyHeader,w=void 0!==v&&v,S=Object(r.a)(a,h),k=Object(o.a)({},a,{component:p,padding:g,size:y,stickyHeader:w}),M=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(s.a)(a,j,t)}(k),R=c.useMemo((function(){return{padding:g,size:y,stickyHeader:w}}),[g,y,w]);return Object(u.jsx)(i.a.Provider,{value:R,children:Object(u.jsx)(x,Object(o.a)({as:p,role:p===m?null:"table",ref:t,className:Object(n.a)(M.root,d),ownerState:k},S))})}));t.a=O},362:function(e,t,a){"use strict";var r=a(3),o=a(5),c=a(1),n=a(7),s=a(77),i=a(308),l=a(13),d=a(4),b=a(48),p=a(57);function j(e){return Object(b.a)("MuiTableHead",e)}Object(p.a)("MuiTableHead",["root"]);var u=a(2),h=["className","component"],x=Object(d.a)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),m={variant:"head"},O="thead",g=c.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableHead"}),c=a.className,d=a.component,b=void 0===d?O:d,p=Object(o.a)(a,h),g=Object(r.a)({},a,{component:b}),f=function(e){var t=e.classes;return Object(s.a)({root:["root"]},j,t)}(g);return Object(u.jsx)(i.a.Provider,{value:m,children:Object(u.jsx)(x,Object(r.a)({as:b,className:Object(n.a)(f.root,c),ref:t,role:b===O?null:"rowgroup",ownerState:g},p))})}));t.a=g},363:function(e,t,a){"use strict";var r=a(6),o=a(3),c=a(5),n=a(1),s=a(7),i=a(77),l=a(225),d=a(308),b=a(13),p=a(4),j=a(48),u=a(57);function h(e){return Object(j.a)("MuiTableRow",e)}var x=Object(u.a)("MuiTableRow",["root","selected","hover","head","footer"]),m=a(2),O=["className","component","hover","selected"],g=Object(p.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(r.a)(t,"&.".concat(x.hover,":hover"),{backgroundColor:(a.vars||a).palette.action.hover}),Object(r.a)(t,"&.".concat(x.selected),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),f=n.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiTableRow"}),r=a.className,l=a.component,p=void 0===l?"tr":l,j=a.hover,u=void 0!==j&&j,x=a.selected,f=void 0!==x&&x,y=Object(c.a)(a,O),v=n.useContext(d.a),w=Object(o.a)({},a,{component:p,hover:u,selected:f,head:v&&"head"===v.variant,footer:v&&"footer"===v.variant}),S=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(i.a)(a,h,t)}(w);return Object(m.jsx)(g,Object(o.a)({as:p,ref:t,className:Object(s.a)(S.root,r),role:"tr"===p?null:"row",ownerState:w},y))}));t.a=f},364:function(e,t,a){"use strict";var r=a(6),o=a(5),c=a(3),n=a(1),s=a(7),i=a(77),l=a(225),d=a(11),b=a(314),p=a(308),j=a(13),u=a(4),h=a(48),x=a(57);function m(e){return Object(h.a)("MuiTableCell",e)}var O=Object(x.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),g=a(2),f=["align","className","component","padding","scope","size","sortDirection","variant"],y=Object(u.a)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat(Object(d.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(d.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(d.a)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(c.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(l.e)(Object(l.a)(t.palette.divider,1),.88):Object(l.b)(Object(l.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&Object(r.a)({padding:"6px 16px"},"&.".concat(O.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),v=n.forwardRef((function(e,t){var a,r=Object(j.a)({props:e,name:"MuiTableCell"}),l=r.align,u=void 0===l?"inherit":l,h=r.className,x=r.component,O=r.padding,v=r.scope,w=r.size,S=r.sortDirection,k=r.variant,M=Object(o.a)(r,f),R=n.useContext(b.a),C=n.useContext(p.a),z=C&&"head"===C.variant;a=x||(z?"th":"td");var T=v;!T&&z&&(T="col");var _=k||C&&C.variant,W=Object(c.a)({},r,{align:u,component:a,padding:O||(R&&R.padding?R.padding:"normal"),size:w||(R&&R.size?R.size:"medium"),sortDirection:S,stickyHeader:"head"===_&&R&&R.stickyHeader,variant:_}),P=function(e){var t=e.classes,a=e.variant,r=e.align,o=e.padding,c=e.size,n={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==r&&"align".concat(Object(d.a)(r)),"normal"!==o&&"padding".concat(Object(d.a)(o)),"size".concat(Object(d.a)(c))]};return Object(i.a)(n,m,t)}(W),H=null;return S&&(H="asc"===S?"ascending":"descending"),Object(g.jsx)(y,Object(c.a)({as:a,ref:t,className:Object(s.a)(P.root,h),"aria-sort":H,scope:T,ownerState:W},M))}));t.a=v},365:function(e,t,a){"use strict";var r=a(3),o=a(5),c=a(1),n=a(7),s=a(77),i=a(308),l=a(13),d=a(4),b=a(48),p=a(57);function j(e){return Object(b.a)("MuiTableBody",e)}Object(p.a)("MuiTableBody",["root"]);var u=a(2),h=["className","component"],x=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),m={variant:"body"},O="tbody",g=c.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableBody"}),c=a.className,d=a.component,b=void 0===d?O:d,p=Object(o.a)(a,h),g=Object(r.a)({},a,{component:b}),f=function(e){var t=e.classes;return Object(s.a)({root:["root"]},j,t)}(g);return Object(u.jsx)(i.a.Provider,{value:m,children:Object(u.jsx)(x,Object(r.a)({className:Object(n.a)(f.root,c),as:b,ref:t,role:b===O?null:"rowgroup",ownerState:g},p))})}));t.a=g},710:function(e,t,a){"use strict";a.r(t);var r=a(32),o=a(45),c=a(12),n=a(6),s=a(4),i=a(299),l=a(251),d=a(1),b=a(64),p=a(119),j=a(14),u=a(58),h=a(345),x=a(2),m=function(e){var t=e.height,a=e.colors,r=void 0===a?[]:a,o=e.Series,c=e.dateBarDataset,n=Object(u.a)().palette,s={grid:{left:"6%",bottom:"10%",right:"1%"},color:Object(j.a)(r),barMaxWidth:"10px",tooltip:{show:!0,trigger:"item"},xAxis:{type:"category",data:c,axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{color:n.text.secondary,fontSize:13,fontFamily:"roboto"}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:n.text.secondary,opacity:.15}},axisLabel:{color:n.text.secondary,fontSize:13,fontFamily:"roboto"}},series:[{name:"Covid",type:"bar",itemStyle:{borderRadius:[10,10,0,0]},data:o[0].covid_waste},{name:"General",type:"bar",itemStyle:{borderRadius:[10,10,0,0]},data:o[0].general_waste},{name:"Hazardous",type:"bar",itemStyle:{borderRadius:[10,10,0,0]},data:o[0].hazardous_waste},{name:"Metal",type:"bar",itemStyle:{borderRadius:[10,10,0,0]},data:o[0].metal_waste},{name:"Paper",type:"bar",itemStyle:{borderRadius:[10,10,0,0]},data:o[0].paper_waste},{name:"Plastic",type:"bar",itemStyle:{borderRadius:[10,10,0,0]},data:o[0].plastic_waste},{name:"Refuse",type:"bar",itemStyle:{borderRadius:[10,10,0,0]},data:o[0].refuse_waste},{name:"Healthcare",type:"bar",itemStyle:{borderRadius:[10,10,0,0]},data:o[0].healthcare_waste},{name:"Other",type:"bar",itemStyle:{borderRadius:[10,10,0,0]},data:o[0].other}]};return Object(x.jsx)(h.a,{style:{height:t},option:s})},O=a(10),g=function(e){var t=e.height,a=e.color,r=void 0===a?[]:a,o=e.pieDataset,c=e.tooltip,n=e.formatter,s={tooltip:{show:!0,trigger:"item",formatter:c},xAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],yAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"Waste Category",type:"pie",radius:["45%","72.55%"],center:["50%","50%"],avoidLabelOverlap:!1,hoverOffset:5,stillShowZeroSum:!1,label:{normal:{show:!1,position:"center",textStyle:{color:Object(u.a)().palette.text.secondary,fontSize:13,fontFamily:"roboto"},formatter:"{a}"},emphasis:{show:!0,textStyle:{fontSize:"14",fontWeight:"bold"},formatter:n}},labelLine:{normal:{show:!1}},data:o,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return Object(x.jsx)(h.a,{style:{height:t},option:Object(O.a)(Object(O.a)({},s),{},{color:Object(j.a)(r)})})},f=a(361),y=a(170),v=a(362),w=a(363),S=a(364),k=a(365),M=a(173),R=Object(s.a)(f.a)((function(){return{minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}})),C=function(e){var t=e.tableDataset;return console.log(t),Object(x.jsx)(l.a,{elevation:3,sx:{pt:"20px",mb:3},children:Object(x.jsx)(y.a,{overflow:"auto",children:Object(x.jsxs)(R,{children:[Object(x.jsx)(v.a,{children:Object(x.jsxs)(w.a,{children:[Object(x.jsx)(S.a,{sx:{px:0},colSpan:0}),Object(x.jsx)(S.a,{sx:{px:0},colSpan:3,children:"Waste Category"}),Object(x.jsx)(S.a,{sx:{px:0},colSpan:2,children:"Weekly"}),Object(x.jsx)(S.a,{sx:{px:0},colSpan:2,children:"Monthly"})]})}),Object(x.jsx)(k.a,{children:t.map((function(e,t){return Object(x.jsxs)(w.a,{hover:!0,children:[Object(x.jsx)(S.a,{colSpan:0,align:"center",sx:{px:0,textTransform:"capitalize"},children:Object(x.jsx)(M.a,{className:"icon",style:{color:"".concat(e[0].color)},children:"brightness_1"})}),Object(x.jsx)(S.a,{colSpan:3,align:"left",sx:{px:0,textTransform:"capitalize"},children:e[0].category}),Object(x.jsx)(S.a,{align:"center",colSpan:2,sx:{px:0,textTransform:"capitalize"},children:e[0].wastePerWeek}),Object(x.jsx)(S.a,{align:"center",colSpan:2,sx:{px:0,textTransform:"capitalize"},children:e[0].wastePerMonth})]},t)}))})]})})})},z=Object(s.a)("div")((function(e){var t=e.theme;return Object(n.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})})),T=Object(s.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}})),_=Object(s.a)("span")((function(e){return{fontSize:"0.875rem",color:e.theme.palette.text.secondary}})),W=[[{color:"#C0C0C0",category:"Covid Waste",wastePerWeek:"0",wastePerMonth:"0"}],[{color:"#808000",category:"General Waste",wastePerWeek:"0",wastePerMonth:"0"}],[{color:"#008000",category:"Hazardous Waste",wastePerWeek:"0",wastePerMonth:"0"}],[{color:"#00FFFF",category:"Metal Waste",wastePerWeek:"0",wastePerMonth:"0"}],[{color:"#008080",category:"Paper Waste",wastePerWeek:"0",wastePerMonth:"0"}],[{color:"#0000FF",category:"Plastic Waste",wastePerWeek:"0",wastePerMonth:"0"}],[{color:"#000080",category:"Refuse Waste",wastePerWeek:"0",wastePerMonth:"0"}],[{color:"#FF00FF",category:"Healthcare Risk Waste",wastePerWeek:"0",wastePerMonth:"0"}],[{color:"#800080",category:"Other",wastePerWeek:"0",wastePerMonth:"0"}]];t.default=function(){var e=Object(d.useState)([]),t=Object(c.a)(e,2),a=t[0],n=t[1],s=Object(d.useState)([]),j=Object(c.a)(s,2),u=j[0],h=j[1],O=Object(d.useState)([]),f=Object(c.a)(O,2),y=f[0],v=f[1],w=Object(d.useState)([W]),S=Object(c.a)(w,2),k=S[0],M=S[1],R=Object(d.useState)([W]),P=Object(c.a)(R,2),H=P[0],F=P[1],N=Object(d.useState)([{covid_waste:[0],general_waste:[0],hazardous_waste:[0],metal_waste:[0],paper_waste:[0],plastic_waste:[0],refuse_waste:[0],healthcare_waste:[0],other:[0]}]),L=Object(c.a)(N,2),A=L[0],B=L[1],D=Object(d.useState)([{covid_waste:[0],general_waste:[0],hazardous_waste:[0],metal_waste:[0],paper_waste:[0],plastic_waste:[0],refuse_waste:[0],healthcare_waste:[0],other:[0]}]),q=Object(c.a)(D,2),J=q[0],G=q[1];Object(d.useEffect)((function(){var e=window.localStorage.getItem("accessToken"),t=function(){var t=Object(o.a)(Object(r.a)().mark((function t(){var a,o,c,s,i,l;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("/dashboards/req-waste-category-bar",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:a=t.sent,o=a.data,c=o.status,s=o.Requisitions,i=o.Mass,l=o.date_data,console.log(s[0]),"success"===c&&(n(l),B(s),G(i)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("error: "+t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(o.a)(Object(r.a)().mark((function t(){var a,o,c,n,s;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("/dashboards/req-waste-category-pie",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:a=t.sent,o=a.data,c=o.status,n=o.pie_req_data,s=o.pie_mass_data,"success"===c&&(h(n),v(s)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error: "+t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(o.a)(Object(r.a)().mark((function t(){var a,o,c,n,s;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("/dashboards/req-waste-category-table",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 3:a=t.sent,o=a.data,c=o.status,n=o.total_req_waste,s=o.total_mass_waste,"success"===c&&(M(n),F(s)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error: "+t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t(),a(),c()}),[]);var I="#800080",E="#FF00FF",X="#000080",Z="#0000FF",K="#008080",Q="#00FFFF",U="#008000",V="#808000",Y="#C0C0C0";return Object(x.jsx)(d.Fragment,{children:Object(x.jsxs)(z,{className:"admin-analytics",children:[Object(x.jsxs)(p.a,{title:"Waste Categories: Requisitions",sx:{mb:"24px"},children:[Object(x.jsx)(p.a,{sx:{mb:"24px"},children:Object(x.jsx)(m,{height:"450px",colors:[Y,V,U,Q,K,X,E,Z,I],Series:A,dateBarDataset:a})}),Object(x.jsxs)(i.a,{container:!0,spacing:3,children:[Object(x.jsx)(i.a,{item:!0,lg:6,md:8,sm:12,xs:12,children:Object(x.jsx)(p.a,{sx:{mb:"24px"},children:Object(x.jsx)(C,{tableDataset:k})})}),Object(x.jsx)(i.a,{item:!0,lg:6,md:8,sm:12,xs:12,children:Object(x.jsx)(p.a,{sx:{mb:"24px"},children:Object(x.jsxs)(l.a,{sx:{px:3,py:2,mb:3},children:[Object(x.jsx)(T,{children:"Waste Category"}),Object(x.jsx)(_,{children:"Last 30 days"}),Object(x.jsx)(g,{height:"490px",color:[Y,V,U,Q,K,X,E,Z,I],pieDataset:u,tooltip:"{a} <br/>{b}: {c} ({d}%)",formatter:"{b}: {c} ({d}%)"})]})})})]})]}),Object(x.jsxs)(p.a,{title:"Waste Categories: Mass",sx:{mb:"24px"},children:[Object(x.jsx)(p.a,{sx:{mb:"24px"},children:Object(x.jsx)(m,{height:"450px",colors:[Y,V,U,Q,K,X,E,Z,I],Series:J,dateBarDataset:a})}),Object(x.jsxs)(i.a,{container:!0,spacing:3,children:[Object(x.jsx)(i.a,{item:!0,lg:6,md:8,sm:12,xs:12,children:Object(x.jsx)(p.a,{sx:{mb:"24px"},children:Object(x.jsx)(C,{tableDataset:H})})}),Object(x.jsx)(i.a,{item:!0,lg:6,md:8,sm:12,xs:12,children:Object(x.jsx)(p.a,{sx:{mb:"24px"},children:Object(x.jsxs)(l.a,{sx:{px:3,py:2,mb:3},children:[Object(x.jsx)(T,{children:"Waste Category"}),Object(x.jsx)(_,{children:"Last 30 days"}),Object(x.jsx)(g,{height:"490px",color:[Y,V,U,Q,K,X,E,Z,I],pieDataset:y,tooltip:"{a} <br/>{b}: {c}kg ({d}%)",formatter:"{b}: {c}kg ({d}%)"})]})})})]})]})]})})}}}]);