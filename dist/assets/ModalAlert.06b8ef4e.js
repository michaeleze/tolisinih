var k=Object.defineProperty,j=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var m=(e,a,t)=>a in e?k(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,p=(e,a)=>{for(var t in a||(a={}))d.call(a,t)&&m(e,t,a[t]);if(c)for(var t of c(a))r.call(a,t)&&m(e,t,a[t]);return e},u=(e,a)=>j(e,D(a));var y=(e,a)=>{var t={};for(var s in e)d.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&c)for(var s of c(e))a.indexOf(s)<0&&r.call(e,s)&&(t[s]=e[s]);return t};import{B as h,d as x,a as f,s as C,b as N}from"./index.52a13353.js";import{r as v,j as l,d as w,c as M,a as i,f as $}from"./vendor.0cb41a1d.js";import{s as n}from"./modalAlertAction.91845cb9.js";const B=a=>{var e=y(a,[]);return l("svg",u(p({},e),{xmlns:"http://www.w3.org/2000/svg",className:"w-16 md:w-24 aspect-square text-red-500 h-full",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}))};var L=v.exports.memo(B);const S=()=>{const e=w(o=>o.modalAlert),a=w(o=>o.selectedActivity),t=M(),s=()=>t(n({isOpen:!1,isDeleteComplete:!1})),g=async()=>{const o=await f("/activity-groups?email=rizki.maulana@skyshi.com");$.exports.unstable_batchedUpdates(()=>{t(n({id:null})),t(C(o.data))})},A=async()=>{const o=await f(`/activity-groups/${a.id}`);t(N(o))},b=async()=>{e.type==="Activity"?(await x(`/activity-groups/${e.id}`),await g()):(await x(`/todo-items/${e.id}`),await A()),t(n({isDeleteComplete:!0}))};return i("div",{"data-cy":"modal-delete",onClick:o=>o.stopPropagation(),className:"flex flex-col items-center justify-center h-80 md:h-[24rem] aspect-[1.25/1] rounded bg-white",children:[l(L,{"data-cy":"modal-delete-icon"}),i("h3",{"data-cy":"modal-delete-title",className:"text-center font-normal px-8 md:px-16",children:["Apakah anda yakin ingin menghapus ",e.type," ",i("strong",{children:['"',e.title,'"']}),"?"]}),i("div",{className:"flex items-center justify-center w-full h-full space-x-2 md:space-x-3",children:[l(h,{"data-cy":"modal-delete-cancel-button",onClick:s,className:"bg-neutral-200 text-neutral-900 font-semibold px-8 md:px-12",children:"Batal"}),l(h,{"data-cy":"modal-delete-confirm-button",onClick:b,className:"bg-red-500 text-white font-semibold px-8 md:px-12",children:"Hapus"})]})]})};var O=v.exports.memo(S);export{O as default};
