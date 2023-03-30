(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[34],{310:function(e,t,a){"use strict";var n=a(1),i=n.createContext();t.a=i},317:function(e,t,a){"use strict";var n=a(1),i=n.createContext();t.a=i},365:function(e,t,a){"use strict";var n=a(6),i=a(4),r=a(1),c=a(8),s=a(78),o=a(317),l=a(14),d=a(5),j=a(49),p=a(58);function b(e){return Object(j.a)("MuiTable",e)}Object(p.a)("MuiTable",["root","stickyHeader"]);var u=a(2),x=["className","component","padding","size","stickyHeader"],O=Object(d.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(i.a)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),m="table",h=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTable"}),d=a.className,j=a.component,p=void 0===j?m:j,h=a.padding,f=void 0===h?"normal":h,g=a.size,v=void 0===g?"medium":g,y=a.stickyHeader,w=void 0!==y&&y,k=Object(n.a)(a,x),T=Object(i.a)({},a,{component:p,padding:f,size:v,stickyHeader:w}),S=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(s.a)(a,b,t)}(T),_=r.useMemo((function(){return{padding:f,size:v,stickyHeader:w}}),[f,v,w]);return Object(u.jsx)(o.a.Provider,{value:_,children:Object(u.jsx)(O,Object(i.a)({as:p,role:p===m?null:"table",ref:t,className:Object(c.a)(S.root,d),ownerState:T},k))})}));t.a=h},366:function(e,t,a){"use strict";var n=a(4),i=a(6),r=a(1),c=a(8),s=a(78),o=a(310),l=a(14),d=a(5),j=a(49),p=a(58);function b(e){return Object(j.a)("MuiTableHead",e)}Object(p.a)("MuiTableHead",["root"]);var u=a(2),x=["className","component"],O=Object(d.a)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),m={variant:"head"},h="thead",f=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableHead"}),r=a.className,d=a.component,j=void 0===d?h:d,p=Object(i.a)(a,x),f=Object(n.a)({},a,{component:j}),g=function(e){var t=e.classes;return Object(s.a)({root:["root"]},b,t)}(f);return Object(u.jsx)(o.a.Provider,{value:m,children:Object(u.jsx)(O,Object(n.a)({as:j,className:Object(c.a)(g.root,r),ref:t,role:j===h?null:"rowgroup",ownerState:f},p))})}));t.a=f},367:function(e,t,a){"use strict";var n=a(7),i=a(4),r=a(6),c=a(1),s=a(8),o=a(78),l=a(226),d=a(310),j=a(14),p=a(5),b=a(49),u=a(58);function x(e){return Object(b.a)("MuiTableRow",e)}var O=Object(u.a)("MuiTableRow",["root","selected","hover","head","footer"]),m=a(2),h=["className","component","hover","selected"],f=Object(p.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(n.a)(t,"&.".concat(O.hover,":hover"),{backgroundColor:(a.vars||a).palette.action.hover}),Object(n.a)(t,"&.".concat(O.selected),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),g=c.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiTableRow"}),n=a.className,l=a.component,p=void 0===l?"tr":l,b=a.hover,u=void 0!==b&&b,O=a.selected,g=void 0!==O&&O,v=Object(r.a)(a,h),y=c.useContext(d.a),w=Object(i.a)({},a,{component:p,hover:u,selected:g,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),k=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(o.a)(a,x,t)}(w);return Object(m.jsx)(f,Object(i.a)({as:p,ref:t,className:Object(s.a)(k.root,n),role:"tr"===p?null:"row",ownerState:w},v))}));t.a=g},368:function(e,t,a){"use strict";var n=a(7),i=a(6),r=a(4),c=a(1),s=a(8),o=a(78),l=a(226),d=a(12),j=a(317),p=a(310),b=a(14),u=a(5),x=a(49),O=a(58);function m(e){return Object(x.a)("MuiTableCell",e)}var h=Object(O.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),f=a(2),g=["align","className","component","padding","scope","size","sortDirection","variant"],v=Object(u.a)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat(Object(d.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(d.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(d.a)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(r.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(l.e)(Object(l.a)(t.palette.divider,1),.88):Object(l.b)(Object(l.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&Object(n.a)({padding:"6px 16px"},"&.".concat(h.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),y=c.forwardRef((function(e,t){var a,n=Object(b.a)({props:e,name:"MuiTableCell"}),l=n.align,u=void 0===l?"inherit":l,x=n.className,O=n.component,h=n.padding,y=n.scope,w=n.size,k=n.sortDirection,T=n.variant,S=Object(i.a)(n,g),_=c.useContext(j.a),q=c.useContext(p.a),z=q&&"head"===q.variant;a=O||(z?"th":"td");var R=y;!R&&z&&(R="col");var C=T||q&&q.variant,M=Object(r.a)({},n,{align:u,component:a,padding:h||(_&&_.padding?_.padding:"normal"),size:w||(_&&_.size?_.size:"medium"),sortDirection:k,stickyHeader:"head"===C&&_&&_.stickyHeader,variant:C}),A=function(e){var t=e.classes,a=e.variant,n=e.align,i=e.padding,r=e.size,c={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==n&&"align".concat(Object(d.a)(n)),"normal"!==i&&"padding".concat(Object(d.a)(i)),"size".concat(Object(d.a)(r))]};return Object(o.a)(c,m,t)}(M),B=null;return k&&(B="asc"===k?"ascending":"descending"),Object(f.jsx)(v,Object(r.a)({as:a,ref:t,className:Object(s.a)(A.root,x),"aria-sort":B,scope:R,ownerState:M},S))}));t.a=y},369:function(e,t,a){"use strict";var n=a(4),i=a(6),r=a(1),c=a(8),s=a(78),o=a(310),l=a(14),d=a(5),j=a(49),p=a(58);function b(e){return Object(j.a)("MuiTableBody",e)}Object(p.a)("MuiTableBody",["root"]);var u=a(2),x=["className","component"],O=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),m={variant:"body"},h="tbody",f=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableBody"}),r=a.className,d=a.component,j=void 0===d?h:d,p=Object(i.a)(a,x),f=Object(n.a)({},a,{component:j}),g=function(e){var t=e.classes;return Object(s.a)({root:["root"]},b,t)}(f);return Object(u.jsx)(o.a.Provider,{value:m,children:Object(u.jsx)(O,Object(n.a)({className:Object(c.a)(g.root,r),as:j,ref:t,role:j===h?null:"rowgroup",ownerState:f},p))})}));t.a=f},706:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a(5),r=a(171),c=a(300),s=a(1),o=a(120),l=a(11),d=a(33),j=a(46),p=a(13),b=a(707),u=a(252),x=a(288),O=a(251),m=a(245),h=a(174),f=a(41),g=a(332),v=a(65),y=a(2),w=Object(i.a)(b.a)((function(){return{}})),k=Object(i.a)(g.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),T=Object(i.a)(u.a)((function(e){var t=e.theme;return Object(n.a)({marginBottom:"24px",padding:"24px !important"},t.breakpoints.down("sm"),{paddingLeft:"16px !important"})})),S=Object(i.a)(r.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),_=Object(i.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),q=window.localStorage.getItem("accessToken"),z=[{label:"Awaiting Acceptance"},{label:"Assigned to Driver"},{label:"Waste Collected"},{label:"En Route to Sorting"},{label:"En Route to Landfill"},{label:"En Route to Scrapyard/Recycling Deport"},{label:"Sorting Facility"},{label:"Handed Over"},{label:"Waste Disposed"}],R=function(e){var t=e.requisition,a=Object(s.useState)(!1),n=Object(p.a)(a,2),i=n[0],c=n[1],o=Object(s.useState)([]),b=Object(p.a)(o,2),u=b[0],R=(b[1],i&&0===u.length),C=Object(s.useState)([]),M=Object(p.a)(C,2),A=M[0],B=M[1],H=Object(s.useState)(null),I=Object(p.a)(H,2),L=I[0],D=I[1],N=Object(s.useState)(null),E=Object(p.a)(N,2),W=E[0],P=E[1],V=Object(s.useState)(null),F=Object(p.a)(V,2),J=F[0],K=F[1];Object(s.useEffect)((function(){var e=[];if(R)return Object(j.a)(Object(d.a)().mark((function t(){var a;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("/users",{headers:{"Content-Type":"application/json"}});case 2:a=t.sent,a.data.users.forEach((function(t){console.log("user.role: "+t.role),"driver"===t.role&&(console.log("user: "+t.name),e.push({id:t._id,name:t.name+" "+t.surname}))})),B(e),console.log("hospitalOptions: "+A);case 7:case"end":return t.stop()}}),t)})))(),function(){!1}}),[R,A]),Object(s.useEffect)((function(){var e=function(){var e=Object(j.a)(Object(d.a)().mark((function e(){var a,n,i,r,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="/manifest/requisionId?requisition_id="+t.requision_id,e.next=4,v.a.get(a,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(q)}});case 4:n=e.sent,i=n.data,r=i.status,c=i.manifests,"success"===r&&D(c[0]),console.log("setManifests: "+L._id),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error: "+e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e(),i||B([])}),[L._id,i,t.requision_id]);var Q=function(){var e=Object(j.a)(Object(d.a)().mark((function e(){var a,n,i;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("manifest: "+L._id),console.log("hospitalDropdownValue.id: "+W.id),e.next=5,v.a.patch("/manifest/"+L._id,{driver_id:W.id,status:J.label,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(q)}});case 5:a=e.sent,a.data.status,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("patch_error1: "+e.t0);case 13:return e.prev=13,n="/requisition/"+t._id,e.next=17,v.a.patch(n,{driver_id:W.id,status:J.label,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(q)}});case 17:i=e.sent,i.data.status,e.next=25;break;case 22:e.prev=22,e.t1=e.catch(13),console.log("patch_error2: "+e.t1);case 25:case"end":return e.stop()}}),e,null,[[0,10],[13,22]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)(T,{children:Object(y.jsxs)(g.ValidatorForm,{onSubmit:Q,onError:function(){return null},children:[Object(y.jsxs)(S,{children:[Object(y.jsx)(_,{children:"Assign Driver"}),function(e){if(console.log("manifest.driver_id: "+e.driver_id),null!==e.driver_id||""!==e.driver_id)return Object(y.jsx)("small",{children:"A driver has already been assigned to this task."})}(t)]}),Object(y.jsx)(x.a,{sx:{my:3}}),Object(y.jsx)(r.a,{ml:"-5px",children:Object(y.jsx)(w,{value:J,options:z,onChange:function(e,t){console.log("ManifeststatusnewValue: "+t.label),t&&t.inputValue?K({label:t.inputValue}):K(t)},getOptionLabel:function(e){return e.label},renderInput:function(e){return Object(y.jsx)(k,Object(l.a)(Object(l.a)({},e),{},{label:"Manifest Status",variant:"outlined"}))}})}),Object(y.jsx)(r.a,{ml:"-5px",children:Object(y.jsx)(w,{open:i,options:A,loading:R,onChange:function(e,t){console.log("newValue"),console.log(t),P(t)},id:"driver",onOpen:function(){return c(!0)},onClose:function(){return c(!1)},getOptionLabel:function(e){return e.name},isOptionEqualToValue:function(e,t){return e.name===t.name},renderInput:function(e){return Object(y.jsx)(k,Object(l.a)(Object(l.a)({},e),{},{fullWidth:!0,variant:"outlined",label:"Driver",InputProps:Object(l.a)(Object(l.a)({},e.InputProps),{},{endAdornment:Object(y.jsxs)(s.Fragment,{children:[R?Object(y.jsx)(O.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}),Object(y.jsxs)(m.a,{color:"primary",variant:"contained",type:"submit",children:[Object(y.jsx)(h.a,{children:"send"}),Object(y.jsx)(f.i,{sx:{pl:1,textTransform:"capitalize"},children:"Submit"})]})]})})},C=a(69),M=Object(i.a)(u.a)((function(e){var t=e.theme;return Object(n.a)({marginBottom:"24px",padding:"24px !important"},t.breakpoints.down("sm"),{paddingLeft:"16px !important"})})),A=Object(i.a)(u.a)((function(e){var t=e.theme;return Object(n.a)({boxShadow:"none",textAlign:"center",position:"relative",padding:"24px !important",background:"rgb(".concat(Object(C.a)(t.palette.primary.main),", 0.15) !important")},t.breakpoints.down("sm"),{padding:"16px !important"})})),B=Object(i.a)(u.a)((function(e){var t=e.theme;return Object(n.a)({boxShadow:"none",textAlign:"left",position:"relative",padding:"24px !important",background:"rgb(".concat(Object(C.a)(t.palette.primary.main),", 0.15) !important")},t.breakpoints.down("sm"),{padding:"16px !important"})})),H=window.localStorage.getItem("accessToken"),I=function(e){var t=e.requisition,a=function(){var e=Object(j.a)(Object(d.a)().mark((function e(){var a,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="/requisition/"+t._id,e.next=4,v.a.patch(a,{acceptRequisitions:!0,assignRequisitions:!1,rejectRequisitions:!1,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(H)}});case 4:n=e.sent,n.data.status,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("patch_error2: "+e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(j.a)(Object(d.a)().mark((function e(){var a,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="/requisition/"+t._id,e.next=4,v.a.patch(a,{acceptRequisitions:!1,assignRequisitions:!1,rejectRequisitions:!0,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(H)}});case 4:n=e.sent,n.data.status,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("patch_error2: "+e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)(M,{children:Object(y.jsxs)(A,{elevation:0,children:[Object(y.jsxs)(f.c,{children:["ID: ",t.requision_id]}),Object(y.jsx)(x.a,{sx:{my:3}}),Object(y.jsxs)(c.a,{container:!0,spacing:3,children:[Object(y.jsx)(c.a,{item:!0,lg:6,md:3,sm:12,xs:12,children:Object(y.jsx)(B,{children:Object(y.jsxs)(r.a,{ml:"-5px",children:[Object(y.jsxs)(f.d,{children:["To: ",Object(y.jsx)("small",{children:t.serviceProviderName})]}),Object(y.jsxs)(f.d,{children:["WasteType: ",Object(y.jsx)("small",{children:t.wasteType})]}),Object(y.jsxs)(f.d,{children:["Requestor: ",Object(y.jsx)("small",{children:t.hospitalName})]}),Object(y.jsxs)(f.d,{children:["Creation Date: ",Object(y.jsx)("small",{children:t.created_date})]})]})})}),Object(y.jsx)(c.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(y.jsx)(B,{children:Object(y.jsxs)(r.a,{ml:"-5px",children:[Object(y.jsxs)(f.d,{children:["Collection Address: ",Object(y.jsx)("small",{children:t.collection_address})]}),Object(y.jsxs)(f.d,{children:["Bin Location: ",Object(y.jsx)("small",{children:t.bin_location})]}),Object(y.jsxs)(f.d,{children:["Expected qty: ",Object(y.jsx)("small",{children:t.expected_qty})]}),Object(y.jsxs)(f.d,{children:["Colletion Date: ",Object(y.jsx)("small",{children:t.collection_Date})]})]})})}),Object(y.jsx)(x.a,{sx:{my:3}}),function e(t){if(!t.acceptRequisitions)return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(c.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(y.jsx)(e,{size:"large",color:"primary",variant:"contained",sx:{textTransform:"uppercase"},onClick:a,children:"Accept"})}),Object(y.jsx)(c.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(y.jsx)(e,{size:"large",color:"primary",variant:"contained",sx:{textTransform:"uppercase"},onClick:n,children:"Reject"})})]})}(t)]})]})})},L=a(365),D=a(366),N=a(367),E=a(368),W=a(369),P=Object(i.a)(L.a)((function(){return{minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}})),V=function(e){var t=e.manifest;return Object(y.jsx)(u.a,{elevation:3,sx:{pt:"20px",mb:3},children:Object(y.jsx)(r.a,{overflow:"auto",children:Object(y.jsxs)(P,{children:[Object(y.jsx)(D.a,{children:Object(y.jsxs)(N.a,{children:[Object(y.jsx)(E.a,{sx:{px:0},colSpan:2,children:"Waste Type"}),Object(y.jsx)(E.a,{sx:{px:0},colSpan:2,children:"Treatment"}),Object(y.jsx)(E.a,{sx:{px:0},colSpan:2,children:"Bin Location"}),Object(y.jsx)(E.a,{sx:{px:0},colSpan:2,children:"Bin Qty"}),Object(y.jsx)(E.a,{sx:{px:0},colSpan:2,children:"Bin Sizes"}),Object(y.jsx)(E.a,{sx:{px:0},colSpan:2,children:"Mass (Kg)"})]})}),Object(y.jsx)(W.a,{children:Object(y.jsxs)(N.a,{hover:!0,children:[Object(y.jsx)(E.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(y.jsx)(r.a,{display:"flex",alignItems:"center",children:Object(y.jsx)(f.g,{sx:{m:0,ml:0},children:t.wasteType})})}),Object(y.jsx)(E.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(y.jsx)(r.a,{display:"flex",alignItems:"center",children:Object(y.jsx)(f.g,{sx:{m:0,ml:0},children:t.treatment})})}),Object(y.jsx)(E.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(y.jsx)(r.a,{display:"flex",alignItems:"center",children:Object(y.jsx)(f.g,{sx:{m:0,ml:0},children:t.bin_location})})}),Object(y.jsx)(E.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(y.jsx)(r.a,{display:"flex",alignItems:"center",children:Object(y.jsx)(f.g,{sx:{m:0,ml:0},children:t.bin_qty})})}),Object(y.jsx)(E.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(y.jsx)(r.a,{display:"flex",alignItems:"center",children:Object(y.jsx)(f.g,{sx:{m:0,ml:0},children:t.bin_size})})}),Object(y.jsx)(E.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(y.jsx)(r.a,{display:"flex",alignItems:"center",children:Object(y.jsx)(f.g,{sx:{m:0,ml:0},children:t.waste_mass})})})]})})]})})})},F=a(21),J=a(37),K=Object(i.a)(u.a)((function(e){var t=e.theme;return Object(n.a)({marginBottom:"24px",padding:"24px !important"},t.breakpoints.down("sm"),{paddingLeft:"16px !important"})})),Q=Object(i.a)(r.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),G=Object(i.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),U=function(e){var t=e.requisition,a=Object(s.useState)([]),n=Object(p.a)(a,2),i=n[0],o=n[1],l=Object(F.f)();console.log("ViewManifest"+t.requision_id),Object(s.useEffect)((function(){var e=function(){var e=Object(j.a)(Object(d.a)().mark((function e(){var a,n,i,r,c,s;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=window.localStorage.getItem("accessToken"),console.log("accessToken: "+a),n="/manifest/requisionId?requisition_id="+t.requision_id,console.log("url: "+n),e.next=7,v.a.get(n,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 7:i=e.sent,r=i.data,c=r.status,s=r.manifests,"success"===c&&o(s[0]),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("error: "+e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[t.requision_id]);return Object(y.jsxs)(K,{children:[Object(y.jsx)(r.a,{ml:"-5px",style:{textAlign:"right"},children:Object(y.jsx)(m.a,{color:"primary",variant:"contained",onClick:function(){return l(-1)},children:Object(y.jsx)(f.i,{sx:{pl:1,textTransform:"capitalize"},children:"Back"})})}),Object(y.jsx)(x.a,{sx:{my:5}}),Object(y.jsx)(Q,{children:Object(y.jsxs)(f.a,{children:["Manifest    ",Object(y.jsx)(G,{children:"Details"})]})}),Object(y.jsx)(x.a,{sx:{my:5}}),Object(y.jsxs)(c.a,{container:!0,spacing:3,children:[Object(y.jsxs)(c.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:[Object(y.jsx)(f.b,{children:i.company_name}),Object(y.jsx)(f.e,{children:i.requisition_id})]}),Object(y.jsx)(c.a,{item:!0,lg:6,md:6,sm:12,xs:12,style:{alignSelf:"flex-end"},children:Object(y.jsxs)(r.a,{ml:"-5px",style:{textAlign:"right"},children:[Object(y.jsxs)(f.e,{children:["Manifest Status:  ",Object(y.jsx)(f.h,{style:{marginLeft:"2.5rem"},children:i.status})]}),Object(y.jsxs)(f.e,{children:["Manifest Date:  ",Object(y.jsx)(f.h,{style:{marginLeft:"2.5rem"},children:i.created_date})]})]})})]}),Object(y.jsx)(x.a,{sx:{my:5}}),Object(y.jsxs)(c.a,{container:!0,spacing:3,children:[Object(y.jsxs)(c.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:[Object(y.jsx)(f.c,{children:"Collection "}),Object(y.jsxs)(f.e,{children:["Operator In:  ",Object(y.jsx)(f.h,{style:{marginLeft:"2.5rem"},children:i.operator_in})]}),Object(y.jsxs)(f.e,{children:["Time In:  ",Object(y.jsx)(f.h,{style:{marginLeft:"2.5rem"},children:i.time_in})]}),Object(y.jsxs)(f.e,{children:["Operator Out:  ",Object(y.jsx)(f.h,{style:{marginLeft:"2.5rem"},children:i.operator_out})]}),Object(y.jsxs)(f.e,{children:["Time Out:   ",Object(y.jsx)(f.h,{style:{marginLeft:"2.5rem"},children:i.time_out})]})]}),Object(y.jsx)(c.a,{item:!0,lg:6,md:6,sm:12,xs:12,style:{alignSelf:"flex-end"},children:Object(y.jsxs)(r.a,{ml:"-5px",style:{textAlign:"right"},children:[Object(y.jsx)(f.c,{children:"Disposal"}),Object(y.jsxs)(f.e,{children:["Landfill:  ",Object(y.jsx)(f.h,{style:{marginLeft:"2.5rem"},children:i.landfill})]}),Object(y.jsxs)(f.e,{children:["Notes:  ",Object(y.jsx)(f.h,{style:{marginLeft:"2.5rem"},children:i.notes})]})]})})]}),Object(y.jsx)(x.a,{sx:{my:5}}),Object(y.jsx)(V,{manifest:i}),Object(y.jsx)(x.a,{sx:{my:5}}),Object(y.jsxs)(r.a,{ml:"-5px",style:{textAlign:"right"},children:[Object(y.jsxs)(f.e,{children:["Total Mass (Kg):  ",Object(y.jsx)(f.h,{style:{marginLeft:"2.5rem"},children:i.waste_mass})]}),Object(y.jsxs)(f.e,{children:["Tonnage Charged:  ",Object(y.jsx)(f.h,{style:{marginLeft:"2.5rem"},children:i.waste_mass})]})]}),Object(y.jsx)(x.a,{sx:{my:5}}),Object(y.jsx)(J.b,{state:{manifest:i},to:{pathname:"/netcare/admin/edit-manifest-details",state:i},children:Object(y.jsxs)(m.a,{color:"primary",variant:"contained",children:[Object(y.jsx)(h.a,{children:"edit"}),Object(y.jsx)(f.i,{sx:{pl:1,textTransform:"capitalize"},children:"Edit Manifest"})]})})]})},X=Object(i.a)(r.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),Y=Object(i.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),Z=Object(i.a)("div")((function(e){var t=e.theme;return Object(n.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})}));t.default=function(){var e=Object(F.e)();console.log("location.requision_id: "+e.state.requisition.requision_id);return Object(y.jsx)(s.Fragment,{children:Object(y.jsx)(Z,{className:"admin-analytics",children:Object(y.jsxs)(o.a,{children:[Object(y.jsx)(X,{children:Object(y.jsx)(Y,{children:"Requisition Information"})}),Object(y.jsxs)(c.a,{container:!0,spacing:3,children:[Object(y.jsx)(c.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(y.jsx)(I,{requisition:e.state.requisition})}),Object(y.jsx)(c.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:function(e){if(console.log("requisition.createManifest: "+e.createManifest),console.log("requisition.acceptRequisitions: "+e.acceptRequisitions),e.acceptRequisitions)return Object(y.jsx)(R,{requisition:e})}(e.state.requisition)})]}),function(e){if(console.log("requisition.createManifest: "+e.createManifest),e.createManifest)return Object(y.jsx)(U,{requisition:e})}(e.state.requisition)]})})})}}}]);