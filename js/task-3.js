const gallery = document.querySelector('.gallery');
const imagesMarkup = images
  .map(({ url, alt }) => {
    return `<li><img class="img" src="${url}" alt="${alt}"></li>`;
  })
  .join('');
gallery.insertAdjacentHTML('beforeend', imagesMarkup);
