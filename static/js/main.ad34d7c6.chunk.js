(this["webpackJsonpimage-search"]=this["webpackJsonpimage-search"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(0),c=n.n(a),r=n(17),o=n.n(r),s=(n(25),n(11)),l=n(2),d=n(10),u=(n(26),function(e){var t=e.title,n=e.children;return Object(i.jsxs)("div",{className:"layout",children:[t&&Object(i.jsx)("h2",{className:"layout_title",children:t}),Object(i.jsx)("div",{children:n})]})}),j=(n(27),function(e){var t=e.onChange,n=e.hint;return Object(i.jsx)("input",{type:"text",onChange:t,className:"text_input",placeholder:n||"Type something..."})}),h=(n(28),function(e){var t=e.className,n=e.onClick,a=e.children,c=t?" ".concat(t):" main";return Object(i.jsx)("div",{onClick:function(){n&&n()},className:"btn"+c,role:"button",children:a||"Click"})}),b=(n(29),function(e){var t=e.onChange,n=e.children;return Object(i.jsxs)("div",{className:"file_area",children:[Object(i.jsx)("input",{id:"fileInput",type:"file",onChange:t,className:"none"}),Object(i.jsxs)("label",{htmlFor:"fileInput",className:"file_input",title:"Choose file",children:[Object(i.jsx)(h,{children:"Choose"}),Object(i.jsx)("span",{children:n||"File not selected"})]})]})}),m=(n(30),function(e){var t=e.name,n=e.data,a=e.state;return Object(i.jsxs)("div",{className:"radio_item",children:[Object(i.jsx)("input",{id:t+"_"+n.id,type:"radio",name:t,value:n.id,defaultChecked:a.id===n.id}),Object(i.jsx)("label",{htmlFor:t+"_"+n.id,children:n.name})]})}),f=(n(31),function(e){var t=e.name,n=e.data,a=e.state,c=e.onChange;return Object(i.jsx)("form",{onChange:c,className:"radio_group",children:n.map((function(e){return Object(i.jsx)(m,{name:t,data:e,state:a},e.id)}))})}),O=function(e){var t=e.size,n=void 0===t?"24":t,a=e.color,c=void 0===a?"#fff":a;return Object(i.jsx)("div",{className:"loader",children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:Object(i.jsx)("circle",{cx:"50",cy:"50",fill:"none",stroke:c,strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",transform:"rotate(359.289 50.0009 50.0009)",children:Object(i.jsx)("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1.2s",begin:"0s",repeatCount:"indefinite"})})})})},x=n(9),p=n(18),v=n.n(p),g=function(){document.title="Image search";var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),o=Object(d.a)(r,2),s=o[0],l=o[1],m=Object(a.useState)(""),p=Object(d.a)(m,2),g=p[0],w=p[1],C=Object(a.useState)(!1),y=Object(d.a)(C,2),k=y[0],N=y[1],S=Object(a.useState)(""),_=Object(d.a)(S,2),F=_[0],T=_[1],U=[{id:1,name:"Google",url:"https://www.google.com/searchbyimage?image_url="},{id:2,name:"Yandex",url:"https://yandex.com/images/search?rpt=imageview&url="}],A=Object(a.useState)(U[0]),I=Object(d.a)(A,2),M=I[0],D=I[1],P=["video/mp4","video/webm"],R=function(e){var t=new Headers;t.append("Authorization","Client-ID f1f9224726db6dd");var n=new FormData;n.append("image",e),fetch("https://api.imgur.com/3/image",{method:"POST",headers:t,body:n}).then((function(e){return e.json()})).then((function(e){var t=e.data;if(!e.success)throw Error;l(!1),w(t.link),z(t.link)})).catch((function(e){T("Error. File not uploaded"),l(!1),w(""),c(null)}))},z=function(e){window.open(M.url+e,"_blank").focus()},E=function(e){for(var t=e.split(","),n=t[0].match(/:(.*?);/)[1],i=atob(t[1]),a=i.length,c=new Uint8Array(a);a--;)c[a]=i.charCodeAt(a);return new File([c],"image."+n.split("/")[1],{type:n})};return Object(i.jsxs)(u,{title:"Search by image or video",children:[Object(i.jsxs)(x.d,{children:[Object(i.jsxs)(x.b,{children:[Object(i.jsx)(x.a,{children:"Upload file"}),Object(i.jsx)(x.a,{children:"Paste link"})]}),Object(i.jsx)(x.c,{children:Object(i.jsx)(b,{onChange:function(e){var t,n=e.target;F&&T(""),g&&w("");var i=null===(t=n.files)||void 0===t?void 0:t.item(0);P.find((function(e){return e===i.type}))?k&&N(!1):N(!0),c(i)},children:F||(n?n.name:"Select image or video")})}),Object(i.jsx)(x.c,{children:Object(i.jsx)(j,{onChange:function(e){var t=e.target;F&&T(""),g&&w(""),t.value.length>0?N(!0):N(!1),w(t.value)},hint:"Paste link to image"})})]}),Object(i.jsx)(f,{name:"engine",data:U,state:M,onChange:function(e){var t=e.target;D(U.filter((function(e){return e.id===1*t.value}))[0])}}),g?Object(i.jsx)(h,{className:!k&&"main disable",onClick:function(){z(g)},children:"Find"}):Object(i.jsx)(h,{className:!k&&"main disable",onClick:function(){n?(l(!0),R(n)):(l(!1),T("Select a file!"))},children:s?Object(i.jsx)(O,{}):"Upload and find"}),n&&P.find((function(e){return e===n.type}))&&Object(i.jsx)(v.a,{videoUrl:URL.createObjectURL(n),thumbnailHandler:function(e){N(!0),c(E(e))},snapshotAtTime:2,renderThumbnail:!1})]})},w=function(){return document.title="404 Not Found",Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"404 Not Found"}),Object(i.jsx)("div",{children:Object(i.jsx)(s.b,{to:"/",children:"Go home"})})]})},C=function(){return Object(i.jsx)(s.a,{children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/Image-Search",exact:!0,component:g}),Object(i.jsx)(l.a,{component:w,status:404})]})})};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.querySelector("#root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ad34d7c6.chunk.js.map