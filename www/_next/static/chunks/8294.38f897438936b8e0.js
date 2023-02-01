"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8294],{7091:function(e,t,r){var n=r(5893);r(7294);var a=r(9960),l=r(8142),i=r(5906),o=r(6735),c=[{id:"info",title:"Informazioni",opened:!0,links:[{selected:!1,label:"Dettagli",url:"/hosting/details",icon:"text_quote"},{selected:!1,label:"Posizione",url:"/hosting/location",icon:"map_pin_ellipse"},{selected:!1,label:"Prezzo",url:"/hosting/pricing",icon:"money_euro_circle"}]},{id:"structure",title:"Struttura",links:[{selected:!1,label:"Camere",url:"/hosting/floor-plan",icon:"square_grid_2x2"}]},{id:"photos",title:"Media",links:[{label:"Fotografie",url:"/hosting/photos",icon:"photo_on_rectangle"},{label:"Pianimetria",url:"/hosting/planimetry",icon:"hammer"},{label:"Video",url:"/hosting/video",icon:"play_rectangle"},{label:"Virtual tour",url:"/hosting/virtual-tour",icon:"videocam"}]},{id:"other",title:"Altro",links:[{label:"Servizi",url:"/hosting/amenities",icon:"list_bullet"},{label:"Dettagli finanziari",url:"/hosting/financial",icon:"tag"},{label:"Pubblica annuncio",url:"/hosting/publish",icon:"tag"}]}],u=function(){return(0,n.jsx)("aside",{className:"hosting-panel",children:c.map(function(e,t){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{children:e.title},t),(0,n.jsx)(l.Z,{menuList:!0,id:e.id,noHairlines:!0,children:e.links.map(function(e,t){return!0===e.external?(0,n.jsx)(i.Z,{title:e.label,href:"#",onClick:e.onClick,children:(0,n.jsx)(o.Z,{slot:"media",f7:e.icon})},t):(e.action,(0,n.jsx)(i.Z,{title:e.label,href:e.url,children:(0,n.jsx)(o.Z,{slot:"media",f7:e.icon})},t))})},t)]})})})};t.Z=u},8294:function(e,t,r){r.r(t);var n=r(5893);r(7294);var a=r(1418),l=r(9960),i=r(8502),o=r(8206),c=r(7447),u=r(5914),s=r(8142),d=r(5906),f=r(231),p=r(3702),m=r(1444),v=r(1273),h=r(7091),g=function(){return(0,n.jsx)(a.Z,{children:(0,n.jsx)("div",{className:"container pt-4",children:(0,n.jsxs)("div",{className:"grid",children:[(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsx)(h.Z,{})}),(0,n.jsxs)("div",{className:"col-md-8",children:[(0,n.jsx)(l.Z,{children:"Pubblica annuncio"}),(0,n.jsx)(i.Z,{children:"Il tuo annuncio verr\xe0 esaminato dal nostro staff prima di essere online."}),(0,n.jsx)(o.Z,{children:(0,n.jsxs)(c.Z,{className:"bordered",children:[(0,n.jsx)(u.Z,{children:(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(d.Z,{children:[(0,n.jsxs)("span",{children:["Trattativa riservata?",(0,n.jsx)("span",{className:"item-text",children:"Il prezzo non verr\xe0 mostrato al cliente"})]}),(0,n.jsx)(f.Z,{})]}),(0,n.jsx)(p.Z,{label:"Prezzo",type:"number",placeholder:"Prezzo",clearButton:!0})]})}),(0,n.jsx)(m.Z,{children:(0,n.jsx)(v.Z,{fill:!0,children:"Continua"})})]})})]})]})})})};t.default=g},8502:function(e,t,r){var n=r(7294),a=r(9874),l=r(6679);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:u}=e,s=(0,a.N2)(e),d=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:d.current}));let f=(0,a.AK)(r,"block-header",(0,l.bG)(e));return n.createElement("div",i({id:o,style:c,className:f,ref:d},s),u)});o.displayName="f7-block-header",t.Z=o},9960:function(e,t,r){var n=r(7294),a=r(9874),l=r(6679);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:u,large:s,medium:d}=e,f=(0,a.N2)(e),p=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:p.current}));let m=(0,a.AK)(r,"block-title",{"block-title-large":s,"block-title-medium":d},(0,l.bG)(e));return n.createElement("div",i({id:o,style:c,className:m,ref:p},f),u)});o.displayName="f7-block-title",t.Z=o},8206:function(e,t,r){var n=r(7294),a=r(9874),l=r(6679),i=r(1127);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let c=(0,n.forwardRef)((e,t)=>{let{className:r,inset:c,xsmallInset:u,smallInset:s,mediumInset:d,largeInset:f,xlargeInset:p,strong:m,accordionList:v,accordionOpposite:h,tabs:g,tab:b,tabActive:y,noHairlines:x,noHairlinesIos:j,noHairlinesMd:E,noHairlinesAurora:N,id:k,style:O,children:C}=e,Z=(0,a.N2)(e),w=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:w.current})),(0,i.x)(w,e);let R=(0,a.AK)(r,"block",{inset:c,"xsmall-inset":u,"small-inset":s,"medium-inset":d,"large-inset":f,"xlarge-inset":p,"block-strong":m,"accordion-list":v,"accordion-opposite":h,tabs:g,tab:b,"tab-active":y,"no-hairlines":x,"no-hairlines-md":E,"no-hairlines-ios":j,"no-hairlines-aurora":N},(0,l.bG)(e));return n.createElement("div",o({id:k,style:O,className:R,ref:w},Z),C)});c.displayName="f7-block",t.Z=c},5914:function(e,t,r){var n=r(7294),a=r(9874),l=r(6679);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:u,padding:s=!0}=e,d=(0,a.N2)(e),f=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:f.current}));let p=(0,a.AK)(r,"card-content",{"card-content-padding":s},(0,l.bG)(e));return n.createElement("div",i({id:o,style:c,className:p,ref:f},d),u)});o.displayName="f7-card-content",t.Z=o},1444:function(e,t,r){var n=r(7294),a=r(9874),l=r(6679);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:u}=e,s=(0,a.N2)(e),d=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:d.current}));let f=(0,a.AK)(r,"card-footer",(0,l.bG)(e));return n.createElement("div",i({id:o,style:c,className:f,ref:d},s),u)});o.displayName="f7-card-footer",t.Z=o},1216:function(e,t,r){var n=r(7294),a=r(9874),l=r(6679);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,t)=>{let{className:r,id:o,style:c,children:u}=e,s=(0,a.N2)(e),d=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,()=>({el:d.current}));let f=(0,a.AK)(r,"card-header",(0,l.bG)(e));return n.createElement("div",i({id:o,style:c,className:f,ref:d},s),u)});o.displayName="f7-card-header",t.Z=o},7447:function(e,t,r){var n=r(7294),a=r(5510),l=r(1216),i=r(5914),o=r(1444),c=r(9874),u=r(6679),s=r(9753),d=r(1593);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let p=(0,n.forwardRef)((e,t)=>{let{className:r,id:p,style:m,title:v,content:h,footer:g,padding:b,outline:y,expandable:x,expandableAnimateWidth:j,expandableOpened:E,animate:N,hideNavbarOnOpen:k,hideToolbarOnOpen:O,hideStatusbarOnOpen:C,scrollableEl:Z,swipeToClose:w,closeByBackdropClick:R,backdrop:z,backdropEl:L,noShadow:A,noBorder:I}=e,P=(0,c.N2)(e),G=(0,n.useRef)(null),K=()=>{G.current&&s.f7.card.open(G.current)},_=()=>{G.current&&s.f7.card.close(G.current)},S=(t,r)=>{G.current===t&&(0,c.j8)(e,"cardBeforeOpen",t,r)},H=t=>{G.current===t&&(0,c.j8)(e,"cardOpen",t)},T=(t,r)=>{G.current===t&&(0,c.j8)(e,"cardOpened",t,r)},F=t=>{G.current===t&&(0,c.j8)(e,"cardClose",t)},B=(t,r)=>{G.current===t&&(0,c.j8)(e,"cardClosed",t,r)},V=()=>{x&&G.current&&(0,s.Ep)(()=>{s.f7.on("cardBeforeOpen",S),s.f7.on("cardOpen",H),s.f7.on("cardOpened",T),s.f7.on("cardClose",F),s.f7.on("cardClosed",B)})},q=()=>{s.f7.off("cardBeforeOpen",S),s.f7.off("cardOpen",H),s.f7.off("cardOpened",T),s.f7.off("cardClose",F),s.f7.off("cardClosed",B)},J=()=>{x&&G.current&&(0,s.Ep)(()=>{x&&E&&s.f7.card.open(G.current,!1)})};(0,a.L)(()=>{J()},[]),(0,a.L)(()=>(V(),q)),(0,d.G)(E,e=>{e?K():_()}),(0,n.useImperativeHandle)(t,()=>({el:G.current,open:K,close:_}));let D,M,$,Q=(0,c.AK)(r,"card",{"card-outline":y,"card-expandable":x,"card-expandable-animate-width":j,"no-shadow":A,"no-border":I},(0,u.bG)(e)),U=(0,c.FJ)(e);return(v||U.header)&&(D=n.createElement(l.Z,null,v,U.header)),(h||U.content)&&(M=n.createElement(i.Z,{padding:b},h,U.content)),(g||U.footer)&&($=n.createElement(o.Z,null,g,U.footer)),n.createElement("div",f({id:p,style:m,className:Q,"data-animate":void 0===N?N:N.toString(),"data-hide-navbar-on-open":void 0===k?k:k.toString(),"data-hide-toolbar-on-open":void 0===O?O:O.toString(),"data-hide-statusbar-on-open":void 0===C?C:C.toString(),"data-scrollable-el":Z,"data-swipe-to-close":void 0===w?w:w.toString(),"data-close-by-backdrop-click":void 0===R?R:R.toString(),"data-backdrop":void 0===z?z:z.toString(),"data-backdrop-el":L,ref:G},P),D,M,$,U.default)});p.displayName="f7-card",t.Z=p},3702:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7294),a=r(5510),l=r(9874),i=r(6679),o=r(9753),c=r(1593);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let s=(0,n.forwardRef)((e,t)=>{let r=(0,n.useRef)(null),{className:s,id:d,style:f,mode:p,value:m,buttons:v,customButtons:h,dividers:g,imageUrlText:b,linkUrlText:y,placeholder:x,clearFormattingOnPaste:j,resizable:E=!1}=e,N=(0,l.N2)(e),k=(0,n.useRef)(null),O=(t,r)=>{(0,l.j8)(e,"textEditorChange",r)},C=(t,r)=>{(0,l.j8)(e,"textEditorInput",r)},Z=()=>{(0,l.j8)(e,"textEditorFocus")},w=()=>{(0,l.j8)(e,"textEditorBlur")},R=(t,r)=>{(0,l.j8)(e,"textEditorButtonClick",r)},z=()=>{(0,l.j8)(e,"textEditorKeyboardOpen")},L=()=>{(0,l.j8)(e,"textEditorKeyboardClose")},A=()=>{(0,l.j8)(e,"textEditorPopoverOpen")},I=()=>{(0,l.j8)(e,"textEditorPopoverClose")},P=(t,r)=>{(0,l.j8)(e,"textEditorInsertLink",r)},G=(t,r)=>{(0,l.j8)(e,"textEditorInsertImage",r)};(0,n.useImperativeHandle)(t,()=>({el:k.current,f7TextEditor:()=>r.current})),(0,c.G)(m,e=>{r.current&&r.current.setValue(e)});let K=()=>{let e=(0,l.uq)({el:k.current,mode:p,value:m,buttons:v,customButtons:h,dividers:g,imageUrlText:b,linkUrlText:y,placeholder:x,clearFormattingOnPaste:j,on:{change:O,input:C,focus:Z,blur:w,buttonClick:R,keyboardOpen:z,keyboardClose:L,popoverOpen:A,popoverClose:I,insertLink:P,insertImage:G}});(0,o.Ep)(()=>{r.current=o.f7.textEditor.create(e)})},_=()=>{r.current&&r.current.destroy&&r.current.destroy(),r.current=null};(0,a.L)(()=>(K(),_),[]);let S=(0,l.FJ)(e),H=(0,l.AK)(s,"text-editor",E&&"text-editor-resizable",(0,i.bG)(e));return n.createElement("div",u({ref:k,id:d,style:f,className:H},N),S["root-start"],n.createElement("div",{className:"text-editor-content",contentEditable:!0},S.default),S["root-end"],S.root)});s.displayName="f7-text-editor";var d=r(24);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let p=(0,n.forwardRef)((e,t)=>{let{className:r,id:u,style:p,sortable:m,media:v,dropdown:h="auto",wrap:g=!0,input:b=!0,type:y="text",name:x,value:j,defaultValue:E,inputmode:N,readonly:k,required:O,disabled:C,placeholder:Z,inputId:w,size:R,accept:z,autocomplete:L,autocorrect:A,autocapitalize:I,spellcheck:P,autofocus:G,autosave:K,max:_,min:S,step:H,maxlength:T,minlength:F,multiple:B,inputStyle:V,pattern:q,validate:J,validateOnBlur:D,onValidate:M,tabindex:$,resizable:Q,clearButton:U,noFormStoreData:W,noStoreData:X,ignoreStoreData:Y,errorMessage:ee,errorMessageForce:et,info:er,outline:en,label:ea,inlineLabel:el,floatingLabel:ei,calendarParams:eo,colorPickerParams:ec,textEditorParams:eu}=e,[es,ed]=(0,n.useState)(!1),[ef,ep]=(0,n.useState)(!1),em=(0,n.useContext)(d.Z),{listIsSortable:ev=!1}=em||{},eh=(0,l.N2)(e),eg=(0,n.useRef)(null),eb=(0,n.useRef)(null),ey=(0,n.useRef)(null),ex=(0,n.useRef)(null),ej=(0,n.useRef)(null),eE=(0,n.useRef)(!1),eN=()=>{if(ex.current)return ex.current.value},ek=()=>{if(!o.f7||!ex.current)return;let e=ex.current.validity;e&&(e.valid?(M&&M(!0),!1!==es&&ed(!1)):(M&&M(!1),!0!==es&&ed(!0)))},eO=t=>{(0,l.j8)(e,"textareaResize",t)},eC=t=>{(0,l.j8)(e,"inputNotEmpty",t)},eZ=t=>{(0,l.j8)(e,"inputEmpty",t)},ew=t=>{(0,l.j8)(e,"inputClear",t)},eR=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];(0,l.j8)(e,"input",...r),!(D||""===D)&&(J||""===J)&&ex.current&&ek(ex.current)},ez=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];(0,l.j8)(e,"focus",...r),ep(!0)},eL=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];(0,l.j8)(e,"blur",...r),(J||""===J||D||""===D)&&ex.current&&ek(ex.current),ep(!1)},eA=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];(0,l.j8)(e,"change",...r),"texteditor"===y&&(0,l.j8)(e,"textEditorChange",r[0])};(0,n.useImperativeHandle)(t,()=>({el:ey.current}));let eI=()=>{(ey.current||ej.current)&&(0,o.Ep)(()=>{ex.current&&(ex.current.addEventListener("input:notempty",eC,!1),ex.current.addEventListener("textarea:resize",eO,!1),ex.current.addEventListener("input:empty",eZ,!1),ex.current.addEventListener("input:clear",ew,!1),"datepicker"===y&&(eg.current=o.f7.calendar.create({inputEl:ex.current,value:j,on:{change(t,r){(0,l.j8)(e,"calendarChange",r)}},...eo||{}})),"colorpicker"===y&&(eb.current=o.f7.colorPicker.create({inputEl:ex.current,value:j,on:{change(t,r){(0,l.j8)(e,"colorpicker:change colorPickerChange",r)}},...ec||{}})),!(D||""===D)&&(J||""===J)&&(null!=j&&""!==j||null!=E&&""!==E)&&setTimeout(()=>{ek()},0),"textarea"===y&&Q&&o.f7.input.resizeTextarea(ex.current))})},eP=()=>{ex.current&&(ex.current.removeEventListener("input:notempty",eC,!1),ex.current.removeEventListener("textarea:resize",eO,!1),ex.current.removeEventListener("input:empty",eZ,!1),ex.current.removeEventListener("input:clear",ew,!1)),eg.current&&eg.current.destroy&&(eg.current.destroy(),eg.current=null),eb.current&&eb.current.destroy&&(eb.current.destroy(),eb.current=null)};(0,a.L)(()=>(eI(),eP),[]),(0,a.L)(()=>{o.f7&&eE.current&&ex.current&&(eE.current=!1,J&&!D&&ek(),"textarea"===y&&Q&&o.f7.input.resizeTextarea(ex.current))}),(0,c.G)(ec,e=>{o.f7&&eb.current&&(0,l.l7)(eb.current.params,e||{})}),(0,c.G)(eo,e=>{o.f7&&eg.current&&(0,l.l7)(eg.current.params,e||{})}),(0,c.G)(j,e=>{o.f7&&(eE.current=!0,eg.current&&eg.current.setValue(e),eb.current&&eb.current.setValue(e))});let eG=(0,l.FJ)(e),eK=eN(),e_=(()=>{if("datepicker"===y&&Array.isArray(j)&&0===j.length)return!1;let e=eN();return void 0===j?e||0===e:j||0===j})(),eS,eH=(t,r)=>{let a=y;("datepicker"===a||"colorpicker"===a)&&(a="text");let i=(0,l.AK)({resizable:"textarea"===a&&Q,"no-store-data":W||X||Y,"input-invalid":ee&&et||es,"input-with-value":e_,"input-focused":ef}),o;"file"!==y&&"datepicker"!==y&&"colorpicker"!==y&&(o=void 0!==j?j:eK);let c={};return"datepicker"!==y&&"colorpicker"!==y&&("value"in e&&(c.value=o),"defaultValue"in e&&(c.defaultValue=E)),n.createElement(t,f({ref:ex,style:V,name:x,type:"input"===t?a:void 0,placeholder:Z,inputMode:N,id:w,size:R,accept:z,autoComplete:L,autoCorrect:A,autoCapitalize:I,spellCheck:P,autoFocus:G,autoSave:K,disabled:C,max:_,maxLength:T,min:S,minLength:F,step:H,multiple:B,readOnly:k,required:O,pattern:q,validate:"string"==typeof J&&J.length?J:void 0,"data-validate":!0===J||""===J||!0===D||""===D||void 0,"data-validate-on-blur":!0===D||""===D||void 0,tabIndex:$,"data-error-message":et?void 0:ee,className:i,onFocus:ez,onBlur:eL,onInput:eR,onChange:eA},c),r)};b&&(eS="select"===y||"textarea"===y||"file"===y?"select"===y?eH("select",eG.default):eH("file"===y?"input":"textarea"):"texteditor"===y?n.createElement(s,f({value:j,resizable:Q,placeholder:Z,onTextEditorFocus:ez,onTextEditorBlur:eL,onTextEditorInput:eR,onTextEditorChange:eA},eu||{})):eH("input"));let eT=!!ee||eG["error-message"]&&eG["error-message"].length,eF=n.createElement("div",{ref:ej,className:(0,l.AK)("item-content item-input",!g&&r,!g&&{disabled:C},!g&&(0,i.bG)(e),{"inline-label":el,"item-input-outline":en,"item-input-focused":ef,"item-input-with-info":!!er||eG.info&&eG.info.length,"item-input-with-value":e_,"item-input-with-error-message":eT&&et||es,"item-input-invalid":eT&&et||es})},eG["content-start"],(v||eG.media)&&n.createElement("div",{className:"item-media"},v&&n.createElement("img",{src:v}),eG.media),n.createElement("div",{className:"item-inner"},eG["inner-start"],(ea||eG.label)&&n.createElement("div",{className:(0,l.AK)("item-title item-label",{"item-floating-label":ei})},ea,eG.label),n.createElement("div",{className:(0,l.AK)("item-input-wrap",{"input-dropdown":"auto"===h?"select"===y:h})},eS,eG.input,eT&&et&&n.createElement("div",{className:"item-input-error-message"},ee,eG["error-message"]),U&&n.createElement("span",{className:"input-clear-button"}),(er||eG.info)&&n.createElement("div",{className:"item-input-info"},er,eG.info)),eG.inner,eG["inner-end"]),eG.content,eG["content-end"]);return g?n.createElement("li",f({ref:ey,id:u,style:p,className:(0,l.AK)(r,{disabled:C},(0,i.bG)(e))},eh),eG["root-start"],eF,(!0===m||!1===m?m:ev)&&n.createElement("div",{className:"sortable-handler"}),eG.root,eG["root-end"]):eF});p.displayName="f7-list-input";var m=p},231:function(e,t,r){var n=r(7294),a=r(5510),l=r(9874),i=r(6679),o=r(9753),c=r(1593),u=r(3054);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let d=(0,n.forwardRef)((e,t)=>{let r=(0,n.useRef)(null),{className:d,id:f,style:p,init:m=!0,checked:v,defaultChecked:h,disabled:g,readonly:b,name:y,value:x}=e,j=(0,l.N2)(e),E=(0,n.useRef)(null),N=(0,n.useRef)(null),k=t=>{(0,l.j8)(e,"change",t)};(0,n.useImperativeHandle)(t,()=>({el:E.current,f7Toggle:()=>r.current})),(0,u.l)(E,e),(0,c.G)(v,e=>{r.current&&(r.current.checked=e)});let O=t=>{(0,l.j8)(e,"toggleChange",t.checked)},C=e=>{r.current&&r.current[e]("toggleChange",O)},Z=()=>{(0,o.Ep)(()=>{m&&E.current&&(r.current=o.f7.toggle.create({el:E.current}),C("on"))})},w=()=>{r.current&&r.current.destroy&&r.current.$el&&r.current.destroy(),r.current=null};(0,a.L)(()=>(C("on"),N.current&&N.current.addEventListener("change",k),()=>{C("off"),N.current&&N.current.removeEventListener("change",k)})),(0,a.L)(()=>(Z(),w),[]);let R=(0,l.AK)("toggle",d,{disabled:g},(0,i.bG)(e)),z=n.createElement("input",{ref:N,type:"checkbox",name:y,disabled:g,readOnly:b,checked:v,defaultChecked:h,value:x,onChange(){}});return n.createElement("label",s({id:f,style:p,className:R,ref:E},j),z,n.createElement("span",{className:"toggle-icon"}))});d.displayName="f7-toggle",t.Z=d}}]);