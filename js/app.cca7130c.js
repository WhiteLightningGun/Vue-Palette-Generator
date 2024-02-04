(function(){"use strict";var t={1749:function(t,e,o){var n=o(9242),r=o(3396);function a(t,e,o,n,a,l){const i=(0,r.up)("HeaderTop"),c=(0,r.up)("BodyTemplate"),s=(0,r.up)("FooterBottom");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r.Wm)(c),(0,r.Wm)(s)],64)}const l=(0,r.uE)('<nav class="navbar navbar-expand-md navbar-dark bg-dark"><div class="container-fluid mx-2"><a class="navbar-brand open-sans-bold" href="#">All-Colours</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarCollapse"><ul class="navbar-nav me-auto mb-2 mb-md-0"><li class="nav-item text-white">Instant Colour Action</li></ul><div class="ml-lg-auto"><img src="img\\cmyk_lights1.svg" class="rounded-circle" width="45" height="45"></div></div></div></nav>',1),i=[l];function c(t,e,o,n,a,l){return(0,r.wg)(),(0,r.iD)("header",null,i)}var s={name:"Header-top"},u=o(89);const h=(0,u.Z)(s,[["render",c]]);var d=h,p=o(7139);const f=t=>((0,r.dD)("data-v-60f47a41"),t=t(),(0,r.Cn)(),t),g={class:"flex-shrink-0 main"},m=f((()=>(0,r._)("div",{class:"container text-center"},[(0,r._)("h3",{class:"mt-5"},"All-Colours Palette Generator"),(0,r._)("p",null," Click the block below to select a colour and instantly generate a variety of swatch sets. ")],-1))),v={class:"container text-center"},C={class:"mt-5"},b={class:"palette-text"};function w(t,e,o,n,a,l){const i=(0,r.up)("ColorPicker"),c=(0,r.up)("ColourSwatch");return(0,r.wg)(),(0,r.iD)("main",g,[m,(0,r.Wm)(i,{onColorChanged:l.handleColorChange},null,8,["onColorChanged"]),(0,r._)("div",v,[(0,r._)("h3",C,[(0,r._)("i",{class:"bi bi-caret-left",onClick:e[0]||(e[0]=t=>l.handleClick("left"))}),(0,r._)("span",b,(0,p.zw)(a.currentPaletteName),1),(0,r._)("i",{class:"bi bi-caret-right",onClick:e[1]||(e[1]=t=>l.handleClick("right"))})])]),(0,r._)("div",{class:(0,p.C_)(["container d-flex justify-content-center palette-holder",a.animationSetting])},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.colorArray,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{key:e},[(0,r.Wm)(c,{color:t},null,8,["color"])])))),128))],2)])}const x={class:"container d-flex justify-content-center"},k={class:"mt-5"},S={class:"colour-console",id:"current-colour"};function _(t,e,o,n,a,l){return(0,r.wg)(),(0,r.iD)("div",x,[(0,r._)("h4",k,[(0,r._)("span",{class:(0,p.C_)(["color-holder rounded",a.textColor]),style:(0,p.j5)({"background-color":a.color}),ref:"colorPicker",onClick:e[0]||(e[0]=(...t)=>l.openColorPicker&&l.openColorPicker(...t))},[(0,r._)("span",S,(0,p.zw)(a.color),1)],6)])])}o(560);function y(t){let e=0,o=0,n=0;4==t.length?(e="0x"+t[1]+t[1],o="0x"+t[2]+t[2],n="0x"+t[3]+t[3]):7==t.length&&(e="0x"+t[1]+t[2],o="0x"+t[3]+t[4],n="0x"+t[5]+t[6]),e/=255,o/=255,n/=255;let r=Math.min(e,o,n),a=Math.max(e,o,n),l=a-r,i=0,c=0,s=0;return i=0==l?0:a==e?(o-n)/l%6:a==o?(n-e)/l+2:(e-o)/l+4,i=Math.round(60*i),i<0&&(i+=360),s=(a+r)/2,c=0==l?0:l/(1-Math.abs(2*s-1)),c=+(100*c).toFixed(1),s=+(100*s).toFixed(1),[i,c,s]}function F(t,e,o){e/=100,o/=100;let n=(1-Math.abs(2*o-1))*e,r=n*(1-Math.abs(t/60%2-1)),a=o-n/2,l=0,i=0,c=0;return 0<=t&&t<60?(l=n,i=r,c=0):60<=t&&t<120?(l=r,i=n,c=0):120<=t&&t<180?(l=0,i=n,c=r):180<=t&&t<240?(l=0,i=r,c=n):240<=t&&t<300?(l=r,i=0,c=n):300<=t&&t<360&&(l=n,i=0,c=r),l=Math.round(255*(l+a)).toString(16),i=Math.round(255*(i+a)).toString(16),c=Math.round(255*(c+a)).toString(16),1==l.length&&(l="0"+l),1==i.length&&(i="0"+i),1==c.length&&(c="0"+c),"#"+l+i+c}function P(t){let e=[],o=y(t);e.push(t);for(let n=1;n<5;n++){let t=(o[0]+45*n)%360,r=F(t,o[1],o[2]);e.push(r)}return e}function M(t){let e=[t],o=y(t),n=2*o[1]/4;for(let r=1;r<5;r++){let t=o[1]-r*n;if(t<0){t=-t;let n=(o[0]+180)%360,r=[n,t,o[2]],a=F(r[0],r[1],r[2]);e.push(a)}else{let n=[o[0],t,o[2]],r=F(n[0],n[1],n[2]);e.push(r)}}return e}function T(t){let e=[],o=y(t);e.push(t);for(let n=1;n<3;n++){let t=(o[0]+120*n)%360,r=F(t,o[1],o[2]);e.push(r)}return e}function j(t){let e=[],o=y(t);e.push(t);let n=(o[0]+150)%360,r=F(n,o[1],o[2]);e.push(r);let a=(o[0]+210)%360,l=F(a,o[1],o[2]);return e.push(l),e}function O(t){let e=[],o=y(t);for(let n=0;n<5;n++){let t=(o[2]+10*n)%100,r=F(o[0],100,t);e.push(r)}return e.sort(((t,e)=>{let o=y(t),n=y(e);return n[2]-o[2]})),e}function D(t){let e=[],o=y(t);e.push(t);for(let n=1;n<4;n++){let t=(o[0]+90*n)%360,r=F(t,o[1],o[2]);e.push(r)}return e}let A=[{name:"Atmospheric Pentad",newSwatches:P},{name:"Complementary Diad",newSwatches:M},{name:"Triad",newSwatches:T},{name:"Split Complementary",newSwatches:j},{name:"Monochromatic",newSwatches:O},{name:"Square",newSwatches:D}];var B={name:"ColourPicker",data(){return{color:"",textColor:"text-white"}},mounted(){this.colorPicker=new jscolor(this.$refs.colorPicker,{onInput:this.updateColor,onChange:this.updateColorState,width:250,height:200,borderColor:"#000",controlBorderColor:"#FFF",backgroundColor:"#FFF",shadow:!0,smartPosition:!0,zIndex:1e3}),this.colorPicker.fromString(this.color)},created(){this.color=`#${Math.floor(16777215*Math.random()).toString(16).toUpperCase()}`,this.updateColorState(),this.checkTextColor(this.color)},methods:{openColorPicker(){this.colorPicker.show()},updateColor(){this.color=this.colorPicker.toHEXString()},updateColorState(){this.$emit("color-changed",this.color)},checkTextColor(t){let e=y(t);e[2]>50?this.textColor="text-black":this.textColor="text-white"}},watch:{color(t){this.colorPicker.fromString(t),this.checkTextColor(t)}}};const H=(0,u.Z)(B,[["render",_],["__scopeId","data-v-723e543b"]]);var I=H;const W={class:"my-5 px-1"};function Z(t,e,o,n,a,l){return(0,r.wg)(),(0,r.iD)("h4",W,[(0,r._)("span",{class:"color-result rounded",style:(0,p.j5)({"background-color":o.color}),id:"console"},[(0,r._)("span",{class:(0,p.C_)(["colour-console",a.textColor])},(0,p.zw)(o.color.toUpperCase()),3)],4)])}var E={name:"ColourSwatch",props:{color:{type:String,required:!0}},data(){return{textColor:"text-white"}},watch:{color(t){let e=y(t);e[2]>50?this.textColor="text-black":this.textColor="text-white"}}};const $=(0,u.Z)(E,[["render",Z],["__scopeId","data-v-0406c97e"]]);var z=$,q={name:"BodyTemplate",components:{ColorPicker:I,ColourSwatch:z},data(){return{color:"#000000",colorArray:["#FFFF00","#FF0000","#00FF00","#0000FF","#97C563"],currentPaletteName:"Atmospheric Pentad",paletteSetting:0,animationSetting:"slide-right",animationFinished:!1,colCalcs:A}},methods:{handleColorChange(t){this.color=t,this.currentPaletteName=this.colCalcs[this.paletteSetting].name,this.colorArray=this.colCalcs[this.paletteSetting].newSwatches(t)},handleClick(t){this.animationSetting="slide-left",this.$nextTick((()=>{const e=this.$el.querySelector(".palette-holder"),o=()=>{e.removeEventListener("animationend",o),"right"===t?(this.paletteSetting+=1,this.paletteSetting>this.colCalcs.length-1&&(this.paletteSetting=0)):(this.paletteSetting-=1,this.paletteSetting<0&&(this.paletteSetting=this.colCalcs.length-1)),this.handleColorChange(this.color),this.animationSetting="slide-right"};e.addEventListener("animationend",o)}))}}};const N=(0,u.Z)(q,[["render",w],["__scopeId","data-v-60f47a41"]]);var L=N;const U=(0,r._)("footer",{class:"footer mt-auto py-2 bg-light"},[(0,r._)("div",{class:"container"},[(0,r._)("p",null,"Made With Vue and JsColor")])],-1),Y=[U];function G(t,e,o,n,a,l){return(0,r.wg)(),(0,r.iD)("div",null,Y)}var J={name:"FooterBottom"};const K=(0,u.Z)(J,[["render",G]]);var V=K,X={name:"App",components:{HeaderTop:d,BodyTemplate:L,FooterBottom:V}};const Q=(0,u.Z)(X,[["render",a]]);var R=Q;(0,n.ri)(R).mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,a){if(!n){var l=1/0;for(u=0;u<t.length;u++){n=t[u][0],r=t[u][1],a=t[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&a||l>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[c])}))?n.splice(c--,1):(i=!1,a<l&&(l=a));if(i){t.splice(u--,1);var s=r();void 0!==s&&(e=s)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,r,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,a,l=n[0],i=n[1],c=n[2],s=0;if(l.some((function(e){return 0!==t[e]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var u=c(o)}for(e&&e(n);s<l.length;s++)a=l[s],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},n=self["webpackChunkstatic_vue"]=self["webpackChunkstatic_vue"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(1749)}));n=o.O(n)})();
//# sourceMappingURL=app.cca7130c.js.map