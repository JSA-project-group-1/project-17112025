import iconsUrl from '../assets/icons/icons.svg';
import { openRatingModal } from './rating-modal.js';
import { handleGetQuoteOfTheDay } from './quote-api-localStorage';

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
  if (exercises.length > 0) {
    const markup = exercises
      .map(({ _id, name, target, bodyPart, burnedCalories, rating }) => {
        return `
    <li class="exercises-item">
    <div class="header-card">
    <div class="header-left">
        <span class="type">WORKOUT</span>
        <span class="rating">${Number(rating).toFixed(1)}</span>
        <svg class="icon-star" width="18" height="18">
            <use href="${iconsUrl}#icon-star"></use>
        </svg>
       </div>
       <div class="header-right">
        <button class="start-btn" type="button" data-modal-exercise="open" data-exercise-id="${_id}"> Start 
        <svg class="icon-arrow-right" width="18" height="18">
        <use href="${iconsUrl}#icon-arrow-1"></use>
        </svg>
        </button>
        </div>
        </div>
    <div class="title">
      <button type="button" class="exercise-rating-btn js-give-rating-btn" data-exercise-id="${_id}">
      <svg class="icon" width="24" height="24">
      <use href="${iconsUrl}#icon-run-man-2"></use>
      </svg>
      </button>
      <span class="name-text-exercise">${name}</span>
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
  } else {
    list.innerHTML =
      '<p>Unfortunately, there is no content of interest to you at this time, but it will appear soon.</p>';
  }

  // attach click listeners to rating buttons to open rating modal with the exercise id
  const ratingButtons = list.querySelectorAll('.js-give-rating-btn');
  ratingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.exerciseId;
      openRatingModal(id, null);
    });
  });
}

export function renderPagination(totalPages, currentPage, list) {
  const activePage = Number(currentPage);
  const pages = Number(totalPages);
  const isFirstPage = activePage === 1;
  const isLastPage = activePage === pages;

  const prevButtonsMarkup = `
      <li class="pagination-control-item">
          <button class=" ${isFirstPage ? 'pagination-arrow-btn' : 'pagination-arrow-btn-active'
    }"
                  data-page="beg"
                  ${isFirstPage ? 'disabled' : ''}>
                  <svg class="left-vector" width="6" height="12">
                    <use href="${iconsUrl}#icon-vector"></use>
                  </svg>
                  <svg class="left-vector" width="6" height="24">
                    <use href="${iconsUrl}#icon-vector"></use>
                  </svg>
          </button>
      </li>
      <li class="pagination-control-item">
          <button class=" ${isFirstPage ? 'pagination-arrow-btn' : 'pagination-arrow-btn-active'
    }"
                  data-page="prev"
                  ${isFirstPage ? 'disabled' : ''}>
                  <svg class="left-vector" width="6" height="12">
                    <use href="${iconsUrl}#icon-vector"></use>
                  </svg>
           </button>
      </li>
  `;

  const pagesMarkup = `
  ${isFirstPage
      ? `
    <li class="pagination-control-item">
      <button class="pagination-control-active" data-page="1">1</button>
    </li>
    ${pages > 1
        ? `
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="2">2</button>
      </li>
      `
        : ''
      }
    ${pages > 2
        ? `
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="3">3</button>
      </li>
      `
        : ''
      }
    ${pages > 3
        ? `
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `
        : ''
      }
  `
      : ''
    }

  ${!isFirstPage && isLastPage
      ? `
    ${pages > 3
        ? `
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `
        : ''
      }
    ${pages > 2
        ? `
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="${activePage - 2}">${activePage - 2
        }</button>
      </li>
    `
        : ''
      }
    ${pages > 1
        ? `
      <li class="pagination-control-item">
        <button class="pagination-control" data-page="${activePage - 1}">${activePage - 1
        }</button>
      </li>
    `
        : ''
      }
    <li class="pagination-control-item">
      <button class="pagination-control-active" data-page="${activePage}">${activePage}</button>
    </li>
  `
      : ''
    }

  ${!isFirstPage && !isLastPage
      ? `
    ${activePage > 2
        ? `
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `
        : ''
      }

    <li class="pagination-control-item">
        <button class="pagination-control" data-page="${activePage - 1}">${activePage - 1
      }</button>
    </li>

    <li class="pagination-control-item">
      <button class="pagination-control-active" data-page="${activePage}">${activePage}</button>
    </li>

    <li class="pagination-control-item">
        <button class="pagination-control" data-page="${activePage + 1}">${activePage + 1
      }</button>
    </li>

    ${pages - activePage >= 2
        ? `
      <li class="pagination-control-item">
        <p class="pagination-control">...</p>
      </li>
    `
        : ''
      }
  `
      : ''
    }
  `;

  const nextButtonsMarkup = `
      <li class="pagination-control-item">
          <button class="pagination-arrow-btn ${isLastPage ? 'pagination-arrow-btn' : 'pagination-arrow-btn-active'
    }"
                  data-page="next"
                  ${isLastPage ? 'disabled' : ''}>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${iconsUrl}#icon-vector"></use>
                  </svg>
           </button>
      </li>
      <li class="pagination-control-item">
          <button class="pagination-arrow-btn ${isLastPage ? 'pagination-arrow-btn' : 'pagination-arrow-btn-active'
    }"
                  data-page="end"
                  ${isLastPage ? 'disabled' : ''}>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${iconsUrl}#icon-vector"></use>
                  </svg>
                  <svg class="right-vector" width="6" height="12">
                    <use href="${iconsUrl}#icon-vector"></use>
                  </svg>
          </button>
      </li>
  `;

  const finalMarkup = prevButtonsMarkup + pagesMarkup + nextButtonsMarkup;
  list.innerHTML = finalMarkup;
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

// Render the quote of the day
export async function renderQuoteOfTheDay() {
  try {
    const quoteData = await handleGetQuoteOfTheDay();

    const quoteTextEl = document.querySelector('.quote-api-text');
    const quoteAuthorEl = document.querySelector('.quote-api-author');

    if (quoteTextEl) {
      quoteTextEl.textContent = quoteData.quote || 'No quote available';
    }

    if (quoteAuthorEl) {
      quoteAuthorEl.textContent = quoteData.author || 'Unknown author';
    }
  } catch (error) {
    console.error('Error rendering quote:', error);
  }
}
