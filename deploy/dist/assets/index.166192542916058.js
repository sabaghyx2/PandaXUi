var V=Object.defineProperty;var p=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var i=(e,o,a)=>o in e?V(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,f=(e,o)=>{for(var a in o||(o={}))$.call(o,a)&&i(e,a,o[a]);if(p)for(var a of p(o))C.call(o,a)&&i(e,a,o[a]);return e};import{_ as I,d as v,k as w,p as E,a as F,h as l,w as n,r as t,o as B,b as R,g as U,i as c}from"./index.1661925429160.js";const k=v({name:"pagesFormI18n",setup(){const{proxy:e}=U(),o=w({radio:"zh-cn",form:{}});return f({onRadioChange:()=>{e.$i18n.locale=o.radio}},E(o))}}),D={class:"form-i18n-container"},L={style:{"text-align":"center","margin-top":"15px"}},N=c("\u4E2D\u6587\u7B80\u4F53"),P=c("\u82F1\u6587");function y(e,o,a,z,A,T){const u=t("el-radio-button"),_=t("el-radio-group"),m=t("el-input"),s=t("el-form-item"),d=t("el-col"),g=t("el-row"),h=t("el-form"),b=t("el-card");return B(),F("div",D,[l(b,{shadow:"hover",header:"\u8868\u5355\u56FD\u9645\u5316\u6F14\u793A(\u4E0D\u9002\u7528\u4E8E\u52A8\u6001\u9879 form-item)"},{default:n(()=>[R("div",L,[l(_,{modelValue:e.radio,"onUpdate:modelValue":o[0]||(o[0]=r=>e.radio=r),onChange:e.onRadioChange},{default:n(()=>[l(u,{label:"zh-cn"},{default:n(()=>[N]),_:1}),l(u,{label:"en"},{default:n(()=>[P]),_:1})]),_:1},8,["modelValue","onChange"])]),l(h,{model:e.form,"label-width":"100px",class:"mt35 mb35"},{default:n(()=>[l(g,{gutter:35},{default:n(()=>[l(d,{xs:24,sm:12,md:8,lg:8,xl:8,class:"mb20"},{default:n(()=>[l(s,{label:e.$t("message.formI18nLabel.name")},{default:n(()=>[l(m,{modelValue:e.form.name,"onUpdate:modelValue":o[1]||(o[1]=r=>e.form.name=r),placeholder:e.$t("message.formI18nPlaceholder.name"),clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),l(d,{xs:24,sm:12,md:8,lg:8,xl:8,class:"mb20"},{default:n(()=>[l(s,{label:e.$t("message.formI18nLabel.email")},{default:n(()=>[l(m,{modelValue:e.form.email,"onUpdate:modelValue":o[2]||(o[2]=r=>e.form.email=r),placeholder:e.$t("message.formI18nPlaceholder.email"),clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),l(d,{xs:24,sm:12,md:8,lg:8,xl:8,class:"mb20"},{default:n(()=>[l(s,{label:e.$t("message.formI18nLabel.autograph")},{default:n(()=>[l(m,{modelValue:e.form.autograph,"onUpdate:modelValue":o[3]||(o[3]=r=>e.form.autograph=r),placeholder:e.$t("message.formI18nPlaceholder.autograph"),clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})])}var x=I(k,[["render",y]]);export{x as default};