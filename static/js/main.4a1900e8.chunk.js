(this["webpackJsonpzooklabs.com"]=this["webpackJsonpzooklabs.com"]||[]).push([[0],{144:function(e,t,a){e.exports=a(282)},149:function(e,t,a){},150:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(29),r=a.n(c),o=(a(149),a(150),a(17)),u=a(27),i=a(35),s=a(36),m=a(62),h=a(56),p=a(63),d=a(288),E=a(291),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={activeItem:"/"},a.handleItemClick=function(e,t){var n=t.to;return a.setState({activeItem:n})},a.state={activeItem:e.location.pathname},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return l.a.createElement(d.a,null,l.a.createElement(E.a,null,l.a.createElement(E.a.Item,{as:o.b,to:"/",active:"/"===e,onClick:this.handleItemClick},"ZookLabs"),l.a.createElement(E.a.Item,{as:o.b,to:"/zook",active:"/zook"===e,onClick:this.handleItemClick},"Zooks"),l.a.createElement(E.a.Item,{as:o.b,to:"/leagues",active:"/leagues"===e,onClick:this.handleItemClick},"Leagues"),l.a.createElement(E.a.Item,{as:o.b,to:"/upload",active:"/upload"===e,onClick:this.handleItemClick},"Leagues")))}}]),t}(n.Component),k=Object(u.f)(f);var v=function(){return l.a.createElement("h1",null,"Welcome To Zook Labs")},g=a(87),b=a.n(g),j=a(132),I="http://api.zooklabs.com",y=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"getList",value:function(){return fetch("".concat(I,"/api/zook"),{method:"get",headers:new Headers({"content-type":"application/json"})}).then((function(e){return e.json()}))}},{key:"get",value:function(e){return fetch("".concat(I,"/api/zook/").concat(e),{method:"get",headers:new Headers({"content-type":"application/json"})}).then((function(e){return e.json()}))}},{key:"upload",value:function(e){return fetch("".concat(I,"/api/zook/upload"),{method:"post",body:e}).then((function(e){return e.json()}))}}]),e}(),O=a(289),w=a(290),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0,zooks:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.getList().then((function(e){return t.setState({loading:!1,zooks:e})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading)return l.a.createElement(O.a,{active:!0,inline:"centered"});var e=this.state.zooks.map((function(e){var t=e.id,a=e.name;return l.a.createElement(w.a.Item,{as:"a",href:"/zook/"+t},l.a.createElement(w.a.Header,null,a))}));return l.a.createElement(w.a,{divided:!0,relaxed:!0},e)}}]),t}(n.Component);var C=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Leagues"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/leagues/sprint"},"Sprint")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/leagues/blockpush"},"BlockPush")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/leagues/hurdles"},"Hurdles")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/leagues/highjump"},"HighJump")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/leagues/lap"},"Lap"))))};function L(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Sprint"))}function H(){return l.a.createElement("div",null,l.a.createElement("h3",null,"BlockPush"))}function x(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Hurdles"))}function B(){return l.a.createElement("div",null,l.a.createElement("h3",null,"HighJump"))}function J(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Lap"))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement((function(){return l.a.createElement(o.a,null,l.a.createElement(k,null),l.a.createElement(d.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",exact:!0,children:v}),l.a.createElement(u.a,{path:"/zook",exact:!0,component:z}),l.a.createElement(u.a,{path:"/leagues",exact:!0,children:C}),l.a.createElement(u.a,{path:"/leagues/sprint",children:L}),l.a.createElement(u.a,{path:"/leagues/blockpush",children:H}),l.a.createElement(u.a,{path:"/leagues/hurdles",children:x}),l.a.createElement(u.a,{path:"/leagues/highjump",children:B}),l.a.createElement(u.a,{path:"/leagues/lap",children:J}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[144,1,2]]]);
//# sourceMappingURL=main.4a1900e8.chunk.js.map