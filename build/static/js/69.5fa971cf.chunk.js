(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[69],{747:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(5),r=a(300),i=a(1),s=a(33),o=a(47),l=a(13),p=a(171),x=a(365),j=a(252),d=a(377),b=a(174),h=a(366),O=a(367),m=a(368),f=a(369),u=a(303),g=a(21),S=a(37),v=a(120),w=a(66),y=a(2),T=Object(c.a)(p.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),k=Object(c.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),z=Object(c.a)(x.a)((function(){return{minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}})),A=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(g.f)(),r=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){var t,a,c,r,i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window.localStorage.getItem("accessToken"),console.log("accessToken: "+t),e.next=5,w.a.get("/company",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 5:a=e.sent,c=a.data,r=c.status,i=c.companies,console.log("companies: "+i),"success"===r&&n(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error: "+e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){r()}),[]);return Object(y.jsx)(j.a,{elevation:3,sx:{pt:"20px",mb:3},children:Object(y.jsxs)(v.a,{children:[Object(y.jsxs)(T,{children:[Object(y.jsx)(k,{children:"Service Provider List"}),Object(y.jsx)(d.a,{color:"primary","aria-label":"Add",className:"button",onClick:function(){return c("/netcare/hospital/service-provider-add-form")},children:Object(y.jsx)(b.a,{children:"add"})})]}),Object(y.jsx)(p.a,{overflow:"auto",children:Object(y.jsxs)(z,{children:[Object(y.jsx)(h.a,{children:Object(y.jsxs)(O.a,{children:[Object(y.jsx)(m.a,{sx:{px:4},colSpan:4,children:"Name"}),Object(y.jsx)(m.a,{sx:{px:0},colSpan:4,children:"Phone Number"}),Object(y.jsx)(m.a,{sx:{px:0},colSpan:4,children:"Email"}),Object(y.jsx)(m.a,{sx:{px:0},colSpan:4,children:"Address"}),Object(y.jsx)(m.a,{sx:{px:0},colSpan:4,children:"Registration #"}),Object(y.jsx)(m.a,{sx:{px:0},colSpan:4,children:"Tax #"}),Object(y.jsx)(m.a,{sx:{px:0},colSpan:4,children:"Action"})]})}),Object(y.jsx)(f.a,{children:a.map((function(e,t){return Object(y.jsxs)(O.a,{hover:!0,children:[Object(y.jsx)(m.a,{colSpan:4,align:"left",sx:{px:0,textTransform:"capitalize"},children:e.name}),Object(y.jsx)(m.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.phone}),Object(y.jsx)(m.a,{sx:{px:0},align:"left",colSpan:4,children:e.email}),Object(y.jsx)(m.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.address}),Object(y.jsx)(m.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.registration_no}),Object(y.jsx)(m.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.tax_no}),Object(y.jsx)(m.a,{sx:{px:0},colSpan:4,children:Object(y.jsx)(u.a,{children:Object(y.jsx)(b.a,{color:"primary",state:{company:e},component:S.b,to:{pathname:"/hospital/service-provider-edit-form",state:e},children:"edit"})})})]},t)}))})]})})]})})},N=Object(c.a)("div")((function(e){var t=e.theme;return Object(n.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})}));t.default=function(){return Object(y.jsx)(i.Fragment,{children:Object(y.jsx)(N,{className:"admin-analytics",children:Object(y.jsx)(r.a,{container:!0,spacing:3,children:Object(y.jsx)(A,{})})})})}}}]);