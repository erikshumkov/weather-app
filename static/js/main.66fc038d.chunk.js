(window["webpackJsonpweather-site"]=window["webpackJsonpweather-site"]||[]).push([[0],{19:function(e,t,a){e.exports=a(53)},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),s=a(4),o=a.n(s),i=a(18),u=a(15),m=a(2),d=a(16),g=a.n(d),h=a(3),p=a.n(h),E=a(17),f=(a(50),a(51),{google:"AIzaSyCorh4dbsoc_wcEamkiKTIBggBh1MEmHWs",darksky:"a3c9cb68a55dfd881d8f93e880e901c0"}),y=function(){return c.a.createElement("header",null,c.a.createElement("h1",{className:"App-name"},"Weather App"))},b=function(e){var t=e.weather;return c.a.createElement("div",{className:"stats"},c.a.createElement("div",{className:"wind"},c.a.createElement("h3",null,"Wind:"),c.a.createElement("span",null,Math.round(t.windSpeed)," M/S")),c.a.createElement("div",{className:"temp"},c.a.createElement("h3",null,"Temp:"),c.a.createElement("span",null,Math.round(t.temperature)," C")),c.a.createElement("div",{className:"humid"},c.a.createElement("h3",null,"Humidity:"),c.a.createElement("span",null,Math.round(100*t.humidity)," %")))},v=function(e){var t=e.address,a=e.setAddress,n=e.handleSelect;return c.a.createElement("section",{className:"search-section"},c.a.createElement(p.a,{value:t,onChange:a,onSelect:n},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps;e.loading;return c.a.createElement("div",null,c.a.createElement("input",Object.assign({className:"google-search-field"},t({placeholder:"Type address.."}))),c.a.createElement("div",{className:"google-ul"},a.map((function(e){var t={backgroundColor:e.active?"#41b6e6":"#000"};return c.a.createElement("div",Object.assign({className:"google-suggestion"},n(e,{style:t})),e.description)}))))})))},S=function(e){var t=e.getHistoryLocation,a=e.clearStorage,n=e.location;return c.a.createElement("div",{className:"history-comp"},c.a.createElement("ul",{className:"latest-search-list"},n.map((function(e,a){return c.a.createElement("li",{className:"latest-search-li",key:a,onClick:t,value:a},e.city)}))),localStorage.length>0?c.a.createElement("button",{className:"clear-history-btn",onClick:a},"Clear history"):null)},w=function(){return c.a.createElement("footer",null,c.a.createElement("a",{className:"darksky",href:"https://darksky.net/poweredby/"},"Powered by Dark Sky"))},k=function(e){var t=e.skyconsRef,a=e.weather,r=e.coordinates,l=e.city;return c.a.createElement(n.Fragment,null,c.a.createElement("h2",{className:"big-city"},"59.32932"===r.lat&&"18.06858"===r.lng?"Stockholm, Sverige":l),c.a.createElement("canvas",{className:"icon",ref:t,id:"icon",width:"64",height:"64"}),c.a.createElement("h3",null,a.summary),c.a.createElement("h1",{className:"temp-big"},Math.round(a.temperature)," C"))},O=new(a(52)(window))({color:"#fff"});var N=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),s=Object(m.a)(l,2),d=s[0],p=s[1],N=Object(n.useState)(""),j=Object(m.a)(N,2),C=j[0],A=j[1],I=Object(n.useState)([]),M=Object(m.a)(I,2),x=M[0],B=M[1],H=Object(n.useState)([]),J=Object(m.a)(H,2),L=J[0],P=J[1],T=Object(n.useState)({lat:"59.32932",lng:"18.06858"}),R=Object(m.a)(T,2),W=R[0],z=R[1],D=Object(E.usePosition)(),F=(D.latitude,D.longitude,D.error,Object(n.useRef)()),K=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.geocodeByAddress)(t);case 2:return a=e.sent,e.next=5,Object(h.getLatLng)(a[0]);case 5:n=e.sent,p(t),z(n),d&&(c=[{city:d,lat:n.lat,lng:n.lng}].concat(Object(i.a)(L)),localStorage.setItem("location",JSON.stringify(c)),P(c),A(d),p(""));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(void 0!==localStorage.location){var e=localStorage.getItem("location"),t=JSON.parse(e);P(t)}g.a.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/".concat(f.darksky,"/").concat(W.lat,",").concat(W.lng,"?units=si")).then((function(e){B(e.data.currently),O.set(F.current,e.data.currently.icon),O.play()})).catch((function(e){console.log(e)}))}),[W]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"wrapper"},c.a.createElement(y,{coordinates:W,city:C}),c.a.createElement(k,{skyconsRef:F,weather:x,coordinates:W,city:C}),c.a.createElement(b,{weather:x}),c.a.createElement(v,{address:d,setAddress:p,handleSelect:K}),localStorage.length>0?c.a.createElement("button",{className:"history-btn",onClick:function(){return r(!a)}},a?"Close history":"Show history"):null,a?c.a.createElement(S,{getHistoryLocation:function(e){var t=e.currentTarget;z({lat:L[t.value].lat,lng:L[t.value].lng}),A(L[t.value].city)},clearStorage:function(){L.splice(0),localStorage.clear(),z({lat:"58.41086",lng:"15.62157"})},location:L}):null),c.a.createElement(w,null))};l.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.66fc038d.chunk.js.map