import{m as f,u as b}from"./tag-80512e37.js";import{F as _,I as g}from"./transition-455a1c42.js";import{p as R,g as S,c,e as y,W as I}from"./index-9652806f.js";function V(e){return{aspectStyles:y(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const C=R({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...f(),..._()},"VResponsive"),k=S()({name:"VResponsive",props:C(),setup(e,s){let{slots:n}=s;const{aspectStyles:t}=V(e),{dimensionStyles:o}=g(e);return b(()=>{var i;return c("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[o.value,e.style]},[c("div",{class:"v-responsive__sizer",style:t.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&c("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function N(e,s){if(!I)return;const n=s.modifiers||{},t=s.value,{handler:o,options:i}=typeof t=="object"?t:{handler:t,options:{}},u=new IntersectionObserver(function(){var m;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const r=(m=e._observe)==null?void 0:m[s.instance.$.uid];if(!r)return;const a=v.some(p=>p.isIntersecting);o&&(!n.quiet||r.init)&&(!n.once||a||r.init)&&o(a,v,d),a&&n.once?l(e,s):r.init=!0},i);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:u},u.observe(e)}function l(e,s){var t;const n=(t=e._observe)==null?void 0:t[s.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const P={mounted:N,unmounted:l},T=P;export{k as V,T as i,C as m};