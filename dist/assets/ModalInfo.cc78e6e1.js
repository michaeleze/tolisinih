var x=Object.defineProperty,f=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var d=(o,a,e)=>a in o?x(o,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[a]=e,l=(o,a)=>{for(var e in a||(a={}))s.call(a,e)&&d(o,e,a[e]);if(t)for(var e of t(a))i.call(a,e)&&d(o,e,a[e]);return o},m=(o,a)=>f(o,v(a));var c=(o,a)=>{var e={};for(var n in o)s.call(o,n)&&a.indexOf(n)<0&&(e[n]=o[n]);if(o!=null&&t)for(var n of t(o))a.indexOf(n)<0&&i.call(o,n)&&(e[n]=o[n]);return e};import{r as p,j as r,a as h}from"./vendor.0cb41a1d.js";const g=a=>{var o=c(a,[]);return r("svg",m(l({},o),{xmlns:"http://www.w3.org/2000/svg",className:"text-green-500 h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}))};var u=p.exports.memo(g);const w=({type:o})=>h("div",{"data-cy":"modal-information",onClick:a=>a.stopPropagation(),className:"inline-flex items-center py-3.5 md:py-4 px-6 md:px-8 rounded-lg space-x-1 md:space-x-2 bg-white",children:[r(u,{"data-cy":"modal-information-icon"}),h("p",{"data-cy":"modal-information-title",className:"font-semibold",children:[o," Berhasil dihapus"]})]});var y=p.exports.memo(w);export{y as default};
