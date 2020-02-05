const feature__link = document.querySelectorAll('.feature__link');
const feature__items = document.querySelectorAll('.feature__item');
const questions__btn = document.querySelectorAll('.accordion__button');
const form = document.getElementById('form');
const email = document.getElementById('email');
let input;

// console.log(feature__link, feature__items);

// Show input message
// function showMessage(input, alert ,message) {
//   // console.log(input.parentElement.parentElement)
//   const input__parent = input.parentElement.parentElement;
//   input__parent.className = `form__input--${alert}`;
//   const small = input__parent.querySelector('small');
//   small.textContent = message;

//   setTimeout(
//     function remove__color(){
//     input__parent.classList.remove(`form__input--${alert}`);
//     small.textContent = "";
//   }, 5000);

//   setTimeout( 
//     function() {
//       input.value = "";
//     }, 10000
//   );

// }

// Check email is valid
// function checkEmail(input) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(input.value.trim())) {
//     showMessage(input,'success','Valid email. Thank you!');
//   } else {
//     showMessage(input, 'error', 'Whoops, make sure it\'s an email');
//   }
// }

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   checkEmail(email);
// });

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

    if(e.currentTarget.nextElementSibling.classList.contains('accordion__content--active')) {
      e.currentTarget.nextElementSibling.classList.remove('accordion__content--active');
    } else {
      e.currentTarget.nextElementSibling.classList.add('accordion__content--active');
    }
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

