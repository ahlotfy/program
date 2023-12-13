// System Web
// Start Search
let btnUp = document.querySelector(".btn-up");
window.onscroll = function (e) {
  if (window.scrollY >= 745) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
};
btnUp.onclick = function () {
  window.scrollTo(0, 0);
};
// IDs
let inputSearch = document.querySelector("header nav .search input");
let iconSearch = document.querySelector("nav .search .icon-search");
let btnDelete = document.querySelector(".search i[title='Delete']");
inputSearch.addEventListener("keydown", (e) => {
  if (
    e.key !== "Shift" &&
    e.key !== "Control" &&
    e.key !== "Tab" &&
    e.key !== "Alt" &&
    e.key !== "CapsLock" &&
    e.key !== "F1" &&
    e.key !== "F2" &&
    e.key !== "F3" &&
    e.key !== "F4" &&
    e.key !== "F5" &&
    e.key !== "F6" &&
    e.key !== "F7" &&
    e.key !== "F8" &&
    e.key !== "F9" &&
    e.key !== "F10" &&
    e.key !== "F11" &&
    e.key !== "F12"
  ) {
    if (inputSearch.value.length >= -1) {
      btnDelete.style.display = "block";
    }
    if (e.key === "Backspace" && inputSearch.value.length <= 1) {
      btnDelete.style.display = "none";
    }
  }
});
setInterval(() => {
  if (inputSearch.value.length <= 0) {
    btnDelete.style.display = "none";
  }
}, 100);
if (inputSearch.value.length <= 1 || (inputSearch.value = "")) {
  btnDelete.style.display = "none";
}
btnDelete.onclick = function () {
  inputSearch.value = "";
  btnDelete.style.display = "none";
};
let languageSelector = document.querySelector("select");
window.onload = function () {
  if (window.sessionStorage.getItem("lang") === "ar") {
    btnDelete.classList.remove("ltr");
    btnDelete.classList.add("rtl");
  } else {
    btnDelete.classList.remove("rtl");
    btnDelete.classList.add("ltr");
  }
};
languageSelector.addEventListener("change", () => {
  if (window.sessionStorage.getItem("lang") === "en") {
    btnDelete.classList.remove("ltr");
    btnDelete.classList.add("rtl");
  } else {
    btnDelete.classList.remove("rtl");
    btnDelete.classList.add("ltr");
  }
});
iconSearch.onclick = function () {
  window.sessionStorage.setItem("Search", inputSearch.value);
  location.href = `#${inputSearch.value}`;
};
inputSearch.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    window.sessionStorage.setItem("Search", inputSearch.value);
    location.href = `#${inputSearch.value}`;
  }
});
if (window.sessionStorage.getItem("Search") !== inputSearch.value) {
  inputSearch.value = window.sessionStorage.getItem("Search");
}
// End Search
// Start Nav
// IDs
let iconBar = document.querySelector("header nav i");
let ul = document.querySelector("header nav .nav-bar ul");
let aLink = document.querySelectorAll(".catch li a");
let navBar = document.querySelector("nav-bar");
// End IDs
iconBar.addEventListener("click", () => {
  ul.classList.toggle("show");
});
document.onclick = function (e) {
  if (e.target.parentElement === navBar) {
    ul.classList.remove("show");
  }
};

// End Nav
// Start Landing
// Landing Background Change
let landing = document.querySelector(".landing");
// IDs Arrows
let leftIcon = document.querySelector(".landing .left");
let rightIcon = document.querySelector(".landing .right");
// IDs Bullets
let leftBull = document.querySelector(".landing .left-bull");
let centerBull = document.querySelector(".landing .center-bull");
let rightBull = document.querySelector(".landing .right-bull");
// Arrow Left
leftIcon.onclick = function () {
  if (landing.classList.contains("imgs-right")) {
    landing.classList.remove("imgs-right");
    landing.classList.add("imgs-center");
    leftIcon.style.display = "block";
    rightIcon.style.display = "block";
    rightBull.classList.remove("active");
    leftBull.classList.remove("active");
    centerBull.classList.add("active");
  } else {
    landing.classList.remove("imgs-center");
    landing.classList.add("imgs-left");
    leftIcon.style.display = "none";
    centerBull.classList.remove("active");
    rightBull.classList.remove("active");
    leftBull.classList.add("active");
  }
};
// Arrow Right
rightIcon.onclick = function () {
  if (landing.classList.contains("imgs-left")) {
    landing.classList.remove("imgs-left");
    landing.classList.add("imgs-center");
    leftIcon.style.display = "block";
    rightIcon.style.display = "block";
    rightBull.classList.remove("active");
    leftBull.classList.remove("active");
    centerBull.classList.add("active");
  } else {
    landing.classList.remove("imgs-center");
    landing.classList.add("imgs-right");
    rightIcon.style.display = "none";
    leftBull.classList.remove("active");
    centerBull.classList.remove("active");
    rightBull.classList.add("active");
  }
};

// Landing Bullets
leftBull.onclick = function () {
  // Bullets
  centerBull.classList.remove("active");
  rightBull.classList.remove("active");
  leftBull.classList.add("active");
  //Arrows
  leftIcon.style.display = "none";
  rightIcon.style.display = "block";
  // Background
  landing.classList.remove("imgs-center");
  landing.classList.remove("imgs-right");
  landing.classList.add("imgs-left");
};
centerBull.onclick = function () {
  // Bullets
  leftBull.classList.remove("active");
  rightBull.classList.remove("active");
  centerBull.classList.add("active");
  //Arrows
  leftIcon.style.display = "block";
  rightIcon.style.display = "block";
  // Background
  landing.classList.remove("imgs-right");
  landing.classList.remove("imgs-left");
  landing.classList.add("imgs-center");
};
rightBull.onclick = function () {
  // Bullets
  leftBull.classList.remove("active");
  centerBull.classList.remove("active");
  rightBull.classList.add("active");
  //Arrows
  leftIcon.style.display = "block";
  rightIcon.style.display = "none";
  // Background
  landing.classList.remove("imgs-center");
  landing.classList.remove("imgs-left");
  landing.classList.add("imgs-right");
};
if ((document.body.style.direction = "rtl")) {
  let bullets = document.querySelector(".bullets");
  bullets.classList.remove("rtl");
  bullets.classList.add("ltr");
} else {
  bullets.classList.remove("ltr");
  bullets.classList.add("rtl");
}

// Start ArrowRight (Keyboard)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    if (landing.classList.contains("imgs-left")) {
      landing.classList.remove("imgs-left");
      landing.classList.add("imgs-center");
      leftIcon.style.display = "block";
      // Start Bull Fun
      leftBull.classList.remove("active");
      centerBull.classList.add("active");
      // End Bull Fun
    } else {
      landing.classList.remove("imgs-center");
      landing.classList.add("imgs-right");
      rightIcon.style.display = "none";
      // Start Bull Fun
      centerBull.classList.remove("active");
      rightBull.classList.add("active");
      // End Bull Fun
    }
  }
});
// End ArrowRight (Keyboard)

// Start ArrowLeft (Keyboard)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    if (landing.classList.contains("imgs-right")) {
      landing.classList.remove("imgs-right");
      landing.classList.add("imgs-center");
      rightIcon.style.display = "block";
      rightBull.classList.remove("active");
      centerBull.classList.add("active");
    } else {
      centerBull.classList.remove("active");
      leftBull.classList.add("active");
      landing.classList.remove("imgs-center");
      landing.classList.add("imgs-left");
      leftIcon.style.display = "none";
    }
  }
});
// End ArrowLeft (Keyboard)
setInterval(() => {
  // Bullets
  centerBull.classList.remove("active");
  rightBull.classList.remove("active");
  leftBull.classList.add("active");
  //Arrows
  leftIcon.style.display = "none";
  rightIcon.style.display = "block";
  // Background
  landing.classList.remove("imgs-center");
  landing.classList.remove("imgs-right");
  landing.classList.add("imgs-left");
}, 20000);
setInterval(() => {
  // Bullets
  leftBull.classList.remove("active");
  centerBull.classList.remove("active");
  rightBull.classList.add("active");
  //Arrows
  leftIcon.style.display = "block";
  rightIcon.style.display = "none";
  // Background
  landing.classList.remove("imgs-center");
  landing.classList.remove("imgs-left");
  landing.classList.add("imgs-right");
}, 40000);
setInterval(() => {
  // Bullets
  leftBull.classList.remove("active");
  rightBull.classList.remove("active");
  centerBull.classList.add("active");
  //Arrows
  leftIcon.style.display = "block";
  rightIcon.style.display = "block";
  // Background
  landing.classList.remove("imgs-right");
  landing.classList.remove("imgs-left");
  landing.classList.add("imgs-center");
}, 60000);
// End Landing

// Start Services
let iconServices = document.querySelectorAll(".services .srv-box i");
iconServices.forEach((e) => {
  if ((document.body.style.direction = "rtl")) {
    e.classList.remove("ltr");
    e.classList.add("rtl");
  } else {
    e.classList.remove("rtl");
    e.classList.add("ltr");
  }
});

// End Services

// Start PortFolio
// IDs
let tabPhoto = document.querySelector(".portfolio .shuffle .photo");
let tabNew = document.querySelector(".portfolio .shuffle .new");
let shuffImage = document.querySelector(".portfolio .imgs-container");
let shuffNews = document.querySelector(".portfolio .news-container");
tabPhoto.onclick = function () {
  tabNew.classList.remove("active");
  tabPhoto.classList.add("active");
  shuffNews.style.display = "none";
  shuffImage.style.display = "grid";
};
tabNew.onclick = function () {
  tabPhoto.classList.remove("active");
  tabNew.classList.add("active");
  shuffImage.style.display = "none";
  shuffNews.style.display = "grid";
};
// End PortFolio
// Start Stats

let continentTitle = document.querySelectorAll(
  ".stats-content .content-bars .bar h3"
);
continentTitle.forEach((e) => {
  if ((document.body.style.direction = "rtl")) {
    e.classList.remove("rtl");
    e.classList.add("ltr");
  } else {
    e.classList.remove("ltr");
    e.classList.add("rtl");
  }
});

let backgroundBar = document.querySelectorAll(
  ".stats-content .content-bars .background-bar"
);
backgroundBar.forEach((e) => {
  if ((document.body.style.direction = "rtl")) {
    e.classList.remove("ltr");
    e.classList.add("rtl");
  } else {
    e.classList.remove("ltr");
    e.classList.add("rtl");
  }
});

// Stats Bullets
let leftBullTwo = document.querySelector(".stats .bullets .left-bull");
let centerBullTwo = document.querySelector(".stats .bullets .center-bull");
let rightBullTwo = document.querySelector(".stats .bullets .right-bull");
// Stats
let leftStats = document.querySelector(".stats .left-stats");
let centerStats = document.querySelector(".stats .center-stats");
let rightStats = document.querySelector(".stats .right-stats");
leftBullTwo.onclick = function () {
  //Bullets
  centerBullTwo.classList.remove("active");
  rightBullTwo.classList.remove("active");
  leftBullTwo.classList.add("active");
  //Change Stats
  centerStats.style.display = "none";
  rightStats.style.display = "none";
  leftStats.style.display = "block";
};
centerBullTwo.onclick = function () {
  //Bullets
  rightBullTwo.classList.remove("active");
  leftBullTwo.classList.remove("active");
  centerBullTwo.classList.add("active");
  //Change Stats
  rightStats.style.display = "none";
  leftStats.style.display = "none";
  centerStats.style.display = "block";
};
rightBullTwo.onclick = function () {
  //Bullets
  centerBullTwo.classList.remove("active");
  leftBullTwo.classList.remove("active");
  rightBullTwo.classList.add("active");
  //Change Stats
  centerStats.style.display = "none";
  leftStats.style.display = "none";
  rightStats.style.display = "block";
};
// End Stats
// Start Contact
// IDs
let fristNext = document.querySelector(".contact .user-section span");
let fristBack = document.querySelector(".contact .email-section .back");
let secondNext = document.querySelector(".contact .email-section .next");
let secondBack = document.querySelector(".contact .text-section span");
let userSec = document.querySelector(".contact .user-section");
let emailSec = document.querySelector(".contact .email-section");
let textSec = document.querySelector(".contact .text-section");
// Valid Or Not Valid
// IDs
// Response User
let userloading = document.querySelector(
  ".contact-section .user-section .response .loading"
);
let uservalid = document.querySelector(
  ".contact-section .user-section .response .valid"
);
let usernotValid = document.querySelector(
  ".contact-section .user-section .response .not-valid"
);
// Response Email
let emailloading = document.querySelector(
  ".contact-section .email-section .response .loading"
);
let emailvalid = document.querySelector(
  ".contact-section .email-section .response .valid"
);
let emailnotValid = document.querySelector(
  ".contact-section .email-section .response .not-valid"
);
let inputUser = document.querySelector(
  ".contact-section .user-section input[type='text']"
);
let inputEmail = document.querySelector(
  ".contact-section .email-section input[type='email']"
);
let inputText = document.querySelector(
  ".contact-section .text-section textarea"
);
// User Section
fristNext.onclick = function () {
  new Promise((res, rej) => {
    // Match User Vaild
    let regex = /\b[a-z]+[a-z]+\b/gi;
    if (regex.test(inputUser.value) && inputUser.value.length > 2) {
      res("true");
    } else {
      rej("false");
    }
  })
    .finally(() => {
      uservalid.style.display = "none";
      usernotValid.style.display = "none";
      userloading.style.display = "inline-block";
      inputUser.style.cssText = "border: none;";
    })
    .then(() => {
      // sessionStorage Set
      window.sessionStorage.setItem("User", inputUser.value);
      setTimeout(() => {
        uservalid.style.display = "inline-block";
        setTimeout(() => {
          userSec.style.display = "none";
          emailSec.style.display = "flex";
        }, 1000);
        userloading.style.display = "none";
      }, 500);
    })
    .catch(() => {
      setTimeout(() => {
        userloading.style.display = "none";
        usernotValid.style.display = "inline-block";
        inputUser.style.cssText = "border: 1px solid red;";
      }, 500);
    });
};
// sessionStorage Get
if (inputUser.value !== window.sessionStorage.getItem("User")) {
  inputUser.value = window.sessionStorage.getItem("User");
}
// Session Storage

// Match Email Vaild
let groupBtn = document.querySelector(".email-section .group-bottons");
secondNext.onclick = function () {
  let regex = /[a-z]+([0-9]+)?@[a-z]+\.[a-z]+/gi;
  new Promise((res, rej) => {
    if (regex.test(inputEmail.value) && inputEmail.value.length > 6) {
      res("true");
    } else {
      rej("false");
    }
  })
    .finally(() => {
      emailvalid.style.display = "none";
      emailnotValid.style.display = "none";
      fristBack.style.display = "none";
      if ((fristBack.style.display = "none")) {
        groupBtn.style.justifyContent = "flex-end";
      }
      emailloading.style.display = "inline-block";
      inputUser.style.cssText = "border: none;";
    })
    .then(() => {
      emailnotValid.style.display = "none";
      // sessionStorage Set
      window.sessionStorage.setItem("Email", inputEmail.value);
      setTimeout(() => {
        emailvalid.style.display = "inline-block";
        setTimeout(() => {
          emailSec.style.display = "none";
          textSec.style.display = "flex";
          fristBack.style.display = "inline-block";
        }, 1000);
        emailloading.style.display = "none";
      }, 500);
    })
    .catch(() => {
      emailvalid.style.display = "none";
      setTimeout(() => {
        fristBack.style.display = "inline-block";
        emailloading.style.display = "none";
        emailnotValid.style.display = "inline-block";
        inputEmail.style.cssText = "border: 1px solid red;";
        if ((fristBack.style.display = "inline-block")) {
          groupBtn.style.justifyContent = "space-between";
        }
      }, 500);
    });
};

// sessionStorage Get
if (inputEmail.value !== window.sessionStorage.getItem("Email")) {
  inputEmail.value = window.sessionStorage.getItem("Email");
}
fristBack.onclick = function () {
  emailSec.style.display = "none";
  userSec.style.display = "flex";
};
secondBack.onclick = function () {
  textSec.style.display = "none";
  emailSec.style.display = "flex";
  if ((fristBack.style.display = "inline-block")) {
    groupBtn.style.justifyContent = "space-between";
  }
};

// Email Section
// End Contact
