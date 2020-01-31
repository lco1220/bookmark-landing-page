const feature__link = document.querySelectorAll('.feature__link');
const feature__items = document.querySelectorAll('.feature__item');
const questions__btn = document.querySelectorAll('.accordion__button');

feature__link.forEach(link => {
  link.addEventListener('click', e => {
    if(e.currentTarget.id == 'simple') {
      open__feature(e.currentTarget, 'simple-bookmarking');
    }
    if(e.currentTarget.id == 'speedy') {
      open__feature(e.currentTarget, 'speedy-searching');
    }
    if(e.currentTarget.id == 'easy') {
      open__feature(e.currentTarget, 'easy-sharing');
    }
  });
});

questions__btn.forEach(btn => {
  btn.addEventListener('click', e => {
    e.currentTarget.classList.toggle('accordion__button--active');

    if(e.currentTarget.nextElementSibling.classList.contains('accordion__panel--active')) {
      e.currentTarget.nextElementSibling.classList.remove('accordion__panel--active');
    } else {
      e.currentTarget.nextElementSibling.classList.add('accordion__panel--active');
    }

    // console.log(e.currentTarget.nextElementSibling.classList.contains('accordion__panel--active'))
    // console.log(e.currentTarget.classList)
    // console.log(e.currentTarget);
  });
});

function open__feature(link, item) {

  for(i = 0; i<feature__items.length; i++) {
    feature__items[i].className = feature__items[i].className.replace('feature__item--active', '');
  }

  for(i = 0; i < feature__link.length; i++) {
    feature__link[i].className = feature__link[i].className.replace('feature__link--active', '');
  }

  document.getElementById(item).className += ' feature__item--active';
  link.className += ' feature__link--active';
}

