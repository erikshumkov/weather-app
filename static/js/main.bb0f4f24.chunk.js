(window["webpackJsonpweather-site"]=window["webpackJsonpweather-site"]||[]).push([[0],{18:function(e,t,a){e.exports=a(52)},49:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),l=a(14),o=a.n(l),s=a(4),i=a.n(s),u=a(17),m=a(15),d=a(2),g=a(16),f=a.n(g),h=a(3),v=a.n(h),E=(a(49),a(50),{google:"AIzaSyCorh4dbsoc_wcEamkiKTIBggBh1MEmHWs",darksky:"a3c9cb68a55dfd881d8f93e880e901c0"}),p=function(e){var t=e.skyconsRef,a=e.weather,n=e.coordinates,l=e.city;e.saveToFavorites,e.favorite;return r.a.createElement(c.Fragment,null,r.a.createElement("h2",{className:"big-city"},"59.32932"===n.lat&&"18.06858"===n.lng?"Stockholm, Sverige":l),r.a.createElement("div",{className:"icon-temp"},r.a.createElement("canvas",{className:"icon",ref:t,id:"icon",width:"64",height:"64"}),r.a.createElement("h1",{className:"temp-big"},Math.round(a.temperature),"C")),r.a.createElement("h3",{className:"summary"},a.summary))},y=function(e){var t=e.weather;return r.a.createElement("div",{className:"stats"},r.a.createElement("div",{className:"wind"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-wind"})," Wind"),r.a.createElement("span",null,Math.round(t.windSpeed)," M/S")),r.a.createElement("div",{className:"temp"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-thermometer-half"})," Temp"),r.a.createElement("span",null,Math.round(t.temperature),"C")),r.a.createElement("div",{className:"humid"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-tint"})," Humidity"),r.a.createElement("span",null,Math.round(100*t.humidity),"%")))},b=function(e){var t=e.address,a=e.setAddress,n=e.handleSelect;return r.a.createElement("section",{className:"search-section"},r.a.createElement(v.a,{value:t,onChange:a,onSelect:n},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps;e.loading;return r.a.createElement("div",null,r.a.createElement("input",Object.assign({className:"google-search-field"},t({placeholder:"Search address.."}))),r.a.createElement("div",{className:"google-ul"},a.map((function(e){var t={backgroundColor:e.active?"#FFF":"#F3F8FB",color:e.active?"#42CCFA":"#72889A",fontWeight:"700"};return r.a.createElement("div",Object.assign({className:"google-suggestion"},n(e,{style:t})),e.description)}))))})))},S=function(e){var t=e.getHistoryLocation,a=e.clearStorage,n=e.location;return r.a.createElement("div",{className:"history-comp"},r.a.createElement("ul",{className:"latest-search-list"},n.map((function(e,a){return r.a.createElement("li",{className:"latest-search-li",key:a,onClick:t,value:a},e.city)}))),void 0!==localStorage.location?r.a.createElement("button",{className:"clear-history-btn",onClick:a},"Clear history"):null)},N=function(){return r.a.createElement("footer",null,r.a.createElement("a",{className:"darksky",href:"https://darksky.net/poweredby/"},"Powered by Dark Sky"))},O=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader-cloud"},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"cloud"})))},w=new(a(51)(window))({color:"#fff"}),k=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),a=t[0],l=t[1],o=Object(c.useState)(!1),s=Object(d.a)(o,2),g=s[0],v=s[1],k=Object(c.useState)(""),j=Object(d.a)(k,2),C=j[0],F=j[1],I=Object(c.useState)(""),A=Object(d.a)(I,2),J=A[0],M=A[1],T=Object(c.useState)([]),B=Object(d.a)(T,2),x=B[0],H=B[1],L=Object(c.useState)([]),P=Object(d.a)(L,2),R=P[0],W=P[1],z=Object(c.useState)([]),D=Object(d.a)(z,2),K=D[0],_=D[1],q=Object(c.useState)({lat:"59.32932",lng:"18.06858"}),G=Object(d.a)(q,2),Q=G[0],U=G[1],V=Object(c.useRef)(),X=function(){var e=Object(m.a)(i.a.mark((function e(t){var a,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.geocodeByAddress)(t);case 2:return a=e.sent,e.next=5,Object(h.getLatLng)(a[0]);case 5:n=e.sent,F(t),M(t),U(n),C&&(c=[{city:t,lat:n.lat,lng:n.lng}].concat(Object(u.a)(K)),localStorage.setItem("location",JSON.stringify(c)),_(c),F(""));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){if(void 0!==localStorage.location){var e=JSON.parse(localStorage.getItem("location"));_(e)}void 0!==localStorage.favorite&&(n=JSON.parse(localStorage.getItem("favorite")),H(n)),f.a.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/".concat(E.darksky,"/").concat(Q.lat,",").concat(Q.lng,"?units=si")).then((function(e){W(e.data.currently),w.set(V.current,e.data.currently.icon),w.play(),setTimeout((function(){l(!1)}),1500)})).catch((function(e){console.log(e)}))}),[Q]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"wrapper"},a?r.a.createElement(O,null):null,r.a.createElement(p,{skyconsRef:V,weather:R,coordinates:Q,city:J,saveToFavorites:function(){var e={city:J,lat:Q.lat,lng:Q.lng};localStorage.setItem("favorite",JSON.stringify(e)),console.log("Saved to favorites..")},favorite:x}),r.a.createElement(y,{weather:R}),r.a.createElement(b,{address:C,setAddress:F,handleSelect:X}),void 0!==localStorage.location?r.a.createElement("button",{className:"history-btn",onClick:function(){return v(!g)}},g?"Close history":"Show history"):null,g?r.a.createElement(S,{getHistoryLocation:function(e){var t=e.currentTarget;U({lat:K[t.value].lat,lng:K[t.value].lng}),M(K[t.value].city)},clearStorage:function(){K.splice(0),U({lat:"59.32932",lng:"18.06858"}),localStorage.clear()},location:K}):null),r.a.createElement(N,null))};o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.bb0f4f24.chunk.js.map