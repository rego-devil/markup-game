var tns=function(){var t=window,wi=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Ci=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Mi(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function Ai(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Ti(t,e,n,i){return i&&t.setItem(e,n),n}function ki(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Ei(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Li(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Ni(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Di(t){return("insertRule"in t?t.cssRules:t.rules).length}function Ii(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Bi=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Oi=i?function(t,e){Bi(t,e)||t.classList.add(e)}:function(t,e){Bi(t,e)||(t.className+=" "+e)},Si=i?function(t,e){Bi(t,e)&&t.classList.remove(e)}:function(t,e){Bi(t,e)&&(t.className=t.className.replace(e,""))};function Hi(t,e){return t.hasAttribute(e)}function r(t){return void 0!==t.item}function Pi(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Ri(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Wi(t){Hi(t,"hidden")||Pi(t,{hidden:""})}function zi(t){Hi(t,"hidden")&&Ri(t,"hidden")}function qi(t){return 0<t.offsetWidth&&0<t.offsetHeight}function ji(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function Fi(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var s=!!a&&{passive:!0};function Qi(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&s;t.addEventListener(n,e[n],i)}}function Vi(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&s;t.removeEventListener(n,e[n],i)}}function Xi(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var Yi=function(h){h=Mi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},h||{});var D=document,p=window,s=13,u=32,l=33,c=34,f=35,d=36,v=37,m=38,y=39,g=40,e={},n=h.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=p.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}for(var a,r,o,x,b,w,C,M=e.tC?Ai(e.tC):Ti(e,"tC",function(){var t=document,e=ki(),n=Ei(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],u=0;u<3;u++)if(r=s[u],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?Li(e,n):i.remove(),a}(),n),A=e.tPL?Ai(e.tPL):Ti(e,"tPL",function(){var t,e=document,n=ki(),i=Ei(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?Li(n,i):a.remove(),t}(),n),I=e.tMQ?Ai(e.tMQ):Ti(e,"tMQ",(r=document,o=ki(),x=Ei(o),b=r.createElement("div"),w=r.createElement("style"),C="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",w.type="text/css",b.className="tns-mq-test",o.appendChild(w),o.appendChild(b),w.styleSheet?w.styleSheet.cssText=C:w.appendChild(r.createTextNode(C)),a=window.getComputedStyle?window.getComputedStyle(b).position:b.currentStyle.position,o.fake?Li(o,x):b.remove(),"absolute"===a),n),T=e.tTf?Ai(e.tTf):Ti(e,"tTf",ji("transform"),n),k=e.t3D?Ai(e.t3D):Ti(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=ki(),a=Ei(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?Li(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(T),n),E=e.tTDu?Ai(e.tTDu):Ti(e,"tTDu",ji("transitionDuration"),n),L=e.tTDe?Ai(e.tTDe):Ti(e,"tTDe",ji("transitionDelay"),n),N=e.tADu?Ai(e.tADu):Ti(e,"tADu",ji("animationDuration"),n),B=e.tADe?Ai(e.tADe):Ti(e,"tADe",ji("animationDelay"),n),O=e.tTE?Ai(e.tTE):Ti(e,"tTE",Fi(E,"Transition"),n),S=e.tAE?Ai(e.tAE):Ti(e,"tAE",Fi(N,"Animation"),n),H=p.console&&"function"==typeof p.console.warn,P=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],R={},W=P.length;W--;){var z=P[W];if("string"==typeof h[z]){var q=h[z],j=D.querySelector(q);if(R[z]=q,!j||!j.nodeName)return void(H&&console.warn("Can't find",h[z]));h[z]=j}}if(!(h.container.children.length<1)){var F=h.responsive,Q=h.nested,V="carousel"===h.mode;if(F){0 in F&&(h=Mi(h,F[0]),delete F[0]);var X={};for(var Y in F){var K=F[Y];K="number"==typeof K?{items:K}:K,X[Y]=K}F=X,X=null}if(V&&"outer"!==Q||function t(e){for(var n in e)V||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1)),"outer"===Q&&"autoHeight"===n&&(e[n]=!0),"responsive"===n&&t(e[n])}(h),!V){h.axis="horizontal",h.slideBy="page",h.edgePadding=!1;var U=h.animateIn,G=h.animateOut,J=h.animateDelay,_=h.animateNormal}var Z,$,tt="horizontal"===h.axis,et=D.createElement("div"),nt=D.createElement("div"),it=h.container,at=it.parentNode,rt=it.outerHTML,ot=it.children,st=ot.length,ut=fn();F&&En();var lt,ct,ft,dt,vt,ht,pt,mt=h.autoWidth,yt=hn("fixedWidth"),gt=hn("edgePadding"),xt=hn("gutter"),bt=dn(),wt=mt?1:Math.floor(hn("items")),Ct=hn("slideBy"),Mt=h.viewportMax||h.fixedWidthViewportWidth,At=hn("arrowKeys"),Tt=hn("speed"),kt=h.rewind,Et=!kt&&h.loop,Lt=hn("autoHeight"),Nt=(pt=document.createElement("style"),ht&&pt.setAttribute("media",ht),document.querySelector("head").appendChild(pt),pt.sheet?pt.sheet:pt.styleSheet),Dt=h.lazyload,It=[],Bt=Et?(dt=function(){{if(mt||yt&&!Mt)return st-1;var t=yt?"fixedWidth":"items",e=[];if((yt||h[t]<st)&&e.push(h[t]),F)for(var n in F){var i=F[n][t];i&&(yt||i<st)&&e.push(i)}return e.length||e.push(0),Math.ceil(yt?Mt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),vt=V?Math.ceil((5*dt-st)/2):4*dt-st,vt=Math.max(dt,vt),vn("edgePadding")?vt+1:vt):0,Ot=V?st+2*Bt:st+Bt,St=!(!yt&&!mt||Et),Ht=yt?Kn():null,Pt=!V||!Et,Rt=tt?"left":"top",Wt="",zt="",qt=yt?function(){return Math.floor(-Ht/(yt+xt))+1}:mt?function(){for(var t=Ot,e=t-1;t--;)lt[t]>-Ht&&(e=t);return e}:function(){return Et||V?Math.max(0,Ot-Math.ceil(wt)):Ot-1},jt=ln(hn("startIndex")),Ft=jt,Qt=0,Vt=mt?null:qt(),Xt=h.swipeAngle,Yt=!Xt||"?",Kt=!1,Ut=h.onInit,Gt=new Xi,Jt=" tns-slider tns-"+h.mode,_t=it.id||(ft=window.tnsId,window.tnsId=ft?ft+1:1,"tns"+window.tnsId),Zt=hn("disable"),$t=!1,te=h.freezable,ee=!(!te||mt)&&kn(),ne=!1,ie={click:ni,keydown:function(t){switch((t=ci(t)).keyCode){case v:case m:case l:Te.disabled||ni(t,-1);break;case y:case g:case c:ke.disabled||ni(t,1);break;case d:ei("first",t);break;case f:ei("last",t)}}},ae={click:function(t){Kt&&ti();var e=(t=ci(t)).target||t.srcElement;for(;e!==Ne&&!Hi(e,"data-nav");)e=e.parentNode;Hi(e,"data-nav")&&ei(Oe=[].indexOf.call(Ee,e),t)},keydown:function(t){var e=D.activeElement;if(!Hi(e,"data-nav"))return;var n=(t=ci(t)).keyCode,i=[].indexOf.call(Ee,e),a=Ie.length,r=Ie.indexOf(i);h.navContainer&&(a=st,r=i);function o(t){return h.navContainer?t:Ie[t]}switch(n){case v:case l:0<r&&li(Ee[o(r-1)]);break;case m:case d:0<r&&li(Ee[o(0)]);break;case y:case c:r<a-1&&li(Ee[o(r+1)]);break;case g:case f:r<a-1&&li(Ee[o(a-1)]);break;case s:case u:ei(Oe=i,t)}}},re={mouseover:function(){We&&(ai(),ze=!0)},mouseout:function(){ze&&(ii(),ze=!1)}},oe={visibilitychange:function(){D.hidden?We&&(ai(),je=!0):je&&(ii(),je=!1)}},se={keydown:function(t){switch((t=ci(t)).keyCode){case v:ni(t,-1);break;case y:ni(t,1)}}},ue={touchstart:hi,touchmove:pi,touchend:yi,touchcancel:yi},le={mousedown:hi,mousemove:pi,mouseup:yi,mouseleave:yi},ce=vn("controls"),fe=vn("nav"),de=!!mt||h.navAsThumbnails,ve=vn("autoplay"),he=vn("touch"),pe=vn("mouseDrag"),me="tns-slide-active",ye="tns-complete",ge={load:On,error:On};if(ce)var xe,be,we=hn("controls"),Ce=hn("controlsText"),Me=h.controlsContainer,Ae=h.controlsContainer?h.controlsContainer.outerHTML:"",Te=h.prevButton,ke=h.nextButton;if(fe)var Ee,Le=hn("nav"),Ne=h.navContainer,De=h.navContainer?h.navContainer.outerHTML:"",Ie=[],Be=Ie,Oe=-1,Se=cn(),He=Se,Pe="tns-nav-active";if(ve)var Re,We,ze,qe,je,Fe=hn("autoplay"),Qe=hn("autoplayTimeout"),Ve="forward"===h.autoplayDirection?1:-1,Xe=hn("autoplayText"),Ye=hn("autoplayHoverPause"),Ke=h.autoplayButton,Ue=h.autoplayButton?h.autoplayButton.outerHTML:"",Ge=hn("autoplayResetOnVisibility"),Je=["<span class='tns-visually-hidden'>"," animation</span>"];if(he||pe)var _e,Ze={},$e={},tn=!1,en=0,nn=tt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};if(he)var an=hn("touch");if(pe)var rn=hn("mouseDrag");un(Zt||ee),T&&(Rt=T,Wt="translate",k?(Wt+=tt?"3d(":"3d(0px, ",zt=tt?", 0px, 0px)":", 0px)"):(Wt+=tt?"X(":"Y(",zt=")")),function(){!function(){vn("gutter");et.className="tns-outer",nt.className="tns-inner",nt.id=_t+"-iw",Lt&&(nt.className+=" tns-ah");""===it.id&&(it.id=_t);Jt+=A||mt?" tns-subpixel":" tns-no-subpixel",Jt+=M?" tns-calc":" tns-no-calc",V&&(Jt+=" tns-"+h.axis);if(it.className+=Jt,V){var t=D.createElement("div");t.className="tns-ovh",et.appendChild(t),t.appendChild(nt)}else et.appendChild(nt);at.insertBefore(et,it),nt.appendChild(it)}();for(var t=0;t<st;t++){var e=ot[t];e.id||(e.id=_t+"-item"+t),Oi(e,"tns-item"),!V&&_&&Oi(e,_),Pi(e,{"aria-hidden":"true",tabindex:"-1"})}if(Bt){for(var n=D.createDocumentFragment(),i=D.createDocumentFragment(),a=Bt;a--;){var r=a%st,o=ot[r].cloneNode(!0);if(Ri(o,"id"),i.insertBefore(o,i.firstChild),V){var s=ot[st-1-r].cloneNode(!0);Ri(s,"id"),n.appendChild(s)}}it.insertBefore(n,it.firstChild),it.appendChild(i),ot=it.children}(function(){for(var t=jt,e=jt+Math.min(st,wt);t<e;t++){var n=ot[t];Pi(n,{"aria-hidden":"false"}),Ri(n,["tabindex"]),Oi(n,me),V||(n.style.left=100*(t-jt)/wt+"%",Oi(n,U),Si(n,_))}if(V&&tt&&(A||mt?(Ni(Nt,"#"+_t+" > .tns-item","font-size:"+p.getComputedStyle(ot[0]).fontSize+";",Di(Nt)),Ni(Nt,"#"+_t,"font-size:0;",Di(Nt))):Ii(ot,function(t,e){var n;t.style.marginLeft=(n=e,M?M+"("+100*n+"% / "+Ot+")":100*n/Ot+"%")})),I){var i=pn(h.edgePadding,h.gutter,h.fixedWidth,h.speed);Ni(Nt,"#"+_t+"-iw",i,Di(Nt)),V&&(i=tt&&!mt?"width:"+mn(h.fixedWidth,h.gutter,h.items)+";":"",E&&(i+=bn(Tt)),Ni(Nt,"#"+_t,i,Di(Nt))),i=tt&&!mt?yn(h.fixedWidth,h.gutter,h.items):"",h.gutter&&(i+=gn(h.gutter)),V||(E&&(i+=bn(Tt)),N&&(i+=wn(Tt))),i&&Ni(Nt,"#"+_t+" > .tns-item",i,Di(Nt))}else{nt.style.cssText=pn(gt,xt,yt),V&&tt&&!mt&&(it.style.width=mn(yt,xt,wt));var i=tt&&!mt?yn(yt,xt,wt):"";xt&&(i+=gn(xt)),i&&Ni(Nt,"#"+_t+" > .tns-item",i,Di(Nt))}if(F&&I)for(var a in F){a=parseInt(a);var r=F[a],i="",o="",s="",u="",l=mt?null:hn("items",a),c=hn("fixedWidth",a),f=hn("speed",a),d=hn("edgePadding",a),v=hn("gutter",a);("edgePadding"in r||"gutter"in r)&&(o="#"+_t+"-iw{"+pn(d,v,c,f)+"}"),V&&tt&&!mt&&("fixedWidth"in r||"items"in r||yt&&"gutter"in r)&&(s="width:"+mn(c,v,l)+";"),E&&"speed"in r&&(s+=bn(f)),s&&(s="#"+_t+"{"+s+"}"),("fixedWidth"in r||yt&&"gutter"in r||!V&&"items"in r)&&(u+=yn(c,v,l)),"gutter"in r&&(u+=gn(v)),!V&&"speed"in r&&(E&&(u+=bn(f)),N&&(u+=wn(f))),u&&(u="#"+_t+" > .tns-item{"+u+"}"),(i=o+s+u)&&Nt.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",Nt.cssRules.length)}})(),Cn(),mt||Mn();F&&En();if(V&&O){var u={};u[O]=ti,Qi(it,u)}an&&Qi(it,ue);rn&&Qi(it,le);At&&Qi(D,se);"inner"===Q?Gt.on("outerResized",function(){Tn(),Gt.emit("innerLoaded",bi())}):(F||yt||mt||!tt)&&Qi(p,{resize:An});"outer"===Q?Gt.on("innerLoaded",Hn):!Lt&&V||Zt||Hn();mt||Bn();Zt?In():ee&&Dn();Gt.on("indexChanged",Rn),"function"==typeof Ut&&Ut(bi());"inner"===Q&&Gt.emit("innerLoaded",bi());$=!0}();var on=Et?V?function(){var t=Qt,e=Vt;t+=Ct,e-=Ct,gt?(t+=1,e-=1):yt&&bt%(yt+xt)&&(e-=1),Bt&&(e<jt?jt-=st:jt<t&&(jt+=st))}:function(){if(Vt<jt)for(;Qt+st<=jt;)jt-=st;else if(jt<Qt)for(;jt<=Vt-st;)jt+=st}:function(){jt=Math.max(Qt,Math.min(Vt,jt))},sn=V?function(){var e,n,i,a,t,r,o,s,u,l,c;E||!Tt?(Jn(),Tt&&qi(it)||ti()):(e=it,n=Rt,i=Wt,a=zt,t=Un(),r=Tt,o=ti,s=Math.min(r,10),u=0<=t.indexOf("%")?"%":"px",t=t.replace(u,""),l=Number(e.style[n].replace(i,"").replace(a,"").replace(u,"")),c=(t-l)/r*s,setTimeout(function t(){r-=s,l+=c,e.style[n]=i+l+u+a,0<r?setTimeout(t,s):o()},s)),tt||gi()}:function(){It=[];var t={};t[O]=t[S]=ti,Vi(ot[Ft],t),Qi(ot[jt],t),_n(Ft,U,G,!0),_n(jt,_,U),O&&S&&Tt&&qi(it)||ti()};return{getInfo:bi,events:Gt,goTo:ei,play:function(){Fe&&!We&&(oi(),qe=!1)},pause:function(){We&&(si(),qe=!0)},isOn:$,updateSliderHeight:zn,refresh:Cn,destroy:function(){if(Nt.disabled=!0,Vi(p,{resize:An}),At&&Vi(D,se),Me&&Vi(Me,ie),Ae&&(Me.outerHTML=Ae),Ne&&Vi(Ne,ae),De&&(Ne.outerHTML=De),Vi(it,re),Vi(it,oe),Ke&&Vi(Ke,{click:ui}),Fe&&clearInterval(Re),Ue&&(Ke.outerHTML=Ue),V&&O){var t={};t[O]=ti,Vi(it,t)}an&&Vi(it,ue),rn&&Vi(it,le),et.outerHTML=rt,U=G=J=_=tt=et=nt=it=at=rt=ot=st=Z=ut=mt=yt=gt=xt=bt=wt=Ct=Mt=At=Tt=kt=Et=Lt=Nt=Dt=lt=It=Bt=Ot=St=Ht=Pt=Rt=Wt=zt=qt=jt=Ft=Qt=Vt=Xt=Yt=Kt=Ut=Gt=Jt=_t=Zt=$t=te=ee=ne=ie=ae=re=oe=se=ue=le=ce=fe=de=ve=he=pe=me=ye=ge=ct=we=Ce=Me=Ae=Te=ke=xe=be=Le=Ne=De=Ee=Ie=Be=Oe=Se=He=Pe=Fe=Qe=Ve=Xe=Ye=Ke=Ue=Ge=Je=Re=We=ze=qe=je=Ze=$e=_e=tn=en=nn=an=rn=null,this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=$=!1},rebuild:function(){return Yi(Mi(h,R))}}}function un(t){t&&(we=Le=an=rn=At=Fe=Ye=Ge=!1)}function ln(t){return t=t?Math.max(0,Math.min(Et?st-1:st-wt,t)):0,V?t+Bt:t}function cn(t){for(null==t&&(t=jt),V&&(t-=Bt);t<0;)t+=st;return Math.floor(t%st)}function fn(){return p.innerWidth||D.documentElement.clientWidth||D.body.clientWidth}function dn(){var t=function t(e){return e.clientWidth||t(e.parentNode)}(at);return gt?t-(2*gt-xt):t}function vn(t){if(h[t])return!0;if(F)for(var e in F)if(F[e][t])return!0;return!1}function hn(t,e){if(null==e&&(e=ut),"items"===t&&yt)return Math.floor(bt/(yt+xt))||1;var n=h[t];if(F)for(var i in F)e>=parseInt(i)&&t in F[i]&&(n=F[i][t]);return"slideBy"===t&&"page"===n&&(n=hn("items")),V||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function pn(t,e,n,i){var a="";if(t){var r=t;e&&(r-=e),a=tt?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var o="-"+e+"px";a="margin: 0 "+(tt?o+" 0 0":"0 "+o+" 0")+";"}return E&&i&&(a+=bn(i)),a}function mn(t,e,n){return t?(t+e)*Ot+"px":M?M+"("+100*Ot+"% / "+n+")":100*Ot/n+"%"}function yn(t,e,n){var i;if(t)i=t+e+"px";else{V||(n=Math.floor(n));var a=V?Ot:n;i=M?M+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==Q?i+";":i+" !important;"}function gn(t){var e="";!1!==t&&(e=(tt?"padding-":"margin-")+(tt?"right":"bottom")+": "+t+"px;");return e}function xn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function bn(t){return xn(E,18)+"transition-duration:"+t/1e3+"s;"}function wn(t){return xn(N,17)+"animation-duration:"+t/1e3+"s;"}function Cn(){if(vn("autoHeight")||!V||mt||!tt){var t=it.querySelectorAll("img");Ii(t,function(t){var e=t.src;e.indexOf("data:image")<0?(Qi(t,ge),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e):Oi(t,ye)}),wi(function(){Pn(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(t),function(){ct=!0,Zt||(tt&&!mt||(qn(),Bn(),mt?(Ht=Kn(),te&&(ee=kn()),Vt=qt(),ee&&(we=Le=an=rn=At=Fe=Ye=Ge=!1),Mn()):gi()),V&&Gn())})})}V&&tt&&!mt&&Gn()}function Mn(){if(ve){var t=Fe?"stop":"start";Ke?Pi(Ke,{"data-action":t}):h.autoplayButtonOutput&&(et.insertAdjacentHTML("afterbegin",'<button data-action="'+t+'" type="button">'+Je[0]+t+Je[1]+Xe[0]+"</button>"),Ke=et.querySelector("[data-action]")),Ke&&Qi(Ke,{click:ui}),Fe&&(oi(),Ye&&Qi(it,re),Ge&&Qi(it,oe))}if(fe){var e=V?Bt:0;if(Ne){Pi(Ne,{"aria-label":"Carousel Pagination"}),Ee=Ne.children;for(var n=0;n<st;n++){var i=Ee[n];i&&Pi(i,{"data-nav":n,tabindex:"-1","aria-selected":"false","aria-controls":ot[e+n].id})}}else{var a="",r=de?"":"hidden";for(n=0;n<st;n++)a+='<button data-nav="'+n+'" tabindex="-1" aria-selected="false" aria-controls="'+ot[e+n].id+'" '+r+' type="button"></button>';a='<div class="tns-nav" aria-label="Carousel Pagination">'+a+"</div>",et.insertAdjacentHTML("afterbegin",a),Ne=et.querySelector(".tns-nav"),Ee=Ne.children}if(xi(),E){var o=E.substring(0,E.length-18).toLowerCase(),s="transition: all "+Tt/1e3+"s";o&&(s="-"+o+"-"+s),Ni(Nt,"[aria-controls^="+_t+"-item]",s,Di(Nt))}Pi(Ee[Se],{tabindex:"0","aria-selected":"true"}),Oi(Ee[Se],Pe),Qi(Ne,ae)}ce&&(Me||Te&&ke?(Me&&(Te=Me.children[0],ke=Me.children[1],Pi(Me,{"aria-label":"Carousel Navigation",tabindex:"0"}),Pi(Me.children,{"aria-controls":_t,tabindex:"-1"})),Pi(Te,{"data-controls":"prev"}),Pi(ke,{"data-controls":"next"})):(et.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+_t+'" type="button">'+Ce[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+_t+'" type="button">'+Ce[1]+"</button></div>"),Me=et.querySelector(".tns-controls"),Te=Me.children[0],ke=Me.children[1]),xe=Fn(Te),be=Fn(ke),Xn(),Me?Qi(Me,ie):(Qi(Te,ie),Qi(ke,ie))),Ln()}function An(t){wi(function(){Tn(ci(t))})}function Tn(t){if($){"outer"===Q&&Gt.emit("outerResized",bi(t)),ut=fn();var e,n,i,a,r,o=yt,s=wt,u=Zt,l=ee,c=At,f=Lt,d=we,v=Ce,h=Le,p=an,m=rn,y=Fe,g=Ye,x=Ge,b=Xe,w=jt,C=Z,M=!1;if(!I)var A=xt,T=gt;if(yt=hn("fixedWidth"),gt=hn("edgePadding"),xt=hn("gutter"),Zt=hn("disable"),Ct=hn("slideBy"),Tt=hn("speed"),Lt=hn("autoHeight"),At=hn("arrowKeys"),we=hn("controls"),Ce=hn("controlsText"),Le=hn("nav"),an=hn("touch"),rn=hn("mouseDrag"),Fe=hn("autoplay"),Xe=hn("autoplayText"),Qe=hn("autoplayTimeout"),Ye=hn("autoplayHoverPause"),Ge=hn("autoplayResetOnVisibility"),un(Zt),F&&(En(),(e=C!==Z)&&Gt.emit("newBreakpointStart",bi(t))),bt=dn(),tt&&!mt||Zt||(qn(),tt||(gi(),M=!0)),(yt||mt)&&(Ht=Kn(),Vt=qt()),(e||yt)&&(i=(wt=hn("items"))!==s)&&(yt||mt||(Vt=qt()),on()),e&&(Zt!==u&&(Zt?In():function(){if(!$t)return;if(Nt.disabled=!1,it.className+=Jt,Gn(),Et)for(var t=Bt;t--;)V&&zi(ot[t]),zi(ot[Ot-t-1]);if(!V)for(var e=jt,n=jt+st;e<n;e++){var i=ot[e],a=e<jt+wt?U:_;i.style.left=100*(e-jt)/wt+"%",Oi(i,a)}Nn(),$t=!1}()),yt!==o&&(M=!0)),te&&(e||yt||mt)&&(ee=kn())!==l&&(ee?(Jn(Un(ln(0))),Dn()):(!function(){if(!ne)return;gt&&I&&(nt.style.margin="");if(Bt)for(var t="tns-transparent",e=Bt;e--;)V&&Si(ot[e],t),Si(ot[Ot-e-1],t);Nn(),ne=!1}(),M=!0)),un(Zt||ee),Fe||(Ye=Ge=!1),Lt!==f&&(Lt||(nt.style.height="")),At!==c&&(At?Qi(D,se):Vi(D,se)),we!==d&&(we?zi(Me):Wi(Me)),Ce!==v&&(Te.innerHTML=Ce[0],ke.innerHTML=Ce[1]),Le!==h&&(Le?(zi(Ne),xi()):Wi(Ne)),an!==p&&(an?Qi(it,ue):Vi(it,ue)),rn!==m&&(rn?Qi(it,le):Vi(it,le)),Fe!==y&&(Fe?(Ke&&zi(Ke),We||qe||oi()):(Ke&&Wi(Ke),We&&si())),Ke&&Xe!==b){var k=Fe?1:0,E=Ke.innerHTML,L=E.length-b[k].length;E.substring(L)===b[k]&&(Ke.innerHTML=E.substring(0,L)+Xe[k])}if(Ye!==g&&(Ye?Qi(it,re):Vi(it,re)),Ge!==x&&(Ge?Qi(D,oe):Vi(D,oe)),(n=jt!==w)&&(Gt.emit("indexChanged",bi()),M=!0),i&&(n||Rn(),V||function(){for(var t=jt+Math.min(st,wt),e=Ot;e--;){var n=ot[e];jt<=e&&e<t?(Oi(n,"tns-moving"),n.style.left=100*(e-jt)/wt+"%",Oi(n,U),Si(n,_)):n.style.left&&(n.style.left="",Oi(n,_),Si(n,U)),Si(n,G)}setTimeout(function(){Ii(ot,function(t){Si(t,"tns-moving")})},300)}()),!Zt&&!ee){if(!I&&e&&(gt===T&&xt===A||(nt.style.cssText=pn(gt,xt,yt)),tt)){V&&(it.style.width=mn(yt,xt,wt));var N=yn(yt,xt,wt)+gn(xt);r=Di(a=Nt)-1,"deleteRule"in a?a.deleteRule(r):a.removeRule(r),Ni(Nt,"#"+_t+" > .tns-item",N,Di(Nt))}!Lt&&V||Hn(),M&&(Gn(),Ft=jt)}e&&Gt.emit("newBreakpointEnd",bi(t))}}function kn(){return yt||mt?Et?(yt?(yt+xt)*st:lt[st])-xt<=bt:!Ht:st<=wt}function En(){for(var t in Z=0,F)(t=parseInt(t))<=ut&&(Z=t)}function Ln(){!Fe&&Ke&&Wi(Ke),!Le&&Ne&&Wi(Ne),!we&&Me&&Wi(Me)}function Nn(){Fe&&Ke&&zi(Ke),Le&&Ne&&zi(Ne),we&&Me&&zi(Me)}function Dn(){if(!ne){if(gt&&(nt.style.margin="0px"),Bt)for(var t="tns-transparent",e=Bt;e--;)V&&Oi(ot[e],t),Oi(ot[Ot-e-1],t);Ln(),ne=!0}}function In(){if(!$t){if(Nt.disabled=!0,it.className=it.className.replace(Jt.substring(1),""),Ri(it,["style"]),Et)for(var t=Bt;t--;)V&&Wi(ot[t]),Wi(ot[Ot-t-1]);if(tt&&V||Ri(nt,["style"]),!V)for(var e=jt,n=jt+st;e<n;e++){var i=ot[e];Ri(i,["style"]),Si(i,U),Si(i,_)}Ln(),$t=!0}}function Bn(){if(Dt&&!Zt){var t=jt;if(mt)for(var e=jt+1,n=e,i=lt[jt]+bt+gt-xt;lt[e]<i;)n=++e;else n=jt+wt;for(gt&&(t-=1,mt||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,Ot));t<n;t++)Ii(ot[t].querySelectorAll(".tns-lazy-img"),function(t){var e,n={};n[O]=function(t){t.stopPropagation()},Qi(t,n),Bi(t,"loaded")||(t.src=(e="data-src",t.getAttribute(e)),Oi(t,"loaded"))})}}function On(t){var e=fi(t);Oi(e,ye),Vi(e,ge)}function Sn(t,e){for(var n=[],i=t,a=Math.min(t+e,Ot);i<a;i++)Ii(ot[i].querySelectorAll("img"),function(t){n.push(t)});return n}function Hn(){var t=Lt?Sn(jt,wt):Sn(Bt,st);wi(function(){Pn(t,zn)})}function Pn(n,t){return ct?t():(n.forEach(function(t,e){Bi(t,ye)&&n.splice(e,1)}),n.length?void wi(function(){Pn(n,t)}):t())}function Rn(){Bn(),function(){for(var t=jt+Math.min(st,wt),e=Ot;e--;){var n=ot[e];jt<=e&&e<t?Hi(n,"tabindex")&&(Pi(n,{"aria-hidden":"false"}),Ri(n,["tabindex"]),Oi(n,me)):(Hi(n,"tabindex")||Pi(n,{"aria-hidden":"true",tabindex:"-1"}),Bi(n,me)&&Si(n,me))}}(),Xn(),xi(),function(){if(Le&&(Se=-1!==Oe?Oe:cn(),Oe=-1,Se!==He)){var t=Ee[He],e=Ee[Se];Pi(t,{tabindex:"-1","aria-selected":"false"}),Pi(e,{tabindex:"0","aria-selected":"true"}),Si(t,Pe),Oi(e,Pe),He=Se}}()}function Wn(t,e){for(var n=[],i=t,a=Math.min(t+e,Ot);i<a;i++)n.push(ot[i].offsetHeight);return Math.max.apply(null,n)}function zn(){var t=Lt?Wn(jt,wt):Wn(Bt,st);nt.style.height!==t&&(nt.style.height=t+"px")}function qn(){lt=[0];for(var t,e=tt?"left":"top",n=ot[0].getBoundingClientRect()[e],i=1;i<Ot;i++)t=ot[i].getBoundingClientRect()[e],lt.push(t-n)}function jn(t){return t.nodeName.toLowerCase()}function Fn(t){return"button"===jn(t)}function Qn(t){return"true"===t.getAttribute("aria-disabled")}function Vn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Xn(){if(we&&!kt&&!Et){var t=xe?Te.disabled:Qn(Te),e=be?ke.disabled:Qn(ke),n=jt<=Qt,i=!kt&&Vt<=jt;n&&!t&&Vn(xe,Te,!0),!n&&t&&Vn(xe,Te,!1),i&&!e&&Vn(be,ke,!0),!i&&e&&Vn(be,ke,!1)}}function Yn(t,e){E&&(t.style[E]=e)}function Kn(){var t=bt-((yt?(yt+xt)*Ot:lt[Ot-1]+ot[Ot-1].getBoundingClientRect().width)-xt);return gt&&(t+=gt-xt),0<t&&(t=0),t}function Un(t){var e;(null==t&&(t=jt),tt&&!mt)?e=yt?-(yt+xt)*t:100*-t/(T?Ot:wt):e=-lt[t];return St&&(e=Math.max(e,Ht)),e+=!tt||mt||yt?"px":"%"}function Gn(t){Yn(it,"0s"),Jn(t),setTimeout(function(){Yn(it,"")},10)}function Jn(t){null==t&&(t=Un()),it.style[Rt]=Wt+t+zt}function _n(t,e,n,i){var a=t+wt;Et||(a=Math.min(a,Ot));for(var r=t;r<a;r++){var o=ot[r];i||(o.style.left=100*(r-jt)/wt+"%"),J&&L&&(o.style[L]=o.style[B]=J*(r-t)/1e3+"s"),Si(o,e),Oi(o,n),i&&It.push(o)}}function Zn(t,e){Pt&&on(),(jt!==Ft||e)&&(Gt.emit("indexChanged",bi()),Gt.emit("transitionStart",bi()),Lt&&Hn(),We&&t&&0<=["click","keydown"].indexOf(t.type)&&si(),Kt=!0,sn())}function $n(t){return t.toLowerCase().replace(/-/g,"")}function ti(t){if(V||Kt){if(Gt.emit("transitionEnd",bi(t)),!V&&0<It.length)for(var e=0;e<It.length;e++){var n=It[e];n.style.left="",B&&L&&(n.style[B]="",n.style[L]=""),Si(n,G),Oi(n,_)}if(!t||!V&&t.target.parentNode===it||t.target===it&&$n(t.propertyName)===$n(Rt)){if(!Pt){var i=jt;on(),jt!==i&&(Gt.emit("indexChanged",bi()),Gn())}"inner"===Q&&Gt.emit("innerLoaded",bi()),Kt=!1,Ft=jt}}}function ei(t,e){if(!ee)if("prev"===t)ni(e,-1);else if("next"===t)ni(e,1);else{Kt&&ti();var n=cn(),i=0;if("first"===t?i=-n:"last"===t?i=V?st-wt-n:st-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(st-1,t))),i=t-n)),!V&&i&&Math.abs(i)<wt){var a=0<i?1:-1;i+=Qt<=jt+i-st?st*a:2*st*a*-1}jt+=i,V&&Et&&(jt<Qt&&(jt+=st),Vt<jt&&(jt-=st)),cn(jt)!==cn(Ft)&&Zn(e)}}function ni(t,e){var n;if(Kt&&ti(),!e){for(var i=(t=ci(t)).target||t.srcElement;i!==Me&&[Te,ke].indexOf(i)<0;)i=i.parentNode;var a=[Te,ke].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(kt){if(jt===Qt&&-1===e)return void ei("last",t);if(jt===Vt&&1===e)return void ei("first",t)}e&&(jt+=Ct*e,mt&&(jt=Math.floor(jt)),Zn(n||t&&"keydown"===t.type?t:null))}function ii(){Re=setInterval(function(){ni(null,Ve)},Qe),We=!0}function ai(){clearInterval(Re),We=!1}function ri(t,e){Pi(Ke,{"data-action":t}),Ke.innerHTML=Je[0]+t+Je[1]+e}function oi(){ii(),Ke&&ri("stop",Xe[1])}function si(){ai(),Ke&&ri("start",Xe[0])}function ui(){We?(si(),qe=!0):(oi(),qe=!1)}function li(t){t.focus()}function ci(t){return di(t=t||p.event)?t.changedTouches[0]:t}function fi(t){return t.target||p.event.srcElement}function di(t){return 0<=t.type.indexOf("touch")}function vi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function hi(t){Kt&&ti(),tn=!0,V&&(Ci(en),en=0);var e=ci(t);Gt.emit(di(t)?"touchStart":"dragStart",bi(t)),!di(t)&&0<=["img","a"].indexOf(jn(fi(t)))&&vi(t),$e.x=Ze.x=parseInt(e.clientX),$e.y=Ze.y=parseInt(e.clientY),V&&(_e=parseFloat(it.style[Rt].replace(Wt,"").replace(zt,"")),Yn(it,"0s"))}function pi(t){if(tn){var e=ci(t);$e.x=parseInt(e.clientX),$e.y=parseInt(e.clientY),V&&!en&&(en=wi(function(){!function t(e){if(!Yt)return void(tn=!1);Ci(en);tn&&(en=wi(function(){t(e)}));mi();if(Yt){try{e.type&&Gt.emit(di(e)?"touchMove":"dragMove",bi(e))}catch(t){}var n=_e,i=nn($e,Ze);if(!tt||yt||mt)n+=i,n+="px";else{var a=T?i*wt*100/(bt*Ot):100*i/bt;n+=a,n+="%"}it.style[Rt]=Wt+n+zt}}(t)}))}}function mi(){var t,e,n,i,a,r;"?"===Yt&&$e.x!==Ze.x&&$e.y!==Ze.y&&(a=$e.y-Ze.y,r=$e.x-Ze.x,t=Math.atan2(a,r)*(180/Math.PI),e=Xt,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),Yt=n===h.axis)}function yi(i){if(tn){V&&(Ci(en),Yn(it,"")),tn=!1;var t=ci(i);$e.x=parseInt(t.clientX),$e.y=parseInt(t.clientY);var a=nn($e,Ze);if(5<=Math.abs(a)){if(!di(i)){var n=fi(i);Qi(n,{click:function t(e){vi(e),Vi(n,{click:t})}})}V?en=wi(function(){if(tt&&!mt){var t=-a*wt/bt;t=0<a?Math.floor(t):Math.ceil(t),jt+=t}else{var e=-(_e+a);if(e<=0)jt=Qt;else if(e>=lt[lt.length-1])jt=Vt;else for(var n=0;n<Ot&&e>=lt[n];)e>lt[jt=n]&&a<0&&(jt+=1),n++}Zn(i,a),Gt.emit(di(i)?"touchEnd":"dragEnd",bi(i))}):(mi(),Yt&&ni(i,0<a?-1:1))}}Xt&&(Yt="?")}function gi(){nt.style.height=lt[jt+wt]-lt[jt]+"px"}function xi(){Le&&!de&&(!function(){Ie=[];for(var t=cn()%wt;t<st;)V&&!Et&&st<t+wt&&(t=st-wt),Ie.push(t),t+=wt;(Et&&Ie.length*wt<st||!Et&&0<Ie[0])&&Ie.unshift(0)}(),Ie!==Be&&(Ii(Ee,function(t,e){Ie.indexOf(e)<0?Wi(t):zi(t)}),Be=Ie))}function bi(t){return{container:it,slideItems:ot,navContainer:Ne,navItems:Ee,controlsContainer:Me,hasControls:ce,prevButton:Te,nextButton:ke,items:wt,slideBy:Ct,cloneCount:Bt,slideCount:st,slideCountNew:Ot,index:jt,indexCached:Ft,navCurrentIndex:Se,navCurrentIndexCached:He,visibleNavIndexes:Ie,visibleNavIndexesCached:Be,sheet:Nt,event:t||{}}}H&&console.warn("No slides found in",h.container)};return Yi}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map