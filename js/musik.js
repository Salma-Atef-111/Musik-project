/////////////////////first div ///////////////////////////


var countDownDate = new Date().getTime() + (22 * 24 * 60 * 60 * 1000) + (13 * 60 * 60 * 1000) + (46 * 60 * 1000) + (18 * 1000);

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


////////////////////////////////////


/////////////////////////////////// div five////////////////////////////

var currentTab = 0;

  const tabs = document.querySelectorAll('.tapbtn');
  const tableevent = document.querySelectorAll('.tableevent');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(tab => { tab.classList.remove('active') })
      tab.classList.add('active');

      var line = document.querySelector('.line');
      line.style.width = e.target.offsetWidth + "px";
      line.style.left = e.target.offsetLeft + "px";
    })
  });
function showContent(index) {
  var tableRows = document.getElementById("myTable").getElementsByTagName('tr');
  
  for (var i = 0; i < tableRows.length; i++) {
    tableRows[i].style.display = '';
  }
  
  if (index === 1) {
    for (var i = 2; i < tableRows.length; i++) {
      if (i === 2) {
        tableRows[i].style.display = '';
      } else {
        tableRows[i].style.display = 'none';
      }
    }
  } else if (index === 2) { 
    for (var i = 2; i < tableRows.length; i++) { 
      if (i === 3) {
        tableRows[i].style.display = '';
      } else {
        tableRows[i].style.display = 'none';
      }
    }
  }
  
  currentTab = index;
}
window.onload = function() {
  showContent(0);
};

/////////////////////////////////////////


////////////////////// div eight ///////////////////////////

const carouselContainer = document.querySelector('.carousel__container');
const items = Array.from(document.querySelectorAll('.carousel__item'));

let currentIndex = 0;

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active', 'left', 'right');
        if (index === currentIndex) {
            item.classList.add('active');
        } else if (index === (currentIndex - 1 + items.length) % items.length) {
            item.classList.add('left');
        } else if (index === (currentIndex + 1) % items.length) {
            item.classList.add('right');
        }
    });
}

carouselContainer.addEventListener('click', (e) => {
    const clickedItem = e.target.closest('.carousel__item');
    if (clickedItem) {
        currentIndex = items.indexOf(clickedItem);
        updateCarousel();
    }
});

updateCarousel();



///////////////////////////////////

const init = false;
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    800: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});


///////////////////////////////////


/////////////////////// validation//////////////////////////

function validateForm() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("mail").value;
  const textareaValue = document.getElementById('message').value;
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");
  
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  let isValid = true;
  let checkedCount = 0;

  if (name === "" || /\d/.test(name) ||  name.length <= 7) {
    nameError.textContent =
        "Please enter your name correct, at least 8 characters.";
    isValid = false;
  }

  if (email === "" || !email.includes("@")) {
      emailError.textContent =
          "Please enter a valid email address.";
      isValid = false;
  }

  if (!textareaValue.trim()) {
    messageError.textContent =
    "Please type here your message.";
    isValid = false;
  }
  return isValid;
};

//////////////////////////////////////////////////


