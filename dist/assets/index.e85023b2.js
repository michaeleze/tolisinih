var Z=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var k=(t,e,o)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,a=(t,e)=>{for(var o in e||(e={}))M.call(e,o)&&k(t,o,e[o]);if(x)for(var o of x(e))S.call(e,o)&&k(t,o,e[o]);return t},d=(t,e)=>X(t,Y(e));var m=(t,e)=>{var o={};for(var r in t)M.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&x)for(var r of x(t))e.indexOf(r)<0&&S.call(t,r)&&(o[r]=t[r]);return o};import{r as n,j as s,a as h,b as q,u as C,c as _,d as f,L as K,F as O,R as U,e as b,f as G,g as J,h as Q,B as tt,P as et}from"./vendor.b30708ff.js";const st=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}};st();const ot="modulepreload",A={},rt="https://cdn.statically.io/gh/rizkimcitra/tolisinih/main/dist/",v=function(e,o){return!o||o.length===0?e():Promise.all(o.map(r=>{if(r=`${rt}${r}`,r in A)return;A[r]=!0;const i=r.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${l}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":ot,i||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),i)return new Promise((p,u)=>{c.addEventListener("load",p),c.addEventListener("error",u)})})).then(()=>e())},it=()=>s("div",{className:"bg-sky-500 mb-2 md:mb-4",children:s("header",{"data-cy":"header-background",className:"layout flex items-center h-16 md:h-24",children:s("h1",{"data-cy":"header-title",className:"text-neutral-100",children:"TO DO LIST APP"})})});var nt=n.exports.memo(it);const at=r=>{var i=r,{children:t,className:e="bg-sky-500 hover:bg-sky-600 text-white "}=i,o=m(i,["children","className"]);return s("button",d(a({},o),{className:`inline-flex items-center justify-center space-x-1 md:space-x-1.5 py-2 px-2 sm:px-4 md:py-3 md:px-5 rounded-full active:scale-95 ${e}`,children:t}))};var N=n.exports.memo(at);const z="SET_ACTIVITY",I="SET_SELECTED_ACTIVITY",R="SET_MODAL_ALERT",L="SET_MODAL_FORM",H="SET_TITLE",E="SET_NEWER",D="SET_OLDER",V="SET_AZ",B="SET_ZA",P="SET_INCOMPLETED",$="SET_SORT",T=n.exports.memo(e=>{var t=m(e,[]);return h("svg",d(a({},t),{className:"h-6 w-6",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),s("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}))});T.displayName="PlusIcon";const j=n.exports.memo(e=>{var t=m(e,[]);return h("svg",d(a({},t),{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24","data-cy":"todo-title-edit-button",className:"text-xl lg:text-2xl text-gray-400",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[s("path",{fill:"none",d:"M16.589 9L15.003 7.414 5.906 16.511 5.377 18.625 7.491 18.097z"}),s("path",{transform:"rotate(134.999 18.003 6)",fill:"none",d:"M16.882 4.879H19.125V7.122H16.882z"}),s("path",{d:"M4.003,21c0.081,0,0.162-0.01,0.242-0.03l4-1c0.176-0.044,0.337-0.135,0.465-0.263L21.003,7.414 c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414L19.417,3c-0.756-0.756-2.072-0.756-2.828,0L4.296,15.293 c-0.128,0.128-0.219,0.289-0.263,0.464l-1,4c-0.086,0.341,0.015,0.701,0.263,0.95C3.485,20.897,3.741,21,4.003,21z M18.003,4.414 L19.589,6l-1.586,1.586L16.417,6L18.003,4.414z M5.906,16.511l9.097-9.097L16.589,9l-9.098,9.097l-2.114,0.528L5.906,16.511z"})]}))});j.displayName="PencilIcon";const lt=n.exports.memo(e=>{var t=m(e,[]);return s("svg",d(a({},t),{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:s("path",{d:"M15,2H9C7.897,2,7,2.897,7,4v2H3v2h2v12c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-4V4C17,2.897,16.103,2,15,2z M9,4h6v2H9V4z M17,20H7V8h1h8h1V20z"})}))});lt.displayName="TrashIcon";const ct=n.exports.memo(e=>{var t=m(e,[]);return s("svg",d(a({},t),{xmlns:"http://www.w3.org/2000/svg",className:"absolute right-4 h-4 w-4 md:w-6 md:h-6","data-cy":"sort-selection-selected",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}))});ct.displayName="CheckIcon";const F=n.exports.memo(o=>{var r=o,{type:t}=r,e=m(r,["type"]);switch(t){case E:return s("svg",d(a({},e),{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em","data-cy":"sort-selection-icon",xmlns:"http://www.w3.org/2000/svg",children:s("path",{d:"M11 9H20V11H11zM11 13H18V15H11zM11 5H22V7H11zM11 17H16V19H11zM5 20L7 20 7 8 10 8 6 4 2 8 5 8z"})}));case D:return s("svg",d(a({},e),{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em","data-cy":"sort-selection-icon",xmlns:"http://www.w3.org/2000/svg",children:s("path",{d:"M6 20L10 16 7 16 7 4 5 4 5 16 2 16zM11 8H20V10H11zM11 12H18V14H11zM11 4H22V6H11zM11 16H16V18H11z"})}));case V:return s("svg",d(a({},e),{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em","data-cy":"sort-selection-icon",xmlns:"http://www.w3.org/2000/svg",children:s("path",{d:"M19.707 14.707c.286-.286.372-.716.217-1.09C19.77 13.244 19.404 13 19 13h-7v2h4.586l-4.293 4.293c-.286.286-.372.716-.217 1.09C12.23 20.756 12.596 21 13 21h7v-2h-4.586L19.707 14.707zM7 3.99L5 3.99 5 15.99 2 15.99 6 19.99 10 15.99 7 15.99zM17 3h-2c-.417 0-.79.259-.937.649l-2.75 7.333h2.137L14.193 9h3.613l.743 1.981h2.137l-2.75-7.333C17.79 3.259 17.417 3 17 3zM14.943 7l.75-2h.613l.75 2H14.943z"})}));case B:return s("svg",d(a({},e),{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em","data-cy":"sort-selection-icon",xmlns:"http://www.w3.org/2000/svg",children:s("path",{d:"M19.707 14.707c.286-.286.372-.716.217-1.09C19.77 13.244 19.404 13 19 13h-7v2h4.586l-4.293 4.293c-.286.286-.372.716-.217 1.09C12.23 20.756 12.596 21 13 21h7v-2h-4.586L19.707 14.707zM6 3.99L2 7.99 5 7.99 5 19.99 7 19.99 7 7.99 10 7.99zM17 3h-2c-.417 0-.79.259-.937.649l-2.75 7.333h2.137L14.193 9h3.613l.743 1.981h2.137l-2.75-7.333C17.79 3.259 17.417 3 17 3zM14.943 7l.75-2h.613l.75 2H14.943z"})}));case P:return s("svg",d(a({},e),{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em","data-cy":"sort-selection-icon",xmlns:"http://www.w3.org/2000/svg",children:s("path",{d:"M8 16L4 16 10 22 10 19 10 16 10 2 8 2zM14 5L14 8 14 22 16 22 16 8 20 8 14 2z"})}));default:return s("svg",d(a({},e),{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:s("path",{d:"M8 16L4 16 10 22 10 19 10 16 10 2 8 2zM14 5L14 8 14 22 16 22 16 8 20 8 14 2z"})}))}});F.displayName="SortIcon";const dt=()=>({title:"New Activity",email:"rizki.maulana@skyshi.com"}),g=q.create({baseURL:"https://todo.api.devcode.gethired.id",headers:{Accept:"application/json","Content-Type":"application/json"}}),ht=async t=>{try{return(await g.get(t)).data}catch{return{data:[]}}},ut=async(t,e)=>{try{return(await g.post(t,e)).data}catch{return{data:[]}}},mt=async(t,e)=>{try{return(await g.patch(t,e)).data}catch{return{data:[]}}},ne=async t=>{try{return(await g.delete(t)).data}catch{return{data:[]}}},pt=t=>({type:z,payload:t}),yt=t=>({type:L,payload:t}),ft=t=>({type:$,payload:t}),ae=[{id:1,title:"Very High"},{id:2,title:"High"},{id:3,title:"Medium"},{id:4,title:"Low"},{id:5,title:"Very Low"}],vt=[{title:"Terbaru",type:E},{title:"Terlama",type:D},{title:"A-Z",type:V},{title:"Z-A",type:B},{title:"Belum Selesai",type:P}],wt=n.exports.lazy(()=>v(()=>import("./SortItem.f2077232.js"),["assets/SortItem.f2077232.js","assets/vendor.b30708ff.js"])),xt=()=>s("div",{className:"absolute top-4 md:top-8 -left-56 md:-left-24 w-56 h-56",children:s("div",{"data-cy":"sort-parent",className:"w-full h-full flex flex-col items-stretch justify-between rounded-lg divide-y border bg-white",children:s(n.exports.Suspense,{fallback:null,children:vt.map(t=>s(wt,a({},t),t.title))})})});var gt=n.exports.memo(xt);const _t=()=>{const{pathname:t}=C(),e=_(),o=f(u=>u.sortOptions),r=f(u=>u.modalForm),i=async()=>{const u=await ht("/activity-groups?email=rizki.maulana@skyshi.com");e(pt(u.data))},l=async()=>{const u=dt();await ut("/activity-groups",u),await i()},c=n.exports.useCallback(()=>{e(yt({isOpen:!0,titleForm:"Tambah List Item",priority:"Very High"}))},[r.isOpen]),p=()=>{e(ft({isOpen:!o.isOpen}))};return t==="/"?h(N,{"data-cy":"activity-add-button",onClick:l,children:[s(T,{}),s("span",{className:"sr-only sm:not-sr-only",children:"Tambah"})]}):h("div",{className:"flex items-center space-x-2 md:scroll-px-3",children:[s(F,{"data-cy":"todo-sort-button",className:"w-8 md:w-10 p-2 md:p- aspect-square border rounded-full  cursor-pointer text-neutral-800",onClick:p}),s("div",{className:"relative",children:o.isOpen&&s(gt,{})}),h(N,{"data-cy":"todo-add-button",onClick:c,children:[s(T,{}),s("span",{className:"sr-only sm:not-sr-only",children:"Tambah"})]})]})};var Lt=n.exports.memo(_t);const Et=()=>h(K,{"data-cy":"todo-back-button",to:"/",className:"inline-flex items-center justify-center p-2 md:p-3 border rounded-full active:scale-95",children:[s("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1.5rem",width:"1.5rem",xmlns:"http://www.w3.org/2000/svg",children:s("path",{d:"M13.293 6.293L7.586 12 13.293 17.707 14.707 16.293 10.414 12 14.707 7.707z"})}),s("span",{className:"sr-only",children:"Back to Home"})]});var Tt=n.exports.memo(Et);const Mt=t=>({type:I,payload:t}),w=t=>({type:H,payload:t}),St=()=>{const t=_(),{pathname:e}=C(),o=f(y=>y.selectedActivity),r=f(y=>y.titleActivity),i=()=>t(w({title:o.title,isEditing:!0})),l=y=>t(w({title:y.target.value})),c=async()=>{await mt("/activity-groups/"+o.id,{title:r.title}),t(Mt({title:r.title})),t(w({title:null,isEditing:!1}))},p=async()=>{r.title===o.title?t(w({title:null,isEditing:!1})):r.title?await c():t(w({title:o.title,isEditing:!1}))},u=async y=>{y.key==="Enter"&&await p()};return h("div",{className:"flex items-center space-x-2 md:space-x-3",children:[e!=="/"&&s(Tt,{}),!r.isEditing&&e!=="/"&&s("h2",{"data-cy":"todo-title",onClick:i,children:o.title}),e==="/"&&s("h2",{"data-cy":"activity-title",children:"Activity"}),r.isEditing&&e!=="/"&&s("input",{type:"text",onKeyDown:u,onBlur:p,onChange:l,value:r.title,className:"py-1 md:py-2 text-xl font-bold md:text-3xl bg-transparent border-b outline-none text-neutral-700 border-neutral-700",autoFocus:!0}),e!=="/"&&s(j,{"data-cy":"todo-title-edit-button",onClick:i,onBlur:p})]})};var kt=n.exports.memo(St);const Ct=()=>h("div",{className:"flex items-center justify-between my-10 md:my-14",children:[s(kt,{}),s(Lt,{})]});var Ot=n.exports.memo(Ct);const bt=({children:t})=>h(O,{children:[s(nt,{}),h("div",{className:"layout",children:[s(Ot,{}),s("main",{className:"pb-10",children:t})]})]});var At=n.exports.memo(bt);const Nt=o=>{var r=o,{children:t}=r,e=m(r,["children"]);return s("div",d(a({},e),{className:"fixed w-full h-screen flex items-center justify-center top-0 left-0 bg-zinc-900/50",children:t}))};var W=n.exports.memo(Nt);const zt=t=>({type:R,payload:t}),It=t=>({type:L,payload:t}),Rt=n.exports.lazy(()=>v(()=>import("./index.b6c11cc9.js"),["assets/index.b6c11cc9.js","assets/Trash.aba55a57.js","assets/vendor.b30708ff.js","assets/modalAlertAction.ccd63ddd.js"])),Ht=n.exports.lazy(()=>v(()=>import("./DetailPage.b00a0b35.js"),["assets/DetailPage.b00a0b35.js","assets/vendor.b30708ff.js"])),Dt=()=>h(U,{children:[s(b,{path:"/",element:s(n.exports.Suspense,{fallback:s("div",{className:"text-center",children:"Loading..."}),children:s(Rt,{})})}),s(b,{path:"/detail/:slug",element:s(n.exports.Suspense,{fallback:s("div",{className:"text-center",children:"Loading..."}),children:s(Ht,{})})})]});var Vt=n.exports.memo(Dt);const Bt=n.exports.lazy(()=>v(()=>import("./ModalAlert.1ec3ac97.js"),["assets/ModalAlert.1ec3ac97.js","assets/modalAlertAction.ccd63ddd.js","assets/vendor.b30708ff.js"])),Pt=n.exports.lazy(()=>v(()=>import("./ModalInfo.08573308.js"),["assets/ModalInfo.08573308.js","assets/vendor.b30708ff.js"])),$t=n.exports.lazy(()=>v(()=>import("./ModalForm.c13cbf27.js"),["assets/ModalForm.c13cbf27.js","assets/vendor.b30708ff.js"]));function jt(){const t=f(i=>i.modalAlert),e=f(i=>i.modalForm),o=_(),r=()=>{t.isOpen?o(zt({isOpen:!1,isDeleteComplete:!1})):o(It({isOpen:!1,isSubmitted:!1}))};return h(O,{children:[s(At,{children:s(Vt,{})}),t.isOpen&&s(W,{onClick:r,children:s(n.exports.Suspense,{fallback:s("div",{children:"Loading..."}),children:t.isDeleteComplete?s(Pt,{type:t.type}):s(Bt,{})})}),e.isOpen&&s(W,{onClick:r,children:s(n.exports.Suspense,{fallback:s("div",{children:"Loading..."}),children:s($t,{})})})]})}const Ft={title:"Activity",todo_items:[]},Wt=(t=Ft,e)=>{switch(e.type){case I:return a(a({},t),e.payload);default:return t}},Zt={activity:[]},Xt=(t=Zt,e)=>{switch(e.type){case z:return d(a({},t),{activity:[...e.payload]});default:return t}},Yt={title:null,isOpen:!1,isDeleteComplete:!1,type:null,id:null},qt=(t=Yt,e)=>{switch(e.type){case R:return a(a({},t),e.payload);default:return t}},Kt={isOpen:!1,isSubmited:!1,titleForm:"",title:"",priority:"Very High",isDropDownOpen:!1,is_active:!1},Ut=(t=Kt,e)=>{switch(e.type){case L:return a(a({},t),e.payload);default:return t}},Gt={isOpen:!1,sortBy:E},Jt=(t=Gt,e)=>{switch(e.type){case $:return a(a({},t),e.payload);default:return t}},Qt={title:null,isEditing:!1},te=(t=Qt,e)=>{switch(e.type){case H:return a(a({},t),e.payload);default:return t}},ee=G({activity:Xt,modalAlert:qt,selectedActivity:Wt,modalForm:Ut,titleActivity:te,sortOptions:Jt}),se=J(ee,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),oe=document.getElementById("__app");Q.render(s(n.exports.StrictMode,{children:s(tt,{children:s(et,{store:se,children:s(jt,{})})})}),oe);export{N as B,ct as C,R as S,v as _,ht as a,Mt as b,yt as c,ne as d,ut as e,mt as f,dt as g,ft as h,E as i,F as j,ae as k,P as l,B as m,V as n,D as o,pt as s};