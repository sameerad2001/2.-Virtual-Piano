/* 
Sameer Ahmed 
Fell free to contact me for any queries

Github : https://github.com/sameerad2001/PersonalWebsiteDemo/edit/master/README.md
Linkedin : https://www.linkedin.com/in/sameer-ahmed-0b7902176/
Email : Sameerad2001@gmail.com
*/

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


// ____________________________________________________________Button Prompt

// Async Function to play sound and wait for a specified delay
let play_sound_delay = async(key_time_array) => {

    for (let i = 0; i < key_time_array.length; i++) {
        // Eg : 'a,200' ----> key , delay
        // Eg : 'a,200' ----> split(',') ------> [ 'a' , '200']

        let key = key_time_array[i].split(',')[0];
        let delay = parseInt(key_time_array[i].split(',')[1]);

        // alert(key);
        switch (key) {
            // Normal Keys
            case 'a':
                animate(0, false)
                play_sound('A', false)
                break;

            case 'b':
                animate(1, false)
                play_sound('B', false)
                break;

            case 'c':
                animate(2, false)
                play_sound('C', false)
                break;

            case 'd':
                animate(3, false)
                play_sound('D', false)
                break;

            case 'e':
                animate(4, false)
                play_sound('E', false)
                break;

            case 'f':
                animate(5, false)
                play_sound('F', false)
                break;

            case 'g':
                animate(6, false)
                play_sound('G', false)
                break;

                // Sharp Keys
            case 'a_':
                animate(0, true)
                play_sound('A', true)
                break;
            case 'c_':
                animate(1, true)
                play_sound('C', true)
                break;
            case 'd_':
                animate(2, true)
                play_sound('D', true)
                break;
            case 'f_':
                animate(3, true)
                play_sound('F', true)
                break;
            case 'g_':
                animate(4, true)
                play_sound('G', true)
                break;
        }

        // await delay before iterating to the next item in loop
        // Only works in async functions
        await new Promise((resolve) => {
            setTimeout(resolve, delay)
        });
    }

}


function take_input() {
    let keys_to_be_pressed = prompt('Enter a sequence of keys and delays')

    // Eg : "a,200;c_,500;" ------> ['a,200' , 'c_,500']
    let key_time_array = keys_to_be_pressed.split(';')

    play_sound_delay(key_time_array)
}

let play_button = document.getElementsByClassName('auto_play', "a,500;b,500;c,500;d,500;e,0")
play_button[0].addEventListener('click', take_input);