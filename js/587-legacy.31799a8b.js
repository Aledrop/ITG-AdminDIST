"use strict";(self["webpackChunkiristravel"]=self["webpackChunkiristravel"]||[]).push([[587],{1587:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("Header",{staticClass:"py-4"}),i("div",{staticClass:"container-fluid flex flex-col gap-6 py-6 px-2 md:flex-row"},[i("sidebar",{staticClass:"md:w-1/4 border shadow",on:{setNavBar:e.updRightConten,crudStatus:e.updCrud}}),i("div",{staticClass:"flex flex-1 flex-col w-full border shadow rounded-lg bg-white text-left py-4 p-8"},[i("div",{staticClass:"grid grid-cols-admin h-10 border-b-2 mb-2"},[i("h2",{staticClass:"text-2xl "},[e._v(e._s(e.title))]),i("div",{staticClass:"flex"},[i("button",{directives:[{name:"show",rawName:"v-show",value:e.crudvisible,expression:"crudvisible"}],staticClass:"w-full text-center",on:{click:e.showTable}},[i("i",{staticClass:"fa fa-arrow-left"})]),i("button",{directives:[{name:"show",rawName:"v-show",value:!e.crudvisible,expression:"!crudvisible"}],staticClass:"w-full text-center",on:{click:e.refreshTable}},[i("i",{staticClass:"fas fa-sync text-green-400"})]),i("button",{directives:[{name:"show",rawName:"v-show",value:!e.crudvisible,expression:"!crudvisible"}],staticClass:"w-full text-center",on:{click:e.createRow}},[i("i",{staticClass:"fa fa-plus text-green-400"})])])]),e.crudvisible?e._e():i("admin-table",{attrs:{actions:{show:!0,edit:!0,delete:!0},deleteCols:[],rows:e.localData},on:{editData:e.editRow,deleteData:e.deleteRow}}),e.crudvisible?i("dashboard",{attrs:{menu:e.activeMenu,modeAction:e.mode,objId:e.formInfo}}):e._e()],1)],1)],1)},s=[],l=i(3222),r=i(6427),o=i(23),n=i(8406),c=i(6178),d=i(2207),u={name:"Admin",components:{Header:l.Z,Sidebar:c.Z,AdminTable:r.Z,Dashboard:d.Z},data:function(){return{title:"Usuarios",mode:"create",formInfo:0,localData:[{name:"Melia Varadero1",email:"meliavaradero@melia.com",agent:"Melia-Varadero"}],crudvisible:!1,activeMenu:"client",isLogged:!1}},created:function(){this.title=o.Z.validateRole(["ROLE_Agency","ROLE_Admin"])?"Usuarios":o.Z.validateRole(["ROLE_Comercial"])?"Polos":"Usuarios",this.isLogged=o.Z.isClientLogged(),this.activeMenu=void 0==this.$route.params.CrudKey?"client":this.$route.params.CrudKey,this.initCrud(this.activeMenu)},methods:{initCrud:function(e){var t=this;n.Z.init(e).then((function(e){t.localData=e}))},updRightConten:function(e,t,i){this.title=e,this.activeMenu=t,this.localData=i||[]},createRow:function(){this.mode="create",this.crudvisible=!this.crudvisible},editRow:function(e){this.crudvisible=!this.crudvisible,this.mode="update",this.formInfo=e.id},deleteRow:function(e){var t=this;n.Z["delete"](this.activeMenu,e).then((function(e){t.localData=e}))},refreshTable:function(){var e=this;n.Z.init(this.activeMenu).then((function(t){e.localData=t}))},showTable:function(){this.crudvisible=!this.crudvisible},updCrud:function(){this.mode="create",this.crudvisible=!1}}},h=u,f=i(1001),v=(0,f.Z)(h,a,s,!1,null,"339cff00",null),b=v.exports}}]);
//# sourceMappingURL=587-legacy.31799a8b.js.map