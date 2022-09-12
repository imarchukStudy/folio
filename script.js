// swiper js
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    effect: 'cards',
    cardsEffect: {
        // ...
    },
    autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// progress-bar
function skillDataRendering() {
    const progress = document.querySelectorAll('.progress');
    const percent = [...document.querySelectorAll('.progress-area h5')];


    let i = 0;
    progress.forEach(element => {

        const progressBarWidth = element.getAttribute('data-progress');
        // rendering of h5
        percent[i].textContent = progressBarWidth + '%';
        i++
        // rendering of progressBar
        element.style.width = progressBarWidth + '%';
    });
}
skillDataRendering()

// menu

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.nav__menu');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';

})

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';

})

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        menuBtn.style.display = 'none';
        closeBtn.style.display = 'none'
        menu.style.display = 'flex';

    } else {
        menuBtn.style.display = 'inline-block';
        menu.style.display = 'none';
    }
})

// document.addEventListener('scroll', () => {
//     menu.style.display = 'none';
//     menuBtn.style.display = 'block';
//     closeBtn.style.display = 'none';
// })

// menu active item


const navItems = menu.querySelectorAll('.nav__menu li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a')
        link.classList.remove('active');
    })
}

navItems.forEach(item => {
    const link = item.querySelector('a')
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active')
    })
})

const section = document.querySelectorAll('section');
const navLink = document.querySelectorAll('nav li a');


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top > offset && top < offset + height) {
            navLink.forEach(link => {
                link.classList.remove('active')
                document.querySelector(`nav li a[href*=` + id + `]`).classList.add('active')
            })
        }
    })
}


// read more about

const readMoreContent = document.querySelector('.read-more-content')
const readMoreBtn = document.querySelector('.read-more');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');
    if (readMoreContent.classList.contains('show-content')) {
        readMoreBtn.textContent = 'Show Less';
    } else {
        readMoreBtn.textContent = 'Show More';

    }
})


// skill

const skillItems = document.querySelectorAll('.skills .skill');
skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        let arrow = skill.querySelector('.arrow');
        arrow.classList.toggle('close');
        skill.querySelector('.items').classList.toggle('show-items');
    })
})