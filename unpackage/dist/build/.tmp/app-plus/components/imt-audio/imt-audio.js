(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/imt-audio/imt-audio"],{"0cc7":function(t,n,e){"use strict";var r=e("2fd9"),o=e.n(r);o.a},2929:function(t,n,e){"use strict";e.r(n);var r=e("c0a1"),o=e("4aed");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("0cc7");var a=e("2877"),i=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);n["default"]=i.exports},"2fd9":function(t,n,e){},"4aed":function(t,n,e){"use strict";e.r(n);var r=e("b292"),o=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);n["default"]=o.a},b292:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e("2f62");function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){u(t,n,e[n])})}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var a=t.createInnerAudioContext(),i={data:function(){return{currentTime:"",durationTime:"",current:"",loading:!1,paused:!0,seek:!1}},props:{src:String,autoplay:Boolean,duration:Number,control:{type:Boolean,default:!0},continue:Boolean,color:{type:String,default:"#169af3"}},computed:o({},(0,r.mapState)(["now"])),methods:o({},(0,r.mapActions)(["prev","next"]),{format:function(t){return"0".repeat(2-String(Math.floor(t/60)).length)+Math.floor(t/60)+":"+"0".repeat(2-String(Math.floor(t%60)).length)+Math.floor(t%60)},operation:function(){a.paused?(a.play(),this.loading=!0):a.pause()},change:function(t){a.seek(t.detail.value)}}),created:function(){var t=this;a.src=this.src,this.current=0,this.durationTime=this.format(this.duration),a.obeyMuteSwitch=!1,a.autoplay=this.autoplay,a.onTimeUpdate(function(){t.seek||(t.current=a.currentTime)}),a.onPlay(function(){t.paused=!1,t.loading=!1}),a.onPause(function(){t.paused=!0}),a.onEnded(function(){t.continue?t.next():(t.paused=!0,t.current=0)}),a.onSeeked(function(){t.seek=!1})},watch:{src:function(t){a.src=t,this.current=0,a.play(),this.loading=!0},duration:function(t){this.durationTime=this.format(t)},current:function(t){this.currentTime=this.format(t)}}};n.default=i}).call(this,e("6e42")["default"])},c0a1:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.seek=!0,t.current=n.detail.value})},o=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/imt-audio/imt-audio-create-component',
    {
        'components/imt-audio/imt-audio-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("2929"))
        })
    },
    [['components/imt-audio/imt-audio-create-component']]
]);                