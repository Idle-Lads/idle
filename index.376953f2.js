function e(e,t){document.querySelector(e).innerHTML=t}function t(e,o){var n=e.interval;n<300&&(console.warn("Attempted to use interval lower than minimum interval, setting interval to minimum"),n=300),!0!==e.exit?setTimeout((()=>{console.log(n),o(),t(e,o)}),n):console.log("Ticks stopped")}function o(o){document.querySelector(".startCounter").addEventListener("click",(function(){o.exit=!1,t(o,(function(){o.money+=1,e(".money",o.money)})),document.querySelector(".startCounter").disabled=!0,document.querySelector(".stopCounter").disabled=!1}))}const n={money:0,interval:1e3,exit:!1,upgradeCost:1};function r(){var t;o(n),t=n,document.querySelector(".stopCounter").addEventListener("click",(function(){t.exit=!0,document.querySelector(".startCounter").disabled=!1,document.querySelector(".stopCounter").disabled=!0})),function(t){document.querySelector(".buyUpgrade").addEventListener("click",(function(){t.upgradeCost>t.money&&e(".warningText","Not enough money!"),e(".warningText",""),t.money-=t.upgradeCost,t.interval-=50,t.upgradeCost*=2,e(".upgradeCost",t.upgradeCost),e(".money",t.money)}))}(n)}console.log("Application started"),r(),e(".money",n.money),e(".upgradeCost",n.upgradeCost),document.querySelector(".startCounter").disabled=!1,document.querySelector(".stopCounter").disabled=!0;
//# sourceMappingURL=index.376953f2.js.map
