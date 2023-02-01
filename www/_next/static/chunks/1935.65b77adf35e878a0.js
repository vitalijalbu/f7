"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1935],{7091:function(e,t,r){var n=r(5893);r(7294);var i=r(9960),l=r(8142),a=r(5906),o=r(6735),u=[{id:"info",title:"Informazioni",opened:!0,links:[{selected:!1,label:"Dettagli",url:"/hosting/details",icon:"text_quote"},{selected:!1,label:"Posizione",url:"/hosting/location",icon:"map_pin_ellipse"},{selected:!1,label:"Prezzo",url:"/hosting/pricing",icon:"money_euro_circle"}]},{id:"structure",title:"Struttura",links:[{selected:!1,label:"Camere",url:"/hosting/floor-plan",icon:"square_grid_2x2"}]},{id:"photos",title:"Media",links:[{label:"Fotografie",url:"/hosting/photos",icon:"photo_on_rectangle"},{label:"Pianimetria",url:"/hosting/planimetry",icon:"hammer"},{label:"Video",url:"/hosting/video",icon:"play_rectangle"},{label:"Virtual tour",url:"/hosting/virtual-tour",icon:"videocam"}]},{id:"other",title:"Altro",links:[{label:"Servizi",url:"/hosting/amenities",icon:"list_bullet"},{label:"Dettagli finanziari",url:"/hosting/financial",icon:"tag"},{label:"Pubblica annuncio",url:"/hosting/publish",icon:"tag"}]}],c=function(){return(0,n.jsx)("aside",{className:"hosting-panel",children:u.map(function(e,t){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{children:e.title},t),(0,n.jsx)(l.Z,{menuList:!0,id:e.id,noHairlines:!0,children:e.links.map(function(e,t){return!0===e.external?(0,n.jsx)(a.Z,{title:e.label,href:"#",onClick:e.onClick,children:(0,n.jsx)(o.Z,{slot:"media",f7:e.icon})},t):(e.action,(0,n.jsx)(a.Z,{title:e.label,href:e.url,children:(0,n.jsx)(o.Z,{slot:"media",f7:e.icon})},t))})},t)]})})})};t.Z=c},1935:function(e,t,r){r.r(t);var n=r(5893);r(7294);var i=r(1418),l=r(9960),a=r(8502),o=r(8206),u=r(7447),c=r(5914),s=r(8142),d=r(3702),p=r(1444),m=r(1273),f=r(7091),h=r(2512),v=function(){var e=(0,h.uI)(),t=e.acceptedFiles;return e.getRootProps,e.getInputProps,t.map(function(e){return(0,n.jsxs)("li",{children:[e.path," - ",e.size," bytes"]},e.path)}),(0,n.jsx)(i.Z,{children:(0,n.jsx)("div",{className:"container pt-4",children:(0,n.jsxs)("div",{className:"grid",children:[(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsx)(f.Z,{})}),(0,n.jsxs)("div",{className:"col-md-8",children:[(0,n.jsx)(l.Z,{children:"Video"}),(0,n.jsx)(a.Z,{children:"Il tuo annuncio verr\xe0 esaminato dal nostro staff prima di essere online."}),(0,n.jsx)(o.Z,{children:(0,n.jsxs)(u.Z,{className:"bordered",children:[(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(l.Z,{children:"URL"}),(0,n.jsx)(s.Z,{children:(0,n.jsx)(d.Z,{label:"Titolo annuncio",type:"text",naeme:"title",outline:!0,floatingLabel:!0,clearButton:!0})})]}),(0,n.jsxs)(p.Z,{className:"align-content-space-between",children:[(0,n.jsx)(m.Z,{outline:!0,children:"Indietro"}),(0,n.jsx)(m.Z,{fill:!0,children:"Continua"})]})]})})]})]})})})};t.default=v},3702:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(7294),i=r(5510),l=r(9874),a=r(6679),o=r(9753),u=r(1593);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let s=(0,n.forwardRef)((e,t)=>{let r=(0,n.useRef)(null),{className:s,id:d,style:p,mode:m,value:f,buttons:h,customButtons:v,dividers:x,imageUrlText:g,linkUrlText:b,placeholder:j,clearFormattingOnPaste:E,resizable:y=!1}=e,k=(0,l.N2)(e),N=(0,n.useRef)(null),C=(t,r)=>{(0,l.j8)(e,"textEditorChange",r)},Z=(t,r)=>{(0,l.j8)(e,"textEditorInput",r)},L=()=>{(0,l.j8)(e,"textEditorFocus")},z=()=>{(0,l.j8)(e,"textEditorBlur")},I=(t,r)=>{(0,l.j8)(e,"textEditorButtonClick",r)},_=()=>{(0,l.j8)(e,"textEditorKeyboardOpen")},w=()=>{(0,l.j8)(e,"textEditorKeyboardClose")},A=()=>{(0,l.j8)(e,"textEditorPopoverOpen")},R=()=>{(0,l.j8)(e,"textEditorPopoverClose")},P=(t,r)=>{(0,l.j8)(e,"textEditorInsertLink",r)},O=(t,r)=>{(0,l.j8)(e,"textEditorInsertImage",r)};(0,n.useImperativeHandle)(t,()=>({el:N.current,f7TextEditor:()=>r.current})),(0,u.G)(f,e=>{r.current&&r.current.setValue(e)});let F=()=>{let e=(0,l.uq)({el:N.current,mode:m,value:f,buttons:h,customButtons:v,dividers:x,imageUrlText:g,linkUrlText:b,placeholder:j,clearFormattingOnPaste:E,on:{change:C,input:Z,focus:L,blur:z,buttonClick:I,keyboardOpen:_,keyboardClose:w,popoverOpen:A,popoverClose:R,insertLink:P,insertImage:O}});(0,o.Ep)(()=>{r.current=o.f7.textEditor.create(e)})},T=()=>{r.current&&r.current.destroy&&r.current.destroy(),r.current=null};(0,i.L)(()=>(F(),T),[]);let K=(0,l.FJ)(e),V=(0,l.AK)(s,"text-editor",y&&"text-editor-resizable",(0,a.bG)(e));return n.createElement("div",c({ref:N,id:d,style:p,className:V},k),K["root-start"],n.createElement("div",{className:"text-editor-content",contentEditable:!0},K.default),K["root-end"],K.root)});s.displayName="f7-text-editor";var d=r(24);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let m=(0,n.forwardRef)((e,t)=>{let{className:r,id:c,style:m,sortable:f,media:h,dropdown:v="auto",wrap:x=!0,input:g=!0,type:b="text",name:j,value:E,defaultValue:y,inputmode:k,readonly:N,required:C,disabled:Z,placeholder:L,inputId:z,size:I,accept:_,autocomplete:w,autocorrect:A,autocapitalize:R,spellcheck:P,autofocus:O,autosave:F,max:T,min:K,step:V,maxlength:G,minlength:B,multiple:S,inputStyle:q,pattern:H,validate:D,validateOnBlur:J,onValidate:M,tabindex:U,resizable:Q,clearButton:W,noFormStoreData:X,noStoreData:Y,ignoreStoreData:$,errorMessage:ee,errorMessageForce:et,info:er,outline:en,label:ei,inlineLabel:el,floatingLabel:ea,calendarParams:eo,colorPickerParams:eu,textEditorParams:ec}=e,[es,ed]=(0,n.useState)(!1),[ep,em]=(0,n.useState)(!1),ef=(0,n.useContext)(d.Z),{listIsSortable:eh=!1}=ef||{},ev=(0,l.N2)(e),ex=(0,n.useRef)(null),eg=(0,n.useRef)(null),eb=(0,n.useRef)(null),ej=(0,n.useRef)(null),eE=(0,n.useRef)(null),ey=(0,n.useRef)(!1),ek=()=>{if(ej.current)return ej.current.value},eN=()=>{if(!o.f7||!ej.current)return;let e=ej.current.validity;e&&(e.valid?(M&&M(!0),!1!==es&&ed(!1)):(M&&M(!1),!0!==es&&ed(!0)))},eC=t=>{(0,l.j8)(e,"textareaResize",t)},eZ=t=>{(0,l.j8)(e,"inputNotEmpty",t)},eL=t=>{(0,l.j8)(e,"inputEmpty",t)},ez=t=>{(0,l.j8)(e,"inputClear",t)},eI=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];(0,l.j8)(e,"input",...r),!(J||""===J)&&(D||""===D)&&ej.current&&eN(ej.current)},e_=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];(0,l.j8)(e,"focus",...r),em(!0)},ew=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];(0,l.j8)(e,"blur",...r),(D||""===D||J||""===J)&&ej.current&&eN(ej.current),em(!1)},eA=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];(0,l.j8)(e,"change",...r),"texteditor"===b&&(0,l.j8)(e,"textEditorChange",r[0])};(0,n.useImperativeHandle)(t,()=>({el:eb.current}));let eR=()=>{(eb.current||eE.current)&&(0,o.Ep)(()=>{ej.current&&(ej.current.addEventListener("input:notempty",eZ,!1),ej.current.addEventListener("textarea:resize",eC,!1),ej.current.addEventListener("input:empty",eL,!1),ej.current.addEventListener("input:clear",ez,!1),"datepicker"===b&&(ex.current=o.f7.calendar.create({inputEl:ej.current,value:E,on:{change(t,r){(0,l.j8)(e,"calendarChange",r)}},...eo||{}})),"colorpicker"===b&&(eg.current=o.f7.colorPicker.create({inputEl:ej.current,value:E,on:{change(t,r){(0,l.j8)(e,"colorpicker:change colorPickerChange",r)}},...eu||{}})),!(J||""===J)&&(D||""===D)&&(null!=E&&""!==E||null!=y&&""!==y)&&setTimeout(()=>{eN()},0),"textarea"===b&&Q&&o.f7.input.resizeTextarea(ej.current))})},eP=()=>{ej.current&&(ej.current.removeEventListener("input:notempty",eZ,!1),ej.current.removeEventListener("textarea:resize",eC,!1),ej.current.removeEventListener("input:empty",eL,!1),ej.current.removeEventListener("input:clear",ez,!1)),ex.current&&ex.current.destroy&&(ex.current.destroy(),ex.current=null),eg.current&&eg.current.destroy&&(eg.current.destroy(),eg.current=null)};(0,i.L)(()=>(eR(),eP),[]),(0,i.L)(()=>{o.f7&&ey.current&&ej.current&&(ey.current=!1,D&&!J&&eN(),"textarea"===b&&Q&&o.f7.input.resizeTextarea(ej.current))}),(0,u.G)(eu,e=>{o.f7&&eg.current&&(0,l.l7)(eg.current.params,e||{})}),(0,u.G)(eo,e=>{o.f7&&ex.current&&(0,l.l7)(ex.current.params,e||{})}),(0,u.G)(E,e=>{o.f7&&(ey.current=!0,ex.current&&ex.current.setValue(e),eg.current&&eg.current.setValue(e))});let eO=(0,l.FJ)(e),eF=ek(),eT=(()=>{if("datepicker"===b&&Array.isArray(E)&&0===E.length)return!1;let e=ek();return void 0===E?e||0===e:E||0===E})(),eK,eV=(t,r)=>{let i=b;("datepicker"===i||"colorpicker"===i)&&(i="text");let a=(0,l.AK)({resizable:"textarea"===i&&Q,"no-store-data":X||Y||$,"input-invalid":ee&&et||es,"input-with-value":eT,"input-focused":ep}),o;"file"!==b&&"datepicker"!==b&&"colorpicker"!==b&&(o=void 0!==E?E:eF);let u={};return"datepicker"!==b&&"colorpicker"!==b&&("value"in e&&(u.value=o),"defaultValue"in e&&(u.defaultValue=y)),n.createElement(t,p({ref:ej,style:q,name:j,type:"input"===t?i:void 0,placeholder:L,inputMode:k,id:z,size:I,accept:_,autoComplete:w,autoCorrect:A,autoCapitalize:R,spellCheck:P,autoFocus:O,autoSave:F,disabled:Z,max:T,maxLength:G,min:K,minLength:B,step:V,multiple:S,readOnly:N,required:C,pattern:H,validate:"string"==typeof D&&D.length?D:void 0,"data-validate":!0===D||""===D||!0===J||""===J||void 0,"data-validate-on-blur":!0===J||""===J||void 0,tabIndex:U,"data-error-message":et?void 0:ee,className:a,onFocus:e_,onBlur:ew,onInput:eI,onChange:eA},u),r)};g&&(eK="select"===b||"textarea"===b||"file"===b?"select"===b?eV("select",eO.default):eV("file"===b?"input":"textarea"):"texteditor"===b?n.createElement(s,p({value:E,resizable:Q,placeholder:L,onTextEditorFocus:e_,onTextEditorBlur:ew,onTextEditorInput:eI,onTextEditorChange:eA},ec||{})):eV("input"));let eG=!!ee||eO["error-message"]&&eO["error-message"].length,eB=n.createElement("div",{ref:eE,className:(0,l.AK)("item-content item-input",!x&&r,!x&&{disabled:Z},!x&&(0,a.bG)(e),{"inline-label":el,"item-input-outline":en,"item-input-focused":ep,"item-input-with-info":!!er||eO.info&&eO.info.length,"item-input-with-value":eT,"item-input-with-error-message":eG&&et||es,"item-input-invalid":eG&&et||es})},eO["content-start"],(h||eO.media)&&n.createElement("div",{className:"item-media"},h&&n.createElement("img",{src:h}),eO.media),n.createElement("div",{className:"item-inner"},eO["inner-start"],(ei||eO.label)&&n.createElement("div",{className:(0,l.AK)("item-title item-label",{"item-floating-label":ea})},ei,eO.label),n.createElement("div",{className:(0,l.AK)("item-input-wrap",{"input-dropdown":"auto"===v?"select"===b:v})},eK,eO.input,eG&&et&&n.createElement("div",{className:"item-input-error-message"},ee,eO["error-message"]),W&&n.createElement("span",{className:"input-clear-button"}),(er||eO.info)&&n.createElement("div",{className:"item-input-info"},er,eO.info)),eO.inner,eO["inner-end"]),eO.content,eO["content-end"]);return x?n.createElement("li",p({ref:eb,id:c,style:m,className:(0,l.AK)(r,{disabled:Z},(0,a.bG)(e))},ev),eO["root-start"],eB,(!0===f||!1===f?f:eh)&&n.createElement("div",{className:"sortable-handler"}),eO.root,eO["root-end"]):eB});m.displayName="f7-list-input";var f=m}}]);