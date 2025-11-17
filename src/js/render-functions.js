export default function renderPictures(pictures, gallery) {
  const markup = pictures
    .map((picture) => {
      return `
          <li class="gallery-item">
            <a class="gallery-link" href="${picture.largeImageURL}">
              <img
                class="gallery-image"
                src="${picture.webformatURL}"
                alt="${picture.tags}"
              />
              <ul class="image-details">
                <li class="image-details-item">
                  <p>Likes</p>
                  <p>${picture.likes}</p>
                </li>
                <li class="image-details-item">
                  <p>Views</p>
                  <p>${picture.views}</p>
                </li>
                <li class="image-details-item">
                  <p>Comments</p>
                  <p>${picture.comments}</p>
                </li>
                <li class="image-details-item">
                  <p>Downloads</p>
                  <p>${picture.downloads}</p>
                </li>
              </ul>
            </a>
          </li>
      `;
    })
    .join("");
  gallery.insertAdjacentHTML("beforeend", markup);
}