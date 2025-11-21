import{f as q,a as I,r as _}from"./assets/modal-exercise-BjHNi18i.js";import{a as K,i as f}from"./assets/vendor-D2ogNlHo.js";function R(t,e){const s=t.map(({filter:a,imgURL:i,name:n})=>`
          <li class="categories-item" data-name="${n}">
            <img
            class="category-image"
            src="${i}"
            alt="${n}"
          />
          <div class="categories-item-info">
            <h3>${n}</h3>
            <p>${a}</p>
            </div>
          </li>
      `).join("");e.innerHTML=s}function S(t,e){const s=t.map(({_id:a,name:i,target:n,bodyPart:r,burnedCalories:l,rating:u})=>`
    <li class="exercises-item">
    <div class="header-card">
       <div class="header-left">
        <span class="type">WORKOUT</span>
        <span class="rating">${u}</span>
        <svg class="icon-star" width="18" height="18">
            <use href="../assets/icons/icons-not-min.svg#icon-star"></use>
        </svg>
       </div>
       <div class="header-right">
        <button class="start-btn" type="button" data-modal-exercise="open" data-exercise-id="${a}"> Start </button>
        <svg class="icon-arrow-right" width="18" height="18">
          <use href="../assets/icons/icons-not-min.svg#icon-arrow-1"></use>
        </svg>
        </div>
    </div>
    <div class="title">
     <svg class="icon" width="24" height="24">
            <use href="../assets/icons/icons-not-min.svg#icon-run-man-2"></use>
      </svg>
      <span class="name-text">${i}</span>
    </div>
    <div class="details">
        <ul class="exercise-details-list">
          <li class="calories">
            <span class="calories-name">Burned calories</span>
            <span class="calories-value">${l} / 3 min</span>
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
      `).join("");e.innerHTML=s}function y(t,e,s){const a=Number(e),i=Number(t),n=Array.from({length:i},(x,Z)=>Z+1),r=a===1,l=a===i,u=`
      <li class="pagination-control-item">
          <button class=" ${r?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="beg"
                  ${r?"disabled":""}>
                  <svg class="left-vector" width="6" height="12">
                    <use href="/project-17112025/assets/icons/icons.svg#icon-vector"></use>
                  </svg>
                  <svg class="left-vector" width="6" height="24">
                    <use href="/project-17112025/assets/icons/icons.svg#icon-vector"></use>
                  </svg>
          </button>
      </li>
      <li class="pagination-control-item">
          <button class=" ${r?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="prev"
                  ${r?"disabled":""}>
                  <svg class="left-vector" width="6" height="12">
                    <use href="/project-17112025/assets/icons/icons.svg#icon-vector"></use>
                  </svg>
           </button>
      </li>
  `,Q=n.map(x=>`
          <li class="pagination-control-item">
            <button class="${a===x?"pagination-control-active":"pagination-control"}" data-page="${x}">${x}</button>
          </li>
      `).join(""),V=`
      <li class="pagination-control-item">
          <button class="pagination-arrow-btn ${l?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="next"
                  ${l?"disabled":""}>
                  <svg class="right-vector" width="6" height="12">
                    <use href="/project-17112025/assets/icons/icons.svg#icon-vector"></use>
                  </svg>
           </button>
      </li>
      <li class="pagination-control-item">
          <button class="pagination-arrow-btn ${l?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="end"
                  ${l?"disabled":""}>
                  <svg class="right-vector" width="6" height="12">
                    <use href="/project-17112025/assets/icons/icons.svg#icon-vector"></use>
                  </svg>
                  <svg class="right-vector" width="6" height="12">
                    <use href="/project-17112025/assets/icons/icons.svg#icon-vector"></use>
                  </svg>
          </button>
      </li>
  `,W=u+Q+V;s.innerHTML=W}function F(t,e,s){const a=t.map(i=>`
          <li class="filters-list-item ${e===i?"filters-list-item-active":""}" data-option="${i}"><p>${i}</p></li>
      `).join("");s.innerHTML=a}const b=document.getElementById("footerSubscribeForm");if(b){let a=function(r){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(r)},i=function(r){f.success({title:"Success",message:r,position:"topRight",timeout:5e3})},n=function(r){f.error({title:"Error",message:r,position:"topRight",timeout:5e3})};const t=b.querySelector('input[name="email"]'),e=b.querySelector('button[type="submit"]');b.addEventListener("submit",s);async function s(r){r.preventDefault();const l=t.value.trim();if(!a(l)){n("Invalid email address");return}try{e.disabled=!0;const u=await K.post("https://your-energy.b.goit.study/api/subscription",{email:l},{headers:{"Content-Type":"application/json"}});u.status===201&&(i(u.data.message),b.reset())}catch(u){u.response?n(u.response.data.message||"Subscription failed"):n("Network error. Please try again.")}finally{e.disabled=!1}}}function M(t){if(!t)return;let e=t.querySelector(".local-loader-wrapper");e||(e=document.createElement("div"),e.classList.add("local-loader-wrapper"),e.innerHTML=`
      <div class="hypnotic"></div>
    `,t.style.position="relative",t.appendChild(e)),e.classList.remove("hidden")}function T(t){if(!t)return;const e=t.querySelector(".local-loader-wrapper");e&&e.classList.add("hidden")}const B=["Muscles","Body parts","Equipment"],U=375,O=document.documentElement.clientWidth<=U,D=document.querySelector("span.slash"),A=document.querySelector("p.current-category"),Y=document.querySelector("p.warning"),C=document.querySelector("ul.filters-list"),L=document.querySelector("ul.block-categories-list"),k=document.querySelector("ul.exercises-list"),d=document.querySelector("ul.pagination-controls-list"),$=document.querySelector("form.search-form"),z=$.querySelector(".search-input"),E=document.querySelector("button.clear-btn"),m=document.getElementById("categories-section");let v=B[0],g="",h="",c=1,w=1,N=O?9:12,o=1,p=1,H=O?8:10;$.addEventListener("input",t=>{h=t.target.value,h.length?E.classList.remove("visually-hidden"):E.classList.add("visually-hidden")});$.addEventListener("submit",async t=>{t.preventDefault(),M(m);try{const e=await q(v,g,h,o,H),{results:s,page:a,totalPages:i}=e;p=i,o=a,d.innerHTML="",S(s,k),y(p,o,d)}catch(e){f.error({icon:"",position:"topRight",message:e.message})}finally{T(m)}});E.addEventListener("click",async()=>{h="",z.value="",E.classList.add("visually-hidden"),S(results,k),y(p,o,d),j()});async function j(){L.innerHTML="",k.innerHTML="",d.innerHTML="",M(m);try{const t=await I(v,c,N),{results:e,page:s,totalPages:a}=t;w=a,c=s,R(e,L),y(w,c,d)}catch(t){Y.classList.remove("visually-hidden"),f.error({icon:"",position:"topRight",message:t.message})}finally{T(m)}}C.addEventListener("click",G);function G(t){const e=t.target.closest(".filters-list-item");e&&(v=e.dataset.option,j(),F(B,v,C),$.classList.add("visually-hidden"),h="",g="",z.value="",D.classList.add("visually-hidden"),A.textContent=g)}async function J(t){const e=t.target.closest(".categories-item");if(e){M(m),g=e.dataset.name;try{const s=await q(v,g,h,o,H),{results:a,page:i,totalPages:n}=s;p=n,o=i,L.innerHTML="",d.innerHTML="",S(a,k),y(p,o,d),$.classList.remove("visually-hidden"),D.classList.remove("visually-hidden"),A.textContent=g}catch(s){f.error({icon:"",position:"topRight",message:s.message})}finally{T(m)}}}async function X(t){const e=t.target.closest("button[data-page]");if(e){M(m);try{if(g){switch(e.dataset.page){case"beg":o=1;break;case"prev":o--;break;case"next":o++;break;case"end":o=p;break;default:o=parseInt(e.dataset.page,10)}const s=await q(v,g,h,o,H),{results:a,page:i,totalPages:n}=s;p=n,o=i,S(a,k),y(p,o,d)}else{switch(e.dataset.page){case"beg":c=1;break;case"prev":c--;break;case"next":c++;break;case"end":c=w;break;default:c=parseInt(e.dataset.page,10)}const s=await I(v,c,N),{results:a,page:i,totalPages:n}=s;w=n,c=i,R(a,L),y(w,c,d)}}catch(s){f.error({icon:"",position:"topRight",message:s.message})}finally{T(m)}}}F(B,v,C);j();L.addEventListener("click",J);d.addEventListener("click",X);document.addEventListener("DOMContentLoaded",_);const P=document.getElementById("scroll-top");console.log(P);const ee=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},te=()=>{window.scrollY>window.innerHeight?P.classList.add("scroll-show"):P.classList.remove("scroll-show")};window.addEventListener("scroll",te);P.addEventListener("click",ee);
//# sourceMappingURL=index.js.map
