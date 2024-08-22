import{f as W,h as H,H as J,G as Q,o as f,a2 as _,p as K,I as X,m as Y,g as Z,d as ee,e as V,b as te,t as le,l as ae,c as n,y as se,a0 as oe,a1 as D,r as ne,a as x,w as u,P as re,U as c,T as U,a4 as p,S as v,a3 as C,F as S,a9 as ie,aa as ce}from"./index-9652806f.js";import{_ as T,c as de,V as ue,a as pe,b as fe,d as me}from"./VWindowItem-32773c59.js";import{i as ve,F as ye,r as _e,y as he,G as ge,c as be,B as xe,C as ke,j as we,I as Ve,v as Ce,z as Se,J as Pe,d as Ie,f as Be,E as Ae,a as De,w as E,o as k,p as Ue,l as y,k as F}from"./transition-455a1c42.js";import{m as Ee,a as Fe}from"./tag-80512e37.js";import"./ssrBoot-faf6fc13.js";const Te={__name:"IFrame",props:{url:{type:Object},parse:{type:Boolean,default(){return!1}},do:{type:String,default(){return null}}},setup(e){const a=e,i=W();let t=null;H(()=>a.url,()=>{t&&(t.destroy(),t=null);const r=i.value.childNodes;for(let s=r.length-1;s>=0;s--)i.value.removeChild(r[s]);if(a.url)if(a.parse){const s={};if(Array.isArray(a.url)){Object.assign(s,{quality:[],defaultQuality:0});for(let o=0;o<a.url.length;o+=2){let d;if(a.do){const m=new URLSearchParams;m.append("do",a.do),m.append("url",a.url[o+1]),d=`/api/proxy?${m.toString()}`}else d=a.url[o+1];s.quality.push({name:a.url[o],url:d})}}else if(a.do){const o=new URLSearchParams;o.append("do",a.do),o.append("url",a.url),s.url=`/api/proxy?${o.toString()}`}else s.url=a.url;t=new window.DPlayer({container:i.value,loop:!1,autoplay:!0,theme:"#b7daff",airplay:!0,video:s})}else{const s=document.createElement("iframe");s.setAttribute("allowfullscreen",""),s.setAttribute("src",a.url),s.style.width="100%",s.style.height="100%",s.style.border="none",s.style.display="block",i.value.appendChild(s)}});function l(r){return new Promise((s,o)=>{const d=document.createElement("script");d.src=r,d.onload=s,d.onerror=o,document.head.appendChild(d)})}return J(async()=>{try{window.DPlayer||await l("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/dplayer/1.26.0/DPlayer.min.js")}catch(r){console.error("Error loading DPlayer script:",r)}}),Q(()=>{}),(r,s)=>(f(),_("div",{ref_key:"player",ref:i},null,512))}},je=T(Te,[["__scopeId","data-v-874987bf"]]);const Le=de("v-alert-title"),Re=["success","info","warning","error"],$e=K({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:X,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Re.includes(e)},...Ee(),...ve(),...ye(),..._e(),...he(),...ge(),...be(),...Fe(),...Y(),...xe({variant:"flat"})},"VAlert"),ze=Z()({name:"VAlert",props:$e(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{emit:i,slots:t}=a;const l=ee(e,"modelValue"),r=V(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),s=V(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:o}=te(e),{colorClasses:d,colorStyles:m,variantClasses:g}=ke(s),{densityClasses:P}=we(e),{dimensionStyles:j}=Ve(e),{elevationClasses:L}=Ce(e),{locationStyles:R}=Se(e),{positionClasses:$}=Pe(e),{roundedClasses:z}=Ie(e),{textColorClasses:N,textColorStyles:q}=Be(le(e,"borderColor")),{t:O}=ae(),I=V(()=>({"aria-label":O(e.closeLabel),onClick(w){l.value=!1,i("click:close",w)}}));return()=>{const w=!!(t.prepend||r.value),M=!!(t.title||e.title),G=!!(t.close||e.closable);return l.value&&n(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},o.value,d.value,P.value,L.value,$.value,z.value,g.value,e.class],style:[m.value,j.value,R.value,e.style],role:"alert"},{default:()=>{var B,A;return[Ae(!1,"v-alert"),e.border&&n("div",{key:"border",class:["v-alert__border",N.value],style:q.value},null),w&&n("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?n(E,{key:"prepend-defaults",disabled:!r.value,defaults:{VIcon:{density:e.density,icon:r.value,size:e.prominent?44:28}}},t.prepend):n(De,{key:"prepend-icon",density:e.density,icon:r.value,size:e.prominent?44:28},null)]),n("div",{class:"v-alert__content"},[M&&n(Le,{key:"title"},{default:()=>{var b;return[((b=t.title)==null?void 0:b.call(t))??e.title]}}),((B=t.text)==null?void 0:B.call(t))??e.text,(A=t.default)==null?void 0:A.call(t)]),t.append&&n("div",{key:"append",class:"v-alert__append"},[t.append()]),G&&n("div",{key:"close",class:"v-alert__close"},[t.close?n(E,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var b;return[(b=t.close)==null?void 0:b.call(t,{props:I.value})]}}):n(k,se({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},I.value),null)])]}})}}}),Ne={components:{IFrame:je},props:{site:{type:String,required:!0},id:{type:String,required:!0}},computed:{...oe(re,["config"])},data(){return{proxy:null,parse:!1,playUrl:null,message:"请选集播放",flags:[],vod:{},flag:null,episode:null}},methods:{goBack(){this.$router.back()},async goEpisode(e,a){this.episode=e,this.message=null,console.log("开始解析");try{const i=await D.post(`${this.api}/play`,{id:a.url,flag:this.flag});if((i.parse===0||i.jx===0)&&i.url){this.proxy=i.do,this.parse=!0,this.playUrl=i.url;return}else if((i.parse===1||i.jx===1)&&i.url){this.parse=!1,this.playUrl=`https://jx.xmflv.com/?url=${i.url}`;return}}catch{console.log("play异常")}this.parse=!1,this.playUrl=`https://jx.xmflv.com/?url=${a.url}`},onSort(){if(!this.flag)return;const e=this.flags.find(a=>a.flag===this.flag);e&&e.urls.reverse()}},mounted(){var a,i;const e=(((i=(a=this.config)==null?void 0:a.video)==null?void 0:i.sites)||[]).find(t=>t.key===this.site);e&&(this.api=e.api,D.post(`${e.api}/detail`,{id:this.id}).then(t=>{try{this.vod=t.list[0],this.flags=this.vod.vod_play_from.split(/\$\$\$/g).map(r=>({flag:r,urls:[]}));const l=this.vod.vod_play_url.replaceAll(/#\$#\$/g).split(/\$\$\$/g);for(let r=0;r<this.flags.length;r++){const s=this.flags[r];if(l.length-1<r)break;l[r].split(/#/g).forEach(o=>{const d=o.split(/\$/g);s.urls.push({title:d[0],url:d[1]})})}this.flags&&(this.flag=this.flags[0].flag)}catch(l){this.message=`加载失败 ${l.message}`}}).catch(t=>{this.message=`加载失败 ${t.message}`}))}},h=e=>(ie("data-v-12ca4ad1"),e=e(),ce(),e),qe={class:"player bg-grey-lighten-3"},Oe={class:"vod text-body-2"},Me={class:"text-h6 font-weight-bold"},Ge={key:0,class:"text-subtitle-1 text-no-wrap text-truncate"},We=h(()=>c("span",{class:"font-weight-bold"},"类型：",-1)),He=h(()=>c("span",{class:"font-weight-bold"},"年份：",-1)),Je=h(()=>c("span",{class:"font-weight-bold"},"地区：",-1)),Qe={class:"text-no-wrap text-truncate"},Ke=h(()=>c("span",{class:"font-weight-bold"},"导演：",-1)),Xe={class:"text-no-wrap text-truncate"},Ye=h(()=>c("span",{class:"font-weight-bold"},"演员：",-1)),Ze={class:"content"},et=h(()=>c("span",{class:"font-weight-bold"},"简介：",-1)),tt={class:"flags align-center"},lt={class:"episode"};function at(e,a,i,t,l,r){const s=ne("IFrame");return f(),x(Ue,null,{default:u(()=>[n(F,null,{default:u(()=>[n(y,{cols:"12",md:"7"},{default:u(()=>[c("div",qe,[n(k,{density:"compact",class:"go-back",position:"absolute",onClick:r.goBack,icon:"mdi-arrow-left"},null,8,["onClick"]),l.message?(f(),x(ze,{key:0,class:"message",type:"error",variant:"outlined",text:l.message},null,8,["text"])):U("",!0),n(s,{url:l.playUrl,parse:l.parse,do:l.proxy},null,8,["url","parse","do"])])]),_:1}),n(y,{cols:"12",md:"5"},{default:u(()=>[c("ul",Oe,[c("li",Me,p(l.vod.vod_name),1),l.vod.vod_remarks?(f(),_("li",Ge,p(l.vod.vod_remarks),1)):U("",!0),c("li",null,[n(F,null,{default:u(()=>[n(y,{cols:"4",class:"text-no-wrap text-truncate"},{default:u(()=>[We,v(" "+p(l.vod.type_name||"未知"),1)]),_:1}),n(y,{cols:"4",class:"text-no-wrap text-truncate"},{default:u(()=>[He,v(" "+p(l.vod.vod_year||"未知"),1)]),_:1}),n(y,{cols:"4",class:"text-no-wrap text-truncate"},{default:u(()=>[Je,v(" "+p(l.vod.vod_area||"未知"),1)]),_:1})]),_:1})]),c("li",null,[c("div",Qe,[Ke,v(" "+p(l.vod.vod_director||"未知"),1)])]),c("li",null,[c("div",Xe,[Ye,v(" "+p(l.vod.vod_actor||"未知"),1)])]),c("li",null,[c("div",Ze,[et,v(" "+p(l.vod.vod_content||"无"),1)])])])]),_:1}),n(y,{cols:"12"},{default:u(()=>[c("div",tt,[n(ue,{modelValue:l.flag,"onUpdate:modelValue":a[0]||(a[0]=o=>l.flag=o),"show-arrows":"","center-active":""},{default:u(()=>[(f(!0),_(S,null,C(l.flags,(o,d)=>(f(),x(fe,{key:d,value:o.flag},{default:u(()=>[v(p(o.flag),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),n(k,{density:"compact",onClick:r.onSort,icon:"mdi-sort-variant",variant:"text"},null,8,["onClick"])]),n(pe,{modelValue:l.flag,"onUpdate:modelValue":a[1]||(a[1]=o=>l.flag=o)},{default:u(()=>[(f(!0),_(S,null,C(l.flags,(o,d)=>(f(),x(me,{key:d,value:o.flag},{default:u(()=>[c("ul",lt,[(f(!0),_(S,null,C(o.urls,(m,g)=>(f(),_("li",{key:g},[n(k,{onClick:P=>r.goEpisode(g,m),variant:l.episode===g?"tonal":"outlined"},{default:u(()=>[v(p(m.title),1)]),_:2},1032,["onClick","variant"])]))),128))])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}const ct=T(Ne,[["render",at],["__scopeId","data-v-12ca4ad1"]]);export{ct as default};