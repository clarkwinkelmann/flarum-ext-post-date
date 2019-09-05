module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["utils/PostControls"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},,function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(2),a=n.n(r),i=n(1),l=n.n(i);var c=n(3),u=function(t){var e,n;function o(e){var n;return(n=t.call(this)||this).post=e,n.createdAt=n.post.createdAt().toISOString().slice(0,16),n.editedAt=n.post.editedAt()?n.post.editedAt().toISOString().slice(0,16):"",n.dirty=!1,n.loading=!1,n}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var r=o.prototype;return r.className=function(){return""},r.title=function(){return app.translator.trans("clarkwinkelmann-post-date.forum.modal.title")},r.content=function(){var t=this;return m(".Modal-body",[m(".Form-group",[m("label",app.translator.trans("clarkwinkelmann-post-date.forum.modal.created_at")),m("input[type=datetime-local][required].FormControl",{value:this.createdAt,onchange:m.withAttr("value",function(e){t.createdAt=e,t.dirty=!0})})]),m(".Form-group",[m("label",app.translator.trans("clarkwinkelmann-post-date.forum.modal.edited_at")),m("input[type=datetime-local].FormControl",{value:this.editedAt,onchange:m.withAttr("value",function(e){t.editedAt=e,t.dirty=!0})})]),l.a.component({disabled:!this.dirty,loading:this.loading,type:"submit",className:"Button Button--primary",children:app.translator.trans("clarkwinkelmann-post-date.forum.modal.submit")})])},r.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.post.save({createdAt:this.createdAt,editedAt:this.editedAt}).then(function(){e.loading=!1,e.dirty=!1,m.redraw()}).catch(function(t){throw e.loading=!1,m.redraw(),t})},o}(n.n(c).a);app.initializers.add("clarkwinkelmann/flarum-ext-post-date",function(){Object(o.extend)(a.a,"moderationControls",function(t,e){app.forum.attribute("clarkwinkelmannPostDateCanEdit")&&t.add("clarkwinkelmann-post-date",l.a.component({icon:"far fa-clock",children:app.translator.trans("clarkwinkelmann-post-date.forum.post_controls.edit_button"),onclick:function(){app.modal.show(new u(e))}}))})})}]);
//# sourceMappingURL=forum.js.map