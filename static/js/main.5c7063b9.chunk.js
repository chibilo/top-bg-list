(this.webpackJsonptop10bg=this.webpackJsonptop10bg||[]).push([[0],{31:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n(8),r=n.n(a),c=n(9),s=(n(31),{Tesera:{title:"Tesera",linkIdField:"alias",makeLink:function(t){return"https://tesera.ru/game/".concat(t)},ratingField:"ratingUser",sortField:"-ratingn10"},BGG:{title:"BoardGameGeek",linkIdField:"bggId",makeLink:function(t){return"https://www.boardgamegeek.com/boardgame/".concat(t)},ratingField:"bggGeekRating",sortField:"-ratinggeekbgg"}}),l=n(22),o=n.n(l),u=n(56),d=n(57),j=n(55),g=n(1),b=function(t){var e=t.info;return Object(g.jsxs)(d.a,{children:[Object(g.jsx)(d.a.Img,{src:e.photo,alt:"game image"}),Object(g.jsxs)(d.a.ImgOverlay,{children:[Object(g.jsx)("div",{className:"rating",children:e.numRating}),Object(g.jsx)(j.a,{className:"pull-right",variant:"success",title:"rating",children:e.gameRating})]}),Object(g.jsxs)(d.a.Body,{style:{zIndex:1e3},children:[Object(g.jsx)(d.a.Title,{children:e.title}),Object(g.jsx)(d.a.Text,{children:e.desc}),e.links.map((function(t,e){return Object(g.jsx)(d.a.Link,{as:"a",href:t.link,target:"_blank",children:t.title},e)}))]})]},e.id)},m=function(t){var e=t.host,n=t.limit,a=Object(i.useState)([]),r=Object(c.a)(a,2),l=r[0],d=r[1],j=Object(i.useState)(!1),m=Object(c.a)(j,2),h=m[0],O=m[1],v=function(t){return Object.values(s).map((function(e){var n=e.title,i=e.linkIdField;return{title:n,link:(0,e.makeLink)(t[i])}}))};return Object(i.useEffect)((function(){var t;O(!0);var i=(null===(t=s[e])||void 0===t?void 0:t.sortField)||"-ratingn10";o.a.get("https://api.tesera.ru/games?offset=0&limit=".concat(n,"&sort=").concat(i)).then((function(t){var n;O(!1);var i=(null===(n=s[e])||void 0===n?void 0:n.ratingField)||"ratingUser";d(t.data.map((function(t,e){return{id:t.teseraId,title:t.title,desc:t.descriptionShort,photo:t.photoUrl,numRating:e+1,gameRating:t[i],links:v(t)}})))})).catch((function(t){console.error(t)}))}),[e,n]),Object(g.jsxs)("div",{className:"game-list",children:[Object(g.jsx)(u.a,{className:"alert",show:h,variant:"info",children:"Loading..."}),l.map((function(t){return Object(g.jsx)(b,{info:t})}))]})},h=function(t){var e=t.value,n=t.items,i=t.onChange;return Object(g.jsxs)("div",{className:"custom-dropdown",children:[e,Object(g.jsx)("ul",{className:"custom-dropdown-menu",children:n.map((function(t,e){var n;return Object(g.jsx)("li",{onClick:function(e){var n;i(null!==(n=t.value)&&void 0!==n?n:t)},children:null!==(n=t.text)&&void 0!==n?n:t},e)}))})]})};function O(){var t=Object(i.useState)("BGG"),e=Object(c.a)(t,2),n=e[0],a=e[1],r=Object(i.useState)(10),l=Object(c.a)(r,2),o=l[0],u=l[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("h1",{children:["\u0422\u043e\u043f"," ",Object(g.jsx)(h,{value:o,items:[10,25,50,100],onChange:function(t){return u(t)}})," ","\u041d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u044b\u0445 \u0418\u0433\u0440 \u043f\u043e \u0432\u0435\u0440\u0441\u0438\u0438"," ",Object(g.jsx)(h,{value:s[n].title,items:Object.entries(s).map((function(t){return{value:t[0],text:t[1].title}})),onChange:function(t){return a(t)}})]}),Object(g.jsx)(m,{host:n,limit:o})]})}var v=document.getElementById("root");r.a.render(Object(g.jsx)(i.StrictMode,{children:Object(g.jsx)(O,{})}),v)}},[[53,1,2]]]);
//# sourceMappingURL=main.5c7063b9.chunk.js.map