import{p as c,V as i,f as u,ah as g,G as m,h as d,aE as f,al as p}from"./index-9652806f.js";const v=c({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function l(t){const r=i("useRender");r.render=t}function y(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const o=u(),n=u();if(g){const s=new ResizeObserver(e=>{t==null||t(e,s),e.length&&(r==="content"?n.value=e[0].contentRect:n.value=e[0].target.getBoundingClientRect())});m(()=>{s.disconnect()}),d(o,(e,a)=>{a&&(s.unobserve(f(a)),n.value=void 0),e&&s.observe(f(e))},{flush:"post"})}return{resizeRef:o,contentRect:p(n)}}const h=c({tag:{type:String,default:"div"}},"tag");export{h as a,y as b,v as m,l as u};