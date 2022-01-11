import{c as d,_ as c,B as y,e as u,f as h,a as f,b as x}from"./index.98bf48d7.js";import{r as i,c as m,d as n,a as l,j as t}from"./vendor.b30708ff.js";const v=()=>{const e=m(),r=n(s=>s.modalForm),o=()=>{e(d({isOpen:!1,isSubmitted:!1,title:"",priority:"",isDropDownOpen:!1,is_active:!1}))};return l("div",{className:"flex items-center justify-between w-full h-24 px-4 lg:px-8",children:[t("div",{"data-cy":"modal-add-title",className:"text-xl font-semibold text-fontColor-900",children:r.titleForm}),t("svg",{"data-cy":"modal-add-close-button",className:"text-4xl text-neutral-400",onClick:o,stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"})})]})};var w=i.exports.memo(v);const b=i.exports.lazy(()=>c(()=>import("./ButtonPriority.ee98b6e8.js"),["assets/ButtonPriority.ee98b6e8.js","assets/index.98bf48d7.js","assets/index.8a4398f2.css","assets/vendor.b30708ff.js","assets/Indicator.a2721961.js"])),_=i.exports.lazy(()=>c(()=>import("./Input.17c0f936.js"),["assets/Input.17c0f936.js","assets/index.98bf48d7.js","assets/index.8a4398f2.css","assets/vendor.b30708ff.js"])),g=i.exports.lazy(()=>c(()=>import("./PriorityDD.cae4e692.js"),["assets/PriorityDD.cae4e692.js","assets/index.98bf48d7.js","assets/index.8a4398f2.css","assets/vendor.b30708ff.js","assets/Indicator.a2721961.js"])),D=()=>{const e=n(a=>a.modalForm),r=n(a=>a.selectedActivity),o=m(),s=async()=>{const a=await f(`/activity-groups/${r.id}`);o(x(a))},p=async()=>{const a={title:e.title,priority:e.priority==="Medium"?"normal":e.priority.replace(" ","-").toLowerCase(),activity_group_id:r.id};!e.title||(e.titleForm==="Tambah List Item"?(await u("/todo-items",a),await s(),o(d({isOpen:!1,isDropDownItem:!1,title:"",priority:"Very High"}))):(await h("/todo-items/"+e.id,a),await s(),o(d({isOpen:!1,isDropDownItem:!1,title:"",priority:"Very High"}))))};return l("div",{"data-cy":"modal-add",onClick:a=>a.stopPropagation(),className:"flex flex-col justify-between h-72 md:h-96 w-10/12 md:w-auto aspect-video rounded-lg divide-y translate-y-[-40%] divide-neutral-300 bg-white",children:[t(w,{}),l("div",{className:"flex flex-col justify-evenly w-full h-[80%] py-2 lg:py-4 px-4 lg:px-8 space-y-2 lg:space-y-4",children:[l("section",{children:[t("label",{"data-cy":"modal-add-name-title",htmlFor:"item-name",className:"uppercase text-neutral-800",children:"NAMA LIST ITEM"}),t(i.exports.Suspense,{fallback:null,children:t(_,{})})]}),l("section",{children:[t("div",{"data-cy":"modal-add-priority-title",className:"tracking-wider uppercase text-neutral-900",children:"PRIORITY"}),t(i.exports.Suspense,{fallback:null,children:t(b,{})}),t(i.exports.Suspense,{fallback:null,children:t(g,{})})]})]}),t(y,{onClick:p,"data-cy":"modal-add-save-button",disabled:!(e.title.length>0),className:`w-1/3 md:w-1/4 mr-2 mb-2 md:mr-4 md:mb-4 ml-auto px-4 md:px-8 bg-sky-500 text-white ${e.title.length>0?"opacity-100":"opacity-50"}`,children:"Simpan"})]})};var P=i.exports.memo(D);export{P as default};
