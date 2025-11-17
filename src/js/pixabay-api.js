const API_KEY = '21847975-d0fb10f6989c918e9c55b7840';

export default function fetchPictures(searchData, perPage = 10, imageType = "photo", orientation = "horizontal", safesearch = true) {
  return fetch(
    "https://pixabay.com/api/?key=" + API_KEY + "&q=" + searchData + "&per_page=" +
    perPage + "&image_type=" + imageType + "&orientation=" + orientation + "&safesearch=" + safesearch
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}