(()=>{const e=document.getElementById("navbar");function t(e){let t=e,n=0;for(;t&&"body"!==t.tagName.toLowerCase();)n+=t.offsetTop,t=t.offsetParent;return n}function n(){return window.pageYOffset?window.pageYOffset:Math.max(document.documentElement.scrollTop,document.body.scrollTop)}function o(e){const t=e.getBoundingClientRect(),n=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(t.bottom<0||t.top-n>=0)}const l=t(e),i=document.getElementById("cadd-d-type"),a=document.getElementById("cadd-cursor");let r=!1;const s="VaultMC is a new Minecraft community aiming to offer simplicity to our players. We offer Survival, Creative and Factions. Looking for developers. Please email jacob@vaultmc.net if you're interested.";let d,c=0;const m="javac HelloWorld.java   ",u=document.getElementById("console-typewriter"),f=document.getElementById("console-cursor"),y=document.getElementById("compiler-output");let g,p=!1,v=0;const h=document.getElementById("card-fix"),w=document.getElementById("card-fix-top"),L=document.getElementById("card-fix-exit");function I(){n()>=l?(e.style.position="sticky",e.style.top="0"):(e.style.position=null,e.style.top=null),o(i)?0===c&&(d=setInterval((()=>{c>=s.length?clearInterval(d):(i.innerHTML+=s[c],c%20==0&&(r=!r),a.style.borderLeft=r?"1px solid black":"1px solid transparent",c++)}),100)):(i.innerHTML="",a.style.borderLeft="1px solid transparent",r=!1,clearInterval(d),c=0),o(u)?0===v&&(g=setInterval((()=>{if(v>=m.length)return y.classList.remove("hidden"),void clearInterval(g);u.innerHTML+=m[v],v%20==0&&(p=!p),f.style.borderLeft=p?"1px solid white":"1px solid transparent",v++}),100)):(u.innerHTML="",f.style.borderLeft="1px solid transparent",p=!1,y.classList.add("hidden"),clearInterval(g),v=0),function(){for(let e of document.querySelectorAll(".animate-on-show"))o(e)?e.classList.add("animate"):e.classList.remove("animate")}(),function(){const e=document.querySelectorAll(".scrollspy");for(let t=e.length-1;t>=0;t--){let n=e[t];if(o(n)){for(let e of document.querySelectorAll(".nav-active"))e.classList.remove("nav-active"),e.classList.add("nav-item");document.querySelector(n.dataset.target).classList.remove("nav-item"),document.querySelector(n.dataset.target).classList.add("nav-active")}}}(),function(){let e=t(w),o=t(L);window.innerWidth<1024?(h.classList.add("scale-fade-animation"),o+=L.clientHeight/4,e-=w.clientHeight/10):(h.classList.remove("scale-fade-animation"),e-=window.innerHeight/4),n()>=e?n()>=o?window.innerWidth<1024?h.classList.remove("animate"):(h.style.marginTop=o-e+"px",h.style.position=null):(h.style.marginTop=null,h.style.position="fixed",window.innerWidth<1024&&h.classList.add("animate")):window.innerWidth<1024?h.classList.remove("animate"):(h.style.marginTop=null,h.style.position=null)}(),function(){for(let e of document.querySelectorAll(".show-on-target-centered")){const o=document.querySelector(e.dataset.target);if(n()>=t(o)-o.clientHeight/4){for(let e of document.querySelectorAll(".show-on-target-centered"))e.classList.add("hidden");e.classList.remove("hidden")}}}()}function x(){navigator.clipboard.writeText("Dreta#6665")}window.onscroll=I,I(),document.getElementById("email").href="mailto:hello@dreta.dev",document.getElementById("discord").onclick=x,document.getElementById("discord").ontouchend=x})();