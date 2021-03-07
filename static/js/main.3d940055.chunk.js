(this["webpackJsonpwj-website"]=this["webpackJsonpwj-website"]||[]).push([[0],{25:function(e,t,i){},48:function(e,t,i){},71:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i.n(n),a=i(36),r=i.n(a),o=(i(48),i(16)),s=i(6),l=(i(25),i(43)),d=i(11),j=(i(49),i(19)),h=i(3);var m=function(){var e=c.a.useState({latitude:0,longitude:0,zoom:1,transitionDuration:800}),t=Object(o.a)(e,2),i=t[0],a=t[1],r=Object(n.useRef)(null),s={type:"FeatureCollection",features:[]};return[{lat:35.6897,lng:139.6922},{lat:31.1667,lng:121.4667},{lat:37.5833,lng:127},{lat:37.5833,lng:127},{lat:39.905,lng:116.3914},{lat:22.535,lng:114.054},{lat:41.8373,lng:-87.6862},{lat:3.1478,lng:101.6953},{lat:22.305,lng:114.185},{lat:1.3,lng:103.8},{lat:43.7417,lng:-79.3733},{lat:38.9047,lng:-77.0163},{lat:42.3834,lng:-83.1024},{lat:22.6167,lng:120.3},{lat:25.0478,lng:121.5319}].map((function(e){s.features=[].concat(Object(l.a)(s.features),[{type:"Feature",geometry:{type:"Point",coordinates:[e.lng,e.lat]},properties:{}}])})),Object(h.jsx)(j.c,Object(d.a)(Object(d.a)({},i),{},{width:"100%",height:"70vh",mapboxApiAccessToken:"pk.eyJ1IjoibHdlaWppZSIsImEiOiJja2x0dDR4dzAwY2QxMnBsbzl2eHEyNGtiIn0._IrtLzO15yzx1JBW-v_x9A",onViewportChange:function(e){return a(e)},onClick:function(e){try{if(null==e)return;if(null==r)return;var t=e.features[0],n=t.properties.cluster_id;r.current.getMap().getSource("places").getClusterExpansionZoom(n,(function(e,n){!e&&n&&a(Object(d.a)(Object(d.a)({},i),{},{longitude:t.geometry.coordinates[0],latitude:t.geometry.coordinates[1],zoom:n}))}))}catch(c){}},ref:r,children:Object(h.jsx)(j.b,{id:"places",type:"geojson",data:s,cluster:!0,children:Object(h.jsx)(j.a,{type:"circle",paint:{"circle-color":"grey","circle-radius":10}})})}))},p=i(39),u=i.n(p);var b=function(){return Object(h.jsx)(u.a,{links:["https://www.linkedin.com/in/weijielee99/","https://github.com/leeweijie","https://www.instagram.com/weijiewj_/"],buttonStyle:{margin:"2rem 16px 0 0",backgroundColor:"#3f3f3f",borderRadius:"30%"},iconStyle:{color:"#e9e9e9"},openNewTab:!0})};var g=s.a.div.withConfig({displayName:"About__Container",componentId:"xqzxx1-0"})(["display:flex;margin-bottom:5rem;"]),x=s.a.div.withConfig({displayName:"About__Section",componentId:"xqzxx1-1"})(["margin:1rem 4rem 1rem 4rem;"]),f=s.a.h1.withConfig({displayName:"About__Title",componentId:"xqzxx1-2"})(["font-size:1em;margin:0;"]),O=s.a.ul.withConfig({displayName:"About__List",componentId:"xqzxx1-3"})(["text-align:left;"]),w=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(g,{children:[Object(h.jsxs)(x,{children:[Object(h.jsx)(f,{children:"Skills:"}),Object(h.jsxs)(O,{children:[Object(h.jsx)("li",{children:"C++"}),Object(h.jsx)("li",{children:"React.JS"}),Object(h.jsx)("li",{children:"Typescript"}),Object(h.jsx)("li",{children:"Python"}),Object(h.jsx)("li",{children:"Java"}),Object(h.jsx)("li",{children:"Node.js"}),Object(h.jsx)("li",{children:"AWS"})]})]}),Object(h.jsxs)(x,{children:[Object(h.jsx)(f,{children:"This website was built with:"}),Object(h.jsxs)(O,{children:[Object(h.jsx)("li",{children:"React.JS"}),Object(h.jsx)("li",{children:"Typescript"}),Object(h.jsx)("li",{children:"Styled Components"}),Object(h.jsx)("li",{children:"Mapbox"}),Object(h.jsx)("li",{children:"react-social-media-buttons"})]})]})]}),Object(h.jsx)(b,{})]})},y=i.p+"static/media/me-1.16521ffd.png",v=i.p+"static/media/me-2.cf8908e8.png",C=i.p+"static/media/me-3.099166dd.png";var _=s.a.div.withConfig({displayName:"ProfilePicture__ImageContainer",componentId:"vhq33g-0"})(["position:relative;width:100%;height:20rem;@media (min-width:1024px){width:25rem;height:30rem;}"]),I=s.a.img.withConfig({displayName:"ProfilePicture__Image",componentId:"vhq33g-1"})(["position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);transition:opacity 1s linear;opacity:",";width:","rem;@media (min-width:1024px){width:","rem;}"],(function(e){return e.show?1:0}),(function(e){return 20*e.scale}),(function(e){return 25*e.scale})),N=function(e){var t=e.slideshowState;return Object(h.jsxs)(_,{children:[Object(h.jsx)(I,{src:y,alt:"my picture 1",scale:1,show:0==t}),Object(h.jsx)(I,{src:v,alt:"my picture 2",scale:1,show:1==t}),Object(h.jsx)(I,{src:C,alt:"my picture 3",scale:.7,show:2==t})]})};var A=s.a.div.withConfig({displayName:"App__Container",componentId:"sc-1mseqho-0"})(["@media (min-width:1024px){display:flex;}"]),S=s.a.div.withConfig({displayName:"App__MainProfileContainer",componentId:"sc-1mseqho-1"})(["margin:4rem 2rem 4rem 2rem;"]),z=s.a.h1.withConfig({displayName:"App__Name",componentId:"sc-1mseqho-2"})(["text-align:left;margin-bottom:0.9rem;color:"," !important;transition:color 0.7s linear;"],(function(e){return e.color})),q=s.a.p.withConfig({displayName:"App__Info",componentId:"sc-1mseqho-3"})(["text-align:left;margin:0.8rem 0 0rem 0;font-size:0.9em;"]),k=s.a.h1.withConfig({displayName:"App__Title",componentId:"sc-1mseqho-4"})(["font-size:1em;margin:0;"]),J=s.a.h2.withConfig({displayName:"App__Subtitle",componentId:"sc-1mseqho-5"})(["font-size:0.8rem;opacity:0.8;"]),P=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),i=t[0],c=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){c((function(e){return(e+1)%3}))}),4e3);return function(){clearInterval(e)}})),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"App-header",children:Object(h.jsxs)(A,{children:[Object(h.jsx)(N,{slideshowState:i}),Object(h.jsxs)(S,{children:[Object(h.jsx)(z,{color:["#3c4854","#7f2a34","#735d4d"][i],children:"Wei Jie  Lee"}),Object(h.jsx)(q,{children:"Computer Science sophomore at the University of Michigan."}),Object(h.jsx)(q,{children:"Excited about software, photography, hiking, and the electric guitar!"}),Object(h.jsx)(b,{})]})]})}),Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)(k,{children:"Where I've been:"}),Object(h.jsx)(J,{children:"(Click on the clusters!)"}),Object(h.jsx)(m,{})]}),Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)(w,{})})]})},T=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,72)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;i(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(P,{}),document.getElementById("root")),T()}},[[71,1,2]]]);
//# sourceMappingURL=main.3d940055.chunk.js.map