(this["webpackJsonpreact-easy"]=this["webpackJsonpreact-easy"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(20),i=n.n(s),r=(n(27),n(6)),l=n(7),o=n(10),u=n(9),d=(n(28),n(3)),m=n.n(d),h=n(8),j=n(22),p=n(21),v=n.n(p),b="http://5740-105-245-110-66.ngrok.io",f={withCredentials:!0},O=function(){var e=Object(h.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.create({baseURL:b}).post("".concat(b,"/api/getTotal"),t,f);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=(n(48),n(0)),k=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={selectedItems:[],total:0},c}return Object(l.a)(n,[{key:"setSelectedItems",value:function(e){this.setState({selectedItems:[].concat(Object(j.a)(this.state.selectedItems),[e])})}},{key:"setTotal",value:function(){var e=Object(h.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(this.state.selectedItems);case 2:t=e.sent,console.log(t.data.total),n=t.data.total,this.setState({total:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeSelectedItems",value:function(e,t){var n=this.state.selectedItems;n.splice(t,1),this.setState({selectedItems:n})}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"home",children:[Object(x.jsx)("div",{className:"header",children:"Tuck Shop"}),Object(x.jsxs)("div",{className:"columns",children:[Object(x.jsx)("div",{className:"column",children:[{name:"Pie",price:12},{name:"Burger",price:15},{name:"Pizza",price:20}].map((function(t,n){return Object(x.jsx)("li",{className:"tuck-shop-item",onClick:function(){return e.setSelectedItems(t)},children:(null===t||void 0===t?void 0:t.name)+" R"+(null===t||void 0===t?void 0:t.price)},n)}))}),Object(x.jsx)("div",{className:"column",children:[{name:"Coke",price:12},{name:"Water",price:10},{name:"Ice Tea",price:14}].map((function(t,n){return Object(x.jsx)("li",{className:"tuck-shop-item",onClick:function(){return e.setSelectedItems(t)},children:(null===t||void 0===t?void 0:t.name)+" R"+(null===t||void 0===t?void 0:t.price)},n)}))})]}),Object(x.jsxs)("div",{className:"calculator",children:[Object(x.jsx)("div",{className:"calculator-title",children:"Total: R"+this.state.total}),Object(x.jsx)("button",{className:"calculate-button",onClick:function(){return e.setTotal()},children:"Calculate"}),Object(x.jsx)("div",{className:"column",children:this.state.selectedItems.map((function(t,n){return Object(x.jsx)("li",{className:"tuck-shop-item",onClick:function(){return e.removeSelectedItems(t,n)},children:(null===t||void 0===t?void 0:t.name)+" R"+(null===t||void 0===t?void 0:t.price)},n)}))})]})]})}}]),n}(c.Component),I=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(k,{})})}}]),n}(c.Component),N=I,C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};n(50);i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root")),C()}},[[51,1,2]]]);
//# sourceMappingURL=main.9be9a74a.chunk.js.map