"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6175],{9960:function(e,r,t){var n=t(7294),l=t(9874),i=t(6679);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let s=(0,n.forwardRef)((e,r)=>{let{className:t,id:s,style:o,children:c,large:u,medium:d}=e,p=(0,l.N2)(e),f=(0,n.useRef)(null);(0,n.useImperativeHandle)(r,()=>({el:f.current}));let v=(0,l.AK)(t,"block-title",{"block-title-large":u,"block-title-medium":d},(0,i.bG)(e));return n.createElement("div",a({id:s,style:o,className:v,ref:f},p),c)});s.displayName="f7-block-title",r.Z=s},8206:function(e,r,t){var n=t(7294),l=t(9874),i=t(6679),a=t(1127);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let o=(0,n.forwardRef)((e,r)=>{let{className:t,inset:o,xsmallInset:c,smallInset:u,mediumInset:d,largeInset:p,xlargeInset:f,strong:v,accordionList:h,accordionOpposite:g,tabs:m,tab:b,tabActive:w,noHairlines:E,noHairlinesIos:_,noHairlinesMd:y,noHairlinesAurora:S,id:x,style:O,children:P}=e,k=(0,l.N2)(e),C=(0,n.useRef)(null);(0,n.useImperativeHandle)(r,()=>({el:C.current})),(0,a.x)(C,e);let N=(0,l.AK)(t,"block",{inset:o,"xsmall-inset":c,"small-inset":u,"medium-inset":d,"large-inset":p,"xlarge-inset":f,"block-strong":v,"accordion-list":h,"accordion-opposite":g,tabs:m,tab:b,"tab-active":w,"no-hairlines":E,"no-hairlines-md":y,"no-hairlines-ios":_,"no-hairlines-aurora":S},(0,i.bG)(e));return n.createElement("div",s({id:x,style:O,className:N,ref:C},k),P)});o.displayName="f7-block",r.Z=o},719:function(e,r,t){t.d(r,{tq:function(){return w},o5:function(){return _}});var n=t(7294),l=t(3220);function i(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function a(e,r){let t=["__proto__","constructor","prototype"];Object.keys(r).filter(e=>0>t.indexOf(e)).forEach(t=>{void 0===e[t]?e[t]=r[t]:i(r[t])&&i(e[t])&&Object.keys(r[t]).length>0?r[t].__swiper__?e[t]=r[t]:a(e[t],r[t]):e[t]=r[t]})}function s(e={}){return e.navigation&&void 0===e.navigation.nextEl&&void 0===e.navigation.prevEl}function o(e={}){return e.pagination&&void 0===e.pagination.el}function c(e={}){return e.scrollbar&&void 0===e.scrollbar.el}function u(e=""){let r=e.split(" ").map(e=>e.trim()).filter(e=>!!e),t=[];return r.forEach(e=>{0>t.indexOf(e)&&t.push(e)}),t.join(" ")}let d=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopedSlidesLimit","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"],p=(e,r)=>{let t=r.slidesPerView;if(r.breakpoints){let n=l.ZP.prototype.getBreakpoint(r.breakpoints),i=n in r.breakpoints?r.breakpoints[n]:void 0;i&&i.slidesPerView&&(t=i.slidesPerView)}let a=Math.ceil(parseFloat(r.loopedSlides||t,10));return(a+=r.loopAdditionalSlides)>e.length&&r.loopedSlidesLimit&&(a=e.length),a};function f(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}let v=e=>{e&&!e.destroyed&&e.params.virtual&&(!e.params.virtual||e.params.virtual.enabled)&&(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function h(e,r){return"undefined"==typeof window?(0,n.useEffect)(e,r):(0,n.useLayoutEffect)(e,r)}let g=(0,n.createContext)(null),m=(0,n.createContext)(null);function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let w=(0,n.forwardRef)(function(e,r){let{className:t,tag:g="div",wrapperTag:w="div",children:E,onSwiper:_,...y}=void 0===e?{}:e,S=!1,[x,O]=(0,n.useState)("swiper"),[P,k]=(0,n.useState)(null),[C,N]=(0,n.useState)(!1),j=(0,n.useRef)(!1),R=(0,n.useRef)(null),$=(0,n.useRef)(null),z=(0,n.useRef)(null),A=(0,n.useRef)(null),Z=(0,n.useRef)(null),D=(0,n.useRef)(null),B=(0,n.useRef)(null),T=(0,n.useRef)(null),{params:G,passedParams:I,rest:M,events:L}=function(e={},r=!0){let t={on:{}},n={},s={};a(t,l.ZP.defaults),a(t,l.ZP.extendedDefaults),t._emitClasses=!0,t.init=!1;let o={},c=d.map(e=>e.replace(/_/,"")),u=Object.assign({},e);return Object.keys(u).forEach(l=>{void 0!==e[l]&&(c.indexOf(l)>=0?i(e[l])?(t[l]={},s[l]={},a(t[l],e[l]),a(s[l],e[l])):(t[l]=e[l],s[l]=e[l]):0===l.search(/on[A-Z]/)&&"function"==typeof e[l]?r?n[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:t.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:o[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(e=>{!0===t[e]&&(t[e]={}),!1===t[e]&&delete t[e]}),{params:t,passedParams:s,rest:o,events:n}}(y),{slides:V,slots:F}=function(e){let r=[],t={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return n.Children.toArray(e).forEach(e=>{if(f(e))r.push(e);else if(e.props&&e.props.slot&&t[e.props.slot])t[e.props.slot].push(e);else if(e.props&&e.props.children){let l=function e(r){let t=[];return n.Children.toArray(r).forEach(r=>{f(r)?t.push(r):r.props&&r.props.children&&e(r.props.children).forEach(e=>t.push(e))}),t}(e.props.children);l.length>0?l.forEach(e=>r.push(e)):t["container-end"].push(e)}else t["container-end"].push(e)}),{slides:r,slots:t}}(E),H=()=>{N(!C)};Object.assign(G.on,{_containerClasses(e,r){O(r)}});let W=()=>{if(Object.assign(G.on,L),S=!0,$.current=new l.ZP(G),$.current.loopCreate=()=>{},$.current.loopDestroy=()=>{},G.loop&&($.current.loopedSlides=p(V,G)),$.current.virtual&&$.current.params.virtual.enabled){$.current.virtual.slides=V;let e={cache:!1,slides:V,renderExternal:k,renderExternalUpdate:!1};a($.current.params.virtual,e),a($.current.originalParams.virtual,e)}};R.current||W(),$.current&&$.current.on("_beforeBreakpoint",H);let q=()=>{!S&&L&&$.current&&Object.keys(L).forEach(e=>{$.current.on(e,L[e])})},K=()=>{L&&$.current&&Object.keys(L).forEach(e=>{$.current.off(e,L[e])})};return(0,n.useEffect)(()=>()=>{$.current&&$.current.off("_beforeBreakpoint",H)}),(0,n.useEffect)(()=>{!j.current&&$.current&&($.current.emitSlidesClasses(),j.current=!0)}),h(()=>{if(r&&(r.current=R.current),R.current)return $.current.destroyed&&W(),function({el:e,nextEl:r,prevEl:t,paginationEl:n,scrollbarEl:l,swiper:i},a){s(a)&&r&&t&&(i.params.navigation.nextEl=r,i.originalParams.navigation.nextEl=r,i.params.navigation.prevEl=t,i.originalParams.navigation.prevEl=t),o(a)&&n&&(i.params.pagination.el=n,i.originalParams.pagination.el=n),c(a)&&l&&(i.params.scrollbar.el=l,i.originalParams.scrollbar.el=l),i.init(e)}({el:R.current,nextEl:Z.current,prevEl:D.current,paginationEl:B.current,scrollbarEl:T.current,swiper:$.current},G),_&&_($.current),()=>{$.current&&!$.current.destroyed&&$.current.destroy(!0,!1)}},[]),h(()=>{q();let e=function(e,r,t,n,l){let a=[];if(!r)return a;let s=e=>{0>a.indexOf(e)&&a.push(e)};if(t&&n){let o=n.map(l),c=t.map(l);o.join("")!==c.join("")&&s("children"),n.length!==t.length&&s("children")}let u=d.filter(e=>"_"===e[0]).map(e=>e.replace(/_/,""));return u.forEach(t=>{if(t in e&&t in r){if(i(e[t])&&i(r[t])){let n=Object.keys(e[t]),l=Object.keys(r[t]);n.length!==l.length?s(t):(n.forEach(n=>{e[t][n]!==r[t][n]&&s(t)}),l.forEach(n=>{e[t][n]!==r[t][n]&&s(t)}))}else e[t]!==r[t]&&s(t)}}),a}(I,z.current,V,A.current,e=>e.key);return z.current=I,A.current=V,e.length&&$.current&&!$.current.destroyed&&function({swiper:e,slides:r,passedParams:t,changedParams:n,nextEl:l,prevEl:s,scrollbarEl:o,paginationEl:c}){let u=n.filter(e=>"children"!==e&&"direction"!==e),{params:d,pagination:p,navigation:f,scrollbar:v,virtual:h,thumbs:g}=e,m,b,w,E,_;n.includes("thumbs")&&t.thumbs&&t.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(m=!0),n.includes("controller")&&t.controller&&t.controller.control&&d.controller&&!d.controller.control&&(b=!0),n.includes("pagination")&&t.pagination&&(t.pagination.el||c)&&(d.pagination||!1===d.pagination)&&p&&!p.el&&(w=!0),n.includes("scrollbar")&&t.scrollbar&&(t.scrollbar.el||o)&&(d.scrollbar||!1===d.scrollbar)&&v&&!v.el&&(E=!0),n.includes("navigation")&&t.navigation&&(t.navigation.prevEl||s)&&(t.navigation.nextEl||l)&&(d.navigation||!1===d.navigation)&&f&&!f.prevEl&&!f.nextEl&&(_=!0);let y=r=>{e[r]&&(e[r].destroy(),"navigation"===r?(d[r].prevEl=void 0,d[r].nextEl=void 0,e[r].prevEl=void 0,e[r].nextEl=void 0):(d[r].el=void 0,e[r].el=void 0))};if(u.forEach(e=>{if(i(d[e])&&i(t[e]))a(d[e],t[e]);else{let r=t[e];(!0===r||!1===r)&&("navigation"===e||"pagination"===e||"scrollbar"===e)?!1===r&&y(e):d[e]=t[e]}}),u.includes("controller")&&!b&&e.controller&&e.controller.control&&d.controller&&d.controller.control&&(e.controller.control=d.controller.control),n.includes("children")&&r&&h&&d.virtual.enabled?(h.slides=r,h.update(!0)):n.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),m){let S=g.init();S&&g.update(!0)}b&&(e.controller.control=d.controller.control),w&&(c&&(d.pagination.el=c),p.init(),p.render(),p.update()),E&&(o&&(d.scrollbar.el=o),v.init(),v.updateSize(),v.setTranslate()),_&&(l&&(d.navigation.nextEl=l),s&&(d.navigation.prevEl=s),f.init(),f.update()),n.includes("allowSlideNext")&&(e.allowSlideNext=t.allowSlideNext),n.includes("allowSlidePrev")&&(e.allowSlidePrev=t.allowSlidePrev),n.includes("direction")&&e.changeDirection(t.direction,!1),e.update()}({swiper:$.current,slides:V,passedParams:I,changedParams:e,nextEl:Z.current,prevEl:D.current,scrollbarEl:T.current,paginationEl:B.current}),()=>{K()}}),h(()=>{v($.current)},[P]),n.createElement(g,b({ref:R,className:u(`${x}${t?` ${t}`:""}`)},M),n.createElement(m.Provider,{value:$.current},F["container-start"],n.createElement(w,{className:"swiper-wrapper"},F["wrapper-start"],G.virtual?function(e,r,t){if(!t)return null;let l=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`};return r.filter((e,r)=>r>=t.from&&r<=t.to).map(r=>n.cloneElement(r,{swiper:e,style:l}))}($.current,V,P):!G.loop||$.current&&$.current.destroyed?V.map(e=>n.cloneElement(e,{swiper:$.current})):function(e,r,t){let l=r.map((r,t)=>n.cloneElement(r,{swiper:e,"data-swiper-slide-index":t}));function i(e,r,l){return n.cloneElement(e,{key:`${e.key}-duplicate-${r}-${l}`,className:`${e.props.className||""} ${t.slideDuplicateClass}`})}if(t.loopFillGroupWithBlank){let a=t.slidesPerGroup-l.length%t.slidesPerGroup;if(a!==t.slidesPerGroup)for(let s=0;s<a;s+=1){let o=n.createElement("div",{className:`${t.slideClass} ${t.slideBlankClass}`});l.push(o)}}"auto"!==t.slidesPerView||t.loopedSlides||(t.loopedSlides=l.length);let c=p(l,t),u=[],d=[];for(let f=0;f<c;f+=1){let v=f-Math.floor(f/l.length)*l.length;d.push(i(l[v],f,"append")),u.unshift(i(l[l.length-v-1],f,"prepend"))}return e&&(e.loopedSlides=c),[...u,...l,...d]}($.current,V,G),F["wrapper-end"]),s(G)&&n.createElement(n.Fragment,null,n.createElement("div",{ref:D,className:"swiper-button-prev"}),n.createElement("div",{ref:Z,className:"swiper-button-next"})),c(G)&&n.createElement("div",{ref:T,className:"swiper-scrollbar"}),o(G)&&n.createElement("div",{ref:B,className:"swiper-pagination"}),F["container-end"]))});function E(){return(E=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}w.displayName="Swiper";let _=(0,n.forwardRef)(function(e,r){let{tag:t="div",children:l,className:i="",swiper:a,zoom:s,virtualIndex:o,...c}=void 0===e?{}:e,d=(0,n.useRef)(null),[p,f]=(0,n.useState)("swiper-slide");function v(e,r,t){r===d.current&&f(t)}h(()=>{if(r&&(r.current=d.current),d.current&&a){if(a.destroyed){"swiper-slide"!==p&&f("swiper-slide");return}return a.on("_slideClass",v),()=>{a&&a.off("_slideClass",v)}}}),h(()=>{a&&d.current&&!a.destroyed&&f(a.getSlideClasses(d.current))},[a]);let m={isActive:p.indexOf("swiper-slide-active")>=0||p.indexOf("swiper-slide-duplicate-active")>=0,isVisible:p.indexOf("swiper-slide-visible")>=0,isDuplicate:p.indexOf("swiper-slide-duplicate")>=0,isPrev:p.indexOf("swiper-slide-prev")>=0||p.indexOf("swiper-slide-duplicate-prev")>=0,isNext:p.indexOf("swiper-slide-next")>=0||p.indexOf("swiper-slide-duplicate-next")>=0},b=()=>"function"==typeof l?l(m):l;return n.createElement(t,E({ref:d,className:u(`${p}${i?` ${i}`:""}`),"data-swiper-slide-index":o},c),n.createElement(g.Provider,{value:m},s?n.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":"number"==typeof s?s:void 0},b()):b()))});_.displayName="SwiperSlide"},3220:function(e,r,t){t.d(r,{Rv:function(){return s.Z},W_:function(){return l.Z},ZP:function(){return n.Z},o3:function(){return a.Z},tl:function(){return i.Z},xW:function(){return o.Z}});var n=t(7172);t(5352),t(376),t(8372);var l=t(6739),i=t(9224);t(5652),t(1190),t(9790),t(8359),t(7031),t(2799),t(68),t(6237),t(9127);var a=t(8333),s=t(4806),o=t(1083);t(4278),t(2708),t(3007),t(6100),t(980)}}]);