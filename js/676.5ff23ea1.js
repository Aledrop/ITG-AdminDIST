"use strict";(self["webpackChunkiristravel"]=self["webpackChunkiristravel"]||[]).push([[676],{6676:function(e,s,a){a.r(s),a.d(s,{default:function(){return d}});var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("section",{staticClass:"login absolute top-1/2 w-100"},[a("div",{staticClass:"w-20 mx-auto my-5"},[e._m(0),a("form",{staticClass:"flex flex-col text-white gap-y-4"},[a("div",{staticClass:"flex flex-col items-start gap-y-1"},[a("label",{staticClass:"pl-2",attrs:{for:"user"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{type:"text",id:"user",name:"user"},domProps:{value:e.user},on:{input:function(s){s.target.composing||(e.user=s.target.value)}}})]),a("div",{staticClass:"relative flex flex-col items-start gap-y-1"},[a("label",{staticClass:"pl-2",attrs:{for:"pass"}},[e._v("Contreña")]),"checkbox"===(e.showpass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{id:"pass",name:"pass",type:"checkbox"},domProps:{checked:Array.isArray(e.pass)?e._i(e.pass,null)>-1:e.pass},on:{change:function(s){var a=e.pass,t=s.target,r=!!t.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);t.checked?o<0&&(e.pass=a.concat([i])):o>-1&&(e.pass=a.slice(0,o).concat(a.slice(o+1)))}else e.pass=r}}}):"radio"===(e.showpass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{id:"pass",name:"pass",type:"radio"},domProps:{checked:e._q(e.pass,null)},on:{change:function(s){e.pass=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{id:"pass",name:"pass",type:e.showpass?"text":"password"},domProps:{value:e.pass},on:{input:function(s){s.target.composing||(e.pass=s.target.value)}}}),a("button",{directives:[{name:"show",rawName:"v-show",value:!e.showpass,expression:"!showpass"}],staticClass:"absolute top-2rem right-1rem",attrs:{type:"button"},on:{click:function(s){e.showpass=!e.showpass}}},[a("i",{staticClass:"fas fa-eye-slash"})]),a("button",{directives:[{name:"show",rawName:"v-show",value:e.showpass,expression:"showpass"}],staticClass:"absolute top-2rem right-1rem",attrs:{type:"button"},on:{click:function(s){e.showpass=!e.showpass}}},[a("i",{staticClass:"fas fa-eye"})])]),a("div",{staticClass:"flex flex-col items-center gap-y-3"},[a("small",{directives:[{name:"show",rawName:"v-show",value:e.is_error,expression:"is_error"}],staticClass:"text-red py-1"},[e._v(e._s(e.error_message))]),a("router-link",{staticClass:"text-lightBlue underline",attrs:{to:{name:"ForgotPassword"}}},[e._v("Olvide mi contraseña")]),a("button",{staticClass:"border border-orange bg-orange rounded-3xl py-2 px-16",attrs:{type:"submit"},on:{click:e.login}},[e._v("Iniciar sesión")])],1)])])])},r=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("figure",{staticClass:"flex py-4"},[t("img",{staticClass:"w-4/5 m-auto",attrs:{src:a(7038),alt:"logo"}})])}],i=a(23),o=a(1105),l={name:"LoginForm",data(){return{user:"",pass:"",showpass:!1,disabledLogin:!1,is_error:!1,error_message:"Mensaje de error"}},created(){i.Z.isClientLogged()&&this.$router.push({name:"Dashboard"})},methods:{async login(e){e.preventDefault(),this.disabledLogin||o.Z.login(this.user,this.pass).then((e=>{e.logged?(this.$router.push({name:"Dashboard"}),console.log("User is logged!!!")):(this.error_message=e.message,this.is_error=!0,setTimeout((()=>{this.is_error=!1}),3e3))}))}}},n=l,c=a(1001),p=(0,c.Z)(n,t,r,!1,null,"4bd663aa",null),d=p.exports},1105:function(e,s,a){var t=a(23);const r={async login(e,s){try{s=t.Z.encryptPass(s);const{status:a,data:r}=await t.Z.checkLogin(`/clients/login?email=${e}&password=${s}`,{auth:"bearer"});if(200==a)return sessionStorage.setItem("token",r.token),t.Z.createLocalUserData(),{message:"Success!!!",error:!1,logged:!0};if(400==a)return{message:r.message,error:!0,logged:!1};console.log("Poblemas al loguearse")}catch(a){console.log(a)}},getList(){try{return t.Z.checkLogin("/clients").then((e=>{let s=[];if(200==e.status)if(t.Z.validateRole(["ROLE_Admin"]))for(let a of e.data)s.push({id:a.id,name:a.name,email:a.email,active:!!a.active,verify:!!a.verify,agent:!!a.agent});else if(t.Z.validateRole(["ROLE_Comercial"]))for(let a of e.data)a.email==localStorage.getItem("email")&&s.push({id:a.id,name:a.name,email:a.email,active:!!a.active,verify:!!a.verify,agent:!!a.agent});else t.Z.validateRole(["ROLE_Agency"])&&(s=this.validateRoleUser(e.data));return s}))}catch(e){console.log(e)}},async addUpdClient(e,s=!0){try{e.password=t.Z.encryptPass(e.password),e.auth="bearer";const{status:a,data:r}=s?await t.Z.checkLogin("/clients/create",e,"post"):await t.Z.checkLogin("/clients/upd",e,"put");if(200==a)return r}catch(a){console.log(a.response)}return!1},async getClient(e){try{const{status:s,data:a}=await t.Z.checkLogin(`/clients/${e}`,{auth:"bearer"});if(200==s)return a}catch(s){console.log(s.response)}},async delete(e){const s={auth:"bearer",ids:e};try{const{status:e,data:a}=await t.Z.checkLogin("/clients/delete",s,"post");if(200==e)return this.getList().then((e=>e))}catch(a){
//! Fail 
console.log(a.response)}},validateRoleUser(e){const s=localStorage.getItem("email"),a=e.filter((e=>e.email==s)),t=[];t.push({id:a[0].id,name:a[0].name,email:a[0].email,active:!!a[0].active,verify:!!a[0].verify,agent:!!a[0].agent,vendor:!1});for(let r of e)a[0].id==r.parent&&t.push({id:r.id,name:r.name,email:r.email,active:!!r.active,verify:!!r.verify,agent:!!r.agent,vendor:!0});return t}};s["Z"]=r}}]);
//# sourceMappingURL=676.5ff23ea1.js.map