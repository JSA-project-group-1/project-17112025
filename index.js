import"./assets/styles-D3C74sH2.js";import{a as p,i as b}from"./assets/vendor-BtSQbXxa.js";p.defaults.baseURL="https://your-energy.b.goit.study/api/";async function k(e="Muscles",t="1",s="12"){return(await p.get("/filters",{params:{filter:e,page:t,limit:s}})).data}async function h(e,t,s,i,n=1,r=10){return(await p.get("/exercises",{params:{bodypart:e,muscles:t,equipment:s,keyword:i,page:n,limit:r}})).data}function M(e,t){const s=e.map(({filter:i,imgURL:n,name:r})=>`
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
      `).join("");t.innerHTML=s}function v(e,t){const s=e.map(({_id:i,name:n,target:r,bodyPart:a,burnedCalories:L,rating:$})=>`
          <li class="exercises-item">
            <p>_id: ${i}</p>
            <p>name: ${n}</p>
            <p>target: ${r}</p>
            <p>bodyPart: ${a}</p>
            <p>burnedCalories: ${L}</p>
            <p>rating: ${$}</p>
          </li>
      `).join("");t.innerHTML=s}function g(e,t,s){const n=Array.from({length:e},(r,a)=>a+1).map(r=>`
          <li class="pagination-control-item">
            <button class="${t===r?"pagination-control-active":"pagination-control"}">${r}</button>
          </li>
      `).join("");s.innerHTML=n}function f(e,t,s){const i=e.map(n=>`
          <li class="filters-list-item ${t===n?"filters-list-item-active":""}" data-option="${n}"><p>${n}</p></li>
      `).join("");s.innerHTML=i}const d=["Muscles","Body parts","Equipment"],T=375,m=document.querySelector("ul.filters-list"),o=document.querySelector("ul.block-categories-list"),x=document.querySelector("ul.exercises-list"),c=document.querySelector("ul.pagination-controls-list"),u=document.querySelector("span.loader"),C=document.documentElement.clientWidth<=T;let l=d[0];async function y(){o.innerHTML="",c.innerHTML="",u.classList.remove("visually-hidden");try{const e=await k(l,"1",`${C?9:12}`),{results:t,page:s,totalPages:i}=e;M(t,o),g(Number(i),Number(s),c),u.classList.add("visually-hidden")}catch(e){u.classList.add("visually-hidden"),b.error({icon:"",position:"topRight",message:e.message})}}m.addEventListener("click",H);function H(e){const t=e.target.closest(".filters-list-item");t&&(l=t.dataset.option,f(d,l,m),y())}o.addEventListener("click",q);async function q(e){const t=e.target.closest(".categories-item");if(t){t.dataset.name;const s=await h("back","lats","barbell","pull");console.log(s);const{results:i,page:n,totalPages:r}=s;o.innerHTML="",c.innerHTML="",v(i,x),g(Number(r),Number(n),c)}}f(d,l,m);y();
//# sourceMappingURL=index.js.map
