import"./assets/styles-D3C74sH2.js";import{a as L,i as C}from"./assets/vendor-BtSQbXxa.js";L.defaults.baseURL="https://your-energy.b.goit.study/api/";async function E(e="Muscles",s="1",t="12"){return(await L.get("/filters",{params:{filter:e,page:s,limit:t}})).data}async function k(e,s,t,i=1,a=10){return(await L.get("/exercises",{params:{[e==="Body parts"?"bodypart":e.toLowerCase()]:s.toLowerCase().replace(" ","%20"),keyword:t,page:i,limit:a}})).data}function S(e,s){const t=e.map(({filter:i,imgURL:a,name:n})=>`
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
      `).join("");s.innerHTML=t}function f(e,s){const t=e.map(({_id:i,name:a,target:n,bodyPart:y,burnedCalories:P,rating:q})=>`
    <li class="exercises-item">
    <div class="header">
        <div class = "workout-rating">
        <span class="type">WORKOUT</span>
        <span class="rating">${q} </span>
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
            <span class="calories-value">${P} / 3 min</span>
          </li>
          <li class="body-part">
            <span class="body-part-name">Body part:</span> 
            <span class="body-part-value">${y}</span>
          </li>
          <li class="target">
          <span class="target-name">Target:</span>
          <span class="target-value">${n}</span>
          </li>
        </ul>
    </div>
    </li>
      `).join("");s.innerHTML=t}function m(e,s,t){const a=Array.from({length:e},(n,y)=>y+1).map(n=>`
          <li class="pagination-control-item">
            <button class="${s===n?"pagination-control-active":"pagination-control"}">${n}</button>
          </li>
      `).join("");t.innerHTML=a}function M(e,s,t){const i=e.map(a=>`
          <li class="filters-list-item ${s===a?"filters-list-item-active":""}" data-option="${a}"><p>${a}</p></li>
      `).join("");t.innerHTML=i}const b=["Muscles","Body parts","Equipment"],w=375,h=document.querySelector("ul.filters-list"),d=document.querySelector("ul.block-categories-list"),g=document.querySelector("ul.exercises-list"),r=document.querySelector("ul.pagination-controls-list"),v=document.querySelector("span.loader"),c=document.querySelector("form.search-form"),N=c.querySelector(".search-input"),p=document.querySelector("button.clear-btn"),T=document.documentElement.clientWidth<=w;let o=b[0],u="",l="",$=1,B=T?9:12,x=T?8:10;c.addEventListener("input",e=>{l=e.target.value,l.length?p.classList.remove("visually-hidden"):p.classList.add("visually-hidden")});c.addEventListener("submit",async e=>{e.preventDefault(),console.log(l);const s=await k(o,u,l,$,x),{results:t,page:i,totalPages:a}=s;r.innerHTML="",f(t,g),m(Number(a),Number(i),r)});p.addEventListener("click",()=>{l="",p.classList.add("visually-hidden"),N.value="",f(results,g),m(Number(totalPages),Number(page),r)});async function H(){d.innerHTML="",g.innerHTML="",r.innerHTML="",v.classList.remove("visually-hidden");try{const e=await E(o,$,B),{results:s,page:t,totalPages:i}=e;S(s,d),m(Number(i),Number(t),r),v.classList.add("visually-hidden")}catch(e){v.classList.add("visually-hidden"),C.error({icon:"",position:"topRight",message:e.message})}}h.addEventListener("click",O);function O(e){const s=e.target.closest(".filters-list-item");s&&(o=s.dataset.option,M(b,o,h),H(),c.classList.add("visually-hidden"))}d.addEventListener("click",j);async function j(e){const s=e.target.closest(".categories-item");if(s){u=s.dataset.name,console.log(o,u);const t=await k(o,u,"",$,x);console.log(t);const{results:i,page:a,totalPages:n}=t;d.innerHTML="",r.innerHTML="",f(i,g),m(Number(n),Number(a),r),c.classList.remove("visually-hidden")}}M(b,o,h);H();
//# sourceMappingURL=index.js.map
