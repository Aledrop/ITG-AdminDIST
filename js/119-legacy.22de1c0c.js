"use strict";(self["webpackChunkiristravel"]=self["webpackChunkiristravel"]||[]).push([[119],{7119:function(e,a,i){i.r(a),i.d(a,{default:function(){return v}});var t=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("section",[i("Header",{staticClass:"py-4"}),i("div",{staticClass:"container-fluid flex flex-col gap-6 py-6 px-2 md:flex-row"},[i("sidebar",{staticClass:"md:w-1/4 border shadow",on:{setNavBar:e.updRightConten,crudStatus:e.updCrud}}),i("div",{staticClass:"flex flex-1 flex-col w-full border shadow rounded-lg bg-white text-left py-4 p-8"},[i("div",{staticClass:"grid grid-cols-admin h-10 border-b-2 mb-2"},[i("h2",{staticClass:"text-2xl "},[e._v(e._s(e.title))]),i("div",[i("button",{directives:[{name:"show",rawName:"v-show",value:e.crudvisible,expression:"crudvisible"}],staticClass:"w-full text-center",on:{click:e.showTable}},[i("i",{staticClass:"fa fa-arrow-left"})])])]),i("dashboard",{attrs:{menu:e.activeMenu,modeAction:e.mode,objId:e.formInfo}})],1)],1)],1)},r=[],l=i(3222),s=i(4448),o=i(23),d=i(8406),n=i(4141),c=i(7786),u={name:"Admin",components:{Header:l.Z,Sidebar:n.Z,AdminTable:s.Z,Dashboard:c.Z},data:function(){return{title:"Prices",mode:"create",formInfo:0,localData:[{name:"Melia Varadero1",email:"meliavaradero@melia.com",agent:"Melia-Varadero"}],crudvisible:!1,activeMenu:"client",isLogged:!1}},created:function(){this.isLogged=o.Z.isClientLogged(),this.activeMenu=void 0==this.$route.params.CrudKey?"client":this.$route.params.CrudKey,this.initCrud(this.activeMenu)},methods:{initCrud:function(e){var a=this;d.Z.init(e).then((function(e){a.localData=e}))},updRightConten:function(e,a,i){this.title=e,this.activeMenu=a,this.localData=i||[{name:"Melia Varadero1",email:"meliavaradero@melia.com",agent:"Melia-Varadero"},{name:"Melia Varadero1",email:"meliavaradero@melia.com",agent:"Melia-Varadero"},{name:"Melia Varadero1",email:"meliavaradero@melia.com",agent:"Melia-Varadero"},{name:"Melia Varadero1",email:"meliavaradero@melia.com",agent:"Melia-Varadero"}]},createRow:function(){this.mode="create",this.crudvisible=!this.crudvisible},editRow:function(e){this.crudvisible=!this.crudvisible,this.mode="update",this.formInfo=e.id},showTable:function(){this.crudvisible=!this.crudvisible},updCrud:function(){this.mode="create",this.crudvisible=!1}}},m=u,h=i(1001),f=(0,h.Z)(m,t,r,!1,null,null,null),v=f.exports}}]);
//# sourceMappingURL=119-legacy.22de1c0c.js.map