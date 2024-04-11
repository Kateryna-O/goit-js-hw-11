import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImages } from './js/pixabay-api.js';
import { renderGalleryImg } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

const loaderWrapperEl = document.querySelector('.loader-wrapper ');

form.addEventListener('submit', onSubmitForm);

async function onSubmitForm(event) {
  event.preventDefault();

  gallery.innerHTML = '';
  loaderWrapperEl.classList.remove('is-hidden');

  const inputValue = document.getElementById('input-text').value.trim();

  if (inputValue !== '') {
    try {
      const images = await searchImages(inputValue);
      if (images.length > 0) {
        renderGalleryImg(gallery, images);
      } else {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    } catch (error) {
      console.error('Error searching images:', error);
      iziToast.error({
        title: 'Error',
        message:
          'An error occurred while searching for images. Please try again later.',
      });
    } finally {
      loaderWrapperEl.classList.add('is-hidden');
    }
  } else {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term',
    });
  }
}
