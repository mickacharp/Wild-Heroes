(this["webpackJsonpwild-heroes"]=this["webpackJsonpwild-heroes"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},37:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(30),i=n.n(c),s=n(9),o=n(3),l=n(2),d=n.p+"static/media/Logo.b43d2c16.png",j=(n(37),n(0)),u=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("div",{className:"header-content",children:[Object(j.jsx)("a",{exact:!0,href:"/wild-heroes/",className:"logo-content",children:Object(j.jsx)("img",{src:d,className:"logo",alt:"Logo"})}),Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h1",{children:"WILD HEROES"})}),Object(j.jsxs)("div",{className:"header-content-link",children:[Object(j.jsx)(s.b,{activeClassName:"text-nav-active",className:"text-nav",exact:!0,to:"/quiz",children:Object(j.jsx)("h3",{children:" Quiz"})}),Object(j.jsx)(s.b,{activeClassName:"text-nav-active",className:"text-nav",exact:!0,to:"/informations",children:Object(j.jsx)("h3",{children:" Informations"})})]})]})})},h=n(10),m=n.n(h),b=n(12),O=n(13),p=n.n(O),f=(n(66),function(e){var t=e.question,n=e.answers,r=e.handleNextQuestion,c=Object(a.useState)(!1),i=Object(l.a)(c,2),s=i[0],o=i[1];return Object(j.jsxs)("div",{className:"quiz",children:[Object(j.jsx)("div",{className:"quiz_question",children:t}),Object(j.jsx)("ul",{className:"quiz_answers",children:n.map((function(e){return Object(j.jsx)("li",{role:"presentation",className:"quiz_answer",onClick:function(){o(!0),setTimeout((function(){r()}),3e3)},style:(t=e.correct,s?t?{backgroundColor:"#1E7112"}:{backgroundColor:"rgba(0, 0, 0, 0.7)"}:{backgroundColor:"rgba(16, 25, 113, 1)"}),children:e.text},e.text);var t}))})]})});var g=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(l.a)(c,2),s=i[0],o=i[1],d=Object(a.useState)(!0),u=Object(l.a)(d,2),h=u[0],O=u[1];Object(a.useEffect)((function(){var e=function(e){for(var t=e,n=e.length-1;n>0;n-=1){var a=Math.floor(Math.random()*(n+1)),r=t[n];t[n]=t[a],t[a]=r}},t=function(){var t=Object(b.a)(m.a.mark((function t(){var n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://opentdb.com/api.php?amount=1&category=29");case 2:n=t.sent,a=[],O(!1),a.push(n.data.results.map((function(t){var n=[],a=new DOMParser,r={question:a.parseFromString(t.question,"text/html").documentElement.textContent};n=[{text:a.parseFromString(t.correct_answer,"text/html").documentElement.textContent,correct:!0}];for(var c=0;c<t.incorrect_answers.length;c+=1)n.push({text:a.parseFromString(t.incorrect_answers[c],"text/html").documentElement.textContent});return e(n),r.answers=n,r}))),r(a[0]);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[s]);var g=function(){o(!s)};return Object(j.jsx)("div",{className:"quiz-game-containe",children:h?Object(j.jsx)("img",{src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/da734b28921021.55d95297d71f4.gif",alt:"loader",className:"loader-cardsList"}):Object(j.jsx)("div",{className:"App",children:n.map((function(e){return Object(j.jsx)(f,{question:e.question,answers:e.answers,handleNextQuestion:g},e.question)}))})})},x=(n(19),function(e){var t=e.hero,n=e.setChooseCard,r=[],c=[];[].push(t[Math.floor(732*Math.random())]),t.map((function(e){return r.push(e.image.url)})),t.map((function(e){return c.push(e.name)}));var i=Object(a.useState)(0),s=Object(l.a)(i,2),o=s[0],d=s[1];return Object(a.useEffect)((function(){var e=setInterval((function(){d(Math.floor(732*Math.random()))}),150);return function(){clearInterval(e)}}),[o]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"card-random",role:"button",onClick:function(){return n(!1)},onKeyPress:function(){return n(!1)},tabIndex:0,children:[Object(j.jsx)("h2",{children:"Choose your challenger"}),Object(j.jsx)("img",{src:r[o],alt:c[o]})]})})}),v=n.p+"static/media/interrogation.1ab396b5.png",N=(n(67),function(e){for(var t=e.hideModal,n=e.image,a=e.name,r=e.alignment,c=e.stats,i=e.publisher,s=e.gender,o=e.race,l=e.weight,d=e.height,u=e.fullName,h=e.placeOfBirth,m=e.firstAppearance,b=e.groupAffiliation,O=Object.keys(c),p=Object.values(c),f=[],g=0;g<O.length;g+=1)f.push(O[g].toUpperCase()),f.push(p[g]);var x=function(e){return"good"===e?"good-hero":"bad"===e?"bad-hero":"neutral-hero"};return Object(j.jsxs)("div",{className:"modal-container",children:[Object(j.jsx)("div",{className:"modal-background",onClick:function(){return t()},onKeyPress:function(){return t()},role:"button",tabIndex:0,children:" "}),Object(j.jsxs)("div",{className:"modal-content ".concat(x(r)),children:[Object(j.jsx)("button",{type:"button",className:"close-modal-button",onClick:function(){return t()},children:"\xd7"}),Object(j.jsx)("div",{className:"modal-header ".concat(x(r)),children:Object(j.jsx)("h1",{children:a})}),Object(j.jsxs)("div",{className:"modal-body",children:[Object(j.jsx)("div",{className:"modal-card",children:Object(j.jsx)("img",{src:n,onError:function(e){e.target.onerror=null,e.target.src=v},alt:a,className:"modal-img"})}),Object(j.jsxs)("div",{className:"modal-stats",children:[Object(j.jsx)("h1",{children:"Statistics"}),Object(j.jsx)("ul",{className:"stats-list",children:f.map((function(e,t){return Object(j.jsx)("li",{children:e.includes("null")?e.replace("null","Unknown"):e},[t])}))})]}),Object(j.jsxs)("div",{className:"modal-bio",children:[Object(j.jsx)("h1",{children:"Information"}),Object(j.jsxs)("ul",{className:"bio-list",children:[""!==u?Object(j.jsxs)("li",{children:[Object(j.jsxs)("strong",{children:["Full name",Object(j.jsx)("br",{})]})," ",u," "]}):"","-"!==s?Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("strong",{children:["Gender",Object(j.jsx)("br",{})]})," ",s," "]}):"","null"!==o?Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("strong",{children:["Race",Object(j.jsx)("br",{})]})," ",o," "]}):"","0 kg"!==l&&"0 cm"!==d?Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("strong",{children:["Weight and height",Object(j.jsx)("br",{})]})," ",l,", ",d," "]}):"","-"!==h?Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("strong",{children:["Place of birth",Object(j.jsx)("br",{})]})," ",h," "]}):"","null"!==i&&""!==i?Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("strong",{children:["Original publisher",Object(j.jsx)("br",{})]})," ",i," "]}):"","-"!==m?Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("strong",{children:["First appearance",Object(j.jsx)("br",{})]})," ",m," "]}):"","-"!==b?Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("strong",{children:["Affiliation",Object(j.jsx)("br",{})]})," ",b," "]}):""]})]})]})]})]})}),C=function(e){var t=e.hero,n=Object(a.useState)([]),r=Object(l.a)(n,1)[0];r.push(t[Math.floor(732*Math.random())]);var c=Object(a.useState)(""),i=Object(l.a)(c,2),s=i[0],o=i[1],d=function(){return o(!s)};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"card-quiz",onClick:function(){return d()},onKeyPress:function(){return d()},role:"button",tabIndex:0,children:[Object(j.jsx)("img",{src:r[0].image.url,alt:r[0].name,onError:function(e){e.target.onerror=null,e.target.src=v}}),Object(j.jsx)("h2",{children:r[0].name})]}),Object(j.jsx)("div",{children:s&&Object(j.jsx)(N,{name:r[0].name,image:r[0].image.url,toggleModal:s,setToggleModal:o,hideModal:d,alignment:r[0].biography.alignment,stats:r[0].powerstats,publisher:r[0].biography.publisher,gender:r[0].appearance.gender,race:r[0].appearance.race,weight:r[0].appearance.weight[1],height:r[0].appearance.height[1],fullName:r[0].biography["full-name"],placeOfBirth:r[0].biography["place-of-birth"],firstAppearance:r[0].biography["first-appearance"],groupAffiliation:r[0].connections["group-affiliation"]})})]})},y=function(e){var t=e.setChooseCard,n=e.chooseCard,r=Object(a.useState)([]),c=Object(l.a)(r,2),i=c[0],s=c[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.a.get("https://superheroapi.com/api.php/10216027606921557/search/'%20'").then((function(e){return e.data.results})).then((function(e){s(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsx)("div",{className:"card-list",children:n?Object(j.jsx)(x,{hero:i,setChooseCard:t}):Object(j.jsx)(C,{hero:i})})},w=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsx)(y,{setChooseCard:r,chooseCard:n}),Object(j.jsx)(g,{})]})},S=(n(68),function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"img",children:[Object(j.jsxs)(s.b,{className:"img-text-left",exact:!0,to:"/quiz",children:[Object(j.jsx)("div",{className:"img-left"}),Object(j.jsx)("div",{className:"text-left",children:Object(j.jsx)("h2",{className:"title-home",children:"Quiz"})})]}),Object(j.jsxs)(s.b,{className:"img-text-right",exact:!0,to:"/informations",children:[Object(j.jsx)("div",{className:"img-right"}),Object(j.jsx)("div",{className:"text-right",children:Object(j.jsx)("h2",{className:"title-home",children:"Informations"})})]})]})})}),k=(n(20),function(e){var t,n=e.name,r=e.image,c=e.alignment,i=e.stats,s=e.publisher,o=e.gender,d=e.race,u=e.weight,h=e.height,m=e.fullName,b=e.placeOfBirth,O=e.firstAppearance,p=e.groupAffiliation,f=Object(a.useState)(!1),g=Object(l.a)(f,2),x=g[0],C=g[1],y=function(){C(!x)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"card ".concat((t=c,"good"===t?"good-card":"bad"===t?"bad-card":"normal-card")),onClick:function(){return y()},onKeyPress:function(){return y()},role:"button",tabIndex:0,children:[Object(j.jsx)("img",{src:r,onError:function(e){e.target.onerror=null,e.target.src=v},alt:n}),Object(j.jsx)("h2",{children:n})]}),Object(j.jsx)("div",{children:x&&Object(j.jsx)(N,{name:n,image:r,toggleModal:x,setToggleModal:C,hideModal:y,alignment:c,stats:i,publisher:s,gender:o,race:d,weight:u,height:h,fullName:m,placeOfBirth:b,firstAppearance:O,groupAffiliation:p})})]})}),A=function(e){var t=e.setFilter,n=e.filter,a=e.response;return Object(j.jsx)("div",{className:"boxes",children:Object(j.jsxs)("select",{className:"comics-filter",onChange:function(e){return t(e.target.value)},children:[Object(j.jsxs)("option",{value:"",children:[" ",n," "]}),a.map((function(e){return Object(j.jsx)("option",{value:e.name,children:e.name},e.id)}))]})})},M=(n(69),function(e){var t=e.hero,n=e.isLoading,a=e.searchName,r=e.setByPublisher,c=e.setGender,i=e.setRace,s=e.setAlignment,o=e.byPublisher,l=e.gender,d=e.race,u=e.alignment,h=e.allRaces,m=e.allPublishers,b=e.allGenders,O=e.allAlignments;return Object(j.jsx)("div",{className:"cards-list",children:n?Object(j.jsx)("img",{src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/da734b28921021.55d95297d71f4.gif",alt:"loader",className:"loader-cardsList"}):Object(j.jsxs)("div",{className:"container-cards-button",children:[Object(j.jsxs)("div",{className:"container-filter",children:[Object(j.jsx)(A,{setFilter:c,filter:"Gender",response:b}),Object(j.jsx)(A,{setFilter:s,filter:"Alignment",response:O}),Object(j.jsx)(A,{setFilter:r,filter:"Publisher",response:m}),Object(j.jsx)(A,{setFilter:i,filter:"Race",response:h})]}),Object(j.jsx)("div",{className:"container-cards",children:t.filter((function(e){return e.biography.publisher.includes(o)})).filter((function(e){return e.appearance.gender.includes(l)})).filter((function(e){return e.appearance.race.includes(d)})).filter((function(e){return e.biography.alignment.includes(u)})).filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})).map((function(e){return Object(j.jsx)(k,{name:e.name,image:e.image.url,alignment:e.biography.alignment,stats:e.powerstats,publisher:e.biography.publisher,gender:e.appearance.gender,race:e.appearance.race,weight:e.appearance.weight[1],height:e.appearance.height[1],fullName:e.biography["full-name"],placeOfBirth:e.biography["place-of-birth"],firstAppearance:e.biography["first-appearance"],groupAffiliation:e.connections["group-affiliation"]},e.id)}))})]})})}),P=(n(70),function(e){for(var t=e.cardsPerPage,n=e.totalCards,a=e.paginate,r=e.currentPage,c=[],i=1;i<=Math.ceil(n/t);i+=1)c.push(i);return Object(j.jsxs)("nav",{className:"nav-page",children:[Object(j.jsxs)("p",{children:[" ",t<31&&"Page: ".concat(r)]}),Object(j.jsx)("ul",{className:"pagination",children:c.map((function(e){return t<31&&Object(j.jsx)(s.b,{value:e,to:"/informations",className:"page-link",onClick:function(){a(e)},children:e},e)}))})]})}),E=(n(71),function(e){var t=e.handleChange,n=e.searchName;return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"search",children:Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",placeholder:"Enter your research",value:n,onChange:t,required:!0})})})})}),q=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!0),i=Object(l.a)(c,2),s=i[0],o=i[1],d=Object(a.useState)(1),h=Object(l.a)(d,2),O=h[0],f=h[1],g=Object(a.useState)(30),x=Object(l.a)(g,2),v=x[0],N=x[1],C=Object(a.useState)(""),y=Object(l.a)(C,2),w=y[0],S=y[1],k=Object(a.useState)(""),A=Object(l.a)(k,2),q=A[0],I=A[1],F=Object(a.useState)(""),z=Object(l.a)(F,2),B=z[0],G=z[1],L=Object(a.useState)(""),R=Object(l.a)(L,2),_=R[0],D=R[1],H=O*v,K=H-v,T=n.slice(K,H),Q=Object(a.useState)(""),U=Object(l.a)(Q,2),W=U[0],J=U[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.a.get("https://superheroapi.com/api.php/10216027606921557/search/'%20'").then((function(e){return e.data.results})).then((function(e){r(e),o(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(a.useEffect)((function(){return""===W&&""===w&&""===q&&""===_&&""===B||(f(1),N(n.length)),function(){N(30)}}),[W,w,q,_,B]),Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsx)("div",{children:Object(j.jsx)(E,{searchName:W,setSearchName:J,handleChange:function(e){J(e.target.value)}})}),Object(j.jsx)(M,{isLoading:s,searchName:W,hero:T,byPublisher:w,setByPublisher:S,gender:q,setGender:I,alignment:B,setAlignment:G,race:_,setRace:D,allRaces:[{id:0,name:"Alien"},{id:1,name:"Alpha"},{id:2,name:"Amazon"},{id:3,name:"Android"},{id:4,name:"Atlantean"},{id:5,name:"Bizarro"},{id:6,name:"Black Racer"},{id:7,name:"Cosmic Entity"},{id:8,name:"Cyborg"},{id:9,name:"Dathomirian Zabrak"},{id:10,name:"Demon"},{id:11,name:"God"},{id:12,name:"Human"},{id:13,name:"Icthyo Sapien"},{id:14,name:"Inhuman"},{id:15,name:"Kakarantharaian"},{id:16,name:"Kryptonian"},{id:17,name:"Metahuman"},{id:18,name:"Mutant"},{id:19,name:"Neyaphen"},{id:20,name:"Symbiote"},{id:21,name:"Ungaran"},{id:22,name:"Vampire"},{id:23,name:"Xenomorph"}],allPublishers:[{id:24,name:"Marvel Comics"},{id:25,name:"DC Comics"},{id:26,name:"Image Comics"},{id:27,name:"Dark Horse"},{id:28,name:"NBC - Heroes"},{id:29,name:"Sharon Carter"},{id:30,name:"Wildstorm"},{id:31,name:"Archangel"},{id:32,name:"Tempest"},{id:33,name:"Image Comics"},{id:34,name:"Giant-Man"},{id:35,name:"Toxin"},{id:36,name:"Angel"},{id:37,name:"Speedy"},{id:38,name:"Goliath"},{id:39,name:"Spectre"},{id:40,name:"Oracle"},{id:41,name:"Hawkfire"},{id:42,name:"Huntress"},{id:43,name:"Misfit"},{id:44,name:"Spoiler"},{id:45,name:"Nightwing"},{id:46,name:"Icon Comics"}],allGenders:[{id:47,name:"Male"},{id:48,name:"Female"}],allAlignments:[{id:49,name:"good"},{id:50,name:"bad"},{id:51,name:"neutral"}]}),Object(j.jsx)("div",{className:"container-pagination",children:Object(j.jsx)(P,{currentPage:O,cardsPerPage:v,totalCards:n.length,paginate:function(e){f(e),document.documentElement.scrollTop=0}})})]})};n(72);var I=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:S}),Object(j.jsx)(o.a,{path:"/quiz",component:w}),Object(j.jsx)(o.a,{path:"/informations",component:q})]})})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(I,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.21b8a7b7.chunk.js.map