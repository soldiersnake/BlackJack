(()=>{"use strict";let e=[];const t=["C","D","H","S"],a=["A","J","Q","K"];let n=[];const r=document.querySelector("#btnNuevo"),l=document.querySelector("#btnPedir"),o=document.querySelector("#btnDetener"),s=document.querySelectorAll(".divCartas"),d=document.querySelectorAll("small"),c=()=>{e=[];for(let a=2;a<=10;a++)for(let n of t)e.push(a+n);for(let n of t)for(let t of a)e.push(t+n);return _.shuffle(e)},i=()=>{if(0===e.length)throw"No hay mas cartas en la Baraka / Deck";return e.pop()},u=(e,t)=>(n[t]=n[t]+(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t})(e),d[t].innerText=n[t],n[t]),f=(e,t)=>{const a=document.createElement("img");a.src=`assets/cartas/${e}.png`,a.classList.add("carta"),s[t].append(a)},h=e=>{let t=0;do{const e=i();t=u(e,n.length-1),f(e,n.length-1)}while(t<e&&e<=21);(()=>{const[e,t]=n;setTimeout(()=>{t===e?alert("Nadie Gana"):e>21?alert("computadora gana"):t>21?alert("Jugador gana"):alert("computadora Gana")},30)})()};l.addEventListener("click",()=>{const e=i(),t=u(e,0);f(e,0),t>21?(console.warn("Lo siento, perdiste!"),l.disabled=!0,o.disabled=!0,h(t)):21===t&&(console.warn("21, Genial!"),l.disabled=!0,o.disabled=!0,h(t))}),o.addEventListener("click",()=>{l.disabled=!0,o.disabled=!0,h(n[0])}),r.addEventListener("click",()=>{((t=2)=>{e=c(),n=[];for(let e=0;e<t;e++)n.push(0);d.forEach(e=>e.innerText=0),s.forEach(e=>e.innerHTML=""),l.disabled=!1,o.disabled=!1})()})})();