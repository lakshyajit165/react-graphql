(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,a,n){e.exports=n(53)},40:function(e,a,n){},53:function(e,a,n){"use strict";n.r(a);var t=n(4),r=n.n(t),c=n(27),o=n.n(c),l=(n(40),n(33)),i=n(17),s=n(28),u=n(14),m=n.n(u),d=function(e){return r.a.createElement("div",{className:"card",style:{width:"100%",marginTop:"10px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.course.title),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"by ",e.course.author),r.a.createElement("p",{className:"card-text"},e.course.description),r.a.createElement("a",{href:e.course.url,className:"card-link"},"Go to course ...")))};function p(){var e=Object(s.a)(["\n      {\n        allCourses {\n          id\n          title\n          author\n          description\n          topic\n          url\n        }\n      }\n    "]);return p=function(){return e},e}var v=function(){return r.a.createElement(i.b,{query:m()(p())},function(e){var a=e.loading,n=e.error,t=e.data;return a?r.a.createElement("p",null,"Loading..."):n?r.a.createElement("p",null,"Error :("):t.allCourses.map(function(e){return r.a.createElement(d,{course:e})})})},E=new l.a({uri:"https://vm8mjvrnv3.lp.gql.zone/graphql",fetchOptions:{mode:"no-cors"}}),h=function(){return r.a.createElement(i.a,{client:E},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"React and GraphQL - Sample Application")),r.a.createElement("div",null,r.a.createElement(v,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(51);o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.c0bca537.chunk.js.map