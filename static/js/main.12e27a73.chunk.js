(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,a,t){e.exports=t(20)},16:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(6),l=t.n(o);t(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(17);var c=function(){return r.a.createElement("div",{id:"Top"},r.a.createElement("h2",null,"Footbud"))},i=t(7),m=t(8),p=t(10),u=t(9),d=(t(18),t(22)),s=t(1),E=t.n(s),v=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).fetch=function(){function a(e){console.log("ASDAADSDs"),E()(".badges").ready((function(){E()("img").bind("error",(function(){E()(this).attr("src","./"+e+".png")}))}))}E()("#Para").empty(),E()("#table").empty();var t,n,r,o=document.createElement("IMG");o.src="./giphy.gif",E()("#Para").empty(),E()("#Para").append(o);for(var l=0;l<5;l++){if(!0===e.league.current.options[l].selected){t=e.league.current.options[l].innerHTML,console.log(t),t=0==t.localeCompare("Premier League")?"PL":0==t.localeCompare("Bundesliga")?"BL1":0==t.localeCompare("Serie A")?"SA":0==t.localeCompare("La Liga")?"PD":"CL";break}}for(var c=0;c<39;c++){if(!0===e.day.current.options[c].selected){n=e.day.current.options[c].value;break}}for(var i=0;i<13;i++){if(!0===e.year.current.options[i].selected){r=e.year.current.options[i].value;break}}E.a.ajax({headers:{"X-Auth-Token":"becea41ea11f4b8cb4c15de747cad4aa"},url:"http://api.football-data.org/v2/competitions/"+t+"/matches/?season="+r+"&matchday="+n,dataType:"json",type:"GET"}).done((function(e){console.log(e);var r=document.createElement("H4");r.innerHTML="Fixtures for Matchday "+n,document.getElementById("Para").innerHTML="",E()("#Para").append(r),e.matches.forEach((function(e){var n=document.createElement("div"),r=new Image;r.src="./"+e.homeTeam.name+".png",r.className="badges";var o=document.createElement("IMG");o.src="./"+e.awayTeam.name+".png",o.className="badges";var l=e.score.fullTime.homeTeam,c=e.score.fullTime.awayTeam;console.log(e),null==l&&(l="TBD",c="TBD"),n.className="score",n.innerHTML=r.outerHTML+e.homeTeam.name+"  <b>"+l+"-"+c+"</b>  "+e.awayTeam.name+o.outerHTML,E()("#Para").append(n),E()("#Para").append("<br/>"),a(t)}))})),E.a.ajax({headers:{"X-Auth-Token":"becea41ea11f4b8cb4c15de747cad4aa"},url:"http://api.football-data.org/v2/competitions/"+t+"/standings",dataType:"json",type:"GET"}).done((function(e){console.log("match year is: "+r);var n=new Date;if(r==n.getFullYear()-1){var o=document.createElement("div");o.className="table-like";var l=document.createElement("DIV"),c=document.createElement("span"),i=document.createElement("span"),m=document.createElement("span"),p=document.createElement("span"),u=document.createElement("span"),d=document.createElement("span"),s=document.createElement("span"),v=document.createElement("span");c.innerHTML="Pos",i.innerHTML="",m.innerHTML="Team",p.innerHTML="Points",u.innerHTML="W",d.innerHTML="D",s.innerHTML="L",v.innerHTML="GD",l.append(c),l.append(i),l.append(m),l.append(p),l.append(u),l.append(d),l.append(s),l.append(v),o.append(l);var f=document.createElement("H4");f.innerHTML="Current Season Table: ",E()("#table").append(f),e.standings[0].table.forEach((function(e){console.log(e);var n=document.createElement("DIV"),r=document.createElement("IMG"),l=document.createElement("span"),c=document.createElement("span"),i=document.createElement("span"),m=document.createElement("span"),p=document.createElement("span"),u=document.createElement("span"),d=document.createElement("span"),s=document.createElement("span");r.src=e.team.name+".png",r.className="badges",l.innerHTML=e.position,c.innerHTML=r.outerHTML,i.innerHTML=e.team.name,m.innerHTML=e.points,p.innerHTML=e.won,u.innerHTML=e.draw,d.innerHTML=e.lost,s.innerHTML=e.goalDifference,n.append(l),n.append(c),n.append(i),n.append(m),n.append(p),n.append(u),n.append(d),n.append(s),o.append(n),E()("#table").append(o),a(t)}))}else E()("#table").text("Only available for current season. :")}))},e.para=r.a.createRef(),e.league=r.a.createRef(),e.day=r.a.createRef(),e.year=r.a.createRef(),e.table=r.a.createRef(),e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"Nav"},r.a.createElement("div",{className:"float-container"},r.a.createElement("div",{className:"float-child-select"},r.a.createElement("div",{id:"League"},r.a.createElement("h4",null,"Select League: "),r.a.createElement("select",{ref:this.league,className:"selectpicker"},r.a.createElement("option",{value:"0"},"Premier League"),r.a.createElement("option",{value:"1"},"La Liga"),r.a.createElement("option",{value:"2"},"Bundesliga"),r.a.createElement("option",{value:"3"},"Serie A"),r.a.createElement("option",{value:"4"},"Ligue 1"))),r.a.createElement("br",null),r.a.createElement("div",{id:"date"},r.a.createElement("h4",null,"Matchday"),r.a.createElement("select",{name:"Matchday",ref:this.day},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"11"},"11"),r.a.createElement("option",{value:"12"},"12"),r.a.createElement("option",{value:"13"},"13"),r.a.createElement("option",{value:"14"},"14"),r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"16"},"16"),r.a.createElement("option",{value:"17"},"17"),r.a.createElement("option",{value:"18"},"18"),r.a.createElement("option",{value:"19"},"19"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"21"},"21"),r.a.createElement("option",{value:"22"},"22"),r.a.createElement("option",{value:"23"},"23"),r.a.createElement("option",{value:"24"},"24"),r.a.createElement("option",{value:"25"},"25"),r.a.createElement("option",{value:"26"},"26"),r.a.createElement("option",{value:"27"},"27"),r.a.createElement("option",{value:"28"},"28"),r.a.createElement("option",{value:"29"},"29"),r.a.createElement("option",{value:"30"},"30"),r.a.createElement("option",{value:"31"},"31"),r.a.createElement("option",{value:"32"},"32"),r.a.createElement("option",{value:"33"},"33"),r.a.createElement("option",{value:"34"},"34"),r.a.createElement("option",{value:"35"},"35"),r.a.createElement("option",{value:"36"},"36"),r.a.createElement("option",{value:"37"},"37"),r.a.createElement("option",{value:"38"},"38")),r.a.createElement("select",{name:"Year",ref:this.year},r.a.createElement("option",{value:"2019"},"2019"),r.a.createElement("option",{value:"2018"},"2018"))),r.a.createElement("br",null),r.a.createElement(d.a,{variant:"primary",id:"get",onClick:this.fetch},"Get")),r.a.createElement("div",{className:"float-child"},r.a.createElement("div",{id:"Centerbody"},r.a.createElement("p",{ref:this.table,id:"table"}))),r.a.createElement("div",{className:"float-child"},r.a.createElement("div",{id:"Centerbody"},r.a.createElement("p",{ref:this.para,id:"Para"})))))}}]),t}(n.Component);function f(){return r.a.createElement(v,null)}t(19);l.a.render(r.a.createElement("div",{id:"outer"},r.a.createElement(c,null),r.a.createElement("p",{id:"abhi"}," Made with \u2665 by Abhishek"),r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.12e27a73.chunk.js.map