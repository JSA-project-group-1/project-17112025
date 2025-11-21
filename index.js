import{f as C,a as F,r as _}from"./assets/modal-exercise-BFiB8YKN.js";import{a as K,i as y}from"./assets/vendor-D2ogNlHo.js";const f="/project-17112025/assets/icons-not-min-CqnbliU1.svg";function O(t,e){const s=t.map(({filter:a,imgURL:i,name:n})=>`
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
      `).join("");e.innerHTML=s}function M(t,e){const s=t.map(({_id:a,name:i,target:n,bodyPart:r,burnedCalories:l,rating:u})=>`
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
      `).join("");e.innerHTML=s}function b(t,e,s){const a=Number(e),i=Number(t),n=Array.from({length:i},(E,Z)=>Z+1),r=a===1,l=a===i,u=`
      <li class="pagination-control-item">
          <button class=" ${r?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="beg"
                  ${r?"disabled":""}>
                  <svg class="left-vector" width="6" height="12">
                    <use href="${f}#icon-vector"></use>
                  </svg>
                  <svg class="left-vector" width="6" height="24">
                    <use href="${f}#icon-vector"></use>
                  </svg>
          </button>
      </li>
      <li class="pagination-control-item">
          <button class=" ${r?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="prev"
                  ${r?"disabled":""}>
                  <svg class="left-vector" width="6" height="12">
                    <use href="${f}#icon-vector"></use>
                  </svg>
           </button>
      </li>
  `,Q=n.map(E=>`
          <li class="pagination-control-item">
            <button class="${a===E?"pagination-control-active":"pagination-control"}" data-page="${E}">${E}</button>
          </li>
      `).join(""),V=`
      <li class="pagination-control-item">
          <button class="pagination-arrow-btn ${l?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="next"
                  ${l?"disabled":""}>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${f}#icon-vector"></use>
                  </svg>
           </button>
      </li>
      <li class="pagination-control-item">
          <button class="pagination-arrow-btn ${l?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="end"
                  ${l?"disabled":""}>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${f}#icon-vector"></use>
                  </svg>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${f}#icon-vector"></use>
                  </svg>
          </button>
      </li>
  `,W=u+Q+V;s.innerHTML=W}function j(t,e,s){const a=t.map(i=>`
          <li class="filters-list-item ${e===i?"filters-list-item-active":""}" data-option="${i}"><p>${i}</p></li>
      `).join("");s.innerHTML=a}const w=document.getElementById("footerSubscribeForm");if(w){let a=function(r){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(r)},i=function(r){y.success({title:"Success",message:r,position:"topRight",timeout:5e3})},n=function(r){y.error({title:"Error",message:r,position:"topRight",timeout:5e3})};const t=w.querySelector('input[name="email"]'),e=w.querySelector('button[type="submit"]');w.addEventListener("submit",s);async function s(r){r.preventDefault();const l=t.value.trim();if(!a(l)){n("Invalid email address");return}try{e.disabled=!0;const u=await K.post("https://your-energy.b.goit.study/api/subscription",{email:l},{headers:{"Content-Type":"application/json"}});u.status===201&&(i(u.data.message),w.reset())}catch(u){u.response?n(u.response.data.message||"Subscription failed"):n("Network error. Please try again.")}finally{e.disabled=!1}}}function T(t){if(!t)return;let e=t.querySelector(".local-loader-wrapper");e||(e=document.createElement("div"),e.classList.add("local-loader-wrapper"),e.innerHTML=`
      <div class="hypnotic"></div>
    `,t.style.position="relative",t.appendChild(e)),e.classList.remove("hidden")}function q(t){if(!t)return;const e=t.querySelector(".local-loader-wrapper");e&&e.classList.add("hidden")}const B=["Muscles","Body parts","Equipment"],Y=375,D=document.documentElement.clientWidth<=Y,A=document.querySelector("span.slash"),N=document.querySelector("p.current-category"),G=document.querySelector("p.warning"),H=document.querySelector("ul.filters-list"),k=document.querySelector("ul.block-categories-list"),$=document.querySelector("ul.exercises-list"),d=document.querySelector("ul.pagination-controls-list"),x=document.querySelector("form.search-form"),z=x.querySelector(".search-input"),S=document.querySelector("button.clear-btn"),m=document.getElementById("categories-section"),J=document.querySelector("a.nav-link");J.classList.add("nav-link--active");let v=B[0],g="",h="",c=1,L=1,U=D?9:12,o=1,p=1,I=D?8:10;x.addEventListener("input",t=>{h=t.target.value,h.length?S.classList.remove("visually-hidden"):S.classList.add("visually-hidden")});x.addEventListener("submit",async t=>{t.preventDefault(),T(m);try{const e=await C(v,g,h,o,I),{results:s,page:a,totalPages:i}=e;p=i,o=a,d.innerHTML="",M(s,$),b(p,o,d)}catch(e){y.error({icon:"",position:"topRight",message:e.message})}finally{q(m)}});S.addEventListener("click",async()=>{h="",z.value="",S.classList.add("visually-hidden"),M(results,$),b(p,o,d),R()});async function R(){k.innerHTML="",$.innerHTML="",d.innerHTML="",T(m);try{const t=await F(v,c,U),{results:e,page:s,totalPages:a}=t;L=a,c=s,O(e,k),b(L,c,d)}catch(t){G.classList.remove("visually-hidden"),y.error({icon:"",position:"topRight",message:t.message})}finally{q(m)}}H.addEventListener("click",X);function X(t){const e=t.target.closest(".filters-list-item");e&&(v=e.dataset.option,R(),j(B,v,H),x.classList.add("visually-hidden"),h="",g="",z.value="",A.classList.add("visually-hidden"),N.textContent=g)}async function ee(t){const e=t.target.closest(".categories-item");if(e){T(m),g=e.dataset.name;try{const s=await C(v,g,h,o,I),{results:a,page:i,totalPages:n}=s;p=n,o=i,k.innerHTML="",d.innerHTML="",M(a,$),a.length>0&&(b(p,o,d),x.classList.remove("visually-hidden")),N.textContent=g,A.classList.remove("visually-hidden")}catch(s){y.error({icon:"",position:"topRight",message:s.message})}finally{q(m)}}}async function te(t){const e=t.target.closest("button[data-page]");if(e){T(m);try{if(g){switch(e.dataset.page){case"beg":o=1;break;case"prev":o--;break;case"next":o++;break;case"end":o=p;break;default:o=parseInt(e.dataset.page,10)}const s=await C(v,g,h,o,I),{results:a,page:i,totalPages:n}=s;p=n,o=i,M(a,$),b(p,o,d)}else{switch(e.dataset.page){case"beg":c=1;break;case"prev":c--;break;case"next":c++;break;case"end":c=L;break;default:c=parseInt(e.dataset.page,10)}const s=await F(v,c,U),{results:a,page:i,totalPages:n}=s;L=n,c=i,O(a,k),b(L,c,d)}}catch(s){y.error({icon:"",position:"topRight",message:s.message})}finally{q(m)}}}j(B,v,H);R();k.addEventListener("click",ee);d.addEventListener("click",te);document.addEventListener("DOMContentLoaded",_);const P=document.getElementById("scroll-top");console.log(P);const se=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},ae=()=>{window.scrollY>window.innerHeight?P.classList.add("scroll-show"):P.classList.remove("scroll-show")};window.addEventListener("scroll",ae);P.addEventListener("click",se);
//# sourceMappingURL=index.js.map
