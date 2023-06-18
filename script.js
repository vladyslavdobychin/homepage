'use strict';

class ThemeToggler {
  constructor(darkBtnId, lightBtnId) {
    this.darkBtn = document.getElementById(darkBtnId);
    this.lightBtn = document.getElementById(lightBtnId);
    this.darkThemeSupremacyLi = document.getElementById('dark-theme-supremacy');
    this.body = document.body;

    this.darkBtn.addEventListener('click', () => this.toggleTheme('dark'));
    this.lightBtn.addEventListener('click', () => this.toggleTheme('light'));
  }

  toggleTheme(newTheme) {
    this.darkBtn.classList.toggle('visually-hidden');
    this.lightBtn.classList.toggle('visually-hidden');
    this.body.dataset.theme = newTheme;
    this.changeDarkThemeSupremacyText(newTheme);
  }

  changeDarkThemeSupremacyText(theme) {
    if (theme === 'dark') {
      this.darkThemeSupremacyLi.textContent =
        'Always prefer a dark theme, you did a good job changing it 👍';
    } else {
      this.darkThemeSupremacyLi.textContent =
        'Always prefer a dark theme, please change it up there 👆';
    }
  }
}

class ElementOfSurprise {
  constructor(buttonSelector, modalSelector, videoSelector) {
    this.button = document.querySelector(buttonSelector);
    this.modal = document.querySelector(modalSelector);
    this.video = document.querySelector(videoSelector);

    this.button.addEventListener('click', () => this.openModal());
    this.modal.addEventListener('click', (e) => this.closeModal(e));
  }

  openModal() {
    this.modal.classList.remove('visually-hidden');
    this.video.play();
    document.body.style.overflow = 'hidden';
  }

  closeModal(e) {
    if (e.target.id === 'video-player') {
      return;
    }
    this.modal.classList.add('visually-hidden');
    this.video.pause();
    this.video.currentTime = 0;
    document.body.style.overflow = 'auto';
  }
}

class App {
  constructor() {
    this.themeToggler = null;
    this.elementOfSurprise = null;
  }

  init() {
    this.themeToggler = new ThemeToggler(
      'theme-btn-dark',
      'theme-btn-light',
    );
    this.surpriseVideo = new ElementOfSurprise(
      '.surprise__btn',
      '.modal-wrapper',
      '#video-player'
    );
  }
}

// Usage
const app = new App();
app.init();
