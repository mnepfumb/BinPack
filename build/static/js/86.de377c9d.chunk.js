(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[86],{719:function(e,t,a){"use strict";a.r(t);var c=a(7),n=a(5),r=a(300),s=a(1),i=a.n(s),o=a(33),l=a(47),d=a(13),j=a(171),p=a(365),x=a(174),u=a(252),b=a(377),h=a(366),O=a(367),f=a(368),m=a(369),g=a(303),v=a(21),y=a(37),S=a(11),w=a(245),k=a(295),_=a(378),T=a(379),C=a(645),z=a(532),D=a(432),B=a(66),A=a(2),F=i.a.forwardRef((function(e,t){return Object(A.jsx)(D.a,Object(S.a)({direction:"up",ref:t},e))}));function N(e){var t=e.user,a=i.a.useState(!1),c=Object(d.a)(a,2),n=c[0],r=c[1];function s(){r(!1)}var j=function(){var e=Object(l.a)(Object(o.a)().mark((function e(a){var c,n,s;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(" user._id: "+t._id),e.prev=1,c=window.localStorage.getItem("accessToken"),n="/users/"+t._id,console.log("url: "+n),e.next=7,B.a.patch(n,{is_active:!1,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)}});case 7:s=e.sent,"success"===s.data.status&&r(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("error: "+e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)("div",{children:[Object(A.jsx)(x.a,{style:{color:"#FF3D57"},onClick:function(){r(!0)},children:"do_not_disturb_on"}),Object(A.jsxs)(k.a,{open:n,keepMounted:!0,onClose:s,TransitionComponent:F,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(A.jsx)(z.a,{id:"alert-dialog-slide-title",children:"User Deactivation"}),Object(A.jsx)(T.a,{children:Object(A.jsx)(C.a,{id:"alert-dialog-slide-description",children:"The current user will be deactivated. They will not be able to gain access to the system."})}),Object(A.jsxs)(_.a,{children:[Object(A.jsx)(w.a,{onClick:s,color:"primary",children:"Back"}),Object(A.jsx)(w.a,{onClick:j,color:"primary",children:"Deactivate"})]})]})]})}var R=i.a.forwardRef((function(e,t){return Object(A.jsx)(D.a,Object(S.a)({direction:"up",ref:t},e))}));function I(e){var t=e.user,a=i.a.useState(!1),c=Object(d.a)(a,2),n=c[0],r=c[1];function s(){r(!1)}var j=function(){var e=Object(l.a)(Object(o.a)().mark((function e(a){var c,n,s;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(" user._id: "+t._id),e.prev=1,c=window.localStorage.getItem("accessToken"),n="/users/"+t._id,console.log("url: "+n),e.next=7,B.a.patch(n,{is_active:!0,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)}});case 7:s=e.sent,"success"===s.data.status&&r(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("error: "+e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)("div",{children:[Object(A.jsx)(x.a,{style:{color:"#08ad6c"},onClick:function(){r(!0)},children:"do_not_disturb_on"}),Object(A.jsxs)(k.a,{open:n,keepMounted:!0,onClose:s,TransitionComponent:R,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(A.jsx)(z.a,{id:"alert-dialog-slide-title",children:"User Deactivation"}),Object(A.jsx)(T.a,{children:Object(A.jsx)(C.a,{id:"alert-dialog-slide-description",children:"The current user will be deactivated. They will not be able to gain access to the system."})}),Object(A.jsxs)(_.a,{children:[Object(A.jsx)(w.a,{onClick:s,color:"primary",children:"Back"}),Object(A.jsx)(w.a,{onClick:j,color:"primary",children:"Deactivate"})]})]})]})}var L=a(120),M=a(444),U=a(128),E=Object(n.a)(j.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),J=Object(n.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),W=Object(n.a)(p.a)((function(){return{minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}})),H=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(U.a)().user,r=Object(v.f)(),i=function(){var e=Object(l.a)(Object(o.a)().mark((function e(){var t,a,r,s,i,l,d,j,p,x,u;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window.localStorage.getItem("accessToken"),console.log("accessToken: "+t),console.log("user.id: "+n.id),a="/users/".concat(n.id),e.next=7,B.a.get(a,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 7:if(r=e.sent,s=r.data,i=s.status,l=s.users,console.log("users: "+l),"success"!==i){e.next=26;break}return d=l.company_id,console.log("company_id: "+d),e.prev=13,a="/users/userfield?company_id="+d,e.next=17,B.a.get(a,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 17:j=e.sent,p=j.data,x=p.status,u=p.users,console.log("users: "+u),"success"===x&&(console.log("user.is_active: ".concat(u[0].is_active)),c(u)),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(13),console.log("error: "+e.t0);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(0),console.log("error: "+e.t1);case 31:case"end":return e.stop()}}),e,null,[[0,28],[13,23]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){i()}),[]);var p=function(e,t){return e?Object(A.jsx)(N,{user:t}):Object(A.jsx)(I,{user:t})};return Object(A.jsx)(u.a,{elevation:3,sx:{pt:"20px",mb:3},children:Object(A.jsxs)(L.a,{children:[Object(A.jsxs)(E,{children:[Object(A.jsx)(J,{children:"Hospitals' User List"}),Object(A.jsx)(b.a,{color:"primary","aria-label":"Add",className:"button",onClick:function(){return r("/admin/user-add-form")},children:Object(A.jsx)(x.a,{children:"add"})})]}),Object(A.jsx)(j.a,{overflow:"auto",children:Object(A.jsxs)(W,{children:[Object(A.jsx)(h.a,{children:Object(A.jsxs)(O.a,{children:[Object(A.jsx)(f.a,{sx:{px:4},colSpan:4,children:"Name"}),Object(A.jsx)(f.a,{sx:{px:4},colSpan:4,children:"Surname"}),Object(A.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Phone Number"}),Object(A.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Email"}),Object(A.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Role"}),Object(A.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Company"}),Object(A.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Active Status"}),Object(A.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Created Date"}),Object(A.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Action"})]})}),Object(A.jsx)(m.a,{children:a.map((function(e,t){return Object(A.jsxs)(O.a,{hover:!0,children:[Object(A.jsx)(f.a,{colSpan:4,align:"left",sx:{px:0,textTransform:"capitalize"},children:e.name}),Object(A.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.surname}),Object(A.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.phone}),Object(A.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.email}),Object(A.jsx)(f.a,{sx:{px:0},align:"left",colSpan:4,children:e.role}),Object(A.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.company}),Object(A.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:(a=e.is_active,a?Object(A.jsx)(x.a,{className:"icon",style:{color:"#08ad6c",size:42},children:"check"}):Object(A.jsx)(x.a,{className:"icon",style:{color:"#FF3D57",size:42},children:"clear"}))}),Object(A.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:Object(A.jsx)(M.a,{dateFormat:"YMD",dateSeparator:"/",timeSeparator:":",children:e.updated_at})}),Object(A.jsxs)(f.a,{sx:{px:0},colSpan:4,children:[Object(A.jsx)(g.a,{children:Object(A.jsx)(x.a,{color:"primary",state:{user:e},component:y.b,to:{pathname:"/admin/user-edit-form",state:e},children:"edit"})}),Object(A.jsx)(g.a,{children:p(e.is_active,e)})]})]},t);var a}))})]})})]})})},P=Object(n.a)("div")((function(e){var t=e.theme;return Object(c.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})}));t.default=function(){return Object(A.jsx)(s.Fragment,{children:Object(A.jsx)(P,{className:"user",children:Object(A.jsx)(r.a,{container:!0,spacing:3,children:Object(A.jsx)(H,{})})})})}}}]);