webpackJsonp([1],{"0hb3":function(e,t){},"C/5X":function(e,t,n){e.exports=n.p+"static/img/header.9f2de8a.png"},HDvV:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("yf3K"),i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var r,a=n("C7Lr")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},i,!1,function(e){n("0hb3")},"data-v-d8ec41bc",null).exports,s=n("DoAe"),c=n.n(s),l=c.a.create({baseURL:"http://api.yensean.com/bimbox/v1",timeout:2e3,headers:{Authorization:"Bearer "+window.sessionStorage.TOKEN}}),d=n("lC5x"),u=n.n(d),h=n("J0Oq"),m=n.n(h),v=n("zP5y"),f=this,_=void 0,p=void 0,b=void 0,g="b8b545fda078442c99f21c9b6d5d8c9d",x=(r=m()(u.a.mark(function e(t){var n,o,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new v.b).viewToken=g,e.next=4,v.a.load(n);case 4:"3DView"==e.sent.viewType&&(o=document.getElementById(t),(i=new v.c.Bimface.Application.WebApplication3DConfig).Toolbars=[],i.Buttons=[],i.domElement=o,_=new v.c.Bimface.Application.WebApplication3D(i),(p=_.getViewer()).loadModel({viewToken:g}),p.addEventListener(v.c.Bimface.Viewer.Viewer3DEvent.ViewAdded,function(){p.hideViewHouse();var e=new v.c.Web.Graphics.Color(12,19,72,0);p.setBackgroundColor(e),p.render();var t=new v.c.Bimface.Plugins.Anchor.AnchorManagerConfig;t.viewer=p,b=new v.c.Bimface.Plugins.Anchor.AnchorManager(t)}),p.addEventListener(v.c.Bimface.Viewer.Viewer3DEvent.MouseClicked,function(e){console.log(e)}));case 6:case"end":return e.stop()}},e,f)})),function(e){return r.apply(this,arguments)}),w={methods:{greet:function(){c()({url:"http://api.yensean.com/bimbox/v1/Login",method:"post",data:{userName:"bimbox",password:"123789"}}).then(function(e){window.sessionStorage.TOKEN=e.data.token,console.log(e),l({url:"/ChartB",method:"post",data:{year:"2024",data:[1,2,3,4]}})})},setColor:function(){_BoxViewer.setObjectColorByName("mesh_10_1")},baseColor:function(){obvApi.setObjectsColor([{dbId:16,modelId:1}],255*Math.random(),161,180)},faceColor:function(){var e,t;e=p.getModel(),t=new v.c.Web.Graphics.Color("#EE799F",.8),e.overrideComponentsColorById(["140056"],t),function(){var e=new v.c.Bimface.Plugins.Anchor.PrismPointConfig,t=p.getModel().getBoundingBoxById("140056");t&&(e.position.x=(t.max.x+t.min.x)/2,e.position.y=(t.max.y+t.min.y)/2,e.position.z=t.max.z),e.duration=1500,e.size=3500;var n=new v.c.Bimface.Plugins.Anchor.PrismPoint(e);b.addItem(n)}()}}},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"the-icon"},[t("button",{staticClass:"icon-title",on:{click:this.faceColor}},[this._v("标签A")]),this._v(" "),t("img",{staticClass:"icon-img",attrs:{src:n("a2lK"),alt:""}})])},staticRenderFns:[]};var C={name:"BoxFooter",components:{BoxIcon:n("C7Lr")(w,y,!1,function(e){n("djQ7")},"data-v-f0fc5908",null).exports}},B={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bimbox-footer"},[t("BoxIcon")],1)},staticRenderFns:[]};var k=n("C7Lr")(C,B,!1,function(e){n("T2U/")},"data-v-2bc90a38",null).exports,A={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bimbox-header"},[t("div",{staticClass:"header-content"},[t("h1",[this._v("BIMBOX数据大屏")])]),this._v(" "),t("img",{staticClass:"header-img",attrs:{src:n("C/5X"),alt:""}})])}]};var E=n("C7Lr")({},A,!1,function(e){n("qsf3")},"data-v-16fa323a",null).exports,T={name:"BoxContent",props:{ModifiedHeight:{type:String,required:!0},ModifiedTile:{type:String,required:!0}}},S={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"box-content",style:{height:this.ModifiedHeight}},[t("div",{staticClass:"box-title"},[t("div",{staticClass:"title-column"}),this._v(" "),t("p",{staticClass:"title-content"},[this._v(this._s(this.ModifiedTile))])]),this._v(" "),t("div",{staticClass:"box-charts"},[this._t("default")],2)])},staticRenderFns:[]};var V=n("C7Lr")(T,S,!1,function(e){n("bg/K")},"data-v-21184658",null).exports,j=n("Fo1S"),I={name:"boxChartA",mounted:function(){this.myEcharts()},methods:{myEcharts:function(){j.b(document.getElementById("boxChartA")).setOption({tooltip:{trigger:"axis"},legend:{data:["DataA","DataB","DataC"],right:"2",textStyle:{color:"rgba(255, 255, 255, 1)"}},grid:{left:"3",right:"10",bottom:"40",top:"20",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"DataA",type:"line",stack:"Total",data:[120,132,101,134,90,230,210],lineStyle:{color:"rgba(74,136,255,1)"},itemStyle:{color:"rgba(74,136,255,1)",borderWidth:2}},{name:"DataB",type:"line",stack:"Total",data:[220,182,191,234,290,330,310],lineStyle:{color:"rgba(33,245,255,1)"},itemStyle:{color:"rgba(33,245,255,1)",borderWidth:2}},{name:"DataC",type:"line",stack:"Total",data:[150,232,201,154,190,330,410],lineStyle:{color:"rgba(222,188,76,1)"},itemStyle:{color:"rgba(222,188,76,1)",borderWidth:2}}]})}}},L={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"boxChartA"}})},staticRenderFns:[]};var F={name:"boxChartB",mounted:function(){this.myEChart()},methods:{myEChart:function(){var e=j.b(document.getElementById("boxChartB")),t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{right:"2",textStyle:{color:"rgba(255, 255, 255, 1)"}},grid:{left:"3%",right:"4%",bottom:"15%",top:"12%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01],axisLine:{lineStyle:{color:"rgba(255, 255, 255, 0.7)"}}},yAxis:{type:"category",data:["DataA","DataB","DataC","DataD","DataE","DataF"],axisLine:{lineStyle:{color:"rgba(255, 255, 255, 0.7)"}}},series:[{name:"2011",type:"bar",data:[18203,23489,29034,104970,131744,630230],itemStyle:{color:new j.a.LinearGradient(0,1,1,0,[{offset:0,color:"rgba(33,172,152,0.1)"},{offset:1,color:"rgba(33,172,152,1)"}])}},{name:"2012",type:"bar",data:[19325,23438,31e3,121594,134141,681807],itemStyle:{color:new j.a.LinearGradient(0,1,1,0,[{offset:0,color:"rgba(76,152,230,0.1)"},{offset:1,color:"rgba(76,152,230,1)"}])}}]};e.setOption(t)}}},O={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"boxChartB"}})},staticRenderFns:[]};var M={name:"BoxLeftSide",components:{BoxContent:V,BoxChartA:n("C7Lr")(I,L,!1,function(e){n("jF+V")},null,null).exports,BoxChartB:n("C7Lr")(F,O,!1,function(e){n("x2cs")},null,null).exports},data:function(){return{AHeight:"36%",ATile:"体征指数A",BHeight:"43%",BTile:"体征指数B"}}},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"box-leftside"},[t("BoxContent",{attrs:{ModifiedHeight:this.AHeight,ModifiedTile:this.ATile}},[t("BoxChartA")],1),this._v(" "),t("BoxContent",{attrs:{ModifiedHeight:this.BHeight,ModifiedTile:this.BTile}},[t("BoxChartB")],1)],1)},staticRenderFns:[]};var N=n("C7Lr")(M,D,!1,function(e){n("Se/s")},"data-v-60e39290",null).exports,H=n("HzJ8"),R=n.n(H),z=n("IHPB"),U=n.n(z),J=n("AA3o"),P=n.n(J),W=n("xSur"),K=n.n(W),Y=n("WBAC"),G=n("p4rN"),$=function(){function e(t){P()(this,e),this._models=new Y.n,this._scene=new Y._1,this._camera=new Y.S(45,t.clientWidth/t.clientHeight,.1,1e3),this._renderer=new Y._16,this._renderer.setClearColor(0,1),this._renderer.setSize(t.clientWidth,t.clientHeight),t.appendChild(this._renderer.domElement);var n=new Y.a(16777215,2),o=new Y.i(16777215,3);o.position.set(200,200,100),this._scene.add(n),this._scene.add(o),this._controls=new G.a(this._camera,this._renderer.domElement)}return K()(e,[{key:"addObject",value:function(e){var t=[].concat(U()(e)),n=!0,o=!1,i=void 0;try{for(var r,a=R()(t);!(n=(r=a.next()).done);n=!0){var s=r.value;this._models.add(s)}}catch(e){o=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}this._models.rotateX(-Math.PI/2),this._scene.add(this._models)}},{key:"setObjectColorByName",value:function(e){var t=this._models.getObjectByName(e);t&&t.material.color.setHex(16777215*Math.random())}}]),e}(),Q=n("rVsN"),q=n.n(Q),X=n("PmZK"),Z=function e(t,n){P()(this,e),this._raycaster=new Y.Z,this._bimViewer=n,this._mesh=null,this._intersection=null,this._lastIntersection=null,this._lastColor=null;var o=this,i=t.getBoundingClientRect();t.addEventListener("click",function(e){var t=new Y._13(1,1);if(t.x=(e.clientX-i.left-i.width/2)/(i.width/2),t.y=-(e.clientY-i.top-i.height/2)/(i.height/2),o._raycaster.setFromCamera(t,o._bimViewer._camera),console.log("x:"+t.x+" + y:"+t.y),null!=o._bimViewer._models){var n=o._raycaster.intersectObject(o._bimViewer._models);n.length>0?(o._intersection=n[0].object,console.log(o._intersection.name),null!=o._lastIntersection&&o._lastIntersection.material.color.set(o._lastColor),o._lastIntersection=o._intersection,o._lastColor=o._intersection.material.color.clone(),o._intersection.material.color.set(new Y.h(16711680))):(null!=o._lastIntersection&&o._lastIntersection.material.color.set(o._lastColor),o._lastIntersection=null,o._lastColor=null)}})},ee={name:"BoxScene",mounted:function(){var e,t,n=document.getElementById("container");null!=n&&(window._BoxViewer=new $(n),window._BoxRay=new Z(n,_BoxViewer),(e="static/lod0/",t="modelHouse.gltf",new q.a(function(n,o){(new X.a).setPath(e).load(t,function(e){n(e.scene.children),console.log("模型载入成功")})})).then(function(e){_BoxViewer.addObject(e)}),_BoxViewer._camera.position.set(50,50,50),this.animate())},methods:{animate:function(){requestAnimationFrame(this.animate),_BoxViewer._controls.update(),_BoxViewer._renderer.render(_BoxViewer._scene,_BoxViewer._camera)}}},te={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"container"}})},staticRenderFns:[]};var ne=n("C7Lr")(ee,te,!1,function(e){n("YzxC")},null,null).exports,oe={name:"BaseScene",mounted:function(){this.main()},methods:{main:function(){var e=this;return m()(u.a.mark(function t(){var n,o,i,r,a,s,c;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={getAccessToken:e.getAccessToken,refreshAccessToken:e.getAccessToken,serviceConfig:{origin:"https://api.cloud.pkpm.cn",apiContextPath:"/bimserver/viewing/v3"}},o="urn:bimbox.object:seApUHWcws/三层Revit商务办公楼模型_rvt",i=new OBV.Api.ObvBuilder,t.next=5,i.buildApplication(n);case 5:return r=t.sent,t.next=8,i.loadDocument(r,o);case 8:return a=t.sent,t.next=11,i.buildViewer3d(r,document.getElementById("bimbase"));case 11:window.obvApi=t.sent,s=a.get3dGeometryItems(),i.load3dModels(obvApi,{obvDocument:a,viewer3dItem:s[0]}),obvApi.getToolbar().hideToolbar(),obvApi.setBackground(12,19,72,1),(c=document.getElementsByClassName("obv-view-cube-container"))&&c.length>0&&(c[0].style.display="none"),obvApi.addEventListener(OBV.ViewerEventTypes.V3dSelectionChangedEvent,function(e){console.log("V3dSelectionChangedEvent",e)});case 20:case"end":return t.stop()}},t,e)}))()},getAccessToken:function(e){e("eyJhbGciOiJSUzI1NiJ9.eyJzY29wZSI6WyJvYnY6cmVhZCJdLCJleHAiOjE2NTEzNTE4MTcsImNsaWVudF9pZCI6IjNRR3I4QjNjdmtXeTNLYW9CMjRkeGNZVSIsImp0aSI6IjNiZGYyYTkyLWQyOWEtNGY3OS1iNGZiLTE4MzNlZTUxM2IxOSJ9.JDm8F1b70Vo3VMmeXOJbsmFksO54kUeMLmfBhIFX66IqRp2swZcnuR33Za9RnOzPicjyTaHBXuvGwi0fff4cTJygckKA9-AbYnfp0-e8QJ32BFovAhzQZSX3lDmfJcMeOMrpwSRQiB9y_9xV8sLqOzkdCMD18rjvuAUP7h3O2zc8qo8sQJj53Slzb8_u1Cc5Xj72ECDHeAqHKjvEteeuQfzCAcUhrg-H9kgN-VfMTyqhKLJ4_Tkt8j4MKkalgiqJhf-QozAPKrnj0Yzuk1MShmkhdYzlT5Bi_Ni-_oF9TBhf-occN_CFIJpcuPDFlf1whZhtOxL9yjapRzUDODdLhQ",36e3)}}},ie={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"bimbase"}})},staticRenderFns:[]};var re=n("C7Lr")(oe,ie,!1,function(e){n("mY+l")},null,null).exports,ae=n("krVs"),se=n.n(ae),ce={client_id:"3QGr8B3cvkWy3KaoB24dxcYU",client_secret:"3QGr8C3cvkWy3KaqJc1UyEPz",grant_type:"client_credentials"},le="https://api.cloud.pkpm.cn",de=c.a.create({baseURL:le,timeout:1e5,headers:{Authorization:"Bearer "+window.sessionStorage.TOKEN}}),ue=function(){var e=m()(u.a.mark(function e(t){var n,o,i,r,a,s,c,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={getAccessToken:l=function(e){e(window.sessionStorage.TOKEN,36e3)},refreshAccessToken:l,serviceConfig:{origin:"https://api.cloud.pkpm.cn",apiContextPath:"/bimserver/viewing/v3"}},o="urn:bimbox.object:box_test/test_demo",i=new OBV.Api.ObvBuilder,e.next=6,i.buildApplication(n);case 6:return r=e.sent,e.next=9,i.loadDocument(r,o,"rvt-lod");case 9:return a=e.sent,e.next=12,i.buildViewer3d(r,document.getElementById(t));case 12:s=e.sent,c=a.get3dGeometryItems(),i.load3dModels(s,{obvDocument:a,viewer3dItem:c[0]});case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),he={name:"BaseModelUpload",mounted:function(){},methods:{getAccessToken:function(){var e,t;(e={client_id:ce.client_id,client_secret:ce.client_secret,grant_type:ce.grant_type},t={url:le+"/bimserver/auth/oauth/token",method:"post",headers:{"Content-type":"application/x-www-form-urlencoded"},data:se.a.stringify(e)},c()(t)).then(function(e){console.log(e.data),window.sessionStorage.TOKEN=e.data.access_token})},getAllBucket:function(){de({url:"/bimserver/storage/v3/buckets",method:"get"}).then(function(e){console.log(e.data)})},getConverterTypes:function(){var e;(e={url:le+"/bimserver/translation/v3/convertertypes",method:"get"},c()(e)).then(function(e){console.log(e.data)})},createBucket:function(){de({url:"/bimserver/storage/v3/buckets/box_test",method:"post"}).then(function(e){console.log(e.data)})},getUploadURL:function(){de({url:"/bimserver/storage/v3/uploadUrl",method:"get",params:{type:7,expire:6e4,bucketKey:"box_test",objectKey:"test_demo"}}).then(function(e){console.log(e.data.data),window.uploadUrl=e.data.data.uploadUrl,window.signature=e.data.data.signature})},saveFile:function(){var e=document.getElementById("uploadFile").files[0];(function(e,t,n){var o=new FormData;o.append("file",n);var i={url:e,method:"post",data:o,headers:{Authorization:"Bearer "+window.sessionStorage.TOKEN,"Content-type":"application/application/octet-stream","x-bimserver-upload-url":t},onUploadProgress:function(e){var t=e.loaded/e.total*100|0;console.log(t)}};return de(i)})(window.uploadUrl,window.signature,e).then(function(e){console.log(e.data.data)})},convertOnline:function(){de({url:"/bimserver/translation/v3/jobs",method:"post",data:{job_type:"rvt-lod",seed:"urn:bimbox.object:box_test/test_demo"}}).then(function(e){console.log(e.data.data)})},getConvertStatus:function(){de({url:"/bimserver/translation/v3/jobs/states",method:"post",data:{seeds:["urn:bimbox.object:box_test/test_demo"]}}).then(function(e){console.log(e.data.data)})},showModel:function(){ue("bimbase-view")}}},me={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{on:{click:e.getAccessToken}},[e._v("步骤2 获取访问令牌")]),n("br"),e._v(" "),n("button",{on:{click:e.getAllBucket}},[e._v("步骤3 获取所有的Bucket_key")]),n("br"),e._v(" "),n("button",{on:{click:e.getConverterTypes}},[e._v("步骤4 获取所有的文件转换类型")]),n("br"),e._v(" "),n("button",{on:{click:e.createBucket}},[e._v("步骤5 创建Bucket")]),n("br"),e._v(" "),n("button",{on:{click:e.getUploadURL}},[e._v("步骤6 获取上传的URL")]),n("br"),e._v("\n  文件上传"),n("input",{attrs:{type:"file",id:"uploadFile"}}),n("br"),e._v(" "),n("button",{on:{click:e.saveFile}},[e._v("步骤7 上传文件")]),n("br"),e._v(" "),n("button",{on:{click:e.convertOnline}},[e._v("步骤8 创建转换任务")]),n("br"),e._v(" "),n("button",{on:{click:e.getConvertStatus}},[e._v("步骤9 查询转换状态")]),n("br"),e._v(" "),n("button",{on:{click:e.showModel}},[e._v("步骤10  OBV嵌入客户系统页面")]),e._v(" "),n("div",{staticStyle:{position:"relative",width:"600px",height:"600px"},attrs:{id:"bimbase-view"}})])},staticRenderFns:[]};var ve={name:"FaceScene",mounted:function(){x("bimface")}},fe={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"bimface"}})},staticRenderFns:[]};var _e={name:"App",components:{HelloWorld:a,BoxFooter:k,BoxHeader:E,BoxLeftSide:N,BoxScene:ne,BaseScene:re,BaseModelUpload:n("C7Lr")(he,me,!1,function(e){n("gTQV")},null,null).exports,FaceScene:n("C7Lr")(ve,fe,!1,function(e){n("XEJx")},null,null).exports}},pe={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("BoxFooter"),this._v(" "),t("BoxHeader"),this._v(" "),t("BoxLeftSide"),this._v(" "),t("BoxScene")],1)},staticRenderFns:[]};var be=n("C7Lr")(_e,pe,!1,function(e){n("HDvV")},null,null).exports;o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:be},template:"<App/>"})},"Se/s":function(e,t){},"T2U/":function(e,t){},XEJx:function(e,t){},YzxC:function(e,t){},a2lK:function(e,t,n){e.exports=n.p+"static/img/circle.d300c1d.png"},"bg/K":function(e,t){},djQ7:function(e,t){},gTQV:function(e,t){},"jF+V":function(e,t){},"mY+l":function(e,t){},qsf3:function(e,t){},x2cs:function(e,t){}},["NHnr"]);