// ____________________________________________________________Keyboard Presses
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        // Normal Keys
        case 'a':
            animate(0, false)
            play_sound('A', false)
            break;

        case 's':
            animate(1, false)
            play_sound('B', false)
            break;

        case 'd':
            animate(2, false)
            play_sound('C', false)
            break;

        case 'f':
            animate(3, false)
            play_sound('D', false)
            break;

        case 'g':
            animate(4, false)
            play_sound('E', false)
            break;

        case 'h':
            animate(5, false)
            play_sound('F', false)
            break;

        case 'j':
            animate(6, false)
            play_sound('G', false)
            break;

            // Sharp Keys
        case 'w':
            animate(0, true)
            play_sound('A', true)
            break;
        case 'e':
            animate(1, true)
            play_sound('C', true)
            break;
        case 'r':
            animate(2, true)
            play_sound('D', true)
            break;
        case 't':
            animate(3, true)
            play_sound('F', true)
            break;
        case 'y':
            animate(4, true)
            play_sound('G', true)
            break;
    }
})

// ____________________________________________________________Adding Notes  to the keys
function play_sound(key, sharp) {
    if (!sharp) {
        let key_sound = new Audio('Piano Keys/' + key + '.wav')
        key_sound.play()
    } else {
        let key_sound = new Audio('Piano Keys/' + key + '_.wav')
        key_sound.play()
    }
}

// Normal Tiles : Click Event 
let piano_tiles = document.getElementsByClassName('piano_tiles')

for (let i = 0; i < piano_tiles.length; i++) {
    piano_tiles[i].addEventListener('click', () => {
        animate(i, false);
        play_sound(piano_tiles[i].innerHTML, false)
    });
}

// Sharp Tiles : Click Event
let piano_tiles_sharp = document.getElementsByClassName('piano_tiles_sharp')

for (let i = 0; i < piano_tiles_sharp.length; i++) {
    piano_tiles_sharp[i].addEventListener('click', () => {
        animate(i, true);
        play_sound(piano_tiles_sharp[i].innerHTML[0], true)
    });
}


// Animate on Click 
function animate(index, sharp) {
    if (!sharp) {
        piano_tiles[index].classList.add('flash');

        setTimeout(() => {
            piano_tiles[index].classList.remove('flash');
        }, 100)
    } else {
        piano_tiles_sharp[index].classList.add('flash');

        setTimeout(() => {
            piano_tiles_sharp[index].classList.remove('flash');
        }, 100)
    }
}

// ____________________________________________________________Footer Dynamic Date
let footer_text = document.getElementById('footer_text')
footer_text.innerHTML += new Date().getFullYear()