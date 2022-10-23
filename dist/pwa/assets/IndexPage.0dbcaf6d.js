import{c as $e,k as mt,d as m,h as w,e as $t,g as Ne,v as Nt,z as Kt,H as Je,G as Qt,I as Be,V as Te,ah as Ae,$ as ue,a2 as wt,W as jt,a1 as ye,aC as Ze,aD as pt,aE as Ct,aF as Vt,u as Ut,P as Wt,a as Xt,R as Yt,t as Gt,M as we,S as Jt,aG as Zt,ad as ae,aH as el,r as A,w as J,p as G,aI as tl,aJ as ll,aK as nl,aL as ul,q as xt,aM as al,aN as ol,aO as St,aP as Fe,aQ as il,aR as rl,aq as Xe,aS as cl,aT as he,aU as gt,ap as sl,aV as dl,aW as fl,B as vl,_ as ml,aX as Sl,L as be,K as Ge,J as gl}from"./index.5afe2a78.js";import{c as hl,a as yl,b as bl,Q as wl}from"./QItemLabel.e9c787d8.js";var pl=$e({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:r}){const{proxy:{$q:a}}=Ne(),d=mt(Nt);mt(Kt,()=>{console.error("QPage needs to be child of QPageContainer")});const x=m(()=>{const C=(d.header.space===!0?d.header.size:0)+(d.footer.space===!0?d.footer.size:0);if(typeof e.styleFn=="function"){const c=d.isContainer.value===!0?d.containerHeight.value:a.screen.height;return e.styleFn(C,c)}return{minHeight:d.isContainer.value===!0?d.containerHeight.value-C+"px":a.screen.height===0?C!==0?`calc(100vh - ${C}px)`:"100vh":a.screen.height-C+"px"}}),n=m(()=>`q-page ${e.padding===!0?" q-layout-padding":""}`);return()=>w("main",{class:n.value,style:x.value},$t(r.default))}});const Cl=Je({__name:"ExampleComponent",props:{title:null,todos:{default:()=>[]},meta:null,active:{type:Boolean}},setup(e){const r=e,a=Qt("click-count",0);function d(){var n;return(n=a.value)!=null||(a.value=0),a.value+=1,a.value}const x=m(()=>r.todos.length);return(n,C)=>(Be(),Te("div",null,[Ae("p",null,ue(e.title),1),Ae("ul",null,[(Be(!0),Te(wt,null,jt(e.todos,c=>(Be(),Te("li",{key:c.id,onClick:d},ue(c.id)+" - "+ue(c.content),1))),128))]),Ae("p",null,"Count: "+ue(ye(x))+" / "+ue(e.meta.totalCount),1),Ae("p",null,"Active: "+ue(e.active?"yes":"no"),1),Ae("p",null,"Clicks on todos: "+ue(ye(a)),1)]))}});var Vl=$e({name:"QField",inheritAttrs:!1,props:Ze,emits:pt,setup(){return Ct(Vt())}});const xl={xs:8,sm:10,md:14,lg:20,xl:24};var kl=$e({name:"QChip",props:{...Ut,...Wt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:a}){const{proxy:{$q:d}}=Ne(),x=Xt(e,d),n=Yt(e,xl),C=m(()=>e.selected===!0||e.icon!==void 0),c=m(()=>e.selected===!0?e.iconSelected||d.iconSet.chip.selected:e.icon),h=m(()=>e.iconRemove||d.iconSet.chip.remove),F=m(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),f=m(()=>{const V=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(V?` text-${V} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(F.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(x.value===!0?" q-chip--dark q-dark":"")}),_=m(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function z(V){V.keyCode===13&&b(V)}function b(V){e.disable||(a("update:selected",!e.selected),a("click",V))}function P(V){(V.keyCode===void 0||V.keyCode===13)&&(ae(V),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function E(){const V=[];F.value===!0&&V.push(w("div",{class:"q-focus-helper"})),C.value===!0&&V.push(w(we,{class:"q-chip__icon q-chip__icon--left",name:c.value}));const Q=e.label!==void 0?[w("div",{class:"ellipsis"},[e.label])]:void 0;return V.push(w("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Jt(r.default,Q))),e.iconRight&&V.push(w(we,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&V.push(w(we,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:h.value,..._.value,onClick:P,onKeyup:P})),V}return()=>{if(e.modelValue===!1)return;const V={class:f.value,style:n.value};return F.value===!0&&Object.assign(V,_.value,{onClick:b,onKeyup:z}),Gt("div",V,E(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Zt,e.ripple]])}}});let De=!1;{const e=document.createElement("div"),r=document.createElement("div");e.setAttribute("dir","rtl"),e.style.width="1px",e.style.height="1px",e.style.overflow="auto",r.style.width="1000px",r.style.height="1px",document.body.appendChild(e),e.appendChild(r),e.scrollLeft=-1e3,De=e.scrollLeft>=0,e.remove()}const K=1e3,_l=["start","center","end","start-force","center-force","end-force"],kt=Array.prototype.filter,ql=window.getComputedStyle(document.body).overflowAnchor===void 0?el:function(e,r){e!==null&&(cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;const a=e.children||[];kt.call(a,x=>x.dataset&&x.dataset.qVsAnchor!==void 0).forEach(x=>{delete x.dataset.qVsAnchor});const d=a[r];d&&d.dataset&&(d.dataset.qVsAnchor="")}))};function pe(e,r){return e+r}function Ye(e,r,a,d,x,n,C,c){const h=e===window?document.scrollingElement||document.documentElement:e,F=x===!0?"offsetWidth":"offsetHeight",f={scrollStart:0,scrollViewSize:-C-c,scrollMaxSize:0,offsetStart:-C,offsetEnd:-c};if(x===!0?(e===window?(f.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,f.scrollViewSize+=document.documentElement.clientWidth):(f.scrollStart=h.scrollLeft,f.scrollViewSize+=h.clientWidth),f.scrollMaxSize=h.scrollWidth,n===!0&&(f.scrollStart=(De===!0?f.scrollMaxSize-f.scrollViewSize:0)-f.scrollStart)):(e===window?(f.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,f.scrollViewSize+=document.documentElement.clientHeight):(f.scrollStart=h.scrollTop,f.scrollViewSize+=h.clientHeight),f.scrollMaxSize=h.scrollHeight),a!==null)for(let _=a.previousElementSibling;_!==null;_=_.previousElementSibling)_.classList.contains("q-virtual-scroll--skip")===!1&&(f.offsetStart+=_[F]);if(d!==null)for(let _=d.nextElementSibling;_!==null;_=_.nextElementSibling)_.classList.contains("q-virtual-scroll--skip")===!1&&(f.offsetEnd+=_[F]);if(r!==e){const _=h.getBoundingClientRect(),z=r.getBoundingClientRect();x===!0?(f.offsetStart+=z.left-_.left,f.offsetEnd-=z.width):(f.offsetStart+=z.top-_.top,f.offsetEnd-=z.height),e!==window&&(f.offsetStart+=f.scrollStart),f.offsetEnd+=f.scrollMaxSize-f.offsetStart}return f}function ht(e,r,a,d){r==="end"&&(r=(e===window?document.body:e)[a===!0?"scrollWidth":"scrollHeight"]),e===window?a===!0?(d===!0&&(r=(De===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):a===!0?(d===!0&&(r=(De===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function Me(e,r,a,d){if(a>=d)return 0;const x=r.length,n=Math.floor(a/K),C=Math.floor((d-1)/K)+1;let c=e.slice(n,C).reduce(pe,0);return a%K!==0&&(c-=r.slice(n*K,a).reduce(pe,0)),d%K!==0&&d!==x&&(c-=r.slice(d,C*K).reduce(pe,0)),c}const Il={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},zl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Il};function Al({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:a,virtualScrollItemSizeComputed:d}){const x=Ne(),{props:n,emit:C,proxy:c}=x,{$q:h}=c;let F,f,_,z=[],b;const P=A(0),E=A(0),V=A({}),Q=A(null),D=A(null),W=A(null),O=A({from:0,to:0}),B=m(()=>n.tableColspan!==void 0?n.tableColspan:100);d===void 0&&(d=m(()=>n.virtualScrollItemSize));const X=m(()=>d.value+";"+n.virtualScrollHorizontal),Ce=m(()=>X.value+";"+n.virtualScrollSliceRatioBefore+";"+n.virtualScrollSliceRatioAfter);J(Ce,()=>{Y()}),J(X,oe);function oe(){ee(f,!0)}function Ve(o){ee(o===void 0?f:o)}function Z(o,s){const S=r();if(S==null||S.nodeType===8)return;const I=Ye(S,a(),Q.value,D.value,n.virtualScrollHorizontal,h.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd);_!==I.scrollViewSize&&Y(I.scrollViewSize),ie(S,I,Math.min(e.value-1,Math.max(0,parseInt(o,10)||0)),0,_l.indexOf(s)>-1?s:f>-1&&o>f?"end":"start")}function j(){const o=r();if(o==null||o.nodeType===8)return;const s=Ye(o,a(),Q.value,D.value,n.virtualScrollHorizontal,h.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd),S=e.value-1,I=s.scrollMaxSize-s.offsetStart-s.offsetEnd-E.value;if(F===s.scrollStart)return;if(s.scrollMaxSize<=0){ie(o,s,0,0);return}_!==s.scrollViewSize&&Y(s.scrollViewSize),xe(O.value.from);const L=Math.floor(s.scrollMaxSize-Math.max(s.scrollViewSize,s.offsetEnd)-Math.min(b[S],s.scrollViewSize/2));if(L>0&&Math.ceil(s.scrollStart)>=L){ie(o,s,S,s.scrollMaxSize-s.offsetEnd-z.reduce(pe,0));return}let p=0,g=s.scrollStart-s.offsetStart,H=g;if(g<=I&&g+s.scrollViewSize>=P.value)g-=P.value,p=O.value.from,H=g;else for(let y=0;g>=z[y]&&p<S;y++)g-=z[y],p+=K;for(;g>0&&p<S;)g-=b[p],g>-s.scrollViewSize?(p++,H=g):H=b[p]+g;ie(o,s,p,H)}function ie(o,s,S,I,L){const p=typeof L=="string"&&L.indexOf("-force")>-1,g=p===!0?L.replace("-force",""):L,H=g!==void 0?g:"start";let y=Math.max(0,S-V.value[H]),$=y+V.value.total;$>e.value&&($=e.value,y=Math.max(0,$-V.value.total)),F=s.scrollStart;const te=y!==O.value.from||$!==O.value.to;if(te===!1&&g===void 0){_e(S);return}const{activeElement:qe}=document,U=W.value;te===!0&&U!==null&&U!==qe&&U.contains(qe)===!0&&(U.addEventListener("focusout",ke),setTimeout(()=>{U!==null&&U.removeEventListener("focusout",ke)})),ql(U,S-y);const Ee=g!==void 0?b.slice(y,S).reduce(pe,0):0;if(te===!0){const ce=$>=O.value.from&&y<=O.value.to?O.value.to:$;O.value={from:y,to:ce},P.value=Me(z,b,0,y),E.value=Me(z,b,$,e.value),requestAnimationFrame(()=>{O.value.to!==$&&F===s.scrollStart&&(O.value={from:O.value.from,to:$},E.value=Me(z,b,$,e.value))})}requestAnimationFrame(()=>{if(F!==s.scrollStart)return;te===!0&&xe(y);const ce=b.slice(y,S).reduce(pe,0),se=ce+s.offsetStart+P.value,Le=se+b[S];let Ie=se+I;if(g!==void 0){const N=ce-Ee,R=s.scrollStart+N;Ie=p!==!0&&R<se&&Le<R+s.scrollViewSize?R:g==="end"?Le-s.scrollViewSize:se-(g==="start"?0:Math.round((s.scrollViewSize-b[S])/2))}F=Ie,ht(o,Ie,n.virtualScrollHorizontal,h.lang.rtl),_e(S)})}function xe(o){const s=W.value;if(s){const S=kt.call(s.children,y=>y.classList&&y.classList.contains("q-virtual-scroll--skip")===!1),I=S.length,L=n.virtualScrollHorizontal===!0?y=>y.getBoundingClientRect().width:y=>y.offsetHeight;let p=o,g,H;for(let y=0;y<I;){for(g=L(S[y]),y++;y<I&&S[y].classList.contains("q-virtual-scroll--with-prev")===!0;)g+=L(S[y]),y++;H=g-b[p],H!==0&&(b[p]+=H,z[Math.floor(p/K)]+=H),p++}}}function ke(){W.value!==null&&W.value!==void 0&&W.value.focus()}function ee(o,s){const S=1*d.value;(s===!0||Array.isArray(b)===!1)&&(b=[]);const I=b.length;b.length=e.value;for(let p=e.value-1;p>=I;p--)b[p]=S;const L=Math.floor((e.value-1)/K);z=[];for(let p=0;p<=L;p++){let g=0;const H=Math.min((p+1)*K,e.value);for(let y=p*K;y<H;y++)g+=b[y];z.push(g)}f=-1,F=void 0,P.value=Me(z,b,0,O.value.from),E.value=Me(z,b,O.value.to,e.value),o>=0?(xe(O.value.from),G(()=>{Z(o)})):re()}function Y(o){if(o===void 0&&typeof window!="undefined"){const g=r();g!=null&&g.nodeType!==8&&(o=Ye(g,a(),Q.value,D.value,n.virtualScrollHorizontal,h.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd).scrollViewSize)}_=o;const s=parseFloat(n.virtualScrollSliceRatioBefore)||0,S=parseFloat(n.virtualScrollSliceRatioAfter)||0,I=1+s+S,L=o===void 0||o<=0?1:Math.ceil(o/d.value),p=Math.max(1,L,Math.ceil((n.virtualScrollSliceSize>0?n.virtualScrollSliceSize:10)/I));V.value={total:Math.ceil(p*I),start:Math.ceil(p*s),center:Math.ceil(p*(.5+s)),end:Math.ceil(p*(1+s)),view:L}}function Oe(o,s){const S=n.virtualScrollHorizontal===!0?"width":"height",I={["--q-virtual-scroll-item-"+S]:d.value+"px"};return[o==="tbody"?w(o,{class:"q-virtual-scroll__padding",key:"before",ref:Q},[w("tr",[w("td",{style:{[S]:`${P.value}px`,...I},colspan:B.value})])]):w(o,{class:"q-virtual-scroll__padding",key:"before",ref:Q,style:{[S]:`${P.value}px`,...I}}),w(o,{class:"q-virtual-scroll__content",key:"content",ref:W,tabindex:-1},s.flat()),o==="tbody"?w(o,{class:"q-virtual-scroll__padding",key:"after",ref:D},[w("tr",[w("td",{style:{[S]:`${E.value}px`,...I},colspan:B.value})])]):w(o,{class:"q-virtual-scroll__padding",key:"after",ref:D,style:{[S]:`${E.value}px`,...I}})]}function _e(o){f!==o&&(n.onVirtualScroll!==void 0&&C("virtual-scroll",{index:o,from:O.value.from,to:O.value.to-1,direction:o<f?"decrease":"increase",ref:c}),f=o)}Y();const re=tl(j,h.platform.is.ios===!0?120:35);ll(()=>{Y()});let i=!1;return nl(()=>{i=!0}),ul(()=>{if(i!==!0)return;const o=r();F!==void 0&&o!==void 0&&o!==null&&o.nodeType!==8?ht(o,F,n.virtualScrollHorizontal,h.lang.rtl):Z(f)}),xt(()=>{re.cancel()}),Object.assign(c,{scrollTo:Z,reset:oe,refresh:Ve}),{virtualScrollSliceRange:O,virtualScrollSliceSizeComputed:V,setVirtualScrollSize:Y,onVirtualScrollEvt:re,localResetVirtualScroll:ee,padVirtualScroll:Oe,scrollTo:Z,reset:oe,refresh:Ve}}const yt=e=>["add","add-unique","toggle"].includes(e),Fl=".*+?^${}()|[]\\",Ml=Object.keys(Ze);var bt=$e({name:"QSelect",inheritAttrs:!1,props:{...zl,...al,...Ze,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:yt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...pt,"add","remove","input-value","new-value","keyup","keypress","keydown","filter-abort"],setup(e,{slots:r,emit:a}){const{proxy:d}=Ne(),{$q:x}=d,n=A(!1),C=A(!1),c=A(-1),h=A(""),F=A(!1),f=A(!1);let _,z,b,P,E,V,Q,D,W;const O=A(null),B=A(null),X=A(null),Ce=A(null),oe=A(null),Ve=ol(e),Z=cl(ct),j=m(()=>Array.isArray(e.options)?e.options.length:0),ie=m(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:xe,virtualScrollSliceSizeComputed:ke,localResetVirtualScroll:ee,padVirtualScroll:Y,onVirtualScrollEvt:Oe,scrollTo:_e,setVirtualScrollSize:re}=Al({virtualScrollLength:j,getVirtualScrollTarget:zt,getVirtualScrollEl:it,virtualScrollItemSizeComputed:ie}),i=Vt(),o=m(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&z!==void 0?z:[],v=u.map(q=>It(q,l));return e.modelValue===null&&t===!0?v.filter(q=>q!==null):v}return u}),s=m(()=>{const t={};return Ml.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),S=m(()=>e.optionsDark===null?i.isDark.value:e.optionsDark),I=m(()=>St(o.value)),L=m(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),p=m(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),g=m(()=>j.value===0),H=m(()=>o.value.map(t=>R.value(t)).join(", ")),y=m(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),$=m(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(y.value))),te=m(()=>i.focused.value===!0?e.tabindex:-1),qe=m(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":n.value===!0?"true":"false","aria-owns":`${i.targetUid.value}_lb`,"aria-controls":`${i.targetUid.value}_lb`};return c.value>=0&&(t["aria-activedescendant"]=`${i.targetUid.value}_${c.value}`),t}),U=m(()=>{const t={id:`${i.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"};return c.value>=0&&(t["aria-activedescendant"]=`${i.targetUid.value}_${c.value}`),t}),Ee=m(()=>o.value.map((t,u)=>({index:u,opt:t,html:y.value(t),selected:!0,removeAtIndex:qt,toggleOption:le,tabindex:te.value}))),ce=m(()=>{if(j.value===0)return[];const{from:t,to:u}=xe.value;return e.options.slice(t,u).map((l,v)=>{const q=de.value(l)===!0,k=t+v,M={clickable:!0,active:!1,activeClass:Ie.value,manualFocus:!0,focused:!1,disable:q,tabindex:-1,dense:e.optionsDense,dark:S.value,role:"option",id:`${i.targetUid.value}_${k}`,onClick:()=>{le(l)}};return q!==!0&&(je(l)===!0&&(M.active=!0),c.value===k&&(M.focused=!0),M["aria-selected"]=M.active===!0?"true":"false",x.platform.is.desktop===!0&&(M.onMousemove=()=>{n.value===!0&&fe(k)})),{index:k,opt:l,html:y.value(l),label:R.value(l),selected:M.active,focused:M.focused,toggleOption:le,setOptionIndex:fe,itemProps:M}})}),se=m(()=>e.dropdownIcon!==void 0?e.dropdownIcon:x.iconSet.arrow.dropdown),Le=m(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ie=m(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),N=m(()=>Qe(e.optionValue,"value")),R=m(()=>Qe(e.optionLabel,"label")),de=m(()=>Qe(e.optionDisable,"disable")),Re=m(()=>o.value.map(t=>N.value(t))),_t=m(()=>{const t={onInput:ct,onChange:Z,onKeydown:ot,onKeyup:ut,onKeypress:at,onFocus:lt,onClick(u){b===!0&&he(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Z,t});J(o,t=>{z=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&i.innerLoading.value!==!0&&(C.value!==!0&&n.value!==!0||I.value!==!0)&&(P!==!0&&ge(),(C.value===!0||n.value===!0)&&ve(""))},{immediate:!0}),J(()=>e.fillInput,ge),J(n,Ue),J(j,Dt);function et(t){return e.emitValue===!0?N.value(t):t}function Ke(t){if(t>-1&&t<o.value.length)if(e.multiple===!0){const u=e.modelValue.slice();a("remove",{index:t,value:u.splice(t,1)[0]}),a("update:modelValue",u)}else a("update:modelValue",null)}function qt(t){Ke(t),i.focus()}function tt(t,u){const l=et(t);if(e.multiple!==!0){e.fillInput===!0&&ze(R.value(t),!0,!0),a("update:modelValue",l);return}if(o.value.length===0){a("add",{index:0,value:l}),a("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&je(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const v=e.modelValue.slice();a("add",{index:v.length,value:l}),v.push(l),a("update:modelValue",v)}function le(t,u){if(i.editable.value!==!0||t===void 0||de.value(t)===!0)return;const l=N.value(t);if(e.multiple!==!0){u!==!0&&(ze(e.fillInput===!0?R.value(t):"",!0,!0),ne()),B.value!==null&&B.value.focus(),(o.value.length===0||Fe(N.value(o.value[0]),l)!==!0)&&a("update:modelValue",e.emitValue===!0?l:t);return}if((b!==!0||F.value===!0)&&i.focus(),lt(),o.value.length===0){const k=e.emitValue===!0?l:t;a("add",{index:0,value:k}),a("update:modelValue",e.multiple===!0?[k]:k);return}const v=e.modelValue.slice(),q=Re.value.findIndex(k=>Fe(k,l));if(q>-1)a("remove",{index:q,value:v.splice(q,1)[0]});else{if(e.maxValues!==void 0&&v.length>=e.maxValues)return;const k=e.emitValue===!0?l:t;a("add",{index:v.length,value:k}),v.push(k)}a("update:modelValue",v)}function fe(t){if(x.platform.is.desktop!==!0)return;const u=t>-1&&t<j.value?t:-1;c.value!==u&&(c.value=u)}function He(t=1,u){if(n.value===!0){let l=c.value;do l=gt(l+t,-1,j.value-1);while(l!==-1&&l!==c.value&&de.value(e.options[l])===!0);c.value!==l&&(fe(l),_e(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Pe(l>=0?R.value(e.options[l]):V))}}function It(t,u){const l=v=>Fe(N.value(v),t);return e.options.find(l)||u.find(l)||t}function Qe(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:v=>v!==null&&typeof v=="object"&&l in v?v[l]:v}function je(t){const u=N.value(t);return Re.value.find(l=>Fe(l,u))!==void 0}function lt(t){e.useInput===!0&&B.value!==null&&(t===void 0||B.value===t.target&&t.target.value===H.value)&&B.value.select()}function nt(t){sl(t,27)===!0&&n.value===!0&&(he(t),ne(),ge()),a("keyup",t)}function ut(t){const{value:u}=t.target;if(t.keyCode!==void 0){nt(t);return}if(t.target.value="",clearTimeout(_),ge(),typeof u=="string"&&u.length>0){const l=u.toLocaleLowerCase(),v=k=>{const M=e.options.find(T=>k.value(T).toLocaleLowerCase()===l);return M===void 0?!1:(o.value.indexOf(M)===-1?le(M):ne(),!0)},q=k=>{v(N)!==!0&&(v(R)===!0||k===!0||ve(u,!0,()=>q(!0)))};q()}else i.clearValue(t)}function at(t){a("keypress",t)}function ot(t){if(a("keydown",t),dl(t)===!0)return;const u=h.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(c.value>-1||u===!0);if(t.keyCode===27){Xe(t);return}if(t.keyCode===9&&l===!1){me();return}if(t.target===void 0||t.target.id!==i.targetUid.value)return;if(t.keyCode===40&&i.innerLoading.value!==!0&&n.value===!1){ae(t),Se();return}if(t.keyCode===8&&e.hideSelected!==!0&&h.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Ke(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&a("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(ae(t),c.value=-1,He(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ke.value!==void 0&&(ae(t),c.value=Math.max(-1,Math.min(j.value,c.value+(t.keyCode===33?-1:1)*ke.value.view)),He(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ae(t),He(t.keyCode===38?-1:1,e.multiple));const v=j.value;if((D===void 0||W<Date.now())&&(D=""),v>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===t.ctrlKey&&(t.keyCode!==32||D.length>0)){n.value!==!0&&Se(t);const q=t.key.toLocaleLowerCase(),k=D.length===1&&D[0]===q;W=Date.now()+1500,k===!1&&(ae(t),D+=q);const M=new RegExp("^"+D.split("").map(We=>Fl.indexOf(We)>-1?"\\"+We:We).join(".*"),"i");let T=c.value;if(k===!0||T<0||M.test(R.value(e.options[T]))!==!0)do T=gt(T+1,-1,v-1);while(T!==c.value&&(de.value(e.options[T])===!0||M.test(R.value(e.options[T]))!==!0));c.value!==T&&G(()=>{fe(T),_e(T),T>=0&&e.useInput===!0&&e.fillInput===!0&&Pe(R.value(e.options[T]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||D!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&ae(t),c.value>-1&&c.value<v){le(e.options[c.value]);return}if(u===!0){const q=(k,M)=>{if(M){if(yt(M)!==!0)return}else M=e.newValueMode;if(k==null)return;ze("",e.multiple!==!0,!0),(M==="toggle"?le:tt)(k,M==="add-unique"),e.multiple!==!0&&(B.value!==null&&B.value.focus(),ne())};if(e.onNewValue!==void 0?a("new-value",h.value,q):q(h.value),e.multiple!==!0)return}n.value===!0?me():i.innerLoading.value!==!0&&Se()}}function it(){return b===!0?oe.value:X.value!==null&&X.value.__qPortalInnerRef.value!==null?X.value.__qPortalInnerRef.value:void 0}function zt(){return it()}function At(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?Ee.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?Ee.value.map((t,u)=>w(kl,{key:"option-"+u,removable:i.editable.value===!0&&de.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:te.value,onRemove(){t.removeAtIndex(u)}},()=>w("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:R.value(t.opt)}))):[w("span",{[$.value===!0?"innerHTML":"textContent"]:e.displayValue!==void 0?e.displayValue:H.value})]}function rt(){if(g.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:h.value}):void 0;const t=r.option!==void 0?r.option:l=>w(wl,{key:l.index,...l.itemProps},()=>w(yl,()=>w(bl,()=>w("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=Y("div",ce.value.map(t));return r["before-options"]!==void 0&&(u=r["before-options"]().concat(u)),vl(r["after-options"],u)}function Ft(t,u){const l=u===!0?{...qe.value,...i.splitAttrs.attributes.value}:void 0,v={ref:u===!0?B:void 0,key:"i_t",class:L.value,style:e.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...l,id:u===!0?i.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t!==!0&&e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,..._t.value};return t!==!0&&b===!0&&(Array.isArray(v.class)===!0?v.class=[...v.class,"no-pointer-events"]:v.class+=" no-pointer-events"),w("input",v)}function ct(t){clearTimeout(_),!(t&&t.target&&t.target.qComposing===!0)&&(Pe(t.target.value||""),P=!0,V=h.value,i.focused.value!==!0&&(b!==!0||F.value===!0)&&i.focus(),e.onFilter!==void 0&&(_=setTimeout(()=>{ve(h.value)},e.inputDebounce)))}function Pe(t){h.value!==t&&(h.value=t,a("input-value",t))}function ze(t,u,l){P=l!==!0,e.useInput===!0&&(Pe(t),(u===!0||l!==!0)&&(V=t),u!==!0&&ve(t))}function ve(t,u,l){if(e.onFilter===void 0||u!==!0&&i.focused.value!==!0)return;i.innerLoading.value===!0?a("filter-abort"):(i.innerLoading.value=!0,f.value=!0),t!==""&&e.multiple!==!0&&o.value.length>0&&P!==!0&&t===R.value(o.value[0])&&(t="");const v=setTimeout(()=>{n.value===!0&&(n.value=!1)},10);clearTimeout(E),E=v,a("filter",t,(q,k)=>{(u===!0||i.focused.value===!0)&&E===v&&(clearTimeout(E),typeof q=="function"&&q(),f.value=!1,G(()=>{i.innerLoading.value=!1,i.editable.value===!0&&(u===!0?n.value===!0&&ne():n.value===!0?Ue(!0):n.value=!0),typeof k=="function"&&G(()=>{k(d)}),typeof l=="function"&&G(()=>{l(d)})}))},()=>{i.focused.value===!0&&E===v&&(clearTimeout(E),i.innerLoading.value=!1,f.value=!1),n.value===!0&&(n.value=!1)})}function Mt(){return w(hl,{ref:X,class:p.value,style:e.popupContentStyle,modelValue:n.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&g.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:S.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:Le.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...U.value,onScrollPassive:Oe,onBeforeShow:dt,onBeforeHide:Bt,onShow:Ot},rt)}function Bt(t){ft(t),me()}function Ot(){re()}function Et(t){he(t),B.value!==null&&B.value.focus(),F.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Lt(t){he(t),G(()=>{F.value=!1})}function Rt(){const t=[w(Vl,{class:`col-auto ${i.fieldClass.value}`,...s.value,for:i.targetUid.value,dark:S.value,square:!0,loading:f.value,itemAligned:!1,filled:!0,stackLabel:h.value.length>0,...i.splitAttrs.listeners.value,onFocus:Et,onBlur:Lt},{...r,rawControl:()=>i.getControl(!0),before:void 0,after:void 0})];return n.value===!0&&t.push(w("div",{ref:oe,class:p.value+" scroll",style:e.popupContentStyle,...U.value,onClick:Xe,onScrollPassive:Oe},rt())),w(fl,{ref:Ce,modelValue:C.value,position:e.useInput===!0?"top":void 0,transitionShow:Q,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:dt,onBeforeHide:Ht,onHide:Pt,onShow:Tt},()=>w("div",{class:"q-select__dialog"+(S.value===!0?" q-select__dialog--dark q-dark":"")+(F.value===!0?" q-select__dialog--focused":"")},t))}function Ht(t){ft(t),Ce.value!==null&&Ce.value.__updateRefocusTarget(i.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),i.focused.value=!1}function Pt(t){ne(),i.focused.value===!1&&a("blur",t),ge()}function Tt(){const t=document.activeElement;(t===null||t.id!==i.targetUid.value)&&B.value!==null&&B.value!==t&&B.value.focus(),re()}function me(){C.value!==!0&&(c.value=-1,n.value===!0&&(n.value=!1),i.focused.value===!1&&(clearTimeout(E),E=void 0,i.innerLoading.value===!0&&(a("filter-abort"),i.innerLoading.value=!1,f.value=!1)))}function Se(t){i.editable.value===!0&&(b===!0?(i.onControlFocusin(t),C.value=!0,G(()=>{i.focus()})):i.focus(),e.onFilter!==void 0?ve(h.value):(g.value!==!0||r["no-option"]!==void 0)&&(n.value=!0))}function ne(){C.value=!1,me()}function ge(){e.useInput===!0&&ze(e.multiple!==!0&&e.fillInput===!0&&o.value.length>0&&R.value(o.value[0])||"",!0,!0)}function Ue(t){let u=-1;if(t===!0){if(o.value.length>0){const l=N.value(o.value[0]);u=e.options.findIndex(v=>Fe(N.value(v),l))}ee(u)}fe(u)}function Dt(t,u){n.value===!0&&i.innerLoading.value===!1&&(ee(-1,!0),G(()=>{n.value===!0&&i.innerLoading.value===!1&&(t>u?ee():Ue(!0))}))}function st(){C.value===!1&&X.value!==null&&X.value.updatePosition()}function dt(t){t!==void 0&&he(t),a("popup-show",t),i.hasPopupOpen=!0,i.onControlFocusin(t)}function ft(t){t!==void 0&&he(t),a("popup-hide",t),i.hasPopupOpen=!1,i.onControlFocusout(t)}function vt(){b=x.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||g.value===!1:!0),Q=x.platform.is.ios===!0&&b===!0&&e.useInput===!0?"fade":e.transitionShow}return il(vt),rl(st),vt(),xt(()=>{clearTimeout(_)}),Object.assign(d,{showPopup:Se,hidePopup:ne,removeAtIndex:Ke,add:tt,toggleOption:le,getOptionIndex:()=>c.value,setOptionIndex:fe,moveOptionSelection:He,filter:ve,updateMenuPosition:st,updateInputValue:ze,isOptionSelected:je,getEmittingOptionValue:et,isOptionDisabled:(...t)=>de.value.apply(null,t)===!0,getOptionValue:(...t)=>N.value.apply(null,t),getOptionLabel:(...t)=>R.value.apply(null,t)}),Object.assign(i,{innerValue:o,fieldClass:m(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:O,targetRef:B,hasValue:I,showPopup:Se,floatingLabel:m(()=>e.hideSelected!==!0&&I.value===!0||h.value.length>0||St(e.displayValue)),getControlChild:()=>{if(i.editable.value!==!1&&(C.value===!0||g.value!==!0||r["no-option"]!==void 0))return b===!0?Rt():Mt();i.hasPopupOpen===!0&&(i.hasPopupOpen=!1)},controlEvents:{onFocusin(t){i.onControlFocusin(t)},onFocusout(t){i.onControlFocusout(t,()=>{ge(),me()})},onClick(t){if(Xe(t),b!==!0&&n.value===!0){me(),B.value!==null&&B.value.focus();return}Se(t)}},getControl:t=>{const u=At(),l=t===!0||C.value!==!0||b!==!0;if(e.useInput===!0)u.push(Ft(t,l));else if(i.editable.value===!0){const q=l===!0?qe.value:void 0;u.push(w("input",{ref:l===!0?B:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?i.targetUid.value:void 0,readonly:!0,"data-autofocus":t!==!0&&e.autofocus===!0||void 0,...q,onKeydown:ot,onKeyup:nt,onKeypress:at})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&u.push(w("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,onKeyup:ut}))}if(Ve.value!==void 0&&e.disable!==!0&&Re.value.length>0){const q=Re.value.map(k=>w("option",{value:k,selected:!0}));u.push(w("select",{class:"hidden",name:Ve.value,multiple:e.multiple},q))}const v=e.useInput===!0||l!==!0?void 0:i.splitAttrs.attributes.value;return w("div",{class:"q-field__native row items-center",...v},u)},getInnerAppend:()=>e.loading!==!0&&f.value!==!0&&e.hideDropdownIcon!==!0?[w(we,{class:"q-select__dropdown-icon"+(n.value===!0?" rotate-180":""),name:se.value})]:null}),Ct(i)}});const Bl=Je({__name:"AudioSourceSelectors",setup(e){const{videoInputs:r,audioInputs:a,ensurePermissions:d}=Sl(),x=A(),n=A();return J(r,C=>{x.value=C.find(c=>c.deviceId==="default")}),J(a,C=>{n.value=C.find(c=>c.deviceId==="default")}),(C,c)=>(Be(),Te(wt,null,[be(bt,{class:"single-line-value-select",modelValue:x.value,"onUpdate:modelValue":c[0]||(c[0]=h=>x.value=h),options:ye(r),optionLabel:"label",optionValue:"deviceId",label:"Videocam",onFocus:ye(d)},{prepend:Ge(()=>[be(we,{name:"videocam"})]),_:1},8,["modelValue","options","onFocus"]),be(bt,{class:"single-line-value-select",modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=h=>n.value=h),options:ye(a),optionLabel:"label",optionValue:"deviceId",label:"Microphone",onFocus:ye(d)},{prepend:Ge(()=>[be(we,{name:"mic"})]),_:1},8,["modelValue","options","onFocus"])],64))}});var Ol=ml(Bl,[["__scopeId","data-v-19b61716"]]);const Rl=Je({__name:"IndexPage",setup(e){const r=A([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),a=A({totalCount:1200});return(d,x)=>(Be(),gl(pl,{class:"row items-center justify-evenly"},{default:Ge(()=>[be(Ol),be(Cl,{title:"Example component",active:"",todos:r.value,meta:a.value},null,8,["todos","meta"])]),_:1}))}});export{Rl as default};
