(this["webpackJsonpmovie-in"]=this["webpackJsonpmovie-in"]||[]).push([[0],{105:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(23),r=n.n(i),o=(n(80),n(8)),s=n(36),l=n.n(s),d=n(61),h=n(62),u=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),p=n(63),j=n(152),O=(n(99),n(3));var b=function(e){var t=e.id,n=e.title,a=e.poster_path,c=e.handleOpen;return Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/w154/"+a,alt:n,className:"movie_image"}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("h4",{children:n}),Object(O.jsx)(j.a,{variant:"contained",size:"small",onClick:function(){return c(n)},children:"trailer"})]})]},t)};n(105);var v=function(e){var t=e.title,n=e.fetchUrl,c=e.handleOpen,i=Object(a.useState)([]),r=Object(o.a)(i,2),s=r[0],h=r[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get(n);case 2:return t=e.sent,a=t.data.results,h(a),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:t}),Object(O.jsx)(p.a,{className:"scroll-container",children:Object(O.jsx)("div",{className:"movies",children:s.map((function(e){return Object(O.jsx)(b,{id:e.id,title:e.title,poster_path:e.poster_path,handleOpen:c})}))})})]})},f=Object({NODE_ENV:"production",PUBLIC_URL:"/movie-in",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,m={fetchTrendingMovies:"/trending/movie/week?api_key=".concat(f,"&language=en-US"),fetchPopularMovies:"/movie/popular?api_key=".concat(f,"&language=en-US"),fetchTopRatedMovies:"/movie/top_rated?api_key=".concat(f,"&language=en-US")},g=n(65),x=n(68),S=n.n(x),_=n(151),T=n(155),E=n(154),P=(n(125),{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,width:"70%",height:390});var R=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],i=t[1],r=c.a.useState(!1),s=Object(o.a)(r,2),l=s[0],d=s[1],h=Object(a.useState)(""),u=Object(o.a)(h,2),p=u[0],j=u[1],b={height:"390",width:"100%",playerVars:{autoplay:1}},f=function(e){j(""),S()(e||"").then((function(e){var t=new URLSearchParams(new URL(e).search).get("v");j(t)})).catch((function(e){})),i(p?Object(O.jsx)(g.a,{videoId:p,opts:b}):Object(O.jsx)(E.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"trailer is not availabe"})),d(!0)};return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(v,{title:"WEEK TRENDING",fetchUrl:m.fetchTrendingMovies,handleOpen:f}),Object(O.jsx)(v,{title:"POPULAR",fetchUrl:m.fetchPopularMovies,handleOpen:f}),Object(O.jsx)(v,{title:"TOP RATING",fetchUrl:m.fetchTopRatedMovies,handleOpen:f}),Object(O.jsx)(_.a,{open:l,onClose:function(){return d(!1)},children:Object(O.jsx)(T.a,{sx:P,children:n})})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,156)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(R,{})}),document.getElementById("root")),U()},80:function(e,t,n){},99:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.5646dea1.chunk.js.map