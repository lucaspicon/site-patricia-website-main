/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*=============== MENU SHOW ===============*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=============== MENU HIDDEN ===============*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);
bgHeader();

/*=============== SWIPER SERVICES ===============*/
const swiperServices = new Swiper(".services__swiper", {
  loop: true,
  autoplay: {
    delay: 3000, // Tempo de atraso entre as transições (em milissegundos)
    disableOnInteraction: false, // Continua a rodar mesmo após interação do usuário
  },
  speed: 2000,
  // Outras configurações opcionais
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== SWIPER ABOUT ===============*/
function initializeAboutSwiper() {
  if (window.innerWidth <= 600) {
    new Swiper(".about__images.swiper", {
      loop: true, // Faz o loop dos slides
      autoplay: {
        delay: 3000, // Tempo de atraso entre as transições (em milissegundos)
        disableOnInteraction: false, // Continua a rodar mesmo após interação do usuário
      },
      speed: 1000, // Duração da transição entre os slides (em milissegundos)
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

// Inicializa o Swiper ao carregar a página
initializeAboutSwiper();

// Re-inicializa o Swiper ao redimensionar a janela
window.addEventListener("resize", () => {
  initializeAboutSwiper();
});

const aboutSwiper = new Swiper(".about__images.swiper", {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
scrollUp();
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2500,
  delay: 400,
});

sr.reveal(
  `.home__content, .services__data, .services__swiper, .footer__container`
);
sr.reveal(`.home__images`, { origin: "bottom", delay: 1000 });
sr.reveal(`.about__images, .contact__img, .map`, { origin: "right" });
sr.reveal(`.contact__data`, { origin: "right" });
sr.reveal(`.about__data`, { origin: "left" });
sr.reveal(`.products__card`, { interval: 100 });
