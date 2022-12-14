(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2551],{86070:function(e,r,t){"use strict";t.d(r,{Z:function(){return L}});var a=t(63366),n=t(87462),o=t(67294),i=t(86010),s=t(94780),l=t(70917),c=t(41796),u=t(36622),d=t(62097),m=t(81719),f=t(78884),b=t(34867);function p(e){return(0,b.Z)("MuiLinearProgress",e)}(0,t(1588).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var h=t(85893);const g=["className","color","value","valueBuffer","variant"];let v,x,Z,y,w,C,k=e=>e;const j=(0,l.F4)(v||(v=k`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),P=(0,l.F4)(x||(x=k`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),S=(0,l.F4)(Z||(Z=k`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),$=(e,r)=>"inherit"===r?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?(0,c.$n)(e.palette[r].main,.62):(0,c._j)(e.palette[r].main,.5),B=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${(0,u.Z)(t.color)}`],r[t.variant]]}})((({ownerState:e,theme:r})=>(0,n.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:$(r,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"}))),q=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${(0,u.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>{const t=$(r,e.color);return(0,n.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(y||(y=k`
    animation: ${0} 3s infinite linear;
  `),S)),_=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})((({ownerState:e,theme:r})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.iv)(w||(w=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),j))),R=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})((({ownerState:e,theme:r})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:$(r,e.color),transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.iv)(C||(C=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),P)));var L=o.forwardRef((function(e,r){const t=(0,f.Z)({props:e,name:"MuiLinearProgress"}),{className:o,color:l="primary",value:c,valueBuffer:m,variant:b="indeterminate"}=t,v=(0,a.Z)(t,g),x=(0,n.Z)({},t,{color:l,variant:b}),Z=(e=>{const{classes:r,variant:t,color:a}=e,n={root:["root",`color${(0,u.Z)(a)}`,t],dashed:["dashed",`dashedColor${(0,u.Z)(a)}`],bar1:["bar",`barColor${(0,u.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,u.Z)(a)}`,"buffer"===t&&`color${(0,u.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.Z)(n,p,r)})(x),y=(0,d.Z)(),w={},C={bar1:{},bar2:{}};if("determinate"===b||"buffer"===b)if(void 0!==c){w["aria-valuenow"]=Math.round(c),w["aria-valuemin"]=0,w["aria-valuemax"]=100;let e=c-100;"rtl"===y.direction&&(e=-e),C.bar1.transform=`translateX(${e}%)`}else 0;if("buffer"===b)if(void 0!==m){let e=(m||0)-100;"rtl"===y.direction&&(e=-e),C.bar2.transform=`translateX(${e}%)`}else 0;return(0,h.jsxs)(B,(0,n.Z)({className:(0,i.Z)(Z.root,o),ownerState:x,role:"progressbar"},w,{ref:r},v,{children:["buffer"===b?(0,h.jsx)(q,{className:Z.dashed,ownerState:x}):null,(0,h.jsx)(_,{className:Z.bar1,ownerState:x,style:C.bar1}),"determinate"===b?null:(0,h.jsx)(R,{className:Z.bar2,ownerState:x,style:C.bar2})]}))}))},77787:function(e,r,t){"use strict";var a=t(36336),n=t(30120),o=t(86070),i=t(61225),s=t(67294),l=t(62097),c=t(11163),u=t(25675),d=t.n(u),m=t(2962),f=t(16959),b=t(28173),p=t(97519),h=t(85893),g={progressBar:{display:{xs:"block",sm:"none"},bgcolor:"common.neutrals.quaternary",height:5,top:"55px"},section:{bgcolor:{sx:"background.paper",sm:"background.default"},position:{sm:"relative"},height:{sm:"calc(100vh - 64px)"},overflow:{sm:"auto"}},main:{bgcolor:"background.paper",boxShadow:{sm:"0px 8px 32px rgba(0, 0, 0, 0.12)"},borderRadius:{sm:3},position:{sm:"relative"},zIndex:{sm:1},maxWidth:{sm:500},minHeight:{sx:"100vh",sm:"unset"},my:{sm:12},py:{xs:15,sm:0}},progressBarSm:{display:{xs:"none",sm:"block"},bgcolor:"common.neutrals.quaternary",borderRadius:"12px 12px 0 0",height:8},childrenContainer:{pt:6,px:{sm:16},py:{sm:12},borderRadius:{sm:[3,3,0,0]}}};r.Z=function(e){var r=e.children,t=(0,c.useRouter)(),u=(0,l.Z)(),v=(0,f.wx)(),x=(0,s.useState)(0),Z=x[0],y=x[1],w=(0,s.useState)(!1),C=w[0],k=w[1],j=(0,s.useState)(!1),P=j[0],S=j[1],$=(0,i.Z)(u.breakpoints.up("sm"));return(0,s.useEffect)((function(){t.pathname in b.q7?(y(b.q7[t.pathname]/Object.keys(b.q7).length*100),k(!0)):k(!1),S(!/\/welcome$/.test(t.pathname))}),[t.pathname]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m.PB,{title:v("app.signUpTitle")}),(0,h.jsx)(p.Z,{hideLogin:P,hideHamburgerMenu:!0}),C&&(0,h.jsx)(o.Z,{"aria-label":v("accountCreateProgressBarAriaLabel"),sx:g.progressBar,variant:"determinate",value:Z}),(0,h.jsxs)(n.Z,{component:"section",sx:g.section,children:[$&&(0,h.jsx)(d(),{src:"/pages/signup/bg.png",alt:"background",layout:"fill",objectFit:"cover"}),(0,h.jsx)(a.Z,{maxWidth:"sm",children:(0,h.jsxs)(n.Z,{component:"main",sx:g.main,children:[C&&(0,h.jsx)(o.Z,{"aria-label":v("accountCreateProgressBarAriaLabel"),sx:g.progressBarSm,variant:"determinate",value:Z}),(0,h.jsx)(n.Z,{sx:g.childrenContainer,children:r})]})})]})]})}},91230:function(e,r,t){"use strict";t.r(r);var a=t(79072),n=t(16835),o=t(67294),i=t(11163),s=t(99131),l=t(16959),c=t(28173),u=t(62056),d=t(38108),m=t(77787),f=t(85893),b={container:{minHeight:{xs:"75vh",sm:542}},titleContainer:{pb:8}};function p(){var e=(0,l.wx)(),r=(0,i.useRouter)(),m=(0,o.useState)(!1),p=m[0],h=m[1],g=(0,s.oR)(c.zO),v=(0,n.Z)(g,2)[1];return(0,o.useEffect)((function(){var e;null===(e=t.g.analytics)||void 0===e||e.track("screen_viewed_onboarding",{screen_name:"welcome"})}),[]),(0,o.useEffect)((function(){var e=decodeURIComponent(r.query.callbackUrl);r.query["coupon-code"]&&(e+="&coupon-code=".concat(r.query["coupon-code"])),/^https?/.test(e)||(e="".concat(t.g.location.origin,"/").concat(r.locale,"/")),v("redirect_to",e)}),[r.query,r.locale,v]),(0,f.jsxs)(a.ZP,{sx:b.container,justifyContent:"center",container:!0,direction:"column",children:[(0,f.jsx)(a.ZP,{sx:b.titleContainer,item:!0,children:(0,f.jsx)(d.Z,{align:"center",component:"h1",variant:"h2",children:e("accountCreateWelcome")})}),(0,f.jsx)(a.ZP,{item:!0,children:(0,f.jsx)(u.Z,{fullWidth:!0,loading:p,disabled:p,onClick:function(e){e.preventDefault(),h(!0),v("isWelcomePageComplete",!0),r.push("/account/create/goals")},children:(0,f.jsx)(d.Z,{variant:"button1",children:e("continue")})})})]})}p.Layout=m.Z,r.default=p},92947:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/create/welcome",function(){return t(91230)}])}},function(e){e.O(0,[9774,2888,179],(function(){return r=92947,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
//# sourceMappingURL=welcome-d7dc35c6726ca9df.js.map