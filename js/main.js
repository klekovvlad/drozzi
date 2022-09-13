const header = document.querySelector('.header');

function scrollFunction() {
    let scrollPosition = 300;
    
    if(document.body.scrollTop > scrollPosition || document.documentElement.scrollTop > scrollPosition) {
      header.classList.add('header-gray');
    } else {
      header.classList.remove('header-gray');
    };
  };
  
window.onscroll = function() {
    scrollFunction()
};

const portfolioBox = document.querySelectorAll('.portfolio__box');

portfolioBox.forEach(box => {
    box.addEventListener('click', () => {
        const portfolioBoxLink = box.querySelector('a.portfolio__link');
        document.location.href = portfolioBoxLink.href;
    });
});

const formInput = document.querySelectorAll('input');
const formLabel = document.querySelectorAll('label');
const formTextarea = document.querySelectorAll('textarea');

function formAnimate(a, b, c) {
    formLabel[a].classList.add('label-up');
    formLabel[b].classList.remove('label-up');
    formLabel[c].classList.remove('label-up');
}

function formAnimateValid() {
    if(formInput[0].value.length != 0) {
        formLabel[0].classList.add('label-up');
    };
    if (formInput[1].value.length != 0) {
        formLabel[1].classList.add('label-up');
    };
    if (formTextarea[0].value.length != 0) {
        formLabel[2].classList.add('label-up');
    };
}

formInput[0].addEventListener('focus', () => {
    formAnimate(0, 1, 2);
    formAnimateValid();
});
formInput[1].addEventListener('focus', () => {
    formAnimate(1, 0, 2);
    formAnimateValid();
});
formTextarea[0].addEventListener('focus', () => {
    formAnimate(2, 0, 1);
    formAnimateValid();
});

const phoneValid = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const phoneInput = document.querySelector('#phone');
const formButton = document.querySelector('.form');
const validMessage = document.querySelector('.error');

formButton.addEventListener('click', () => {
    if (!phoneValid.test(phoneInput.value)) {
        event.preventDefault();
        phoneInput.classList.add('red');
        validMessage.innerHTML = 'Введите корректный номер телефона';
    }else{
        phoneInput.classList.remove('red');
        validMessage.innerHTML = ''
    }
})
