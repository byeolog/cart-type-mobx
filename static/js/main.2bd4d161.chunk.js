(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e){e.exports=[{id:"PI001",name:"Apple iPhone XS",price:1e6},{id:"PI002",name:"Samsung Galaxy S10",price:1e6},{id:"PI003",name:"Apple Airpod",price:2e5},{id:"PI004",name:"Samsung Galaxy Watch",price:15e4},{id:"PI005",name:"Apple iPad",price:6e5},{id:"PI006",name:"LG gram",price:12e5},{id:"PI007",name:"LG TROMM",price:2e6},{id:"PI008",name:"LG DIOS",price:22e5},{id:"PI009",name:"LG Styler",price:12e5},{id:"PI010",name:"Samsung TV 55inch",price:18e5},{id:"PI011",name:"soju",price:4e3},{id:"PI012",name:"clip",price:500},{id:"PI013",name:"LG WHISEN",price:15e5},{id:"PI014",name:"LG PuriCare",price:2e5}]},120:function(e,t,a){e.exports=a(208)},125:function(e,t,a){},126:function(e,t,a){},134:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),c=a(9),o=a.n(c),l=(a(125),a(16)),u=a(25),s=a(27),m=a(26),p=a(28),d=a(43),b=a(20),h=(a(126),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.items,t=this.props.basket;return r.createElement(d.a,{gutter:12},r.createElement(b.a,{span:12},r.createElement("div",{className:"items-wrapper"},r.createElement("h2",null,"\uc0c1\ud488"),e)),r.createElement(b.a,{span:12},r.createElement("div",{className:"basket-wrapper"},r.createElement("h2",null,"\uc7a5\ubc14\uad6c\ub2c8"),t)))}}]),t}(r.Component)),f=(a(134),a(211)),C=a(210),g=a(213),v=a(212),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).quantity=1,a._onChange=function(e){a.quantity=e},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.id,a=this.props.name,n=this.props.price,i=this.props.addCart;return r.createElement("div",{className:"cardWrapper"},r.createElement(f.a,{title:a},r.createElement(C.a,{title:a,bordered:!1},r.createElement("div",null,n,"\uc6d0"),r.createElement("div",{className:"cardInnerWrapper"},r.createElement("div",{className:"cardInner"},r.createElement(g.a,{min:1,max:100,defaultValue:1,onChange:this._onChange,size:"small",className:"inputNumberInShop"})),r.createElement("div",{className:"cardInner"},r.createElement(v.a,{type:"primary",shape:"circle",icon:"shopping-cart",size:"small",onClick:function(){return i(t,a,n,e.quantity)}}))))))}}]),t}(r.Component),E=a(21),O=a(115),y=Object(E.b)(function(e){return{addCart:e.marketStore.addCart}})(Object(E.c)(function(e){var t=O.map(function(t){return r.createElement(b.a,{span:8},r.createElement(j,Object.assign({},t,{key:t.id,addCart:e.addCart})))});return r.createElement("div",null,r.createElement(d.a,{gutter:16},t))})),I=(a(190),a(214)),N=Object(E.c)(n=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).id=a.props.id,a.name=a.props.name,a.price=a.props.price,a.count=a.props.count,a.total=a.props.total,a.deleteCart=a.props.deleteCart,a.putCart=a.props.putCart,a.state={mode:!1,quantity:a.props.count},a._changeMode=function(){a.setState({mode:!0})},a._onChange=function(e){a.setState({quantity:e})},a._saveQuantity=function(){a.setState({mode:!1}),a.props.id&&a.state.quantity&&a.putCart(a.props.id,a.state.quantity),I.a.success("\uc218\ub7c9\uc774 \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")},a._renderInputNumber=function(){return a.state.mode?r.createElement(g.a,{min:1,max:100,defaultValue:a.state.quantity,onChange:a._onChange,size:"small",className:"inputNumberInCart"}):a.state.quantity},a._renderButton=function(){return a.state.mode?r.createElement(v.a,{shape:"round",size:"small",onClick:a._saveQuantity},"\uc800\uc7a5"):r.createElement(v.a,{shape:"round",size:"small",onClick:a._changeMode},"\uc218\ub7c9\ubcc0\uacbd")},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.createElement("div",{className:"cartItem"},r.createElement("div",{className:"name"},this.name),r.createElement("div",{className:"price"},this.price,"\uc6d0"),r.createElement("div",{className:"count"},this._renderInputNumber()),r.createElement("div",{className:"count"},this._renderButton()),r.createElement("div",{className:"total"},this.total,"\uc6d0"),r.createElement("div",{className:"return"},r.createElement(v.a,{type:"danger",shape:"circle",icon:"delete",size:"small",onClick:function(){return e.deleteCart(e.id)}})))}}]),t}(r.Component))||n,w=a(209),P=Object(E.b)(function(e){var t=e.marketStore;return{items:t.cartItems,total:t.total,getCart:t.getCart,deleteCart:t.deleteCart,putCart:t.putCart}})(Object(E.c)(function(e){Object(r.useEffect)(function(){e.getCart&&e.getCart()},[]);var t=e.items.map(function(t){return i.a.createElement(N,{id:t.cartProduct.id,name:t.cartProduct.name,price:t.cartProduct.price,count:t.quantity,total:t.total,key:t.cartProduct.id,deleteCart:e.deleteCart,putCart:e.putCart})});return i.a.createElement("div",null,i.a.createElement("div",{className:"cartItem"},i.a.createElement("div",{className:"name header"},"\uc81c\ud488\uba85"),i.a.createElement("div",{className:"price header"},"\uac00\uaca9"),i.a.createElement("div",{className:"count header"},"\uc218\ub7c9"),i.a.createElement("div",{className:"count header"}),i.a.createElement("div",{className:"total header"},"\uc18c\uacc4"),i.a.createElement("div",{className:"return header"})),i.a.createElement(w.a,null),t,i.a.createElement(w.a,null,"\ucd1d\ud569"),i.a.createElement("p",null,e.total," \uc6d0"))})),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.createElement(h,{items:r.createElement(y,null),basket:r.createElement(P,null)})}}]),t}(r.Component),S=(a(191),function(){return i.a.createElement("div",{className:"App"},i.a.createElement(k,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z,_,q,G,A,x,L,W,B,M,J,T,V=a(17),Q=a(18),D=(a(96),a(10)),H=(z=function e(){Object(l.a)(this,e),Object(V.a)(this,"number",_,this),Object(V.a)(this,"increase",q,this),Object(V.a)(this,"decrease",G,this)},_=Object(Q.a)(z.prototype,"number",[D.j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),q=Object(Q.a)(z.prototype,"increase",[D.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.number++}}}),G=Object(Q.a)(z.prototype,"decrease",[D.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.number--}}}),z),R=a(47),X=a.n(R),$=(A=function e(){Object(l.a)(this,e),Object(V.a)(this,"cartItems",x,this),Object(V.a)(this,"total",L,this),Object(V.a)(this,"getCart",W,this),Object(V.a)(this,"setCart",B,this),Object(V.a)(this,"addCart",M,this),Object(V.a)(this,"deleteCart",J,this),Object(V.a)(this,"putCart",T,this)},x=Object(Q.a)(A.prototype,"cartItems",[D.j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),L=Object(Q.a)(A.prototype,"total",[D.j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),W=Object(Q.a)(A.prototype,"getCart",[D.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){console.log("getCart \uc2e4\ud589"),X()("/gun").then(function(t){e.setCart(t.data)}).catch(function(e){return console.log(e)})}}}),B=Object(Q.a)(A.prototype,"setCart",[D.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.total=t.total,e.cartItems=t.items}}}),M=Object(Q.a)(A.prototype,"addCart",[D.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a,n,r){if(!e.cartItems.find(function(e){return e.cartProduct.id===t})){console.log("addCart \uc2e4\ud589");var i="/gun/".concat(r),c=JSON.stringify({id:t,name:a,price:n});X.a.post(i,c,{headers:{"Content-Type":"application/json"}}).then(function(){e.getCart()}).catch(function(e){return console.log(e)})}}}}),J=Object(Q.a)(A.prototype,"deleteCart",[D.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){console.log("deleteCart \uc2e4\ud589");var a="/gun/".concat(t);X.a.delete(a).then(function(){e.getCart()}).catch(function(e){return console.log(e)})}}}),T=Object(Q.a)(A.prototype,"putCart",[D.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){console.log("putCart \uc2e4\ud589");var n="/gun/".concat(t,"/").concat(a);X.a.put(n).then(function(){e.getCart()}).catch(function(e){return console.log(e)})}}}),A),F=new H,K=new $;o.a.render(i.a.createElement(E.a,{counterStore:F,marketStore:K},i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[120,1,2]]]);
//# sourceMappingURL=main.2bd4d161.chunk.js.map