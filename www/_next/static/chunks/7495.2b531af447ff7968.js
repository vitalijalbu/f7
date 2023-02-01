"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7495,2588],{4868:function(e,t,r){var n=r(5893);r(7294);var a=r(8206),l=r(9960),i=r(8142),o=r(5906),c=[{id:"account",title:"Account",links:[{exact:!0,label:"Il mio account",url:"/settings/account"},{exact:!0,label:"Fatturazione",url:"/settings/billing"},{exact:!0,label:"Notifiche",url:"/settings/notifications"},{exact:!0,label:"Password",url:"/settings/security"}]},{id:"other",title:"Altro",links:[{label:"Assistenza",url:"/settings/support"},{label:"Feedback",url:"mailto:info@resthotels.it?subject=Feedback Resthotels",external:!0}]}],u=function(){return(0,n.jsx)(a.Z,{children:c.map(function(e,t){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{children:e.title},t),(0,n.jsx)(i.Z,{menuList:!0,id:e.id,noHairlines:!0,noHairlinesBetween:!0,noChevron:!0,children:e.links.map(function(e,t){return!0===e.external?(0,n.jsx)(o.Z,{title:e.label,href:e.url,onClick:e.onClick},t):(e.action,(0,n.jsx)(o.Z,{title:e.label,href:e.url},t))})},t)]})})})};t.Z=u},7495:function(e,t,r){r.r(t);var n=r(5893);r(7294);var a=r(1418),l=r(9960),i=r(7447),o=r(5914),c=r(8142),u=r(2846),s=r(7039),d=r(3702),f=r(5906),p=r(231),m=r(1444),v=r(1273),h=r(4868),g=function(){return(0,n.jsx)(a.Z,{children:(0,n.jsx)("div",{className:"container pt-4",children:(0,n.jsxs)("div",{className:"grid",children:[(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsx)(h.Z,{})}),(0,n.jsxs)("div",{className:"col-md-8",children:[(0,n.jsx)(l.Z,{children:"Password & Sicurezza"}),(0,n.jsxs)(i.Z,{className:"bordered",children:[(0,n.jsx)(o.Z,{children:(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(s.Z,{children:(0,n.jsx)(d.Z,{label:"Nome",type:"text",placeholder:"Your name",clearButton:!0})}),(0,n.jsx)(s.Z,{children:(0,n.jsx)(d.Z,{label:"Cognome",type:"text",placeholder:"Cognome",clearButton:!0})})]}),(0,n.jsx)(d.Z,{label:"E-mail",type:"email",placeholder:"Indirizzo e-mail",clearButton:!0}),(0,n.jsx)(d.Z,{label:"Telefono",type:"number",placeholder:"Telefono",clearButton:!0}),(0,n.jsxs)(f.Z,{children:[(0,n.jsxs)("span",{children:["Tipologia account",(0,n.jsx)("span",{className:"item-text",children:"Ricevi aggiornamenti e promozioni"})]}),(0,n.jsx)(p.Z,{})]})]})}),(0,n.jsx)(m.Z,{children:(0,n.jsx)(v.Z,{fill:!0,children:"Salva"})})]})]})]})})})};t.default=g},9960:function(e,t,r){var n=r(7294),a=r(9874),l=r(6679);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:u,large:s,medium:d}=e,f=(0,a.N2)(e),p=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:p.current}));let m=(0,a.AK)(r,"block-title",{"block-title-large":s,"block-title-medium":d},(0,l.bG)(e));return n.createElement("div",i({id:o,style:c,className:m,ref:p},f),u)});o.displayName="f7-block-title",t.Z=o},8206:function(e,t,r){var n=r(7294),a=r(9874),l=r(6679),i=r(1127);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let c=(0,n.forwardRef)((e,t)=>{let{className:r,inset:c,xsmallInset:u,smallInset:s,mediumInset:d,largeInset:f,xlargeInset:p,strong:m,accordionList:v,accordionOpposite:h,tabs:g,tab:b,tabActive:y,noHairlines:x,noHairlinesIos:j,noHairlinesMd:E,noHairlinesAurora:N,id:O,style:k,children:w}=e,Z=(0,a.N2)(e),C=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:C.current})),(0,i.x)(C,e);let R=(0,a.AK)(r,"block",{inset:c,"xsmall-inset":u,"small-inset":s,"medium-inset":d,"large-inset":f,"xlarge-inset":p,"block-strong":m,"accordion-list":v,"accordion-opposite":h,tabs:g,tab:b,"tab-active":y,"no-hairlines":x,"no-hairlines-md":E,"no-hairlines-ios":j,"no-hairlines-aurora":N},(0,l.bG)(e));return n.createElement("div",o({id:O,style:k,className:R,ref:C},Z),w)});c.displayName="f7-block",t.Z=c},5914:function(e,t,r){var n=r(7294),a=r(9874),l=r(6679);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:u,padding:s=!0}=e,d=(0,a.N2)(e),f=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:f.current}));let p=(0,a.AK)(r,"card-content",{"card-content-padding":s},(0,l.bG)(e));return n.createElement("div",i({id:o,style:c,className:p,ref:f},d),u)});o.displayName="f7-card-content",t.Z=o},1444:function(e,t,r){var n=r(7294),a=r(9874),l=r(6679);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:u}=e,s=(0,a.N2)(e),d=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:d.current}));let f=(0,a.AK)(r,"card-footer",(0,l.bG)(e));return n.createElement("div",i({id:o,style:c,className:f,ref:d},s),u)});o.displayName="f7-card-footer",t.Z=o},1216:function(e,t,r){var n=r(7294),a=r(9874),l=r(6679);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:u}=e,s=(0,a.N2)(e),d=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:d.current}));let f=(0,a.AK)(r,"card-header",(0,l.bG)(e));return n.createElement("div",i({id:o,style:c,className:f,ref:d},s),u)});o.displayName="f7-card-header",t.Z=o},7447:function(e,t,r){var n=r(7294),a=r(5510),l=r(1216),i=r(5914),o=r(1444),c=r(9874),u=r(6679),s=r(9753),d=r(1593);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let p=(0,n.forwardRef)((e,t)=>{let{className:r,id:p,style:m,title:v,content:h,footer:g,padding:b,outline:y,expandable:x,expandableAnimateWidth:j,expandableOpened:E,animate:N,hideNavbarOnOpen:O,hideToolbarOnOpen:k,hideStatusbarOnOpen:w,scrollableEl:Z,swipeToClose:C,closeByBackdropClick:R,backdrop:A,backdropEl:L,noShadow:I,noBorder:G}=e,z=(0,c.N2)(e),K=(0,n.useRef)(null),P=()=>{K.current&&s.f7.card.open(K.current)},H=()=>{K.current&&s.f7.card.close(K.current)},B=(t,r)=>{K.current===t&&(0,c.j8)(e,"cardBeforeOpen",t,r)},S=t=>{K.current===t&&(0,c.j8)(e,"cardOpen",t)},T=(t,r)=>{K.current===t&&(0,c.j8)(e,"cardOpened",t,r)},F=t=>{K.current===t&&(0,c.j8)(e,"cardClose",t)},V=(t,r)=>{K.current===t&&(0,c.j8)(e,"cardClosed",t,r)},_=()=>{x&&K.current&&(0,s.Ep)(()=>{s.f7.on("cardBeforeOpen",B),s.f7.on("cardOpen",S),s.f7.on("cardOpened",T),s.f7.on("cardClose",F),s.f7.on("cardClosed",V)})},J=()=>{s.f7.off("cardBeforeOpen",B),s.f7.off("cardOpen",S),s.f7.off("cardOpened",T),s.f7.off("cardClose",F),s.f7.off("cardClosed",V)},q=()=>{x&&K.current&&(0,s.Ep)(()=>{x&&E&&s.f7.card.open(K.current,!1)})};(0,a.L)(()=>{q()},[]),(0,a.L)(()=>(_(),J)),(0,d.G)(E,e=>{e?P():H()}),(0,n.useImperativeHandle)(t,()=>({el:K.current,open:P,close:H}));let M,Y,$,D=(0,c.AK)(r,"card",{"card-outline":y,"card-expandable":x,"card-expandable-animate-width":j,"no-shadow":I,"no-border":G},(0,u.bG)(e)),Q=(0,c.FJ)(e);return(v||Q.header)&&(M=n.createElement(l.Z,null,v,Q.header)),(h||Q.content)&&(Y=n.createElement(i.Z,{padding:b},h,Q.content)),(g||Q.footer)&&($=n.createElement(o.Z,null,g,Q.footer)),n.createElement("div",f({id:p,style:m,className:D,"data-animate":void 0===N?N:N.toString(),"data-hide-navbar-on-open":void 0===O?O:O.toString(),"data-hide-toolbar-on-open":void 0===k?k:k.toString(),"data-hide-statusbar-on-open":void 0===w?w:w.toString(),"data-scrollable-el":Z,"data-swipe-to-close":void 0===C?C:C.toString(),"data-close-by-backdrop-click":void 0===R?R:R.toString(),"data-backdrop":void 0===A?A:A.toString(),"data-backdrop-el":L,ref:K},z),M,Y,$,Q.default)});p.displayName="f7-card",t.Z=p},3702:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7294),a=r(5510),l=r(9874),i=r(6679),o=r(9753),c=r(1593);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let s=(0,n.forwardRef)((e,t)=>{let r=(0,n.useRef)(null),{className:s,id:d,style:f,mode:p,value:m,buttons:v,customButtons:h,dividers:g,imageUrlText:b,linkUrlText:y,placeholder:x,clearFormattingOnPaste:j,resizable:E=!1}=e,N=(0,l.N2)(e),O=(0,n.useRef)(null),k=(t,r)=>{(0,l.j8)(e,"textEditorChange",r)},w=(t,r)=>{(0,l.j8)(e,"textEditorInput",r)},Z=()=>{(0,l.j8)(e,"textEditorFocus")},C=()=>{(0,l.j8)(e,"textEditorBlur")},R=(t,r)=>{(0,l.j8)(e,"textEditorButtonClick",r)},A=()=>{(0,l.j8)(e,"textEditorKeyboardOpen")},L=()=>{(0,l.j8)(e,"textEditorKeyboardClose")},I=()=>{(0,l.j8)(e,"textEditorPopoverOpen")},G=()=>{(0,l.j8)(e,"textEditorPopoverClose")},z=(t,r)=>{(0,l.j8)(e,"textEditorInsertLink",r)},K=(t,r)=>{(0,l.j8)(e,"textEditorInsertImage",r)};(0,n.useImperativeHandle)(t,()=>({el:O.current,f7TextEditor:()=>r.current})),(0,c.G)(m,e=>{r.current&&r.current.setValue(e)});let P=()=>{let e=(0,l.uq)({el:O.current,mode:p,value:m,buttons:v,customButtons:h,dividers:g,imageUrlText:b,linkUrlText:y,placeholder:x,clearFormattingOnPaste:j,on:{change:k,input:w,focus:Z,blur:C,buttonClick:R,keyboardOpen:A,keyboardClose:L,popoverOpen:I,popoverClose:G,insertLink:z,insertImage:K}});(0,o.Ep)(()=>{r.current=o.f7.textEditor.create(e)})},H=()=>{r.current&&r.current.destroy&&r.current.destroy(),r.current=null};(0,a.L)(()=>(P(),H),[]);let B=(0,l.FJ)(e),S=(0,l.AK)(s,"text-editor",E&&"text-editor-resizable",(0,i.bG)(e));return n.createElement("div",u({ref:O,id:d,style:f,className:S},N),B["root-start"],n.createElement("div",{className:"text-editor-content",contentEditable:!0},B.default),B["root-end"],B.root)});s.displayName="f7-text-editor";var d=r(24);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let p=(0,n.forwardRef)((e,t)=>{let{className:r,id:u,style:p,sortable:m,media:v,dropdown:h="auto",wrap:g=!0,input:b=!0,type:y="text",name:x,value:j,defaultValue:E,inputmode:N,readonly:O,required:k,disabled:w,placeholder:Z,inputId:C,size:R,accept:A,autocomplete:L,autocorrect:I,autocapitalize:G,spellcheck:z,autofocus:K,autosave:P,max:H,min:B,step:S,maxlength:T,minlength:F,multiple:V,inputStyle:_,pattern:J,validate:q,validateOnBlur:M,onValidate:Y,tabindex:$,resizable:D,clearButton:Q,noFormStoreData:U,noStoreData:W,ignoreStoreData:X,errorMessage:ee,errorMessageForce:et,info:er,outline:en,label:ea,inlineLabel:el,floatingLabel:ei,calendarParams:eo,colorPickerParams:ec,textEditorParams:eu}=e,[es,ed]=(0,n.useState)(!1),[ef,ep]=(0,n.useState)(!1),em=(0,n.useContext)(d.Z),{listIsSortable:ev=!1}=em||{},eh=(0,l.N2)(e),eg=(0,n.useRef)(null),eb=(0,n.useRef)(null),ey=(0,n.useRef)(null),ex=(0,n.useRef)(null),ej=(0,n.useRef)(null),eE=(0,n.useRef)(!1),eN=()=>{if(ex.current)return ex.current.value},eO=()=>{if(!o.f7||!ex.current)return;let e=ex.current.validity;e&&(e.valid?(Y&&Y(!0),!1!==es&&ed(!1)):(Y&&Y(!1),!0!==es&&ed(!0)))},ek=t=>{(0,l.j8)(e,"textareaResize",t)},ew=t=>{(0,l.j8)(e,"inputNotEmpty",t)},eZ=t=>{(0,l.j8)(e,"inputEmpty",t)},eC=t=>{(0,l.j8)(e,"inputClear",t)},eR=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];(0,l.j8)(e,"input",...r),!(M||""===M)&&(q||""===q)&&ex.current&&eO(ex.current)},eA=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];(0,l.j8)(e,"focus",...r),ep(!0)},eL=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];(0,l.j8)(e,"blur",...r),(q||""===q||M||""===M)&&ex.current&&eO(ex.current),ep(!1)},eI=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];(0,l.j8)(e,"change",...r),"texteditor"===y&&(0,l.j8)(e,"textEditorChange",r[0])};(0,n.useImperativeHandle)(t,()=>({el:ey.current}));let eG=()=>{(ey.current||ej.current)&&(0,o.Ep)(()=>{ex.current&&(ex.current.addEventListener("input:notempty",ew,!1),ex.current.addEventListener("textarea:resize",ek,!1),ex.current.addEventListener("input:empty",eZ,!1),ex.current.addEventListener("input:clear",eC,!1),"datepicker"===y&&(eg.current=o.f7.calendar.create({inputEl:ex.current,value:j,on:{change(t,r){(0,l.j8)(e,"calendarChange",r)}},...eo||{}})),"colorpicker"===y&&(eb.current=o.f7.colorPicker.create({inputEl:ex.current,value:j,on:{change(t,r){(0,l.j8)(e,"colorpicker:change colorPickerChange",r)}},...ec||{}})),!(M||""===M)&&(q||""===q)&&(null!=j&&""!==j||null!=E&&""!==E)&&setTimeout(()=>{eO()},0),"textarea"===y&&D&&o.f7.input.resizeTextarea(ex.current))})},ez=()=>{ex.current&&(ex.current.removeEventListener("input:notempty",ew,!1),ex.current.removeEventListener("textarea:resize",ek,!1),ex.current.removeEventListener("input:empty",eZ,!1),ex.current.removeEventListener("input:clear",eC,!1)),eg.current&&eg.current.destroy&&(eg.current.destroy(),eg.current=null),eb.current&&eb.current.destroy&&(eb.current.destroy(),eb.current=null)};(0,a.L)(()=>(eG(),ez),[]),(0,a.L)(()=>{o.f7&&eE.current&&ex.current&&(eE.current=!1,q&&!M&&eO(),"textarea"===y&&D&&o.f7.input.resizeTextarea(ex.current))}),(0,c.G)(ec,e=>{o.f7&&eb.current&&(0,l.l7)(eb.current.params,e||{})}),(0,c.G)(eo,e=>{o.f7&&eg.current&&(0,l.l7)(eg.current.params,e||{})}),(0,c.G)(j,e=>{o.f7&&(eE.current=!0,eg.current&&eg.current.setValue(e),eb.current&&eb.current.setValue(e))});let eK=(0,l.FJ)(e),eP=eN(),eH=(()=>{if("datepicker"===y&&Array.isArray(j)&&0===j.length)return!1;let e=eN();return void 0===j?e||0===e:j||0===j})(),eB,eS=(t,r)=>{let a=y;("datepicker"===a||"colorpicker"===a)&&(a="text");let i=(0,l.AK)({resizable:"textarea"===a&&D,"no-store-data":U||W||X,"input-invalid":ee&&et||es,"input-with-value":eH,"input-focused":ef}),o;"file"!==y&&"datepicker"!==y&&"colorpicker"!==y&&(o=void 0!==j?j:eP);let c={};return"datepicker"!==y&&"colorpicker"!==y&&("value"in e&&(c.value=o),"defaultValue"in e&&(c.defaultValue=E)),n.createElement(t,f({ref:ex,style:_,name:x,type:"input"===t?a:void 0,placeholder:Z,inputMode:N,id:C,size:R,accept:A,autoComplete:L,autoCorrect:I,autoCapitalize:G,spellCheck:z,autoFocus:K,autoSave:P,disabled:w,max:H,maxLength:T,min:B,minLength:F,step:S,multiple:V,readOnly:O,required:k,pattern:J,validate:"string"==typeof q&&q.length?q:void 0,"data-validate":!0===q||""===q||!0===M||""===M||void 0,"data-validate-on-blur":!0===M||""===M||void 0,tabIndex:$,"data-error-message":et?void 0:ee,className:i,onFocus:eA,onBlur:eL,onInput:eR,onChange:eI},c),r)};b&&(eB="select"===y||"textarea"===y||"file"===y?"select"===y?eS("select",eK.default):eS("file"===y?"input":"textarea"):"texteditor"===y?n.createElement(s,f({value:j,resizable:D,placeholder:Z,onTextEditorFocus:eA,onTextEditorBlur:eL,onTextEditorInput:eR,onTextEditorChange:eI},eu||{})):eS("input"));let eT=!!ee||eK["error-message"]&&eK["error-message"].length,eF=n.createElement("div",{ref:ej,className:(0,l.AK)("item-content item-input",!g&&r,!g&&{disabled:w},!g&&(0,i.bG)(e),{"inline-label":el,"item-input-outline":en,"item-input-focused":ef,"item-input-with-info":!!er||eK.info&&eK.info.length,"item-input-with-value":eH,"item-input-with-error-message":eT&&et||es,"item-input-invalid":eT&&et||es})},eK["content-start"],(v||eK.media)&&n.createElement("div",{className:"item-media"},v&&n.createElement("img",{src:v}),eK.media),n.createElement("div",{className:"item-inner"},eK["inner-start"],(ea||eK.label)&&n.createElement("div",{className:(0,l.AK)("item-title item-label",{"item-floating-label":ei})},ea,eK.label),n.createElement("div",{className:(0,l.AK)("item-input-wrap",{"input-dropdown":"auto"===h?"select"===y:h})},eB,eK.input,eT&&et&&n.createElement("div",{className:"item-input-error-message"},ee,eK["error-message"]),Q&&n.createElement("span",{className:"input-clear-button"}),(er||eK.info)&&n.createElement("div",{className:"item-input-info"},er,eK.info)),eK.inner,eK["inner-end"]),eK.content,eK["content-end"]);return g?n.createElement("li",f({ref:ey,id:u,style:p,className:(0,l.AK)(r,{disabled:w},(0,i.bG)(e))},eh),eK["root-start"],eF,(!0===m||!1===m?m:ev)&&n.createElement("div",{className:"sortable-handler"}),eK.root,eK["root-end"]):eF});p.displayName="f7-list-input";var m=p},7039:function(e,t,r){var n=r(7294),a=r(9874),l=r(6679);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:u}=e,s=(0,a.N2)(e),d=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:d.current}));let f=(0,a.AK)(r,"item-cell",(0,l.bG)(e));return n.createElement("div",i({id:o,style:c,className:f,ref:d},s),u)});o.displayName="f7-list-item-cell",t.Z=o},2846:function(e,t,r){var n=r(7294),a=r(9874),l=r(6679);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:u}=e,s=(0,a.N2)(e),d=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:d.current}));let f=(0,a.AK)(r,"item-row",(0,l.bG)(e));return n.createElement("div",i({id:o,style:c,className:f,ref:d},s),u)});o.displayName="f7-list-item-row",t.Z=o},231:function(e,t,r){var n=r(7294),a=r(5510),l=r(9874),i=r(6679),o=r(9753),c=r(1593),u=r(3054);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let d=(0,n.forwardRef)((e,t)=>{let r=(0,n.useRef)(null),{className:d,id:f,style:p,init:m=!0,checked:v,defaultChecked:h,disabled:g,readonly:b,name:y,value:x}=e,j=(0,l.N2)(e),E=(0,n.useRef)(null),N=(0,n.useRef)(null),O=t=>{(0,l.j8)(e,"change",t)};(0,n.useImperativeHandle)(t,()=>({el:E.current,f7Toggle:()=>r.current})),(0,u.l)(E,e),(0,c.G)(v,e=>{r.current&&(r.current.checked=e)});let k=t=>{(0,l.j8)(e,"toggleChange",t.checked)},w=e=>{r.current&&r.current[e]("toggleChange",k)},Z=()=>{(0,o.Ep)(()=>{m&&E.current&&(r.current=o.f7.toggle.create({el:E.current}),w("on"))})},C=()=>{r.current&&r.current.destroy&&r.current.$el&&r.current.destroy(),r.current=null};(0,a.L)(()=>(w("on"),N.current&&N.current.addEventListener("change",O),()=>{w("off"),N.current&&N.current.removeEventListener("change",O)})),(0,a.L)(()=>(Z(),C),[]);let R=(0,l.AK)("toggle",d,{disabled:g},(0,i.bG)(e)),A=n.createElement("input",{ref:N,type:"checkbox",name:y,disabled:g,readOnly:b,checked:v,defaultChecked:h,value:x,onChange(){}});return n.createElement("label",s({id:f,style:p,className:R,ref:E},j),A,n.createElement("span",{className:"toggle-icon"}))});d.displayName="f7-toggle",t.Z=d}}]);