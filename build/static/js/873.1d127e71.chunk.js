"use strict";(self.webpackChunkmy_web=self.webpackChunkmy_web||[]).push([[873],{53873:function(n,e,i){i.r(e),i.d(e,{default:function(){return z}});var r=i(4942),t=i(66934),o=i(20890),a=i(91614),s=i(64554),l=i(63466),c=i(36151),d=i(53767),h=i(29439),u=i(72791);var x=i(25212),m=i(1413),p=i(76530),f=(0,t.ZP)(p.Z,{shouldForwardProp:function(n){return"stretchStart"!==n}})((function(n){var e=n.stretchStart,i=n.theme;return{"& .MuiOutlinedInput-root":(0,m.Z)({transition:i.transitions.create(["box-shadow","width"],{easing:i.transitions.easing.easeInOut,duration:i.transitions.duration.shorter}),"&.Mui-focused":{boxShadow:i.customShadows.z12}},e&&{width:e,"&.Mui-focused":(0,r.Z)({boxShadow:i.customShadows.z12},i.breakpoints.up("sm"),{width:e+60})}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(i.palette.grey[50032]," !important")}}})),Z=i(45987),v=i(12065),j=i(23060),g=i(66437),w=i(13400),k=i(53026),y=i(80184),b=["initialColor","simple","links","sx"];function C(n){var e=n.initialColor,i=void 0!==e&&e,r=n.simple,t=void 0===r||r,o=n.links,a=void 0===o?{}:o,s=n.sx,l=(0,Z.Z)(n,b),h=[{name:"FaceBook",icon:"eva:facebook-fill",socialColor:"#1877F2",path:a.facebook||"#facebook-link"},{name:"Instagram",icon:"ant-design:instagram-filled",socialColor:"#E02D69",path:a.instagram||"#instagram-link"},{name:"Linkedin",icon:"eva:linkedin-fill",socialColor:"#007EBB",path:a.linkedin||"#linkedin-link"},{name:"Twitter",icon:"eva:twitter-fill",socialColor:"#00AAEC",path:a.twitter||"#twitter-link"}];return(0,y.jsx)(d.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:h.map((function(n){var e=n.name,r=n.icon,o=n.path,a=n.socialColor;return t?(0,y.jsx)(j.Z,{href:o,children:(0,y.jsx)(g.Z,{title:e,placement:"top",children:(0,y.jsx)(w.Z,(0,m.Z)((0,m.Z)({color:"inherit",sx:(0,m.Z)((0,m.Z)({},i&&{color:a,"&:hover":{bgcolor:(0,v.Fq)(a,.08)}}),s)},l),{},{children:(0,y.jsx)(k.Z,{icon:r,sx:{width:20,height:20}})}))})},e):(0,y.jsx)(c.Z,(0,m.Z)((0,m.Z)({href:o,color:"inherit",variant:"outlined",size:"small",startIcon:(0,y.jsx)(k.Z,{icon:r}),sx:(0,m.Z)((0,m.Z)({m:.5,flexShrink:0},i&&{color:a,borderColor:a,"&:hover":{borderColor:a,bgcolor:(0,v.Fq)(a,.08)}}),s)},l),{},{children:e}),e)}))})}var I=i(51973),S=(0,t.ZP)("div")((function(n){var e=n.theme;return{height:"100%",display:"flex",alignItems:"center",paddingTop:e.spacing(15),paddingBottom:e.spacing(10)}})),M=(0,t.ZP)("div")({display:"flex",justifyContent:"center"}),P=(0,t.ZP)(o.Z)((function(n){var e=n.theme;return(0,r.Z)({margin:e.spacing(0,1)},e.breakpoints.up("sm"),{margin:e.spacing(0,2.5)})}));function z(){var n=function(n){var e=(0,u.useState)({days:"00",hours:"00",minutes:"00",seconds:"00"}),i=(0,h.Z)(e,2),r=i[0],t=i[1];(0,u.useEffect)((function(){var n=setInterval((function(){return o()}),1e3);return function(){return clearInterval(n)}}),[]);var o=function(){var e=n-new Date,i=Math.floor(e/864e5),r="0".concat(Math.floor(e%864e5/36e5)).slice(-2),o="0".concat(Math.floor(e%36e5/6e4)).slice(-2),a="0".concat(Math.floor(e%6e4/1e3)).slice(-2);t({days:i||"000",hours:r||"000",minutes:o||"000",seconds:a||"000"})};return r}(new Date("07/07/2022 21:30"));return(0,y.jsx)(x.Z,{title:"Coming Soon",sx:{height:1},children:(0,y.jsx)(S,{children:(0,y.jsx)(a.Z,{children:(0,y.jsxs)(s.Z,{sx:{maxWidth:480,margin:"auto",textAlign:"center"},children:[(0,y.jsx)(o.Z,{variant:"h3",paragraph:!0,children:"Coming Soon!"}),(0,y.jsx)(o.Z,{sx:{color:"text.secondary"},children:"We are currently working hard on this page!"}),(0,y.jsx)(I.dD,{sx:{my:10,height:240}}),(0,y.jsxs)(M,{children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(o.Z,{variant:"h2",children:n.days}),(0,y.jsx)(o.Z,{sx:{color:"text.secondary"},children:"Days"})]}),(0,y.jsx)(P,{variant:"h2",children:":"}),(0,y.jsxs)("div",{children:[(0,y.jsx)(o.Z,{variant:"h2",children:n.hours}),(0,y.jsx)(o.Z,{sx:{color:"text.secondary"},children:"Hours"})]}),(0,y.jsx)(P,{variant:"h2",children:":"}),(0,y.jsxs)("div",{children:[(0,y.jsx)(o.Z,{variant:"h2",children:n.minutes}),(0,y.jsx)(o.Z,{sx:{color:"text.secondary"},children:"Minutes"})]}),(0,y.jsx)(P,{variant:"h2",children:":"}),(0,y.jsxs)("div",{children:[(0,y.jsx)(o.Z,{variant:"h2",children:n.seconds}),(0,y.jsx)(o.Z,{sx:{color:"text.secondary"},children:"Seconds"})]})]}),(0,y.jsx)(f,{fullWidth:!0,placeholder:"Enter your email",InputProps:{endAdornment:(0,y.jsx)(l.Z,{position:"end",children:(0,y.jsx)(c.Z,{variant:"contained",size:"large",children:"Notify Me"})})},sx:{my:5,"& .MuiOutlinedInput-root":{pr:.5}}}),(0,y.jsx)(d.Z,{alignItems:"center",children:(0,y.jsx)(C,{size:"large",initialColor:!0})})]})})})})}}}]);
//# sourceMappingURL=873.1d127e71.chunk.js.map