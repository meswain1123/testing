(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),i=(n(13),n(3)),l=n(4),s=n(6),u=n(5),h=n(7),f=(n(14),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={flower:{}},n.getFlower(),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"getFlower",value:function(){var e=this;fetch("/flower").then((function(e){return e.json()})).then((function(t){e.setState({flower:t})}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,this.state.flower.name),a.a.createElement("p",null,this.state.flower.colour))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.77236b5d.chunk.js.map