export function renderMuscles(muscles, list) {
  const markup = muscles
    .map(({ filter, imgURL, name }) => {
      return `
          <li class="muscles-item">
            <img
            class="gallery-image"
            src="${imgURL}"
            alt="${name}"
          />
          <div class="muscles-item-info">
            <h3>${name}</h3>
            <p>${filter}</p>
            </div>
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
          <li class=${activeOption === option ? "filters-list-item-active" : "filters-list-item"}><p>${option}</p></li>
      `;
    })
    .join("");
  list.innerHTML = markup;
}