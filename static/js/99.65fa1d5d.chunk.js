(this.webpackJsonpBinPack=this.webpackJsonpBinPack||[]).push([[99],{691:function(e,a,s){"use strict";s.r(a);var i=s(765),r=s(252),t=s(300),n=s(268),c=s(419),l=s(119),o=s(173),d=s(59),m=s(41),h=s(129),b=s(639),j=s(1),p=s(21),u=s(37),x=s(640),g=s(65),O=s(2);const w=Object(l.a)(o.a)((()=>({display:"flex",alignItems:"center"}))),v=Object(l.a)(w)((()=>({justifyContent:"center"}))),y=Object(l.a)(o.a)((()=>({height:"100%",padding:"32px",position:"relative",background:"rgba(0, 0, 0, 0.01)"}))),f=Object(l.a)(v)((()=>({background:"#1A2038",minHeight:"100% !important","& .card":{maxWidth:800,minHeight:400,margin:"1rem",display:"flex",borderRadius:12,alignItems:"center"}}))),k={email:"",password:"",remember:!0},B=x.a().shape({password:x.b().min(6,"Password must be 6 character length").required("Password is required!"),email:x.b().email("Invalid Email address").required("Email is required!")});a.default=()=>{const e=Object(d.a)(),a=Object(p.f)(),[s,l]=Object(j.useState)(!1),{login:o}=Object(h.a)();return Object(O.jsx)(f,{children:Object(O.jsx)(r.a,{className:"card",children:Object(O.jsxs)(t.a,{container:!0,children:[Object(O.jsx)(t.a,{item:!0,sm:6,xs:12,children:Object(O.jsx)(v,{p:4,height:"100%",sx:{minWidth:320},children:Object(O.jsx)("img",{src:"/BinPack/assets/images/logo.png",width:"100%",alt:""})})}),Object(O.jsx)(t.a,{item:!0,sm:6,xs:12,children:Object(O.jsxs)(y,{children:[Object(O.jsx)(b.a,{onSubmit:async e=>{l(!0);try{var s=await(async(e,a)=>(await g.a.post("/auth/signin",{email:e,password:a,headers:{"Content-Type":"application/json"}})).data)(e.email,e.password);const{accessToken:i,user:r}=s;await o(i,r),"admin"===r.role?a("/netcare/admin/dashboard"):"hospital"===r.role?a("/netcare/hospital/dashboard"):"service provider"===r.role?a("/netcare/service_provider/dashboard"):"driver"===r.role&&a("/netcare/driver/dashboard"),l(!1)}catch(i){l(!1)}},initialValues:k,validationSchema:B,children:a=>{let{values:r,errors:t,touched:l,handleChange:o,handleBlur:d,handleSubmit:h}=a;return Object(O.jsxs)("form",{onSubmit:h,children:[Object(O.jsx)(n.a,{fullWidth:!0,size:"small",type:"email",name:"email",label:"Email",variant:"outlined",onBlur:d,value:r.email,onChange:o,helperText:l.email&&t.email,error:Boolean(t.email&&l.email),sx:{mb:3}}),Object(O.jsx)(n.a,{fullWidth:!0,size:"small",name:"password",type:"password",label:"Password",variant:"outlined",onBlur:d,value:r.password,onChange:o,helperText:l.password&&t.password,error:Boolean(t.password&&l.password),sx:{mb:1.5}}),Object(O.jsxs)(w,{justifyContent:"space-between",children:[Object(O.jsxs)(w,{gap:1,children:[Object(O.jsx)(c.a,{size:"small",name:"remember",onChange:o,checked:r.remember,sx:{padding:0}}),Object(O.jsx)(m.g,{children:"Remember Me"})]}),Object(O.jsx)(u.c,{to:"/session/forgot-password",style:{color:e.palette.primary.main},children:"Forgot password?"})]}),Object(O.jsx)(i.a,{type:"submit",color:"primary",loading:s,variant:"contained",sx:{my:2},children:"Login"})]})}}),Object(O.jsxs)(w,{justifyContent:"space-between",children:[Object(O.jsx)(m.g,{children:"This Application is powered by BinPack"}),Object(O.jsx)("img",{src:"/BinPack/assets/images/logo.png",width:"54px",height:"44px",alt:"netcare"})]})]})})]})})})}}}]);