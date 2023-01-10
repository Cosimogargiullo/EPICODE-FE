var bottoneDestro = document.querySelector('.right-arrow');
var bottoneSinistro = document.querySelector('.left-arrow');
var playpause = document.querySelector('.play-pause');
let posizione = 0;
let active = false;
let interval;
const ruota = () => {
    const cube = document.querySelectorAll('.cube');
    Array.from(cube).forEach(cube => cube.style.transform =`rotateY(${posizione}deg)`)
};

/*Mous Hover*/
bottoneDestro.addEventListener('mouseover', () => {
    posizione += 25;
    ruota();
});
bottoneDestro.addEventListener('mouseout', () => {
    posizione -= 25;
    ruota();
});
bottoneSinistro.addEventListener('mouseover', () => {
    posizione -= 25;
    ruota();
});
bottoneSinistro.addEventListener('mouseout', () => {
    posizione += 25;
    ruota();
});

/*Mouse Click*/
bottoneDestro.addEventListener('click', () => {
    posizione += 90;
    ruota();
});
bottoneSinistro.addEventListener('click', () => {
    posizione -= 90;
    ruota();
});

/*Play Pause*/

const change = () => {
    const icon = document.querySelector('.play-pause i');
    const iconClass = icon.classList[1];
    if (iconClass === 'fa-play') {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

const playPause = () => {
    if (!active) {
        interval = setInterval(() => {
            posizione -= 90;
            ruota()
        }, 1000);
        change ();
        active = true
    } else {
        clearInterval(interval);
        change();
        active = false;
    }
}

playpause.addEventListener('click', () => {
    playPause();
});