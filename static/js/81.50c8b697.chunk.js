(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[81],{719:function(e,t,a){"use strict";a.r(t);var c=a(7),n=a(5),r=a(300),i=a(1),s=a.n(i),o=a(33),l=a(46),d=a(13),j=a(171),p=a(368),x=a(174),b=a(252),u=a(389),h=a(369),O=a(370),f=a(371),m=a(372),v=a(303),g=a(21),y=a(37),S=a(11),k=a(245),w=a(295),T=a(384),C=a(385),_=a(643),z=a(527),B=a(437),D=a(65),A=a(2),F=s.a.forwardRef((function(e,t){return Object(A.jsx)(B.a,Object(S.a)({direction:"up",ref:t},e))}));function N(e){var t=e.user,a=s.a.useState(!1),c=Object(d.a)(a,2),n=c[0],r=c[1];function i(){r(!1)}var j=function(){var e=Object(l.a)(Object(o.a)().mark((function e(a){var c,n,i;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=window.localStorage.getItem("accessToken"),n="/users/"+t._id,e.next=5,D.a.patch(n,{is_active:!1,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)}});case 5:i=e.sent,"success"===i.data.status&&r(!1),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)("div",{children:[Object(A.jsx)(x.a,{style:{color:"#FF3D57"},onClick:function(){r(!0)},children:"do_not_disturb_on"}),Object(A.jsxs)(w.a,{open:n,keepMounted:!0,onClose:i,TransitionComponent:F,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(A.jsx)(z.a,{id:"alert-dialog-slide-title",children:"User Deactivation"}),Object(A.jsx)(C.a,{children:Object(A.jsx)(_.a,{id:"alert-dialog-slide-description",children:"The current user will be deactivated. They will not be able to gain access to the system."})}),Object(A.jsxs)(T.a,{children:[Object(A.jsx)(k.a,{onClick:i,color:"primary",children:"Back"}),Object(A.jsx)(k.a,{onClick:j,color:"primary",children:"Deactivate"})]})]})]})}var R=s.a.forwardRef((function(e,t){return Object(A.jsx)(B.a,Object(S.a)({direction:"up",ref:t},e))}));function I(e){var t=e.user,a=s.a.useState(!1),c=Object(d.a)(a,2),n=c[0],r=c[1];function i(){r(!1)}var j=function(){var e=Object(l.a)(Object(o.a)().mark((function e(a){var c,n,i;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=window.localStorage.getItem("accessToken"),n="/users/"+t._id,e.next=5,D.a.patch(n,{is_active:!0,updated_at:new Date,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)}});case 5:i=e.sent,"success"===i.data.status&&r(!1),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)("div",{children:[Object(A.jsx)(x.a,{style:{color:"#08ad6c"},onClick:function(){r(!0)},children:"do_not_disturb_on"}),Object(A.jsxs)(w.a,{open:n,keepMounted:!0,onClose:i,TransitionComponent:R,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(A.jsx)(z.a,{id:"alert-dialog-slide-title",children:"User Deactivation"}),Object(A.jsx)(C.a,{children:Object(A.jsx)(_.a,{id:"alert-dialog-slide-description",children:"The current user will be deactivated. They will not be able to gain access to the system."})}),Object(A.jsxs)(T.a,{children:[Object(A.jsx)(k.a,{onClick:i,color:"primary",children:"Back"}),Object(A.jsx)(k.a,{onClick:j,color:"primary",children:"Deactivate"})]})]})]})}var L=a(120),M=a(442),P=a(129),U=Object(n.a)(j.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),E=Object(n.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),J=Object(n.a)(p.a)((function(){return{minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}})),W=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(P.a)().user,r=Object(g.f)();Object(i.useEffect)((function(){var e=function(){var e=Object(l.a)(Object(o.a)().mark((function e(){var t,a,r,i,s,l,d,j,p,x,b,u;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window.localStorage.getItem("accessToken"),a="/users/".concat(n.id),e.next=5,D.a.get(a,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 5:if(r=e.sent,i=r.data,s=i.status,l=i.users,"success"!==s){e.next=20;break}return d=l.company_id,e.prev=9,j="/users/userfield?company_id="+d,e.next=13,D.a.get(j,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 13:p=e.sent,x=p.data,b=x.status,u=x.users,"success"===b&&c(u),e.next=20;break;case 18:e.prev=18,e.t0=e.catch(9);case 20:e.next=24;break;case 22:e.prev=22,e.t1=e.catch(0);case 24:case"end":return e.stop()}}),e,null,[[0,22],[9,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[n.id]);var s=function(e,t){return e?Object(A.jsx)(N,{user:t}):Object(A.jsx)(I,{user:t})};return Object(A.jsx)(b.a,{elevation:3,sx:{pt:"20px",mb:3},children:Object(A.jsxs)(L.a,{children:[Object(A.jsxs)(U,{children:[Object(A.jsx)(E,{children:"Hospitals' User List"}),Object(A.jsx)(u.a,{color:"primary","aria-label":"Add",className:"button",onClick:function(){return r("/netcare/hospital/user-add-form")},children:Object(A.jsx)(x.a,{children:"add"})})]}),Object(A.jsx)(j.a,{overflow:"auto",children:Object(A.jsxs)(J,{children:[Object(A.jsx)(h.a,{children:Object(A.jsxs)(O.a,{children:[Object(A.jsx)(f.a,{sx:{px:4},colSpan:4,children:"Name"}),Object(A.jsx)(f.a,{sx:{px:4},colSpan:4,children:"Surname"}),Object(A.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Phone Number"}),Object(A.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Email"}),Object(A.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Role"}),Object(A.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Company"}),Object(A.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Active Status"}),Object(A.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Created Date"}),Object(A.jsx)(f.a,{sx:{px:0},colSpan:4,children:"Action"})]})}),Object(A.jsx)(m.a,{children:a.map((function(e,t){return Object(A.jsxs)(O.a,{hover:!0,children:[Object(A.jsx)(f.a,{colSpan:4,align:"left",sx:{px:0,textTransform:"capitalize"},children:e.name}),Object(A.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.surname}),Object(A.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.phone}),Object(A.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.email}),Object(A.jsx)(f.a,{sx:{px:0},align:"left",colSpan:4,children:e.role}),Object(A.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:e.company}),Object(A.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:(a=e.is_active,a?Object(A.jsx)(x.a,{className:"icon",style:{color:"#08ad6c",size:42},children:"check"}):Object(A.jsx)(x.a,{className:"icon",style:{color:"#FF3D57",size:42},children:"clear"}))}),Object(A.jsx)(f.a,{align:"left",colSpan:4,sx:{px:0,textTransform:"capitalize"},children:Object(A.jsx)(M.a,{dateFormat:"YMD",dateSeparator:"/",timeSeparator:":",children:e.updated_at})}),Object(A.jsxs)(f.a,{sx:{px:0},colSpan:4,children:[Object(A.jsx)(v.a,{children:Object(A.jsx)(x.a,{color:"primary",state:{user:e},component:y.b,to:{pathname:"/netcare/hospital/user-edit-form",state:e},children:"edit"})}),Object(A.jsx)(v.a,{children:s(e.is_active,e)})]})]},t);var a}))})]})})]})})},H=Object(n.a)("div")((function(e){var t=e.theme;return Object(c.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})}));t.default=function(){return Object(A.jsx)(i.Fragment,{children:Object(A.jsx)(H,{className:"user",children:Object(A.jsx)(r.a,{container:!0,spacing:3,children:Object(A.jsx)(W,{})})})})}}}]);