(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[11],{310:function(e,t,a){"use strict";var n=a(1),r=n.createContext();t.a=r},317:function(e,t,a){"use strict";var n=a(1),r=n.createContext();t.a=r},368:function(e,t,a){"use strict";var n=a(6),r=a(4),c=a(1),i=a(8),s=a(78),o=a(317),l=a(14),d=a(5),j=a(49),b=a(58);function p(e){return Object(j.a)("MuiTable",e)}Object(b.a)("MuiTable",["root","stickyHeader"]);var x=a(2),m=["className","component","padding","size","stickyHeader"],O=Object(d.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(r.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),h="table",u=c.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTable"}),d=a.className,j=a.component,b=void 0===j?h:j,u=a.padding,g=void 0===u?"normal":u,f=a.size,v=void 0===f?"medium":f,y=a.stickyHeader,w=void 0!==y&&y,T=Object(n.a)(a,m),k=Object(r.a)({},a,{component:b,padding:g,size:v,stickyHeader:w}),S=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(s.a)(a,p,t)}(k),z=c.useMemo((function(){return{padding:g,size:v,stickyHeader:w}}),[g,v,w]);return Object(x.jsx)(o.a.Provider,{value:z,children:Object(x.jsx)(O,Object(r.a)({as:b,role:b===h?null:"table",ref:t,className:Object(i.a)(S.root,d),ownerState:k},T))})}));t.a=u},369:function(e,t,a){"use strict";var n=a(4),r=a(6),c=a(1),i=a(8),s=a(78),o=a(310),l=a(14),d=a(5),j=a(49),b=a(58);function p(e){return Object(j.a)("MuiTableHead",e)}Object(b.a)("MuiTableHead",["root"]);var x=a(2),m=["className","component"],O=Object(d.a)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),h={variant:"head"},u="thead",g=c.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableHead"}),c=a.className,d=a.component,j=void 0===d?u:d,b=Object(r.a)(a,m),g=Object(n.a)({},a,{component:j}),f=function(e){var t=e.classes;return Object(s.a)({root:["root"]},p,t)}(g);return Object(x.jsx)(o.a.Provider,{value:h,children:Object(x.jsx)(O,Object(n.a)({as:j,className:Object(i.a)(f.root,c),ref:t,role:j===u?null:"rowgroup",ownerState:g},b))})}));t.a=g},370:function(e,t,a){"use strict";var n=a(7),r=a(4),c=a(6),i=a(1),s=a(8),o=a(78),l=a(226),d=a(310),j=a(14),b=a(5),p=a(49),x=a(58);function m(e){return Object(p.a)("MuiTableRow",e)}var O=Object(x.a)("MuiTableRow",["root","selected","hover","head","footer"]),h=a(2),u=["className","component","hover","selected"],g=Object(b.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(n.a)(t,"&.".concat(O.hover,":hover"),{backgroundColor:(a.vars||a).palette.action.hover}),Object(n.a)(t,"&.".concat(O.selected),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),f=i.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiTableRow"}),n=a.className,l=a.component,b=void 0===l?"tr":l,p=a.hover,x=void 0!==p&&p,O=a.selected,f=void 0!==O&&O,v=Object(c.a)(a,u),y=i.useContext(d.a),w=Object(r.a)({},a,{component:b,hover:x,selected:f,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),T=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(o.a)(a,m,t)}(w);return Object(h.jsx)(g,Object(r.a)({as:b,ref:t,className:Object(s.a)(T.root,n),role:"tr"===b?null:"row",ownerState:w},v))}));t.a=f},371:function(e,t,a){"use strict";var n=a(7),r=a(6),c=a(4),i=a(1),s=a(8),o=a(78),l=a(226),d=a(12),j=a(317),b=a(310),p=a(14),x=a(5),m=a(49),O=a(58);function h(e){return Object(m.a)("MuiTableCell",e)}var u=Object(O.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),g=a(2),f=["align","className","component","padding","scope","size","sortDirection","variant"],v=Object(x.a)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat(Object(d.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(d.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(d.a)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(c.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(l.e)(Object(l.a)(t.palette.divider,1),.88):Object(l.b)(Object(l.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&Object(n.a)({padding:"6px 16px"},"&.".concat(u.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),y=i.forwardRef((function(e,t){var a,n=Object(p.a)({props:e,name:"MuiTableCell"}),l=n.align,x=void 0===l?"inherit":l,m=n.className,O=n.component,u=n.padding,y=n.scope,w=n.size,T=n.sortDirection,k=n.variant,S=Object(r.a)(n,f),z=i.useContext(j.a),M=i.useContext(b.a),C=M&&"head"===M.variant;a=O||(C?"th":"td");var R=y;!R&&C&&(R="col");var H=k||M&&M.variant,_=Object(c.a)({},n,{align:x,component:a,padding:u||(z&&z.padding?z.padding:"normal"),size:w||(z&&z.size?z.size:"medium"),sortDirection:T,stickyHeader:"head"===H&&z&&z.stickyHeader,variant:H}),N=function(e){var t=e.classes,a=e.variant,n=e.align,r=e.padding,c=e.size,i={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==n&&"align".concat(Object(d.a)(n)),"normal"!==r&&"padding".concat(Object(d.a)(r)),"size".concat(Object(d.a)(c))]};return Object(o.a)(i,h,t)}(_),L=null;return T&&(L="asc"===T?"ascending":"descending"),Object(g.jsx)(v,Object(c.a)({as:a,ref:t,className:Object(s.a)(N.root,m),"aria-sort":L,scope:R,ownerState:_},S))}));t.a=y},372:function(e,t,a){"use strict";var n=a(4),r=a(6),c=a(1),i=a(8),s=a(78),o=a(310),l=a(14),d=a(5),j=a(49),b=a(58);function p(e){return Object(j.a)("MuiTableBody",e)}Object(b.a)("MuiTableBody",["root"]);var x=a(2),m=["className","component"],O=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),h={variant:"body"},u="tbody",g=c.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableBody"}),c=a.className,d=a.component,j=void 0===d?u:d,b=Object(r.a)(a,m),g=Object(n.a)({},a,{component:j}),f=function(e){var t=e.classes;return Object(s.a)({root:["root"]},p,t)}(g);return Object(x.jsx)(o.a.Provider,{value:h,children:Object(x.jsx)(O,Object(n.a)({className:Object(i.a)(f.root,c),as:j,ref:t,role:j===u?null:"rowgroup",ownerState:g},b))})}));t.a=g},424:function(e,t,a){"use strict";a(33),a(46);var n=a(7),r=a(5),c=a(252),i=a(300),s=a(288),o=a(171),l=a(68),d=a(41),j=(a(65),a(2)),b=Object(r.a)(c.a)((function(e){var t=e.theme;return Object(n.a)({marginBottom:"24px",padding:"24px !important"},t.breakpoints.down("sm"),{paddingLeft:"16px !important"})})),p=Object(r.a)(c.a)((function(e){var t=e.theme;return Object(n.a)({boxShadow:"none",textAlign:"center",position:"relative",padding:"24px !important",background:"rgb(".concat(Object(l.a)(t.palette.primary.main),", 0.15) !important")},t.breakpoints.down("sm"),{padding:"16px !important"})})),x=Object(r.a)(c.a)((function(e){var t=e.theme;return Object(n.a)({boxShadow:"none",textAlign:"left",position:"relative",padding:"24px !important",background:"rgb(".concat(Object(l.a)(t.palette.primary.main),", 0.15) !important")},t.breakpoints.down("sm"),{padding:"16px !important"})}));window.localStorage.getItem("accessToken");t.a=function(e){var t=e.requisition;return Object(j.jsx)(b,{children:Object(j.jsxs)(p,{elevation:0,children:[Object(j.jsxs)(d.c,{children:["ID: ",t.requision_id]}),Object(j.jsx)(s.a,{sx:{my:3}}),Object(j.jsxs)(i.a,{container:!0,spacing:3,children:[Object(j.jsx)(i.a,{item:!0,lg:6,md:3,sm:12,xs:12,children:Object(j.jsx)(x,{children:Object(j.jsxs)(o.a,{ml:"-5px",children:[Object(j.jsxs)(d.d,{children:["To: ",Object(j.jsx)("small",{children:t.serviceProviderName})]}),Object(j.jsxs)(d.d,{children:["WasteType: ",Object(j.jsx)("small",{children:t.wasteType})]}),Object(j.jsxs)(d.d,{children:["Requestor: ",Object(j.jsx)("small",{children:t.hospitalName})]}),Object(j.jsxs)(d.d,{children:["Creation Date: ",Object(j.jsx)("small",{children:t.created_date})]})]})})}),Object(j.jsx)(i.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(j.jsx)(x,{children:Object(j.jsxs)(o.a,{ml:"-5px",children:[Object(j.jsxs)(d.d,{children:["Collection Address: ",Object(j.jsx)("small",{children:t.collection_address})]}),Object(j.jsxs)(d.d,{children:["Bin Location: ",Object(j.jsx)("small",{children:t.bin_location})]}),Object(j.jsxs)(d.d,{children:["Expected qty: ",Object(j.jsx)("small",{children:t.expected_qty})]}),Object(j.jsxs)(d.d,{children:["Colletion Date: ",Object(j.jsx)("small",{children:t.collection_Date})]})]})})})]})]})})}},496:function(e,t,a){"use strict";var n=a(33),r=a(46),c=a(13),i=a(7),s=a(5),o=a(252),l=a(171),d=a(288),j=a(300),b=a(41),p=a(1),x=a(368),m=a(369),O=a(370),h=a(371),u=a(372),g=a(2),f=Object(s.a)(x.a)((function(){return{minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}})),v=function(e){var t=e.manifest;return Object(g.jsx)(o.a,{elevation:3,sx:{pt:"20px",mb:3},children:Object(g.jsx)(l.a,{overflow:"auto",children:Object(g.jsxs)(f,{children:[Object(g.jsx)(m.a,{children:Object(g.jsxs)(O.a,{children:[Object(g.jsx)(h.a,{sx:{px:0},colSpan:2,children:"Waste Type"}),Object(g.jsx)(h.a,{sx:{px:0},colSpan:2,children:"Treatment"}),Object(g.jsx)(h.a,{sx:{px:0},colSpan:2,children:"Bin Location"}),Object(g.jsx)(h.a,{sx:{px:0},colSpan:2,children:"Bin Qty"}),Object(g.jsx)(h.a,{sx:{px:0},colSpan:2,children:"Bin Sizes"}),Object(g.jsx)(h.a,{sx:{px:0},colSpan:2,children:"Mass (Kg)"})]})}),Object(g.jsx)(u.a,{children:Object(g.jsxs)(O.a,{hover:!0,children:[Object(g.jsx)(h.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(g.jsx)(l.a,{display:"flex",alignItems:"center",children:Object(g.jsx)(b.g,{sx:{m:0,ml:0},children:t.wasteType})})}),Object(g.jsx)(h.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(g.jsx)(l.a,{display:"flex",alignItems:"center",children:Object(g.jsx)(b.g,{sx:{m:0,ml:0},children:t.treatment})})}),Object(g.jsx)(h.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(g.jsx)(l.a,{display:"flex",alignItems:"center",children:Object(g.jsx)(b.g,{sx:{m:0,ml:0},children:t.bin_location})})}),Object(g.jsx)(h.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(g.jsx)(l.a,{display:"flex",alignItems:"center",children:Object(g.jsx)(b.g,{sx:{m:0,ml:0},children:t.bin_qty})})}),Object(g.jsx)(h.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(g.jsx)(l.a,{display:"flex",alignItems:"center",children:Object(g.jsx)(b.g,{sx:{m:0,ml:0},children:t.bin_size})})}),Object(g.jsx)(h.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(g.jsx)(l.a,{display:"flex",alignItems:"center",children:Object(g.jsx)(b.g,{sx:{m:0,ml:0},children:t.waste_mass})})})]})})]})})})},y=a(65),w=Object(s.a)(o.a)((function(e){var t=e.theme;return Object(i.a)({marginBottom:"24px",padding:"24px !important"},t.breakpoints.down("sm"),{paddingLeft:"16px !important"})})),T=Object(s.a)(l.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),k=Object(s.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}}));t.a=function(e){var t=e.requisition,a=Object(p.useState)([]),i=Object(c.a)(a,2),s=i[0],o=i[1];return Object(p.useEffect)((function(){var e=function(){var e=Object(r.a)(Object(n.a)().mark((function e(){var a,r,c,i,s,l;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=window.localStorage.getItem("accessToken"),r="/manifest/requisionId?requisition_id="+t.requision_id,e.next=5,y.a.get(r,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 5:c=e.sent,i=c.data,s=i.status,l=i.manifests,"success"===s&&o(l[0]),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[t.requision_id]),Object(g.jsxs)(w,{children:[Object(g.jsx)(T,{children:Object(g.jsxs)(b.a,{children:["Manifest    ",Object(g.jsx)(k,{children:"Details"})]})}),Object(g.jsx)(d.a,{sx:{my:5}}),Object(g.jsxs)(j.a,{container:!0,spacing:3,children:[Object(g.jsxs)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:[Object(g.jsx)(b.b,{children:s.company_name}),Object(g.jsx)(b.e,{children:s.requisition_id})]}),Object(g.jsx)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,style:{alignSelf:"flex-end"},children:Object(g.jsxs)(l.a,{ml:"-5px",style:{textAlign:"right"},children:[Object(g.jsxs)(b.e,{children:["Manifest Status:  ",Object(g.jsx)(b.h,{style:{marginLeft:"2.5rem"},children:s.status})]}),Object(g.jsxs)(b.e,{children:["Manifest Date:  ",Object(g.jsx)(b.h,{style:{marginLeft:"2.5rem"},children:s.created_date})]})]})})]}),Object(g.jsx)(d.a,{sx:{my:5}}),Object(g.jsxs)(j.a,{container:!0,spacing:3,children:[Object(g.jsxs)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:[Object(g.jsx)(b.c,{children:"Collection "}),Object(g.jsxs)(b.e,{children:["Operator In:  ",Object(g.jsx)(b.h,{style:{marginLeft:"2.5rem"},children:s.operator_in})]}),Object(g.jsxs)(b.e,{children:["Time In:  ",Object(g.jsx)(b.h,{style:{marginLeft:"2.5rem"},children:s.time_in})]}),Object(g.jsxs)(b.e,{children:["Operator Out:  ",Object(g.jsx)(b.h,{style:{marginLeft:"2.5rem"},children:s.operator_out})]}),Object(g.jsxs)(b.e,{children:["Time Out:   ",Object(g.jsx)(b.h,{style:{marginLeft:"2.5rem"},children:s.time_out})]})]}),Object(g.jsx)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,style:{alignSelf:"flex-end"},children:Object(g.jsxs)(l.a,{ml:"-5px",style:{textAlign:"right"},children:[Object(g.jsx)(b.c,{children:"Disposal"}),Object(g.jsxs)(b.e,{children:["Landfill:  ",Object(g.jsx)(b.h,{style:{marginLeft:"2.5rem"},children:s.landfill})]}),Object(g.jsxs)(b.e,{children:["Notes:  ",Object(g.jsx)(b.h,{style:{marginLeft:"2.5rem"},children:s.notes})]})]})})]}),Object(g.jsx)(d.a,{sx:{my:5}}),Object(g.jsx)(v,{manifest:s}),Object(g.jsx)(d.a,{sx:{my:5}}),Object(g.jsxs)(l.a,{ml:"-5px",style:{textAlign:"right"},children:[Object(g.jsxs)(b.e,{children:["Total Mass (Kg):  ",Object(g.jsx)(b.h,{style:{marginLeft:"2.5rem"},children:s.waste_mass})]}),Object(g.jsxs)(b.e,{children:["Tonnage Charged:  ",Object(g.jsx)(b.h,{style:{marginLeft:"2.5rem"},children:s.waste_mass})]})]})]})}}}]);