console.log('The answer is still no.');

const slides = {

  askRoy: {
    text: 'Which Roy?',
    options: [
      {
        image: 'roy_koopa.jpg',
        slide: 'endSure'
      },
      {
        image: 'roy_fe.png',
        slide: 'askGame'
      }
    ]
  },

  askGame: {
    text: 'Which game?',
    options: [
      {
        image: 'melee.png',
        slide: 'redirectNo'
      },
      {
        image: 'ssb4.png',
        slide: 'askSkill'
      }
    ]
  },

  askSkill: {
    text: 'Are you good with him?',
    options: [
      {
        text: 'No',
        slide: 'endNo'
      },
      {
        text: 'Yes',
        slide: 'endNo'
      }
    ]
  },

  endSure: {
    text: 'Sure'
  },

  endNo: {
    text: 'No'
  },

  redirectNo: {
    link: 'https://www.youtube.com/watch?v=31g0YE61PLQ'
  }
};

let container;

const runSlide = id => {
  container.innerHTML = '';
  container.style.opacity = 1;

  const slide = slides[id];

  if (slide.link) {
    window.location.href = slide.link;
    return;
  }

  const slideText = document.createElement('h2');
  slideText.textContent = slide.text;

  container.appendChild(slideText);

  if (slide.options) {
    const slideOptions = document.createElement('div');
    slideOptions.classList.add('slide-options');

    slide.options.forEach(option => {
      const slideOption = createSlideOption(option);
      slideOptions.appendChild(slideOption);
    });

    container.appendChild(slideOptions);
  } else {
    slideText.classList.add('answer');

    const restart = document.createElement('a');
    restart.href = '';
    restart.textContent = 'Restart';

    container.appendChild(restart);
  }
};

const createSlideOption = option => {
  let slideOption;

  if (option.image) {
    slideOption = document.createElement('img');
    slideOption.setAttribute('src', 'img/' + option.image);
  } else {
    slideOption = document.createElement('div');
    slideOption.textContent = option.text;
  }

  slideOption.addEventListener('click', () => {
    container.style.opacity = 0;
    setTimeout(() => runSlide(option.slide), 250);
  });

  return slideOption;
};

window.onload = () => {
  container = document.getElementById('slide-container');
  runSlide('askRoy');
};
