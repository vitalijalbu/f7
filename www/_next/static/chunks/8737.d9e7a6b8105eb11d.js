"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8737],{8737:function(e,a,l){l.r(a);var n=l(4924),o=l(6042),t=l(9396),s=l(5893),i=l(7294),r=l(9753),c=l(1418),u=l(8206),d=l(1273),p=l(2583),m=l(8142),f=l(3702),h=l(2176),g=function(e){var a=(0,i.useState)({}),l=a[0],g=a[1],v=(0,i.useState)("");v[0],v[1];var x=(0,i.useState)(!1),Z=x[0],j=x[1],w=function(e){e.preventDefault(),g(function(a){return(0,t.Z)((0,o.Z)({},a),(0,n.Z)({},e.target.name,e.target.value))})},b=function(a){a.preventDefault(),!0===r.f7.input.validateInputs("#loginForm")?(j(!0),userLogin((0,o.Z)({},l)).then(function(a){r.f7.toast.show({text:a.message,horizontalPosition:"center",closeTimeout:2500,cssClass:"success"}),e.navigate("/")}).catch(function(e){(null==e?void 0:e.message)&&r.f7.toast.show({text:e.message,horizontalPosition:"center",closeTimeout:2500,cssClass:"danger"})}).finally(function(){j(!1)})):alert("invalid")};return(0,s.jsxs)(c.Z,{loginScreen:!0,children:[(0,s.jsx)(u.Z,{children:(0,s.jsx)(d.Z,{iconF7:"logo_google",outline:!0,className:"google_btn",children:"Continua con Google"})}),(0,s.jsx)(u.Z,{children:(0,s.jsx)(d.Z,{iconF7:"logo_facebook",outline:!0,className:"fb_btn",children:"Continua con Facebook"})}),(0,s.jsx)(p.Z,{children:"Accedi al tuo account"}),(0,s.jsxs)(m.Z,{form:!0,children:[(0,s.jsx)(f.Z,{validate:!0,clearButton:!0,label:"nome",type:"text",name:"firstName",placeholder:"Nome",value:(null==l?void 0:l.email)||"",onInput:w,required:!0}),(0,s.jsx)(f.Z,{validate:!0,clearButton:!0,label:"Email",type:"email",name:"email",placeholder:"Email",value:(null==l?void 0:l.email)||"",onInput:w,required:!0}),(0,s.jsx)(f.Z,{validate:!0,clearButton:!0,label:"Password",type:"password",name:"password",placeholder:"Password",value:(null==l?void 0:l.password)||"",onInput:w,required:!0}),(0,s.jsx)(f.Z,{validate:!0,clearButton:!0,label:"Conferma password",type:"password",name:"password",placeholder:"Conferma password",value:(null==l?void 0:l.password)||"",onInput:w,required:!0})]}),(0,s.jsx)(u.Z,{children:(0,s.jsx)(d.Z,{fill:!0,large:!0,onClick:b,preloader:!0,loading:Z,className:Z&&"disabled",children:"Registrati"})}),(0,s.jsx)(u.Z,{className:"text-align-center",children:(0,s.jsx)(h.Z,{href:"/signin",children:"Torna al login"})})]})};a.default=g}}]);