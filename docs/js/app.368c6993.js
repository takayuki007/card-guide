(function(t){function e(e){for(var a,i,r=e[0],l=e[1],o=e[2],u=0,v=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(v.length)v.shift()();return c.push.apply(c,o||[]),s()}function s(){for(var t,e=0;e<c.length;e++){for(var s=c[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},c=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var p=l;c.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header"),s("Main")],1)},c=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("h1",{staticClass:"logo"},[t._v("Card案内所(Vue)")])])}],l={name:"Header",props:{}},o=l,p=s("2877"),u=Object(p["a"])(o,i,r,!1,null,"af15663c",null),v=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"main"},[a("div",{staticClass:"presentation",class:{invisible:t.presentation}},[t._m(0),t._m(1)]),a("div",{staticClass:"question",class:{invisible:t.annualFee}},[a("p",{staticClass:"text text-center"},[t._v("Q1.年会費は無料がいい？")]),a("div",{staticClass:"choices"},[a("p",{staticClass:"text choice choice-blue",on:{click:t.free}},[t._v("無料がいい！")]),a("p",{staticClass:"text choice choice-red",on:{click:t.paid}},[t._v("有料でもいい！")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.travel,expression:"travel"}],staticClass:"question js-travel"},[a("p",{staticClass:"text text-center"},[t._v("Q2.よく旅行に行く？")]),a("div",{staticClass:"choices"},[a("p",{staticClass:"text choice choice-blue",on:{click:t.go}},[t._v("旅行に行く！")]),a("p",{staticClass:"text choice choice-red",on:{click:t.notGo}},[t._v("旅行に行かない！")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.miles,expression:"miles"}],staticClass:"question js-miles"},[t._m(2),a("div",{staticClass:"choices"},[a("p",{staticClass:"text choice choice-blue",on:{click:t.milesImportant}},[t._v("マイル重視！")]),a("p",{staticClass:"text choice choice-red",on:{click:t.statusImportant}},[t._v("ステータス重視！")])])]),a("div",{staticClass:"answer js-cedyna",class:{invisible:t.cedyna}},[a("h2",{staticClass:"heading"},[t._v("あなたにおすすめのカードは・・・")]),a("img",{staticClass:"img",attrs:{src:s("a1a2"),alt:"card"}}),a("h3",{staticClass:"card-name text-center"},[t._v("セディナカード")]),t._m(3),a("a",{staticClass:"text toOfficial text-center",attrs:{href:"https://www.cedyna.co.jp/card/lineup/detail/cedyna/",target:"_blank"}},[t._v("→公式サイトはこちら！")])]),a("div",{staticClass:"answer js-smbc",class:{invisible:t.smbc}},[a("h2",{staticClass:"heading"},[t._v("あなたにおすすめのカードは・・・")]),a("img",{staticClass:"img",attrs:{src:s("61d3"),alt:"card"}}),a("h3",{staticClass:"card-name text-center"},[t._v("三井住友カード")]),t._m(4),a("a",{staticClass:"text text-center toOfficial",attrs:{href:"https://www.smbc-card.com/nyukai/numberless/index.html",target:"_blank"}},[t._v("→公式サイトはこちら！")])]),a("div",{staticClass:"answer js-ana",class:{invisible:t.ana}},[a("h2",{staticClass:"heading"},[t._v("あなたにおすすめのカードは・・・")]),a("img",{staticClass:"img",attrs:{src:s("9d58"),alt:"card"}}),a("h3",{staticClass:"card-name text-center"},[t._v("ANAアメリカンエキスプレスカード")]),t._m(5),a("a",{staticClass:"text text-center toOfficial",attrs:{href:"https://www.americanexpress.com/jp/credit-cards/ana-classic-card/",target:"_blank"}},[t._v("→公式サイトはこちら！")])]),a("div",{staticClass:"answer js-amex",class:{invisible:t.amex}},[a("h2",{staticClass:"heading"},[t._v("あなたにおすすめのカードは・・・")]),a("img",{staticClass:"img",attrs:{src:s("aadc"),alt:"card"}}),t._m(6),t._m(7),a("a",{staticClass:"text text-center toOfficial",attrs:{href:"https://www.americanexpress.com/jp/credit-cards/platinum-card/",target:"_blank"}},[t._v("→公式サイトはこちら！")])])])},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"heading"},[t._v("ぴったりのクレジットカードを"),s("br",{staticClass:"sp-br"}),t._v("提案いたします。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"text text-center"},[t._v("質問に答えて"),s("br",{staticClass:"sp-br"}),t._v("クレジットカードを提案してもらおう！")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"text text-center"},[t._v("Q2.マイル重視？"),s("br",{staticClass:"sp-br"}),t._v("それともステータス重視？")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"text answer-text text-center"},[t._v(" 海外旅行に行くと何かと必要な現地通貨。"),s("br",{staticClass:"pc-br"}),t._v(" セディナカードを使えば海外キャッシングで"),s("br",{staticClass:"pc-br"}),t._v(" 割安で現地通貨を調達できちゃいます。"),s("br",{staticClass:"pc-br"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"text answer-text text-center"},[t._v(" 決済に便利なカードは三井住友カード"),s("br",{staticClass:"pc-br"}),t._v(" Apple Payを使えば、スマホだけでも決済可能。"),s("br",{staticClass:"pc-br"}),t._v(" タッチIDを使えば、1秒で決済完了"),s("br",{staticClass:"pc-br"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"text text-center answer-text"},[t._v(" マイルを効率よく貯めるならこの1枚。"),s("br",{staticClass:"pc-br"}),t._v(" 普段のお買い物から公共料金のお支払いまで幅広く対応。"),s("br",{staticClass:"pc-br"}),t._v(" マイルを貯めて旅行に行こう！"),s("br",{staticClass:"pc-br"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"card-name text-center"},[t._v("アメリカンエキスプレス"),s("br",{staticClass:"sp-br"}),t._v("プラチナカード")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"text text-center answer-text"},[t._v(" ステータスを重視するならこの1枚。"),s("br",{staticClass:"pc-br"}),t._v(" ステータスマッチでいきなりゴールド会員になれちゃうことも！"),s("br",{staticClass:"pc-br"}),t._v(" きっとあなたの生活を豊かにしてくれる！"),s("br",{staticClass:"pc-br"})])}],h=s("1157"),m=s.n(h),_={name:"Main",data:function(){return{annualFee:!1,travel:!1,miles:!1,cedyna:!0,smbc:!0,ana:!0,amex:!0,presentation:!1}},methods:{free:function(){this.annualFee=!0,this.travel=!this.travel,m()(".js-travel").fadeIn(3e3)},paid:function(){this.annualFee=!0,this.miles=!0,m()(".js-miles").fadeIn(3e3)},go:function(){this.travel=!1,this.presentation=!0,this.cedyna=!1,m()(".js-cedyna").fadeIn(3e3)},notGo:function(){this.travel=!1,this.presentation=!0,this.smbc=!1,m()(".js-smbc").fadeIn(3e3)},milesImportant:function(){this.miles=!1,this.presentation=!0,this.ana=!1,m()(".js-ana").fadeIn(3e3)},statusImportant:function(){this.miles=!1,this.presentation=!0,this.amex=!1,m()(".js-amex").fadeIn(3e3)}}},b=_,C=Object(p["a"])(b,f,d,!1,null,"c057dec2",null),x=C.exports,g={name:"App",components:{Header:v,Main:x}},w=g,j=(s("034f"),Object(p["a"])(w,n,c,!1,null,null,null)),y=j.exports;s("9299"),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(y)}}).$mount("#app")},"61d3":function(t,e,s){t.exports=s.p+"img/smbc.3d821796.png"},"85ec":function(t,e,s){},9299:function(t,e,s){},"9d58":function(t,e,s){t.exports=s.p+"img/ana.752b1f8b.png"},a1a2:function(t,e,s){t.exports=s.p+"img/cedyna.7b683c87.jpg"},aadc:function(t,e,s){t.exports=s.p+"img/platinum.e437b0de.png"}});
//# sourceMappingURL=app.368c6993.js.map