// ____________________________________________________________Keyboard Presses
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        // Normal Keys
        case 'a':
            play_sound('A', false)
            break;

        case 's':
            play_sound('B', false)
            break;

        case 'd':
            play_sound('C', false)
            break;

        case 'f':
            play_sound('D', false)
            break;

        case 'g':
            play_sound('E', false)
            break;

        case 'h':
            play_sound('F', false)
            break;

        case 'j':
            play_sound('G', false)
            break;

            // Sharp Keys
        case 'w':
            play_sound('A', true)
            break;
        case 'e':
            play_sound('C', true)
            break;
        case 'r':
            play_sound('D', true)
            break;
        case 't':
            play_sound('F', true)
            break;
        case 'y':
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
        console.log(this.innerHTML)
        play_sound(piano_tiles[i].innerHTML, false)
    });
}

// Sharp Tiles : Click Event
let piano_tiles_sharp = document.getElementsByClassName('piano_tiles_sharp')

for (let i = 0; i < piano_tiles_sharp.length; i++) {
    piano_tiles_sharp[i].addEventListener('click', () => {
        play_sound(piano_tiles_sharp[i].innerHTML[0], true)
    });
}

// ____________________________________________________________Footer Dynamic Date
let footer_text = document.getElementById('footer_text')
footer_text.innerHTML += new Date().getFullYear()