(this["webpackJsonpzooklabs.com"]=this["webpackJsonpzooklabs.com"]||[]).push([[0],{264:function(e,t,a){e.exports=a(495)},269:function(e,t,a){},270:function(e,t,a){},495:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(53),o=a.n(r),c=(a(269),a(270),a(58)),i=a(59),u=a(39),m=a(40),s=a(56),h=a(54),d=a(57),E=a(503),p=a(510),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={activeItem:"/"},a.handleItemClick=function(e,t){var n=t.to;return a.setState({activeItem:n})},a.state={activeItem:e.location.pathname},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(p.a.Item,{as:c.b,to:"/",active:"/"===e,onClick:this.handleItemClick},"ZookLabs"),l.a.createElement(p.a.Item,{as:c.b,to:"/zooks",active:"/zooks"===e,onClick:this.handleItemClick},"Zooks"),l.a.createElement(p.a.Item,{as:c.b,to:"/leagues",active:"/leagues"===e,onClick:this.handleItemClick},"Leagues"),l.a.createElement(p.a.Item,{as:c.b,to:"/zooks/upload",active:"/zooks/upload"===e,onClick:this.handleItemClick},"Upload")))}}]),t}(n.Component),g=Object(i.g)(k),b=a(511),f=a(512);var v=function(){return l.a.createElement(b.a.Group,null,l.a.createElement(b.a,null,l.a.createElement(f.a,{size:"huge"},"Welcome To Zook Labs!")))},C=a(81),z=a.n(C),w=a(128),j="https://zooklabs.herokuapp.com",y=function(){function e(){Object(u.a)(this,e)}return Object(m.a)(e,null,[{key:"getList",value:function(){return fetch("".concat(j,"/api/zooks"),{method:"get",headers:new Headers({"content-type":"application/json"})}).then((function(e){return e.json()}))}},{key:"get",value:function(e){return fetch("".concat(j,"/api/zooks/").concat(e),{method:"get",headers:new Headers({"content-type":"application/json"})}).then((function(e){return e.json()}))}},{key:"upload",value:function(e){return fetch("".concat(j,"/api/zooks/upload"),{method:"post",body:e}).then((function(e){return e.json()}))}}]),e}(),O=a(504),R=a(506),S=a(60),H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0,zooks:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(w.a)(z.a.mark((function e(){var t=this;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.getList().then((function(e){return t.setState({loading:!1,zooks:e})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading)return l.a.createElement(O.a,{active:!0,inline:"centered"});var e=this.state.zooks.map((function(e){var t=e.id,a=e.name;return l.a.createElement(R.a.Item,{href:"/zooks/"+t},l.a.createElement(S.a,{name:"bug",inverted:!0}),l.a.createElement(R.a.Content,null,l.a.createElement(R.a.Header,null,t," - ",l.a.createElement("b",null,a))))}));return l.a.createElement(b.a.Group,null,l.a.createElement(b.a,null,l.a.createElement(f.a,{size:"huge"},"Zooks")),l.a.createElement(b.a,null,l.a.createElement(R.a,{divided:!0,selection:!0,size:"large"},e)))}}]),t}(n.Component);var I=function(){return l.a.createElement(b.a.Group,null,l.a.createElement(b.a,null,l.a.createElement(f.a,{size:"huge"},"Leagues")),l.a.createElement(b.a,null,l.a.createElement(S.a,{name:"exclamation triangle"})," Work In Progress"))},N=a(175),L=a(507);var D=function(e){return null==e.trail?l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Cell,null,e.trialName),l.a.createElement(L.a.Cell,null,"N/A"),l.a.createElement(L.a.Cell,null,"N/A")):l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Cell,null,e.trialName),l.a.createElement(L.a.Cell,null,e.trail.score," ",e.measurement),l.a.createElement(L.a.Cell,null,2147483647===e.trail.position?"--":e.trail.position))},x=a(513),Z=a(245),A=a.n(Z),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={loading:!0,zook:{id:null,name:null,dateCreated:null,dateUploaded:null,height:null,length:null,width:null,weight:null,components:null,sprint:null,blockPush:null,hurdles:null,highJump:null,lap:null},id:null},a.state=Object(N.a)({},a.state,{id:e.match.params.id}),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(w.a)(z.a.mark((function e(){var t=this;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.get(this.state.id).then((function(e){return t.setState(Object(N.a)({},t.state,{loading:!1,zook:e}))}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?l.a.createElement(O.a,{active:!0,inline:"centered"}):l.a.createElement(b.a.Group,null,l.a.createElement(b.a,{clearing:!0,attached:"top"},l.a.createElement(f.a,{floated:"left",size:"huge",style:{margin:0}},"Zook Name: ",this.state.zook.name),l.a.createElement(f.a,{floated:"right",size:"huge"},"Zook ID: ",this.state.zook.id)),l.a.createElement(b.a,{attached:!0},l.a.createElement(x.a,{stackable:!0},l.a.createElement("div",{className:"two column row ui segment attached"},l.a.createElement(x.a.Column,{style:{flex:"0"}},l.a.createElement("img",{src:"http://static.zooklabs.com/zooks/"+this.state.zook.id+"/image.png",style:{minWidth:256,maxWidth:256},alt:""+this.state.zook.name}),l.a.createElement(A.a,{color:"blue",as:"a",icon:"download",fluid:!0,content:"Download Zook",href:"http://static.zooklabs.com/zooks/"+this.state.zook.id+"/"+this.state.zook.name+".zook"})),l.a.createElement(x.a.Column,{style:{flex:"1"}},l.a.createElement(L.a,{celled:!0,striped:!0,unstackable:!0,color:"green"},l.a.createElement(L.a.Header,null,l.a.createElement(L.a.Row,null,l.a.createElement(L.a.HeaderCell,{colSpan:"2"},"About"))),l.a.createElement(L.a.Body,null,l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Cell,null,"Owner"),l.a.createElement(L.a.Cell,null,"N/A")),l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Cell,null,"Birth/Adoption date"),l.a.createElement(L.a.Cell,null,this.state.zook.dateCreated)),l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Cell,null,"Date of Upload"),l.a.createElement(L.a.Cell,null,this.state.zook.dateUploaded)),l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Cell,null,"Number of Downloads"),l.a.createElement(L.a.Cell,null,"N/A")),l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Cell,null,"Number of times viewed"),l.a.createElement(L.a.Cell,null,"N/A")))))),l.a.createElement("div",{className:"column row ui segment attached"},l.a.createElement(x.a.Column,null,l.a.createElement(L.a,{celled:!0,striped:!0,unstackable:!0,color:"green"},l.a.createElement(L.a.Header,null,l.a.createElement(L.a.Row,null,l.a.createElement(L.a.HeaderCell,{colSpan:"2"},"Physical Information"))),l.a.createElement(L.a.Body,null,l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Cell,null,"Height"),l.a.createElement(L.a.Cell,null,this.state.zook.height," cm")),l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Cell,null,"Length"),l.a.createElement(L.a.Cell,null,this.state.zook.length," cm")),l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Cell,null,"Width"),l.a.createElement(L.a.Cell,null,this.state.zook.width," cm")),l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Cell,null,"Weight"),l.a.createElement(L.a.Cell,null,this.state.zook.weight," kg")),l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Cell,null,"Components"),l.a.createElement(L.a.Cell,null,this.state.zook.components)))),l.a.createElement(L.a,{celled:!0,striped:!0,unstackable:!0,color:"green"},l.a.createElement(L.a.Header,null,l.a.createElement(L.a.Row,null,l.a.createElement(L.a.HeaderCell,{colSpan:3},"Achievements")),l.a.createElement(L.a.Row,null,l.a.createElement(L.a.HeaderCell,null,"Trial"),l.a.createElement(L.a.HeaderCell,null,"Result"),l.a.createElement(L.a.HeaderCell,null,"Position"))),l.a.createElement(L.a.Body,null,l.a.createElement(D,{trail:this.state.zook.sprint,trialName:"Sprint",measurement:"cm/sec"}),l.a.createElement(D,{trail:this.state.zook.blockPush,trialName:"Block Push",measurement:"cm"}),l.a.createElement(D,{trail:this.state.zook.hurdles,trialName:"Hurdles",measurement:"cm/sec"}),l.a.createElement(D,{trail:this.state.zook.highJump,trialName:"High Jump",measurement:"cm"}),l.a.createElement(D,{trail:this.state.zook.lap,trialName:"Lap",measurement:"sec"}))))))))}}]),t}(n.Component),W=a(91),B=a(505),F=a(508),U=a(509),J=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={isLoading:!1,error:"",formData:new FormData,zookid:0},a.onFormSubmit=a.onFormSubmit.bind(Object(W.a)(a)),a.onChange=a.onChange.bind(Object(W.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onFormSubmit",value:function(e){var t=this;e.preventDefault(),null===this.state.formData.get("zook")?this.setState({error:"Please Select A Zook",isLoading:!1}):(this.setState({isLoading:!0}),y.upload(this.state.formData).then((function(e){void 0!==e.id?t.setState({zookid:e.id,error:""}):void 0!==e.error?t.setState({error:e.error,isLoading:!1}):t.setState({error:"Something Went Wrong",isLoading:!1})})))}},{key:"onChange",value:function(e){var t=new FormData;t.append("zook",e.target.files[0]),this.setState({formData:t})}},{key:"render",value:function(){return 0!==this.state.zookid?l.a.createElement(i.a,{to:"/zooks/"+this.state.zookid}):l.a.createElement(b.a.Group,null,l.a.createElement(b.a,null,l.a.createElement(f.a,{size:"huge"},"Zook Upload")),l.a.createElement(b.a,null,l.a.createElement(L.a,{compact:!0,color:"orange",inverted:!0},l.a.createElement(L.a.Header,null,l.a.createElement(L.a.Row,null,l.a.createElement(L.a.HeaderCell,null," ",l.a.createElement(S.a,{name:"attention"})," Upload Requirements"))),l.a.createElement(L.a.Body,null,l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Cell,{error:!0},l.a.createElement(S.a,{name:"attention"}),"Must have a Passport Photo")),l.a.createElement(L.a.Row,null,l.a.createElement(L.a.Cell,{error:!0},l.a.createElement(S.a,{name:"attention"}),"Does not support Street Rules"))))),l.a.createElement(b.a,null,l.a.createElement(B.a,{error:""!==this.state.error,loading:this.state.isLoading,onSubmit:this.onFormSubmit},l.a.createElement(F.a,{error:!0,header:"Error",content:this.state.error}),l.a.createElement(B.a.Field,null,l.a.createElement("label",null,"Zook File"),l.a.createElement("input",{type:"file",onChange:this.onChange,accept:".zook"})),l.a.createElement(U.a,{type:"submit",color:"blue",icon:"upload",content:"Upload Zook"}))))}}]),t}(n.Component);function G(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Sprint"))}function M(){return l.a.createElement("div",null,l.a.createElement("h3",null,"BlockPush"))}function T(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Hurdles"))}function q(){return l.a.createElement("div",null,l.a.createElement("h3",null,"HighJump"))}function $(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Lap"))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement((function(){return l.a.createElement(c.a,null,l.a.createElement(g,null),l.a.createElement(E.a,null,l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/",exact:!0,children:v}),l.a.createElement(i.b,{path:"/zooks/upload",exact:!0,component:J}),l.a.createElement(i.b,{path:"/zooks/:id",component:P}),l.a.createElement(i.b,{path:"/zooks",exact:!0,component:H}),l.a.createElement(i.b,{path:"/leagues",exact:!0,children:I}),l.a.createElement(i.b,{path:"/leagues/sprint",children:G}),l.a.createElement(i.b,{path:"/leagues/blockpush",children:M}),l.a.createElement(i.b,{path:"/leagues/hurdles",children:T}),l.a.createElement(i.b,{path:"/leagues/highjump",children:q}),l.a.createElement(i.b,{path:"/leagues/lap",children:$}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[264,1,2]]]);
//# sourceMappingURL=main.95fb7c3c.chunk.js.map