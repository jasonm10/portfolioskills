(this.webpackJsonptest_app=this.webpackJsonptest_app||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(12),n(3)),l=n(4),s=n(6),u=n(5),h=function(e){var t=e.name,n=e.criteria,a=e.id;return r.a.createElement("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"random",src:"https://picsum.photos/id/".concat(a,"/200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,"Length: ",n)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,criteria:t[n].criteria})})))},d=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{style:{paddingBottom:"20px"}},r.a.createElement("input",{className:"pa3",type:"search",placeholder:"Search for skills...",onChange:t}))},p=(n(13),function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px",paddingBottom:"10px",paddingTop:"10px"}},e.children)}),f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"Current Porfolio Skills"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(m,{robots:t})))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.b0106d21.chunk.js.map