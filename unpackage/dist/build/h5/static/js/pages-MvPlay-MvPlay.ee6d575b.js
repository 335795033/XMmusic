(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-MvPlay-MvPlay"],{1538:function(n,t,e){"use strict";e.r(t);var a=e("7f6f"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=i.a},"3c7f":function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */#myVideo[data-v-3425f19c]{width:100%}.uni-list-cell-db .uni-input[data-v-3425f19c]{border:1px solid #999;-webkit-border-radius:.2rem;border-radius:.2rem;font-size:.6rem;height:4rem;width:95%;margin:0 auto}.songname[data-v-3425f19c]{width:95%;margin:0 auto;padding:1rem 0}.songname .desc[data-v-3425f19c]{font-size:.8rem;text-indent:2em;color:#999}.songname .singers[data-v-3425f19c]{padding:.5rem 0;font-size:.8rem;text-align:right}.songname .name[data-v-3425f19c]{font-size:.8rem;text-align:right;color:#999;margin:0 0 1rem 0}.uni-btn-v uni-button[data-v-3425f19c]{background-color:#fcefe8}',""])},6773:function(n,t,e){"use strict";var a=e("d894"),i=e.n(a);i.a},"7f6f":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{src:"",danmuList:[{text:"舒服了",color:"#ff0000",time:1},{text:"好腻害的感觉",color:"#ff00ff",time:3}],danmuValue:"",songName:[]}},onLoad:function(n){var t=this;uni.showLoading({title:"loading",mask:!1});var e=n.id;this.src="https://v1.itooi.cn/tencent/mvUrl?id="+e+"&quality=1080",uni.request({url:"https://v1.itooi.cn/tencent/mv?id="+e,method:"GET",data:{},success:function(n){var a=n.data.data[e];t.songName.push(a),console.log(t.songName),uni.hideLoading()},fail:function(){},complete:function(){}})},onReady:function(n){this.videoContext=uni.createVideoContext("myVideo")},methods:{sendDanmu:function(){this.videoContext.sendDanmu({text:this.danmuValue,color:this.getRandomColor()}),this.danmuValue=""},videoErrorCallback:function(n){uni.showModal({content:n.target.errMsg,showCancel:!1})},getRandomColor:function(){for(var n=[],t=0;t<3;++t){var e=Math.floor(256*Math.random()).toString(16);e=1==e.length?"0"+e:e,n.push(e)}return"#"+n.join("")}}};t.default=a},9952:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticStyle:{background:"#fcefe8"}},[e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",[e("v-uni-video",{attrs:{id:"myVideo",src:n.src,"danmu-list":n.danmuList,"enable-danmu":"","danmu-btn":"",controls:"",autoplay:"true"},on:{error:function(t){t=n.$handleEvent(t),n.videoErrorCallback(t)}}})],1),e("v-uni-view",{staticClass:"songname"},[e("v-uni-view",{staticClass:"desc"},[n._v(n._s(n.songName[0].desc))]),e("v-uni-view",{staticClass:"singers"},[n._v(n._s(n.songName[0].name))]),e("v-uni-view",{staticClass:"name"},[n._v(n._s(n.songName[0].singers[0].name))])],1),e("v-uni-view",{staticClass:"uni-list uni-common-mt"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"在此处输入弹幕内容"},model:{value:n.danmuValue,callback:function(t){n.danmuValue=t},expression:"danmuValue"}})],1)],1)],1),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{staticClass:"page-body-button",on:{click:function(t){t=n.$handleEvent(t),n.sendDanmu(t)}}},[n._v("发送弹幕")])],1)],1)],1)},i=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return i})},d894:function(n,t,e){var a=e("3c7f");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("5a0bee8c",a,!0,{sourceMap:!1,shadowMode:!1})},fd17:function(n,t,e){"use strict";e.r(t);var a=e("9952"),i=e("1538");for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);e("6773");var s=e("2877"),r=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"3425f19c",null);t["default"]=r.exports}}]);