(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{208:function(t,s,o){},209:function(t,s,o){},210:function(t,s,o){},245:function(t,s,o){"use strict";var n=o(208);o.n(n).a},246:function(t,s,o){"use strict";var n=o(209);o.n(n).a},247:function(t,s,o){"use strict";var n=o(210);o.n(n).a},278:function(t,s,o){"use strict";o.r(s);o(13),o(188);var n={name:"GuluRow",props:{gutter:[Number,String],align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},created:function(){},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach(function(s){s.gutter=t.gutter})}},a=(o(245),o(1)),c=Object(a.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["g-row",this.rowClass],style:this.rowStyle},[this._t("default")],2)},[],!1,null,"1d71baa2",null).exports,e=o(9),l=(o(18),o(26),function(t){var s=!0;return Object.keys(t).forEach(function(t){["span","offset"].indexOf(t)<0&&(s=!1)}),s}),i={name:"GuluCol",props:{span:[Number,String],offset:[Number,String],ipad:{type:Object,validator:l},narrowPc:{type:Object,validator:l},pc:{type:Object,validator:l},widePc:{type:Object,validator:l}},methods:{createClasses:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var o=[];return t.span&&o.push("col-".concat(s).concat(t.span)),t.offset&&o.push("offset-".concat(s).concat(t.offset)),o}},computed:{colStyle:function(){var t=this.gutter;return{paddingLeft:t/2+"px",paddingRight:t/2+"px"}},colClass:function(){var t=this.span,s=this.offset,o=this.ipad,n=this.narrowPc,a=this.pc,c=this.widePc,l=this.createClasses;return["g-col"].concat(Object(e.a)(l({span:t,offset:s})),Object(e.a)(l(o,"ipad-")),Object(e.a)(l(n,"narrow-pc-")),Object(e.a)(l(a,"pc-")),Object(e.a)(l(c,"wide-pc-")))}},data:function(){return{gutter:[Number,String]}},mounted:function(){},created:function(){}},d=(o(246),{components:{"g-row":c,"g-col":Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"2b71e72d",null).exports,"s-wrapper":o(186).default},data:function(){return{code1:'<g-row>\n  <g-col span="12">\n    <div class="demo">12</div>\n  </g-col>\n  <g-col span="12">\n    <div class="demo">12</div>\n  </g-col>\n</g-row>\n<g-row>\n  <g-col span="8">\n    <div class="demo">8</div>\n  </g-col>\n  <g-col span="8">\n    <div class="demo">8</div>\n  </g-col>\n  <g-col span="8">\n    <div class="demo">8</div>\n  </g-col>\n</g-row>\n<g-row>\n  <g-col span="6">\n    <div class="demo">6</div>\n  </g-col>\n  <g-col span="6">\n    <div class="demo">6</div>\n  </g-col>\n  <g-col span="6">\n    <div class="demo">6</div>\n  </g-col>\n  <g-col span="6">\n    <div class="demo">6</div>\n  </g-col>\n</g-row>',code2:'<g-row gutter="10">\n  <g-col span="12">\n    <div class="demo">12</div>\n  </g-col>\n  <g-col span="12">\n    <div class="demo">12</div>\n  </g-col>\n</g-row>\n<g-row gutter="10">\n  <g-col span="8">\n    <div class="demo">8</div>\n  </g-col>\n  <g-col span="8">\n    <div class="demo">8</div>\n  </g-col>\n  <g-col span="8">\n    <div class="demo">8</div>\n  </g-col>\n</g-row>\n<g-row gutter="10">\n  <g-col span="6">\n    <div class="demo">6</div>\n  </g-col>\n  <g-col span="6">\n    <div class="demo">6</div>\n  </g-col>\n  <g-col span="6">\n    <div class="demo">6</div>\n  </g-col>\n  <g-col span="6">\n    <div class="demo">6</div>\n  </g-col>\n</g-row>',code3:'<g-row>\n  <g-col span="8">\n    <div class="demo">8</div>\n  </g-col>\n  <g-col span="8" offset="8">\n    <div class="demo">8</div>\n  </g-col>\n</g-row>\n<g-row>\n  <g-col span="6">\n    <div class="demo">6</div>\n  </g-col>\n  <g-col span="6" offset="3">\n    <div class="demo">6</div>\n  </g-col>\n  <g-col span="6" offset="3">\n    <div class="demo">6</div>\n  </g-col>\n</g-row>\n<g-row >\n  <g-col span="3">\n    <div class="demo">6</div>\n  </g-col>\n  <g-col span="3"  offset="3">\n    <div class="demo">6</div>\n  </g-col>\n  <g-col span="3" offset="3">\n    <div class="demo">6</div>\n  </g-col>\n  <g-col span="3" offset="3">\n    <div class="demo">6</div>\n  </g-col>\n</g-row>'}}}),r=(o(247),Object(a.a)(d,function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",[o("s-wrapper",{attrs:{title:"24格网格"}},[o("template",{slot:"component"},[o("g-row",[o("g-col",{attrs:{span:"12"}},[o("div",{staticClass:"demo"},[t._v("12")])]),t._v(" "),o("g-col",{attrs:{span:"12"}},[o("div",{staticClass:"demo"},[t._v("12")])])],1),t._v(" "),o("g-row",[o("g-col",{attrs:{span:"8"}},[o("div",{staticClass:"demo"},[t._v("8")])]),t._v(" "),o("g-col",{attrs:{span:"8"}},[o("div",{staticClass:"demo"},[t._v("8")])]),t._v(" "),o("g-col",{attrs:{span:"8"}},[o("div",{staticClass:"demo"},[t._v("8")])])],1),t._v(" "),o("g-row",[o("g-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo"},[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo"},[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo"},[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo"},[t._v("6")])])],1)],1),t._v(" "),o("pre",{attrs:{slot:"code"},slot:"code"},[o("code",[t._v(t._s(t.code1))])])],2),t._v(" "),o("s-wrapper",{attrs:{title:"设置(间隔)gutter"}},[o("template",{slot:"component"},[o("g-row",{attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"12"}},[o("div",{staticClass:"demo"},[t._v("12")])]),t._v(" "),o("g-col",{attrs:{span:"12"}},[o("div",{staticClass:"demo"},[t._v("12")])])],1),t._v(" "),o("g-row",{attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"8"}},[o("div",{staticClass:"demo"},[t._v("8")])]),t._v(" "),o("g-col",{attrs:{span:"8"}},[o("div",{staticClass:"demo"},[t._v("8")])]),t._v(" "),o("g-col",{attrs:{span:"8"}},[o("div",{staticClass:"demo"},[t._v("8")])])],1),t._v(" "),o("g-row",{attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo"},[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo"},[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo"},[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo"},[t._v("6")])])],1)],1),t._v(" "),o("pre",{attrs:{slot:"code"},slot:"code"},[o("code",[t._v(t._s(t.code2))])])],2),t._v(" "),o("s-wrapper",{attrs:{title:"设置(偏移)offset"}},[o("template",{slot:"component"},[o("g-row",[o("g-col",{attrs:{span:"8"}},[o("div",{staticClass:"demo"},[t._v("8")])]),t._v(" "),o("g-col",{attrs:{span:"8",offset:"8"}},[o("div",{staticClass:"demo"},[t._v("8")])])],1),t._v(" "),o("g-row",[o("g-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo"},[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6",offset:"3"}},[o("div",{staticClass:"demo"},[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6",offset:"3"}},[o("div",{staticClass:"demo"},[t._v("6")])])],1),t._v(" "),o("g-row",[o("g-col",{attrs:{span:"3"}},[o("div",{staticClass:"demo"},[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"3",offset:"3"}},[o("div",{staticClass:"demo"},[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"3",offset:"3"}},[o("div",{staticClass:"demo"},[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"3",offset:"3"}},[o("div",{staticClass:"demo"},[t._v("6")])])],1)],1),t._v(" "),o("pre",{attrs:{slot:"code"},slot:"code"},[o("code",[t._v(t._s(t.code3))])])],2)],1)},[],!1,null,null,null));s.default=r.exports}}]);