import"./assets/header-DJd-5JJA.js";import{a as k,i as p}from"./assets/vendor-BtSQbXxa.js";k.defaults.baseURL="https://your-energy.b.goit.study/api/";async function T(t="Muscles",e="1",s="12"){return(await k.get("/filters",{params:{filter:t,page:e,limit:s}})).data}async function w(t,e,s,n=1,a=10){return(await k.get("/exercises",{params:{[t==="Body parts"?"bodypart":t.toLowerCase()]:e.toLowerCase().replace(" ","%20"),keyword:s,page:n,limit:a}})).data}function M(t,e){const s=t.map(({filter:n,imgURL:a,name:i})=>`
          <li class="categories-item" data-name="${i}">
            <img
            class="category-image"
            src="${a}"
            alt="${i}"
          />
          <div class="categories-item-info">
            <h3>${i}</h3>
            <p>${n}</p>
            </div>
          </li>
      `).join("");e.innerHTML=s}function $(t,e){const s=t.map(({_id:n,name:a,target:i,bodyPart:r,burnedCalories:g,rating:l})=>`
    <li class="exercises-item">
    <div class="header">
        <div class = "workout-rating">
        <span class="type">WORKOUT</span>
        <span class="rating">${l} </span>
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
            <span class="calories-value">${g} / 3 min</span>
          </li>
          <li class="body-part">
            <span class="body-part-name">Body part:</span>
            <span class="body-part-value">${r}</span>
          </li>
          <li class="target">
          <span class="target-name">Target:</span>
          <span class="target-value">${i}</span>
          </li>
        </ul>
    </div>
    </li>
      `).join("");e.innerHTML=s}function m(t,e,s){const a=Array.from({length:t},(i,r)=>r+1).map(i=>`
          <li class="pagination-control-item">
            <button class="${e===i?"pagination-control-active":"pagination-control"}" data-page="${i}">${i}</button>
          </li>
      `).join("");s.innerHTML=a}function N(t,e,s){const n=t.map(a=>`
          <li class="filters-list-item ${e===a?"filters-list-item-active":""}" data-option="${a}"><p>${a}</p></li>
      `).join("");s.innerHTML=n}const y=document.getElementById("footerSubscribeForm");if(y){let n=function(r){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(r)},a=function(r){p.success({title:"Success",message:r,position:"topRight",timeout:5e3})},i=function(r){p.error({title:"Error",message:r,position:"topRight",timeout:5e3})};const t=y.querySelector('input[name="email"]'),e=y.querySelector('button[type="submit"]');y.addEventListener("submit",s);async function s(r){r.preventDefault();const g=t.value.trim();if(!n(g)){i("Invalid email address");return}try{e.disabled=!0;const l=await k.post("https://your-energy.b.goit.study/api/subscription",{email:g},{headers:{"Content-Type":"application/json"}});l.status===201&&(a(l.data.message),y.reset())}catch(l){l.response?i(l.response.data.message||"Subscription failed"):i("Network error. Please try again.")}finally{e.disabled=!1}}}const S=["Muscles","Body parts","Equipment"],B=375,E=document.querySelector("ul.filters-list"),f=document.querySelector("ul.block-categories-list"),v=document.querySelector("ul.exercises-list"),o=document.querySelector("ul.pagination-controls-list"),d=document.querySelector("span.loader"),h=document.querySelector("form.search-form"),q=h.querySelector(".search-input"),L=document.querySelector("button.clear-btn"),C=document.documentElement.clientWidth<=B;let c=S[0],b="",u="",P=1,R=C?9:12,x=C?8:10;h.addEventListener("input",t=>{u=t.target.value,u.length?L.classList.remove("visually-hidden"):L.classList.add("visually-hidden")});h.addEventListener("submit",async t=>{t.preventDefault();try{const e=await w(c,b,u,P,x),{results:s,page:n,totalPages:a}=e;o.innerHTML="",$(s,v),m(Number(a),Number(n),o)}catch(e){d.classList.add("visually-hidden"),p.error({icon:"",position:"topRight",message:e.message})}});L.addEventListener("click",()=>{u="",q.value="",L.classList.add("visually-hidden"),$(results,v),m(Number(totalPages),Number(page),o)});async function H(){f.innerHTML="",v.innerHTML="",o.innerHTML="",d.classList.remove("visually-hidden");try{const t=await T(c,P,R),{results:e,page:s,totalPages:n}=t;M(e,f),m(Number(n),Number(s),o),d.classList.add("visually-hidden")}catch(t){d.classList.add("visually-hidden"),p.error({icon:"",position:"topRight",message:t.message})}}E.addEventListener("click",I);function I(t){const e=t.target.closest(".filters-list-item");e&&(c=e.dataset.option,H(),N(S,c,E),h.classList.add("visually-hidden"),u="",q.value="")}f.addEventListener("click",j);async function j(t){const e=t.target.closest(".categories-item");if(e){b=e.dataset.name;try{const s=await w(c,b,u,P,x),{results:n,page:a,totalPages:i}=s;f.innerHTML="",o.innerHTML="",$(n,v),m(Number(i),Number(a),o),h.classList.remove("visually-hidden")}catch(s){d.classList.add("visually-hidden"),p.error({icon:"",position:"topRight",message:s.message})}}}o.addEventListener("click",O);async function O(t){const e=t.target.closest("button[data-page]");if(e)try{const s=parseInt(e.dataset.page,10);if(b){const n=await w(c,b,u,s,x),{results:a,page:i,totalPages:r}=n;$(a,v),m(Number(r),Number(i),o)}else{const n=await T(c,s,R),{results:a,page:i,totalPages:r}=n;M(a,f),m(Number(r),Number(i),o)}}catch(s){d.classList.add("visually-hidden"),p.error({icon:"",position:"topRight",message:s.message})}}N(S,c,E);H();
//# sourceMappingURL=index.js.map
