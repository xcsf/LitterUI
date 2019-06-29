(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{224:function(e,t,s){},225:function(e,t,s){},226:function(e,t,s){},263:function(e,t,s){"use strict";var i=s(224);s.n(i).a},264:function(e,t,s){"use strict";var i=s(225);s.n(i).a},265:function(e,t,s){"use strict";var i=s(226);s.n(i).a},280:function(e,t,s){"use strict";s.r(t);s(13),s(48),s(188);var i={name:"GuleSlides",components:{"g-icon":s(187).a},props:{selected:{type:String},autoPlay:{type:Boolean,default:!1},autoPlayDelay:{type:Number,default:3e3},card:{type:Boolean}},data:function(){return{lastSelectedIndex:void 0,timeId:void 0,touchStart:void 0,childrenLength:void 0}},computed:{selectedIndex:function(){var e=this.names.indexOf(this.selected);return-1===e?0:e},names:function(){return this.items.map(function(e){return e.name})},items:function(){return this.$children.filter(function(e){return"GuleSlidesItem"===e.$options.name})}},mounted:function(){var e=this;this.updateChildren(),this.autoPlay&&this.playAutomatically(),this.childrenLength=this.items.length,this.items.forEach(function(t,s){t.prev=e.getNextandPrev(s,e.childrenLength).prev,t.next=e.getNextandPrev(s,e.childrenLength).next,t.card=e.card})},updated:function(){this.updateChildren()},methods:{onTouchStart:function(e){this.touchStart=e.touches[0],this.pause()},onTouchMove:function(){},onTouchEnd:function(e){var t=this.touchStart,s=t.clientX,i=t.clientY,n=e.changedTouches[0],d=n.clientX,a=n.clientY;Math.abs(s-d)>Math.abs(i-a)&&(s<d?this.selectItem(this.selectedIndex-1):this.selectItem(this.selectedIndex+1)),this.autoPlay&&this.playAutomatically()},selectItem:function(e){-1===e&&(e=this.names.length-1),e===this.names.length&&(e=0),this.$emit("update:selected",this.names[e])},playAutomatically:function(){var e=this;if(!this.timeId){this.timeId=setTimeout(function(){!function t(){var s=e.selectedIndex+1;e.selectItem(s),e.timeId=setTimeout(function(){t()},e.autoPlayDelay)}()},this.autoPlayDelay)}},pause:function(){clearTimeout(this.timeId),this.timeId=void 0},onMouseEnter:function(){this.pause()},onMouseLeave:function(){this.autoPlay&&this.playAutomatically()},getSelected:function(){return this.selected||this.items[0].name},getNextandPrev:function(e,t){var s=e+1<t?e+1:0,i=e-1>=0?e-1:t-1;return{next:this.items[s].name,prev:this.items[i].name}},updateChildren:function(){var e=this,t=this.getSelected();this.items.forEach(function(s){var i=!(e.selectedIndex>e.lastSelectedIndex);e.timeId&&(e.lastSelectedIndex===e.items.length-1&&0===e.selectedIndex&&(i=!0),0===e.lastSelectedIndex&&e.selectedIndex===e.items.length-1&&(i=!1)),s.reverse=i,e.$nextTick(function(){s.selected=t})}),this.lastSelectedIndex=this.selectedIndex}}},n=(s(263),s(1)),d=Object(n.a)(i,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"g-slides",on:{touchstart:e.onTouchStart,touchmove:e.onTouchMove,touchend:e.onTouchEnd,mouseenter:e.onMouseEnter,mouseleave:e.onMouseLeave}},[s("div",{staticClass:"g-slides-window"},[s("div",{staticClass:"g-slides-wapper"},[e._t("default")],2)]),e._v(" "),s("div",{staticClass:"g-slides-dots"},[s("span",{on:{click:function(t){return e.selectItem(e.selectedIndex-1)}}},[s("g-icon",{attrs:{name:"left"}})],1),e._v(" "),s("div",{staticClass:"g-slides-page"},e._l(e.childrenLength,function(t,i){return s("span",{key:i,class:{active:e.selectedIndex===i},attrs:{"data-index":i},on:{click:function(t){return e.selectItem(i)}}},[e._v(e._s(i))])}),0),e._v(" "),s("span",{on:{click:function(t){return e.selectItem(e.selectedIndex+1)}}},[s("g-icon",{attrs:{name:"right"}})],1)])])},[],!1,null,"660d268f",null).exports,a={name:"GuleSlidesItem",props:{name:{type:String,required:!0}},data:function(){return{selected:"",card:void 0,reverse:!1,prev:"",next:""}},computed:{visible:function(){return this.card?this.selected===this.name||this.selected===this.prev||this.selected===this.next:this.selected===this.name},positionCard:function(){return this.card?{card:!0,"position-prev":this.selected===this.next,"position-center":this.selected===this.name,"position-next":this.selected===this.prev}:{}}}},l=(s(264),{components:{"g-slides":d,"g-slides-item":Object(n.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"slide"}},[this.visible?t("div",{staticClass:"g-slidesitem",class:[{reverse:this.reverse},this.positionCard]},[this._t("default")],2):this._e()])},[],!1,null,"1cfe967f",null).exports,"s-wrapper":s(186).default},data:function(){return{selectedSlides:"second",selectedSlides1:"first",instruction1:"使用 :selected.sync 绑定 slides-item 中唯一标识属性 name 类型为 String",instruction2:"添加 autoPlay 属性开启自动切换, 可通过 autoPlayDelay 属性设置间隔时间，单位：毫秒(ms)，默认为 3000ms,当鼠标移入时则会停止自动切换",code1:'<g-slides :selected.sync="selectedSlides">\n  <g-slides-item name="first">\n    <div class="box">0</div>\n  </g-slides-item>\n  <g-slides-item name="second">\n    <div class="box">1</div>\n  </g-slides-item>\n  <g-slides-item name="third">\n    <div class="box">2</div>\n  </g-slides-item>\n  <g-slides-item name="four">\n    <div class="box">3</div>\n  </g-slides-item>\n  <g-slides-item name="five">\n    <div class="box">4</div>\n  </g-slides-item>\n</g-slides>',code2:'<g-slides :selected.sync="selectedSlides1" autoPlay :autoPlayDelay=\'2000\'>\n  <g-slides-item name="first">\n    <div class="box">0</div>\n  </g-slides-item>\n  <g-slides-item name="second">\n    <div class="box">1</div>\n  </g-slides-item>\n  <g-slides-item name="third">\n    <div class="box">2</div>\n  </g-slides-item>\n  <g-slides-item name="four">\n    <div class="box">3</div>\n  </g-slides-item>\n  <g-slides-item name="five">\n    <div class="box">4</div>\n  </g-slides-item>\n</g-slides>',code3:'<g-slides :selected.sync="selectedSlides" card>\n  <g-slides-item name="first">\n    <div class="box">0</div>\n  </g-slides-item>\n  <g-slides-item name="second">\n    <div class="box">1</div>\n  </g-slides-item>\n  <g-slides-item name="third">\n    <div class="box">2</div>\n  </g-slides-item>\n  <g-slides-item name="four">\n    <div class="box">3</div>\n  </g-slides-item>\n  <g-slides-item name="five">\n    <div class="box">4</div>\n  </g-slides-item>\n</g-slides>'}}}),c=(s(265),Object(n.a)(l,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("s-wrapper",{attrs:{title:"基础用法",instruction:e.instruction1}},[s("template",{slot:"component"},[s("g-slides",{attrs:{selected:e.selectedSlides},on:{"update:selected":function(t){e.selectedSlides=t}}},[s("g-slides-item",{attrs:{name:"first"}},[s("div",{staticClass:"box"},[e._v("0")])]),e._v(" "),s("g-slides-item",{attrs:{name:"second"}},[s("div",{staticClass:"box"},[e._v("1")])]),e._v(" "),s("g-slides-item",{attrs:{name:"third"}},[s("div",{staticClass:"box"},[e._v("2")])]),e._v(" "),s("g-slides-item",{attrs:{name:"four"}},[s("div",{staticClass:"box"},[e._v("3")])]),e._v(" "),s("g-slides-item",{attrs:{name:"five"}},[s("div",{staticClass:"box"},[e._v("4")])])],1)],1),e._v(" "),s("pre",{attrs:{slot:"code"},slot:"code"},[s("code",[e._v(e._s(e.code1))])])],2),e._v(" "),s("s-wrapper",{attrs:{title:"autoPlay 与 autoPlayDelay",instruction:e.instruction2}},[s("template",{slot:"component"},[s("g-slides",{attrs:{selected:e.selectedSlides1,autoPlay:"",autoPlayDelay:2e3},on:{"update:selected":function(t){e.selectedSlides1=t}}},[s("g-slides-item",{attrs:{name:"first"}},[s("div",{staticClass:"box"},[e._v("0")])]),e._v(" "),s("g-slides-item",{attrs:{name:"second"}},[s("div",{staticClass:"box"},[e._v("1")])]),e._v(" "),s("g-slides-item",{attrs:{name:"third"}},[s("div",{staticClass:"box"},[e._v("2")])]),e._v(" "),s("g-slides-item",{attrs:{name:"four"}},[s("div",{staticClass:"box"},[e._v("3")])]),e._v(" "),s("g-slides-item",{attrs:{name:"five"}},[s("div",{staticClass:"box"},[e._v("4")])])],1)],1),e._v(" "),s("pre",{attrs:{slot:"code"},slot:"code"},[s("code",[e._v(e._s(e.code2))])])],2),e._v(" "),s("s-wrapper",{attrs:{title:"card 卡片化"}},[s("template",{slot:"component"},[s("g-slides",{attrs:{selected:e.selectedSlides,card:""},on:{"update:selected":function(t){e.selectedSlides=t}}},[s("g-slides-item",{attrs:{name:"first"}},[s("div",{staticClass:"box"},[e._v("0")])]),e._v(" "),s("g-slides-item",{attrs:{name:"second"}},[s("div",{staticClass:"box"},[e._v("1")])]),e._v(" "),s("g-slides-item",{attrs:{name:"third"}},[s("div",{staticClass:"box"},[e._v("2")])]),e._v(" "),s("g-slides-item",{attrs:{name:"four"}},[s("div",{staticClass:"box"},[e._v("3")])]),e._v(" "),s("g-slides-item",{attrs:{name:"five"}},[s("div",{staticClass:"box"},[e._v("4")])])],1)],1),e._v(" "),s("pre",{attrs:{slot:"code"},slot:"code"},[s("code",[e._v(e._s(e.code3))])])],2)],1)},[],!1,null,"ed4a1110",null));t.default=c.exports}}]);