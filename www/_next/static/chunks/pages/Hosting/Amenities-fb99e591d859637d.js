(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4472],{874:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Hosting/Amenities",function(){return r(5142)}])},7091:function(e,t,r){"use strict";var n=r(5893);r(7294);var i=r(9960),a=r(8142),l=r(5906),o=r(6735),c=[{id:"info",title:"Informazioni",opened:!0,links:[{selected:!1,label:"Dettagli",url:"/hosting/details",icon:"text_quote"},{selected:!1,label:"Posizione",url:"/hosting/location",icon:"map_pin_ellipse"},{selected:!1,label:"Prezzo",url:"/hosting/pricing",icon:"money_euro_circle"}]},{id:"structure",title:"Struttura",links:[{selected:!1,label:"Camere",url:"/hosting/floor-plan",icon:"square_grid_2x2"}]},{id:"photos",title:"Media",links:[{label:"Fotografie",url:"/hosting/photos",icon:"photo_on_rectangle"},{label:"Pianimetria",url:"/hosting/planimetry",icon:"hammer"},{label:"Video",url:"/hosting/video",icon:"play_rectangle"},{label:"Virtual tour",url:"/hosting/virtual-tour",icon:"videocam"}]},{id:"other",title:"Altro",links:[{label:"Servizi",url:"/hosting/amenities",icon:"list_bullet"},{label:"Dettagli finanziari",url:"/hosting/financial",icon:"tag"},{label:"Pubblica annuncio",url:"/hosting/publish",icon:"tag"}]}],s=function(){return(0,n.jsx)("aside",{className:"hosting-panel",children:c.map(function(e,t){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{children:e.title},t),(0,n.jsx)(a.Z,{menuList:!0,id:e.id,noHairlines:!0,children:e.links.map(function(e,t){return!0===e.external?(0,n.jsx)(l.Z,{title:e.label,href:"#",onClick:e.onClick,children:(0,n.jsx)(o.Z,{slot:"media",f7:e.icon})},t):(e.action,(0,n.jsx)(l.Z,{title:e.label,href:e.url,children:(0,n.jsx)(o.Z,{slot:"media",f7:e.icon})},t))})},t)]})})})};t.Z=s},5142:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(7294),a=r(1418),l=r(9960),o=r(8502),c=r(8206),s=r(7447),d=r(5914),u=r(1444),f=r(1273),p=r(7091);r(1767);var h=function(){var e=(0,i.useState)(!1);e[0],e[1];var t=(0,i.useState)(0),r=t[0];return t[1],console.log("amenities",r),(0,n.jsx)(a.Z,{children:(0,n.jsx)("div",{className:"container pt-4",children:(0,n.jsxs)("div",{className:"grid",children:[(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsx)(p.Z,{})}),(0,n.jsxs)("div",{className:"col-md-8",children:[(0,n.jsx)(l.Z,{children:"Servizi"}),(0,n.jsx)(o.Z,{children:"Seleziona i servizi inclusi"}),(0,n.jsx)(c.Z,{children:(0,n.jsxs)(s.Z,{className:"bordered",children:[(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(l.Z,{children:"Titolo e descizione"}),(0,n.jsx)(o.Z,{children:"Descrivi la tua propriet\xe0"}),"ciao"]}),(0,n.jsxs)(u.Z,{className:"align-content-space-between",children:[(0,n.jsx)(f.Z,{outline:!0,children:"Indietro"}),(0,n.jsx)(f.Z,{fill:!0,children:"Continua"})]})]})})]})]})})})};t.default=h},8502:function(e,t,r){"use strict";var n=r(7294),i=r(9874),a=r(6679);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:s}=e,d=(0,i.N2)(e),u=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:u.current}));let f=(0,i.AK)(r,"block-header",(0,a.bG)(e));return n.createElement("div",l({id:o,style:c,className:f,ref:u},d),s)});o.displayName="f7-block-header",t.Z=o},9960:function(e,t,r){"use strict";var n=r(7294),i=r(9874),a=r(6679);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:s,large:d,medium:u}=e,f=(0,i.N2)(e),p=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:p.current}));let h=(0,i.AK)(r,"block-title",{"block-title-large":d,"block-title-medium":u},(0,a.bG)(e));return n.createElement("div",l({id:o,style:c,className:h,ref:p},f),s)});o.displayName="f7-block-title",t.Z=o},8206:function(e,t,r){"use strict";var n=r(7294),i=r(9874),a=r(6679),l=r(1127);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let c=(0,n.forwardRef)((e,t)=>{let{className:r,inset:c,xsmallInset:s,smallInset:d,mediumInset:u,largeInset:f,xlargeInset:p,strong:h,accordionList:m,accordionOpposite:v,tabs:b,tab:g,tabActive:j,noHairlines:x,noHairlinesIos:y,noHairlinesMd:N,noHairlinesAurora:O,id:Z,style:k,children:w}=e,_=(0,i.N2)(e),D=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:D.current})),(0,l.x)(D,e);let E=(0,i.AK)(r,"block",{inset:c,"xsmall-inset":s,"small-inset":d,"medium-inset":u,"large-inset":f,"xlarge-inset":p,"block-strong":h,"accordion-list":m,"accordion-opposite":v,tabs:b,tab:g,"tab-active":j,"no-hairlines":x,"no-hairlines-md":N,"no-hairlines-ios":y,"no-hairlines-aurora":O},(0,a.bG)(e));return n.createElement("div",o({id:Z,style:k,className:E,ref:D},_),w)});c.displayName="f7-block",t.Z=c},5914:function(e,t,r){"use strict";var n=r(7294),i=r(9874),a=r(6679);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:s,padding:d=!0}=e,u=(0,i.N2)(e),f=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:f.current}));let p=(0,i.AK)(r,"card-content",{"card-content-padding":d},(0,a.bG)(e));return n.createElement("div",l({id:o,style:c,className:p,ref:f},u),s)});o.displayName="f7-card-content",t.Z=o},1444:function(e,t,r){"use strict";var n=r(7294),i=r(9874),a=r(6679);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:s}=e,d=(0,i.N2)(e),u=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:u.current}));let f=(0,i.AK)(r,"card-footer",(0,a.bG)(e));return n.createElement("div",l({id:o,style:c,className:f,ref:u},d),s)});o.displayName="f7-card-footer",t.Z=o},1216:function(e,t,r){"use strict";var n=r(7294),i=r(9874),a=r(6679);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:s}=e,d=(0,i.N2)(e),u=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:u.current}));let f=(0,i.AK)(r,"card-header",(0,a.bG)(e));return n.createElement("div",l({id:o,style:c,className:f,ref:u},d),s)});o.displayName="f7-card-header",t.Z=o},7447:function(e,t,r){"use strict";var n=r(7294),i=r(5510),a=r(1216),l=r(5914),o=r(1444),c=r(9874),s=r(6679),d=r(9753),u=r(1593);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let p=(0,n.forwardRef)((e,t)=>{let{className:r,id:p,style:h,title:m,content:v,footer:b,padding:g,outline:j,expandable:x,expandableAnimateWidth:y,expandableOpened:N,animate:O,hideNavbarOnOpen:Z,hideToolbarOnOpen:k,hideStatusbarOnOpen:w,scrollableEl:_,swipeToClose:D,closeByBackdropClick:E,backdrop:R,backdropEl:S,noShadow:P,noBorder:C}=e,z=(0,c.N2)(e),A=(0,n.useRef)(null),H=()=>{A.current&&d.f7.card.open(A.current)},I=()=>{A.current&&d.f7.card.close(A.current)},G=(t,r)=>{A.current===t&&(0,c.j8)(e,"cardBeforeOpen",t,r)},K=t=>{A.current===t&&(0,c.j8)(e,"cardOpen",t)},B=(t,r)=>{A.current===t&&(0,c.j8)(e,"cardOpened",t,r)},F=t=>{A.current===t&&(0,c.j8)(e,"cardClose",t)},L=(t,r)=>{A.current===t&&(0,c.j8)(e,"cardClosed",t,r)},T=()=>{x&&A.current&&(0,d.Ep)(()=>{d.f7.on("cardBeforeOpen",G),d.f7.on("cardOpen",K),d.f7.on("cardOpened",B),d.f7.on("cardClose",F),d.f7.on("cardClosed",L)})},q=()=>{d.f7.off("cardBeforeOpen",G),d.f7.off("cardOpen",K),d.f7.off("cardOpened",B),d.f7.off("cardClose",F),d.f7.off("cardClosed",L)},J=()=>{x&&A.current&&(0,d.Ep)(()=>{x&&N&&d.f7.card.open(A.current,!1)})};(0,i.L)(()=>{J()},[]),(0,i.L)(()=>(T(),q)),(0,u.G)(N,e=>{e?H():I()}),(0,n.useImperativeHandle)(t,()=>({el:A.current,open:H,close:I}));let V,X,M,Q=(0,c.AK)(r,"card",{"card-outline":j,"card-expandable":x,"card-expandable-animate-width":y,"no-shadow":P,"no-border":C},(0,s.bG)(e)),U=(0,c.FJ)(e);return(m||U.header)&&(V=n.createElement(a.Z,null,m,U.header)),(v||U.content)&&(X=n.createElement(l.Z,{padding:g},v,U.content)),(b||U.footer)&&(M=n.createElement(o.Z,null,b,U.footer)),n.createElement("div",f({id:p,style:h,className:Q,"data-animate":void 0===O?O:O.toString(),"data-hide-navbar-on-open":void 0===Z?Z:Z.toString(),"data-hide-toolbar-on-open":void 0===k?k:k.toString(),"data-hide-statusbar-on-open":void 0===w?w:w.toString(),"data-scrollable-el":_,"data-swipe-to-close":void 0===D?D:D.toString(),"data-close-by-backdrop-click":void 0===E?E:E.toString(),"data-backdrop":void 0===R?R:R.toString(),"data-backdrop-el":S,ref:A},z),V,X,M,U.default)});p.displayName="f7-card",t.Z=p},1767:function(e){"use strict";e.exports=JSON.parse('{"a":[{"id":"17","title":"Doccia","slug":"Demo text here"},{"id":"24","title":"Demo","slug":"Demo text here"},{"id":"25","title":"Demo 3","slug":"Demo text here"},{"id":"26","title":"Demo 4","slug":"Demo text here"},{"id":"27","title":"Doccia","slug":"Demo text here"},{"id":"28","title":"Doccia","slug":"Demo text here"},{"id":"29","title":"Doccia","slug":"Demo text here"},{"id":"30","title":"Doccia","slug":"Demo text here"}]}')}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=874)}),_N_E=e.O()}]);