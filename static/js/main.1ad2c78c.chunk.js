(this["webpackJsonpimage-search"]=this["webpackJsonpimage-search"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(0),r=n.n(c),a=n(16),o=n.n(a),s=(n(23),n(10)),l=n(2),d=n(8),u=(n(24),function(e){var t=e.children;return Object(i.jsx)("div",{children:t})}),j=(n(25),function(e){var t=e.className,n=e.onClick,c=e.children,r=t?" ".concat(t):" main";return Object(i.jsx)("div",{onClick:function(){n&&n()},className:"btn"+r,role:"button",children:c||"Click"})}),h=(n(26),function(e){var t=e.onChange,n=e.children;return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)("input",{type:"file",onChange:t,id:"fileInput",className:"none"}),Object(i.jsxs)("label",{htmlFor:"fileInput",className:"file_input",title:"Upload file",children:[Object(i.jsx)(j,{children:"Choose"}),Object(i.jsx)("span",{children:n||"File not selected"})]})]})}),b=(n(27),function(e){var t=e.data,n=e.state,c=e.onChange;return Object(i.jsx)("form",{onChange:c,className:"radio_group",children:t.map((function(e){return Object(i.jsxs)("div",{className:"radio_item",children:[Object(i.jsx)("input",{id:"engine_"+e.id,type:"radio",name:"engine",value:e.id,defaultChecked:n.id===e.id}),Object(i.jsx)("label",{htmlFor:"engine_"+e.id,children:e.name})]},e.id)}))})}),f=function(e){var t=e.size,n=void 0===t?"24":t,c=e.color,r=void 0===c?"#fff":c;return Object(i.jsx)("div",{className:"loader",children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:Object(i.jsx)("circle",{cx:"50",cy:"50",fill:"none",stroke:r,strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",transform:"rotate(359.289 50.0009 50.0009)",children:Object(i.jsx)("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1.2s",begin:"0s",repeatCount:"indefinite"})})})})},m=(n(28),function(){document.title="Image Search";var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),o=Object(d.a)(a,2),s=o[0],l=o[1],m=Object(c.useState)(""),O=Object(d.a)(m,2),p=O[0],x=O[1],g=Object(c.useState)(""),v=Object(d.a)(g,2),w=v[0],k=v[1],C=[{id:1,name:"Google",url:"https://www.google.com/searchbyimage?image_url="},{id:2,name:"Yandex",url:"https://yandex.com/images/search?rpt=imageview&url="}],y=Object(c.useState)(C[0]),S=Object(d.a)(y,2),N=S[0],F=S[1],_=["video/mp4","video/webm"],I=function(e){var t=new Headers;t.append("Authorization","Client-ID f1f9224726db6dd");var n=new FormData;if(_.find((function(t){return t===e.type})))return k("Error. Allowed only images"),l(!1),x(""),void r(null);n.append("image",e),fetch("https://api.imgur.com/3/image",{method:"POST",headers:t,body:n}).then((function(e){return e.json()})).then((function(e){var t=e.data;if(!e.success&&!t.link)throw Error;l(!1),x(t.link),M(t.link)})).catch((function(e){k("Error. File not uploaded"),l(!1),x(""),r(null)}))},M=function(e){window.open(N.url+e,"_blank").focus()};return Object(i.jsxs)(u,{children:[Object(i.jsx)(h,{onChange:function(e){var t;w&&k(""),x(""),r(null===(t=e.target.files)||void 0===t?void 0:t.item(0))},children:w||(n?n.name:"Select an image")}),Object(i.jsx)(b,{data:C,state:N,onChange:function(e){var t=e.target;F(C.filter((function(e){return e.id===1*t.value}))[0])}}),p?Object(i.jsx)(j,{onClick:function(){M(p)},children:"Find"}):Object(i.jsx)(j,{onClick:function(){n?(l(!0),I(n)):(l(!1),k("Select a file!"))},children:s?Object(i.jsx)(f,{}):"Upload and find"})]})}),O=function(){return document.title="404 Not Found",Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"404 Not Found"}),Object(i.jsx)("div",{children:Object(i.jsx)(s.b,{to:"/",children:"Go home"})})]})},p=function(){return Object(i.jsx)(s.a,{children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/Image-Search",exact:!0,component:m}),Object(i.jsx)(l.a,{component:O,status:404})]})})};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1ad2c78c.chunk.js.map