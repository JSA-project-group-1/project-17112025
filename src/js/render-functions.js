export function renderCategories(categories, list) {
  const markup = categories
    .map(({ filter, imgURL, name }) => {
      return `
          <li class="categories-item" data-name="${name}">
            <img
            class="category-image"
            src="${imgURL}"
            alt="${name}"
          />
          <div class="categories-item-info">
            <h3>${name}</h3>
            <p>${filter}</p>
            </div>
          </li>
      `;
    })
    .join('');
  list.innerHTML = markup;
}

export function renderExercises(exercises, list) {
  const markup = exercises
    .map(({ _id, name, target, bodyPart, burnedCalories, rating }) => {
      return `
    <li class="exercises-item">
    <div class="header-card">
       <div class="header-left"> 
        <span class="type">WORKOUT</span>
        <span class="rating">${rating}</span>
        <svg class="icon-star" width="18" height="18">
            <use href="../assets/icons/icons-not-min.svg#icon-star"></use>
        </svg>
       </div>
       <div class="header-right">
        <button class="start-btn" type="button" data-modal-exercise="open" data-exercise-id="${_id}"> Start </button>
        <svg class="icon-arrow-right" width="18" height="18">
          <use href="../assets/icons/icons-not-min.svg#icon-arrow-1"></use>
        </svg>
        </div>
    </div>
    <div class="title">
     <svg class="icon" width="24" height="24">
            <use href="../assets/icons/icons-not-min.svg#icon-run-man-2"></use>
      </svg>
      <span class="name-text">${name}</span>
    </div>
    <div class="details">
        <ul class="exercise-details-list">
          <li class="calories">
            <span class="calories-name">Burned calories</span>
            <span class="calories-value">${burnedCalories} / 3 min</span>
          </li>
          <li class="body-part">
            <span class="body-part-name">Body part:</span>
            <span class="body-part-value">${bodyPart}</span>
          </li>
          <li class="target">
          <span class="target-name">Target:</span>
          <span class="target-value">${target}</span>
          </li>
        </ul>
    </div>
    </li>
      `;
    })
    .join('');
  list.innerHTML = markup;
}

export function renderPagination(pages, activePage, list,) {
  const pagesData = Array.from({ length: pages }, (_, i) => i + 1);
  const markup = pagesData
    .map(page => {
      return `
          <li class="pagination-control-item">
            <button class="${activePage === page
          ? 'pagination-control-active'
          : 'pagination-control'
        }" data-page="${page}">${page}</button>
          </li>
      `;
    })
    .join('');
  list.innerHTML = markup;
}

export function renderFilter(options, activeOption, list) {
  const markup = options
    .map(option => {
      return `
          <li class="filters-list-item ${activeOption === option ? 'filters-list-item-active' : ''
        }" data-option="${option}"><p>${option}</p></li>
      `;
    })
    .join('');
  list.innerHTML = markup;
}
