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
    <div class="header">
        <div class = "workout-rating">
        <span class="type">WORKOUT</span>
        <span class="rating">${rating} </span>
        </div>
        <button class="start-btn" type="button"> Start </button>
    </div>
    <div class="title">
        <span class="icon">icon</span> ${name}
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
