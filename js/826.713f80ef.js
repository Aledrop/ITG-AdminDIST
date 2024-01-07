"use strict";(self["webpackChunkiristravel"]=self["webpackChunkiristravel"]||[]).push([[826],{4826:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var s=function(){var e=this,t=e._self._c;return t("section",[t("Header",{staticClass:"py-4"}),t("div",{staticClass:"container-fluid flex flex-col gap-6 py-6 px-2 md:flex-row"},[t("sidebar",{staticClass:"md:w-1/4 border shadow",on:{setNavBar:e.updRightConten,crudStatus:e.updCrud}}),t("div",{staticClass:"flex flex-1 flex-col w-full border shadow rounded-lg bg-white text-left py-4 p-8"},[t("div",{staticClass:"grid grid-cols-admin h-10 border-b-2 mb-2"},[t("h2",{staticClass:"text-2xl"},[e._v(e._s(e.title))]),t("div",{staticClass:"flex"},[t("button",{directives:[{name:"show",rawName:"v-show",value:e.crudvisible,expression:"crudvisible"}],staticClass:"w-full text-center",on:{click:e.showTable}},[t("i",{staticClass:"fa fa-arrow-left"})]),t("button",{directives:[{name:"show",rawName:"v-show",value:!e.crudvisible,expression:"!crudvisible"}],staticClass:"w-full text-center",on:{click:e.refreshTable}},[t("i",{staticClass:"fas fa-sync text-green-400"})]),t("button",{directives:[{name:"show",rawName:"v-show",value:!e.crudvisible,expression:"!crudvisible"}],staticClass:"w-full text-center",on:{click:e.createRow}},[t("i",{staticClass:"fa fa-plus text-green-400"})])])]),e.crudvisible?e._e():t("admin-table",{attrs:{actions:{show:!0,edit:!0,delete:!0},deleteCols:[],rows:e.localData},on:{editData:e.editRow,deleteData:e.deleteRow}}),e.crudvisible?t("dashboard",{attrs:{menu:e.activeMenu,modeAction:e.mode,objId:e.formInfo}}):e._e()],1)],1)],1)},a=[],l=i(4886),r=i(5917),o=i(4944),d=i(4159),c=i(5096),n=i(2778),u={name:"Admin",components:{Header:l.Z,Sidebar:c.Z,AdminTable:r.Z,Dashboard:n.Z},data(){return{title:"",mode:"create",errMsg:"",formInfo:0,localData:[{name:"Melia Varadero1",email:"meliavaradero@melia.com",agent:"Melia-Varadero"}],crudvisible:!1,activeMenu:"client",isLogged:!1}},created(){this.title=o.Z.validateRole(["ROLE_Agency","ROLE_Admin"])?"Usuarios":o.Z.validateRole(["ROLE_Comercial"])?"Polos":"Usuarios",this.isLogged=o.Z.isClientLogged(),this.activeMenu=void 0==this.$route.params.CrudKey?"client":this.$route.params.CrudKey,this.initCrud(this.activeMenu)},methods:{initCrud(e){d.Z.init(e).then((e=>{"errors"in e?console.log(e.errors):this.localData=e}))},updRightConten(e,t,i){this.title=e,this.activeMenu=t,this.localData=i||[]},createRow(){"booking"!==this.$route.params.CrudKey&&(this.mode="create",this.crudvisible=!this.crudvisible)},editRow(e){this.crudvisible=!this.crudvisible,this.mode="update",this.formInfo=e.id},deleteRow(e){d.Z.delete(this.activeMenu,e).then((e=>{this.localData=e}))},refreshTable(){d.Z.init(this.activeMenu).then((e=>{this.localData=e}))},showTable(){this.crudvisible=!this.crudvisible},updCrud(){this.mode="create",this.crudvisible=!1}}},h=u,v=i(1001),b=(0,v.Z)(h,s,a,!1,null,"185da1d6",null),m=b.exports}}]);
//# sourceMappingURL=826.713f80ef.js.map