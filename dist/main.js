(()=>{"use strict";let e=document.getElementById("content"),t=["header","title","otherContent","footer"],n=["about","menu","contact"];console.log("test"),console.log("pageLoad runs look"),(()=>{for(let n=0;n<t.length;n++){let o=document.createElement("div");o.className=t[n],o.id=t[n],e.appendChild(o)}console.log(e);let n=document.getElementById("header"),o=document.getElementById("title"),l=document.getElementById("otherContent"),d=document.getElementById("footer");n.innerHTML="header",o.innerHTML="Aso's Okonomiyaki",l.innerHTML="Other stuff here",d.innerHTML="Technologies used: HTML CSS Javascript Webkit"})(),(()=>{for(let e=0;e<n.length;e++){let t=document.createElement("li");t.className=n[e],t.id=n[e],t.innerHTML=n[e],header.appendChild(t)}})();let o=document.getElementById("about"),l=document.getElementById("menu"),d=document.getElementById("contact");o.addEventListener("click",(()=>{console.log("About Page running"),(()=>{let e=["aboutTitle","aboutText"],t=document.getElementById("otherContent");t.innerHTML="";for(let n=0;n<e.length;n++){let o=document.createElement("div");o.className=e[n],o.id=e[n],t.appendChild(o)}console.log(t),(()=>{let e=document.getElementById("aboutTitle"),t=document.getElementById("aboutText");e.innerHTML="About Aso's Okonomiyaki",t.innerHTML="Establisehd in 1998, Aso has been serving the people of Onomichi proudbly for over 20 years!"})()})()})),l.addEventListener("click",(()=>{console.log("Menu Page Running"),document.getElementById("otherContent").innerHTML="Menu"})),d.addEventListener("click",(()=>{console.log("Contact page running"),document.getElementById("otherContent").innerHTML="Contact"}))})();