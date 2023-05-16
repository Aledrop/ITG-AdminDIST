"use strict";(self["webpackChunkiristravel"]=self["webpackChunkiristravel"]||[]).push([[394],{7394:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"login absolute top-1/2 w-100"},[a("div",{staticClass:"w-20 mx-auto my-5"},[e._m(0),a("form",{staticClass:"flex flex-col text-white gap-y-4"},[a("div",{staticClass:"flex flex-col items-start gap-y-1"},[a("label",{staticClass:"pl-2",attrs:{for:"user"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{type:"text",id:"user",name:"user"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}})]),a("div",{staticClass:"relative flex flex-col items-start gap-y-1"},[a("label",{staticClass:"pl-2",attrs:{for:"pass"}},[e._v("Contreña")]),"checkbox"===(e.showpass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{id:"pass",name:"pass",type:"checkbox"},domProps:{checked:Array.isArray(e.pass)?e._i(e.pass,null)>-1:e.pass},on:{change:function(t){var a=e.pass,r=t.target,s=!!r.checked;if(Array.isArray(a)){var n=null,i=e._i(a,n);r.checked?i<0&&(e.pass=a.concat([n])):i>-1&&(e.pass=a.slice(0,i).concat(a.slice(i+1)))}else e.pass=s}}}):"radio"===(e.showpass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{id:"pass",name:"pass",type:"radio"},domProps:{checked:e._q(e.pass,null)},on:{change:function(t){e.pass=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],staticClass:"bg-transparent border-2 w-full rounded-4xl text-xl px-2",attrs:{id:"pass",name:"pass",type:e.showpass?"text":"password"},domProps:{value:e.pass},on:{input:function(t){t.target.composing||(e.pass=t.target.value)}}}),a("button",{directives:[{name:"show",rawName:"v-show",value:!e.showpass,expression:"!showpass"}],staticClass:"absolute top-2rem right-1rem",attrs:{type:"button"},on:{click:function(t){e.showpass=!e.showpass}}},[a("i",{staticClass:"fas fa-eye-slash"})]),a("button",{directives:[{name:"show",rawName:"v-show",value:e.showpass,expression:"showpass"}],staticClass:"absolute top-2rem right-1rem",attrs:{type:"button"},on:{click:function(t){e.showpass=!e.showpass}}},[a("i",{staticClass:"fas fa-eye"})])]),a("div",{staticClass:"flex flex-col items-center gap-y-3"},[a("small",{directives:[{name:"show",rawName:"v-show",value:e.is_error,expression:"is_error"}],staticClass:"text-red py-1"},[e._v(e._s(e.error_message))]),a("router-link",{staticClass:"text-lightBlue underline",attrs:{to:{name:"ForgotPassword"}}},[e._v("Olvide mi contraseña")]),a("button",{staticClass:"border border-orange bg-orange rounded-3xl py-2 px-16",attrs:{type:"submit"},on:{click:e.login}},[e._v("Iniciar sesión")])],1)])])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",{staticClass:"flex py-4"},[r("img",{staticClass:"w-4/5 m-auto",attrs:{src:a(7038),alt:"logo"}})])}],n=a(6198),i=(a(5666),a(23)),o=a(1105),c={name:"LoginForm",data:function(){return{user:"",pass:"",showpass:!1,disabledLogin:!1,is_error:!1,error_message:"Mensaje de error"}},created:function(){i.Z.isClientLogged()&&this.$router.push({name:"Dashboard"})},methods:{login:function(e){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.preventDefault(),t.disabledLogin||o.Z.login(t.user,t.pass).then((function(e){e.logged?t.$router.push({name:"Dashboard"}):(t.error_message=e.message,t.is_error=!0,setTimeout((function(){t.is_error=!1}),3e3))}));case 2:case"end":return a.stop()}}),a)})))()}}},l=c,u=a(1001),p=(0,u.Z)(l,r,s,!1,null,"618e6189",null),d=p.exports},2222:function(e,t,a){var r=a(2109),s=a(7854),n=a(7293),i=a(3157),o=a(111),c=a(7908),l=a(6244),u=a(6135),p=a(5417),d=a(1194),m=a(5112),v=a(7392),f=m("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",x=s.TypeError,w=v>=51||!n((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),b=d("concat"),y=function(e){if(!o(e))return!1;var t=e[f];return void 0!==t?!!t:i(e)},k=!w||!b;r({target:"Array",proto:!0,forced:k},{concat:function(e){var t,a,r,s,n,i=c(this),o=p(i,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(n=-1===t?i:arguments[t],y(n)){if(s=l(n),d+s>g)throw x(h);for(a=0;a<s;a++,d++)a in n&&u(o,d,n[a])}else{if(d>=g)throw x(h);u(o,d++,n)}return o.length=d,o}})},7327:function(e,t,a){var r=a(2109),s=a(2092).filter,n=a(1194),i=n("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},1105:function(e,t,a){var r=a(7965),s=a(6198),n=(a(5666),a(2222),a(8309),a(7327),a(1539),a(23)),i={login:function(e,t){return(0,s.Z)(regeneratorRuntime.mark((function a(){var r,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t=n.Z.encryptPass(t),a.next=4,n.Z.checkLogin("/clients/login?email=".concat(e,"&password=").concat(t),{auth:"bearer"});case 4:if(r=a.sent,s=r.status,i=r.data,200!=s){a.next=13;break}return sessionStorage.setItem("token",i.token),n.Z.createLocalUserData(),a.abrupt("return",{message:"Success!!!",error:!1,logged:!0});case 13:if(400!=s){a.next=17;break}return a.abrupt("return",{message:i.message,error:!0,logged:!1});case 17:console.log("Poblemas al loguearse");case 18:a.next=24;break;case 20:a.prev=20,a.t0=a["catch"](0),console.log(a.t0),localStorage.clear();case 24:case"end":return a.stop()}}),a,null,[[0,20]])})))()},getList:function(){var e=this;try{return n.Z.checkLogin("/clients").then((function(t){var a=[];if(200==t.status)if(n.Z.validateRole(["ROLE_Admin"])){var s,i=(0,r.Z)(t.data);try{for(i.s();!(s=i.n()).done;){var o=s.value;a.push({id:o.id,name:o.name,email:o.email,active:!!o.active,verify:!!o.verify,agent:!!o.agent})}}catch(p){i.e(p)}finally{i.f()}}else if(n.Z.validateRole(["ROLE_Comercial"])){var c,l=(0,r.Z)(t.data);try{for(l.s();!(c=l.n()).done;){var u=c.value;u.email==localStorage.getItem("email")&&a.push({id:u.id,name:u.name,email:u.email,active:!!u.active,verify:!!u.verify,agent:!!u.agent})}}catch(p){l.e(p)}finally{l.f()}}else n.Z.validateRole(["ROLE_Agency"])&&(a=e.validateRoleUser(t.data));return a}))}catch(t){console.log(t)}},addUpdClient:function(e){var t=arguments;return(0,s.Z)(regeneratorRuntime.mark((function a(){var r,s,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=!(t.length>1&&void 0!==t[1])||t[1],a.prev=1,e.password=n.Z.encryptPass(e.password),e.auth="bearer",!r){a.next=10;break}return a.next=7,n.Z.checkLogin("/clients/create",e,"post");case 7:a.t0=a.sent,a.next=13;break;case 10:return a.next=12,n.Z.checkLogin("/clients/upd",e,"put");case 12:a.t0=a.sent;case 13:if(s=a.t0,i=s.status,o=s.data,200!=i){a.next=18;break}return a.abrupt("return",o);case 18:a.next=23;break;case 20:a.prev=20,a.t1=a["catch"](1),console.log(a.t1.response);case 23:return a.abrupt("return",!1);case 24:case"end":return a.stop()}}),a,null,[[1,20]])})))()},getClient:function(e){return(0,s.Z)(regeneratorRuntime.mark((function t(){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.Z.checkLogin("/clients/".concat(e),{auth:"bearer"});case 3:if(a=t.sent,r=a.status,s=a.data,200!=r){t.next=8;break}return t.abrupt("return",s);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0.response);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},delete:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function a(){var r,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r={auth:"bearer",ids:e},a.prev=1,a.next=4,n.Z.checkLogin("/clients/delete",r,"post");case 4:if(s=a.sent,i=s.status,s.data,200!=i){a.next=9;break}return a.abrupt("return",t.getList().then((function(e){return e})));case 9:a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](1),
//! Fail 
console.log(a.t0.response);case 14:case"end":return a.stop()}}),a,null,[[1,11]])})))()},validateRoleUser:function(e){var t=localStorage.getItem("email"),a=e.filter((function(e){return e.email==t})),s=[];s.push({id:a[0].id,name:a[0].name,email:a[0].email,active:!!a[0].active,verify:!!a[0].verify,agent:!!a[0].agent,vendor:!1});var n,i=(0,r.Z)(e);try{for(i.s();!(n=i.n()).done;){var o=n.value;a[0].id==o.parent&&s.push({id:o.id,name:o.name,email:o.email,active:!!o.active,verify:!!o.verify,agent:!!o.agent,vendor:!0})}}catch(c){i.e(c)}finally{i.f()}return s}};t["Z"]=i}}]);
//# sourceMappingURL=394-legacy.2bda827d.js.map