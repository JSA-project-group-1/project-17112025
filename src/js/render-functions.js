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
    .join("");
  list.innerHTML = markup;
}

export function renderExercises(exercises, list) {
  const markup = exercises
    .map(({ _id, name, target, bodyPart, burnedCalories, rating }) => {
      return `
          <li class="exercises-item">
            <p>_id: ${_id}</p>
            <p>name: ${name}</p>
            <p>target: ${target}</p>
            <p>bodyPart: ${bodyPart}</p>
            <p>burnedCalories: ${burnedCalories}</p>
            <p>rating: ${rating}</p>
          </li>
      `;
    })
    .join("");
  list.innerHTML = markup;
}

export function renderPagination(pages, activePage, list) {
  const pagesData = Array.from({ length: pages }, (_, i) => i + 1);
  const markup = pagesData
    .map((page) => {
      return `
          <li class="pagination-control-item">
            <button class="${activePage === page ? 'pagination-control-active' : 'pagination-control'}">${page}</button>
          </li>
      `;
    })
    .join("");
  list.innerHTML = markup;
}

export function renderFilter(options, activeOption, list) {
  const markup = options
    .map((option) => {
      return `
          <li class="filters-list-item ${activeOption === option ? "filters-list-item-active" : ""}" data-option="${option}"><p>${option}</p></li>
      `;
    })
    .join("");
  list.innerHTML = markup;
}