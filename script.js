'use strict';

const themeBtnDark = document.getElementById('theme-btn-dark');
const themeBtnLight = document.getElementById('theme-btn-light');
const darkTehemSupremacyTextLi = document.getElementById(
  'dark-theme-supremacy'
);
const elementOfSurpriseButton = document.querySelector('.surprise__btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const videoPlayer = document.getElementById('video-player');
const body = document.querySelector('body');

const toggleTheme = (newTheme) => {
  themeBtnDark.classList.toggle('visually-hidden');
  themeBtnLight.classList.toggle('visually-hidden');
  body.dataset.theme = newTheme;
  changeDarkTehemSupremacyText(newTheme);
};

const changeDarkTehemSupremacyText = (theme) => {
  if (theme === 'dark') {
    darkTehemSupremacyTextLi.textContent =
      'Always prefere a dark theme, you did a good job changing it 👍';
  } else {
    darkTehemSupremacyTextLi.textContent =
      'Always prefere a dark theme, please change it up there 👆';
  }
};

themeBtnDark.addEventListener('click', (e) => {
  const clickedBtn = e.target.closest('.change-theme__btn');
  toggleTheme(clickedBtn.dataset.theme);
});

themeBtnLight.addEventListener('click', (e) => {
  const clickedBtn = e.target.closest('.change-theme__btn');
  toggleTheme(clickedBtn.dataset.theme);
});

elementOfSurpriseButton.addEventListener('click', function () {
  modalWrapper.classList.remove('visually-hidden');
  videoPlayer.play();
  document.body.style.overflow = 'hidden';
});

modalWrapper.addEventListener('click', function (e) {
  if (e.target.id === 'video-player') {
    return;
  }

  modalWrapper.classList.add('visually-hidden');
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
  document.body.style.overflow = 'auto';
});
