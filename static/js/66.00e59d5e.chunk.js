(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[66],{738:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(5),r=a(300),i=a(1),s=a(33),o=a(46),l=a(13),x=a(171),p=a(368),j=a(252),d=a(389),b=a(174),h=a(369),O=a(370),f=a(371),m=a(372),u=a(303),g=a(21),S=a(37),v=a(120),w=a(65),y=a(2),k=Object(c.a)(x.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),T=Object(c.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),z=Object(c.a)(p.a)((function(){return{minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}})),B=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(g.f)(),r=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){var t,a,c,r,i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window.localStorage.getItem("accessToken"),e.next=4,w.a.get("/company",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 4:a=e.sent,c=a.data,r=c.status,i=c.companies,"success"===r&&n(i),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){r()}),[]);return Object(y.jsx)(j.a,{elevation:3,sx:{pt:"20px",mb:3},children:Object(y.jsxs)(v.a,{children:[Object(y.jsxs)(k,{children:[Object(y.jsx)(T,{children:"Service Provider List"}),Object(y.jsx)(d.a,{color:"primary","aria-label":"Add",className:"button",onClick:function(){return c("/netcare/admin/service-provider-add-form")},children:Object(y.jsx)(b.a,{children:"add"})})]}),Object(y.jsx)(x.a,{overflow:"auto",children:Object(y.jsxs)(z,{children:[Object(y.jsx)(h.a,{children:Object(y.jsxs)(O.a,{children:[Object(y.jsx)(f.a,{sx:{px:4},colSpan:4,children:"Name"}),Object(y.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Phone Number"}),Object(y.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Email"}),Object(y.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Address"}),Object(y.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Registration #"}),Object(y.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Tax #"}),Object(y.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Action"})]})}),Object(y.jsx)(m.a,{children:a.map((function(e,t){return Object(y.jsxs)(O.a,{hover:!0,children:[Object(y.jsx)(f.a,{colSpan:4,align:"left",sx:{px:0,textTransform:"capitalize"},children:e.name}),Object(y.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.phone}),Object(y.jsx)(f.a,{sx:{px:0},align:"left",colSpan:4,children:e.email}),Object(y.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.address}),Object(y.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.registration_no}),Object(y.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.tax_no}),Object(y.jsx)(f.a,{sx:{px:0},colSpan:4,children:Object(y.jsx)(u.a,{children:Object(y.jsx)(b.a,{color:"primary",state:{company:e},component:S.b,to:{pathname:"/netcare/admin/service-provider-edit-form",state:e},children:"edit"})})})]},t)}))})]})})]})})},A=Object(c.a)("div")((function(e){var t=e.theme;return Object(n.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})}));t.default=function(){return Object(y.jsx)(i.Fragment,{children:Object(y.jsx)(A,{className:"admin-analytics",children:Object(y.jsx)(r.a,{container:!0,spacing:3,children:Object(y.jsx)(B,{})})})})}}}]);