(this["webpackJsonpzooklabs.com"]=this["webpackJsonpzooklabs.com"]||[]).push([[0],{26:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},32:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),o=(a(31),a(32),a(7)),i=a(6),u=(a(33),a(11)),m=a.n(u),s=a(8),h=a(9),E=a(13),d=a(12),p=a(14),k="https://zooklabstest.herokuapp.com",f=function(){function e(){Object(s.a)(this,e)}return Object(h.a)(e,null,[{key:"getList",value:function(){return fetch("".concat(k,"/api/zook"),{method:"get",headers:new Headers({"content-type":"application/json"})}).then((function(e){return e.json()}))}},{key:"get",value:function(e){return fetch("".concat(k,"/api/zook/").concat(e),{method:"get",headers:new Headers({"content-type":"application/json"})}).then((function(e){return e.json()}))}}]),e}(),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).id=a.props.match.params.id,a.state={loading:!0,zook:null},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:f.get(this.id).then((function(t){return e.setState({loading:!1,zook:t})}));case 1:case"end":return t.stop()}}),null,this)}},{key:"Trial",value:function(e){return null==e.trail?l.a.createElement("tr",null,l.a.createElement("td",null,e.trialName),l.a.createElement("td",null,"N/A"),l.a.createElement("td",null,"N/A")):l.a.createElement("tr",null,l.a.createElement("td",null,e.trialName),l.a.createElement("td",null,e.trail.score," cm/s"),l.a.createElement("td",null,e.trail.position," pos"))}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",null,"loading..."):l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null),l.a.createElement("p",null,"Zook Name: ",this.state.zook.name,"Zook ID:",this.state.zook.id,"Owner: -- Birth/Adoption Date: ",this.state.zook.dateCreated,"Date of Uploaded: ",this.state.zook.dateUploaded,"Original Creator: -- Number of Downloads: -- Number of times viewed: --",l.a.createElement("a",{href:"/"},"Download"))),l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2",align:"left"},"Physical Information"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Height"),l.a.createElement("td",null,this.state.zook.height," cm")),l.a.createElement("tr",null,l.a.createElement("td",null,"Length"),l.a.createElement("td",null,this.state.zook.length," cm")),l.a.createElement("tr",null,l.a.createElement("td",null,"Width"),l.a.createElement("td",null,this.state.zook.width," cm")),l.a.createElement("tr",null,l.a.createElement("td",null,"Weight"),l.a.createElement("td",null,this.state.zook.weight," kg")),l.a.createElement("tr",null,l.a.createElement("td",null,"Components"),l.a.createElement("td",null,this.state.zook.components))))),l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"3",align:"left"},"Achievements"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Trial"),l.a.createElement("th",null,"Result"),l.a.createElement("th",null,"Position")),l.a.createElement(this.Trial,{trail:this.state.zook.sprint,trialName:"Sprint"}),l.a.createElement(this.Trial,{trail:this.state.zook.blockPush,trialName:"BlockPush"}),l.a.createElement(this.Trial,{trail:this.state.zook.hurdles,trialName:"Hurdles"}),l.a.createElement(this.Trial,{trail:this.state.zook.highJump,trialName:"HighJump"}),l.a.createElement(this.Trial,{trail:this.state.zook.lap,trialName:"Lap"})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",null,"Zook History"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Zook"),l.a.createElement("th",null,"Owner")))))))}}]),t}(l.a.Component),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0,zooks:[]},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:f.getList().then((function(t){return e.setState({loading:!1,zooks:t})}));case 1:case"end":return t.stop()}}))}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",null,"loading..."):l.a.createElement("div",null,l.a.createElement("ul",null,this.state.zooks.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"/zook/"+e.id},e.name))}))))}}]),t}(l.a.Component);var b=function(){return l.a.createElement("h1",null,"Welcome To Zook Labs")},z=a(25);function y(){var e=Object(i.f)(),t=e.path,a=e.url;return l.a.createElement("div",null,l.a.createElement("h2",null,"Leagues"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"".concat(a,"/sprint")},"Sprint")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"".concat(a,"/blockpush")},"Blockpush"))),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:t},l.a.createElement("h3",null,"Leagues")),l.a.createElement(i.a,{path:"".concat(t,"/sprint")},l.a.createElement(w,null)),l.a.createElement(i.a,{path:"".concat(t,"/blockpush")},l.a.createElement(j,null))))}function w(){return l.a.createElement("h2",null,"Sprint")}function j(){return l.a.createElement("h2",null,"BlockPush")}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement((function(){return l.a.createElement(z.a,null,l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/zook"},"Zooks")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/leagues"},"Leagues")))),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,children:l.a.createElement(b,null)}),l.a.createElement(i.a,{path:"/zook/:id",component:g}),l.a.createElement(i.a,{path:"/zook",component:v}),l.a.createElement(i.a,{path:"/leagues",children:l.a.createElement(y,null)})))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.d7d199a8.chunk.js.map