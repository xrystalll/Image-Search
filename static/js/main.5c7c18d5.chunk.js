(this["webpackJsonpimage-search"]=this["webpackJsonpimage-search"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),a=n.n(i),r=n(16),o=n.n(r),s=(n(23),n(10)),l=n(2),d=n(8),j=(n(24),function(e){var t=e.children;return Object(c.jsx)("div",{children:t})}),u=(n(25),function(e){var t=e.className,n=e.onClick,i=e.children,a=t?" ".concat(t):" main";return Object(c.jsx)("div",{onClick:function(){n&&n()},className:"btn"+a,role:"button",children:i||"Click"})}),h=(n(26),function(e){var t=e.onChange,n=e.children;return Object(c.jsxs)(i.Fragment,{children:[Object(c.jsx)("input",{type:"file",onChange:t,id:"fileInput",className:"none"}),Object(c.jsxs)("label",{htmlFor:"fileInput",className:"file_input",title:"Upload file",children:[Object(c.jsx)(u,{children:"Choose"}),n||"File not selected"]})]})}),b=(n(27),function(e){var t=e.data,n=e.state,i=e.onChange;return Object(c.jsxs)("form",{onChange:i,className:"radio_group",children:[Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"radio",name:"engine",value:t[0],defaultChecked:n===t[0]}),t[0]]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"radio",name:"engine",value:t[1],defaultChecked:n===t[1]}),t[1]]})]})}),f=function(e){var t=e.size,n=void 0===t?"24":t,i=e.color,a=void 0===i?"#fff":i;return Object(c.jsx)("div",{className:"loader",children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:Object(c.jsx)("circle",{cx:"50",cy:"50",fill:"none",stroke:a,strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",transform:"rotate(359.289 50.0009 50.0009)",children:Object(c.jsx)("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1.2s",begin:"0s",repeatCount:"indefinite"})})})})},O=(n(28),function(){var e=Object(i.useState)(null),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),o=Object(d.a)(r,2),s=o[0],l=o[1],O=Object(i.useState)(""),m=Object(d.a)(O,2),x=m[0],p=m[1],g=Object(i.useState)(""),v=Object(d.a)(g,2),w=v[0],k=v[1],C=["Google","Yandex"],y=Object(i.useState)(C[0]),S=Object(d.a)(y,2),N=S[0],F=S[1],M=function(e){var t=new Headers;t.append("Authorization","Client-ID f1f9224726db6dd");var n=new FormData;n.append("image",e),fetch("https://api.imgur.com/3/image",{method:"POST",headers:t,body:n}).then((function(e){return e.json()})).then((function(e){var t=e.data;if(!e.success)throw Error;l(!1),p(t.link),_(t.link)})).catch((function(e){k("Error. File not uploaded"),l(!1),p(""),a(null)}))},_=function(e){var t=N===C[0]?"https://www.google.com/searchbyimage?image_url="+e:"https://yandex.com/images/search?rpt=imageview&url="+e;window.open(t,"_blank").focus()};return Object(c.jsxs)(j,{children:[Object(c.jsx)(h,{onChange:function(e){w&&k(""),p(""),a(e.target.files[0])},children:Object(c.jsx)("span",{children:w||(n?n.name:"Select image or video")})}),Object(c.jsx)(b,{data:C,state:N,onChange:function(e){F(e.target.value)}}),x?Object(c.jsx)(u,{onClick:function(){_(x)},children:"Find"}):Object(c.jsx)(u,{onClick:function(){n?(l(!0),M(n)):k("Select a file!")},children:s?Object(c.jsx)(f,{}):"Upload and find"})]})}),m=function(){return document.title="404 Not Found",Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"404 Not Found"}),Object(c.jsx)("div",{children:Object(c.jsx)(s.b,{to:"/",children:"Go home"})})]})},x=function(){return Object(c.jsx)(s.a,{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/",exact:!0,component:O}),Object(c.jsx)(l.a,{component:m,status:404})]})})};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.5c7c18d5.chunk.js.map