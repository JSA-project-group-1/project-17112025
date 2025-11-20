import"./assets/styles-D3C74sH2.js";import{a as f,i as q}from"./assets/vendor-BtSQbXxa.js";f.defaults.baseURL="https://your-energy.b.goit.study/api/";async function E(e="Muscles",t="1",s="12"){return(await f.get("/filters",{params:{filter:e,page:t,limit:s}})).data}async function k(e,t,s,i=1,n=10){return(await f.get("/exercises",{params:{[e==="Body parts"?"bodypart":e.toLowerCase()]:t.toLowerCase().replace(" ","%20"),keyword:s,page:i,limit:n}})).data}function N(e,t){const s=e.map(({filter:i,imgURL:n,name:r})=>`
          <li class="categories-item" data-name="${r}">
            <img
            class="category-image"
            src="${n}"
            alt="${r}"
          />
          <div class="categories-item-info">
            <h3>${r}</h3>
            <p>${i}</p>
            </div>
          </li>
      `).join("");t.innerHTML=s}function h(e,t){const s=e.map(({_id:i,name:n,target:r,bodyPart:y,burnedCalories:C,rating:H})=>`
          <li class="exercises-item">
            <p>_id: ${i}</p>
            <p>name: ${n}</p>
            <p>target: ${r}</p>
            <p>bodyPart: ${y}</p>
            <p>burnedCalories: ${C}</p>
            <p>rating: ${H}</p>
          </li>
      `).join("");t.innerHTML=s}function m(e,t,s){const n=Array.from({length:e},(r,y)=>y+1).map(r=>`
          <li class="pagination-control-item">
            <button class="${t===r?"pagination-control-active":"pagination-control"}">${r}</button>
          </li>
      `).join("");s.innerHTML=n}function M(e,t,s){const i=e.map(n=>`
          <li class="filters-list-item ${t===n?"filters-list-item-active":""}" data-option="${n}"><p>${n}</p></li>
      `).join("");s.innerHTML=i}const v=["Muscles","Body parts","Equipment"],S=375,b=document.querySelector("ul.filters-list"),d=document.querySelector("ul.block-categories-list"),g=document.querySelector("ul.exercises-list"),a=document.querySelector("ul.pagination-controls-list"),L=document.querySelector("span.loader"),l=document.querySelector("form.search-form"),w=l.querySelector(".search-input"),p=document.querySelector("button.clear-btn"),P=document.documentElement.clientWidth<=S;let o=v[0],u="",c="",$=1,j=P?9:12,T=P?8:10;l.addEventListener("input",e=>{c=e.target.value,c.length?p.classList.remove("visually-hidden"):p.classList.add("visually-hidden")});l.addEventListener("submit",async e=>{e.preventDefault(),console.log(c);const t=await k(o,u,c,$,T),{results:s,page:i,totalPages:n}=t;a.innerHTML="",h(s,g),m(Number(n),Number(i),a)});p.addEventListener("click",()=>{c="",p.classList.add("visually-hidden"),w.value="",h(results,g),m(Number(totalPages),Number(page),a)});async function x(){d.innerHTML="",g.innerHTML="",a.innerHTML="",L.classList.remove("visually-hidden");try{const e=await E(o,$,j),{results:t,page:s,totalPages:i}=e;N(t,d),m(Number(i),Number(s),a),L.classList.add("visually-hidden")}catch(e){L.classList.add("visually-hidden"),q.error({icon:"",position:"topRight",message:e.message})}}b.addEventListener("click",B);function B(e){const t=e.target.closest(".filters-list-item");t&&(o=t.dataset.option,M(v,o,b),x(),l.classList.add("visually-hidden"))}d.addEventListener("click",D);async function D(e){const t=e.target.closest(".categories-item");if(t){u=t.dataset.name,console.log(o,u);const s=await k(o,u,"",$,T);console.log(s);const{results:i,page:n,totalPages:r}=s;d.innerHTML="",a.innerHTML="",h(i,g),m(Number(r),Number(n),a),l.classList.remove("visually-hidden")}}M(v,o,b);x();
//# sourceMappingURL=index.js.map
