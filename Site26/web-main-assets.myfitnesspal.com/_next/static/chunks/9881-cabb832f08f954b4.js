"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9881],{16056:function(e,t,n){var r=n(30120),o=n(59499),i=n(67294),a=n(85945),s=n(11752),c=n.n(s),l=n(28173),u=n(85893);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=c()().publicRuntimeConfig,b=g.adPrebidding,f=b.adConfig,m=b.ogConfig;t.Z=function(e){var t=e.adUnitPath,n=void 0===t?"":t,o=e.size,s=e.uniqueID,c=e.title,d=e.sx,b=void 0===d?{}:d,h=g.googleAdKey.apiKey+n,A=l.ss[o],x=(0,i.useMemo)((function(){return function(e){return{container:{width:e[0]+"px",height:e[1]+"px",backgroundColor:"#E0E0E0",overflow:"hidden"}}}(A)}),[A]),w=(0,i.useState)(!1),v=w[0],y=w[1],j=(0,i.useState)(!1),O=j[0],Z=j[1],P=(0,a.NL)(),S=P.getQueryData(["subscription"]),T=P.getQueryData(["idm-user-with-consents"]),D=null===T||void 0===T?void 0:T.accountLinks[0].consents,I=S&&S.hasPremium;return(0,i.useEffect)((function(){function e(){window.apstag.fetchBids({slots:[{slotID:s,slotName:"".concat(h,"/").concat(s),sizes:[A]}]},(function(e){window.apstag.setDisplayBids(),y(!0)}))}function t(){window.pbjs.que.push((function(){window.pbjs.addAdUnits([{code:s,mediaTypes:{banner:{sizes:[A]}},bids:f.PBJS.AD_MAPPING[s]}]),window.pbjs.requestBids({adUnitCodes:[s],bidsBackHandler:function(e){window.pbjs.setTargetingForGPTAsync(s),Z(!0)},timeout:m.AD_TIMEOUT})}))}if(!I){var n,r,o;window.googletag=window.googletag||{cmd:[]};var i=!(null===f||void 0===f||null===(n=f.AD_SLOTS_DEFINITIONS)||void 0===n||!n[s]);return window.googletag.cmd.push((function(){D&&!0!==D.personalized_ads&&window.googletag.pubads().setPrivacySettings({nonPersonalizedAds:!0});var n=window.googletag.pubads().getSlots();(r=n.find((function(e){return e.getSlotElementId()===s})))||(r=window.googletag.defineSlot(h,A,s))&&(r.setForceSafeFrame(!i),r.addService(window.googletag.pubads()),window.googletag.enableServices()),i?(e(),t(),o=setInterval((function(){y(!1),Z(!1),e(),t()}),1e3*m.AD_REFRESH_RATE)):(y(!0),Z(!0))})),function(){clearInterval(o)}}}),[A,s,h,D,I]),(0,i.useEffect)((function(){v&&O&&window.googletag.cmd.push((function(){var e=window.googletag.pubads().getSlots().find((function(e){return e.getSlotElementId()===s}));e&&(window.googletag.display(s),window.googletag.pubads().refresh([e]))}))}),[v,O,s]),I?null:(0,u.jsx)(r.Z,{title:c,sx:p(p({},x.container),b),children:(0,u.jsx)(r.Z,{id:s})})}},70734:function(e,t,n){var r=n(59499),o=n(68346),i=n(30120),a=n(4730),s=n(67294),c=n(25675),l=n.n(c),u=n(38108),d=n(16959),p=n(85893),g=["intlTitle","img","url","alt","ariaLabel","isNewHomePage"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t,n,r=e.intlTitle,c=e.img,b=e.url,m=e.alt,h=e.ariaLabel,A=e.isNewHomePage,x=(0,a.Z)(e,g),w=(0,d.wx)(),v=s.useMemo((function(){return function(e){return{root:{display:"flex",flexDirection:"column",color:function(e){return e.palette.common.brand.primary},fontWeight:500,backgroundColor:"transparent",borderRadius:{sm:2.25},overflow:{sm:"hidden"},boxShadow:{sm:"0 2px 7px 0 rgba(0, 0, 0, 0.1)"},pb:{xs:3,sm:"unset"}},imageContainer:{overflow:"hidden",lineHeight:0},titleContainer:{p:"16px 32px 16px 16px",flex:"1 1 0",borderLeft:{sm:"0.8px solid rgba(0, 0, 0, 0.12)"},borderRight:{sm:"0.8px solid rgba(0, 0, 0, 0.12)"},borderBottom:{sm:"0.8px solid rgba(0, 0, 0, 0.12)"},borderRadius:{sm:"0 0 9px 9px"},display:{sm:"flex"},flexDirection:{sm:"column"},justifyContent:{sm:"space-between"},minHeight:{sm:e?141:183,lg:128},"& p":{mx:0,p:0}},title:{color:function(e){return e.palette.grey[900]},lineHeight:"1.4",margin:0,pb:{xs:4,sm:2},fontSize:18,fontWeight:700},blog:{color:"common.brand.primary"}}}(A)}),[A]);return(0,p.jsx)(i.Z,{role:"navigation","aria-label":h,children:(0,p.jsxs)(o.Z,f(f({},x),{},{href:b,sx:v.root,children:[(0,p.jsx)(i.Z,{sx:v.imageContainer,children:(0,p.jsx)(l(),{src:c,alt:m,layout:"responsive"})}),(0,p.jsxs)(i.Z,{sx:v.titleContainer,children:[(0,p.jsx)(u.Z,{component:"h3",sx:v.title,children:(t=r,n=43,t.length>n?t.slice(0,n-1).concat("..."):t)}),(0,p.jsx)(u.Z,{component:"p",variant:"h5",sx:v.blog,children:w("blog.myFitnessPalBlog")})]})]}))})}},62945:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(79072),o=n(59499),i=n(30120),a=(n(67294),n(38108)),s=n(16959),c=n(6878),l={src:"/_next/static/media/running.deb62de2.png",height:360,width:640,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAWlBMVEU+R0gOUFt7jo6Ed2ublI2ulYljeH8pLzekeGJOoq4whZGAs7a9w8KWfXtynp99en9ybmxLiJA+QUVuhYSsj3lghIxmkKNdSUYxMTeJpKJtVkuvppxVh46YraYrwOTUAAAABXRSTlP9/v7+/nsWvjsAAAAJcEhZcwAAA+gAAAPoAbV7UmsAAAA1SURBVHicY+Di5pGRYJBiYODkYWUWZ2ZnZJBlYWIV4RBiZOAWE5XmFRDkYuBjkmTlZ2MTBgAqdgHrDj69tAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},u=n(70734),d=n(28173),p=n(85893);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={root:{mt:6},title:{mb:5,color:function(e){return e.palette.grey[900]},display:"flex",justifyContent:{xs:"center",sm:"flex-start"}}},m=function(){var e=(0,s.wx)(),t=[{intlTitle:e("blog.blogOneTitle"),image:c.Z,url:"https://blog.myfitnesspal.com/10-make-ahead-breakfasts-under-300-calories".concat(d.t6),alt:e("home.altText.breakfast"),ariaLabel:e("blog.blogOneTitle")},{intlTitle:e("blog.blogThreeTitle"),image:l,url:"https://blog.myfitnesspal.com/essential-guide-to-movement-activity".concat(d.t6),alt:e("home.altText.gettingMoving"),ariaLabel:e("blog.blogThreeTitle")}];return(0,p.jsxs)(i.Z,{sx:f.root,children:[(0,p.jsx)(i.Z,{role:"complementary","aria-label":e("blog.title"),sx:f.title,children:(0,p.jsx)(a.Z,{variant:"h2",component:"h2",children:e("blog.title")})}),(0,p.jsx)(r.ZP,{container:!0,spacing:7,children:t.map((function(e,t){return(0,p.jsx)(r.ZP,{item:!0,xs:12,sm:6,children:(0,p.jsx)(u.Z,b(b({},d.U3),{},{intlTitle:e.intlTitle,img:e.image,url:e.url,alt:e.alt,ariaLabel:e.ariaLabel,isNewHomePage:!0}))},t)}))})]})}},4389:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(96480),o=n(30120),i=n(63343),a=n(9041),s=n(75084),c=n(42761),l=n(67294),u=n(16959),d=n(85893),p={searchInput:{display:"flex",borderTop:"1px solid rgba(0, 0, 0, 0.04)",boxShadow:"0 1px 1px 0 rgb(0 0 0 / 12%)",borderRadius:"4px",bgcolor:"#FFF",mb:4,"&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root":{color:"common.brand.primary"},"&.Mui-focused":{boxShadow:"0 1px 2px 1px rgb(0 0 0 / 20%)"},"& input":{border:"none",outline:"none",color:function(e){return e.palette.grey[500]},"&:focus":{color:function(e){return e.palette.grey[900]}},py:4}},searchButton:{pl:2,pr:0,minWidth:0,"&:hover":{background:"none"}},searchIcon:{width:function(e){return"".concat(e.spacing(8))},height:function(e){return"".concat(e.spacing(8))},color:"common.neutrals.primary"},clearResults:{position:"absolute",right:15,"&:hover":{cursor:"pointer"}}};function g(e){var t=e.onSearch,n=e.searchInputValue,g=e.inputRef,b=e.clearResults,f=(0,u.wx)(),m=(0,l.useState)(!1),h=m[0],A=m[1];return(0,d.jsx)(o.Z,{component:"form",onSubmit:t,children:(0,d.jsx)(r.Z,{type:"text",name:"searchInput",defaultValue:n,inputRef:g,onKeyUp:function(){var e;A(!0),""===(null===g||void 0===g||null===(e=g.current)||void 0===e?void 0:e.value)&&A(!1)},disableUnderline:!0,"data-testid":"searchInput",placeholder:f("food.searchBarPlaceholder"),sx:p.searchInput,startAdornment:(0,d.jsx)(a.Z,{position:"start",children:(0,d.jsx)(s.Z,{type:"submit","aria-label":f("home.ariaLabel.search"),sx:p.searchButton,children:(0,d.jsx)(c.Z,{sx:p.searchIcon})})}),endAdornment:h&&(0,d.jsx)(a.Z,{position:"end",children:(0,d.jsx)(o.Z,{sx:p.clearResults,onClick:function(){b(),A(!1)},children:(0,d.jsx)(i.Z,{})})})})})}},90320:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(29630),o=n(30120),i=n(56760),a=n(53328),s=n(55376),c=n(16959),l=n(85893);a.kL.register(a.qi);var u={energyTextContainer:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},calText:{color:"common.neutrals.secondary"}};function d(e){var t=e.energy,n=e.carbs,a=e.fat,d=e.protein,p=e.animateIn,g=void 0!==p&&p,b=e.size,f=void 0===b?56:b,m=e.isFoodDetail,h=void 0!==m&&m,A=(0,c.wx)(),x=(0,i.Z)(),w=t.value>0&&(n>0||a>0||d>0),v=w?[n,a,d]:[1],y=w?[x.palette.common.brand.carb,x.palette.common.brand.fat,x.palette.common.brand.protein]:[x.palette.common.neutrals.background],j="".concat(A("carbohydrates"),": ").concat(n).concat(A("gramsAbbreviated"),", ").concat(A("fat"),": ").concat(a).concat(A("gramsAbbreviated"),", ").concat(A("protein"),": ").concat(d).concat(A("gramsAbbreviated"));return(0,l.jsxs)(o.Z,{sx:{position:"relative",display:"inline-flex"},children:[(0,l.jsx)(o.Z,{width:f,height:f,children:(0,l.jsx)(s.$I,{data:{datasets:[{data:v,backgroundColor:y}]},options:{animation:{animateRotate:g},cutout:"83%",radius:f/2},"aria-label":A("food.macrosCircle.ariaLabel",{data:j})})}),(0,l.jsxs)(o.Z,{sx:u.energyTextContainer,children:[(0,l.jsx)(r.Z,{variant:h?"d3":"h3",children:Math.round(t.value)}),h&&(0,l.jsx)(r.Z,{sx:u.calText,variant:"h3",children:A("caloriesAbbreviated")})]})]})}},94703:function(e,t,n){n.d(t,{E:function(){return s}});var r=n(50029),o=n(87794),i=n.n(o),a=n(43433);function s(e){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(i().mark((function e(t){var n,r,o,s,c,l,u,d,p,g;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=t.page,o=void 0===r?1:r,s=t.offset,c=void 0===s?10:s,l=t.client,u=void 0===l?a.o:l,d={query:n,page:o,offset:c},e.next=4,u.get("/api/nutrition",{params:d});case 4:return p=e.sent,g=p.data,e.abrupt("return",g);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},6878:function(e,t){t.Z={src:"/_next/static/media/breakfast-300-calories.d991cc82.png",height:360,width:640,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAOVBMVEXgzLnX0MvMrJLh2NCeb1fY19jZ1NLq7OzMvrO6i2qzfVvFlXa/ooji4uLOycjBrKCVX0TNxL7Ht6fOIpehAAAAAXRSTlP+GuMHfQAAAAlwSFlzAAAD6AAAA+gBtXtSawAAAC5JREFUeJwFwYcBACAIA7AiG7f/H2sCGm/qdIfd2NLhCI2e1RimUSLJWGTjZPMPHZsBPZI+38oAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}}}]);
//# sourceMappingURL=9881-cabb832f08f954b4.js.map