import{o as W,f as B,a as j,r as Z}from"./assets/modal-exercise-D2iFHv94.js";import{a as K,i as f}from"./assets/vendor-D2ogNlHo.js";const g="/project-17112025/assets/icons-not-min-CqnbliU1.svg";function F(s,t){const n=s.map(({filter:e,imgURL:a,name:i})=>`
          <li class="categories-item" data-name="${i}">
            <img
            class="category-image"
            src="${a}"
            alt="${i}"
          />
          <div class="categories-item-info">
            <h3>${i}</h3>
            <p>${e}</p>
            </div>
          </li>
      `).join("");t.innerHTML=n}function P(s,t){const n=s.map(({_id:a,name:i,target:o,bodyPart:h,burnedCalories:d,rating:T})=>`
    <li class="exercises-item">
    <div class="header-card">
       <div class="header-left">
        <span class="type">WORKOUT</span>
        <span class="rating">${T}</span>
        <svg class="icon-star" width="18" height="18">
            <use href="${g}#icon-star"></use>
        </svg>
       </div>
       <div class="header-right">
        <button class="start-btn" type="button" data-modal-exercise="open" data-exercise-id="${a}"> Start </button>
        <svg class="icon-arrow-right" width="18" height="18">
          <use href="${g}#icon-arrow-1"></use>
        </svg>
        </div>
    </div>
    <div class="title">
      <button type="button" class="exercise-rating-btn js-give-rating-btn" data-exercise-id="${a}">
        <svg class="icon" width="24" height="24">
          <use href="${g}#icon-run-man-2"></use>
        </svg>
      </button
      <span class="name-text">${i}</span>
    </div>
    <div class="details">
        <ul class="exercise-details-list">
          <li class="calories">
            <span class="calories-name">Burned calories</span>
            <span class="calories-value">${d} / 3 min</span>
          </li>
          <li class="body-part">
            <span class="body-part-name">Body part:</span>
            <span class="body-part-value">${h}</span>
          </li>
          <li class="target">
          <span class="target-name">Target:</span>
          <span class="target-value">${o}</span>
          </li>
        </ul>
    </div>
    </li>
      `).join("");t.innerHTML=n,t.querySelectorAll(".js-give-rating-btn").forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.exerciseId;W(i,null)})})}function y(s,t,n){const e=Number(t),a=Number(s);Array.from({length:a},(at,V)=>V+1);const i=e===1,o=e===a,h=`
      <li class="pagination-control-item">
          <button class=" ${i?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="beg"
                  ${i?"disabled":""}>
                  <svg class="left-vector" width="6" height="12">
                    <use href="${g}#icon-vector"></use>
                  </svg>
                  <svg class="left-vector" width="6" height="24">
                    <use href="${g}#icon-vector"></use>
                  </svg>
          </button>
      </li>
      <li class="pagination-control-item">
          <button class=" ${i?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="prev"
                  ${i?"disabled":""}>
                  <svg class="left-vector" width="6" height="12">
                    <use href="${g}#icon-vector"></use>
                  </svg>
           </button>
      </li>
  `,d=`
  ${i?`
    <li class="pagination-control-item">
      <button class="pagination-control-active" data-page="1">1</button>
    </li>
    ${a>1?`
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="2">2</button>
      </li>
      `:""}
    ${a>2?`
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="3">3</button>
      </li>
      `:""}
    ${a>3?`
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `:""}
  `:""}

  ${!i&&o?`
    ${a>3?`
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `:""}
    ${a>2?`
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="${e-2}">${e-2}</button>
      </li>
    `:""}
    ${a>1?`
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="${e-1}">${e-1}</button>
      </li>
    `:""}
    <li class="pagination-control-item">
      <button class="pagination-control-active" data-page="${e}">${e}</button>
    </li>
  `:""}

  ${!i&&!o?`
    ${e>2?`
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `:""}

    <li class="pagination-control-item">
        <button class="pagination-control" data-page="${e-1}">${e-1}</button>
    </li>

    <li class="pagination-control-item">
      <button class="pagination-control-active" data-page="${e}">${e}</button>
    </li>

    <li class="pagination-control-item">
        <button class="pagination-control" data-page="${e+1}">${e+1}</button>
    </li>

    ${a-e>2?`
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `:""}
  `:""}
  `,T=`
      <li class="pagination-control-item">
          <button class="pagination-arrow-btn ${o?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="next"
                  ${o?"disabled":""}>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${g}#icon-vector"></use>
                  </svg>
           </button>
      </li>
      <li class="pagination-control-item">
          <button class="pagination-arrow-btn ${o?"pagination-arrow-btn":"pagination-arrow-btn-active"}"
                  data-page="end"
                  ${o?"disabled":""}>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${g}#icon-vector"></use>
                  </svg>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${g}#icon-vector"></use>
                  </svg>
          </button>
      </li>
  `,Q=h+d+T;n.innerHTML=Q}function O(s,t,n){const e=s.map(a=>`
          <li class="filters-list-item ${t===a?"filters-list-item-active":""}" data-option="${a}"><p>${a}</p></li>
      `).join("");n.innerHTML=e}const $=document.getElementById("footerSubscribeForm");if($){let e=function(o){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(o)},a=function(o){f.success({title:"Success",message:o,position:"topRight",timeout:5e3})},i=function(o){f.error({title:"Error",message:o,position:"topRight",timeout:5e3})};const s=$.querySelector('input[name="email"]'),t=$.querySelector('button[type="submit"]');$.addEventListener("submit",n);async function n(o){o.preventDefault();const h=s.value.trim();if(!e(h)){i("Invalid email address");return}try{t.disabled=!0;const d=await K.post("https://your-energy.b.goit.study/api/subscription",{email:h},{headers:{"Content-Type":"application/json"}});d.status===201&&(a(d.data.message),$.reset())}catch(d){d.response?i(d.response.data.message||"Subscription failed"):i("Network error. Please try again.")}finally{t.disabled=!1}}}function M(s){if(!s)return;let t=s.querySelector(".local-loader-wrapper");t||(t=document.createElement("div"),t.classList.add("local-loader-wrapper"),t.innerHTML=`
      <div class="hypnotic"></div>
    `,s.style.position="relative",s.appendChild(t)),t.classList.remove("hidden")}function q(s){if(!s)return;const t=s.querySelector(".local-loader-wrapper");t&&t.classList.add("hidden")}const C=["Muscles","Body parts","Equipment"],Y=375,A=document.documentElement.clientWidth<=Y,D=document.querySelector("span.slash"),N=document.querySelector("p.current-category"),_=document.querySelector("p.warning"),H=document.querySelector("ul.filters-list"),L=document.querySelector("ul.block-categories-list"),k=document.querySelector("ul.exercises-list"),l=document.querySelector("ul.pagination-controls-list"),x=document.querySelector("form.search-form"),z=x.querySelector(".search-input"),E=document.querySelector("button.clear-btn"),m=document.getElementById("categories-section"),G=document.querySelector("a.nav-link");G.classList.add("nav-link--active");let v=C[0],u="",b="",c=1,w=1,U=A?9:12,r=1,p=1,I=A?8:10;x.addEventListener("input",s=>{b=s.target.value,b.length?E.classList.remove("visually-hidden"):E.classList.add("visually-hidden")});x.addEventListener("submit",async s=>{s.preventDefault(),M(m);try{const t=await B(v,u,b,r,I),{results:n,page:e,totalPages:a}=t;p=a,r=e,l.innerHTML="",P(n,k),y(p,r,l)}catch(t){f.error({icon:"",position:"topRight",message:t.message})}finally{q(m)}});E.addEventListener("click",async()=>{b="",z.value="",E.classList.add("visually-hidden"),P(results,k),y(p,r,l),R()});async function R(){L.innerHTML="",k.innerHTML="",l.innerHTML="",M(m);try{const s=await j(v,c,U),{results:t,page:n,totalPages:e}=s;w=e,c=n,F(t,L),y(w,c,l)}catch(s){_.classList.remove("visually-hidden"),f.error({icon:"",position:"topRight",message:s.message})}finally{q(m)}}H.addEventListener("click",J);function J(s){const t=s.target.closest(".filters-list-item");t&&(v=t.dataset.option,R(),O(C,v,H),x.classList.add("visually-hidden"),b="",u="",z.value="",D.classList.add("visually-hidden"),N.textContent=u)}async function X(s){const t=s.target.closest(".categories-item");if(t){M(m),u=t.dataset.name;try{const n=await B(v,u,b,r,I),{results:e,page:a,totalPages:i}=n;p=i,r=a,L.innerHTML="",l.innerHTML="",P(e,k),e.length>0&&(y(p,r,l),x.classList.remove("visually-hidden")),N.textContent=u,D.classList.remove("visually-hidden")}catch(n){f.error({icon:"",position:"topRight",message:n.message})}finally{q(m)}}}async function tt(s){const t=s.target.closest("button[data-page]");if(t){M(m),console.log(t.dataset.page);try{if(u){switch(t.dataset.page){case"beg":r=1;break;case"prev":r--;break;case"next":r++;break;case"end":r=p;break;default:r=parseInt(t.dataset.page,10)}const n=await B(v,u,b,r,I),{results:e,page:a,totalPages:i}=n;p=i,r=a,P(e,k),y(p,r,l)}else{switch(t.dataset.page){case"beg":c=1;break;case"prev":c--;break;case"next":c++;break;case"end":c=w;break;default:c=parseInt(t.dataset.page,10)}const n=await j(v,c,U),{results:e,page:a,totalPages:i}=n;w=i,c=a,F(e,L),y(w,c,l)}}catch(n){f.error({icon:"",position:"topRight",message:n.message})}finally{q(m)}}}O(C,v,H);R();L.addEventListener("click",X);l.addEventListener("click",tt);document.addEventListener("DOMContentLoaded",Z);const S=document.getElementById("scroll-top");console.log(S);const et=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},st=()=>{window.scrollY>window.innerHeight?S.classList.add("scroll-show"):S.classList.remove("scroll-show")};window.addEventListener("scroll",st);S.addEventListener("click",et);
//# sourceMappingURL=index.js.map
