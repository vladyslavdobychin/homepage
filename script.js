'use strict';

const themeBtnDark = document.getElementById('theme-btn-dark');
const themeBtnLight = document.getElementById('theme-btn-light');
const darkTehemSupremacyTextLi = document.getElementById(
  'dark-theme-supremacy'
);
const body = document.querySelector('body');

const toggleTheme = (newTheme) => {
  themeBtnDark.classList.toggle('change-theme__btn--hidden');
  themeBtnLight.classList.toggle('change-theme__btn--hidden');
  body.dataset.theme = newTheme;
  changeDarkTehemSupremacyText(newTheme);
};

const changeDarkTehemSupremacyText = (theme) => {
    if (theme === 'dark') {
        darkTehemSupremacyTextLi.textContent = "Always prefere a dark theme, you did a good job changing it 👍";
    } else {
        darkTehemSupremacyTextLi.textContent = "Always prefere a dark theme, please change it up there 👆";
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
