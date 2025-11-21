export function showLoader(container) {
  if (!container) return;

  let loader = container.querySelector(".local-loader-wrapper");

  if (!loader) {
    loader = document.createElement("div");
    loader.classList.add("local-loader-wrapper");

    loader.innerHTML = `
      <div class="hypnotic"></div>
    `;

    container.style.position = "relative";
    container.appendChild(loader);
  }

  loader.classList.remove("hidden");
}

export function hideLoader(container) {
  if (!container) return;

  const loader = container.querySelector(".local-loader-wrapper");
  if (loader) loader.classList.add("hidden");
}
