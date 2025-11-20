import"./assets/header-DJd-5JJA.js";import{a as b,i as S}from"./assets/vendor-BtSQbXxa.js";b.defaults.baseURL="https://your-energy.b.goit.study/api/";async function C(e="Muscles",t="1",s="12"){return(await b.get("/filters",{params:{filter:e,page:t,limit:s}})).data}async function T(e,t,s,i=1,a=10){return(await b.get("/exercises",{params:{[e==="Body parts"?"bodypart":e.toLowerCase()]:t.toLowerCase().replace(" ","%20"),keyword:s,page:i,limit:a}})).data}function H(e,t){const s=e.map(({filter:i,imgURL:a,name:n})=>`
          <li class="categories-item" data-name="${n}">
            <img
            class="category-image"
            src="${a}"
            alt="${n}"
          />
          <div class="categories-item-info">
            <h3>${n}</h3>
            <p>${i}</p>
            </div>
          </li>
      `).join("");t.innerHTML=s}function $(e,t){const s=e.map(({_id:i,name:a,target:n,bodyPart:r,burnedCalories:u,rating:o})=>`
    <li class="exercises-item">
    <div class="header">
        <div class = "workout-rating">
        <span class="type">WORKOUT</span>
        <span class="rating">${o} </span>
        </div>
        <button class="start-btn" type="button"> Start </button>
    </div>
    <div class="title">
        <span class="icon">icon</span> ${a}
    </div>
    <div class="details">
        <ul class="exercise-details-list">
          <li class="calories">
            <span class="calories-name">Burned calories</span>
            <span class="calories-value">${u} / 3 min</span>
          </li>
          <li class="body-part">
            <span class="body-part-name">Body part:</span> 
            <span class="body-part-value">${r}</span>
          </li>
          <li class="target">
          <span class="target-name">Target:</span>
          <span class="target-value">${n}</span>
          </li>
        </ul>
    </div>
    </li>
      `).join("");t.innerHTML=s}function v(e,t,s){const a=Array.from({length:e},(n,r)=>r+1).map(n=>`
          <li class="pagination-control-item">
            <button class="${t===n?"pagination-control-active":"pagination-control"}">${n}</button>
          </li>
      `).join("");s.innerHTML=a}function x(e,t,s){const i=e.map(a=>`
          <li class="filters-list-item ${t===a?"filters-list-item-active":""}" data-option="${a}"><p>${a}</p></li>
      `).join("");s.innerHTML=i}const d=document.getElementById("footerSubscribeForm");if(d){let i=function(r){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(r)},a=function(r){S.success({title:"Success",message:r,position:"topRight",timeout:5e3})},n=function(r){S.error({title:"Error",message:r,position:"topRight",timeout:5e3})};const e=d.querySelector('input[name="email"]'),t=d.querySelector('button[type="submit"]');d.addEventListener("submit",s);async function s(r){r.preventDefault();const u=e.value.trim();if(!i(u)){n("Invalid email address");return}try{t.disabled=!0;const o=await b.post("https://your-energy.b.goit.study/api/subscription",{email:u},{headers:{"Content-Type":"application/json"}});o.status===201&&(a(o.data.message),d.reset())}catch(o){o.response?n(o.response.data.message||"Subscription failed"):n("Network error. Please try again.")}finally{t.disabled=!1}}}const k=["Muscles","Body parts","Equipment"],N=375,w=document.querySelector("ul.filters-list"),y=document.querySelector("ul.block-categories-list"),L=document.querySelector("ul.exercises-list"),l=document.querySelector("ul.pagination-controls-list"),h=document.querySelector("span.loader"),m=document.querySelector("form.search-form"),B=m.querySelector(".search-input"),f=document.querySelector("button.clear-btn"),M=document.documentElement.clientWidth<=N;let c=k[0],g="",p="",E=1,R=M?9:12,q=M?8:10;m.addEventListener("input",e=>{p=e.target.value,p.length?f.classList.remove("visually-hidden"):f.classList.add("visually-hidden")});m.addEventListener("submit",async e=>{e.preventDefault(),console.log(p);const t=await T(c,g,p,E,q),{results:s,page:i,totalPages:a}=t;l.innerHTML="",$(s,L),v(Number(a),Number(i),l)});f.addEventListener("click",()=>{p="",f.classList.add("visually-hidden"),B.value="",$(results,L),v(Number(totalPages),Number(page),l)});async function P(){y.innerHTML="",L.innerHTML="",l.innerHTML="",h.classList.remove("visually-hidden");try{const e=await C(c,E,R),{results:t,page:s,totalPages:i}=e;H(t,y),v(Number(i),Number(s),l),h.classList.add("visually-hidden")}catch(e){h.classList.add("visually-hidden"),S.error({icon:"",position:"topRight",message:e.message})}}w.addEventListener("click",I);function I(e){const t=e.target.closest(".filters-list-item");t&&(c=t.dataset.option,x(k,c,w),P(),m.classList.add("visually-hidden"))}y.addEventListener("click",j);async function j(e){const t=e.target.closest(".categories-item");if(t){g=t.dataset.name,console.log(c,g);const s=await T(c,g,"",E,q);console.log(s);const{results:i,page:a,totalPages:n}=s;y.innerHTML="",l.innerHTML="",$(i,L),v(Number(n),Number(a),l),m.classList.remove("visually-hidden")}}x(k,c,w);P();
//# sourceMappingURL=index.js.map
