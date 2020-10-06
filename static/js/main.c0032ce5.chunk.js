(this["webpackJsonpzooklabs.com"]=this["webpackJsonpzooklabs.com"]||[]).push([[0],{264:function(e,a,t){e.exports=t(507)},269:function(e,a,t){},270:function(e,a,t){},507:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(43),c=t.n(r),o=(t(269),t(270),t(9)),i=t(15),u=t(527),m=t(528);var s,E=function(){return l.a.createElement(u.a.Group,null,l.a.createElement(u.a,null,l.a.createElement(m.a,{size:"huge"},"Welcome To ZookLabs!"),"Hello!"))},d=t(70),h=t.n(d),g=t(115),p=t(116),b=t(117),v=t(123),f=t(120),k=t(515),C=t(520),O=t(52),w=t(14),j=t.n(w),y=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={loading:!0,zooks:[]},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(h.a.mark((function e(){var a=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.a.get("/zooks").then((function(e){return a.setState({loading:!1,zooks:e.data})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading)return l.a.createElement(k.a,{active:!0,inline:"centered"});var e=this.state.zooks.map((function(e){var a=e.id,t=e.name;return l.a.createElement(C.a.Item,{as:i.b,to:"/zooks/".concat(a),key:a},l.a.createElement(O.a,{name:"bug",inverted:!0}),l.a.createElement(C.a.Content,null,l.a.createElement(C.a.Header,null,a," - ",l.a.createElement("b",null,t))))}));return l.a.createElement(u.a.Group,null,l.a.createElement(u.a,null,l.a.createElement(m.a,{size:"huge"},"Zooks")),l.a.createElement(u.a,null,l.a.createElement(C.a,{divided:!0,selection:!0,size:"large"},e)))}}]),t}(n.Component),z=t(12),R=t(38);!function(e){e[e.LoggedOut=0]="LoggedOut",e[e.LoggedIn=1]="LoggedIn",e[e.Registering=2]="Registering"}(s||(s={}));var S={state:s.LoggedOut};var A=t(165),N=t.n(A);var L,U=t(516),H=function(){var e=Object(R.b)();return function(a,t){j.a.defaults.headers.common.Authorization="Bearer ".concat(a),t.username?e({type:"LOGIN",username:t.username}):e({type:"REGISTER"})}},I=function(){var e=Object(U.a)(),a=Object(z.a)(e,2)[1],t=H();return function(e){var n=e.headers.authorization;if(!n||!n.startsWith("Bearer "))throw n?new Error("authorization header does not start with Bearer "):new Error("authorization header missing");var l,r,c=(r=n).substring(7,r.length),o=N()(c);a("token",c,{maxAge:(l=o.exp,l-Math.floor(Date.now()/1e3)),sameSite:"strict"}),t(c,o)}},x=function(){var e=Object(R.c)((function(e){return e.user})),a=function(){var e=I();return function(a){return j.a.get("/login?code=".concat(a)).then(e)}}(),t=Object(o.h)(),r=Object(o.g)(),c=new URLSearchParams(t.search).get("code"),i=Object(n.useState)(!!c&&(r.replace("/login"),!0)),m=Object(z.a)(i,2),E=m[0],d=m[1];if(Object(n.useEffect)((function(){c&&a(c).then((function(){return d(!1)}))}),[c,a]),E)return l.a.createElement(u.a,null,l.a.createElement(k.a,{active:!0,inline:"centered"}));switch(e.state){case s.LoggedOut:var h="https://discord.com/api/oauth2/authorize?client_id=".concat("742381294079705220","&redirect_uri=").concat("https://zooklabs.com/login","&response_type=code&scope=identify");return l.a.createElement(u.a,null,l.a.createElement("script",null,window.location.href=h),"Redirecting to Discord.",l.a.createElement("a",{href:h},"Not Redirecting? Click Here!"),l.a.createElement(k.a,{active:!0,inline:"centered"}));case s.Registering:return l.a.createElement(u.a,null,l.a.createElement(k.a,{active:!0,inline:"centered"}));case s.LoggedIn:return l.a.createElement(o.a,{to:"/users/".concat(e.username)})}},B=t(522),Z=t(251),G=t(523),D=t(529),T=function(){var e=Object(n.useState)(),a=Object(z.a)(e,2),t=a[0],r=a[1];Object(n.useEffect)((function(){j.a.get("/leagues").then((function(e){r(e.data)}))}),[]);var c=function(e,a,t,n){return l.a.createElement(B.a,{as:i.b,to:"/leagues/".concat(e)},a?l.a.createElement(Z.a,{src:"http://static.zooklabs.com/zooks/"+a+"/image.png",wrapped:!0,ui:!1}):l.a.createElement(G.a,null,l.a.createElement(G.a.Image,{square:!0})),l.a.createElement(B.a.Content,null,l.a.createElement(B.a.Header,null,t),l.a.createElement(B.a.Description,null,n)))};return l.a.createElement(u.a.Group,null,l.a.createElement(u.a,null,l.a.createElement(m.a,{size:"huge"},"Leagues")),l.a.createElement(u.a,null,l.a.createElement(D.a,{stackable:!0},l.a.createElement(D.a.Row,{columns:3},l.a.createElement(D.a.Column,null,c("sprint",null===t||void 0===t?void 0:t.sprint,"Sprint","Which is the fastest Zook in the world? Check the Sprint Trial League.")),l.a.createElement(D.a.Column,null,c("high_jump",null===t||void 0===t?void 0:t.high_jump,"High Jump","The Zooks are jumping higher and higher, but which is the highest?")),l.a.createElement(D.a.Column,null,c("lap",null===t||void 0===t?void 0:t.lap,"Single Lap","Whose Zook can run a lap faster than all the other Zooks?"))),l.a.createElement(D.a.Row,{columns:3},l.a.createElement(D.a.Column,null,c("block_push",null===t||void 0===t?void 0:t.block_push,"Block Push","There's some stiff competition in the Block Push Trial League...")),l.a.createElement(D.a.Column,null,c("hurdles",null===t||void 0===t?void 0:t.hurdles,"Hurdles","Which Zook does the best at getting over the hurdles?"))))))},P=t(122),_=t(521),W=function(e){if(e.trial){return l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,e.trialName),l.a.createElement(_.a.Cell,null,e.trial.score," ",e.measurement),l.a.createElement(_.a.Cell,null,(a=e.trial).disqualified?l.a.createElement(P.a,{color:"red"},"DISQUALIFIED"):2147483647===a.position?"--":a.position))}return l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,e.trialName),l.a.createElement(_.a.Cell,null,"N/A"),l.a.createElement(_.a.Cell,null,"N/A"));var a},M=t(242),F=t.n(M),J=function(){var e=Object(n.useState)(),a=Object(z.a)(e,2),t=a[0],r=a[1],c=Object(o.i)().id;if(Object(n.useEffect)((function(){j.a.get("zooks/".concat(c)).then((function(e){return r(e.data)}))}),[c]),t){return l.a.createElement(u.a.Group,null,l.a.createElement(u.a,{clearing:!0,attached:"top"},l.a.createElement(m.a,{floated:"left",size:"huge",style:{margin:0}},"Zook Name: ",t.identifier.name),l.a.createElement(m.a,{floated:"right",size:"huge"},"Zook ID: ",t.identifier.id)),l.a.createElement(u.a,{attached:!0},l.a.createElement(D.a,{stackable:!0},l.a.createElement("div",{className:"two column row ui segment attached"},l.a.createElement(D.a.Column,{style:{flex:"0"}},l.a.createElement("img",{src:"http://static.zooklabs.com/zooks/"+t.identifier.id+"/image.png",style:{minWidth:256,maxWidth:256},alt:""+t.identifier.name}),l.a.createElement(F.a,{color:"blue",as:"a",icon:"download",fluid:!0,content:"Download Zook",href:"http://static.zooklabs.com/zooks/"+t.identifier.id+"/"+t.identifier.name+".zook"})),l.a.createElement(D.a.Column,{style:{flex:"1"}},l.a.createElement(_.a,{celled:!0,striped:!0,unstackable:!0,color:"green"},l.a.createElement(_.a.Header,null,l.a.createElement(_.a.Row,null,l.a.createElement(_.a.HeaderCell,{colSpan:"2"},"About"))),l.a.createElement(_.a.Body,null,l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,"Owner"),t.about.owner?l.a.createElement(_.a.Cell,null,l.a.createElement(i.b,{to:"/users/".concat(t.about.owner.username)},t.about.owner.username)):l.a.createElement(_.a.Cell,null,"Anonymous")),l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,"Birth/Adoption date"),l.a.createElement(_.a.Cell,null,t.about.dateCreated)),l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,"Date of Upload"),l.a.createElement(_.a.Cell,null,t.about.dateUploaded)),l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,"Number of Downloads"),l.a.createElement(_.a.Cell,null,"N/A")),l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,"Number of times viewed"),l.a.createElement(_.a.Cell,null,"N/A")))))),l.a.createElement("div",{className:"column row ui segment attached"},l.a.createElement(D.a.Column,null,l.a.createElement(_.a,{celled:!0,striped:!0,unstackable:!0,color:"green"},l.a.createElement(_.a.Header,null,l.a.createElement(_.a.Row,null,l.a.createElement(_.a.HeaderCell,{colSpan:"2"},"Physical Information"))),l.a.createElement(_.a.Body,null,l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,"Height"),l.a.createElement(_.a.Cell,null,t.physical.height," cm")),l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,"Length"),l.a.createElement(_.a.Cell,null,t.physical.length," cm")),l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,"Width"),l.a.createElement(_.a.Cell,null,t.physical.width," cm")),l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,"Weight"),l.a.createElement(_.a.Cell,null,t.physical.weight," kg")),l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,"Components"),l.a.createElement(_.a.Cell,null,t.physical.components)))),l.a.createElement(_.a,{celled:!0,striped:!0,unstackable:!0,color:"green"},l.a.createElement(_.a.Header,null,l.a.createElement(_.a.Row,null,l.a.createElement(_.a.HeaderCell,{colSpan:3},"Achievements")),l.a.createElement(_.a.Row,null,l.a.createElement(_.a.HeaderCell,null,"Trial"),l.a.createElement(_.a.HeaderCell,null,"Result"),l.a.createElement(_.a.HeaderCell,null,"Position"))),l.a.createElement(_.a.Body,null,l.a.createElement(W,{trial:t.achievement.sprint,trialName:"Sprint",measurement:"cm/sec"}),l.a.createElement(W,{trial:t.achievement.blockPush,trialName:"Block Push",measurement:"cm"}),l.a.createElement(W,{trial:t.achievement.hurdles,trialName:"Hurdles",measurement:"cm/sec"}),l.a.createElement(W,{trial:t.achievement.highJump,trialName:"High Jump",measurement:"cm"}),l.a.createElement(W,{trial:t.achievement.lap,trialName:"Lap",measurement:"sec"}))))))))}return l.a.createElement(k.a,{active:!0,inline:"centered"})},q=t(519),$=t(524),Y=t(525),Q=function(){var e=Object(n.useState)(),a=Object(z.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(z.a)(c,2),s=i[0],E=i[1],d=Object(n.useState)(!1),h=Object(z.a)(d,2),g=h[0],p=h[1],b=Object(n.useState)(new FormData),v=Object(z.a)(b,2),f=v[0],k=v[1],C=Object(n.useState)(),w=Object(z.a)(C,2),y=w[0],R=w[1];return t?l.a.createElement(o.a,{to:"/zooks/".concat(t)}):l.a.createElement(u.a.Group,null,l.a.createElement(u.a,null,l.a.createElement(m.a,{size:"huge"},"Zook Upload")),l.a.createElement(u.a,null,l.a.createElement(_.a,{compact:!0,color:"orange",inverted:!0},l.a.createElement(_.a.Header,null,l.a.createElement(_.a.Row,null,l.a.createElement(_.a.HeaderCell,null,l.a.createElement(O.a,{name:"attention"})," Upload Requirements"))),l.a.createElement(_.a.Body,null,l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,{error:!0},l.a.createElement(O.a,{name:"attention"}),"Must have a Passport Photo")),l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,{error:!0},l.a.createElement(O.a,{name:"attention"}),"Does not support Street Rules"))))),l.a.createElement(u.a,null,l.a.createElement(q.a,{onSubmit:function(){f.get("zook")&&(E(!0),j.a.post("/zooks/upload",f,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){r(e.data.id),E(!1)})).catch((function(e){if(!e.response)throw e;R(e.response.data.error),p(!1),E(!1)})))},loading:s,error:!!y},l.a.createElement(q.a.Field,{error:!!y},l.a.createElement("label",null,"Zook File"),l.a.createElement("input",{type:"file",onChange:function(e){var a,t=null===(a=e.target.files)||void 0===a?void 0:a.item(0);if(R(void 0),t&&t.name.endsWith(".zook")){var n=new FormData;n.append("zook",t),k(n),p(!0)}else p(!1)},accept:".zook"})),l.a.createElement($.a,{error:!0,header:y}),l.a.createElement(Y.a,{type:"submit",color:"blue",icon:"upload",disabled:!g,content:"Upload Zook"}))))},K=function(e){var a=Object(n.useState)(),t=Object(z.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){j.a.get("/leagues/".concat(e.league)).then((function(e){c(e.data)}))}),[e.league]);var o=l.a.createElement(k.a,{active:!0,inline:"centered"});return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a.Group,null,l.a.createElement(u.a,null,l.a.createElement(m.a,{size:"huge"},e.title," League")),l.a.createElement(u.a,{secondary:!0,inverted:!0,size:"tiny",style:{paddingTop:"6px",paddingBottom:"6px"}},l.a.createElement("b",null,"Updated : ",null===r||void 0===r?void 0:r.updatedAt)),l.a.createElement(u.a,null,l.a.createElement(_.a,{basic:"very",selectable:!0,unstackable:!0},l.a.createElement(_.a.Header,null,l.a.createElement(_.a.Row,null,l.a.createElement(_.a.HeaderCell,{collapsing:!0},"Position"),l.a.createElement(_.a.HeaderCell,{collapsing:!0},"Score"),l.a.createElement(_.a.HeaderCell,{collapsing:!0},"Zook"))),l.a.createElement(_.a.Body,null,r?function(a){return a.entries.map((function(a){var t=a.zookId,n=a.name,r=a.score,c=a.position;return l.a.createElement(_.a.Row,{key:t},l.a.createElement(_.a.Cell,null,l.a.createElement("b",null,2147483647===c?"--":c)),l.a.createElement(_.a.Cell,null,l.a.createElement("b",null,r,"\xa0",e.measurement)),l.a.createElement("a",{href:"/zooks/"+t,style:{display:"contents",color:"rgba(0,0,0,.87)",verticalAlign:"middle"}},l.a.createElement(_.a.Cell,null,l.a.createElement("b",null,n))),l.a.createElement(_.a.Cell,null,c<6?l.a.createElement(Z.a,{src:"http://static.zooklabs.com/zooks/".concat(t,"/image.png"),size:1===c?"small":"tiny"}):null))}))}(r):o)))))},V=function(){var e=Object(o.i)().username,a=Object(o.g)(),t=Object(n.useState)(),r=Object(z.a)(t,2),c=r[0],s=r[1];if(Object(n.useEffect)((function(){j.a.get("users/".concat(e)).then((function(e){a.replace(e.data.identifier.username),s(e.data)}))}),[e,a]),c){var E=c.zooks.map((function(e){var a=e.id,t=e.name;return l.a.createElement(C.a.Item,{as:i.b,to:"/zooks/".concat(a),key:a},l.a.createElement(O.a,{name:"bug",inverted:!0}),l.a.createElement(C.a.Content,null,l.a.createElement(C.a.Header,null,a," - ",l.a.createElement("b",null,t))))}));return l.a.createElement(u.a.Group,null,l.a.createElement(u.a,{clearing:!0,attached:"top"},l.a.createElement(m.a,{floated:"left",size:"huge",style:{margin:0}},"User: ",c.identifier.username)),l.a.createElement(_.a,{attached:"top",celled:!0,striped:!0,unstackable:!0,color:"green"},l.a.createElement(_.a.Header,null,l.a.createElement(_.a.Row,null,l.a.createElement(_.a.HeaderCell,{colSpan:"2"},"About"))),l.a.createElement(_.a.Body,null,l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,"Signed Up"),l.a.createElement(_.a.Cell,null,c.about.signUpAt)),l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,"Last Logged In"),l.a.createElement(_.a.Cell,null,c.about.lastLoginAt)),l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,null,"Uploaded Zooks"),l.a.createElement(_.a.Cell,null,E.length)))),l.a.createElement(u.a,{attached:!0},l.a.createElement(C.a,{divided:!0,selection:!0,size:"large"},E)))}return l.a.createElement(u.a,null,l.a.createElement(k.a,{active:!0,inline:"centered"}))},X=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={loading:!0,users:[]},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(h.a.mark((function e(){var a=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.a.get("/users").then((function(e){return a.setState({loading:!1,users:e.data})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading)return l.a.createElement(k.a,{active:!0,inline:"centered"});var e=this.state.users.map((function(e){var a=e.username;return l.a.createElement(C.a.Item,{as:i.b,to:"/users/".concat(a),key:a},l.a.createElement(O.a,{name:"user",inverted:!0}),l.a.createElement(C.a.Content,null,l.a.createElement(C.a.Header,null,a)))}));return l.a.createElement(u.a.Group,null,l.a.createElement(u.a,null,l.a.createElement(m.a,{size:"huge"},"Users")),l.a.createElement(u.a,null,l.a.createElement(C.a,{divided:!0,selection:!0,size:"large"},e)))}}]),t}(n.Component);!function(e){e[e.Available=0]="Available",e[e.UnAvailable=1]="UnAvailable",e[e.Error=2]="Error"}(L||(L={}));var ee=function(){var e=Object(n.useState)(),a=Object(z.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),o=Object(z.a)(c,2),i=o[0],s=o[1],E=Object(n.useState)(!1),d=Object(z.a)(E,2),h=d[0],g=d[1],p=Object(n.useState)(""),b=Object(z.a)(p,2),v=b[0],f=b[1],k=Object(n.useState)(!1),C=Object(z.a)(k,2),w=C[0],y=C[1],R=function(){var e=I();return function(a){return j.a.post("/login/register",{username:a}).then(e)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a.Group,null,l.a.createElement(u.a,{clearing:!0,attached:"top"},l.a.createElement(m.a,{floated:"left",size:"huge",style:{margin:0}},"Register Username")),l.a.createElement(u.a,{attached:!0},l.a.createElement(_.a,{compact:!0,color:"orange",inverted:!0},l.a.createElement(_.a.Header,null,l.a.createElement(_.a.Row,null,l.a.createElement(_.a.HeaderCell,null," ",l.a.createElement(O.a,{name:"attention"})," Username Cannot be changed"))),l.a.createElement(_.a.Body,null,l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,{error:!0},l.a.createElement(O.a,{name:"attention"}),"Usernames can be between 3 and 20 characters long.")),l.a.createElement(_.a.Row,null,l.a.createElement(_.a.Cell,{error:!0},l.a.createElement(O.a,{name:"attention"}),"Usernames may contain UPPER and lower letters (A-Z,a-z), numbers (0-9) and underscore (_)."))))),l.a.createElement(u.a,{attached:!0},l.a.createElement(q.a,{onSubmit:function(){s(!0),t===L.Available&&R(v)},success:t===L.Available,error:t===L.UnAvailable||t===L.Error,loading:i},l.a.createElement(q.a.Group,{widths:"equal"},l.a.createElement(Y.a,{type:"button",disabled:!w,onClick:function(){g(!0),j.a.get("/login/availability/".concat(v)).then((function(e){e.data.available?r(L.Available):r(L.UnAvailable),g(!1)})).catch((function(e){r(L.Error),g(!1)}))},loading:h},"Check Availability"),l.a.createElement(q.a.Input,{label:"Username",value:v,onChange:function(e){r(void 0),f(e.target.value),y(/^[A-Za-z0-9_]{3,20}$/.test(e.target.value))},error:!w||t===L.UnAvailable||t===L.Error,loading:h})),l.a.createElement($.a,{success:!0,header:"Username Is Available",content:"REMEMBER YOU CAN ONLY SET THIS ONCE"}),l.a.createElement($.a,{hidden:t!==L.UnAvailable,error:!0,header:"Username Not Available"}),l.a.createElement($.a,{hidden:t!==L.Error||!w,error:!0,header:"Username Is Invalid"}),l.a.createElement(Y.a,{type:"submit",disabled:t!==L.Available},"Submit")))))},ae=t(526),te=t(517),ne=/^\/zooks\/?\d*$/,le=function(){var e=Object(R.c)((function(e){return e.user})),a=function(){var e=Object(R.b)(),a=Object(U.a)(),t=Object(z.a)(a,3)[2];return function(){j.a.defaults.headers=void 0,t("token"),e({type:"LOGOUT"})}}();return l.a.createElement(te.a,null,l.a.createElement(ae.a,null,l.a.createElement(i.c,{to:"/",activeClassName:"active",className:"item",exact:!0,style:{padding:10}},l.a.createElement("img",{src:"logo.png",alt:"logo"}),l.a.createElement("b",{style:{paddingLeft:10}},"ZookLabs")),l.a.createElement(i.c,{to:"/zooks",activeClassName:"active",className:"item",isActive:function(e,a){var t=a.pathname;return ne.test(t)}},"Zooks"),l.a.createElement(i.c,{to:"/leagues",activeClassName:"active",className:"item"},"Leagues"),l.a.createElement(i.c,{to:"/zooks/upload",activeClassName:"active",className:"item",exact:!0},"Upload"),l.a.createElement(i.c,{to:"/users",activeClassName:"active",className:"item"},"Users"),function(){switch(e.state){case s.LoggedIn:var t=e.username;return l.a.createElement(ae.a.Menu,{position:"right"},l.a.createElement(i.c,{to:"/users/".concat(t),activeClassName:"active",className:"item",isActive:function(e,a){var n=a.pathname;return"/users/".concat(t)===n}},t),l.a.createElement(ae.a.Item,null,l.a.createElement(Y.a,{active:!0,onClick:a,primary:!0},"Logout")));case s.LoggedOut:return l.a.createElement(ae.a.Menu,{position:"right"},l.a.createElement(ae.a.Item,null,l.a.createElement(i.c,{to:"/login",activeClassName:"active",className:"ui primary button"},"Login")));case s.Registering:return l.a.createElement(ae.a.Menu,{position:"right"},l.a.createElement(ae.a.Item,null,l.a.createElement(Y.a,{active:!0,onClick:a,color:"red",primary:!0},"Cancel")))}}(),l.a.createElement("a",{className:"discord item",href:"http://discord.zooklabs.com"},l.a.createElement(O.a,{name:"discord",inverted:!0}),"Discord")))},re=function(){var e=Object(R.c)((function(e){return e.user})),a=function(){var e=Object(U.a)(["token"]),a=Object(z.a)(e,1)[0],t=H();return function(){var e=a.token;if(e){var n=N()(e);t(e,n)}}}();Object(n.useEffect)(a,[]);return l.a.createElement(i.a,null,l.a.createElement(le,null),l.a.createElement(te.a,null,function(e){return e.state===s.Registering}(e)?l.a.createElement(l.a.Fragment,null,l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/login",exact:!0,component:ee}),l.a.createElement(o.a,{to:"/login"}))):l.a.createElement(l.a.Fragment,null,l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",exact:!0,component:E}),l.a.createElement(o.b,{path:"/login",exact:!0,component:x}),l.a.createElement(o.b,{path:"/zooks/upload",exact:!0,component:Q}),l.a.createElement(o.b,{path:"/zooks/:id",component:J}),l.a.createElement(o.b,{path:"/zooks",exact:!0,component:y}),l.a.createElement(o.b,{path:"/users",exact:!0,component:X}),l.a.createElement(o.b,{path:"/users/:username",component:V}),l.a.createElement(o.b,{path:"/leagues",exact:!0,component:T}),l.a.createElement(o.b,{path:"/leagues/sprint",render:function(e){return l.a.createElement(K,Object.assign({},e,{league:"sprint",title:"Sprint",measurement:"cm/sec"}))}}),l.a.createElement(o.b,{path:"/leagues/block_push",render:function(e){return l.a.createElement(K,Object.assign({},e,{league:"block_push",title:"Block Push",measurement:"cm"}))}}),l.a.createElement(o.b,{path:"/leagues/hurdles",render:function(e){return l.a.createElement(K,Object.assign({},e,{league:"hurdles",title:"Hurdles",measurement:"cm/sec"}))}}),l.a.createElement(o.b,{path:"/leagues/high_jump",render:function(e){return l.a.createElement(K,Object.assign({},e,{league:"high_jump",title:"High Jump",measurement:"cm"}))}}),l.a.createElement(o.b,{path:"/leagues/lap",render:function(e){return l.a.createElement(K,Object.assign({},e,{league:"lap",title:"Lap",measurement:"sec"}))}}),l.a.createElement(o.a,{to:"/"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=t(518),oe=(t(506),t(62)),ie=Object(oe.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN":return{state:s.LoggedIn,username:a.username};case"REGISTER":return{state:s.Registering};case"LOGOUT":return{state:s.LoggedOut};default:return e}}}),ue=t(250);j.a.defaults.baseURL="https://zooklabs.herokuapp.com/api";var me=Object(oe.createStore)(ie,Object(ue.devToolsEnhancer)({}));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ce.a,null,l.a.createElement(R.a,{store:me},l.a.createElement(re,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[264,1,2]]]);
//# sourceMappingURL=main.c0032ce5.chunk.js.map