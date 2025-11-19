import"./assets/styles-KxHolIdJ.js";import{a as l,i as u}from"./assets/vendor-BtSQbXxa.js";l.defaults.baseURL="https://your-energy.b.goit.study/api/";async function d(t="Muscles",s="1",e="12"){return console.log(e),(await l.get("/filters",{params:{filter:t,page:s,limit:e}})).data}function m(t,s){const e=t.map(({filter:o,imgURL:i,name:n})=>`
          <li class="muscles-item">
            <img
            class="gallery-image"
            src="${i}"
            alt="${n}"
          />
          <div class="muscles-item-info">
            <h3>${n}</h3>
            <p>${o}</p>
            </div>
          </li>
      `).join("");s.innerHTML=e}function p(t,s,e){const i=Array.from({length:t},(n,c)=>c+1).map(n=>`
          <li class="pagination-control-item">
            <button class="${s===n?"pagination-control-active":"pagination-control"}">${n}</button>
          </li>
      `).join("");e.innerHTML=i}function g(t,s,e){const o=t.map(i=>`
          <li class=${s===i?"filters-list-item-active":"filters-list-item"}><p>${i}</p></li>
      `).join("");e.innerHTML=o}const r=["Muscles","Body parts","Equipment"],f=375,y=document.querySelector("ul.filters-list"),L=document.querySelector("ul.block-categories-list"),h=document.querySelector("ul.pagination-controls-list"),a=document.querySelector("span.loader"),$=document.documentElement.clientWidth<=f;g(r,r[0],y);async function v(){a.classList.remove("visually-hidden");try{const t=await d("Muscles","1",`${$?9:12}`),{results:s}=t;console.log(t),m(s,L),p(2,1,h),a.classList.add("visually-hidden")}catch(t){a.classList.add("visually-hidden"),u.error({icon:"",position:"topRight",message:t.message})}}v();
//# sourceMappingURL=index.js.map
