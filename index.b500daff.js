const e={wholeStoreSubs:[],loaded:{value:!1}};function t(){const t=JSON.stringify(function(){const t={};for(let o in e)e[o].value&&(t[o]=e[o].value);return t}());window.localStorage.setItem("idlestore",t)}function o(t,o,n=[]){if(e[t])return void console.error("Store already has entry by key",t);const r=JSON.parse(window.localStorage.getItem("idlestore"));r&&r[t]&&(o=r[t]),e[t]={value:o,subs:[...n]}}function n(t){return e[t]?e[t].value:(console.error("No entry in store by key",t),null)}function r(t,o){e[t]?(e[t].value=o,function(t){if(!e[t])return void console.error("No entry in store by key",t);const o=e[t].subs;if(0!=o.length)for(let e in o)o[e]()}(t),function(){const t=e.wholeStoreSubs;if(0==t.length)return;for(let e in t)t[e]()}()):console.error("No entry in store by key",t)}function i(e,t){return"function"==typeof t?t.toString():t}function u(t=""){return JSON.stringify(e,i,t)}function l(t){e.wholeStoreSubs.push(...t)}function c(e,t){document.querySelector(e).innerHTML=t}function a(e,t){let o=n(t);null!==o?c(e,o):console.error("Failed to retrieve value from store using key",t)}function s(e){var t=n("interval"),o=n("exit");t<300&&(console.warn("Attempted to use interval lower than minimum interval, setting interval to minimum"),t=300),!0!==o?setTimeout((()=>{e(),s(e)}),t):console.log("Ticks stopped")}function d(){document.querySelector(".startCounter").addEventListener("click",(function(){r("exit",!1),s((function(){r("money",n("money")+1)})),document.querySelector(".startCounter").disabled=!0,document.querySelector(".stopCounter").disabled=!1}))}function m(){if(null===new URLSearchParams(window.location.search).get("devmode"))return;const e=document.createElement("pre");var t;e.classList.add("devTools"),document.querySelector(".game").append(e),l([()=>c(".devTools",u("\t"))]),null!==(t=new URLSearchParams(window.location.search)).get("wipe")&&(window.localStorage.removeItem("idlestore"),t.delete("wipe"),window.location.href=window.location.origin+window.location.pathname+"?"+t.toString()),window.getStoreString=u}function y(){d(),document.querySelector(".stopCounter").addEventListener("click",(function(){r("exit",!0),document.querySelector(".startCounter").disabled=!1,document.querySelector(".stopCounter").disabled=!0})),document.querySelector(".buyUpgrade").addEventListener("click",(function(){var e=n("upgradeCost"),t=n("money"),o=n("interval");e>t?c(".warningText","Not enough money!"):(c(".warningText",""),r("money",t-e),r("interval",o-50),r("upgradeCost",2*e))}))}console.log("Application started"),y(),n("loaded")||(o("money",0,[()=>a(".money","money")]),o("upgradeCost",1,[()=>a(".upgradeCost","upgradeCost")]),o("interval",1e3),o("exit",!1)),a(".money","money"),a(".upgradeCost","upgradeCost"),document.querySelector(".startCounter").disabled=!1,document.querySelector(".stopCounter").disabled=!0,m(),l([t]);
//# sourceMappingURL=index.b500daff.js.map
