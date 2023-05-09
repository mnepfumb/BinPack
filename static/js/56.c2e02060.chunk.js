(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[56],{271:function(e,t,n){"use strict";n.r(t);var a=n(286),i=n(300),c=n(118),r=n(172),o=n(58),s=n(66),l=n(51),d=n(95),b=n(1),j=n.n(b),h=n(136),u=n.n(h),x=n(20),m=n(26),p=n(2),O=function(e){var t=e.children,n=Object(m.a)(),a=Object(l.a)().settings,c=a.themes[a.layout1Settings.leftSidebar.theme]||n;return Object(p.jsx)(i.a,{theme:c,children:t})},f=function(e){var t=e.theme,n=(e.classes,e.children);e.open;return Object(p.jsx)(i.a,{theme:t,children:n})},g=n(302),y=n(173),v=n(10),w=n(12),S=n(4),k=n(723),C=n(724),I=n(170),z=n(244),D=n(251),L=n(720),R=n(79),B=n(40),P=n(697),T=Object(S.a)(P.a)((function(){return{top:"0",right:"0",height:"32px",width:"32px",borderRadius:"50%"}})),N=Object(S.a)(B.i)((function(e){var t=e.theme;return{fontWeight:700,fontSize:"1rem",cursor:"pointer",borderRadius:"4px",marginBottom:"2.5rem",letterSpacing:"1.5px",padding:".25rem .5rem",transform:"rotate(90deg)",color:t.palette.secondary.main,backgroundColor:t.palette.primary.dark,"&:hover, &.open":{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText}}})),_=Object(S.a)("div")((function(e){var t=e.theme;return{top:0,right:0,zIndex:50,width:320,display:"flex",height:"100vh",position:"fixed",paddingBottom:"32px",flexDirection:"column",boxShadow:R.b[12],background:t.palette.background.default,"& .helpText":{margin:"0px .5rem 1rem"}}})),G=Object(S.a)(T)((function(){return{width:"100%",height:"152px !important",cursor:"pointer",marginTop:"12px",marginBottom:"12px","& .layout-name":{display:"none"},"&:hover .layout-name":{zIndex:12,width:"100%",height:"100%",display:"flex",alignItems:"center",position:"absolute",justifyContent:"center",background:"rgba(0,0,0,0.3)"}}})),M=Object(S.a)("div")((function(){return{minHeight:58,display:"flex",alignItems:"center",marginBottom:"16px",padding:"14px 20px",boxShadow:R.b[6],justifyContent:"space-between"}})),H=Object(S.a)("img")((function(){return{width:"100%"}})),W=Object(S.a)(u.a)((function(){return{paddingLeft:"16px",paddingRight:"16px"}})),E=[{isPro:!1,name:"Light Sidebar",thumbnail:"/BinPack/assets/images/screenshots/layout1-customizer.png",options:{activeTheme:"blue",activeLayout:"layout1",layout1Settings:{topbar:{theme:"blueDark",fixed:!0},leftSidebar:{mode:"full",theme:"whiteBlue",bgOpacity:.98}},footer:{theme:"slateDark1"}}},{isPro:!1,name:"Compact Sidebar",thumbnail:"/BinPack/assets/images/screenshots/layout5-customizer.png",options:{activeTheme:"blue",activeLayout:"layout1",layout1Settings:{topbar:{theme:"whiteBlue",fixed:!0},leftSidebar:{mode:"compact",theme:"slateDark1",bgOpacity:.92}}}},{isPro:!1,name:"Dark Sidebar",thumbnail:"/BinPack/assets/images/screenshots/layout1-blue-customizer.png",options:{activeTheme:"blue",activeLayout:"layout1",layout1Settings:{topbar:{theme:"blueDark",fixed:!0},leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92}}}}],F=function(){var e=Object(m.a)(),t=Object(b.useState)(!1),n=Object(w.a)(t,2),a=n[0],c=n[1],r=Object(b.useState)(0),o=Object(w.a)(r,2),s=o[0],d=o[1],j=Object(l.a)(),h=j.settings,u=j.updateSettings,x=e.palette.text.secondary,O=function(){return c(!a)},f=function(e){return d(e)},S=Object(v.a)({},h.themes[h.activeTheme]);return Object(p.jsxs)(b.Fragment,{children:[Object(p.jsx)(k.a,{title:"Theme Settings",placement:"left",children:Object(p.jsx)(N,{className:"open",onClick:O,children:"DEMOS"})}),Object(p.jsx)(i.a,{theme:S,children:Object(p.jsx)(C.a,{open:a,anchor:"right",variant:"temporary",onClose:O,ModalProps:{keepMounted:!0},children:Object(p.jsxs)(_,{children:[Object(p.jsxs)(M,{children:[Object(p.jsxs)(I.a,{display:"flex",children:[Object(p.jsx)(y.a,{className:"icon",color:"primary",children:"settings"}),Object(p.jsx)(B.e,{sx:{ml:1,fontSize:"1rem"},children:"Theme Settings"})]}),Object(p.jsx)(g.a,{onClick:O,children:Object(p.jsx)(y.a,{className:"icon",children:"close"})})]}),Object(p.jsxs)(I.a,{px:3,mb:2,display:"flex",children:[Object(p.jsx)(z.a,{variant:"outlined",onClick:function(){return f(0)},color:0===s?"secondary":"primary",sx:{mr:2},children:"Demos"}),Object(p.jsx)(z.a,{variant:"outlined",onClick:function(){return f(1)},color:1===s?"secondary":"primary",children:"Settings"})]}),Object(p.jsxs)(W,{options:{suppressScrollX:!0},children:[0===s&&Object(p.jsxs)(I.a,{sx:{mb:4,mx:3},children:[Object(p.jsx)(I.a,{sx:{color:x},children:"Layouts"}),Object(p.jsx)(I.a,{display:"flex",flexDirection:"column",children:E.map((function(e){return Object(p.jsx)(G,{color:"secondary",badgeContent:"Pro",invisible:!e.isPro,children:Object(p.jsxs)(D.a,{elevation:4,sx:{position:"relative"},onClick:function(){return u(e.options)},children:[Object(p.jsx)(I.a,{sx:{overflow:"hidden"},className:"layout-name",children:Object(p.jsx)(z.a,{variant:"contained",color:"secondary",children:e.name})}),Object(p.jsx)(H,{src:e.thumbnail,alt:e.name})]})},e.name)}))})]}),1===s&&Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"helpText",children:["We used React context API to control layout. Check out the"," ",Object(p.jsx)(L.a,{href:"http://demos.ui-lib.com/matx-react-doc/layout.html",target:"_blank",children:"Documentation"})]})})]})]})})})]})},U=n(128),A=n(47),X=n(160),J=Object(c.a)(g.a)((function(e){var t=e.theme;return{"& span":{color:t.palette.text.primary},"& #disable":{color:t.palette.text.disabled}}})),$=Object(c.a)("div")((function(e){e.theme;return{height:"100%",display:"flex",flexDirection:"column",width:d.a}})),Y=Object(c.a)("div")((function(){return{padding:"4px",paddingLeft:"16px",display:"flex",alignItems:"center",boxShadow:R.b[6],height:d.c,"& h5":{marginTop:0,marginBottom:0,marginLeft:"16px",fontWeight:"500"}}})),q=Object(c.a)("div")((function(){return{display:"flex",alignItems:"center",padding:"8px 8px",transition:"background 300ms ease","&:hover":{background:"rgba(0,0,0,0.01)"}}})),K=Object(c.a)("img")((function(){return{width:48}})),Q=Object(c.a)("div")((function(){return{marginRight:"8",textAlign:"center",flexGrow:1,display:"flex",flexDirection:"column","& h6":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",display:"block",width:120,marginBottom:"4px"}}})),V=!1;var Z=function(e){var t=e.container,n=Object(b.useState)(0),a=Object(w.a)(n,2),c=a[0],s=a[1],d=Object(b.useState)(!1),j=Object(w.a)(d,2),h=j[0],u=j[1],m=Object(X.b)(),O=Object(x.f)(),f=Object(U.a)().user,v=Object(X.c)((function(e){return e.ecommerce})).cartList,S=Object(l.a)().settings,k=Object(o.a)().palette.text.secondary;V||(m(Object(A.j)(f.id)),V=!0);var I=function(){u(!h)};Object(b.useEffect)((function(){var e=0;v.forEach((function(t){e+=t.price*t.amount})),s(e)}),[v]);var D=Object(o.a)().palette.text.primary;return Object(p.jsxs)(b.Fragment,{children:[Object(p.jsx)(g.a,{onClick:I,children:Object(p.jsx)(P.a,{color:"secondary",badgeContent:v.length,children:Object(p.jsx)(y.a,{sx:{color:D},children:"shopping_cart"})})}),Object(p.jsx)(i.a,{theme:S.themes[S.activeTheme],children:Object(p.jsx)(C.a,{container:t,variant:"temporary",anchor:"right",open:h,onClose:I,ModalProps:{keepMounted:!0},children:Object(p.jsxs)($,{children:[Object(p.jsxs)(Y,{children:[Object(p.jsx)(y.a,{color:"primary",children:"shopping_cart"}),Object(p.jsx)("h5",{children:"Cart"})]}),Object(p.jsx)(r.a,{flexGrow:1,overflow:"auto",children:v.map((function(e){return Object(p.jsxs)(q,{children:[Object(p.jsxs)(r.a,{mr:"4px",display:"flex",flexDirection:"column",children:[Object(p.jsx)(J,{size:"small",onClick:function(){return m(Object(A.k)(f.id,e.id,e.amount+1))},children:Object(p.jsx)(y.a,{sx:{cursor:"pinter"},children:"keyboard_arrow_up"})}),Object(p.jsx)(J,{disabled:!(e.amount-1),size:"small",onClick:function(){return m(Object(A.k)(f.id,e.id,e.amount-1))},children:Object(p.jsx)(y.a,{id:!(e.amount-1)&&"disable",children:"keyboard_arrow_down"})})]}),Object(p.jsx)(r.a,{mr:1,children:Object(p.jsx)(K,{src:e.imgUrl,alt:e.title})}),Object(p.jsxs)(Q,{children:[Object(p.jsx)(B.f,{children:e.title}),Object(p.jsxs)(B.h,{sx:{color:k},children:["$",e.price," x ",e.amount]})]}),Object(p.jsx)(J,{size:"small",onClick:function(){return m(Object(A.i)(f.userId,e.id))},children:Object(p.jsx)(y.a,{fontSize:"small",children:"clear"})})]},e.id)}))}),Object(p.jsxs)(z.a,{sx:{width:"100%",borderRadius:0},variant:"contained",color:"primary",onClick:function(){c>0&&(O("/ecommerce/checkout"),u(!1))},children:["Checkout ($",c.toFixed(2),")"]})]})})})]})},ee=Object(c.a)("div")((function(e){var t=e.theme;return{position:"fixed",height:"100vh",width:e.width,right:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:t.shadows[8],backgroundColor:t.palette.primary.main,zIndex:98,transition:"all 0.15s ease",color:t.palette.text.primary,"@global":{"@media screen and (min-width: 767px)":{".content-wrap, .layout2.layout-contained, .layout2.layout-full":{marginRight:function(e){return e.width}},".matx-customizer":{right:function(e){return e.width}}},"@media screen and (max-width: 959px)":{".toolbar-menu-wrap .menu-area":{width:function(e){return"calc(100% - ".concat(e.width,")")}}}}}})),te=function(){var e=Object(o.a)().palette.primary.contrastText;return Object(p.jsxs)(ee,{width:"50px",className:"secondary-sidebar",children:[Object(p.jsx)(B.i,{sx:{m:"auto"}}),Object(p.jsx)(F,{}),Object(p.jsx)(Z,{}),Object(p.jsx)(s.c,{icon:Object(p.jsx)(g.a,{sx:{my:"12px",color:e},size:"small",children:Object(p.jsx)(y.a,{children:"comments"})}),children:Object(p.jsx)(s.d,{})}),Object(p.jsx)(B.i,{sx:{m:"auto"}})]})},ne=n(375),ae=n(7),ie=Object(c.a)("div")((function(){return{position:"fixed",right:"30px",bottom:"50px",zIndex:99,transition:"all 0.15s ease","&.open":{right:"10px"}}})),ce=function(){var e=Object(l.a)(),t=e.settings,n=e.updateSettings,a=function(){n({secondarySidebar:{open:!t.secondarySidebar.open}})},i=Object(o.a)().palette.primary.contrastText;return Object(p.jsxs)(ie,{className:Object(ae.a)({open:t.secondarySidebar.open}),children:[t.secondarySidebar.open&&Object(p.jsx)(g.a,{onClick:a,size:"small","aria-label":"toggle",children:Object(p.jsx)(y.a,{sx:{color:i},children:"close"})}),!t.secondarySidebar.open&&Object(p.jsx)(ne.a,{color:"primary","aria-label":"expand",onClick:a,children:Object(p.jsx)(y.a,{sx:{color:i},children:"settings"})})]})},re=function(){var e=Object(l.a)().settings,t=e.themes[e.secondarySidebar.theme];return Object(p.jsxs)(f,{theme:t,children:[e.secondarySidebar.open&&Object(p.jsx)(te,{}),Object(p.jsx)(ce,{})]})},oe=n(239),se=n(486),le=n(67),de=Object(S.a)(I.a)((function(){return{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 18px 20px 29px"}})),be=Object(S.a)(B.i)((function(e){return{fontSize:18,marginLeft:".5rem",display:"compact"===e.mode?"none":"block"}})),je=function(e){var t=e.children,n=Object(l.a)().settings.layout1Settings.leftSidebar.mode;return Object(p.jsxs)(de,{children:[Object(p.jsxs)(I.a,{display:"flex",alignItems:"center",children:[Object(p.jsx)(s.f,{}),Object(p.jsx)(be,{mode:n,className:"sidenavHoverShow",children:"Netcare"})]}),Object(p.jsx)(I.a,{className:"sidenavHoverShow",sx:{display:"compact"===n?"none":"block"},children:t||null})]})},he=n(6),ue=n(155),xe=n(156),me=n(157),pe=n(158),Oe=Object(c.a)(u.a)((function(){return{paddingLeft:"1rem",paddingRight:"1rem",position:"relative"}})),fe=Object(c.a)("div")((function(e){var t=e.theme;return Object(he.a)({position:"fixed",top:0,left:0,bottom:0,right:0,width:"100vw",background:"rgba(0, 0, 0, 0.54)",zIndex:-1},t.breakpoints.up("lg"),{display:"none"})})),ge=function(e){var t=e.children,n=Object(l.a)(),a=n.settings,i=n.updateSettings,c=Object(U.a)().user;return Object(p.jsxs)(b.Fragment,{children:[Object(p.jsxs)(Oe,{options:{suppressScrollX:!0},children:[t,function(e){return"admin"===e.role?Object(p.jsx)(s.j,{items:ue.a}):"hospital"===e.role?Object(p.jsx)(s.j,{items:me.a}):"service provider"===e.role?Object(p.jsx)(s.j,{items:pe.a}):"driver"===e.role?Object(p.jsx)(s.j,{items:xe.a}):void 0}(c)]}),Object(p.jsx)(fe,{onClick:function(){return function(e){var t=a.activeLayout+"Settings",n=a[t];i(Object(v.a)(Object(v.a)({},a),{},Object(he.a)({},t,Object(v.a)(Object(v.a)({},n),{},{leftSidebar:Object(v.a)(Object(v.a)({},n.leftSidebar),e)}))))}({mode:"close"})}})]})},ye=Object(c.a)(r.a)((function(e){var t=e.theme,n=e.width,a=e.primaryBg,i=e.bgImgURL;return{position:"fixed",top:0,left:0,height:"100vh",width:n,boxShadow:R.b[8],backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover",zIndex:111,overflow:"hidden",color:t.palette.text.primary,transition:"all 250ms ease-in-out",backgroundImage:"linear-gradient(to bottom, rgba(".concat(a,", 0.96), rgba(").concat(a,", 0.96)), url(").concat(i,")"),"&:hover":{width:d.a,"& .sidenavHoverShow":{display:"block"},"& .compactNavItem":{width:"100%",maxWidth:"100%","& .nav-bullet":{display:"block"},"& .nav-bullet-text":{display:"none"}}}}})),ve=Object(c.a)(r.a)((function(){return{height:"100%",display:"flex",flexDirection:"column"}})),we=function(){var e=Object(o.a)(),t=Object(l.a)(),n=t.settings,a=t.updateSettings,i=n.layout1Settings.leftSidebar,c=i.mode,r=i.bgImgURL,s=Object(le.a)(e.palette.primary.main);return Object(p.jsx)(ye,{bgImgURL:r,primaryBg:s,width:"compact"===c?d.b:d.a,children:Object(p.jsxs)(ve,{children:[Object(p.jsx)(je,{children:Object(p.jsx)(oe.a,{smDown:!0,children:Object(p.jsx)(se.a,{onChange:function(){var e;e={mode:"compact"===c?"full":"compact"},a({layout1Settings:{leftSidebar:Object(v.a)({},e)}})},checked:"full"!==i.mode,color:"secondary",size:"small"})})}),Object(p.jsx)(ge,{})]})})},Se=j.a.memo(we),ke=n(443),Ce=n(298),Ie=Object(c.a)(g.a)((function(e){return{color:e.theme.palette.text.primary}})),ze=Object(c.a)("div")((function(e){e.theme;return{top:0,zIndex:96,transition:"all 0.3s ease",boxShadow:R.b[8],height:d.c}})),De=Object(c.a)(r.a)((function(e){var t,n=e.theme;return t={padding:"8px",paddingLeft:18,paddingRight:20,height:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:n.palette.primary.main},Object(he.a)(t,n.breakpoints.down("sm"),{paddingLeft:16,paddingRight:16}),Object(he.a)(t,n.breakpoints.down("xs"),{paddingLeft:14,paddingRight:16}),t})),Le=Object(c.a)(r.a)((function(){return{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}}})),Re=Object(c.a)(ke.a)((function(e){return{display:"flex",alignItems:"center",minWidth:185,"& a":{width:"100%",display:"flex",alignItems:"center",textDecoration:"none"},"& span":{marginRight:"10px",color:e.theme.palette.text.primary}}})),Be=function(){var e=Object(o.a)(),t=Object(l.a)(),n=t.settings,i=t.updateSettings,c=Object(U.a)(),d=c.logout,b=c.user,j=Object(a.a)(e.breakpoints.down("md"));return Object(p.jsx)(ze,{children:Object(p.jsxs)(De,{children:[Object(p.jsx)(r.a,{display:"flex",children:Object(p.jsx)(Ie,{onClick:function(){var e,t,a=n.layout1Settings;e=j?"close"===a.leftSidebar.mode?"mobile":"close":"full"===a.leftSidebar.mode?"close":"full",t={mode:e},i({layout1Settings:{leftSidebar:Object(v.a)({},t)}})},children:Object(p.jsx)(y.a,{children:"menu"})})}),Object(p.jsx)(r.a,{display:"flex",alignItems:"center",children:Object(p.jsx)(s.g,{menuButton:Object(p.jsxs)(Le,{children:[Object(p.jsx)(oe.a,{xsDown:!0,children:Object(p.jsxs)(B.i,{children:["Hi ",Object(p.jsx)("strong",{children:b.name})]})}),Object(p.jsx)(Ce.a,{src:b.avatar,sx:{cursor:"pointer"}})]}),children:Object(p.jsxs)(Re,{onClick:d,children:[Object(p.jsx)(y.a,{children:" power_settings_new "}),Object(p.jsx)(B.i,{children:" Logout "})]})})})]})})},Pe=j.a.memo(Be),Te=Object(c.a)(r.a)((function(e){return{display:"flex",background:e.theme.palette.background.default}})),Ne=Object(c.a)(r.a)((function(){return{height:"100%",display:"flex",overflowY:"auto",overflowX:"hidden",flexDirection:"column",justifyContent:"space-between"}})),_e=Object(c.a)(u.a)((function(){return{height:"100%",position:"relative",display:"flex",flexGrow:"1",flexDirection:"column"}})),Ge=Object(c.a)(r.a)((function(e){return{height:"100vh",display:"flex",flexGrow:"1",flexDirection:"column",verticalAlign:"top",marginLeft:e.width,position:"relative",overflow:"hidden",transition:"all 0.3s ease",marginRight:e.secondarySidebar.open?50:0}})),Me=function(){var e=Object(l.a)(),t=e.settings,n=e.updateSettings,c=t.layout1Settings,j=t.secondarySidebar,h=t.themes[c.topbar.theme],u=c.leftSidebar,m=u.mode,f=u.show,g=function(){switch(m){case"full":return d.a;case"compact":return d.b;default:return"0px"}}(),y=Object(o.a)(),v=Object(a.a)(y.breakpoints.down("md")),w=Object(b.useRef)({isMdScreen:v,settings:t}),S="theme-".concat(y.palette.type);return Object(b.useEffect)((function(){var e=w.current.settings,t=e.layout1Settings.leftSidebar.mode;e.layout1Settings.leftSidebar.show&&n({layout1Settings:{leftSidebar:{mode:v?"close":t}}})}),[v]),Object(p.jsxs)(Te,{className:S,children:[f&&"close"!==m&&Object(p.jsx)(O,{children:Object(p.jsx)(Se,{})}),Object(p.jsxs)(Ge,{width:g,secondarySidebar:j,children:[c.topbar.show&&c.topbar.fixed&&Object(p.jsx)(i.a,{theme:h,children:Object(p.jsx)(Pe,{fixed:!0,className:"elevation-z8"})}),t.perfectScrollbar&&Object(p.jsxs)(_e,{children:[c.topbar.show&&!c.topbar.fixed&&Object(p.jsx)(i.a,{theme:h,children:Object(p.jsx)(Pe,{})}),Object(p.jsx)(r.a,{flexGrow:1,position:"relative",children:Object(p.jsx)(s.h,{children:Object(p.jsx)(x.b,{})})})]}),!t.perfectScrollbar&&Object(p.jsxs)(Ne,{children:[c.topbar.show&&!c.topbar.fixed&&Object(p.jsx)(i.a,{theme:h,children:Object(p.jsx)(Pe,{})}),Object(p.jsx)(r.a,{flexGrow:1,position:"relative",children:Object(p.jsx)(s.h,{children:Object(p.jsx)(x.b,{})})})]})]}),t.secondarySidebar.show&&Object(p.jsx)(re,{})]})};t.default=j.a.memo(Me)}}]);