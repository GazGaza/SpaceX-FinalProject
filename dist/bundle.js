(()=>{let e="Amazon.com";const t=document.getElementsByTagName("button"),n=document.getElementById("boxes");class a{constructor(e,t,n,a){this.id=e,this.name=t,this.email=n,this.boxes=a}addToScreenData(){const e=document.getElementById("companyName"),t=document.getElementById("companyEmail"),n=document.getElementById("boxes"),a=document.getElementById("result");e.innerText=this.name,t.innerText=this.email,n.value=this.boxes,a.innerText=this.calculateRequiredCargo()}calculateRequiredCargo(){let e=this.boxes.split(",");console.log(e);let t=0;for(let n=0;n<e.length;n++)t+=Number(e[n]);return Math.ceil(t/10)}}["Amazon.com","American Express","Walmart","Apple"].forEach((n=>{document.getElementById(n).addEventListener("click",(n=>{e=n.target.id;let o=document.getElementById(e);for(let e=0;e<t.length;e++)t[e].className="notActive";o.className="active",fetch("https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json").then((e=>e.json(e))).then((t=>{const n=t.find((t=>t.name===e));new a(n.id,n.name,n.email,n.boxes).addToScreenData()})).catch((e=>console.log(e)))}))})),n.addEventListener("keypress",(e=>{if("Enter"===e.key){let e=n.value.split(","),t=0;for(let n=0;n<e.length;n++)t+=Number(e[n]);document.getElementById("result").innerText=Math.ceil(t/10)}})),window.onload=function(n){e=n.id;let o=document.getElementById(e);for(let e=0;e<t.length;e++)t[e].className="notActive";o.className="active",fetch("https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json").then((e=>e.json(e))).then((t=>{const n=t.find((t=>t.name===e));new a(n.id,n.name,n.email,n.boxes).addToScreenData()})).catch((e=>console.log(e)))}(document.getElementById("Amazon.com"))})();