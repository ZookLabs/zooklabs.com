(this["webpackJsonpzooklabs.com"]=this["webpackJsonpzooklabs.com"]||[]).push([[0],{279:function(e,t,c){},280:function(e,t,c){},489:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(46),s=c.n(r),i=(c(279),c(28)),l=(c(280),c(43)),o=c(11),j=c(191),d="LOGIN",b="REGISTER",h="LOGOUT";var u,O=c(13),x=c.n(O),m=c(516),p=function(){var e=Object(l.b)();return function(t,c){var a;x.a.defaults.headers.common.Authorization="Bearer ".concat(t),c.username?e((a=c.username,{type:d,username:a})):e({type:b})}},g=function(){var e=Object(l.b)(),t=Object(m.a)(),c=Object(o.a)(t,3)[2];return function(){x.a.defaults.headers=void 0,c("token"),e({type:h})}},v=function(){var e=Object(m.a)(),t=Object(o.a)(e,2)[1],c=p();return function(e){var a=e.headers.authorization;if(!a||!a.startsWith("Bearer "))throw a?new Error("authorization header does not start with Bearer "):new Error("authorization header missing");var n,r,s=(r=a).substring(7,r.length),i=Object(j.a)(s);t("token",s,{maxAge:(n=i.exp,n-Math.floor(Date.now()/1e3)),sameSite:"strict"}),c(s,i)}},f=c(12),k=c(14),C=c(513),w=c(514),y=c(507),z=c(70),R=c(505),S=c(512),N=c(510),A=c(1);!function(e){e[e.Available=0]="Available",e[e.UnAvailable=1]="UnAvailable",e[e.Error=2]="Error"}(u||(u={}));var L,U=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)(!1),d=Object(o.a)(j,2),b=d[0],h=d[1],O=Object(a.useState)(""),m=Object(o.a)(O,2),p=m[0],g=m[1],f=Object(a.useState)(!1),k=Object(o.a)(f,2),L=k[0],U=k[1],H=function(){var e=v();return function(t){return x.a.post("/login/register",{username:t}).then(e)}}();return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(C.a.Group,{children:[Object(A.jsx)(C.a,{clearing:!0,attached:"top",children:Object(A.jsx)(w.a,{floated:"left",size:"huge",style:{margin:0},children:"Register Username"})}),Object(A.jsx)(C.a,{attached:!0,children:Object(A.jsxs)(y.a,{compact:!0,color:"orange",inverted:!0,children:[Object(A.jsx)(y.a.Header,{children:Object(A.jsx)(y.a.Row,{children:Object(A.jsxs)(y.a.HeaderCell,{children:[" ",Object(A.jsx)(z.a,{name:"attention"})," Username Cannot be changed"]})})}),Object(A.jsxs)(y.a.Body,{children:[Object(A.jsx)(y.a.Row,{children:Object(A.jsxs)(y.a.Cell,{error:!0,children:[Object(A.jsx)(z.a,{name:"attention"}),"Usernames can be between 3 and 20 characters long."]})}),Object(A.jsx)(y.a.Row,{children:Object(A.jsxs)(y.a.Cell,{error:!0,children:[Object(A.jsx)(z.a,{name:"attention"}),"Usernames may contain UPPER and lower letters (A-Z,a-z), numbers (0-9) and underscore (_)."]})})]})]})}),Object(A.jsx)(C.a,{attached:!0,children:Object(A.jsxs)(R.a,{onSubmit:function(){l(!0),c===u.Available&&H(p)},success:c===u.Available,error:c===u.UnAvailable||c===u.Error,loading:i,children:[Object(A.jsxs)(R.a.Group,{widths:"equal",children:[Object(A.jsx)(S.a,{type:"button",disabled:!L,onClick:function(){h(!0),x.a.get("/login/availability/".concat(p)).then((function(e){e.data.available?n(u.Available):n(u.UnAvailable),h(!1)})).catch((function(e){n(u.Error),h(!1)}))},loading:b,children:"Check Availability"}),Object(A.jsx)(R.a.Input,{label:"Username",onChange:function(e){n(void 0),g(e.target.value),U(/^[A-Za-z0-9_]{3,20}$/.test(e.target.value))},error:!L||c===u.UnAvailable||c===u.Error,loading:b})]}),Object(A.jsx)(N.a,{success:!0,header:"Username Is Available",content:"REMEMBER YOU CAN ONLY SET THIS ONCE"}),Object(A.jsx)(N.a,{hidden:c!==u.UnAvailable,error:!0,header:"Username Not Available"}),Object(A.jsx)(N.a,{hidden:c!==u.Error||!L,error:!0,header:"Username Is Invalid"}),Object(A.jsx)(S.a,{type:"submit",disabled:c!==u.Available,children:"Submit"})]})})]})})};!function(e){e[e.LoggedOut=0]="LoggedOut",e[e.LoggedIn=1]="LoggedIn",e[e.Registering=2]="Registering"}(L||(L={}));var H=function(e){return e.state===L.Registering},I={state:L.LoggedOut};var E=function(){return Object(A.jsx)(C.a.Group,{children:Object(A.jsxs)(C.a,{children:[Object(A.jsx)(w.a,{size:"huge",children:"Welcome To ZookLabs!"}),"Hello!"]})})},Z=c(501),B=function(){var e=Object(l.c)((function(e){return e.user})),t=function(){var e=v();return function(t){return x.a.get("/login?code=".concat(t)).then(e)}}(),c=Object(f.h)(),n=Object(f.g)(),r=new URLSearchParams(c.search).get("code"),s=Object(a.useState)(!!r&&(n.replace("/login"),!0)),i=Object(o.a)(s,2),j=i[0],d=i[1];if(Object(a.useEffect)((function(){r&&t(r).then((function(){return d(!1)}))}),[r,t]),j)return Object(A.jsx)(C.a,{children:Object(A.jsx)(Z.a,{active:!0,inline:"centered"})});switch(e.state){case L.LoggedOut:var b="https://discord.com/api/oauth2/authorize?client_id=".concat("742381294079705220","&redirect_uri=").concat("https://zooklabs.com/login","&response_type=code&scope=identify");return Object(A.jsxs)(C.a,{children:[Object(A.jsx)("script",{children:window.location.href=b}),"Redirecting to Discord.",Object(A.jsx)("a",{href:b,children:"Not Redirecting? Click Here!"}),Object(A.jsx)(Z.a,{active:!0,inline:"centered"})]});case L.Registering:return Object(A.jsx)(C.a,{children:Object(A.jsx)(Z.a,{active:!0,inline:"centered"})});case L.LoggedIn:return Object(A.jsx)(f.a,{to:"/users/".concat(e.username)})}},_=c(261),D=function(e){var t=Object(a.useState)(),c=Object(o.a)(t,2),n=c[0],r=c[1];Object(a.useEffect)((function(){x.a.get("/leagues/".concat(e.league)).then((function(e){r(e.data)}))}),[e.league]);var s=Object(A.jsx)(Z.a,{active:!0,inline:"centered"});return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(C.a.Group,{children:[Object(A.jsx)(C.a,{children:Object(A.jsxs)(w.a,{size:"huge",children:[e.title," League"]})}),Object(A.jsx)(C.a,{secondary:!0,inverted:!0,size:"tiny",style:{paddingTop:"6px",paddingBottom:"6px"},children:Object(A.jsxs)("b",{children:["Updated : ",null===n||void 0===n?void 0:n.updatedAt]})}),Object(A.jsx)(C.a,{children:Object(A.jsxs)(y.a,{basic:"very",selectable:!0,unstackable:!0,children:[Object(A.jsx)(y.a.Header,{children:Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.HeaderCell,{collapsing:!0,children:"Position"}),Object(A.jsx)(y.a.HeaderCell,{collapsing:!0,children:"Score"}),Object(A.jsx)(y.a.HeaderCell,{collapsing:!0,children:"Zook"})]})}),Object(A.jsx)(y.a.Body,{children:n?function(t){return t.entries.map((function(t){var c=t.zookId,a=t.name,n=t.score,r=t.position;return Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:Object(A.jsx)("b",{children:2147483647===r?"--":r})}),Object(A.jsx)(y.a.Cell,{children:Object(A.jsxs)("b",{children:[n,"\xa0",e.measurement]})}),Object(A.jsx)("a",{href:"/zooks/"+c,style:{display:"contents",color:"rgba(0,0,0,.87)",verticalAlign:"middle"},children:Object(A.jsx)(y.a.Cell,{children:Object(A.jsx)("b",{children:a})})}),Object(A.jsx)(y.a.Cell,{children:r<6?Object(A.jsx)(_.a,{src:"".concat("https://static.zooklabs.com","/image/").concat(c),size:1===r?"small":"tiny"}):null})]},c)}))}(n):s})]})})]})})},F=c(509),G=c(511),T=c(515),P=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){x.a.get("/leagues").then((function(e){n(e.data)}))}),[]);var r=function(e,t,c,a){return Object(A.jsxs)(F.a,{as:k.b,to:"/leagues/".concat(e),children:[t?Object(A.jsx)(_.a,{src:"".concat("https://static.zooklabs.com","/image/").concat(t),wrapped:!0,ui:!1}):Object(A.jsx)(G.a,{children:Object(A.jsx)(G.a.Image,{square:!0})}),Object(A.jsxs)(F.a.Content,{children:[Object(A.jsx)(F.a.Header,{children:c}),Object(A.jsx)(F.a.Description,{children:a})]})]})};return Object(A.jsxs)(C.a.Group,{children:[Object(A.jsx)(C.a,{children:Object(A.jsx)(w.a,{size:"huge",children:"Leagues"})}),Object(A.jsx)(C.a,{children:Object(A.jsxs)(T.a,{stackable:!0,children:[Object(A.jsxs)(T.a.Row,{columns:3,children:[Object(A.jsx)(T.a.Column,{children:r("sprint",null===c||void 0===c?void 0:c.sprint,"Sprint","Which is the fastest Zook in the world? Check the Sprint Trial League.")}),Object(A.jsx)(T.a.Column,{children:r("high_jump",null===c||void 0===c?void 0:c.high_jump,"High Jump","The Zooks are jumping higher and higher, but which is the highest?")}),Object(A.jsx)(T.a.Column,{children:r("lap",null===c||void 0===c?void 0:c.lap,"Single Lap","Whose Zook can run a lap faster than all the other Zooks?")})]}),Object(A.jsxs)(T.a.Row,{columns:3,children:[Object(A.jsx)(T.a.Column,{children:r("block_push",null===c||void 0===c?void 0:c.block_push,"Block Push","There's some stiff competition in the Block Push Trial League...")}),Object(A.jsx)(T.a.Column,{children:r("hurdles",null===c||void 0===c?void 0:c.hurdles,"Hurdles","Which Zook does the best at getting over the hurdles?")}),Object(A.jsx)(T.a.Column,{children:r("overall_league",null===c||void 0===c?void 0:c.overall_league,"Overall","Which Zook is has the best scores across all the leagues?")})]})]})})]})},W=c(103),M=c.n(W),J=c(152),q=c(153),$=c(154),Y=c(164),Q=c(155),K=c(508),V=function(e){Object(Y.a)(c,e);var t=Object(Q.a)(c);function c(){var e;Object(q.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={loading:!0,users:[]},e}return Object($.a)(c,[{key:"componentDidMount",value:function(){var e=Object(J.a)(M.a.mark((function e(){var t=this;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.a.get("/users").then((function(e){return t.setState({loading:!1,users:e.data})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading)return Object(A.jsx)(Z.a,{active:!0,inline:"centered"});var e=this.state.users.map((function(e){var t=e.username;return Object(A.jsxs)(K.a.Item,{as:k.b,to:"/users/".concat(t),children:[Object(A.jsx)(z.a,{name:"user",inverted:!0}),Object(A.jsx)(K.a.Content,{children:Object(A.jsx)(K.a.Header,{children:t})})]},t)}));return Object(A.jsxs)(C.a.Group,{children:[Object(A.jsx)(C.a,{children:Object(A.jsx)(w.a,{size:"huge",children:"Users"})}),Object(A.jsx)(C.a,{children:Object(A.jsx)(K.a,{divided:!0,selection:!0,size:"large",children:e})})]})}}]),c}(a.Component),X=c(158),ee=function(e){if(e.trial){return Object(A.jsxs)(y.a.Row,{style:e.extraStyle,children:[Object(A.jsx)(y.a.Cell,{children:e.trialName}),Object(A.jsxs)(y.a.Cell,{children:[e.trial.score," ",e.measurement]}),Object(A.jsx)(y.a.Cell,{children:(t=e.trial,t.disqualified?Object(A.jsx)(X.a,{color:"red",children:"DISQUALIFIED"}):2147483647===t.position?"--":t.position)})]})}return Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:e.trialName}),Object(A.jsx)(y.a.Cell,{children:"N/A"}),Object(A.jsx)(y.a.Cell,{children:"N/A"})]});var t},te=c(259),ce=c.n(te),ae=function(e){var t=Object(a.useState)(!0),c=Object(o.a)(t,2),n=c[0],r=c[1];return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("div",Object(i.a)(Object(i.a)({},e),{},{className:"ui placeholder",children:Object(A.jsx)(_.a,{className:n?"square image":"",onLoad:function(){r(!1)},src:"".concat("https://static.zooklabs.com","/zooks/").concat(e.zookId,"/image.png"),alt:e.alt})}))})},ne={backgroundColor:"#2185d0",color:"#FFF"},re=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(f.i)().id;if(Object(a.useEffect)((function(){x.a.get("zooks/".concat(r),{withCredentials:!0}).then((function(e){return n(e.data)}))}),[r]),c){return Object(A.jsxs)(C.a.Group,{children:[Object(A.jsxs)(C.a,{clearing:!0,attached:"top",children:[Object(A.jsxs)(w.a,{floated:"left",size:"huge",style:{margin:0},children:["Zook Name: ",c.identifier.name]}),Object(A.jsxs)(w.a,{floated:"right",size:"huge",children:["Zook ID: ",c.identifier.id]})]}),Object(A.jsx)(C.a,{attached:!0,children:Object(A.jsxs)(T.a,{stackable:!0,children:[Object(A.jsxs)("div",{className:"two column row ui segment attached",children:[Object(A.jsx)(T.a.Column,{style:{flex:"0"},children:Object(A.jsxs)("div",{style:{minWidth:256},children:[Object(A.jsx)(ae,{zookId:c.identifier.id,alt:c.identifier.name,style:{marginBottom:10}}),Object(A.jsx)(ce.a,{color:"blue",as:"a",icon:"download",fluid:!0,content:"Download Zook",href:"".concat("https://static.zooklabs.com","/zooks/").concat(c.identifier.id,"/").concat(c.identifier.name)})]})}),Object(A.jsx)(T.a.Column,{style:{flex:"1"},children:Object(A.jsxs)(y.a,{celled:!0,striped:!0,unstackable:!0,color:"green",children:[Object(A.jsx)(y.a.Header,{children:Object(A.jsx)(y.a.Row,{children:Object(A.jsx)(y.a.HeaderCell,{colSpan:"2",children:"About"})})}),Object(A.jsxs)(y.a.Body,{children:[Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:"Owner"}),c.about.owner?Object(A.jsx)(y.a.Cell,{children:Object(A.jsx)(k.b,{to:"/users/".concat(c.about.owner.username),children:c.about.owner.username})}):Object(A.jsx)(y.a.Cell,{children:"Anonymous"})]}),Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:"Birth/Adoption date"}),Object(A.jsx)(y.a.Cell,{children:c.about.dateCreated})]}),Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:"Date of Upload"}),Object(A.jsx)(y.a.Cell,{children:c.about.dateUploaded})]}),Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:"Number of Downloads"}),Object(A.jsx)(y.a.Cell,{children:c.about.downloads})]}),Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:"Number of times viewed"}),Object(A.jsx)(y.a.Cell,{children:c.about.views})]})]})]})})]}),Object(A.jsx)("div",{className:"column row ui segment attached",children:Object(A.jsxs)(T.a.Column,{children:[Object(A.jsxs)(y.a,{celled:!0,striped:!0,unstackable:!0,color:"green",children:[Object(A.jsx)(y.a.Header,{children:Object(A.jsx)(y.a.Row,{children:Object(A.jsx)(y.a.HeaderCell,{colSpan:"2",children:"Physical Information"})})}),Object(A.jsxs)(y.a.Body,{children:[Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:"Height"}),Object(A.jsxs)(y.a.Cell,{children:[c.physical.height," cm"]})]}),Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:"Length"}),Object(A.jsxs)(y.a.Cell,{children:[c.physical.length," cm"]})]}),Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:"Width"}),Object(A.jsxs)(y.a.Cell,{children:[c.physical.width," cm"]})]}),Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:"Weight"}),Object(A.jsxs)(y.a.Cell,{children:[c.physical.weight," kg"]})]}),Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:"Components"}),Object(A.jsx)(y.a.Cell,{children:c.physical.components})]})]})]}),Object(A.jsxs)(y.a,{celled:!0,striped:!0,unstackable:!0,color:"green",children:[Object(A.jsxs)(y.a.Header,{children:[Object(A.jsx)(y.a.Row,{children:Object(A.jsx)(y.a.HeaderCell,{colSpan:3,children:"Achievements"})}),Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.HeaderCell,{children:"Trial"}),Object(A.jsx)(y.a.HeaderCell,{children:"Result"}),Object(A.jsx)(y.a.HeaderCell,{children:"Position"})]})]}),Object(A.jsxs)(y.a.Body,{children:[Object(A.jsx)(ee,{trial:c.achievement.sprint,trialName:"Sprint",measurement:"cm/sec"}),Object(A.jsx)(ee,{trial:c.achievement.blockPush,trialName:"Block Push",measurement:"cm"}),Object(A.jsx)(ee,{trial:c.achievement.hurdles,trialName:"Hurdles",measurement:"cm/sec"}),Object(A.jsx)(ee,{trial:c.achievement.highJump,trialName:"High Jump",measurement:"cm"}),Object(A.jsx)(ee,{trial:c.achievement.lap,trialName:"Lap",measurement:"sec"}),Object(A.jsx)(ee,{trial:c.achievement.overall,trialName:"Overall",measurement:"",extraStyle:ne})]})]})]})})]})})]})}return Object(A.jsx)(Z.a,{active:!0,inline:"centered"})},se=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)(!1),d=Object(o.a)(j,2),b=d[0],h=d[1],u=Object(a.useState)(new FormData),O=Object(o.a)(u,2),m=O[0],p=O[1],g=Object(a.useState)(),v=Object(o.a)(g,2),k=v[0],L=v[1];return c?Object(A.jsx)(f.a,{to:"/zooks/".concat(c)}):Object(A.jsxs)(C.a.Group,{children:[Object(A.jsx)(C.a,{children:Object(A.jsx)(w.a,{size:"huge",children:"Zook Upload"})}),Object(A.jsx)(C.a,{children:Object(A.jsxs)(y.a,{compact:!0,color:"orange",inverted:!0,children:[Object(A.jsx)(y.a.Header,{children:Object(A.jsx)(y.a.Row,{children:Object(A.jsxs)(y.a.HeaderCell,{children:[Object(A.jsx)(z.a,{name:"attention"})," Upload Requirements"]})})}),Object(A.jsxs)(y.a.Body,{children:[Object(A.jsx)(y.a.Row,{children:Object(A.jsxs)(y.a.Cell,{error:!0,children:[Object(A.jsx)(z.a,{name:"attention"}),"Must have a Passport Photo"]})}),Object(A.jsx)(y.a.Row,{children:Object(A.jsxs)(y.a.Cell,{error:!0,children:[Object(A.jsx)(z.a,{name:"attention"}),"Does not support Street Rules"]})})]})]})}),Object(A.jsx)(C.a,{children:Object(A.jsxs)(R.a,{onSubmit:function(){m.get("zook")&&(l(!0),x.a.post("/zooks/upload",m,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){n(e.data.id),l(!1)})).catch((function(e){if(!e.response)throw e;L(e.response.data.error),h(!1),l(!1)})))},loading:i,error:!!k,children:[Object(A.jsxs)(R.a.Field,{error:!!k,children:[Object(A.jsx)("label",{children:"Zook File"}),Object(A.jsx)("input",{type:"file",onChange:function(e){var t,c=null===(t=e.target.files)||void 0===t?void 0:t.item(0);if(L(void 0),c&&c.name.endsWith(".zook")){var a=new FormData;a.append("zook",c),p(a),h(!0)}else h(!1)},accept:".zook"})]}),Object(A.jsx)(N.a,{error:!0,header:k}),Object(A.jsx)(S.a,{type:"submit",color:"blue",icon:"upload",disabled:!b,content:"Upload Zook"})]})})]})},ie=function(e){Object(Y.a)(c,e);var t=Object(Q.a)(c);function c(){var e;Object(q.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={loading:!0,zooks:[]},e}return Object($.a)(c,[{key:"componentDidMount",value:function(){var e=Object(J.a)(M.a.mark((function e(){var t=this;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.a.get("/zooks").then((function(e){return t.setState({loading:!1,zooks:e.data})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading)return Object(A.jsx)(Z.a,{active:!0,inline:"centered"});var e=this.state.zooks.map((function(e){var t=e.id,c=e.name;return Object(A.jsxs)(K.a.Item,{as:k.b,to:"/zooks/".concat(t),children:[Object(A.jsx)(z.a,{name:"bug",inverted:!0}),Object(A.jsx)(K.a.Content,{children:Object(A.jsxs)(K.a.Header,{children:[t," - ",Object(A.jsx)("b",{children:c})]})})]},t)}));return Object(A.jsxs)(C.a.Group,{children:[Object(A.jsx)(C.a,{children:Object(A.jsx)(w.a,{size:"huge",children:"Zooks"})}),Object(A.jsx)(C.a,{children:Object(A.jsx)(K.a,{divided:!0,selection:!0,size:"large",children:e})})]})}}]),c}(a.Component),le=c(504),oe=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(o.a)(r,2),i=s[0],l=s[1];Object(a.useEffect)((function(){n(!0),x.a.get("/users").then((function(e){n(!1),l(e.data)}))}),[]);var j=Object(a.useState)(),d=Object(o.a)(j,2),b=d[0],h=d[1],u=Object(a.useState)(),O=Object(o.a)(u,2),m=O[0],p=O[1],g=Object(a.useState)(),v=Object(o.a)(g,2),f=v[0],k=v[1];return Object(A.jsxs)(C.a.Group,{children:[Object(A.jsx)(C.a,{children:Object(A.jsx)(w.a,{size:"huge",children:"Admin Tools"})}),Object(A.jsxs)(C.a,{loading:c,children:[Object(A.jsx)(w.a,{size:"medium",children:"Zook Owner Assigner"}),Object(A.jsxs)(R.a,{onSubmit:function(){n(!0),x.a.patch("admin/zook/".concat(b,"/owner/").concat(m)).then((function(e){k(e),n(!1)})).catch((function(e){n(!1),k(e.response)}))},children:[Object(A.jsxs)(R.a.Group,{widths:"equal",children:[Object(A.jsxs)(R.a.Field,{children:[Object(A.jsx)("label",{children:"ZookId"}),Object(A.jsx)("input",{name:"zookId",placeholder:"Zook Id",type:"number",inputMode:"numeric",onChange:function(e){return h(e.target.value)}})]}),Object(A.jsxs)(R.a.Field,{children:[Object(A.jsx)("label",{children:"Owner"}),Object(A.jsx)(le.a,{name:"owner",clearable:!0,options:i.map((function(e){var t=e.username;return{text:t,value:t}})),selection:!0,onChange:function(e,t){return p(t.value)}})]})]}),Object(A.jsx)(S.a,{type:"submit",children:"Update"}),Object(A.jsxs)("pre",{children:["Response: ",null===f||void 0===f?void 0:f.status," - ",JSON.stringify(null===f||void 0===f?void 0:f.data)]})]})]})]})},je=c(506),de=c(502),be=/^\/zooks\/?\d*$/,he=function(){var e=Object(l.c)((function(e){return e.user})),t=g();return Object(A.jsx)(de.a,{children:Object(A.jsxs)(je.a,{children:[Object(A.jsxs)(k.c,{to:"/",activeClassName:"active",className:"item",exact:!0,style:{padding:10},children:[Object(A.jsx)("img",{src:"".concat("https://zooklabs.com","/logo.png"),alt:"logo"}),Object(A.jsx)("b",{style:{paddingLeft:10},children:"ZookLabs"})]}),Object(A.jsx)(k.c,{to:"/zooks",activeClassName:"active",className:"item",isActive:function(e,t){var c=t.pathname;return be.test(c)},children:"Zooks"}),Object(A.jsx)(k.c,{to:"/leagues",activeClassName:"active",className:"item",children:"Leagues"}),Object(A.jsx)(k.c,{to:"/zooks/upload",activeClassName:"active",className:"item",exact:!0,children:"Upload"}),Object(A.jsx)(k.c,{to:"/users",activeClassName:"active",className:"item",children:"Users"}),function(){switch(e.state){case L.LoggedIn:var c=e.username;return Object(A.jsxs)(je.a.Menu,{position:"right",children:[Object(A.jsx)(k.c,{to:"/users/".concat(c),activeClassName:"active",className:"item",isActive:function(e,t){var a=t.pathname;return"/users/".concat(c)===a},children:c}),Object(A.jsx)(je.a.Item,{children:Object(A.jsx)(S.a,{active:!0,onClick:t,primary:!0,children:"Logout"})})]});case L.LoggedOut:return Object(A.jsx)(je.a.Menu,{position:"right",children:Object(A.jsx)(je.a.Item,{children:Object(A.jsx)(k.c,{to:"/login",activeClassName:"active",className:"ui primary button",children:"Login"})})});case L.Registering:return Object(A.jsx)(je.a.Menu,{position:"right",children:Object(A.jsx)(je.a.Item,{children:Object(A.jsx)(S.a,{active:!0,onClick:t,color:"red",primary:!0,children:"Cancel"})})})}}(),Object(A.jsxs)("a",{className:"discord item",href:"http://discord.zooklabs.com",children:[Object(A.jsx)(z.a,{name:"discord",inverted:!0}),"Discord"]})]})})},ue=function(){var e=Object(f.i)().username,t=Object(f.g)(),c=Object(a.useState)(),n=Object(o.a)(c,2),r=n[0],s=n[1];if(Object(a.useEffect)((function(){x.a.get("users/".concat(e)).then((function(e){t.replace(e.data.identifier.username),s(e.data)}))}),[e,t]),r){var i=r.zooks.map((function(e){var t=e.id,c=e.name;return Object(A.jsxs)(K.a.Item,{as:k.b,to:"/zooks/".concat(t),children:[Object(A.jsx)(z.a,{name:"bug",inverted:!0}),Object(A.jsx)(K.a.Content,{children:Object(A.jsxs)(K.a.Header,{children:[t," - ",Object(A.jsx)("b",{children:c})]})})]},t)}));return Object(A.jsxs)(C.a.Group,{children:[Object(A.jsx)(C.a,{clearing:!0,attached:"top",children:Object(A.jsxs)(w.a,{floated:"left",size:"huge",style:{margin:0},children:["User: ",r.identifier.username]})}),Object(A.jsxs)(y.a,{attached:"top",celled:!0,striped:!0,unstackable:!0,color:"green",children:[Object(A.jsx)(y.a.Header,{children:Object(A.jsx)(y.a.Row,{children:Object(A.jsx)(y.a.HeaderCell,{colSpan:"2",children:"About"})})}),Object(A.jsxs)(y.a.Body,{children:[Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:"Signed Up"}),Object(A.jsx)(y.a.Cell,{children:r.about.signUpAt})]}),Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:"Last Logged In"}),Object(A.jsx)(y.a.Cell,{children:r.about.lastLoginAt})]}),Object(A.jsxs)(y.a.Row,{children:[Object(A.jsx)(y.a.Cell,{children:"Uploaded Zooks"}),Object(A.jsx)(y.a.Cell,{children:i.length})]})]})]}),Object(A.jsx)(C.a,{attached:!0,children:Object(A.jsx)(K.a,{divided:!0,selection:!0,size:"large",children:i})})]})}return Object(A.jsx)(C.a,{children:Object(A.jsx)(Z.a,{active:!0,inline:"centered"})})},Oe=function(){var e=Object(l.c)((function(e){return e.user})),t=function(){var e=Object(m.a)(["token"]),t=Object(o.a)(e,1)[0],c=p();return function(){var e=t.token;if(e){var a=Object(j.a)(e);c(e,a)}}}();Object(a.useEffect)(t,[t]);return Object(A.jsxs)(k.a,{children:[Object(A.jsx)(he,{}),Object(A.jsx)(de.a,{children:H(e)?Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(f.d,{children:[Object(A.jsx)(f.b,{path:"/login",exact:!0,component:U}),Object(A.jsx)(f.a,{to:"/login"})]})}):Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(f.d,{children:[Object(A.jsx)(f.b,{path:"/",exact:!0,component:E}),Object(A.jsx)(f.b,{path:"/login",exact:!0,component:B}),Object(A.jsx)(f.b,{path:"/zooks/upload",exact:!0,component:se}),Object(A.jsx)(f.b,{path:"/zooks/:id",component:re}),Object(A.jsx)(f.b,{path:"/zooks",exact:!0,component:ie}),Object(A.jsx)(f.b,{path:"/users",exact:!0,component:V}),Object(A.jsx)(f.b,{path:"/users/:username",component:ue}),Object(A.jsx)(f.b,{path:"/leagues",exact:!0,component:P}),Object(A.jsx)(f.b,{path:"/leagues/sprint",render:function(e){return Object(A.jsx)(D,Object(i.a)(Object(i.a)({},e),{},{league:"sprint",title:"Sprint",measurement:"cm/sec"}))}}),Object(A.jsx)(f.b,{path:"/leagues/block_push",render:function(e){return Object(A.jsx)(D,Object(i.a)(Object(i.a)({},e),{},{league:"block_push",title:"Block Push",measurement:"cm"}))}}),Object(A.jsx)(f.b,{path:"/leagues/hurdles",render:function(e){return Object(A.jsx)(D,Object(i.a)(Object(i.a)({},e),{},{league:"hurdles",title:"Hurdles",measurement:"cm/sec"}))}}),Object(A.jsx)(f.b,{path:"/leagues/high_jump",render:function(e){return Object(A.jsx)(D,Object(i.a)(Object(i.a)({},e),{},{league:"high_jump",title:"High Jump",measurement:"cm"}))}}),Object(A.jsx)(f.b,{path:"/leagues/lap",render:function(e){return Object(A.jsx)(D,Object(i.a)(Object(i.a)({},e),{},{league:"lap",title:"Lap",measurement:"sec"}))}}),Object(A.jsx)(f.b,{path:"/leagues/overall_league",render:function(e){return Object(A.jsx)(D,Object(i.a)(Object(i.a)({},e),{},{league:"overall_league",title:"Overall",measurement:""}))}}),Object(A.jsx)(f.b,{path:"/admin",exact:!0,component:oe}),Object(A.jsx)(f.a,{to:"/"})]})})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=c(503),me=(c(488),c(109)),pe=Object(me.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{state:L.LoggedIn,username:t.username};case b:return{state:L.Registering};case h:return{state:L.LoggedOut};default:return e}}}),ge=c(260);x.a.defaults.baseURL="https://zooklabs.herokuapp.com/api";var ve=Object(me.createStore)(pe,Object(ge.devToolsEnhancer)({}));s.a.render(Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(xe.a,{children:Object(A.jsx)(l.a,{store:ve,children:Object(A.jsx)(Oe,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[489,1,2]]]);
//# sourceMappingURL=main.4e0c2932.chunk.js.map