// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderGalleryImg(parentEl, data) {
  parentEl.innerHTML = generateMarkup(data);
  lightbox.refresh();
}

function generateMarkup(data) {
  return data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              
                <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="360" />
               
                  <ul class="gallery-text">
                    <li>
                      <span>Likes</span>
                      <p>${likes}</p>
                    </li>
                    <li>
                      <span>Views</span>
                      <p>${views}</p>
                    </li>
                    <li>
                      <span>Comments</span>
                      <p>${comments}</p>
                    </li>
                    <li>
                      <span>Downloads</span>
                      <p>${downloads}</p>
                    </li>
                  </ul>

            </a>
          </li>`
    )
    .join(' ');
}
